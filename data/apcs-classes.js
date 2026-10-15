/* ==================================================================
   AP Computer Science A — Unit 2: Classes (practice test)
   Built from "Unit 2: Classes – Unit Targets Linked to Resources"
   in APCSUnit2/. One deck per target (4 and 5 share one), and
   every traced answer below was checked by running it in Java.
   ================================================================== */
StudyData.register({
  id: 'apcs-classes',
  subject: 'AP Comp Sci',
  title: 'Unit 2 · Classes',
  subtitle: 'Practice test — headers, constructors, Scanner, Strings, casts, scope, static',
  lang: 'Java',
  date: '2026-10-15',
  emoji: '🏗️',
  accent: '#e8641e',

  checklist: [
    'I can define and identify the following based on syntax and context clues: <em>parameter</em>, <em>parameter type</em>, <em>visibility</em>, <em>method</em>, <em>return type</em>.',
    'I can define <em>instance variables</em> for a class with the appropriate visibility.',
    'I can define the <em>default</em> and <em>non-default constructors</em> of a class.',
    'I can define <em>accessor</em> and <em>mutator</em> methods of a class.',
    'I can define the <em>toString</em> method of a class.',
    'I use the <em>Scanner</em> class to read a variety of input from the terminal and store those values in variables.',
    'I can write code that applies the <em>length</em>, <em>substring</em>, and <em>indexOf</em> String methods.',
    'I can describe operators, precedence, promotion, and casts and evaluate code that depends on these concepts.',
    'I can apply my understanding of variable scope (local, parameter, instance) and how values are passed to methods to trace code and determine the value of variables.',
    'I can compare and contrast the behavior of the <em>static</em> keyword on variables and methods and its impact on code using those variables and methods.'
  ],

  gallery: [
    { src: 'APCSUnit2/Unit2TargetsP1.png', label: 'Unit 2 targets — p. 1' },
    { src: 'APCSUnit2/Unit2TargetsP2.png', label: 'Unit 2 targets — p. 2' }
  ],

  decks: [
    /* ---------------------------------------------------------- */
    {
      id: 'header',
      name: 'Method headers',
      emoji: '🔍',
      description: 'Target 1 — the parts of a method',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'visibility',     en: 'public or private — who is allowed to use it',
          note: '<code>public</code> = any class can use it. <code>private</code> = only code inside this class.' },
        { fr: 'return type',    en: 'the type just before the method name — what kind of value the method hands back' },
        { fr: 'void',           en: 'the return type of a method that hands back nothing' },
        { fr: 'method name',    en: 'the identifier just before the parentheses — what you call it by' },
        { fr: 'parameter',      en: 'a variable declared inside the header’s parentheses that receives a value when the method is called' },
        { fr: 'parameter type', en: 'the type written in front of each parameter name, like double in (double amount)' },
        { fr: 'argument',       en: 'the actual value passed in the call, like 50.0 in acct.deposit(50.0)',
          note: 'Parameter = the variable in the <b>header</b>. Argument = the value in the <b>call</b>.' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'ivars',
      name: 'Instance variables',
      emoji: '📦',
      description: 'Target 2 — the data each object carries',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'instance variable', en: 'declared in the class but outside every method — each object gets its own copy' },
        { fr: 'private',           en: 'the visibility instance variables should have — only code inside the class can touch them' },
        { fr: 'encapsulation',     en: 'hiding the data with private and letting other classes reach it only through public methods' },
        { fr: 'state',             en: 'the current values stored in an object’s instance variables' },
        { fr: 'null',              en: 'the default value of an object-type instance variable (like a String) that was never set',
          note: 'Never set? int → 0, double → 0.0, boolean → false, String / objects → null.' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'ctors',
      name: 'Constructors',
      emoji: '🏗️',
      description: 'Target 3 — default and non-default',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'constructor',             en: 'a special method with the same name as the class and NO return type — it runs when new creates an object' },
        { fr: 'default constructor',     en: 'a constructor with no parameters — it gives every instance variable a starting value',
          note: 'Write no constructor at all and Java quietly supplies an empty no-parameter one. Write <em>any</em> constructor and that free one is gone.' },
        { fr: 'non-default constructor', en: 'a constructor with parameters, so whoever calls new chooses the starting values' },
        { fr: 'new',                     en: 'the keyword that builds an object and calls its constructor' },
        { fr: 'overloading',             en: 'two constructors (or methods) with the same name but different parameter lists' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'getset',
      name: 'Accessors, mutators & toString',
      emoji: '🔧',
      description: 'Targets 4 and 5 — getters, setters and toString',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'accessor', en: 'returns the value of an instance variable and changes nothing — a “getter”, like getBalance()' },
        { fr: 'mutator',  en: 'changes an instance variable — a “setter”, usually void with a parameter, like setBalance(double b)' },
        { fr: 'return',   en: 'the statement that sends a value back to the caller and immediately ends the method' },
        { fr: 'toString', en: 'returns a String describing the object — println and + call it for you',
          note: 'It <b>returns</b> the String. It never prints it.' },
        { fr: 'public String toString()', en: 'the exact header toString needs, so println will use it' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'scanner',
      name: 'Scanner input',
      emoji: '⌨️',
      description: 'Target 6 — reading from the terminal',
      ask: 'forward',
      promptFwd: 'What does <b>%s</b> do?',
      cards: [
        { fr: 'import java.util.Scanner;',               en: 'lets the file use Scanner — it goes at the very top, above the class' },
        { fr: 'Scanner input = new Scanner(System.in);', en: 'creates a Scanner that reads what the user types in the terminal' },
        { fr: 'input.nextInt()',     en: 'reads the next whole number as an int' },
        { fr: 'input.nextDouble()',  en: 'reads the next number as a double' },
        { fr: 'input.next()',        en: 'reads the next single word — it stops at a space' },
        { fr: 'input.nextLine()',    en: 'reads the rest of the line, spaces and all' },
        { fr: 'input.nextBoolean()', en: 'reads true or false' },
        { fr: 'input.nextLine() right after input.nextInt()',
          en: 'returns "" — it only grabs the leftover end of the line',
          note: 'Fix: call <code>input.nextLine();</code> once on its own to throw away the leftover, then read the real line.' },
        { fr: 'typing 3.5 when the code calls nextInt()',
          en: 'the program crashes with an InputMismatchException' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'strings',
      name: 'String methods',
      emoji: '🔤',
      description: 'Target 7 — length, substring, indexOf',
      ask: 'forward',
      promptFwd: 'What does <b>%s</b> return?',
      cards: [
        { fr: '"COMPUTER".length()',       en: '8',
          note: 'Count the letters. The last index is length() − 1 = 7.' },
        { fr: '"COMPUTER".substring(3)',   en: '"PUTER"',
          note: 'One argument: from index 3 to the end.' },
        { fr: '"COMPUTER".substring(0, 3)', en: '"COM"',
          note: 'Starts AT 0, stops BEFORE 3 — indexes 0, 1, 2.' },
        { fr: '"COMPUTER".substring(3, 4)', en: '"P"',
          note: '(i, i + 1) is always exactly one character.' },
        { fr: '"COMPUTER".substring(7)',   en: '"R"',
          note: 'Index 7 is the last character.' },
        { fr: '"COMPUTER".substring(8)',   en: '"" — the empty String',
          note: 'Starting at length() is allowed and gives "". Starting at 9 would crash.' },
        { fr: '"COMPUTER".indexOf("PUT")', en: '3',
          note: 'The index where the match <em>starts</em>.' },
        { fr: '"COMPUTER".indexOf("T")',   en: '5' },
        { fr: '"COMPUTER".indexOf("put")', en: '-1',
          note: 'Case matters, so "put" isn’t in "COMPUTER". −1 means not found.' },
        { fr: '"COMPUTER".substring(5, 9)', en: 'StringIndexOutOfBoundsException — 9 is past the end' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'ops',
      name: 'Operators & casts',
      emoji: '🧮',
      description: 'Target 8 — precedence, promotion, casting',
      ask: 'forward',
      promptFwd: 'What does <b>%s</b> evaluate to?',
      cards: [
        { fr: '9 / 2',            en: '4',   note: 'int ÷ int chops off the decimal. It never rounds.' },
        { fr: '9.0 / 2',          en: '4.5', note: 'One double makes the whole operation double. That is <b>promotion</b>.' },
        { fr: '(double) 7 / 2',   en: '3.5', note: 'The cast happens FIRST (7 → 7.0), then the division.' },
        { fr: '(double) (7 / 2)', en: '3.0', note: 'The parentheses divide first (3), THEN the cast makes it 3.0.' },
        { fr: '7 % 3',            en: '1',   note: '7 ÷ 3 = 2 remainder <b>1</b>.' },
        { fr: '2 % 9',            en: '2',   note: 'When the left side is smaller, % gives back the left side.' },
        { fr: '5 / 10',           en: '0' },
        { fr: '(int) 6.99',       en: '6',   note: 'Casting to int truncates. It never rounds.' },
        { fr: '(int) -2.7',       en: '-2',  note: 'Truncation goes toward zero.' },
        { fr: '(int) (6.6 + 0.5)', en: '7',  note: 'Add 0.5, then cast — the standard way to round a positive number.' },
        { fr: '2 + 3 * 4',        en: '14',  note: '* / % happen before + −.' },
        { fr: '(2 + 3) * 4',      en: '20' },
        { fr: '1 + 2 + "3"',      en: '"33"',  note: 'Left to right: 1 + 2 = 3 first, then 3 + "3" joins into "33".' },
        { fr: '"1" + 2 + 3',      en: '"123"', note: 'Once a String is on the left, every + after it joins text.' },
        { fr: 'Integer.MAX_VALUE + 1', en: 'Integer.MIN_VALUE — it overflows and wraps around' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'scope',
      name: 'Scope & passing',
      emoji: '🔭',
      description: 'Target 9 — local, parameter, instance',
      promptRev: 'Which term means: <b>%s</b>?',
      cards: [
        { fr: 'scope',          en: 'the part of the program where a variable can be used' },
        { fr: 'local variable', en: 'declared inside a method or block — it vanishes when that block ends' },
        { fr: 'shadowing',      en: 'a parameter or local variable with the same name as an instance variable hides it',
          note: '<code>balance = balance;</code> just copies the parameter into itself. Write <code>this.balance = balance;</code>' },
        { fr: 'this',           en: 'the current object — this.name means the instance variable, not the parameter' },
        { fr: 'pass by value',  en: 'Java copies the argument into the parameter, so changing the parameter never changes the caller’s variable' },
        { fr: 'passing an object reference',
          en: 'the method gets a copy of the reference — it can change the object, but can’t make the caller’s variable point somewhere new' }
      ]
    },

    /* ---------------------------------------------------------- */
    {
      id: 'static',
      name: 'static',
      emoji: '📌',
      description: 'Target 10 — shared by the class, not the object',
      ask: 'forward',
      promptFwd: 'What’s true about <b>%s</b>?',
      cards: [
        { fr: 'a static variable',                en: 'there is ONE copy, shared by every object of the class' },
        { fr: 'an instance variable (no static)',  en: 'every object gets its own separate copy' },
        { fr: 'a static method',                  en: 'it belongs to the class — call it as ClassName.method(), no object needed' },
        { fr: 'a static method using an instance variable', en: 'compiler error — there is no object for it to belong to' },
        { fr: 'an instance method using a static variable',  en: 'allowed — every object can see the shared copy' },
        { fr: 'Math.sqrt(16)',                    en: 'a static method call — it returns 4.0 without ever making a Math object' },
        { fr: 'private static int count;  with count++ in the constructor',
          en: 'it counts how many objects have been created' }
      ]
    }
  ],

  quizDeckMap: {
    'Method headers':       'header',
    'Instance variables':   'ivars',
    'Constructors':         'ctors',
    'Accessors & mutators': 'getset',
    'toString':             'getset',
    'Scanner':              'scanner',
    'String methods':       'strings',
    'Operators & casts':    'ops',
    'Scope & passing':      'scope',
    'static':               'static'
  },

  quizBank: [
    /* ================= Target 1 : method headers ================= */
    { type: 'mc', tag: 'Method headers',
      prompt: 'What is the <b>return type</b> of this method?' +
              '<pre class="codeblock">public boolean withdraw(double amount)</pre>',
      choices: ['public', 'amount', 'double', 'boolean'], answer: 3,
      explain: 'The return type sits <b>right before the method name</b>. <em>double</em> is the <em>parameter type</em>.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'What is the <b>parameter type</b>?' +
              '<pre class="codeblock">public boolean withdraw(double amount)</pre>',
      choices: ['boolean', 'double', 'amount', 'withdraw'], answer: 1,
      explain: 'Inside the parentheses, the type comes first and the name second: <em>double</em> is the type, <em>amount</em> is the parameter.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'What is the <b>parameter</b>?' +
              '<pre class="codeblock">public boolean withdraw(double amount)</pre>',
      choices: ['amount', 'withdraw', 'public', 'double'], answer: 0,
      explain: 'The parameter is the <b>variable</b> in the parentheses — <em>amount</em>. It receives whatever value the caller passes in.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'Which statement about this method is <b>true</b>?' +
              '<pre class="codeblock">private void flip()</pre>',
      choices: ['It returns a boolean', 'It returns nothing and takes no parameters',
                'Any class can call it', 'Its parameter is void'], answer: 1,
      explain: '<b>void</b> means it returns nothing, and the empty <b>()</b> means no parameters. <b>private</b> means only code inside its own class can call it.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'The header is <code>public void deposit(double amount)</code>. In the call below, what is <b>50.0</b>?' +
              '<pre class="codeblock">acct.deposit(50.0);</pre>',
      choices: ['a parameter', 'an argument', 'a return type', 'an instance variable'], answer: 1,
      explain: 'The value in the <b>call</b> is the <b>argument</b>. It gets copied into the <b>parameter</b> <em>amount</em> from the header.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'Which header is for a method that any class can call, takes a name and an age, and returns nothing?',
      choices: ['public void setInfo(String name, int age)', 'public void setInfo(name, age)',
                'public setInfo(String name, int age)', 'private String setInfo(String name, int age)'], answer: 0,
      explain: 'Needs <b>public</b>, a <b>void</b> return type, and a <b>type in front of every parameter</b>. <code>public setInfo(…)</code> has no return type and <code>setInfo(name, age)</code> has no parameter types — both are compiler errors.' },
    { type: 'mc', tag: 'Method headers',
      prompt: '<code>calc</code> has the method <code>public double average(int a, int b)</code>. Which line compiles?',
      choices: ['int avg = calc.average(3, 4);', 'double avg = calc.average(3);',
                'double avg = calc.average(3, 4);', 'double avg = calc.average(int 3, int 4);'], answer: 2,
      explain: 'It returns a <b>double</b>, so it can’t go into an <em>int</em>. It needs <b>exactly two</b> int arguments, and you never write types in a call.' },
    { type: 'mc', tag: 'Method headers',
      prompt: 'Using only <b>context clues</b>, what can you tell about <code>getTotal</code> from this line?' +
              '<pre class="codeblock">int total = machine.getTotal(5, price);</pre>',
      choices: ['It is a void method', 'It takes no parameters',
                'It takes two parameters and returns something that fits in an int', 'machine is its return type'], answer: 2,
      explain: 'Two arguments → two parameters. Its result is stored in an <em>int</em>, so it must return an int (or something that fits). A void method has nothing to store.' },

    /* ================= Target 2 : instance variables ================= */
    { type: 'mc', tag: 'Instance variables',
      prompt: 'What is the <b>best</b> way to declare the instance variables of a <code>Door</code> class?',
      choices: ['public boolean isOpen;  public String color;', 'private boolean isOpen;  private String color;',
                'boolean isOpen;  String color;  (inside the constructor)', 'private void isOpen;  private void color;'], answer: 1,
      explain: 'Instance variables should be <b>private</b> (encapsulation). Public ones compile but let any class change them. Declared inside the constructor they’d be <em>local</em> variables, and <em>void</em> is not a variable type.' },
    { type: 'mc', tag: 'Instance variables',
      prompt: 'Where are instance variables declared?',
      choices: ['inside the constructor', 'above the class header, next to the imports',
                'inside main', 'inside the class, but outside every method'], answer: 3,
      explain: 'Inside the class, outside all methods — usually at the top. That’s what makes them visible to <b>every</b> method in the class.' },
    { type: 'mc', tag: 'Instance variables',
      prompt: 'Why do we make instance variables <code>private</code>?',
      choices: ['So they run faster', 'So every object shares the same copy',
                'So only the class’s own methods can change them — other classes must use its methods', 'Private variables don’t need a type'], answer: 2,
      explain: 'That is <b>encapsulation</b>. Sharing one copy is what <em>static</em> does — that is something different.' },
    { type: 'mc', tag: 'Instance variables',
      prompt: 'What happens when the last line runs?' +
              '<pre class="codeblock">public class Door {\n  private boolean isOpen;\n  // constructor and methods…\n}\n\n// in a different class:\nDoor d = new Door();\nd.isOpen = true;</pre>',
      choices: ['Compiler error — isOpen is private to Door', 'The door opens', 'Runtime error', 'Nothing — the line is ignored'], answer: 0,
      explain: '<b>private</b> means only code inside <em>Door</em> can use <em>isOpen</em>. Another class has to call a public method, like <code>d.open()</code>.' },
    { type: 'mc', tag: 'Instance variables',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Coin {\n  private int value;\n  public Coin(int v) { value = v; }\n  public int getValue() { return value; }\n}\n\nCoin a = new Coin(5);\nCoin b = new Coin(25);\nSystem.out.println(a.getValue() + b.getValue());</pre>',
      choices: ['50', '30', '525', '10'], answer: 1,
      explain: 'Each object has <b>its own</b> <em>value</em>: 5 and 25. Both are ints, so + adds them: <b>30</b>.' },
    { type: 'mc', tag: 'Instance variables',
      prompt: 'The constructor never sets <code>color</code>. What does <code>getColor()</code> return?' +
              '<pre class="codeblock">public class Door {\n  private String color;\n  public Door() { }\n  public String getColor() { return color; }\n}</pre>',
      choices: ['""', 'null', '"color"', 'Compiler error'], answer: 1,
      explain: 'An object-type instance variable that was never set holds <b>null</b>. (int → 0, double → 0.0, boolean → false.)' },

    /* ================= Target 3 : constructors ================= */
    { type: 'mc', tag: 'Constructors',
      prompt: '<code>Rectangle</code> has <code>private int width;</code> and <code>private int height;</code>. Which is a correct <b>default constructor</b>?',
      choices: ['public void Rectangle() { width = 1; height = 1; }', 'public Rectangle(int w, int h) { width = w; height = h; }',
                'public rectangle() { width = 1; height = 1; }', 'public Rectangle() { width = 1; height = 1; }'], answer: 3,
      explain: 'A constructor has the class’s <b>exact name</b> and <b>no return type</b>. Adding <em>void</em> turns it into a regular method. Lower-case <em>rectangle</em> is a compiler error. The one with parameters is a <em>non-default</em> constructor.' },
    { type: 'mc', tag: 'Constructors',
      prompt: 'The only constructor is <code>public VendingMachine(int sodas, double price)</code>. Which line compiles?',
      choices: ['VendingMachine vm = new VendingMachine(10, 1.25);', 'VendingMachine vm = new VendingMachine(1.25, 10);',
                'VendingMachine vm = new VendingMachine();', 'VendingMachine vm = VendingMachine(10, 1.25);'], answer: 0,
      explain: 'Arguments must match the parameters <b>in order</b>: int, then double. 1.25 can’t go into an int. There’s no no-parameter constructor because one with parameters was written. And you need <b>new</b>.' },
    { type: 'mc', tag: 'Constructors',
      prompt: 'Which statement about constructors is <b>FALSE</b>?',
      choices: ['A constructor has the same name as its class', 'A constructor’s return type is void',
                'A class can have more than one constructor', 'The keyword new calls a constructor'], answer: 1,
      explain: 'A constructor has <b>no return type at all</b> — not even void. Write void and it becomes a normal method.' },
    { type: 'mc', tag: 'Constructors',
      prompt: 'What happens?' +
              '<pre class="codeblock">public class Milk {\n  private double gallons;\n  public Milk(double g) { gallons = g; }\n}\n\nMilk m = new Milk();</pre>',
      choices: ['gallons is 0.0', 'Compiler error — there is no Milk() constructor', 'Runtime error', 'gallons is null'], answer: 1,
      explain: 'Java only gives you a free no-parameter constructor when you write <b>no constructors at all</b>. Milk has one with a parameter, so <code>new Milk()</code> doesn’t compile.' },
    { type: 'mc', tag: 'Constructors',
      prompt: 'This class has <b>no constructor written</b>. What is printed?' +
              '<pre class="codeblock">public class Counter {\n  private int count;\n  public int getCount() { return count; }\n}\n\nCounter c = new Counter();\nSystem.out.println(c.getCount());</pre>',
      choices: ['0', 'null', 'Compiler error — Counter has no constructor', 'Runtime error'], answer: 0,
      explain: 'With no constructor written, Java supplies an empty default one. <em>count</em> is an int that was never set, so it’s <b>0</b>.' },
    { type: 'mc', tag: 'Constructors',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Door {\n  private String color;\n  private boolean isOpen;\n\n  public Door() { color = "white"; isOpen = false; }\n  public Door(String c) { color = c; isOpen = true; }\n\n  public String toString() { return color + " " + isOpen; }\n}\n\nDoor d1 = new Door();\nDoor d2 = new Door("red");\nSystem.out.println(d1 + ", " + d2);</pre>',
      choices: ['red true, white false', 'white false, white false', 'white false, red true', 'Compiler error — two constructors with the same name'], answer: 2,
      explain: 'Two constructors with different parameter lists is fine (<b>overloading</b>). <em>d1</em> uses the default one, <em>d2</em> the one that takes a String. Then + calls <b>toString</b> on each.' },

    /* ================= Targets 4 & 5 : accessors, mutators, toString ================= */
    { type: 'mc', tag: 'Accessors & mutators',
      prompt: 'Which is a correct <b>accessor</b> for <code>private int sodas;</code>?',
      choices: ['public void getSodas() { return sodas; }', 'public int getSodas(int s) { sodas = s; }',
                'public void setSodas(int s) { sodas = s; }', 'public int getSodas() { return sodas; }'], answer: 3,
      explain: 'An accessor <b>returns</b> the value, so its return type must match (<em>int</em>). A void method can’t return a value, and <code>getSodas(int s)</code> never returns anything. <em>setSodas</em> is a mutator.' },
    { type: 'mc', tag: 'Accessors & mutators',
      prompt: 'Which is a correct <b>mutator</b> that changes <code>price</code> to a new value?',
      choices: ['public void setPrice(double p) { p = price; }', 'public setPrice(double p) { price = p; }',
                'public double setPrice() { return price; }', 'public void setPrice(double p) { price = p; }'], answer: 3,
      explain: 'The instance variable goes on the <b>left</b>: <code>price = p;</code>. <code>p = price;</code> is backwards — it compiles but changes nothing. <code>public setPrice(…)</code> is missing its return type (void).' },
    { type: 'mc', tag: 'Accessors & mutators',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class VendingMachine {\n  private int sodas;\n  public VendingMachine(int s) { sodas = s; }\n  public void sell(int n) { sodas = sodas - n; }\n  public void restock() { sodas = sodas + 10; }\n  public int getSodas() { return sodas; }\n}\n\nVendingMachine vm = new VendingMachine(5);\nvm.sell(3);\nvm.restock();\nvm.sell(4);\nSystem.out.println(vm.getSodas());</pre>',
      choices: ['8', '12', '18', '2'], answer: 0,
      explain: '5 → sell 3 → <b>2</b> → restock → <b>12</b> → sell 4 → <b>8</b>. The mutators change the same instance variable each time.' },
    { type: 'mc', tag: 'Accessors & mutators',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Rectangle {\n  private int width;\n  private int height;\n  public Rectangle(int w, int h) { width = w; height = h; }\n  public void setWidth(int w) { width = w; }\n  public int getArea() { return width * height; }\n}\n\nRectangle r = new Rectangle(4, 6);\nr.setWidth(10);\nSystem.out.println(r.getArea());</pre>',
      choices: ['24', '60', '40', '16'], answer: 1,
      explain: 'The mutator changes width from 4 to <b>10</b>; height is still 6. 10 × 6 = <b>60</b>.' },
    { type: 'mc', tag: 'Accessors & mutators',
      prompt: 'What happens with this accessor?' +
              '<pre class="codeblock">public int getArea() {\n  int area = width * height;\n}</pre>',
      choices: ['It returns 0', 'Compiler error — missing return statement', 'Runtime error', 'It returns the area'], answer: 1,
      explain: 'A method with a non-void return type <b>must return</b> a value. It calculates the area and then never sends it back.' },
    { type: 'mc', tag: 'toString',
      prompt: 'Which header makes <code>System.out.println(obj)</code> use <b>your</b> toString?',
      choices: ['public void toString()', 'private String toString()', 'public String toString()', 'public String toString(String s)'], answer: 2,
      explain: 'It must be exactly <b>public String toString()</b>. Void and private don’t compile. With a parameter it’s a different method, so println ignores it.' },
    { type: 'mc', tag: 'toString',
      prompt: 'What’s wrong with this toString?' +
              '<pre class="codeblock">public String toString() {\n  System.out.println("Door: " + color);\n}</pre>',
      choices: ['Nothing — it works', 'Compiler error — it must return a String, not print one',
                'It prints the door twice', 'It should be void'], answer: 1,
      explain: 'toString <b>returns</b> the String; whoever calls it decides whether to print it. Fix: <code>return "Door: " + color;</code>' },
    { type: 'mc', tag: 'toString',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Rectangle {\n  private int width;\n  private int height;\n  public Rectangle(int w, int h) { width = w; height = h; }\n  public String toString() { return width + " x " + height; }\n}\n\nRectangle r = new Rectangle(3, 5);\nSystem.out.println("Box: " + r);</pre>',
      choices: ['Box: r', 'Box: 15', 'Box: 3 x 5', 'Box: Rectangle@1b6d3586'], answer: 2,
      explain: 'Joining an object to a String with + calls its <b>toString</b> automatically.' },
    { type: 'mc', tag: 'toString',
      prompt: '<code>Coin</code> has <b>no</b> toString method. What does <code>System.out.println(c)</code> print?',
      choices: ['something like Coin@6d06d69c — the class name and a hash code', 'Compiler error', 'the values of all its instance variables', 'null'], answer: 0,
      explain: 'Without your own toString, Java uses the built-in one: the class name, <b>@</b>, and a hex hash code. Readable output means writing toString yourself.' },
    { type: 'mc', tag: 'toString',
      prompt: 'If <code>width</code> is 3 and <code>height</code> is 5, what does this toString return?' +
              '<pre class="codeblock">public String toString() {\n  return "Size: " + width + height;\n}</pre>',
      choices: ['Size: 35', 'Size: 8', 'Size: 15', 'Size: width + height'], answer: 0,
      explain: '+ runs <b>left to right</b>. "Size: " + 3 is already a String, so + 5 just joins on "5". To add them, write <code>"Size: " + (width + height)</code>.' },

    /* ================= Target 6 : Scanner ================= */
    { type: 'mc', tag: 'Scanner',
      prompt: 'Which line must go at the top of the file to use Scanner?',
      choices: ['import java.util.Scanner;', 'import java.io.Scanner;', 'import java.Scanner;', 'include Scanner;'], answer: 0,
      explain: 'Scanner lives in <b>java.util</b>.' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'Which line creates a Scanner that reads what the user types?',
      choices: ['Scanner input = new Scanner(System.in);', 'Scanner input = new Scanner();',
                'Scanner input = Scanner(System.in);', 'Scanner input = new Scanner(System.out);'], answer: 0,
      explain: '<b>System.in</b> is the keyboard/terminal. System.out is where output <em>goes</em>.' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'The user types <code>Ada Lovelace</code> and presses Enter. What is printed?' +
              '<pre class="codeblock">String name = input.next();\nSystem.out.println(name);</pre>',
      choices: ['Ada', 'Ada Lovelace', 'Lovelace', 'Compiler error'], answer: 0,
      explain: '<b>next()</b> reads one word and stops at the space. To get the whole line, use <b>nextLine()</b>.' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'The user types <code>Ada Lovelace</code> and presses Enter. What is printed?' +
              '<pre class="codeblock">String name = input.nextLine();\nSystem.out.println(name);</pre>',
      choices: ['Ada', 'Lovelace', 'an empty line', 'Ada Lovelace'], answer: 3,
      explain: '<b>nextLine()</b> reads everything up to the end of the line, spaces included.' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'The user types <code>17</code>, presses Enter, then types <code>Sam</code> and presses Enter. What is printed?' +
              '<pre class="codeblock">int age = input.nextInt();\nString name = input.nextLine();\nSystem.out.println(age + "[" + name + "]");</pre>',
      choices: ['17[Sam]', '17[ Sam]', 'Runtime error', '17[]'], answer: 3,
      explain: '<b>The classic trap.</b> nextInt() reads 17 but leaves the Enter behind. nextLine() grabs that leftover and returns <b>""</b> right away. Fix: put an extra <code>input.nextLine();</code> after nextInt().' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'The user types <code>3.5</code>. What happens?' +
              '<pre class="codeblock">int n = input.nextInt();</pre>',
      choices: ['n is 3', 'n is 4', 'Compiler error', 'Runtime error — InputMismatchException'], answer: 3,
      explain: 'It compiles fine — the problem only shows up when it <b>runs</b>. 3.5 isn’t an int, so nextInt() crashes. Use <b>nextDouble()</b> for decimals.' },
    { type: 'mc', tag: 'Scanner',
      prompt: 'The user types <code>12 7</code> on one line. What is printed?' +
              '<pre class="codeblock">int a = input.nextInt();\nint b = input.nextInt();\nSystem.out.println(a / b + a % b);</pre>',
      choices: ['6', '1', '5', '15'], answer: 0,
      explain: 'Two nextInt() calls read the two numbers on one line. 12 / 7 = <b>1</b> (int division), 12 % 7 = <b>5</b>, and 1 + 5 = <b>6</b>.' },

    /* ================= Target 7 : String methods ================= */
    { type: 'mc', tag: 'String methods',
      prompt: 'What does this return?' +
              '<pre class="codeblock">String s = "VENDING";\ns.substring(2, 5)</pre>',
      choices: ['"ENDI"', '"NDI"', '"NDIN"', '"END"'], answer: 1,
      explain: 'V0 E1 <b>N2 D3 I4</b> N5 G6. Start AT 2, stop BEFORE 5 → 5 − 2 = <b>3 letters</b>.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What does this return?' +
              '<pre class="codeblock">String s = "VENDING";\ns.substring(s.length() - 3)</pre>',
      choices: ['"NG"', '"DING"', '"ING"', 'StringIndexOutOfBoundsException'], answer: 2,
      explain: 'length() is 7, so this is substring(4): from index 4 to the end → <b>"ING"</b>. That’s the trick for “the last 3 letters”.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What does <code>"banana".indexOf("an")</code> return?',
      choices: ['1', '2', '-1', '3'], answer: 0,
      explain: 'indexOf returns the <b>first</b> place the match starts: b0 <b>a1 n2</b>… → <b>1</b>.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What does <code>"banana".indexOf("x")</code> return?',
      choices: ['-1', 'null', '0', '6'], answer: 0,
      explain: '<b>−1</b> means “not found”. It never returns null.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What happens?' +
              '<pre class="codeblock">String s = "code";\nSystem.out.println(s.substring(2, 5));</pre>',
      choices: ['it prints de', 'it prints "de "', 'StringIndexOutOfBoundsException at runtime', 'Compiler error'], answer: 2,
      explain: '"code" has length 4, so the end index can be at most <b>4</b>. 5 is out of bounds. It compiles, but crashes when it runs.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What is printed?' +
              '<pre class="codeblock">String email = "ada@school.org";\nint at = email.indexOf("@");\nString user = email.substring(0, at);\nString domain = email.substring(at + 1);\nSystem.out.println(user + " / " + domain);</pre>',
      choices: ['ada / school.org', 'ada@ / school.org', 'ada / @school.org', 'ad / school.org'], answer: 0,
      explain: '<em>at</em> is 3. substring(0, 3) stops <b>before</b> the @ → "ada". substring(4) starts <b>after</b> it → "school.org". This indexOf + substring combo is how you split a String.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What is printed?' +
              '<pre class="codeblock">String full = "Grace Hopper";\nint space = full.indexOf(" ");\nString initials = full.substring(0, 1)\n               + full.substring(space + 1, space + 2);\nSystem.out.println(initials);</pre>',
      choices: ['G H', 'Gr', 'GH', 'GHopper'], answer: 2,
      explain: '<em>space</em> is 5. substring(0, 1) = "G", and substring(6, 7) = "H". (i, i + 1) always gives exactly one letter.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'What is printed?' +
              '<pre class="codeblock">String word = "class";\nword.substring(1);\nSystem.out.println(word.length());</pre>',
      choices: ['5', '4', 'lass', 'Compiler error'], answer: 0,
      explain: 'Strings are <b>immutable</b>. substring returns a new String, but nothing stores it, so <em>word</em> is still "class" — length <b>5</b>.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'Which expression gives the <b>last character</b> of a non-empty String <code>s</code>?',
      choices: ['s.substring(s.length())', 's.substring(1)', 's.substring(s.length() - 1)', 's.substring(s.length() - 1, s.length() + 1)'], answer: 2,
      explain: 'The last index is <b>length() − 1</b>. substring(length()) is the empty String "", and an end index of length() + 1 is out of bounds.' },
    { type: 'mc', tag: 'String methods',
      prompt: 'If <code>s</code> is long enough, how many characters are in <code>s.substring(3, 9)</code>?',
      choices: ['7', '9', '5', '6'], answer: 3,
      explain: 'substring(a, b) always has <b>b − a</b> characters: 9 − 3 = <b>6</b> (indexes 3 to 8).' },

    /* ================= Target 8 : operators, precedence, promotion, casts ================= */
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">int x = 17;\nSystem.out.println(x / 5 + x % 5);</pre>',
      choices: ['3.4', '17', '5.4', '5'], answer: 3,
      explain: '17 / 5 = <b>3</b> (int division) and 17 % 5 = <b>2</b>. 3 + 2 = <b>5</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is stored in <code>avg</code>?' +
              '<pre class="codeblock">double avg = (85 + 90 + 94) / 3;</pre>',
      choices: ['89.66666666666667', '89.0', '89', '90.0'], answer: 1,
      explain: 'Everything on the right is an int, so 269 / 3 is <b>int division → 89</b>. It only becomes a double when it’s stored: <b>89.0</b>. The decimals were lost before that happened.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'Which expression evaluates to about <b>89.67</b>?',
      choices: ['(85 + 90 + 94) / 3', '(double) ((85 + 90 + 94) / 3)', '(int) ((85 + 90 + 94) / 3.0)', '(double) (85 + 90 + 94) / 3'], answer: 3,
      explain: 'Cast <b>before</b> dividing: 269 → 269.0, then 269.0 / 3 = 89.67. Casting the answer of an int division is too late — you just get 89.0.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is the value of <code>r</code>?' +
              '<pre class="codeblock">int r = 2 + 3 * 4 % 5 - 1;</pre>',
      choices: ['-1', '19', '3', '4'], answer: 2,
      explain: '* and % come first, left to right: 3 * 4 = 12, then 12 % 5 = 2. Then + and −: 2 + 2 − 1 = <b>3</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What does <code>(int) 7.9 + (int) -2.5</code> evaluate to?',
      choices: ['6', '4', '5', '5.4'], answer: 2,
      explain: 'Casts <b>truncate toward zero</b>: 7.9 → 7 and −2.5 → −2. 7 + (−2) = <b>5</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'Which expression rounds a <b>positive</b> double <code>d</code> to the nearest int?',
      choices: ['(int) (d + 0.5)', '(int) d + 0.5', '(int) d', '(double) (d + 0.5)'], answer: 0,
      explain: 'Add 0.5 <b>first</b>, then cast. 2.6 + 0.5 = 3.1 → 3. 2.4 + 0.5 = 2.9 → 2. <code>(int) d + 0.5</code> casts first and gives a double.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">int a = 5;\ndouble b = 2;\nSystem.out.println(a / b);</pre>',
      choices: ['2', '2.5', '2.0', 'Compiler error — 2 is not a double'], answer: 1,
      explain: 'Storing 2 in a double makes it 2.0. int ÷ double <b>promotes</b> the int, so it’s 5.0 / 2.0 = <b>2.5</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What happens?' +
              '<pre class="codeblock">int total = 10.0 / 4;</pre>',
      choices: ['total is 2', 'total is 2.5', 'Compiler error — a double can’t go into an int without a cast', 'total is 3'], answer: 2,
      explain: '10.0 / 4 is a <b>double</b> (2.5). Java won’t silently drop the decimals, so you need <code>(int) (10.0 / 4)</code>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">System.out.println("Sum: " + 4 + 5);\nSystem.out.println(4 + 5 + " is the sum");</pre>',
      choices: ['Sum: 9   then   9 is the sum', 'Sum: 9   then   45 is the sum',
                'Sum: 45   then   45 is the sum', 'Sum: 45   then   9 is the sum'], answer: 3,
      explain: '+ goes <b>left to right</b>. Line 1 starts with a String, so 4 and 5 are joined as text. Line 2 adds 4 + 5 = 9 <em>before</em> it meets the String.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">int n = 10;\nn += 5;\nn /= 4;\nn *= 2 + 1;\nn--;\nSystem.out.println(n);</pre>',
      choices: ['6', '11', '10', '8'], answer: 3,
      explain: '10 → 15 → 15 / 4 = <b>3</b> (int) → <code>n *= 2 + 1</code> means n = n * (2 + 1) = <b>9</b> → 8. The right side of *= is worked out first.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is true about <code>big</code> afterwards?' +
              '<pre class="codeblock">int big = Integer.MAX_VALUE;\nbig++;</pre>',
      choices: ['It equals Integer.MAX_VALUE + 1, a bigger int', 'Runtime error — overflow',
                'It stays at Integer.MAX_VALUE', 'It equals Integer.MIN_VALUE — it wrapped around'], answer: 3,
      explain: 'An int can’t go past MAX_VALUE. It <b>overflows</b> and wraps around to the most negative int, with no error.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">double rate = 0.05;\nint years = 2;\ndouble amount = 1000 * Math.pow(1 + rate, years);\nSystem.out.println((int) amount);</pre>',
      choices: ['1102.5', '1103', '1102', '1100'], answer: 2,
      explain: '1000 × 1.05² = 1102.5. Casting to int <b>truncates</b> — it doesn’t round — so <b>1102</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'A carton holds 64 oz. With 300 oz of milk, what are <code>300 / 64</code> and <code>300 % 64</code>?',
      choices: ['4.6875 and 0', '5 and 20', '4 and 44', '4 and 0.6875'], answer: 2,
      explain: '<b>/</b> gives the full cartons: 4 (4 × 64 = 256). <b>%</b> gives what’s left over: 300 − 256 = 44 oz.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: 'What is printed?' +
              '<pre class="codeblock">System.out.println((double) (5 / 2) + 5 / 2.0);</pre>',
      choices: ['5.0', '4.0', '4.5', '5'], answer: 2,
      explain: '(double) (5 / 2) → the division happens first → 2 → <b>2.0</b>. 5 / 2.0 = <b>2.5</b>. 2.0 + 2.5 = <b>4.5</b>.' },
    { type: 'mc', tag: 'Operators & casts',
      prompt: '<code>a</code> and <code>b</code> are ints. Which expression gives their <b>exact average</b> as a double?',
      choices: ['(a + b) / 2.0', '(a + b) / 2', 'a + b / 2.0', '(double) ((a + b) / 2)'], answer: 0,
      explain: 'You need the parentheses so the <b>sum</b> is divided (precedence), and the <b>2.0</b> to avoid int division (promotion). <code>a + b / 2.0</code> only halves b.' },

    /* ================= Target 9 : scope & passing ================= */
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Account {\n  private double balance;\n  public Account(double balance) {\n    balance = balance;\n  }\n  public double getBalance() { return balance; }\n}\n\nAccount a = new Account(100.0);\nSystem.out.println(a.getBalance());</pre>',
      choices: ['100.0', 'null', 'Compiler error', '0.0'], answer: 3,
      explain: '<b>Shadowing.</b> Inside the constructor, <em>balance</em> means the <b>parameter</b>, so <code>balance = balance</code> copies it into itself. The instance variable keeps its default 0.0. Fix: <code>this.balance = balance;</code>' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public static void addTen(int x) {\n  x = x + 10;\n}\n\n// in main:\nint n = 5;\naddTen(n);\nSystem.out.println(n);</pre>',
      choices: ['15', '10', 'Compiler error', '5'], answer: 3,
      explain: '<b>Pass by value</b>: x gets a <em>copy</em> of 5. Changing x does nothing to n.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Account {\n  private double balance;\n  public Account(double b) { balance = b; }\n  public void withdraw(double amt) { balance = balance - amt; }\n  public double getBalance() { return balance; }\n}\n\npublic static void spend(Account a) {\n  a.withdraw(20.0);\n}\n\n// in main:\nAccount mine = new Account(100.0);\nspend(mine);\nSystem.out.println(mine.getBalance());</pre>',
      choices: ['100.0', '80.0', '20.0', 'Compiler error'], answer: 1,
      explain: 'The <b>reference</b> is copied, so <em>a</em> and <em>mine</em> point at the <b>same</b> Account. Withdrawing through <em>a</em> changes the object <em>mine</em> sees.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'Same <code>Account</code> class. What is printed?' +
              '<pre class="codeblock">public static void reset(Account a) {\n  a = new Account(0.0);\n}\n\n// in main:\nAccount mine = new Account(100.0);\nreset(mine);\nSystem.out.println(mine.getBalance());</pre>',
      choices: ['0.0', 'null', '100.0', 'Compiler error'], answer: 2,
      explain: '<em>a</em> is a copy of the reference. Pointing <em>a</em> at a new Account changes only the copy, so <em>mine</em> still points at the original 100.0.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What happens?' +
              '<pre class="codeblock">public class Account {\n  private double balance;\n\n  public void deposit(double amount) {\n    double newBalance = balance + amount;\n    balance = newBalance;\n  }\n\n  public double getNewBalance() {\n    return newBalance;\n  }\n}</pre>',
      choices: ['getNewBalance returns the last balance', 'getNewBalance returns 0.0',
                'Compiler error — newBalance only exists inside deposit', 'Runtime error'], answer: 2,
      explain: '<em>newBalance</em> is a <b>local variable</b>. It exists only inside <em>deposit</em>, so other methods can’t see it.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Trace {\n  private int x = 1;\n\n  public void change() {\n    int x = 5;\n    x = x + 1;\n  }\n\n  public int getX() { return x; }\n}\n\nTrace t = new Trace();\nt.change();\nSystem.out.println(t.getX());</pre>',
      choices: ['6', '5', '1', '2'], answer: 2,
      explain: '<code>int x = 5;</code> declares a brand-new <b>local</b> x that shadows the instance variable. Only the local one becomes 6, and it disappears when change() ends.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Mystery {\n  private int a;\n  public Mystery(int start) { a = start; }\n\n  public int calc(int b) {\n    a = a + b;\n    b = b * 2;\n    return a - b;\n  }\n}\n\nMystery m = new Mystery(3);\nint b = 4;\nint r = m.calc(b);\nSystem.out.println(r + " " + b);</pre>',
      choices: ['-1 8', '-1 -1', '7 4', '-1 4'], answer: 3,
      explain: 'a = 3 + 4 = <b>7</b>. The parameter b becomes 8, so it returns 7 − 8 = <b>−1</b>. The parameter b is a <em>copy</em>, so main’s b is still <b>4</b>.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'Same <code>Mystery</code> class. What is printed?' +
              '<pre class="codeblock">Mystery m = new Mystery(3);\nSystem.out.println(m.calc(4));\nSystem.out.println(m.calc(4));</pre>',
      choices: ['-1 then 3', '-1 then 7', '-1 then -1', '7 then 11'], answer: 0,
      explain: 'The <b>instance variable</b> a stays changed between calls. Call 1: a = 7, returns 7 − 8 = −1. Call 2: a = 11, returns 11 − 8 = <b>3</b>.' },
    { type: 'mc', tag: 'Scope & passing',
      prompt: 'At <code>// HERE</code>, which variables can be used?' +
              '<pre class="codeblock">public class Account {\n  private double balance;\n\n  public void withdraw(double amount) {\n    double fee = 1.5;\n    balance = balance - amount - fee;\n  }\n\n  public void report() {\n    // HERE\n  }\n}</pre>',
      choices: ['balance, amount and fee', 'balance and amount', 'none of them', 'balance only'], answer: 3,
      explain: '<em>amount</em> (a parameter) and <em>fee</em> (a local) belong to <em>withdraw</em> only. The <b>instance variable</b> balance can be used in every method of the class.' },

    /* ================= Target 10 : static ================= */
    { type: 'mc', tag: 'static',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Coin {\n  private static int count = 0;\n  private int value;\n\n  public Coin(int v) {\n    value = v;\n    count++;\n  }\n\n  public static int getCount() { return count; }\n}\n\nCoin a = new Coin(1);\nCoin b = new Coin(5);\nCoin c = new Coin(10);\nSystem.out.println(Coin.getCount());</pre>',
      choices: ['1', '3', '0', '16'], answer: 1,
      explain: 'There is <b>one</b> <em>count</em> shared by every Coin. Each constructor call adds 1, so 3 coins → <b>3</b>.' },
    { type: 'mc', tag: 'static',
      prompt: 'What happens?' +
              '<pre class="codeblock">public class Coin {\n  private int value;\n\n  public static int doubleIt() {\n    return value * 2;\n  }\n}</pre>',
      choices: ['It returns 0', 'Compiler error — a static method can’t use an instance variable directly', 'Runtime error',
                'It returns value * 2 for the last Coin made'], answer: 1,
      explain: 'A static method belongs to the <b>class</b>, not to any object, so there’s no <em>value</em> for it to use. (Java says: non-static variable cannot be referenced from a static context.)' },
    { type: 'mc', tag: 'static',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Door {\n  private static int opens = 0;\n  private int myOpens = 0;\n\n  public void open() { opens++; myOpens++; }\n  public String toString() { return myOpens + "/" + opens; }\n}\n\nDoor front = new Door();\nDoor back = new Door();\nfront.open();\nback.open();\nfront.open();\nSystem.out.println(front + " " + back);</pre>',
      choices: ['2/2 1/1', '2/3 1/3', '2/3 1/1', '3/3 3/3'], answer: 1,
      explain: '<em>myOpens</em> is per object: front 2, back 1. <em>opens</em> is <b>static</b> — one shared counter that both doors add to, so it’s 3 for both.' },
    { type: 'mc', tag: 'static',
      prompt: 'Why can you write <code>Math.sqrt(16)</code> without ever writing <code>new Math()</code>?',
      choices: ['sqrt is static — it belongs to the class, not an object', 'Math is a primitive type',
                'Java creates a Math object automatically', 'sqrt is private'], answer: 0,
      explain: 'Static methods are called on the <b>class name</b>. Math.pow, Math.abs and Math.random work the same way.' },
    { type: 'mc', tag: 'static',
      prompt: 'Which statement is <b>TRUE</b>?',
      choices: ['A static method can use instance variables directly', 'An instance method can use static variables',
                'Each object gets its own copy of a static variable', 'A static method must be called on an object'], answer: 1,
      explain: 'Every object can see the class’s shared static variables. It doesn’t work the other way: a static method has no object, so it can’t use instance variables.' },
    { type: 'mc', tag: 'static',
      prompt: 'What is printed?' +
              '<pre class="codeblock">public class Annuity {\n  private static double rate = 0.05;\n  private double balance;\n\n  public Annuity(double b) { balance = b; }\n  public void addInterest() { balance = balance + balance * rate; }\n  public static void setRate(double r) { rate = r; }\n  public double getBalance() { return balance; }\n}\n\nAnnuity x = new Annuity(100.0);\nAnnuity y = new Annuity(200.0);\nAnnuity.setRate(0.25);\nx.addInterest();\ny.addInterest();\nSystem.out.println(x.getBalance() + " " + y.getBalance());</pre>',
      choices: ['105.0 210.0', '125.0 210.0', '105.0 250.0', '125.0 250.0'], answer: 3,
      explain: '<em>rate</em> is static, so <code>setRate(0.25)</code> changes it for <b>every</b> Annuity at once. 100 + 25 = 125.0 and 200 + 50 = 250.0.' },

    /* ================= Typed recall ================= */
    { type: 'type', tag: 'Method headers', prompt: 'What return type does a method have if it returns nothing?',
      accept: ['void'], explain: '<b>void</b> — and a constructor has no return type at all, not even void.' },
    { type: 'type', tag: 'Instance variables', prompt: 'Which visibility keyword should instance variables have?',
      accept: ['private'], explain: '<b>private</b> — that’s encapsulation.' },
    { type: 'type', tag: 'Instance variables', prompt: 'An <code>int</code> instance variable that is never set holds what value?',
      accept: ['0', 'zero'], explain: '<b>0</b>. (double → 0.0, boolean → false, objects → null.)' },
    { type: 'type', tag: 'Instance variables', prompt: 'A <code>String</code> instance variable that is never set holds what value?',
      accept: ['null'], explain: '<b>null</b> — it doesn’t refer to any object yet.' },
    { type: 'type', tag: 'toString', prompt: 'Type the exact header a toString method needs.',
      accept: ['public String toString()', 'public String toString() {'], display: 'public String toString()',
      explain: '<b>public String toString()</b> — public, returns a String, no parameters.' },
    { type: 'type', tag: 'Scanner', prompt: 'Finish the line: <code>import java.util.______;</code>',
      accept: ['Scanner', 'Scanner;'], explain: '<code>import java.util.<b>Scanner</b>;</code>' },
    { type: 'type', tag: 'Scanner', prompt: 'Which Scanner method reads a whole line of text, spaces included?',
      accept: ['nextLine', 'nextLine()', 'input.nextLine()'], display: 'nextLine()',
      explain: '<b>nextLine()</b>. <em>next()</em> stops at the first space.' },
    { type: 'type', tag: 'Scanner', prompt: 'Which Scanner method reads a decimal number?',
      accept: ['nextDouble', 'nextDouble()', 'input.nextDouble()'], display: 'nextDouble()',
      explain: '<b>nextDouble()</b>.' },
    { type: 'type', tag: 'String methods', prompt: 'What does <code>"PROGRAM".substring(3)</code> return?',
      accept: ['GRAM', '"GRAM"'], display: '"GRAM"', explain: 'P0 R1 O2 <b>G3 R4 A5 M6</b> — from index 3 to the end.' },
    { type: 'type', tag: 'String methods', prompt: 'What does <code>"PROGRAM".substring(1, 4)</code> return?',
      accept: ['ROG', '"ROG"'], display: '"ROG"', explain: 'Indexes 1, 2, 3 → <b>ROG</b>. It stops <em>before</em> 4.' },
    { type: 'type', tag: 'String methods', prompt: 'What does <code>"PROGRAM".length()</code> return?',
      accept: ['7', 'seven'], explain: '<b>7</b> letters. The last index is 6.' },
    { type: 'type', tag: 'String methods', prompt: 'What does <code>indexOf</code> return when it can’t find the text?',
      accept: ['-1', 'negative 1', 'negative one', 'minus 1', 'minus one'], display: '-1',
      explain: '<b>−1</b>.' },
    { type: 'type', tag: 'Operators & casts', prompt: 'What does <code>17 / 5</code> evaluate to?',
      accept: ['3'], explain: 'int ÷ int → <b>3</b>. The .4 is dropped.' },
    { type: 'type', tag: 'Operators & casts', prompt: 'What does <code>17 % 5</code> evaluate to?',
      accept: ['2'], explain: '17 = 3 × 5 + <b>2</b>.' },
    { type: 'type', tag: 'Operators & casts', prompt: 'What does <code>(double) 7 / 2</code> evaluate to?',
      accept: ['3.5'], explain: 'The cast goes first: 7.0 / 2 = <b>3.5</b>.' },
    { type: 'type', tag: 'Operators & casts', prompt: 'What does <code>(int) 9.99</code> evaluate to?',
      accept: ['9'], explain: 'Casting truncates: <b>9</b>. No rounding.' },
    { type: 'type', tag: 'Operators & casts', prompt: 'What does <code>1 + 2 + "3"</code> evaluate to?',
      accept: ['33', '"33"'], display: '"33"', explain: '1 + 2 = 3 first, then 3 + "3" → <b>"33"</b>.' },
    { type: 'type', tag: 'Scope & passing', prompt: 'Which keyword means “this object”, so you can tell an instance variable apart from a parameter with the same name?',
      accept: ['this'], explain: '<code><b>this</b>.balance = balance;</code>' },
    { type: 'type', tag: 'static', prompt: 'Which keyword makes a variable shared by every object of the class?',
      accept: ['static'], explain: '<b>static</b> — one copy for the whole class.' }
  ],

  notes: [
    {
      title: 'Reading a method header',
      emoji: '🔍',
      html: '<pre class="codeblock">public boolean withdraw(double amount)</pre>' +
            '<table class="mini"><tr><th>Part</th><th>Which one</th><th>How you know</th></tr>' +
            '<tr><td>visibility</td><td class="hit">public</td><td>public or private, first word</td></tr>' +
            '<tr><td>return type</td><td class="hit">boolean</td><td>right before the name (void = nothing)</td></tr>' +
            '<tr><td>method name</td><td class="hit">withdraw</td><td>right before the (</td></tr>' +
            '<tr><td>parameter type</td><td class="hit">double</td><td>first word in the ( )</td></tr>' +
            '<tr><td>parameter</td><td class="hit">amount</td><td>the variable name in the ( )</td></tr></table>' +
            '<p class="note-tip">💡 In the <b>call</b> <code>acct.withdraw(20.0)</code>, 20.0 is the <b>argument</b>. ' +
            'It gets copied into the parameter.</p>'
    },
    {
      title: 'A whole class, labelled',
      emoji: '🏗️',
      html: '<pre class="codeblock">public class Account {\n' +
            '  private static int count = 0;   // static: ONE shared copy\n' +
            '  private String owner;           // instance variables:\n' +
            '  private double balance;         //   private, one per object\n\n' +
            '  public Account() {              // default constructor\n' +
            '    owner = "unknown";\n' +
            '    balance = 0.0;\n' +
            '    count++;\n' +
            '  }\n\n' +
            '  public Account(String o, double b) {  // non-default\n' +
            '    owner = o;\n' +
            '    balance = b;\n' +
            '    count++;\n' +
            '  }\n\n' +
            '  public double getBalance() {    // accessor\n' +
            '    return balance;\n' +
            '  }\n\n' +
            '  public void deposit(double amt) {  // mutator\n' +
            '    balance = balance + amt;\n' +
            '  }\n\n' +
            '  public String toString() {      // toString\n' +
            '    return owner + ": $" + balance;\n' +
            '  }\n\n' +
            '  public static int getCount() {  // static method\n' +
            '    return count;\n' +
            '  }\n' +
            '}</pre>'
    },
    {
      title: 'Constructor rules',
      emoji: '🧱',
      html: '<ul class="trap">' +
            '<li>Same name as the class and <b>no return type</b> — not even void.</li>' +
            '<li><b>Default</b> = no parameters. <b>Non-default</b> = has parameters.</li>' +
            '<li>Write <b>no</b> constructor and Java supplies an empty default one. Write <b>any</b> constructor and that free one is gone, so <code>new X()</code> won’t compile unless you wrote it.</li>' +
            '<li>Arguments must match the parameters in <b>number, type and order</b>.</li></ul>' +
            '<table class="mini"><tr><th>Never set? It holds…</th><th></th></tr>' +
            '<tr><td>int</td><td class="hit">0</td></tr>' +
            '<tr><td>double</td><td class="hit">0.0</td></tr>' +
            '<tr><td>boolean</td><td class="hit">false</td></tr>' +
            '<tr><td>String / any object</td><td class="miss">null</td></tr></table>'
    },
    {
      title: 'Accessor, mutator, toString',
      emoji: '🔧',
      html: '<table class="mini"><tr><th>Method</th><th>Returns</th><th>Changes the object?</th></tr>' +
            '<tr><td>accessor <code>getX()</code></td><td>the value</td><td class="hit">no</td></tr>' +
            '<tr><td>mutator <code>setX(…)</code></td><td>usually void</td><td class="miss">yes</td></tr>' +
            '<tr><td><code>toString()</code></td><td>a String</td><td class="hit">no</td></tr></table>' +
            '<p class="note-tip">💡 toString <b>returns</b> a String and never prints. println and + call it for you. ' +
            'Without one, you get something like <code>Coin@6d06d69c</code>.</p>' +
            '<p class="note-tip">💡 In a mutator the instance variable goes on the <b>left</b>: <code>price = p;</code> — not <code>p = price;</code></p>'
    },
    {
      title: 'Scanner in five lines',
      emoji: '⌨️',
      html: '<pre class="codeblock">import java.util.Scanner;               // top of the file\n' +
            'Scanner input = new Scanner(System.in);\n' +
            'int age = input.nextInt();\n' +
            'input.nextLine();                       // throw away the leftover Enter!\n' +
            'String name = input.nextLine();</pre>' +
            '<table class="mini"><tr><th>Method</th><th>Reads</th></tr>' +
            '<tr><td><code>nextInt()</code></td><td>an int</td></tr>' +
            '<tr><td><code>nextDouble()</code></td><td>a double</td></tr>' +
            '<tr><td><code>nextBoolean()</code></td><td>true / false</td></tr>' +
            '<tr><td><code>next()</code></td><td>one word (stops at a space)</td></tr>' +
            '<tr><td><code>nextLine()</code></td><td>the rest of the line</td></tr></table>' +
            '<p class="note-tip">💡 Typing the wrong kind of input (3.5 for nextInt) crashes with an <b>InputMismatchException</b>.</p>'
    },
    {
      title: 'String index map',
      emoji: '🔤',
      html: '<pre class="codeblock"> C  O  M  P  U  T  E  R\n 0  1  2  3  4  5  6  7     length() = 8</pre>' +
            '<ul class="trap">' +
            '<li><code>substring(a, b)</code> starts <b>at</b> a and stops <b>before</b> b, so it has <b>b − a</b> characters.</li>' +
            '<li><code>substring(a)</code> goes from a to the end.</li>' +
            '<li><code>indexOf(str)</code> gives where str <b>first starts</b>, or <b>−1</b>.</li>' +
            '<li>The last index is <code>length() − 1</code>. Going past <code>length()</code> throws StringIndexOutOfBoundsException.</li>' +
            '<li>Strings are immutable — save the result: <code>s = s.substring(1);</code></li></ul>'
    },
    {
      title: 'Operators, promotion & casts',
      emoji: '🧮',
      html: '<table class="mini"><tr><th>Order</th><th>Operators</th></tr>' +
            '<tr><td>1</td><td><code>( )</code></td></tr>' +
            '<tr><td>2</td><td>casts <code>(int)</code> <code>(double)</code>, unary minus</td></tr>' +
            '<tr><td>3</td><td><code>*  /  %</code> left to right</td></tr>' +
            '<tr><td>4</td><td><code>+  -</code> left to right</td></tr>' +
            '<tr><td>5</td><td><code>=  +=  -=  *=  /=  %=</code> last</td></tr></table>' +
            '<ul class="trap">' +
            '<li>int ÷ int → <b>int</b> (decimals chopped). Mix in a double → <b>double</b> (promotion).</li>' +
            '<li><code>(int)</code> truncates toward zero. Round a positive number with <code>(int) (x + 0.5)</code>.</li>' +
            '<li><code>double d = 7;</code> is fine (7.0). <code>int i = 2.5;</code> is a compiler error.</li>' +
            '<li>String + goes left to right: <code>1 + 2 + "3"</code> → "33", <code>"1" + 2 + 3</code> → "123".</li></ul>'
    },
    {
      title: 'Scope & passing values',
      emoji: '🔭',
      html: '<table class="mini"><tr><th>Kind</th><th>Declared</th><th>Lives until</th></tr>' +
            '<tr><td>local</td><td>inside a method or block</td><td>the block ends</td></tr>' +
            '<tr><td>parameter</td><td>in the header’s ( )</td><td>the method returns</td></tr>' +
            '<tr><td>instance</td><td>in the class, outside methods</td><td>the object is gone</td></tr></table>' +
            '<ul class="trap">' +
            '<li><b>Primitives</b> are copied — the method can’t change the caller’s variable.</li>' +
            '<li><b>References</b> are copied — the method <em>can</em> change the shared object, but pointing the parameter at a new object doesn’t affect the caller.</li>' +
            '<li><b>Shadowing:</b> <code>balance = balance;</code> does nothing. Write <code>this.balance = balance;</code></li></ul>'
    },
    {
      title: 'static vs instance',
      emoji: '📌',
      html: '<table class="mini"><tr><th></th><th>static</th><th>instance</th></tr>' +
            '<tr><td>copies</td><td class="miss">one for the class</td><td class="hit">one per object</td></tr>' +
            '<tr><td>call it with</td><td><code>ClassName.m()</code></td><td><code>obj.m()</code></td></tr>' +
            '<tr><td>can use instance variables?</td><td class="miss">no</td><td class="hit">yes</td></tr>' +
            '<tr><td>can use static variables?</td><td class="hit">yes</td><td class="hit">yes</td></tr></table>' +
            '<p class="note-tip">💡 Classic use: <code>private static int count;</code> with <code>count++</code> in the constructor counts how many objects exist.</p>'
    }
  ]
});
