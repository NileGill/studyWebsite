/* ==================================================================
   Français 2 — Unité 1, Communiquons 2
   Source: pink list p.7 & p.8, the U1C2 worksheet, and the review
   checklist in frenchUnitOneQuiz/.
   ================================================================== */
StudyData.register({
  id: 'french-u1c2',
  subject: 'French',
  title: 'Unité 1 · Communiquons 2',
  subtitle: "L'école — endroits, personnel & adjectifs",
  lang: 'French',
  emoji: '🥖',   // flag emoji don't render on Windows, so: baguette.
  accent: '#7c5cff',

  /* The teacher's review checklist, shown on the subject page. */
  checklist: [
    "I know the places and people vocabulary on page 7 of the pink list, plus <em>un ordinateur</em> and <em>malade</em>.",
    "I know when and how to use <em>à la</em>, <em>à l&rsquo;</em>, <em>au</em>, and <em>aux</em>.",
    "I know what the adjectives on page 8 mean, and I can write them in masculine <em>and</em> feminine forms.",
    "I have reviewed the U1C2 worksheet."
  ],

  gallery: [
    { src: 'frenchUnitOneQuiz/pinkListP7.JPG',            label: 'Pink list — p. 7' },
    { src: 'frenchUnitOneQuiz/pinkListP8.JPG',            label: 'Pink list — p. 8' },
    { src: 'frenchUnitOneQuiz/U1C2P1.JPG',                label: 'Worksheet — p. 1' },
    { src: 'frenchUnitOneQuiz/U1C2P2.JPG',                label: 'Worksheet — p. 2' },
    { src: 'frenchUnitOneQuiz/agendaSlidesChecklist.png', label: 'Review checklist' }
  ],

  decks: [
    /* ---------------------------------------------------------- */
    {
      id: 'endroits',
      name: "Les endroits de l'école",
      emoji: '🏫',
      description: 'Places in the school',
      cards: [
        { fr: "l'accueil (m.)",          en: 'the reception / front desk',   def: "l'endroit pour les visiteurs" },
        { fr: 'le bureau central',       en: 'the main office',              def: "l'endroit où l'administration travaille" },
        { fr: 'le couloir',              en: 'the hallway',                  def: "l'endroit qui connecte les salles de classe" },
        { fr: 'le foyer',                en: 'the student lounge',           def: "l'endroit où les élèves passent du temps entre les cours" },
        { fr: "l'infirmerie (f.)",       en: "the nurse's office",           def: "l'endroit où les élèves vont quand ils sont malades" },
        { fr: "la salle d'informatique", en: 'the computer lab',             def: "l'endroit avec des ordinateurs" },
        { fr: 'le laboratoire',          en: 'the laboratory / science lab', def: "l'endroit où on fait des expériences de science",
          note: '⚠️ Not the bathroom! A <em>laboratoire</em> is a science lab.' },
        { fr: 'le complexe sportif',     en: 'the sports complex',           def: "l'endroit qui est similaire à un gymnase" },
        { fr: 'le terrain de sport',     en: 'the sports field',             def: "l'endroit où on joue au football" },
        { fr: 'le parking',              en: 'the parking lot',              def: "l'endroit où on gare les voitures" },
        { fr: 'le CDI',                  en: 'the library / learning commons', def: "l'endroit qui est similaire au Learning Commons",
          note: 'Short for <em>centre de documentation et d&rsquo;information</em> — where the <em>documentaliste</em> works.' },
        { fr: 'la salle de classe',      en: 'the classroom' },
        { fr: 'un ordinateur',           en: 'a computer' },
        { fr: 'malade',                  en: 'sick / ill' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'personnel',
      name: "Le personnel de l'école",
      emoji: '🧑‍🏫',
      description: 'The people who work at school',
      cards: [
        { fr: 'le proviseur / la proviseure', en: 'the principal',
          def: "la personne qui est le chef de l'école" },
        { fr: 'le proviseur-adjoint / la proviseure-adjointe', en: 'the assistant principal',
          def: "la personne qui fait partie de l'administration de l'école" },
        { fr: "le conseiller / la conseillère d'orientation", en: 'the guidance counselor',
          def: 'la personne qui aide les élèves à choisir leurs cours' },
        { fr: 'le / la documentaliste', en: 'the librarian',
          def: 'la personne qui travaille dans le CDI' },
        { fr: "l'entraîneur (m/f)", en: 'the coach',
          def: 'la personne qui enseigne le sport' },
        { fr: "l'infirmier / l'infirmière", en: 'the nurse',
          def: 'la personne qui aide les élèves quand ils sont malades' },
        { fr: 'le / la secrétaire', en: 'the secretary',
          def: 'la personne qui répond au téléphone du proviseur' },
        { fr: 'le / la surveillant.e', en: 'the hall monitor',
          def: 'la personne qui contrôle les couloirs et les entrées' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'expressions',
      name: 'Expressions utiles',
      emoji: '💬',
      description: 'Useful expressions',
      cards: [
        { fr: 'Il y a…',                  en: 'There is / There are…' },
        { fr: 'Voici…',                   en: 'Here is / Here are…' },
        { fr: "Ça, c'est…",               en: 'That is… / This is…' },
        { fr: 'Ici, on peut…',            en: 'Here, you can…' },
        { fr: 'passer du temps',          en: 'to spend time' },
        { fr: 'aller voir…',              en: 'to go see…' },
        { fr: 'chercher (quelque chose)', en: 'to look for (something)' },
        { fr: 'demander conseil à…',      en: 'to ask advice from…' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'adjectifs',
      name: 'Les adjectifs',
      emoji: '✨',
      description: 'Describing people — masculine & feminine',
      cards: [
        { fr: 'dynamique', fem: 'dynamique', en: 'dynamic / lively', same: true },
        { fr: 'énergique', fem: 'énergique', en: 'energetic',        same: true },
        { fr: 'sympa',     fem: 'sympa',     en: 'nice / friendly',  same: true },
        { fr: 'positif',   fem: 'positive',  en: 'positive' },
        { fr: 'créatif',   fem: 'créative',  en: 'creative' },
        { fr: 'gentil',    fem: 'gentille',  en: 'kind / nice' },
        { fr: 'amusant',   fem: 'amusante',  en: 'funny / amusing' },
        { fr: 'dévoué',    fem: 'dévouée',   en: 'dedicated / devoted' },
        { fr: 'génial',    fem: 'géniale',   en: 'great / awesome' },
        { fr: 'inspirant', fem: 'inspirante', en: 'inspiring' },
        { fr: 'patient',   fem: 'patiente',  en: 'patient' },
        { fr: 'impatient', fem: 'impatiente', en: 'impatient' },
        { fr: 'exigeant',  fem: 'exigeante', en: 'demanding' },
        { fr: 'strict',    fem: 'stricte',   en: 'strict' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'grammaire',
      name: 'Contractions & aller',
      emoji: '🔧',
      description: 'à + le/la/l’/les, and the verb aller',
      /* These are fill-in prompts, not vocabulary, so only ask one way. */
      ask: 'forward',
      promptFwd: 'Complete: <b>%s</b>',
      cards: [
        { fr: 'à + le',           en: 'au — to the' },
        { fr: 'à + les',          en: 'aux — to the' },
        { fr: 'à + la',           en: 'à la — no contraction!' },
        { fr: "à + l'",           en: "à l' — no contraction!" },
        { fr: 'aller: je …',      en: 'je vais' },
        { fr: 'aller: tu …',      en: 'tu vas' },
        { fr: 'aller: il/elle/on …', en: 'il / elle / on va' },
        { fr: 'aller: nous …',    en: 'nous allons' },
        { fr: 'aller: vous …',    en: 'vous allez' },
        { fr: 'aller: ils/elles …', en: 'ils / elles vont' }
      ]
    }
  ],

  /* Which deck each hand-written question belongs to, so that picking a
     single deck on the subject page still pulls in the good questions. */
  quizDeckMap: {
    'Contractions':   'grammaire',
    'aller':          'grammaire',
    'Les endroits':   'endroits',
    'Le personnel':   'personnel',
    'Comment est…?':  'adjectifs',
    'M → F':          'adjectifs',
    'Professions':    'adjectifs',
    'Expressions':    'expressions'
  },

  /* ---------------------------------------------------------------
     Hand-written questions layered on top of the auto-generated ones.
       type 'mc'   -> choices + answer (index of the correct choice)
       type 'type' -> accept: array of acceptable typed answers
     --------------------------------------------------------------- */
  quizBank: [
    /* ---- contractions ---- */
    { type: 'mc', tag: 'Contractions', prompt: 'Je vais ______ bureau central.',
      choices: ['au', 'à la', "à l'", 'aux'], answer: 0,
      explain: '<b>bureau</b> is masculine singular → à + le = <b>au</b>.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Ils vont ______ salles de classe.',
      choices: ['aux', 'au', 'à la', "à l'"], answer: 0,
      explain: '<b>salles</b> is plural → à + les = <b>aux</b>.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Tu vas ______ infirmerie ?',
      choices: ["à l'", 'au', 'à la', 'aux'], answer: 0,
      explain: '<b>infirmerie</b> starts with a vowel → <b>à l&rsquo;</b>. No contraction.' },
    { type: 'mc', tag: 'Contractions', prompt: 'On étudie ______ salle informatique.',
      choices: ['à la', 'au', 'aux', "à l'"], answer: 0,
      explain: '<b>salle</b> is feminine and starts with a consonant → <b>à la</b>. No contraction.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Which two words does <b>à</b> refuse to contract with?',
      choices: ['la and l’', 'le and les', 'le and la', 'les and l’'], answer: 0,
      explain: 'à + le → au, à + les → aux. But <b>à la</b> and <b>à l&rsquo;</b> stay exactly as they are.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Nous allons ______ terrain de sport.',
      choices: ['au', 'à la', 'aux', "à l'"], answer: 0,
      explain: '<b>terrain</b> is masculine singular → à + le = <b>au</b>.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Je vais ______ accueil.',
      choices: ["à l'", 'au', 'à la', 'aux'], answer: 0,
      explain: '<b>accueil</b> begins with a vowel sound → <b>à l&rsquo;</b>.' },
    { type: 'mc', tag: 'Contractions', prompt: 'Anaïs va ______ CDI.',
      choices: ['au', 'à la', "à l'", 'aux'], answer: 0,
      explain: '<b>le</b> CDI is masculine singular → <b>au</b> CDI.' },

    /* ---- aller ---- */
    { type: 'mc', tag: 'aller', prompt: 'Pourquoi est-ce que tu ______ à l’infirmerie ?',
      choices: ['vas', 'vais', 'va', 'allez'], answer: 0,
      explain: '<b>tu vas</b>. je vais · tu vas · il/elle va · nous allons · vous allez · ils/elles vont.' },
    { type: 'mc', tag: 'aller', prompt: 'Les élèves ______ aux salles de classe.',
      choices: ['vont', 'va', 'allez', 'allons'], answer: 0,
      explain: '<b>Les élèves</b> is “they” → <b>ils vont</b>.' },
    { type: 'mc', tag: 'aller', prompt: 'Vous ______ au bureau central ?',
      choices: ['allez', 'allons', 'vont', 'vas'], answer: 0,
      explain: '<b>vous allez</b>.' },
    { type: 'type', tag: 'aller', prompt: 'Complete: <b>Nous ______ au complexe sportif.</b>',
      accept: ['allons', 'nous allons'],
      explain: 'nous <b>allons</b> — the “nous” form of <em>aller</em>.' },

    /* ---- definitions → places ---- */
    { type: 'mc', tag: 'Les endroits', prompt: "l'endroit où les élèves vont quand ils sont <b>malades</b>",
      choices: ["l'infirmerie", 'le foyer', 'le laboratoire', "l'accueil"], answer: 0,
      explain: 'Sick students go to <b>l&rsquo;infirmerie</b> — the nurse’s office. <em>Le foyer</em> is the lounge where you hang out.' },
    { type: 'mc', tag: 'Les endroits', prompt: 'What is <b>le laboratoire</b>?',
      choices: ['the science lab', 'the bathroom', 'the parking lot', 'the hallway'], answer: 0,
      explain: '<b>Le laboratoire</b> = the laboratory. An easy one to slip on!' },
    { type: 'mc', tag: 'Les endroits', prompt: "l'endroit qui est similaire à un gymnase",
      choices: ['le complexe sportif', 'le terrain de sport', 'le foyer', 'le parking'], answer: 0,
      explain: 'Indoors and gym-like → <b>le complexe sportif</b>. Outdoors → <em>le terrain de sport</em>.' },
    { type: 'mc', tag: 'Les endroits', prompt: "l'endroit où les élèves passent du temps entre les cours",
      choices: ['le foyer', "l'infirmerie", 'le laboratoire', 'le bureau central'], answer: 0,
      explain: '<b>Le foyer</b> is the student lounge.' },

    /* ---- definitions → people ---- */
    { type: 'mc', tag: 'Le personnel', prompt: 'la personne qui aide les élèves à <b>choisir leurs cours</b>',
      choices: ["le conseiller d'orientation", 'le prof', 'le proviseur', 'le surveillant'], answer: 0,
      explain: 'Course choices and schedules → <b>le conseiller / la conseillère d&rsquo;orientation</b>.' },
    { type: 'mc', tag: 'Le personnel', prompt: 'la personne qui <b>répond au téléphone</b> du proviseur',
      choices: ['le / la secrétaire', 'le proviseur-adjoint', 'le documentaliste', 'le surveillant'], answer: 0,
      explain: 'The phone at the front of the office → <b>le / la secrétaire</b>.' },
    { type: 'mc', tag: 'Le personnel', prompt: "la personne qui fait partie de <b>l'administration</b> de l'école",
      choices: ['le proviseur-adjoint', 'le / la secrétaire', "l'entraîneur", 'le documentaliste'], answer: 0,
      explain: 'The assistant principal — <b>le proviseur-adjoint / la proviseure-adjointe</b> — is administration.' },
    { type: 'mc', tag: 'Le personnel', prompt: 'la personne qui contrôle les <b>couloirs et les entrées</b>',
      choices: ['le / la surveillant.e', 'le proviseur', 'le / la secrétaire', "l'entraîneur"], answer: 0,
      explain: 'Hallways and doors → <b>le / la surveillant.e</b>, the hall monitor.' },
    { type: 'mc', tag: 'Le personnel', prompt: 'la personne qui travaille dans le CDI',
      choices: ['le / la documentaliste', 'le / la secrétaire', "l'entraîneur", 'le proviseur'], answer: 0,
      explain: 'The librarian — <b>le / la documentaliste</b>.' },

    /* ---- adjectives in context (worksheet part E) ---- */
    { type: 'mc', tag: 'Comment est…?', prompt: "Kamea a beaucoup d'idées originales. Elle est ______.",
      choices: ['créative', 'créatif', 'stricte', 'impatiente'], answer: 0,
      explain: 'Original ideas → creative. <b>Elle</b> is feminine → <b>créative</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: "Nicholas n'est pas négatif. C'est quelqu'un de ______.",
      choices: ['positif', 'positive', 'exigeant', 'strict'], answer: 0,
      explain: 'After <em>quelqu&rsquo;un de</em> you use the masculine form: <b>positif</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: "Mon chien a beaucoup d'énergie. Il est ______.",
      choices: ['énergique', 'énergiquee', 'énergiqua', 'énergif'], answer: 0,
      explain: '<b>énergique</b> already ends in -e, so it never changes.' },
    { type: 'mc', tag: 'Comment est…?', prompt: "Noelle participe dans beaucoup d'activités. Elle est ______.",
      choices: ['dynamique', 'stricte', 'impatiente', 'exigeante'], answer: 0,
      explain: 'Always involved and on the move → <b>dynamique</b> (same in both genders).' },
    { type: 'mc', tag: 'Comment est…?', prompt: 'Ce prof nous demande de toujours faire de notre mieux. Il est ______.',
      choices: ['exigeant', 'amusant', 'patient', 'sympa'], answer: 0,
      explain: 'Demands your best → <b>exigeant</b> (demanding).' },
    { type: 'mc', tag: 'Comment est…?', prompt: 'Cette prof ne tolère pas des bêtises. Elle est ______.',
      choices: ['stricte', 'strict', 'amusante', 'géniale'], answer: 0,
      explain: 'No nonsense → strict. <b>Elle</b> → add -e → <b>stricte</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: 'Cette prof encourage beaucoup ses élèves. Elle est ______.',
      choices: ['inspirante', 'inspirant', 'exigeante', 'impatiente'], answer: 0,
      explain: 'Encouraging → inspiring. Feminine → <b>inspirante</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: "Jesse n'est pas impatient. Il est ______.",
      choices: ['patient', 'patiente', 'impatient', 'strict'], answer: 0,
      explain: 'The opposite of impatient. <b>Il</b> → masculine → <b>patient</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: "Sophia travaille beaucoup pour réussir. C'est une élève ______.",
      choices: ['dévouée', 'dévoué', 'amusante', 'impatiente'], answer: 0,
      explain: 'Works hard to succeed → dedicated. <em>une élève</em> is feminine here → <b>dévouée</b>.' },
    { type: 'mc', tag: 'Comment est…?', prompt: 'Zayaan aime raconter des blagues. Il est ______.',
      choices: ['amusant', 'amusante', 'strict', 'exigeant'], answer: 0,
      explain: 'Tells jokes → funny. <b>Il</b> → <b>amusant</b>.' },

    /* ---- masculine → feminine ---- */
    { type: 'type', tag: 'M → F', prompt: 'M. Dubois est <b>patient</b>. Madame Martin est ______.',
      accept: ['patiente'], explain: 'Add <b>-e</b> → patiente.' },
    { type: 'type', tag: 'M → F', prompt: 'Georges est <b>sympa</b>. Liliane est ______ aussi.',
      accept: ['sympa'], explain: '<b>sympa</b> never changes — same word for everyone.' },
    { type: 'type', tag: 'M → F', prompt: 'Feminine form of <b>gentil</b>?',
      accept: ['gentille'], explain: 'gentil → <b>gentille</b> (double the l, then add -e).' },
    { type: 'type', tag: 'M → F', prompt: 'Feminine form of <b>créatif</b>?',
      accept: ['créative'], explain: '-if becomes <b>-ive</b> → créative. Same for positif → positive.' },

    /* ---- professions ---- */
    { type: 'mc', tag: 'Professions', prompt: 'un principal (m.) → ______ principale (f.)',
      choices: ['une', 'un', 'le', "l'"], answer: 0,
      explain: 'The feminine article is <b>une</b>, and the profession takes an added <b>-e</b>.' },
    { type: 'mc', tag: 'Professions', prompt: 'un infirmier (m.) → une ______ (f.)',
      choices: ['infirmière', 'infirmiere', 'infirmiée', 'infirmier'], answer: 0,
      explain: '-ier changes to <b>-ière</b> before the -e → infirmière.' },
    { type: 'mc', tag: 'Professions', prompt: 'un prof (m.) → une ______ (f.)',
      choices: ['prof', 'profe', 'proffe', 'professeuse'], answer: 0,
      explain: 'Some words don’t change at all: <b>un prof / une prof</b>.' },
    { type: 'mc', tag: 'Professions', prompt: 'How is the feminine form of most professions created?',
      choices: ['by adding -e', 'by adding -a', 'by adding -esse', 'by removing the last letter'], answer: 0,
      explain: 'The usual move is simply adding the letter <b>-e</b>.' },

    /* ---- expressions ---- */
    { type: 'type', tag: 'Expressions', prompt: 'Say in French: <b>Here is the gym.</b>',
      accept: ['voici le complexe sportif', 'voici le gymnase'],
      explain: '<b>Voici</b> = here is. → <em>Voici le complexe sportif.</em>' },
    { type: 'type', tag: 'Expressions', prompt: 'Say in French: <b>There are 25 students in this class.</b>',
      accept: ['il y a vingt-cinq élèves dans cette classe', 'il y a 25 élèves dans cette classe',
               'il y a vingt cinq élèves dans cette classe'],
      explain: '<em>Il y a vingt-cinq <b>élèves</b> dans <b>cette</b> classe.</em> — keep <b>élèves</b>, and <em>classe</em> is feminine.' },
    { type: 'type', tag: 'Expressions', prompt: 'Say in French: <b>Here we can look for a book.</b>',
      accept: ['ici on peut chercher un livre'],
      explain: '<em>Ici, on peut chercher un livre.</em> — <b>chercher</b> already means “look <em>for</em>”, so no “pour”.' },
    { type: 'type', tag: 'Expressions', prompt: 'Say in French: <b>I am asking advice from my friend.</b>',
      accept: ['je demande conseil à mon ami', 'je demande conseil à mon amie', 'je demande conseil à mon ami(e)'],
      explain: '<em>Je demande conseil <b>à</b> mon ami.</em> — the expression is <b>demander conseil à</b>, never “pour”.' }
  ],

  /* Quick-reference notes shown on the cheat sheet. */
  notes: [
    {
      title: 'à + article — the contraction rule',
      emoji: '🔀',
      html: '<table class="mini"><tr><th>Article</th><th>Result</th><th>Example</th></tr>' +
            '<tr><td>à + <b>le</b></td><td class="hit">au</td><td>Je vais <b>au</b> bureau central.</td></tr>' +
            '<tr><td>à + <b>les</b></td><td class="hit">aux</td><td>Ils vont <b>aux</b> salles de classe.</td></tr>' +
            '<tr><td>à + <b>la</b></td><td class="miss">à la</td><td>On étudie <b>à la</b> salle informatique.</td></tr>' +
            '<tr><td>à + <b>l&rsquo;</b></td><td class="miss">à l&rsquo;</td><td>Tu vas <b>à l&rsquo;</b>infirmerie ?</td></tr></table>' +
            '<p class="note-tip">💡 Only <b>le</b> and <b>les</b> squish. <b>la</b> and <b>l&rsquo;</b> stay put.</p>'
    },
    {
      title: 'aller — to go',
      emoji: '🚶',
      html: '<table class="mini"><tr><td>je <b>vais</b></td><td>nous <b>allons</b></td></tr>' +
            '<tr><td>tu <b>vas</b></td><td>vous <b>allez</b></td></tr>' +
            '<tr><td>il / elle / on <b>va</b></td><td>ils / elles <b>vont</b></td></tr></table>' +
            '<p class="note-tip">💡 <b>aller</b> + <b>au / à la / à l&rsquo; / aux</b> + place = where someone is going.</p>'
    },
    {
      title: 'Masculine → feminine adjectives',
      emoji: '🔤',
      html: '<table class="mini"><tr><th>Pattern</th><th>Example</th></tr>' +
            '<tr><td>usually add <b>-e</b></td><td>patient → patient<b>e</b>, amusant → amusant<b>e</b></td></tr>' +
            '<tr><td>already ends in <b>-e</b> → no change</td><td>dynamique, énergique</td></tr>' +
            '<tr><td><b>-if</b> → <b>-ive</b></td><td>positif → posit<b>ive</b>, créatif → créat<b>ive</b></td></tr>' +
            '<tr><td><b>-il</b> → <b>-ille</b></td><td>gentil → gent<b>ille</b></td></tr>' +
            '<tr><td>invariable</td><td>sympa → sympa</td></tr></table>'
    },
    {
      title: 'Professions: m. and f. forms',
      emoji: '👔',
      html: '<table class="mini"><tr><th>Rule</th><th>Example</th></tr>' +
            '<tr><td>add <b>-e</b></td><td>un principal → une principal<b>e</b></td></tr>' +
            '<tr><td>same word both ways</td><td>un prof → une prof</td></tr>' +
            '<tr><td>ending changes first</td><td>un infirm<b>ier</b> → une infirm<b>ière</b></td></tr></table>'
    },
    {
      title: 'Describing someone',
      emoji: '🗣️',
      html: '<p><b>C&rsquo;est quelqu&rsquo;un de / d&rsquo;</b> + adjective <span class="muted">(always the masculine form)</span><br>' +
            '<em>C&rsquo;est quelqu&rsquo;un de positif.</em></p>' +
            '<p><b>Il / Elle est</b> + adjective <span class="muted">(matches the person)</span><br>' +
            '<em>Elle est créative. · Il est amusant.</em></p>'
    },
    {
      title: 'Easy ones to slip on',
      emoji: '🪤',
      html: '<ul class="trap">' +
            '<li><b>le laboratoire</b> = the science lab, <u>not</u> the bathroom.</li>' +
            '<li>Sick student → <b>l&rsquo;infirmerie</b>. <b>Le foyer</b> is the lounge.</li>' +
            '<li>Picking classes → <b>le conseiller d&rsquo;orientation</b>, not <em>un prof</em>.</li>' +
            '<li>Answers the principal’s phone → <b>le / la secrétaire</b>. Part of admin → <b>le proviseur-adjoint</b>.</li>' +
            '<li><em>Il y a vingt-cinq <b>élèves</b> dans <b>cette</b> classe.</em> — keep the noun, and <em>classe</em> is feminine.</li>' +
            '<li>It’s <b>demander conseil <u>à</u></b> quelqu’un — never “pour”.</li>' +
            '</ul>'
    }
  ]
});
