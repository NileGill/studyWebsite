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

  return {
    register: register,
    all: function () { return subjects.slice(); },
    get: function (id) {
      return subjects.filter(function (s) { return s.id === id; })[0] || null;
    }
  };
})();
