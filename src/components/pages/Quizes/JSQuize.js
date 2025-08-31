import React, { useState, useEffect, useCallback, useMemo } from "react";

const JSQuize = () => {
  const [showTimeAlert, setShowTimeAlert] = useState(false);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);

  const htmlContent = useMemo(() => ({
    beginner: {
      title: "Beginner Level JS Quiz",
      topics: [
        {
          "title": "Introduction to JavaScript and Its Uses",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Who created JavaScript?", "options": ["Brendan Eich", "Ryan Dahl", "Guido van Rossum", "James Gosling"], "correctAnswer": 0 },
            { "question": "JavaScript is primarily used for:", "options": ["Web development", "System programming", "Database management", "Operating systems"], "correctAnswer": 0 },
            { "question": "Which of these is NOT a JavaScript feature?", "options": ["Static typing", "Dynamic typing", "Event-driven", "Prototype-based OOP"], "correctAnswer": 0 },
            { "question": "JavaScript code is executed by:", "options": ["JavaScript engines in browsers", "The operating system", "The compiler", "The hardware"], "correctAnswer": 0 },
            { "question": "Which file extension is used for JavaScript files?", "options": [".js", ".java", ".jsx", ".json"], "correctAnswer": 0 },
            { "question": "JavaScript can be used both on client and:", "options": ["Server side", "Mobile apps", "Databases", "Text editors"], "correctAnswer": 0 },
            { "question": "To include JavaScript in HTML, use the:", "options": ["<script> tag", "<js> tag", "<style> tag", "<link> tag"], "correctAnswer": 0 },
            { "question": "JavaScript has its own data types including:", "options": ["Number, string, boolean, object", "Integer, character, float", "Byte, short, long", "Text, number, list"], "correctAnswer": 0 },
            { "question": "JavaScript is standardized by:", "options": ["ECMAScript", "ISO", "W3C", "IEEE"], "correctAnswer": 0 },
            { "question": "Which is a popular JavaScript runtime outside the browser?", "options": ["Node.js", "Deno", "Electron", "React Native"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic Syntax, Comments, and Statements",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which symbol is used for single-line comments in JavaScript?", "options": ["//", "/*", "#", "<!--"], "correctAnswer": 0 },
            { "question": "A JavaScript statement ends with a:", "options": ["Semicolon (;)", "Period (.)", "Comma (,)", "Colon (:)"], "correctAnswer": 0 },
            { "question": "What will this output? console.log('Hello')", "options": ["Hello", "Error", "undefined", "Nothing"], "correctAnswer": 0 },
            { "question": "Which keyword declares a block scope variable?", "options": ["let", "var", "const", "block"], "correctAnswer": 0 },
            { "question": "Multi-line comments are written using:", "options": ["/* Comment */", "//", "#", "<!-- -->"], "correctAnswer": 0 },
            { "question": "JavaScript is case:", "options": ["Sensitive", "Insensitive", "Partially sensitive", "Ignored"], "correctAnswer": 0 },
            { "question": "Which statement creates an alert box in browser?", "options": ["alert()", "console.log()", "document.write()", "prompt()"], "correctAnswer": 0 },
            { "question": "JavaScript code can be included inside:", "options": ["<script> tags", "<style> tags", "<link> tags", "<meta> tags"], "correctAnswer": 0 },
            { "question": "Which symbol is used for multi-line strings?", "options": ["Backticks (`)", "Quotes (' ')", "Double Quotes (\" \")", "Parentheses ()"], "correctAnswer": 0 },
            { "question": "Variables can be declared using which keywords?", "options": ["var, let, const", "var, constant", "let, constant", "var, static"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Variables: var, let, const and Their Scope",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which keyword declares a function-scoped variable?", "options": ["var", "let", "const", "function"], "correctAnswer": 0 },
            { "question": "Which keyword declares a block-scoped variable?", "options": ["let and const", "var", "global", "function"], "correctAnswer": 0 },
            { "question": "Which variable declaration cannot be reassigned?", "options": ["const", "var", "let", "static"], "correctAnswer": 0 },
            { "question": "Using var in loops can cause which issue?", "options": ["Variable hoisting", "Block scoping", "Immutable binding", "Strict mode errors"], "correctAnswer": 0 },
            { "question": "Which keyword should you use to declare constants?", "options": ["const", "var", "let", "final"], "correctAnswer": 0 },
            { "question": "Can let variables be redeclared in the same scope?", "options": ["No", "Yes", "Only in functions", "Only in global scope"], "correctAnswer": 0 },
            { "question": "Which scope does a variable declared with var inside a function have?", "options": ["Function scope", "Block scope", "Global scope", "Module scope"], "correctAnswer": 0 },
            { "question": "What happens if you use a variable before declaration with var?", "options": ["Undefined due to hoisting", "Reference error", "Syntax error", "Runtime error"], "correctAnswer": 0 },
            { "question": "Are const objects mutable in JavaScript?", "options": ["The object itself is mutable, but binding is constant", "Entirely immutable", "Only primitives are mutable", "No objects can be const"], "correctAnswer": 0 },
            { "question": "Which declaration is hoisted but uninitialized?", "options": ["var", "let", "const", "None"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Data Types and Type Conversion / Coercion",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which of these is a primitive data type in JavaScript?", "options": ["Number", "Array", "Object", "Function"], "correctAnswer": 0 },
            { "question": "Which function converts a string to a number?", "options": ["Number()", "String()", "parseInt()", "parseFloat()"], "correctAnswer": 0 },
            { "question": "What does 'typeof null' return?", "options": ["object", "null", "undefined", "boolean"], "correctAnswer": 0 },
            { "question": "Which value is considered falsy?", "options": ["0", "1", "\"false\"", "[]"], "correctAnswer": 0 },
            { "question": "What is type coercion in JavaScript?", "options": ["Automatic or implicit conversion between types", "Explicit type casting", "Function call", "Variable declaration"], "correctAnswer": 0 },
            { "question": "What is the result of ‘5’ + 3?", "options": ["\"53\"", "8", "NaN", "undefined"], "correctAnswer": 0 },
            { "question": "What value does Boolean(\"\") return?", "options": ["false", "true", "undefined", "null"], "correctAnswer": 0 },
            { "question": "Which of these converts value to Boolean?", "options": ["Boolean()", "Bool()", "bool()", "boolcast()"], "correctAnswer": 0 },
            { "question": "Which operator compares strict equality without coercion?", "options": ["===", "==", "=", "!=="], "correctAnswer": 0 },
            { "question": "Which method converts number to a string?", "options": ["toString()", "stringify()", "parseInt()", "convert()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic Operators",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which operator is used for addition?", "options": ["+", "-", "*", "/"], "correctAnswer": 0 },
            { "question": "What does the '%' operator do?", "options": ["Modulus - remainder", "Power", "Division", "Multiplication"], "correctAnswer": 0 },
            { "question": "Which operator checks strict equality?", "options": ["===", "==", "!=", "<"], "correctAnswer": 0 },
            { "question": "Which logical operator means AND?", "options": ["&&", "||", "!", "&"], "correctAnswer": 0 },
            { "question": "What is the output of '2' + 3?", "options": ["'23'", "5", "NaN", "Error"], "correctAnswer": 0 },
            { "question": "Which operator is used for assignment?", "options": ["=", "==", ":=", "==="], "correctAnswer": 0 },
            { "question": "What does '++' operator do?", "options": ["Increments by 1", "Decrements by 1", "Adds 2", "Subtracts 2"], "correctAnswer": 0 },
            { "question": "Which operator is for not equal?", "options": ["!=", "==", "<>", "<"], "correctAnswer": 0 },
            { "question": "Which operator performs short-circuit OR?", "options": ["||", "&&", "!", "|"], "correctAnswer": 0 },
            { "question": "What does the 'typeof' operator do?", "options": ["Returns the data type of variable", "Converts to string", "Checks for undefined", "Creates new variables"], "correctAnswer": 0 },
            { "question": "Which operator concatenates strings?", "options": ["+", "-", "*", "/"], "correctAnswer": 0 },
            { "question": "What is the output of Boolean('false')?", "options": ["true", "false", "undefined", "null"], "correctAnswer": 0 },
            { "question": "Which operator is used for exponentiation?", "options": ["**", "^", "%", "/"], "correctAnswer": 0 },
            { "question": "Which operator checks if value is not null or undefined?", "options": ["??", "||", "&&", "!"], "correctAnswer": 0 },
            { "question": "Which operator checks for null or undefined?", "options": ["??", "==", "!=", "==="], "correctAnswer": 0 },
            { "question": "Which of these operators has the highest precedence?", "options": ["**", "*", "+", "-"], "correctAnswer": 0 },
            { "question": "Which operator assigns default values?", "options": ["||", "??", "? :", ":"], "correctAnswer": 1 },
            { "question": "Which operator returns the remainder of division?", "options": ["%", "/", "*", "+"], "correctAnswer": 0 },
            { "question": "Which operator is used for bitwise AND?", "options": ["&", "|", "^", "~"], "correctAnswer": 0 },
            { "question": "What is the output of 5 && 0?", "options": ["0", "5", "true", "false"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    intermediate: {
      title: "Intermediate Level JS Quiz",
      topics: [
        {
          "title": "Function Hoisting",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is hoisting in JavaScript?", "options": ["Moving declarations to the top of their scope", "Deferring execution", "Delaying variable assignment", "Memory allocation"], "correctAnswer": 0 },
            { "question": "Are function declarations hoisted?", "options": ["Yes, fully including the function body", "No", "Only function name", "Only function body"], "correctAnswer": 0 },
            { "question": "Are function expressions hoisted?", "options": ["No, only the variable declaration is hoisted", "Yes, fully", "No hoisting at all", "Only if declared with var"], "correctAnswer": 0 },
            { "question": "Which variable declarations are hoisted but not initialized?", "options": ["let and const", "var", "function arguments", "global variables"], "correctAnswer": 0 },
            { "question": "What happens when you access a let or const variable before declaration?", "options": ["ReferenceError due to temporal dead zone", "Undefined", "null", "0"], "correctAnswer": 0 },
            { "question": "When is the hoisted code executed?", "options": ["During the compilation phase before execution", "During execution", "On demand", "Never"], "correctAnswer": 0 },
            { "question": "What is the temporal dead zone (TDZ)?", "options": ["Period during block where let/const variables are uninitialized", "Scope of var variables", "Call stack", "Function closure"], "correctAnswer": 0 },
            { "question": "How is hoisting helpful?", "options": ["Allows using functions before declaration", "Avoids memory leaks", "Prevents errors", "Improves performance"], "correctAnswer": 0 },
            { "question": "What happens if you use a variable declared with var before initialization?", "options": ["It returns undefined", "Throws error", "Returns null", "Variable is not accessible"], "correctAnswer": 0 },
            { "question": "Which of the following is NOT hoisted?", "options": ["Class declarations", "Function declarations", "var declarations", "Function expressions"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Closures",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a closure in JavaScript?", "options": ["A function with access to its outer scope", "A function that calls itself", "A callback function", "An Immediately Invoked Function"], "correctAnswer": 0 },
            { "question": "Why are closures useful?", "options": ["Encapsulate private variables", "Prevent hoisting", "Make code synchronous", "Improve performance"], "correctAnswer": 0 },
            { "question": "Which keyword is used to create a closure?", "options": ["Function", "Closure", "Clos", "Private"], "correctAnswer": 0 },
            { "question": "Does a closure remember variables after the outer function returns?", "options": ["Yes", "No", "Only if global", "Only for synchronous functions"], "correctAnswer": 0 },
            { "question": "What is lexical scoping?", "options": ["Scope determined by placement of function", "Runtime function assignment", "Dynamic variable scope", "Out of scope variable"], "correctAnswer": 0 },
            { "question": "Which of these is an example of closure use?", "options": ["Function factory returning customized functions", "Regular function calls", "Anonymous functions", "Arrow functions"], "correctAnswer": 0 },
            { "question": "Can closures lead to memory leaks if misused?", "options": ["Yes", "No", "Only in old browsers", "Only in Node.js"], "correctAnswer": 0 },
            { "question": "How to avoid unintended closures in loops?", "options": ["Use let for block scope", "Use var for function scope", "Use global variables", "Avoid loops"], "correctAnswer": 0 },
            { "question": "Which function below creates a closure?\nfunction outer() { let x=1; return function inner() { return x;} }", "options": ["Yes", "No", "Depends on call", "None"], "correctAnswer": 0 },
            { "question": "Which advantage do closures provide for functional programming?", "options": ["Higher-order functions", "Asynchronous calls", "Global scope variables", "Classes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Callbacks",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a callback function?", "options": ["A function passed into another function to be executed later", "A function called immediately", "A function that returns a function", "A recursive function"], "correctAnswer": 0 },
            { "question": "Callbacks are primarily used to:", "options": ["Handle asynchronous operations", "Iterate arrays", "Define variables", "Handle synchronous actions"], "correctAnswer": 0 },
            { "question": "What problem can nested callbacks cause?", "options": ["Callback hell or pyramid of doom", "Infinite loops", "Memory leaks", "Variable hoisting"], "correctAnswer": 0 },
            { "question": "Which Node.js function commonly uses callbacks?", "options": ["fs.readFile()", "console.log()", "setTimeout()", "Array.forEach()"], "correctAnswer": 0 },
            { "question": "How do you avoid callback hell?", "options": ["Use promises or async/await", "Write fewer callbacks", "Avoid async code", "Use for loops"], "correctAnswer": 0 },
            { "question": "In a callback, how do you handle errors?", "options": ["Pass error as first argument", "Use throw", "Ignore errors", "Use promises"], "correctAnswer": 0 },
            { "question": "Callbacks are executed:", "options": ["When invoked inside a function", "Immediately on declaration", "Only once globally", "Only in synchronous code"], "correctAnswer": 0 },
            { "question": "Which of these is an alternative to callbacks for async code?", "options": ["Promises", "Events", "Variables", "Classes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Putting It All Together",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which JavaScript feature combines callbacks and promises?", "options": ["async/await", "Generators", "Arrow functions", "Function expressions"], "correctAnswer": 0 },
            { "question": "What is a common way to handle errors in async functions?", "options": ["try/catch block", "throw errors", "Ignore errors", "Handle separately"], "correctAnswer": 0 },
            { "question": "How do closures support writing modular code?", "options": ["Enable encapsulation of variables", "Add functions to window", "Increase global scope", "Avoid function calls"], "correctAnswer": 0 },
            { "question": "What does event delegation improve?", "options": ["Performance and memory usage", "Security", "Code size", "Animation speed"], "correctAnswer": 0 },
            { "question": "Which technique prevents blocking in JavaScript?", "options": ["Asynchronous programming", "Synchronous loops", "Global variables", "Closures"], "correctAnswer": 0 },
            { "question": "Which data structure best supports event callback lists?", "options": ["Arrays", "Objects", "Maps", "Sets"], "correctAnswer": 0 },
            { "question": "What is IIFE in JavaScript?", "options": ["Immediately Invoked Function Expression", "Interactive Interface", "Incremental Initialization", "Input/Output Function"], "correctAnswer": 0 },
            { "question": "How do modules improve JavaScript applications?", "options": ["Organize code and avoid global scope pollution", "Increase file sizes", "Complicate dependency management", "Slow execution"], "correctAnswer": 0 },
            { "question": "Which of these is NOT a JavaScript data type?", "options": ["Float", "Number", "String", "Boolean"], "correctAnswer": 0 },
            { "question": "How can you chain promises?", "options": ["Using .then() method", "Using .catch()", "Using async", "Using setTimeout()"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    advanced: {
      title: "Advanced Level JS Quiz",
      topics: [
        {
          "title": "Advanced Closures and Memory Management (Heap Memory Related)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a closure's effect on memory?", "options": ["Keeps variables alive in heap as long as closure exists", "Frees variables immediately", "Prevents garbage collection always", "Uses stack memory"], "correctAnswer": 0 },
            { "question": "Where are variables captured by closures stored?", "options": ["Heap", "Stack", "Registers", "Global scope"], "correctAnswer": 0 },
            { "question": "Which scenario can lead to memory leaks with closures?", "options": ["Unintended retention of references", "Synchronous function calls", "Global variables", "Event listeners"], "correctAnswer": 0 },
            { "question": "Closures can cause what kind of memory usage issue?", "options": ["Excessive memory retention", "Stack overflow", "Compiler errors", "Variable shadowing"], "correctAnswer": 0 },
            { "question": "How can you avoid memory leaks caused by closures?", "options": ["Avoid holding references unnecessarily", "Use global variables", "Disable garbage collector", "Use synchronous functions"], "correctAnswer": 0 },
            { "question": "Are closures stored on stack or heap?", "options": ["Heap", "Stack", "Registers", "Code segment"], "correctAnswer": 0 },
            { "question": "Does a closure create a new execution context?", "options": ["No, it captures outer context", "Yes, always", "Only in async functions", "Only with generators"], "correctAnswer": 0 },
            { "question": "What is the difference between closures and normal functions?", "options": ["Closures retain their outer variables", "Normal functions do not exist", "Closures cannot access variables", "Normal functions are synchronous"], "correctAnswer": 0 },
            { "question": "Which keyword often helps avoid closure related bugs in loops?", "options": ["let", "var", "const", "function"], "correctAnswer": 0 },
            { "question": "What kind of scope does a closure retain?", "options": ["Lexical scope", "Dynamic scope", "Global scope", "Module scope"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Prototypes and Prototype Chain (In-depth Understanding)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the prototype in JavaScript?", "options": ["An object that other objects inherit from", "A class", "A function", "A variable"], "correctAnswer": 0 },
            { "question": "What forms the prototype chain?", "options": ["Links between objects and their prototypes", "Call stack", "Variable scopes", "Event loop"], "correctAnswer": 0 },
            { "question": "What happens when a property is not found on the object?", "options": ["JavaScript searches the prototype chain", "Property error is thrown", "Variable becomes null", "Execution stops"], "correctAnswer": 0 },
            { "question": "Which property refers to the prototype object?", "options": ["__proto__", "prototype", "constructor", "class"], "correctAnswer": 0 },
            { "question": "How do you create an object with a specified prototype?", "options": ["Object.create(proto)", "new Object(proto)", "Object.prototype(proto)", "Object.clone(proto)"], "correctAnswer": 0 },
            { "question": "Which prototype is at the top of the chain?", "options": ["Object.prototype", "Function.prototype", "Array.prototype", "null"], "correctAnswer": 0 },
            { "question": "What is method overriding in prototypes?", "options": ["Child object redefines a method from prototype", "Changing prototype linkage", "Adding new properties", "Deleting prototype"], "correctAnswer": 0 },
            { "question": "What does 'this' refer to in a method on prototype?", "options": ["The calling object", "The prototype object", "Global object", "Undefined"], "correctAnswer": 0 },
            { "question": "How to set the prototype of an existing object?", "options": ["Object.setPrototypeOf(obj, proto)", "obj.__proto__ = proto", "obj.prototype = proto", "Object.create(proto)"], "correctAnswer": 0 },
            { "question": "Are prototypes mutable at runtime?", "options": ["Yes", "No", "Only in strict mode", "Only in classes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Async Programming in JavaScript (Promise Combinators + Event Loop Internals)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which Promise combinator waits for all promises to settle?", "options": ["Promise.allSettled()", "Promise.all()", "Promise.race()", "Promise.any()"], "correctAnswer": 0 },
            { "question": "What does Promise.race() return?", "options": ["The first promise to settle", "All promises", "The last promise to resolve", "None"], "correctAnswer": 0 },
            { "question": "How does the event loop handle asynchronous callbacks?", "options": ["Executes callbacks from the message queue when call stack is empty", "Executes synchronously", "Parallel execution", "Ignores them"], "correctAnswer": 0 },
            { "question": "What is the difference between macrotasks and microtasks?", "options": ["Microtasks have higher priority and run before macrotasks", "Macrotasks run first", "They are the same", "Only microtasks can access DOM"], "correctAnswer": 0 },
            { "question": "Which queue do Promise callbacks go into?", "options": ["Microtask queue", "Macrotask queue", "Call stack", "Web APIs"], "correctAnswer": 0 },
            { "question": "Which APIs use macrotask queue?", "options": ["setTimeout(), setInterval()", "Promise.then()", "requestAnimationFrame()", "Custom events"], "correctAnswer": 0 },
            { "question": "What is the phase where the event loop waits for I/O events?", "options": ["Poll phase", "Check phase", "Tick phase", "Idle phase"], "correctAnswer": 0 },
            { "question": "What happens when the call stack is empty?", "options": ["Event loop picks the next task from the queue", "Program halts", "Garbage collection", "Creates new calls"], "correctAnswer": 0 },
            { "question": "Which Promise method resolves as soon as one promise fulfills?", "options": ["Promise.any()", "Promise.all()", "Promise.race()", "Promise.allSettled()"], "correctAnswer": 0 },
            { "question": "How can you handle errors in promises?", "options": ["Catch() method", "Try/catch", "Throws", "Finally only"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "JavaScript Design Patterns & Modular Architecture",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which design pattern is used to create one single instance of a class?", "options": ["Singleton", "Factory", "Observer", "Module"], "correctAnswer": 0 },
            { "question": "Which pattern decouples a sender and receivers allowing multiple observers?", "options": ["Observer", "Mediator", "Singleton", "Factory"], "correctAnswer": 0 },
            { "question": "What is a module pattern in JavaScript?", "options": ["Encapsulate code to maintain privacy and modularity", "Class inheritance", "Function calls", "Global variables management"], "correctAnswer": 0 },
            { "question": "Which ES6 feature supports modular architecture?", "options": ["import/export", "var", "let", "const"], "correctAnswer": 0 },
            { "question": "Which pattern creates objects without exposing instantiation logic?", "options": ["Factory", "Singleton", "Decorator", "Strategy"], "correctAnswer": 0 },
            { "question": "Which pattern adds behavior to objects dynamically?", "options": ["Decorator", "Prototype", "Facade", "Observer"], "correctAnswer": 0 },
            { "question": "Which architecture helps manage large app complexity in JavaScript?", "options": ["Modular architecture", "Monolithic", "Flat", "Procedural"], "correctAnswer": 0 },
            { "question": "Which pattern helps in separating concerns of data and UI?", "options": ["MVC (Model-View-Controller)", "Singleton", "Decorator", "Factory"], "correctAnswer": 0 },
            { "question": "How do modules help in JavaScript?", "options": ["Provide namespace and reuse", "Pollute global scope", "Slow code", "Remove classes"], "correctAnswer": 0 },
            { "question": "Which keyword creates a private member in a module pattern?", "options": ["var or let inside closure", "private", "public", "static"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Symbol Type and Its Use Cases in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a Symbol in JavaScript?", "options": ["A unique and immutable primitive value", "A number", "A string", "An object"], "correctAnswer": 0 },
            { "question": "How do you create a Symbol?", "options": ["Symbol()", "new Symbol()", "Symbol.new()", "Symbol.create()"], "correctAnswer": 0 },
            { "question": "Are two Symbols with same description equal?", "options": ["No", "Yes", "Only with ===", "Only inside same scope"], "correctAnswer": 0 },
            { "question": "What is a common use of symbol keys?", "options": ["To create hidden object properties", "To define public properties", "For debugging", "For strings"], "correctAnswer": 0 },
            { "question": "Which function returns all symbol properties of an object?", "options": ["Object.getOwnPropertySymbols()", "Object.keys()", "Object.values()", "Symbol.get()"], "correctAnswer": 0 },
            { "question": "Are symbols enumerable in for...in loops?", "options": ["No", "Yes", "Only in strict mode", "Only in ES6"], "correctAnswer": 0 },
            { "question": "Which global symbol represents the default iterator?", "options": ["Symbol.iterator", "Symbol.default", "Symbol.iteratorDefault", "Symbol.defaultIterator"], "correctAnswer": 0 },
            { "question": "Are Symbols implicitly converted to string?", "options": ["No, explicit conversion needed", "Yes always", "Only in template literals", "Only in console.log"], "correctAnswer": 0 },
            { "question": "Can Symbols be used as object keys?", "options": ["Yes", "No", "Only string keys", "Only number keys"], "correctAnswer": 0 },
            { "question": "Which method describes a symbol’s purpose to override built-in operations?", "options": ["Symbol methods like Symbol.toStringTag", "Symbol.create()", "Symbol.override()", "Symbol.default()"], "correctAnswer": 0 }
          ]
        }
      ],
    },
  }), []);

  const questions = useMemo(() => {
    return htmlContent[activeLevel].topics[activeTopicIndex].quizData || [];
  }, [htmlContent, activeLevel, activeTopicIndex]);

  useEffect(() => {
    setShowTimeAlert(false);
  }, [currentQuestion]);

  useEffect(() => {
    if (
      quizStarted &&
      !quizFinished &&
      timeLeft === 10 &&
      selectedAnswer === null
    ) {
      setShowTimeAlert(true);
      const timer = setTimeout(() => {
        setShowTimeAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizStarted, quizFinished, selectedAnswer]);

  useEffect(() => {
    if (selectedAnswer !== null && showTimeAlert) {
      setShowTimeAlert(false);
    }
  }, [selectedAnswer, showTimeAlert]);

  useEffect(() => {
    if (quizStarted && !quizFinished) {
      setTimeLeft(30);
    }
  }, [currentQuestion, quizStarted, quizFinished]);

  const handleNextQuestion = useCallback(() => {
    setShowTimeAlert(false);

    if (answers[currentQuestion] === undefined) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestion]: selectedAnswer
      }));

      if (selectedAnswer !== null && selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }

    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      setSelectedAnswer(answers[nextQ] ?? null);
    } else {
      setQuizFinished(true);
    }
  }, [selectedAnswer, currentQuestion, answers, questions]);

  // Timer useEffect کو modify کریں
  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    if (timeLeft === 0) {
      // Timer کو clear کریں پہلے
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 100); // Small delay to prevent double execution

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, quizFinished, handleNextQuestion]);


  useEffect(() => {
    if (quizFinished) {
      setShowResultModal(true);
    }
  }, [quizFinished]);

  const handleTopicClick = (index) => {
    setActiveTopicIndex(index);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setAnswers({});
    setShowTimeAlert(false);
  };

  const handleAnswerSelect = (index) => {
    if (answers[currentQuestion] !== undefined) return;
    setSelectedAnswer(index);
  };

  const handlePreviousQuestion = () => {
    setShowTimeAlert(false);

    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      setSelectedAnswer(answers[prevQ] ?? null);
    }
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setAnswers({});
    setScore(0);
    setShowResultModal(false);
    setShowTimeAlert(false);
  };

  const isCurrentQuestionAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <header className="container mx-auto text-center mb-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg mt-28">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete CSS Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master CSS from Beginner to Advanced Level through interactive quizzes,
        </p>
      </header>

      <div className={`${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto container">
          {Object.keys(htmlContent).map((level) => (
            <button
              key={level}
              className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${activeLevel === level
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              onClick={() => {
                setActiveLevel(level);
                setActiveTopicIndex(0);
                setQuizStarted(false);
                setQuizFinished(false);
                setAnswers({});
                setScore(0);
                setSelectedAnswer(null);
                setShowTimeAlert(false);
              }}
            >
              {htmlContent[level].title}
            </button>
          ))}
        </nav>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className={`lg:col-span-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-6 ${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            {htmlContent[activeLevel].title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {htmlContent[activeLevel].topics.map((topic, index) => (
              <button
                key={index}
                className={`p-3 text-left rounded-lg transition-all duration-300 text-sm ${activeTopicIndex === index
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => handleTopicClick(index)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden p-6">
          {!quizStarted && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  htmlContent[activeLevel].topics[activeTopicIndex]
                    ?.explanation || "<p>No topic explanation available.</p>",
              }}
            />
          )}

          {quizStarted && !quizFinished && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Question {currentQuestion + 1} of {questions.length}
                </h2>
                <div className="flex items-center bg-red-100 text-red-700 py-1 px-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
                  <span className="font-medium">{timeLeft}s</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-200 ${selectedAnswer === index
                        ? "border-blue-500 bg-blue-50"
                        : isCurrentQuestionAnswered
                          ? "border-gray-300 bg-gray-100"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        } ${isCurrentQuestionAnswered
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer"
                        }`}
                      onClick={() => {
                        if (!isCurrentQuestionAnswered) {
                          handleAnswerSelect(index);
                        }
                      }}
                    >
                      <div className="flex items-center select-none">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswer === index
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-gray-400"
                            }`}
                        >
                          {selectedAnswer === index && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                          )}
                        </div>
                        <span className={isCurrentQuestionAnswered ? "text-gray-600" : ""}>
                          {option}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`flex items-center py-2 px-4 rounded-lg ${currentQuestion === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l105.5-105.5c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                  Previous
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null && !isCurrentQuestionAnswered}
                  className={`flex items-center py-2 px-4 rounded-lg ${selectedAnswer === null && !isCurrentQuestionAnswered
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    }`}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 ml-2 fill-current"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H338.8l-105.5 105.5c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      {showTimeAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-4 rounded-lg shadow-xl z-50 border-2 border-yellow-500 animate-bounce">
          <div className="flex items-center font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
            <span>Only 10 seconds left! Please select an option.</span>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowResultModal(false)}
              aria-label="Close results modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Results</h2>
            <div className="text-xl mb-4">
              You scored {score} out of {questions.length}
            </div>
            <div className="text-lg mb-6">
              Percentage: {((score / questions.length) * 100).toFixed(2)}%
            </div>

            <div className="w-full bg-gray-300 rounded-full h-6 mb-6 overflow-hidden">
              <div
                className="bg-blue-600 h-6 flex items-center justify-center text-white font-semibold transition-all duration-500"
                style={{ width: `${(score / questions.length) * 100}%` }}
              >
                {(score / questions.length) * 100 >= 50 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mr-2 fill-current"><path d="M400 240H112c-8.8 0-16 7.2-16 16s7.2 16 16 16H400c8.8 0 16-7.2 16-16s-7.2-16-16-16z" /></svg>
                )}
                {((score / questions.length) * 100).toFixed(2)}%
              </div>
            </div>

            <button
              onClick={() => {
                setShowResultModal(false);
                handleResetQuiz();
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Close & Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JSQuize;
