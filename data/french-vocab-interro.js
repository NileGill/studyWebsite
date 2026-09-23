/* ==================================================================
   Français — Interro de vocabulaire
   Source: frenchVocabQuiz/ — "Vocabulaire à connaître pour l'interro
   mercredi" (three columns: verbes, expressions, comparaisons).
   ================================================================== */
StudyData.register({
  id: 'french-vocab-interro',
  subject: 'French',                 // the class this belongs to
  title: 'Interro de vocabulaire',
  subtitle: "Vocabulaire à connaître pour l'interro de mercredi",
  date: '2026-09-22',
  lang: 'French',
  emoji: '📝',
  accent: '#d98324',

  checklist: [
    'I know all six verbs in the first column, both directions.',
    'I know the six school expressions in the middle column.',
    'I can build a comparison with <em>plus… que</em>, <em>moins… que</em> and <em>aussi… que</em>.',
    'I can wrap a verb in <em>ne… jamais</em> and put both halves in the right place.'
  ],

  gallery: [
    { src: 'frenchVocabQuiz/Screenshot 2026-09-22 193101.png', label: 'Vocab list for the interro' }
  ],

  decks: [
    /* ---------------------------------------------------------- */
    {
      id: 'verbes',
      name: 'Les verbes',
      emoji: '🎯',
      description: 'First column — what you do at school',
      cards: [
        { fr: 'réussir',          en: 'to succeed / to pass (a test)',
          def: 'obtenir un bon résultat à un examen' },
        { fr: 'échouer',          en: 'to fail',
          def: 'ne pas réussir' },
        { fr: 'devoir',           en: 'to have to / must',
          note: 'As a noun, <em>les devoirs</em> means homework.' },
        { fr: 'accéder',          en: 'to access / to get to' },
        { fr: 'prendre des notes', en: 'to take notes' },
        { fr: 'partager',         en: 'to share' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'expressions',
      name: 'Les expressions',
      emoji: '🏫',
      description: 'Middle column — habits, good and bad',
      cards: [
        { fr: 'participer à',              en: 'to participate in / to take part in' },
        { fr: "faire partie d'une équipe", en: 'to be part of a team' },
        { fr: 'attendre le dernier moment', en: 'to wait until the last minute',
          def: 'ne rien faire avant la veille de l’examen' },
        { fr: 'être attentif / attentive', en: 'to be attentive / to pay attention',
          note: '-if → -ive, the same rule as <em>positif → positive</em>.' },
        { fr: 'faire une pause',           en: 'to take a break',
          def: 'arrêter de travailler pendant quelques minutes' },
        { fr: 'réviser',                   en: 'to review / to study for a test',
          def: 'étudier avant un examen' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'comparaisons',
      name: 'Comparaisons & négation',
      emoji: '⚖️',
      description: 'Third column — comparing, and saying never',
      cards: [
        { fr: 'plus… que',  en: 'more… than',
          note: '<em>Elle est plus attentive que moi.</em>' },
        { fr: 'moins… que', en: 'less… than',
          note: '<em>Je révise moins que toi.</em>' },
        { fr: 'aussi… que', en: 'as… as',
          note: '<em>Il est aussi dévoué que Sophia.</em>' },
        { fr: 'ne… jamais', en: 'never',
          note: '<em>Je ne révise jamais au dernier moment.</em> — <b>ne</b> before the verb, <b>jamais</b> after it.' }
      ]
    }
  ],

  quizDeckMap: {
    'Les verbes':    'verbes',
    'Les expressions': 'expressions',
    'Comparaisons':  'comparaisons'
  },

  quizBank: [
    /* ---- comparisons ---- */
    { type: 'mc', tag: 'Comparaisons', prompt: 'Elle est ______ attentive ______ moi. <em>(She is more attentive than me.)</em>',
      choices: ['plus … que', 'moins … que', 'aussi … que', 'ne … jamais'], answer: 0,
      explain: '<b>plus… que</b> = more… than. The adjective sits between the two halves.' },
    { type: 'mc', tag: 'Comparaisons', prompt: 'Je révise ______ ______ toi. <em>(I study less than you.)</em>',
      choices: ['moins … que', 'plus … que', 'aussi … que', 'ne … jamais'], answer: 0,
      explain: '<b>moins… que</b> = less… than.' },
    { type: 'mc', tag: 'Comparaisons', prompt: 'Il est ______ dévoué ______ Sophia. <em>(He is as dedicated as Sophia.)</em>',
      choices: ['aussi … que', 'plus … que', 'moins … que', 'ne … jamais'], answer: 0,
      explain: '<b>aussi… que</b> = as… as — the equal comparison.' },
    { type: 'mc', tag: 'Comparaisons', prompt: 'Where do the two halves of <b>ne… jamais</b> go?',
      choices: ['ne before the verb, jamais after it', 'both before the verb',
                'both after the verb', 'ne after the verb, jamais before it'], answer: 0,
      explain: '<em>Je <b>ne</b> révise <b>jamais</b> au dernier moment.</em> The verb sits in the middle.' },
    { type: 'mc', tag: 'Comparaisons', prompt: 'Which sentence is written correctly?',
      choices: ['Je ne partage jamais mes notes.', 'Je jamais ne partage mes notes.',
                'Je ne jamais partage mes notes.', 'Je partage ne jamais mes notes.'], answer: 0,
      explain: '<b>ne</b> goes in front of the verb, <b>jamais</b> straight after it.' },
    { type: 'type', tag: 'Comparaisons', prompt: 'Say in French: <b>I never take notes.</b>',
      accept: ['je ne prends jamais de notes', 'je ne prends jamais des notes'],
      explain: '<em>Je <b>ne</b> prends <b>jamais</b> de notes.</em> — after a negative, <em>des</em> usually becomes <em>de</em>.' },

    /* ---- verbs ---- */
    { type: 'mc', tag: 'Les verbes', prompt: 'What is the opposite of <b>réussir</b>?',
      choices: ['échouer', 'partager', 'accéder', 'réviser'], answer: 0,
      explain: '<b>réussir</b> = to succeed, <b>échouer</b> = to fail.' },
    { type: 'mc', tag: 'Les verbes', prompt: 'Which verb means <b>to share</b>?',
      choices: ['partager', 'participer', 'partir', 'préparer'], answer: 0,
      explain: '<b>partager</b>. Careful — <em>participer</em> is to take part.' },
    { type: 'mc', tag: 'Les verbes', prompt: 'You did badly on the test. You ______.',
      choices: ['avez échoué', 'avez réussi', 'avez partagé', 'avez accédé'], answer: 0,
      explain: '<b>échouer</b> = to fail.' },
    { type: 'type', tag: 'Les verbes', prompt: 'How do you say <b>to take notes</b> in French?',
      accept: ['prendre des notes'], explain: '<b>prendre des notes</b> — literally “to take of the notes”.' },

    /* ---- expressions ---- */
    { type: 'mc', tag: 'Les expressions', prompt: '<b>attendre le dernier moment</b> means…',
      choices: ['to wait until the last minute', 'to take a break',
                'to be part of a team', 'to pay attention'], answer: 0,
      explain: 'Classic procrastination — waiting until the very last moment.' },
    { type: 'mc', tag: 'Les expressions', prompt: 'Which preposition goes with <b>participer</b>?',
      choices: ['à', 'de', 'en', 'pour'], answer: 0,
      explain: '<b>participer à</b> — <em>Je participe à l’équipe.</em>' },
    { type: 'mc', tag: 'Les expressions', prompt: 'Madame Martin pays close attention. Elle est ______.',
      choices: ['attentive', 'attentif', 'attentivee', 'attention'], answer: 0,
      explain: 'Feminine of <b>attentif</b> is <b>attentive</b> — the -if → -ive rule again.' },
    { type: 'type', tag: 'Les expressions', prompt: 'Feminine form of <b>attentif</b>?',
      accept: ['attentive'], explain: '-if becomes <b>-ive</b>, just like positif → positive.' },
    { type: 'type', tag: 'Les expressions', prompt: 'How do you say <b>to take a break</b> in French?',
      accept: ['faire une pause'], explain: '<b>faire une pause</b>.' },
    { type: 'type', tag: 'Les expressions', prompt: 'How do you say <b>to be part of a team</b> in French?',
      accept: ["faire partie d'une équipe", 'faire partie dune équipe'],
      explain: "<b>faire partie d'une équipe</b>." }
  ],

  notes: [
    {
      title: 'Comparing two things',
      emoji: '⚖️',
      html: '<table class="mini"><tr><th>Pattern</th><th>Means</th><th>Example</th></tr>' +
            '<tr><td><b>plus</b> … <b>que</b></td><td class="hit">more … than</td><td>Elle est <b>plus</b> attentive <b>que</b> moi.</td></tr>' +
            '<tr><td><b>moins</b> … <b>que</b></td><td class="hit">less … than</td><td>Je révise <b>moins que</b> toi.</td></tr>' +
            '<tr><td><b>aussi</b> … <b>que</b></td><td class="hit">as … as</td><td>Il est <b>aussi</b> dévoué <b>que</b> Sophia.</td></tr></table>' +
            '<p class="note-tip">💡 The adjective goes in the gap, and <b>que</b> always comes before the thing you are comparing to.</p>'
    },
    {
      title: 'ne… jamais wraps the verb',
      emoji: '🚫',
      html: '<p>The two halves go on either side of the verb:</p>' +
            '<p><em>Je <b>ne</b> révise <b>jamais</b> au dernier moment.</em><br>' +
            '<em>Il <b>n’</b>attend <b>jamais</b> le dernier moment.</em></p>' +
            '<p class="note-tip">💡 <b>ne</b> becomes <b>n’</b> before a vowel. And after a negative, <em>des</em> usually drops to <em>de</em>: ' +
            '<em>je ne prends jamais <b>de</b> notes</em>.</p>'
    },
    {
      title: 'Good habits vs bad habits',
      emoji: '📚',
      html: '<table class="mini"><tr><th>👍</th><th>👎</th></tr>' +
            '<tr><td>réviser</td><td>attendre le dernier moment</td></tr>' +
            '<tr><td>prendre des notes</td><td>échouer</td></tr>' +
            '<tr><td>être attentif / attentive</td><td></td></tr>' +
            '<tr><td>participer à</td><td></td></tr>' +
            '<tr><td>faire une pause</td><td></td></tr>' +
            '<tr><td>réussir</td><td></td></tr></table>' +
            '<p class="note-tip">💡 Pairing them up like this is the quickest way to lock in <b>réussir</b> vs <b>échouer</b>.</p>'
    },
    {
      title: 'Words that look alike',
      emoji: '🪤',
      html: '<ul class="trap">' +
            '<li><b>partager</b> = to share · <b>participer</b> = to take part. Different verbs.</li>' +
            '<li><b>participer</b> always takes <b>à</b>.</li>' +
            '<li><b>devoir</b> = to have to. But <em>les devoirs</em> = homework.</li>' +
            '<li><b>attentif</b> → <b>attentive</b> for a girl — same -if/-ive rule as <em>positif</em> and <em>créatif</em>.</li>' +
            '</ul>'
    }
  ]
});
