/* ==================================================================
   AP Computer Science A — Objects, References & Strings
   Built from the nine Review slides (and their explanation slides)
   in APCS/.
   ================================================================== */
StudyData.register({
  id: 'apcs-objects',
  subject: 'AP Comp Sci',
  title: 'Objects, References & Strings',
  subtitle: 'Reviews #1–9 — classes, turtles, Strings, aliasing',
  lang: 'Java',
  emoji: '☕',
  accent: '#2aa9e0',

  checklist: [
    'I can point at a class, a declared variable, a used variable, a method and an argument in a line of Java.',
    'I know where the origin is in a <em>World</em> and which way a new <em>Turtle</em> faces.',
    'I know that a class-type variable stores a <em>reference</em>, not the object.',
    'I know <em>String</em> is immutable, and that <em>concat</em> / <em>toUpperCase</em> return a new String I have to assign.',
    'I can spot the four ways this code fails to compile: no <em>new</em>, never initialized, declared twice, wrong type.',
    'I know two variables can alias one object — and what that means when I change it.'
  ],

  gallery: [
    { src: 'APCS/Review1.png', label: 'Review #1' }, { src: 'APCS/Review1Ans.png', label: '#1 — answer' },
    { src: 'APCS/Review2.png', label: 'Review #2' }, { src: 'APCS/Review2Ans.png', label: '#2 — answer' },
    { src: 'APCS/Review3.png', label: 'Review #3' }, { src: 'APCS/Review3Ans.png', label: '#3 — answer' },
    { src: 'APCS/Review4.png', label: 'Review #4' }, { src: 'APCS/Review4Ans.png', label: '#4 — answer' },
    { src: 'APCS/Review5.png', label: 'Review #5' }, { src: 'APCS/Review5Ans.png', label: '#5 — answer' },
    { src: 'APCS/Review6.png', label: 'Review #6' }, { src: 'APCS/Review6Ans.png', label: '#6 — answer' },
    { src: 'APCS/Review7.png', label: 'Review #7' }, { src: 'APCS/Review7Ans.png', label: '#7 — answer' },
    { src: 'APCS/Review8.png', label: 'Review #8' }, { src: 'APCS/Review8Ans.png', label: '#8 — answer' },
    { src: 'APCS/Review9.png', label: 'Review #9' }, { src: 'APCS/Review9Ans.png', label: '#9 — answer' }
  ],

  decks: [
    /* ---------------------------------------------------------- */
    {
      id: 'termes',
      name: 'Key terms',
      emoji: '🧠',
      description: 'The vocabulary the questions are built on',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'class',          en: 'the blueprint that defines a type — the type of an object is its class',
          def: 'What is the type of an object?' },
        { fr: 'object',         en: 'one specific thing built from a class, created with new' },
        { fr: 'reference',      en: 'the address in memory where an object is stored' },
        { fr: 'variable',       en: 'a name that holds either a value or a reference' },
        { fr: 'method',         en: 'an action you invoke on an object — a dot, a name, then parentheses' },
        { fr: 'argument',       en: 'a value passed to a method inside its parentheses' },
        { fr: 'primitive type', en: 'a type that stores the value itself — int, double, boolean, char' },
        { fr: 'class type',     en: 'a type whose variable stores a reference to an object' },
        { fr: 'constructor',    en: 'the method that new calls to build an object — new Turtle()' },
        { fr: 'immutable',      en: 'cannot be changed after it is created — String is immutable' },
        { fr: 'alias',          en: 'two variables that reference the very same object' },
        { fr: 'algorithm',      en: 'a series of steps that is unambiguous, executable and terminating',
          def: 'What is a series of steps that is unambiguous, executable and terminating?' },
        { fr: 'compiler error', en: 'the program refuses to build — it never runs at all' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'lecture',
      name: 'Reading code',
      emoji: '🔍',
      description: 'How to spot each part in a line of Java',
      ask: 'forward',
      promptFwd: 'What tells you something is <b>%s</b>?',
      cards: [
        { fr: 'a class',                en: 'It starts with a capital letter — Turtle, String, World, Point, Random' },
        { fr: 'a variable being declared', en: 'Its type sits right in front of it — Turtle crush' },
        { fr: 'a variable being used',  en: 'It appears with no type in front of it — crush.turn(-45)' },
        { fr: 'a method',               en: 'It follows a dot and is followed by parentheses — crush.turn()' },
        { fr: 'an argument',            en: 'It sits inside a method’s parentheses — turn(-45)' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'turtle',
      name: 'Turtle & World',
      emoji: '🐢',
      description: 'Coordinates, headings and movement',
      ask: 'forward',
      cards: [
        { fr: 'the origin (0, 0)',                  en: 'the upper-left corner of the world' },
        { fr: 'the x axis',                         en: 'horizontal — x grows to the right' },
        { fr: 'the y axis',                         en: 'vertical — y grows downward from the top' },
        { fr: 'the heading of a brand-new Turtle',  en: 'north — facing the top of the screen' },
        { fr: 'new World(200, 100)',                en: 'a world 200 wide and 100 tall' },
        { fr: 'new Turtle(50, 25, earth)',          en: 'a turtle at x = 50, y = 25 inside the world earth' },
        { fr: 'maria.forward(25)',                  en: 'moves maria 25 pixels in whatever direction she currently faces' },
        { fr: 'maria.turnLeft()',                   en: 'turns maria 90 degrees to her left' },
        { fr: 'crush.turn(-45)',                    en: 'turns crush 45 degrees — the sign decides which way' },
        { fr: 'forward() on a new turtle',          en: 'y gets smaller — it heads up the screen toward y = 0' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'strings',
      name: 'Strings',
      emoji: '🔤',
      description: 'Immutability, and methods that return instead of change',
      ask: 'forward',
      cards: [
        { fr: 'String name = new String("Bob");',
          en: 'name holds a reference to a String object — not the letters themselves' },
        { fr: 'name.toUpperCase()',
          en: 'returns a NEW uppercase String; name itself is completely unchanged' },
        { fr: 'message.concat("There!")',
          en: 'returns a NEW String with the text added; message itself is unchanged' },
        { fr: 'message.concat("There!");  on its own line',
          en: 'compiles, but does nothing useful — the new String is thrown away' },
        { fr: 'message = message.concat("There!");',
          en: 'works — the returned String is assigned back to the variable' },
        { fr: 'why String is called immutable',
          en: 'a String object can never be changed once it exists; methods return new ones instead' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'references',
      name: 'References & aliasing',
      emoji: '🔗',
      description: 'When two names point at one object',
      ask: 'forward',
      cards: [
        { fr: 'what a class-type variable stores', en: 'a reference — the address of the object, not the object' },
        { fr: 'what a primitive variable stores',  en: 'the value itself' },
        { fr: 'Point corner = vertex;',            en: 'copies the reference — corner and vertex now point at the SAME object' },
        { fr: 'corner.setLocation(15, 25);',       en: 'changes the one shared Point, so vertex sees x = 15, y = 25 too' },
        { fr: 'an alias',                          en: 'two variables holding the same reference — a change through either shows in both' },
        { fr: 'why Point differs from String here', en: 'Point is mutable, so setLocation really does change the object' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'compile',
      name: 'Does it compile?',
      emoji: '⚠️',
      description: 'The four classic compiler errors',
      ask: 'forward',
      promptFwd: '<b>%s</b> — what happens?',
      cards: [
        { fr: 'Random generator;  then  generator.nextInt(6)',
          en: 'Compiler error — generator was declared but never initialized with an object' },
        { fr: 'Random generator = Random();',
          en: 'Compiler error — the keyword new is missing' },
        { fr: 'declaring String message twice in the same scope',
          en: 'Compiler error — a variable can only be declared once' },
        { fr: 'Random num = new Random();  then  num = num.nextInt(6);',
          en: 'Compiler error — nextInt returns an int, but num is of type Random' },
        { fr: 'calling a method and ignoring what it returns',
          en: 'It compiles fine — but the returned value is silently discarded' }
      ]
    }
  ],

  quizDeckMap: {
    'Key terms':     'termes',
    'Reading code':  'lecture',
    'Turtle & World':'turtle',
    'Strings':       'strings',
    'References':    'references',
    'Does it compile?': 'compile'
  },

  quizBank: [
    /* ---- Review #1 : identifying the parts ---- */
    { type: 'mc', tag: 'Reading code',
      prompt: 'In this snippet, which part is the <b>class</b>?' +
              '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>',
      choices: ['Turtle', 'crush', 'turn', '-45'], answer: 0,
      explain: 'Classes start with a <b>capital letter</b>. <em>Turtle</em> is the class; <em>crush</em> is the variable referencing a Turtle object.' },
    { type: 'mc', tag: 'Reading code',
      prompt: 'Which part is the <b>variable being declared</b>?' +
              '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>',
      choices: ['crush on line 1', 'Turtle', 'crush on line 2', 'turn'], answer: 0,
      explain: 'A declared variable has its <b>type right in front of it</b> — <em>Turtle crush</em>. On line 2 <em>crush</em> is being <em>used</em>, not declared.' },
    { type: 'mc', tag: 'Reading code',
      prompt: 'Which part is the <b>method</b>?' +
              '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>',
      choices: ['turn', 'crush', 'Turtle', '-45'], answer: 0,
      explain: 'Methods come <b>after a dot</b> and are <b>followed by parentheses</b> — <em>crush<b>.turn(</b>…<b>)</b></em>.' },
    { type: 'mc', tag: 'Reading code',
      prompt: 'Which part is the <b>argument</b>?' +
              '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>',
      choices: ['-45', 'turn', 'crush', 'new'], answer: 0,
      explain: 'Arguments are the values passed <b>inside the parentheses</b> to a method.' },
    { type: 'mc', tag: 'Reading code',
      prompt: 'On line 2, what is <b>crush</b> doing?' +
              '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>',
      choices: ['being used', 'being declared', 'being a class', 'being an argument'], answer: 0,
      explain: 'No type in front of it → it is a <b>variable being used</b>. It was declared back on line 1.' },

    /* ---- Review #2 : the world's coordinate system ---- */
    { type: 'mc', tag: 'Turtle & World', prompt: 'Where is the origin <b>(0, 0)</b> in a World?',
      choices: ['the upper-left corner', 'the centre', 'the lower-left corner', 'the upper-right corner'], answer: 0,
      explain: 'Unlike maths class, the origin sits in the <b>upper-left</b>, and y grows <b>downward</b>.' },
    { type: 'mc', tag: 'Turtle & World', prompt: 'Which direction does a brand-new Turtle face?',
      choices: ['north — toward the top of the screen', 'east — toward the right', 'south — toward the bottom', 'whichever way the last turtle faced'], answer: 0,
      explain: 'The default heading is <b>north</b>. So the first <em>forward()</em> moves it <em>up</em> the screen.' },
    { type: 'mc', tag: 'Turtle & World',
      prompt: 'After this code, where is <b>maria</b>?' +
              '<pre class="codeblock">World earth = new World(200, 100);\nTurtle maria = new Turtle(50, 25, earth);\nmaria.forward(25);</pre>',
      choices: ['(50, 0)', '(50, 50)', '(75, 25)', '(25, 25)'], answer: 0,
      explain: 'She starts at (50, 25) facing <b>north</b>, so forward(25) moves her <b>up</b>: y goes 25 → <b>0</b>. x never changes.' },
    { type: 'mc', tag: 'Turtle & World',
      prompt: 'Continuing on, where does <b>maria</b> end up?' +
              '<pre class="codeblock">// maria is at (50, 0) facing north\nmaria.turnLeft();\nmaria.forward(50);</pre>',
      choices: ['(0, 0)', '(50, 50)', '(100, 0)', '(0, 50)'], answer: 0,
      explain: 'Turning left from north leaves her facing <b>west</b>, so forward(50) takes x from 50 → <b>0</b>. She lands in the corner.' },
    { type: 'mc', tag: 'Turtle & World',
      prompt: 'In <code>new World(200, 100)</code>, what is the <b>100</b>?',
      choices: ['the height of the world', 'the width of the world', 'the number of turtles', "the turtle's starting y"], answer: 0,
      explain: 'Width comes first, then height — a world <b>200 wide and 100 tall</b>.' },

    /* ---- Review #3 ---- */
    { type: 'mc', tag: 'Key terms',
      prompt: 'What is stored in the variable <code>name</code> after this line runs?' +
              '<pre class="codeblock">String name = new String("Bob");</pre>',
      choices: ['"Bob"', 'Bob', 'the address in memory where "Bob" is stored', 'new String("Bob")'], answer: 2,
      explain: 'The value of a <b>class-type</b> variable is the <b>reference</b> — the address of the object. The object holds the characters; the variable just points at it. (Slide answer: C)' },

    /* ---- Review #4 ---- */
    { type: 'mc', tag: 'Strings',
      prompt: 'What is the value of the String referenced by <code>name</code> afterwards?' +
              '<pre class="codeblock">String name = new String("Bob");\nname.toUpperCase();</pre>',
      choices: ['"Bob"', '"BOB"', '"bob"'], answer: 0,
      explain: '<b>toUpperCase</b> returns a <em>new</em> String and leaves the original alone — and nothing catches the return value. String objects are <b>immutable</b>. (Slide answer: A)' },

    /* ---- Review #5 ---- */
    { type: 'mc', tag: 'Strings',
      prompt: 'Which of these compiles <b>and</b> ends up with the String <code>"Hello There!"</code>?' +
              '<pre class="codeblock">A) String message = new String("");\n   message.concat("Hello ");\n   message.concat("There!");\n\nB) String message = new String("");\n   String message = message.concat("Hello ");\n   String message = message.concat("There!");\n\nC) String message;\n   message = message.concat("Hello ");\n   message = message.concat("There!");\n\nD) String message = new String("Hello ");\n   message = message.concat("There!");</pre>',
      choices: ['A', 'B', 'C', 'D'], answer: 3,
      explain: '<b>A</b> throws the results away, so message stays "". <b>B</b> redeclares <em>message</em> three times — compiler error. <b>C</b> never initializes <em>message</em> before calling a method on it — compiler error. <b>D</b> assigns the return value back. (Slide answer: D)' },

    /* ---- Review #6 ---- */
    { type: 'mc', tag: 'Does it compile?',
      prompt: 'Which of these compiles <b>and</b> sets <code>num</code> to a random number?' +
              '<pre class="codeblock">A) Random generator;\n   int num = generator.nextInt(6);\n\nB) Random generator = Random();\n   int num = generator.nextInt(6);\n\nC) Random generator = new Random();\n   int num = generator.nextInt(6);\n\nD) Random num = new Random();\n   num = num.nextInt(6);</pre>',
      choices: ['A', 'B', 'C', 'D'], answer: 2,
      explain: '<b>A</b> never initializes <em>generator</em>. <b>B</b> is missing the keyword <b>new</b>. <b>D</b> assigns an <em>int</em> into a variable of type <em>Random</em> — the types do not match. (Slide answer: C)' },

    /* ---- Review #7 ---- */
    { type: 'mc', tag: 'Key terms', prompt: 'What is the <b>type</b> of an object?',
      choices: ['variable', 'method', 'reference', 'class'], answer: 3,
      explain: 'The type of an object is its <b>class</b>. The type of the object referenced by <em>crush</em> is <em>Turtle</em>. (Slide answer: D)' },

    /* ---- Review #8 : aliasing ---- */
    { type: 'mc', tag: 'References',
      prompt: 'After all four lines, what are <b>vertex</b>’s coordinates?' +
              '<pre class="codeblock">Point origin = new Point(0, 0);\nPoint vertex = new Point(10, 20);\nPoint corner = vertex;\ncorner.setLocation(15, 25);</pre>',
      choices: ['(15, 25)', '(10, 20)', '(0, 0)', 'it has no value yet'], answer: 0,
      explain: '<em>corner = vertex</em> copies the <b>reference</b>, not the object — both names point at one Point. Changing it through <em>corner</em> changes what <em>vertex</em> sees.' },
    { type: 'mc', tag: 'References',
      prompt: 'In that same code, how many <b>Point objects</b> actually exist?',
      choices: ['2', '3', '1', '4'], answer: 0,
      explain: 'Only two <em>new</em> calls, so only <b>two</b> objects — even though three variables point at them. <em>corner</em> and <em>vertex</em> share one.' },
    { type: 'mc', tag: 'References',
      prompt: 'In that same code, what happens to <b>origin</b>?',
      choices: ['nothing — it stays (0, 0)', 'it becomes (15, 25)', 'it becomes (10, 20)', 'it is overwritten by vertex'], answer: 0,
      explain: '<em>origin</em> references a completely separate object, so nothing done through <em>corner</em> can touch it.' },
    { type: 'mc', tag: 'References',
      prompt: 'Why does <code>corner.setLocation(15, 25)</code> change <code>vertex</code>, when <code>name.toUpperCase()</code> could not change <code>name</code>?',
      choices: ['Point is mutable; String is immutable', 'setLocation is a static method', 'Point is a primitive type', 'vertex was declared after corner'], answer: 0,
      explain: '<b>Point can be changed in place</b>, so every alias sees it. <b>String cannot</b> — its methods return new objects instead.' },

    /* ---- Review #9 ---- */
    { type: 'mc', tag: 'Key terms', prompt: 'Which of these is <b>NOT</b> true about the definition of an algorithm?',
      choices: ['An algorithm must be terminating', 'An algorithm must be executable',
                'An algorithm must be unambiguous', 'An algorithm must be written in a programming language'], answer: 3,
      explain: 'An algorithm <b>need not</b> be written in a programming language, though it may be. It must be <b>unambiguous, executable and terminating</b>. (Slide answer: D)' },

    /* ---- typed recall ---- */
    { type: 'type', tag: 'Key terms', prompt: 'What single keyword creates a new object in Java?',
      accept: ['new'], explain: 'The <b>new</b> keyword calls the constructor and builds the object.' },
    { type: 'type', tag: 'Key terms', prompt: 'A class-type variable stores a ______ to the object, not the object itself.',
      accept: ['reference', 'address', 'memory address'], explain: 'It stores a <b>reference</b> — the address in memory.' },
    { type: 'type', tag: 'Strings', prompt: 'One word: String objects can never be changed. They are ______.',
      accept: ['immutable'], explain: '<b>Immutable</b>. Every String method returns a new String rather than editing the old one.' },
    { type: 'type', tag: 'References', prompt: 'One word: when two variables reference the same object, each is an ______ of the other.',
      accept: ['alias'], explain: 'They are <b>aliases</b> — one object, two names.' },
    { type: 'type', tag: 'Key terms', prompt: 'The type of an object is its ______.',
      accept: ['class'], explain: 'Its <b>class</b>. The type of the object referenced by <em>crush</em> is <em>Turtle</em>.' },
    { type: 'type', tag: 'Turtle & World', prompt: 'In which corner of a World is the point (0, 0)?',
      accept: ['upper left', 'upper-left', 'top left', 'top-left', 'the upper left', 'the top left'],
      explain: 'The <b>upper-left</b> corner — and y increases as you go <em>down</em>.' },
    { type: 'type', tag: 'Key terms', prompt: 'Fill in the blank: an algorithm must be unambiguous, executable and ______.',
      accept: ['terminating'], explain: 'It must <b>terminate</b> — it cannot run forever.' }
  ],

  notes: [
    {
      title: 'Spotting the parts of a line',
      emoji: '🔍',
      html: '<pre class="codeblock">Turtle crush = new Turtle();\ncrush.turn(-45);</pre>' +
            '<table class="mini"><tr><th>Part</th><th>Which one</th><th>How you know</th></tr>' +
            '<tr><td>class</td><td class="hit">Turtle</td><td>starts with a capital letter</td></tr>' +
            '<tr><td>variable declared</td><td class="hit">crush</td><td>its type is right in front of it</td></tr>' +
            '<tr><td>variable used</td><td class="hit">crush</td><td>no type in front of it (line 2)</td></tr>' +
            '<tr><td>method</td><td class="hit">turn</td><td>after a dot, followed by parentheses</td></tr>' +
            '<tr><td>argument</td><td class="hit">-45</td><td>inside the parentheses</td></tr></table>'
    },
    {
      title: 'The World is upside-down',
      emoji: '🐢',
      html: '<p>The origin <b>(0, 0)</b> is the <b>upper-left</b> corner. <b>x</b> grows to the right, ' +
            '<b>y</b> grows <u>downward</u>. A new Turtle faces <b>north</b>.</p>' +
            '<p class="note-tip">💡 So a fresh turtle’s first <code>forward()</code> makes its <b>y get smaller</b>. ' +
            'That one fact is most of Review #2.</p>' +
            '<p><code>new World(w, h)</code> — width first. <code>new Turtle(x, y, world)</code> — position, then which world.</p>'
    },
    {
      title: 'Value vs reference',
      emoji: '🔗',
      html: '<table class="mini"><tr><th>Kind</th><th>The variable holds</th></tr>' +
            '<tr><td>primitive <span class="muted">(int, double, boolean, char)</span></td><td class="hit">the value itself</td></tr>' +
            '<tr><td>class type <span class="muted">(String, Turtle, Point…)</span></td><td class="miss">a reference to the object</td></tr></table>' +
            '<p class="note-tip">💡 <code>Point corner = vertex;</code> copies the <b>arrow</b>, not the object. ' +
            'Now one object has two names, and a change through either is visible through both.</p>'
    },
    {
      title: 'Strings hand things back',
      emoji: '🔤',
      html: '<p>String is <b>immutable</b> — no method can change an existing String. They all return a <b>new</b> one, ' +
            'so you have to catch it:</p>' +
            '<pre class="codeblock">message.concat("There!");             // ❌ result thrown away\nmessage = message.concat("There!");   // ✅ assigned back</pre>' +
            '<p class="note-tip">💡 Same trap with <code>toUpperCase()</code>, <code>substring()</code>, <code>trim()</code> — ' +
            'if you do not assign it, nothing happened.</p>'
    },
    {
      title: 'The four compiler errors',
      emoji: '⚠️',
      html: '<table class="mini"><tr><th>Mistake</th><th>Looks like</th></tr>' +
            '<tr><td>never initialized</td><td><code>Random g;</code> then <code>g.nextInt(6)</code></td></tr>' +
            '<tr><td>missing <b>new</b></td><td><code>Random g = Random();</code></td></tr>' +
            '<tr><td>declared twice</td><td><code>String m = …;</code> then <code>String m = …;</code></td></tr>' +
            '<tr><td>type mismatch</td><td><code>Random num = new Random(); num = num.nextInt(6);</code></td></tr></table>' +
            '<p class="note-tip">💡 Ignoring a return value is <b>not</b> an error — it compiles happily and quietly does nothing.</p>'
    },
    {
      title: 'What an algorithm must be',
      emoji: '📐',
      html: '<p>An algorithm is a series of steps that is:</p>' +
            '<ul class="trap"><li><b>unambiguous</b> — exactly one way to read each step</li>' +
            '<li><b>executable</b> — each step can actually be carried out</li>' +
            '<li><b>terminating</b> — it eventually stops</li></ul>' +
            '<p class="note-tip">💡 It does <u>not</u> have to be written in a programming language. That is the trick in Review #9.</p>'
    }
  ]
});
