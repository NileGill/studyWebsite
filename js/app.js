/* ==================================================================
   StudyLab — application
   Vanilla JS, no build step, no network. Opens straight from a file.
   ================================================================== */
(function () {
  'use strict';

  var view    = document.getElementById('view');
  var crumbs  = document.getElementById('crumbs');
  var toastEl = document.getElementById('toast');

  /* ================================================================
     Storage (wrapped — file:// can refuse localStorage)
     ================================================================ */
  var store = {
    get: function (k, fallback) {
      try {
        var v = window.localStorage.getItem('studylab:' + k);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem('studylab:' + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    },
    clear: function () {
      try {
        Object.keys(window.localStorage)
          .filter(function (k) { return k.indexOf('studylab:') === 0; })
          .forEach(function (k) { window.localStorage.removeItem(k); });
      } catch (e) { /* ignore */ }
    }
  };

  /* ================================================================
     Small helpers
     ================================================================ */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function uniq(arr) {
    var seen = {}, out = [];
    arr.forEach(function (x) { if (x && !seen[x]) { seen[x] = 1; out.push(x); } });
    return out;
  }

  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // drop accents
      .replace(/[‘’]/g, "'")
      .replace(/[…]/g, '')
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var ARTICLE_RE = /^(?:les|le|la|un|une|des)\s+|^l['’]\s*/i;

  /* Every spelling we'll happily accept for a French term. */
  function acceptVariants(fr) {
    var cleaned = String(fr)
      .replace(/\((?:m|f)[^)]*\)/gi, '')   // strip "(m.)", "(f.)", "(m/f)"
      .replace(/[…]/g, '')
      .trim();

    // Split only on a slash with spaces around it — that's how the gender
    // pairs are written ("le proviseur / la proviseure"). A bare slash is
    // part of the term itself ("il/elle/on") and must stay put.
    var chunks = cleaned.split(/\s+\/\s+/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s && !/^(?:les|le|la|un|une|l['’])$/i.test(s); });

    if (!chunks.length) chunks = [cleaned];
    chunks.push(cleaned);

    var out = [];
    chunks.forEach(function (c) {
      out.push(c);
      var bare = c.replace(ARTICLE_RE, '').trim();
      if (bare && bare !== c) out.push(bare);
    });

    // "surveillant.e" should also accept "surveillant" and "surveillante"
    out.slice().forEach(function (v) {
      if (v.indexOf('.e') > -1) {
        out.push(v.replace(/\.e/g, ''));
        out.push(v.replace(/\.e/g, 'e'));
      }
    });

    // Drop leftovers that start with punctuation, e.g. "/ la documentaliste".
    return uniq(out).filter(function (v) { return /^[0-9A-Za-zÀ-ÿ]/.test(v); });
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(function () { toastEl.classList.add('show'); });
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      toastEl.classList.remove('show');
      setTimeout(function () { toastEl.hidden = true; }, 250);
    }, 1900);
  }

  /* ================================================================
     Theme
     ================================================================ */
  var themeBtn  = document.getElementById('themeBtn');
  var themeIcon = document.getElementById('themeIcon');

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeIcon.textContent = t === 'dark' ? '☀️' : '🌙';
    themeBtn.title = t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  var savedTheme = store.get('theme', null);
  if (!savedTheme) {
    savedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(savedTheme);

  themeBtn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store.set('theme', next);
  });

  /* ================================================================
     Health meter
     ================================================================ */
  var healthEl   = document.getElementById('health');
  var faceEl     = document.getElementById('healthFace');
  var fillEl     = document.getElementById('healthFill');
  var labelEl    = document.getElementById('healthLabel');
  var streakEl   = document.getElementById('streak');

  var HP_STAGES = [
    { min: 90, face: '🤩', label: 'Unstoppable' },
    { min: 75, face: '😄', label: 'Feeling good' },
    { min: 60, face: '🙂', label: 'Doing fine' },
    { min: 45, face: '😐', label: 'Hmm…' },
    { min: 30, face: '😕', label: 'Getting rough' },
    { min: 15, face: '😠', label: 'Annoyed' },
    { min: 1,  face: '😡', label: 'Furious!' },
    { min: 0,  face: '💀', label: 'K.O.' }
  ];

  var HP = { value: 100, streak: 0, best: 0 };

  function stageFor(v) {
    for (var i = 0; i < HP_STAGES.length; i++) if (v >= HP_STAGES[i].min) return HP_STAGES[i];
    return HP_STAGES[HP_STAGES.length - 1];
  }

  function renderHealth(bump) {
    var st = stageFor(HP.value);
    faceEl.textContent = st.face;
    labelEl.textContent = st.label;
    fillEl.style.width = HP.value + '%';
    fillEl.className = 'health-fill' + (HP.value < 30 ? ' low' : HP.value < 60 ? ' mid' : '');

    if (HP.streak >= 2) {
      streakEl.hidden = false;
      streakEl.querySelector('b').textContent = HP.streak;
    } else {
      streakEl.hidden = true;
    }

    if (bump) {
      faceEl.classList.remove('bump');
      void faceEl.offsetWidth;          // restart the animation
      faceEl.classList.add('bump');
    }
  }

  function showHealth(on) {
    healthEl.hidden = !on;
  }

  function resetHealth() {
    HP.value = 100; HP.streak = 0; HP.best = 0;
    renderHealth(false);
  }

  function damage(amount) {
    HP.value = Math.max(0, HP.value - amount);
    HP.streak = 0;
    renderHealth(true);
  }

  function heal(amount) {
    HP.value = Math.min(100, HP.value + amount);
    HP.streak += 1;
    if (HP.streak > HP.best) HP.best = HP.streak;
    renderHealth(true);
  }

  /* ================================================================
     Question generation
     ================================================================ */
  var DEFAULT_FWD = 'What does <b>%s</b> mean?';
  function defaultRev(subject) {
    return 'How do you say <b>%s</b> in ' + (subject.lang || subject.subject) + '?';
  }

  function pickDistractors(pool, correctValue, field, n) {
    var options = uniq(pool.map(function (c) { return c[field]; }))
      .filter(function (v) { return v && norm(v) !== norm(correctValue); });
    return shuffle(options).slice(0, n);
  }

  function makeMC(prompt, correct, distractors, tag, explain) {
    if (distractors.length < 1) return null;
    var choices = shuffle([correct].concat(distractors));
    return {
      type: 'mc',
      tag: tag,
      prompt: prompt,
      choices: choices,
      answer: choices.indexOf(correct),
      explain: explain || ''
    };
  }

  /* Build a full question bank for a subject + deck scope. */
  function buildBank(subject, deckId, opts) {
    opts = opts || {};
    var wantMC   = opts.mc   !== false;
    var wantType = opts.type !== false;

    var decks = deckId === 'all'
      ? subject.decks
      : subject.decks.filter(function (d) { return d.id === deckId; });

    var scopeCards = [];
    decks.forEach(function (d) { scopeCards = scopeCards.concat(d.cards); });

    // Distractors come from the whole subject when a deck is small.
    var allCards = [];
    subject.decks.forEach(function (d) { allCards = allCards.concat(d.cards); });
    var pool = scopeCards.length >= 5 ? scopeCards : allCards;

    var bank = [];

    decks.forEach(function (deck) {
      var ask     = deck.ask || 'both';
      var fwdTpl  = deck.promptFwd || DEFAULT_FWD;
      var revTpl  = deck.promptRev || defaultRev(subject);
      var deckPool = deck.cards.length >= 5 ? deck.cards : pool;

      deck.cards.forEach(function (card) {
        var tag = deck.name;

        if (wantMC) {
          // French → English
          bank.push(makeMC(
            fwdTpl.replace('%s', esc(card.fr)),
            card.en,
            pickDistractors(deckPool, card.en, 'en', 3),
            tag, card.note || ''
          ));

          // English → French
          if (ask !== 'forward') {
            bank.push(makeMC(
              revTpl.replace('%s', esc(card.en)),
              card.fr,
              pickDistractors(deckPool, card.fr, 'fr', 3),
              tag, card.note || ''
            ));
          }

          // French definition → the word
          if (card.def) {
            bank.push(makeMC(
              esc(card.def),
              card.fr,
              pickDistractors(deckPool, card.fr, 'fr', 3),
              tag, card.note || ''
            ));
          }
        }

        if (wantType) {
          if (ask !== 'forward') {
            bank.push({
              type: 'type', tag: tag,
              prompt: revTpl.replace('%s', esc(card.en)),
              accept: acceptVariants(card.fr),
              display: card.fr,
              explain: card.note || ''
            });
          }
          if (card.fem && norm(card.fem) !== norm(card.fr)) {
            bank.push({
              type: 'type', tag: tag,
              prompt: 'Write the <b>feminine</b> form of <b>' + esc(card.fr) + '</b>.',
              accept: [card.fem],
              display: card.fem,
              explain: esc(card.fr) + ' → <b>' + esc(card.fem) + '</b>'
            });
          }
        }
      });
    });

    // Hand-written questions from the subject file
    var map = subject.quizDeckMap || {};
    subject.quizBank.forEach(function (q) {
      if (deckId !== 'all' && map[q.tag] !== deckId) return;
      if (q.type === 'mc'   && !wantMC)   return;
      if (q.type === 'type' && !wantType) return;
      bank.push(q);
    });

    return bank.filter(Boolean);
  }

  /* ================================================================
     Routing
     ================================================================ */
  /* `score` formats this mode's saved best. Modes without one never save. */
  var MODES = {
    flash:  { emoji: '🃏', name: 'Flashcards',   blurb: 'Flip through the vocab at your own pace.', health: false,
              score: null },
    quiz:   { emoji: '⚡', name: 'Practice Quiz', blurb: 'Multiple choice. Keep that emoji happy.',  health: true,
              score: function (v) { return '🏅 Best: ' + v + '%'; } },
    type:   { emoji: '✍️', name: 'Type It',       blurb: 'Spell it out. Accents optional.',          health: true,
              score: function (v) { return '🏅 Best: ' + v + '%'; } },
    match:  { emoji: '🧩', name: 'Match Up',      blurb: 'Pair French with English, against a clock.', health: true,
              score: function (v) { return '🏅 Best time: ' + v + 's'; } },
    sudden: { emoji: '💀', name: 'Sudden Death',  blurb: 'One mistake ends the run. How far can you get?', health: true,
              score: function (v) { return '🏅 Best streak: ' + v; } }
  };

  function go(hash) { window.location.hash = hash; }

  function parseHash() {
    var h = (window.location.hash || '').replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(decodeURIComponent);
  }

  function route() {
    var p = parseHash();
    var subjects = StudyData.all();

    if (!p.length) return renderHome(subjects);

    var subject = StudyData.get(p[1]);
    if (p[0] === 's' && subject)     return renderSubject(subject);
    if (p[0] === 'cheat' && subject) return renderCheat(subject);
    if (p[0] === 'play' && subject) {
      var mode = p[2], deckId = p[3] || 'all';
      if (MODES[mode]) return startMode(subject, mode, deckId);
    }
    renderHome(subjects);
  }

  window.addEventListener('hashchange', route);
  document.getElementById('homeBtn').addEventListener('click', function () { go('#/'); });

  document.getElementById('resetBtn').addEventListener('click', function () {
    if (window.confirm('Clear saved scores and theme?')) {
      store.clear();
      toast('Progress cleared 🧹');
      route();
    }
  });

  function setCrumbs(parts) {
    crumbs.innerHTML = parts.map(function (p, i) {
      var last = i === parts.length - 1;
      var el = last
        ? '<span class="now">' + esc(p.label) + '</span>'
        : '<button data-go="' + esc(p.href) + '">' + esc(p.label) + '</button>';
      return (i ? '<span class="sep">›</span>' : '') + el;
    }).join('');
    crumbs.querySelectorAll('[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { go(b.getAttribute('data-go')); });
    });
  }

  /* ================================================================
     View: Home — all subjects
     ================================================================ */
  function renderHome(subjects) {
    showHealth(false);
    setCrumbs([]);
    document.documentElement.style.removeProperty('--accent');

    if (!subjects.length) {
      view.innerHTML =
        '<div class="empty"><span class="big">📚</span>' +
        '<h2>No subjects loaded yet</h2>' +
        '<p>Drop a file in <code>data/</code> and add one <code>&lt;script&gt;</code> tag to <code>index.html</code>.<br>' +
        'See <b>README.md</b> for the recipe.</p></div>';
      return;
    }

    var cards = subjects.map(function (s) {
      var count = s.decks.reduce(function (n, d) { return n + d.cards.length; }, 0);
      var best = store.get('best:' + s.id, null);
      return '' +
        '<button class="tile" data-go="#/s/' + esc(s.id) + '">' +
          '<span class="tile-emoji">' + s.emoji + '</span>' +
          '<span class="tile-title">' + esc(s.subject) + ' · ' + esc(s.title) + '</span>' +
          '<span class="tile-sub">' + esc(s.subtitle) + '</span>' +
          '<span class="tile-foot">' + count + ' terms · ' + s.decks.length + ' decks' +
            (best ? ' · best ' + best + '%' : '') + '</span>' +
        '</button>';
    }).join('');

    view.innerHTML =
      '<div class="hero">' +
        '<span class="eyebrow">🧪 Study Lab</span>' +
        '<h1>Pick something to study <span>📚</span></h1>' +
        '<p>Flashcards, quizzes, and a very judgemental emoji that tracks how you are doing.</p>' +
      '</div>' +
      '<div class="grid cols-2">' + cards + '</div>' +
      '<h2 class="section-title">Adding a subject <small>quick reminder</small></h2>' +
      '<div class="card note-card">' +
        '<p class="muted" style="margin:0">Make a folder for the material, add a matching file in ' +
        '<code>data/</code>, then add one <code>&lt;script src="data/…"&gt;</code> line to ' +
        '<code>index.html</code>. Everything else — modes, health bar, themes — works automatically. ' +
        'The full schema is in <b>README.md</b>.</p>' +
      '</div>';

    wireGo();
  }

  /* ================================================================
     View: Subject — modes + decks
     ================================================================ */
  function renderSubject(s) {
    showHealth(false);
    setCrumbs([{ label: 'Subjects', href: '#/' }, { label: s.subject + ' · ' + s.title }]);
    document.documentElement.style.setProperty('--accent', s.accent);

    var deckId = store.get('deck:' + s.id, 'all');
    if (deckId !== 'all' && !s.decks.some(function (d) { return d.id === deckId; })) deckId = 'all';

    var totalCards = s.decks.reduce(function (n, d) { return n + d.cards.length; }, 0);

    var deckChips = '<button class="chip' + (deckId === 'all' ? ' on' : '') + '" data-deck="all">' +
                      '🎲 Everything (' + totalCards + ')</button>' +
      s.decks.map(function (d) {
        return '<button class="chip' + (deckId === d.id ? ' on' : '') + '" data-deck="' + esc(d.id) + '">' +
                 d.emoji + ' ' + esc(d.name) + ' (' + d.cards.length + ')</button>';
      }).join('');

    var modeTiles = Object.keys(MODES).map(function (k) {
      var m = MODES[k];
      var best = store.get('best:' + s.id + ':' + k, null);
      return '' +
        '<button class="tile" data-mode="' + k + '">' +
          '<span class="tile-emoji">' + m.emoji + '</span>' +
          '<span class="tile-title">' + m.name + '</span>' +
          '<span class="tile-sub">' + m.blurb + '</span>' +
          '<span class="tile-foot">' + (m.score && best ? m.score(best) : 'Not tried yet') + '</span>' +
        '</button>';
    }).join('');

    var checklist = (s.checklist || []).length
      ? '<h2 class="section-title">Review checklist <small>straight from the slides</small></h2>' +
        '<ul class="checklist">' + s.checklist.map(function (c) { return '<li><span>' + c + '</span></li>'; }).join('') + '</ul>'
      : '';

    view.innerHTML =
      '<div class="hero">' +
        '<span class="eyebrow">' + s.emoji + ' ' + esc(s.subject) + '</span>' +
        '<h1>' + esc(s.title) + '</h1>' +
        '<p>' + esc(s.subtitle) + '</p>' +
      '</div>' +

      '<h2 class="section-title">1 · What to study <small>this choice sticks</small></h2>' +
      '<div class="chips" id="deckChips">' + deckChips + '</div>' +

      '<h2 class="section-title">2 · How to study</h2>' +
      '<div class="grid cols-3">' + modeTiles + '</div>' +

      '<h2 class="section-title">Reference</h2>' +
      '<div class="grid cols-2">' +
        '<button class="tile" data-go="#/cheat/' + esc(s.id) + '">' +
          '<span class="tile-emoji">📖</span>' +
          '<span class="tile-title">Cheat Sheet</span>' +
          '<span class="tile-sub">Every word, every rule, and the original photos.</span>' +
          '<span class="tile-foot">No pressure, no scoring</span>' +
        '</button>' +
      '</div>' +
      checklist;

    wireGo();

    view.querySelectorAll('#deckChips .chip').forEach(function (b) {
      b.addEventListener('click', function () {
        deckId = b.getAttribute('data-deck');
        store.set('deck:' + s.id, deckId);
        view.querySelectorAll('#deckChips .chip').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });

    view.querySelectorAll('[data-mode]').forEach(function (b) {
      b.addEventListener('click', function () {
        go('#/play/' + s.id + '/' + b.getAttribute('data-mode') + '/' + deckId);
      });
    });
  }

  function wireGo() {
    view.querySelectorAll('[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { go(b.getAttribute('data-go')); });
    });
  }

  function deckLabel(s, deckId) {
    if (deckId === 'all') return 'Everything';
    var d = s.decks.filter(function (x) { return x.id === deckId; })[0];
    return d ? d.name : 'Everything';
  }

  function modeHeader(s, mode, deckId) {
    var m = MODES[mode];
    setCrumbs([
      { label: 'Subjects', href: '#/' },
      { label: s.title, href: '#/s/' + s.id },
      { label: m.name + ' · ' + deckLabel(s, deckId) }
    ]);
    document.documentElement.style.setProperty('--accent', s.accent);
    showHealth(m.health);
    if (m.health) resetHealth();
  }

  /* ================================================================
     Mode dispatch
     ================================================================ */
  function startMode(s, mode, deckId) {
    modeHeader(s, mode, deckId);
    detachKeys();
    if (mode === 'flash')  return runFlash(s, deckId);
    if (mode === 'quiz')   return runQuiz(s, deckId, { kind: 'quiz' });
    if (mode === 'type')   return runQuiz(s, deckId, { kind: 'type' });
    if (mode === 'match')  return runMatch(s, deckId);
    if (mode === 'sudden') return runQuiz(s, deckId, { kind: 'sudden' });
  }

  /* Keyboard handling that never leaks between modes. */
  var keyHandler = null;
  function attachKeys(fn) { detachKeys(); keyHandler = fn; document.addEventListener('keydown', keyHandler); }
  function detachKeys() { if (keyHandler) { document.removeEventListener('keydown', keyHandler); keyHandler = null; } }

  function scopeCards(s, deckId) {
    var out = [];
    s.decks.forEach(function (d) {
      if (deckId === 'all' || d.id === deckId) out = out.concat(d.cards);
    });
    return out;
  }

  /* ================================================================
     Mode: Flashcards
     ================================================================ */
  function runFlash(s, deckId) {
    var cards = shuffle(scopeCards(s, deckId));
    if (!cards.length) return renderEmpty();

    var i = 0, flipped = false, known = 0;

    view.innerHTML =
      '<div class="stage">' +
        '<div class="counter"><span id="fPos"></span> · <span id="fKnown"></span> marked known</div>' +
        '<div class="progress-line"><div id="fBar"></div></div>' +
        '<div class="flip-wrap"><div class="flip" id="flip">' +
          '<div class="flip-face front">' +
            '<div class="flip-tag" id="fTag"></div>' +
            '<div class="flip-term" id="fFront"></div>' +
            '<div class="flip-hint">click the card or press <b>Space</b> to flip</div>' +
          '</div>' +
          '<div class="flip-face back">' +
            '<div class="flip-tag">Answer</div>' +
            '<div class="flip-term" id="fBack"></div>' +
            '<div class="flip-sub" id="fDef"></div>' +
            '<div class="flip-note" id="fNote" hidden></div>' +
          '</div>' +
        '</div></div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-ghost" id="fPrev">← Back</button>' +
          '<button class="btn" id="fAgain">🔁 Study again</button>' +
          '<button class="btn btn-primary" id="fKnow">✅ Got it</button>' +
          '<button class="btn btn-ghost" id="fNext">Skip →</button>' +
        '</div>' +
        '<button class="linky" id="fDone">Finish and go back</button>' +
      '</div>';

    var flip   = document.getElementById('flip');
    var elPos  = document.getElementById('fPos');
    var elBar  = document.getElementById('fBar');
    var elKn   = document.getElementById('fKnown');

    function draw() {
      var c = cards[i];
      var wasFlipped = flip.classList.contains('flipped');
      flipped = false;
      flip.classList.remove('flipped');

      // If the card was showing its answer, wait until it has rotated past
      // edge-on before swapping in the next one — otherwise the new answer
      // is briefly visible on the way back.
      setTimeout(function () {
        document.getElementById('fTag').textContent   = c.deckName || '';
        document.getElementById('fFront').textContent = c.fr;
        document.getElementById('fBack').textContent  = c.en;
        document.getElementById('fDef').textContent   = c.def || (c.fem && c.fem !== c.fr ? 'feminine: ' + c.fem : '');
        var note = document.getElementById('fNote');
        note.hidden = !c.note;
        if (c.note) note.innerHTML = c.note;
      }, wasFlipped ? 300 : 0);

      elPos.textContent = 'Card ' + (i + 1) + ' of ' + cards.length;
      elKn.textContent  = known;
      elBar.style.width = ((i) / cards.length * 100) + '%';
    }

    function next(markKnown) {
      if (markKnown) known++;
      if (i >= cards.length - 1) {
        elBar.style.width = '100%';
        return flashDone();
      }
      i++; draw();
    }

    function flashDone() {
      view.innerHTML =
        '<div class="result">' +
          '<div class="result-face">' + (known === cards.length ? '🏆' : known > cards.length / 2 ? '😄' : '📚') + '</div>' +
          '<h2>Deck finished!</h2>' +
          '<p class="result-sub">You marked <b>' + known + '</b> of <b>' + cards.length + '</b> as known.</p>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn btn-primary" data-go="#/play/' + s.id + '/flash/' + deckId + '">🔁 Go again</button>' +
            '<button class="btn btn-ghost" data-go="#/play/' + s.id + '/quiz/' + deckId + '">⚡ Try the quiz</button>' +
            '<button class="btn btn-ghost" data-go="#/s/' + s.id + '">← Modes</button>' +
          '</div>' +
        '</div>';
      wireGo();
      detachKeys();
    }

    function doFlip() { flipped = !flipped; flip.classList.toggle('flipped', flipped); }

    flip.addEventListener('click', doFlip);
    document.getElementById('fKnow').addEventListener('click', function () { next(true); });
    document.getElementById('fNext').addEventListener('click', function () { next(false); });
    document.getElementById('fAgain').addEventListener('click', function () {
      cards.push(cards[i]);                 // see it again at the end
      next(false);
    });
    document.getElementById('fPrev').addEventListener('click', function () {
      if (i > 0) { i--; draw(); }
    });
    document.getElementById('fDone').addEventListener('click', function () { go('#/s/' + s.id); });

    attachKeys(function (e) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); doFlip(); }
      else if (e.key === 'ArrowRight') next(false);
      else if (e.key === 'ArrowLeft' && i > 0) { i--; draw(); }
      else if (e.key.toLowerCase() === 'k') next(true);
    });

    draw();
  }

  /* ================================================================
     Modes: Quiz / Type It / Sudden Death
     ================================================================ */
  function runQuiz(s, deckId, cfg) {
    var sudden = cfg.kind === 'sudden';
    var typeOnly = cfg.kind === 'type';

    var bank = shuffle(buildBank(s, deckId, {
      mc:   !typeOnly,
      type: typeOnly || sudden
    }));

    if (!bank.length) return renderEmpty();

    var LIMIT = sudden ? Infinity : Math.min(bank.length, typeOnly ? 14 : 18);
    var idx = 0, right = 0, wrong = 0, answered = false;
    var missed = [];

    function currentQuestion() {
      // Sudden death loops the bank forever, reshuffled each lap.
      if (idx >= bank.length) { bank = shuffle(bank); idx = 0; }
      return bank[idx];
    }

    function render() {
      var q = currentQuestion();
      answered = false;

      var body;
      if (q.type === 'mc') {
        body = '<div class="choices">' + q.choices.map(function (c, n) {
          return '<button class="choice" data-i="' + n + '">' +
                   '<span class="key">' + (n + 1) + '</span><span>' + esc(c) + '</span>' +
                 '</button>';
        }).join('') + '</div>';
      } else {
        body =
          '<input class="answer-input" id="ansIn" type="text" autocomplete="off" autocapitalize="off" ' +
            'autocorrect="off" spellcheck="false" placeholder="Type your answer…">' +
          '<div class="accents">' +
            ['à', 'â', 'ç', 'é', 'è', 'ê', 'ë', 'î', 'ï', 'ô', 'ù', 'û', '’'].map(function (a) {
              return '<button class="accent-key" data-acc="' + a + '">' + a + '</button>';
            }).join('') +
          '</div>' +
          '<div class="btn-row" style="margin-top:14px">' +
            '<button class="btn btn-primary" id="ansGo">Check ⏎</button>' +
            '<button class="btn btn-ghost" id="ansSkip">Skip</button>' +
          '</div>';
      }

      var progress = sudden
        ? '<div class="counter">Streak <b class="mono">' + right + '</b> · one mistake ends it 💀</div>'
        : '<div class="counter">Question ' + (idx + 1) + ' of ' + LIMIT + '</div>' +
          '<div class="progress-line"><div style="width:' + (idx / LIMIT * 100) + '%"></div></div>';

      view.innerHTML =
        '<div class="stage">' + progress +
          '<div class="q-card">' +
            '<div class="q-tag">' + esc(q.tag || '') + '</div>' +
            '<div class="q-prompt">' + q.prompt + '</div>' +
            body +
            '<div id="fb"></div>' +
          '</div>' +
          '<button class="linky" id="quitBtn">Quit to modes</button>' +
        '</div>';

      document.getElementById('quitBtn').addEventListener('click', function () { go('#/s/' + s.id); });

      if (q.type === 'mc') {
        view.querySelectorAll('.choice').forEach(function (b) {
          b.addEventListener('click', function () { judgeMC(q, parseInt(b.getAttribute('data-i'), 10)); });
        });
        attachKeys(function (e) {
          if (answered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); return advance(); }
          var n = parseInt(e.key, 10);
          if (!answered && n >= 1 && n <= q.choices.length) judgeMC(q, n - 1);
        });
      } else {
        var input = document.getElementById('ansIn');
        input.focus();
        view.querySelectorAll('[data-acc]').forEach(function (b) {
          b.addEventListener('click', function () {
            insertAtCursor(input, b.getAttribute('data-acc'));
          });
        });
        document.getElementById('ansGo').addEventListener('click', function () { judgeTyped(q, input.value); });
        document.getElementById('ansSkip').addEventListener('click', function () { judgeTyped(q, ''); });
        attachKeys(function (e) {
          if (e.key !== 'Enter') return;
          e.preventDefault();
          if (answered) advance(); else judgeTyped(q, input.value);
        });
      }
    }

    function insertAtCursor(input, text) {
      var start = input.selectionStart, end = input.selectionEnd;
      input.value = input.value.slice(0, start) + text + input.value.slice(end);
      input.selectionStart = input.selectionEnd = start + text.length;
      input.focus();
    }

    function judgeMC(q, choiceIdx) {
      if (answered) return;
      answered = true;
      var ok = choiceIdx === q.answer;

      view.querySelectorAll('.choice').forEach(function (b, n) {
        b.disabled = true;
        if (n === q.answer) b.classList.add('correct');
        else if (n === choiceIdx) b.classList.add('wrong');
      });

      finishQuestion(q, ok, q.choices[q.answer], q.choices[choiceIdx]);
    }

    function judgeTyped(q, raw) {
      if (answered) return;
      answered = true;
      var given = norm(raw);
      var ok = given.length > 0 && q.accept.some(function (a) { return norm(a) === given; });

      var input = document.getElementById('ansIn');
      input.classList.add(ok ? 'correct' : 'wrong');
      input.disabled = true;
      document.getElementById('ansGo').disabled = true;
      document.getElementById('ansSkip').disabled = true;
      view.querySelectorAll('[data-acc]').forEach(function (b) { b.disabled = true; });

      finishQuestion(q, ok, q.display || q.accept[0], raw);
    }

    function finishQuestion(q, ok, correctText, givenText) {
      if (ok) {
        right++;
        heal(sudden ? 3 : 7);
      } else {
        wrong++;
        if (sudden) { HP.value = 0; HP.streak = 0; renderHealth(true); }
        else damage(16);
        missed.push({ q: q.prompt, a: correctText, given: givenText });
      }

      var cheer = ['Nice 🎉', 'Correct ✅', 'Yes! 🙌', 'Exactly 💯', 'Bien joué 🇫🇷'];
      var boo   = ['Not quite 😬', 'Nope ❌', 'So close 🫤', 'Almost 😕'];

      var fb = document.getElementById('fb');
      fb.className = 'feedback ' + (ok ? 'ok' : 'no');
      fb.innerHTML =
        '<div class="fb-head">' +
          (ok ? cheer[Math.floor(Math.random() * cheer.length)] + (HP.streak >= 3 ? '  🔥 ' + HP.streak + ' in a row!' : '')
              : boo[Math.floor(Math.random() * boo.length)]) +
        '</div>' +
        '<div class="fb-body">' +
          (ok ? '' : 'Answer: <b>' + esc(correctText) + '</b>' + (q.explain ? '<br>' : '')) +
          (q.explain || '') +
        '</div>' +
        '<div class="btn-row" style="margin-top:12px">' +
          '<button class="btn btn-primary btn-sm" id="nextBtn">' +
            (HP.value <= 0 || idx + 1 >= LIMIT ? 'See results →' : 'Next question ⏎') +
          '</button>' +
        '</div>';

      document.getElementById('nextBtn').addEventListener('click', advance);
      document.getElementById('nextBtn').focus();
    }

    function advance() {
      if (HP.value <= 0) return results(true);
      idx++;
      if (idx >= LIMIT) return results(false);
      render();
    }

    function results(ko) {
      detachKeys();
      var total = right + wrong;
      var pct = total ? Math.round(right / total * 100) : 0;

      var scoreKey = 'best:' + s.id + ':' + cfg.kind;
      var scoreValue = sudden ? right : pct;
      var prevBest = store.get(scoreKey, null);
      var isBest = prevBest === null || scoreValue > prevBest;
      if (isBest) store.set(scoreKey, scoreValue);
      if (!sudden) {
        var subjBest = store.get('best:' + s.id, null);
        if (subjBest === null || pct > subjBest) store.set('best:' + s.id, pct);
      }

      var face, headline;
      if (ko && sudden)       { face = '💀'; headline = 'Run over!'; }
      else if (ko)            { face = '💀'; headline = 'Out of health!'; }
      else if (pct === 100)   { face = '🏆'; headline = 'Perfect run!'; }
      else if (pct >= 85)     { face = '🤩'; headline = 'Excellent'; }
      else if (pct >= 70)     { face = '😄'; headline = 'Solid work'; }
      else if (pct >= 50)     { face = '🙂'; headline = 'Getting there'; }
      else                    { face = '😕'; headline = 'Needs another pass'; }

      var reviewHtml = missed.length
        ? '<div class="review-list"><h4>Worth another look (' + missed.length + ')</h4>' +
          missed.slice(0, 8).map(function (m) {
            return '<div class="review-item">' +
                     '<div class="rq">' + m.q + '</div>' +
                     '<div class="ra">→ ' + esc(m.a) + '</div>' +
                   '</div>';
          }).join('') +
          (missed.length > 8 ? '<p class="muted" style="font-size:.85rem">…and ' + (missed.length - 8) + ' more.</p>' : '') +
          '</div>'
        : '';

      view.innerHTML =
        '<div class="result">' +
          '<div class="result-face">' + face + '</div>' +
          '<h2>' + headline + '</h2>' +
          '<p class="result-sub">' +
            (sudden
              ? 'You answered <b>' + right + '</b> in a row.'
              : 'You scored <b>' + pct + '%</b> on ' + esc(deckLabel(s, deckId)) + '.') +
            (isBest && scoreValue > 0 ? ' <b>New personal best! 🏅</b>' : '') +
          '</p>' +
          '<div class="stats">' +
            '<div class="stat good"><b>' + right + '</b><span>Correct</span></div>' +
            '<div class="stat bad"><b>' + wrong + '</b><span>Missed</span></div>' +
            '<div class="stat"><b>' + HP.best + '</b><span>Best streak</span></div>' +
          '</div>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn btn-primary" data-go="#/play/' + s.id + '/' + cfg.kind + '/' + deckId + '">🔁 Again</button>' +
            '<button class="btn btn-ghost" data-go="#/cheat/' + s.id + '">📖 Cheat sheet</button>' +
            '<button class="btn btn-ghost" data-go="#/s/' + s.id + '">← Modes</button>' +
          '</div>' +
          reviewHtml +
        '</div>';

      // data-go handlers, plus a forced re-run when the target is the current hash
      view.querySelectorAll('[data-go]').forEach(function (b) {
        b.addEventListener('click', function () {
          var target = b.getAttribute('data-go');
          if (window.location.hash === target) route(); else go(target);
        });
      });
    }

    render();
  }

  /* ================================================================
     Mode: Match Up
     ================================================================ */
  function runMatch(s, deckId) {
    var all = scopeCards(s, deckId).filter(function (c) { return c.fr && c.en; });
    if (all.length < 4) return renderEmpty();

    var ROUND = Math.min(6, all.length);
    var picked = shuffle(all).slice(0, ROUND);

    var tiles = shuffle(
      picked.map(function (c, i) { return { key: i, side: 'fr', text: c.fr }; })
        .concat(picked.map(function (c, i) { return { key: i, side: 'en', text: c.en }; }))
    );

    var sel = null, solved = 0, mistakes = 0, locked = false;
    var started = Date.now();

    view.innerHTML =
      '<div class="stage">' +
        '<div class="counter" id="mInfo"></div>' +
        '<div class="match-grid" id="mGrid">' +
          tiles.map(function (t, n) {
            return '<button class="match-tile" data-n="' + n + '">' + esc(t.text) + '</button>';
          }).join('') +
        '</div>' +
        '<button class="linky" id="quitBtn">Quit to modes</button>' +
      '</div>';

    document.getElementById('quitBtn').addEventListener('click', function () { go('#/s/' + s.id); });

    var info = document.getElementById('mInfo');
    function updateInfo() {
      info.innerHTML = 'Matched <b>' + solved + '</b> / ' + ROUND + ' · ' + mistakes + ' mistake' + (mistakes === 1 ? '' : 's');
    }
    updateInfo();

    var btns = view.querySelectorAll('.match-tile');

    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (locked || b.classList.contains('gone')) return;
        var n = parseInt(b.getAttribute('data-n'), 10);
        var t = tiles[n];

        if (sel === null) {
          sel = n;
          b.classList.add('picked');
          return;
        }
        if (sel === n) {                 // clicking the same tile deselects
          sel = null;
          b.classList.remove('picked');
          return;
        }

        var prev = btns[sel], prevT = tiles[sel];
        locked = true;

        if (prevT.key === t.key && prevT.side !== t.side) {
          prev.classList.remove('picked');
          prev.classList.add('hit');
          b.classList.add('hit');
          solved++;
          heal(6);
          updateInfo();
          setTimeout(function () {
            prev.classList.add('gone');
            b.classList.add('gone');
            sel = null; locked = false;
            if (solved === ROUND) matchDone();
          }, 420);
        } else {
          prev.classList.remove('picked');
          prev.classList.add('miss');
          b.classList.add('miss');
          mistakes++;
          damage(12);
          updateInfo();
          setTimeout(function () {
            prev.classList.remove('miss');
            b.classList.remove('miss');
            sel = null; locked = false;
            if (HP.value <= 0) matchDone(true);
          }, 480);
        }
      });
    });

    function matchDone(ko) {
      detachKeys();
      var secs = Math.max(1, Math.round((Date.now() - started) / 1000));
      var face = ko ? '💀' : mistakes === 0 ? '🏆' : mistakes <= 2 ? '🤩' : '🙂';

      var key = 'best:' + s.id + ':match';   // best = fastest clear, in seconds
      var prev = store.get(key, null);
      var isBest = !ko && (prev === null || secs < prev);
      if (isBest) store.set(key, secs);

      view.innerHTML =
        '<div class="result">' +
          '<div class="result-face">' + face + '</div>' +
          '<h2>' + (ko ? 'Out of health!' : 'All matched!') + '</h2>' +
          '<p class="result-sub">' +
            (ko ? 'The emoji gave up on you. Try again 😅'
                : 'Cleared ' + ROUND + ' pairs in <b>' + secs + 's</b>.') +
            (isBest && !ko ? ' <b>New best time! 🏅</b>' : '') +
          '</p>' +
          '<div class="stats">' +
            '<div class="stat good"><b>' + solved + '</b><span>Matched</span></div>' +
            '<div class="stat bad"><b>' + mistakes + '</b><span>Mistakes</span></div>' +
            '<div class="stat"><b>' + secs + 's</b><span>Time</span></div>' +
          '</div>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn btn-primary" data-go="#/play/' + s.id + '/match/' + deckId + '">🔁 Again</button>' +
            '<button class="btn btn-ghost" data-go="#/s/' + s.id + '">← Modes</button>' +
          '</div>' +
        '</div>';

      view.querySelectorAll('[data-go]').forEach(function (b) {
        b.addEventListener('click', function () {
          var target = b.getAttribute('data-go');
          if (window.location.hash === target) route(); else go(target);
        });
      });
    }
  }

  /* ================================================================
     View: Cheat sheet
     ================================================================ */
  function renderCheat(s) {
    showHealth(false);
    detachKeys();
    setCrumbs([
      { label: 'Subjects', href: '#/' },
      { label: s.title, href: '#/s/' + s.id },
      { label: 'Cheat sheet' }
    ]);
    document.documentElement.style.setProperty('--accent', s.accent);

    var notes = (s.notes || []).map(function (n) {
      return '<div class="card note-card"><h3>' + (n.emoji || '📌') + ' ' + esc(n.title) + '</h3>' + n.html + '</div>';
    }).join('');

    var tables = s.decks.map(function (d) {
      var hasDef = d.cards.some(function (c) { return c.def; });
      var hasFem = d.cards.some(function (c) { return c.fem; });
      return '' +
        '<h2 class="section-title">' + d.emoji + ' ' + esc(d.name) +
          '<small>' + esc(d.description || '') + ' · ' + d.cards.length + ' terms</small></h2>' +
        '<div class="table-wrap"><table class="vocab-table">' +
          '<thead><tr><th>Français</th>' +
            (hasFem ? '<th>Féminin</th>' : '') +
            '<th>English</th>' +
            (hasDef ? '<th>Définition</th>' : '') +
          '</tr></thead><tbody>' +
          d.cards.map(function (c) {
            return '<tr>' +
              '<td class="fr">' + esc(c.fr) + '</td>' +
              (hasFem ? '<td class="fr">' + esc(c.fem || (c.same ? c.fr : '—')) + '</td>' : '') +
              '<td class="en">' + esc(c.en) + (c.note ? '<br><span class="df">' + c.note + '</span>' : '') + '</td>' +
              (hasDef ? '<td class="df">' + esc(c.def || '') + '</td>' : '') +
            '</tr>';
          }).join('') +
        '</tbody></table></div>';
    }).join('');

    var gallery = (s.gallery || []).length
      ? '<h2 class="section-title">📷 Original material <small>tap to open full size</small></h2>' +
        '<div class="gallery">' + s.gallery.map(function (g) {
          return '<a href="' + esc(g.src) + '" target="_blank" rel="noopener">' +
                   '<img src="' + esc(g.src) + '" alt="' + esc(g.label) + '" loading="lazy">' +
                   '<span>' + esc(g.label) + '</span></a>';
        }).join('') + '</div>'
      : '';

    view.innerHTML =
      '<div class="hero">' +
        '<span class="eyebrow">📖 Cheat sheet</span>' +
        '<h1>' + esc(s.title) + '</h1>' +
        '<p>Everything in one place. No score, no health bar, no judgement.</p>' +
      '</div>' +
      (notes ? '<h2 class="section-title">Rules to remember</h2><div class="grid cols-2">' + notes + '</div>' : '') +
      tables +
      gallery +
      '<div class="btn-row" style="margin-top:30px">' +
        '<button class="btn btn-primary" data-go="#/play/' + s.id + '/quiz/all">⚡ Quiz me on all of it</button>' +
        '<button class="btn btn-ghost" data-go="#/s/' + s.id + '">← Modes</button>' +
      '</div>';

    wireGo();
    window.scrollTo(0, 0);
  }

  function renderEmpty() {
    view.innerHTML =
      '<div class="empty"><span class="big">🤔</span>' +
      '<h2>Not enough material here</h2>' +
      '<p>This deck needs a few more terms before that mode works.</p></div>';
  }

  /* ================================================================
     Boot
     ================================================================ */
  renderHealth(false);
  route();
})();
