/* ------------------------------------------------------------------
   StudyData — the tiny registry every subject file plugs into.

   To add a subject:
     1. Create data/<something>.js
     2. Call StudyData.register({ ...see schema in README.md... })
     3. Add <script src="data/<something>.js"></script> to index.html
   ------------------------------------------------------------------ */
window.StudyData = (function () {
  'use strict';

  var subjects = [];

  function register(subject) {
    if (!subject || !subject.id) {
      console.error('StudyData.register: subject needs an "id".', subject);
      return;
    }
    if (subjects.some(function (s) { return s.id === subject.id; })) {
      console.warn('StudyData.register: duplicate id "' + subject.id + '" ignored.');
      return;
    }

    // Fill in defaults so subject files can stay short.
    subject.emoji    = subject.emoji    || '📘';
    subject.subtitle = subject.subtitle || '';
    subject.subject  = subject.subject  || 'Other';   // the class it belongs to
    subject.date     = subject.date     || null;      // YYYY-MM-DD, when it was made
    subject.accent   = subject.accent   || '#6366f1';
    subject.decks    = subject.decks    || [];
    subject.quizBank    = subject.quizBank    || [];
    subject.quizDeckMap = subject.quizDeckMap || {};
    subject.notes       = subject.notes       || [];
    subject.gallery     = subject.gallery     || [];
    subject.checklist   = subject.checklist   || [];

    subject.decks.forEach(function (deck, i) {
      deck.id    = deck.id    || (subject.id + '-deck-' + i);
      deck.emoji = deck.emoji || '🗂️';
      deck.cards = (deck.cards || []).filter(function (c) { return c && c.fr && c.en; });
      deck.cards.forEach(function (c) { c.deckId = deck.id; c.deckName = deck.name; });
    });

    subjects.push(subject);
  }

  function slugify(s) {
    return String(s).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /* Group the registered sets into classes by their `subject` field.
     Newest set first inside each class, so the thing you're about to be
     tested on is the first thing you see. */
  function classes() {
    var order = [], byName = {};

    subjects.forEach(function (s) {
      var name = s.subject;
      if (!byName[name]) {
        byName[name] = { name: name, slug: slugify(name), sets: [], emoji: s.emoji };
        order.push(byName[name]);
      }
      var c = byName[name];
      c.sets.push(s);
      if (s.classEmoji) c.emoji = s.classEmoji;
    });

    order.forEach(function (c) {
      c.sets.sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
      c.latest = c.sets[0].date || null;
      c.terms  = c.sets.reduce(function (n, s) {
        return n + s.decks.reduce(function (m, d) { return m + d.cards.length; }, 0);
      }, 0);
    });

    return order;
  }

  return {
    register: register,
    all: function () { return subjects.slice(); },
    get: function (id) {
      return subjects.filter(function (s) { return s.id === id; })[0] || null;
    },
    classes: classes,
    getClass: function (slug) {
      return classes().filter(function (c) { return c.slug === slug; })[0] || null;
    },
    classOf: function (subject) {
      return classes().filter(function (c) { return c.name === subject.subject; })[0] || null;
    },
    slugify: slugify
  };
})();
