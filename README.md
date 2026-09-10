# 🧪 Study Lab

> I will use this to study for my classes.

A study site that runs straight off the disk — no server, no install, no internet.
**Double-click `index.html`** and it opens in your browser.

---

## Modes

| | Mode | What it does |
|---|---|---|
| 🃏 | **Flashcards** | Flip through terms. Space flips, ← → move, `K` marks as known. |
| ⚡ | **Practice Quiz** | Multiple choice with instant explanations. Press `1`–`4` to answer. |
| ✍️ | **Type It** | Spell the answer. Accents are optional, and there are accent buttons. |
| 🧩 | **Match Up** | Pair French with English against the clock. |
| 💀 | **Sudden Death** | One wrong answer ends the run. How long a streak can you get? |
| 📖 | **Cheat Sheet** | Every term, every rule, plus the original photos. No scoring. |

**The health bar** sits in the top-right corner and starts at **half**, so the emoji has room to
move both ways: 🤩 → 😄 → 🙂 → 😐 → 😕 → 😠 → 😡 → 💀. Hit zero and the run ends.

Healing is slow and flat — **+4** per correct answer, so reaching the top takes 13 of them.
Damage instead **scales with how high you already are**: −20 at full health, −6 near zero.
One mistake at the top wipes out five right answers, but down low the hits soften enough that
you can always climb back out. Match Up goes 30% easier, since some of it is guesswork.

The numbers live together at the top of `js/app.js` (`START_HP`, `HEAL`, `MIN_HIT`, `MAX_HIT`)
if you want to make it harsher or kinder.

The 🌙 / ☀️ button toggles light and dark. Your theme, deck choice, and best scores are remembered.

---

## Adding another subject

Three steps. Nothing else in the site needs to change.

**1. Make a folder** for the material, next to `frenchUnitOneQuiz/`:

```
Study website/
├── frenchUnitOneQuiz/      ← the French photos
└── bioUnitTwo/             ← your new one
```

**2. Create `data/bio-u2.js`** and call `StudyData.register({...})` — schema below.

**3. Add one line to `index.html`**, next to the existing subject script:

```html
<script src="data/french-u1c2.js"></script>
<script src="data/bio-u2.js"></script>   <!-- new -->
```

That's it. All six modes, the health bar, the themes, and the cheat sheet
build themselves from whatever you put in the file.

---

## The subject schema

Only `id`, `subject`, `title`, and `decks` are required. Everything else is optional.

```js
StudyData.register({
  id:       'bio-u2',                  // unique, no spaces
  subject:  'Biology',                 // shown as the category
  title:    'Unit 2 · Cells',          // shown as the heading
  subtitle: 'Organelles and transport',
  emoji:    '🔬',
  accent:   '#0ea5e9',                 // theme colour for this subject
  lang:     'Biology',                 // optional: fills in "How do you say X in ___?"

  // Optional: the teacher's review checklist, shown on the subject page.
  // Plain HTML is allowed here.
  checklist: [
    'I can label the parts of a cell.',
    'I know the difference between <em>diffusion</em> and <em>osmosis</em>.'
  ],

  // Optional: photos of the source material, shown on the cheat sheet.
  gallery: [
    { src: 'bioUnitTwo/notes1.jpg', label: 'Notes — p. 1' }
  ],

  decks: [
    {
      id:          'organelles',       // unique within the subject
      name:        'Organelles',
      emoji:       '🧫',
      description: 'Parts of the cell',

      // Optional, for decks that are fill-in prompts rather than vocabulary:
      //   ask: 'forward'                       -> never asks the reverse direction
      //   promptFwd: 'Complete: <b>%s</b>'     -> custom question wording (%s = the term)
      //   promptRev: 'Custom reverse: <b>%s</b>'

      cards: [
        {
          fr:   'mitochondrion',       // the term  (required)
          en:   'makes ATP',           // the meaning (required)
          def:  'the organelle that releases energy',  // optional: definition-style question
          fem:  null,                  // optional: a second form, e.g. a feminine adjective
          same: false,                 // optional: true if both forms are identical
          note: 'Often called the powerhouse.'         // optional: shown as a hint/warning
        }
      ]
    }
  ],

  // Optional: which deck each hand-written question belongs to,
  // keyed by the question's `tag`.
  quizDeckMap: { 'Organelles': 'organelles' },

  // Optional: hand-written questions layered on top of the generated ones.
  quizBank: [
    { type: 'mc',
      tag: 'Organelles',
      prompt: 'Which organelle makes ATP?',
      choices: ['mitochondrion', 'ribosome', 'nucleus', 'vacuole'],
      answer: 0,                       // index into `choices`
      explain: 'ATP is produced during <b>cellular respiration</b>.' },

    { type: 'type',
      tag: 'Organelles',
      prompt: 'What organelle stores DNA?',
      accept: ['nucleus', 'the nucleus'],   // any of these count as correct
      explain: 'The <b>nucleus</b> holds the cell&rsquo;s DNA.' }
  ],

  // Optional: reference boxes on the cheat sheet. Plain HTML.
  notes: [
    { title: 'Diffusion vs osmosis', emoji: '💧',
      html: '<p>Osmosis is diffusion, but specifically of <b>water</b>.</p>' }
  ]
});
```

### What gets generated for you

From each card the site automatically builds:

- **Term → meaning** multiple choice
- **Meaning → term** multiple choice *(skipped when `ask: 'forward'`)*
- **Definition → term** multiple choice, when the card has a `def`
- **Typed recall** questions
- **Feminine form** questions, when the card has a `fem`

Wrong-answer options are pulled from other cards in the same deck, so they stay plausible.

---

## Files

```
Study website/
├── index.html              the page (add subject <script> tags here)
├── README.md               this file
├── css/styles.css          all styling; light/dark live in the variables at the top
├── js/registry.js          the tiny StudyData registry
├── js/app.js               modes, health bar, routing, question generation
├── data/french-u1c2.js     the French unit
└── frenchUnitOneQuiz/      the original photos
```

---

## Notes on the French unit

The content came from the pink list (pages 7 and 8), the U1C2 worksheet, and the review
checklist slide. Where the worksheet answers didn't match the vocabulary list, **the site
uses the correct French** and calls out the difference — see the 🪤 *Easy ones to slip on*
box on the cheat sheet.
