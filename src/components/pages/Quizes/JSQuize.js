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
            { "question": "How do you write a single-line comment in JavaScript?", "options": ["// comment", "/* comment */", "# comment", "<!-- comment -->"], "correctAnswer": 0 },
            { "question": "How do you write a multi-line comment in JavaScript?", "options": ["/* comment */", "// comment", "# comment", "<!-- comment -->"], "correctAnswer": 0 },
            { "question": "JavaScript statements are terminated by:", "options": ["Semicolon (;)", "Colon (:)", "Period (.)", "Comma (,)"], "correctAnswer": 0 },
            { "question": "Which of these is a valid JavaScript statement?", "options": ["console.log('Hello');", "print('Hello')", "echo 'Hello'", "System.out.println('Hello')"], "correctAnswer": 0 },
            { "question": "JavaScript is case-sensitive. Which is correct?", "options": ["console.log", "Console.log", "CONSOLE.LOG", "console.Log"], "correctAnswer": 0 },
            { "question": "What character is used to separate statements on the same line?", "options": ["Semicolon (;)", "Comma (,)", "Period (.)", "Colon (:)"], "correctAnswer": 0 },
            { "question": "Which is the correct way to declare a variable?", "options": ["var name;", "variable name;", "v name;", "declare name;"], "correctAnswer": 0 },
            { "question": "JavaScript code blocks are enclosed in:", "options": ["Curly braces { }", "Square brackets [ ]", "Parentheses ( )", "Angle brackets < >"], "correctAnswer": 0 },
            { "question": "What does 'use strict' do in JavaScript?", "options": ["Enables strict mode", "Imports a library", "Declares a variable", "Defines a function"], "correctAnswer": 0 },
            { "question": "Which symbol is used for string concatenation?", "options": ["+", "&", ".", "*"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Variables: var, let, const and Their Scope",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which keyword declares a block-scoped variable?", "options": ["let", "var", "variable", "declare"], "correctAnswer": 0 },
            { "question": "Which keyword declares a constant?", "options": ["const", "let", "var", "final"], "correctAnswer": 0 },
            { "question": "What is the scope of 'var'?", "options": ["Function scope", "Block scope", "Global scope only", "Module scope"], "correctAnswer": 0 },
            { "question": "Can you reassign a const variable?", "options": ["No", "Yes", "Only numbers", "Only strings"], "correctAnswer": 0 },
            { "question": "What happens if you don't initialize a const variable?", "options": ["SyntaxError", "undefined", "null", "0"], "correctAnswer": 0 },
            { "question": "Which has block scope?", "options": ["let and const", "var only", "All variables", "None"], "correctAnswer": 0 },
            { "question": "What is hoisting?", "options": ["Moving declarations to the top", "Variable assignment", "Function calling", "Error handling"], "correctAnswer": 0 },
            { "question": "Which variable declaration is hoisted but not initialized?", "options": ["var", "let", "const", "All of them"], "correctAnswer": 0 },
            { "question": "What is the temporal dead zone?", "options": ["Time before let/const initialization", "Memory leak", "Function scope", "Global scope"], "correctAnswer": 0 },
            { "question": "Which is the recommended way to declare variables in modern JavaScript?", "options": ["let and const", "var only", "No declaration", "Global variables"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Data Types and Type Conversion / Coercion",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How many primitive data types are there in JavaScript?", "options": ["7", "5", "6", "8"], "correctAnswer": 0 },
            { "question": "Which is NOT a primitive data type?", "options": ["Array", "String", "Number", "Boolean"], "correctAnswer": 0 },
            { "question": "What does typeof null return?", "options": ["object", "null", "undefined", "string"], "correctAnswer": 0 },
            { "question": "What is type coercion?", "options": ["Automatic type conversion", "Manual type conversion", "Error handling", "Variable declaration"], "correctAnswer": 0 },
            { "question": "What does '5' + 3 equal?", "options": ["'53'", "8", "53", "Error"], "correctAnswer": 0 },
            { "question": "What does '5' - 3 equal?", "options": ["2", "'53'", "'2'", "Error"], "correctAnswer": 0 },
            { "question": "How do you explicitly convert to number?", "options": ["Number()", "parseInt()", "parseFloat()", "All of the above"], "correctAnswer": 3 },
            { "question": "What does Boolean('') return?", "options": ["false", "true", "undefined", "null"], "correctAnswer": 0 },
            { "question": "Which values are falsy in JavaScript?", "options": ["false, 0, '', null, undefined, NaN", "Only false", "Only 0", "Only null"], "correctAnswer": 0 },
            { "question": "What is NaN?", "options": ["Not a Number", "Null and Null", "New Array Number", "No Assigned Name"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic Operators",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does the ++ operator do?", "options": ["Increments by 1", "Adds two numbers", "Concatenates strings", "Compares values"], "correctAnswer": 0 },
            { "question": "What is the difference between == and ===?", "options": ["=== checks type and value, == only value", "No difference", "=== is faster", "== is more accurate"], "correctAnswer": 0 },
            { "question": "What does the % operator do?", "options": ["Returns remainder", "Calculates percentage", "Divides numbers", "Multiplies numbers"], "correctAnswer": 0 },
            { "question": "What does && return if first operand is false?", "options": ["First operand", "Second operand", "true", "false"], "correctAnswer": 0 },
            { "question": "What does || return if first operand is true?", "options": ["First operand", "Second operand", "true", "false"], "correctAnswer": 0 },
            { "question": "What is the ternary operator syntax?", "options": ["condition ? true : false", "condition && true || false", "if condition then true else false", "condition = true : false"], "correctAnswer": 0 },
            { "question": "What does the typeof operator return?", "options": ["String representing the type", "Boolean", "Number", "Object"], "correctAnswer": 0 },
            { "question": "What does 5 ** 2 equal?", "options": ["25", "10", "7", "Error"], "correctAnswer": 0 },
            { "question": "What is the assignment operator?", "options": ["=", "==", "===", "=>"], "correctAnswer": 0 },
            { "question": "What does the ! operator do?", "options": ["Logical NOT", "Logical AND", "Logical OR", "Assignment"], "correctAnswer": 0 },
            { "question": "What does x += 5 mean?", "options": ["x = x + 5", "x == x + 5", "x === x + 5", "x > x + 5"], "correctAnswer": 0 },
            { "question": "What is the result of 10 / 3 in JavaScript?", "options": ["3.333...", "3", "Error", "undefined"], "correctAnswer": 0 },
            { "question": "What does the in operator check?", "options": ["Property existence in object", "Value in array", "Type of variable", "Function existence"], "correctAnswer": 0 },
            { "question": "What does the instanceof operator do?", "options": ["Checks if object is instance of constructor", "Creates new instance", "Compares two objects", "Deletes object"], "correctAnswer": 0 },
            { "question": "What is operator precedence?", "options": ["Order of operation execution", "Operator speed", "Operator type", "Operator syntax"], "correctAnswer": 0 },
            { "question": "Which has higher precedence: * or +?", "options": ["*", "+", "Same", "Depends on context"], "correctAnswer": 0 },
            { "question": "What does the delete operator do?", "options": ["Removes object property", "Deletes variable", "Clears array", "Removes function"], "correctAnswer": 0 },
            { "question": "What is the result of true + false?", "options": ["1", "true", "false", "Error"], "correctAnswer": 0 },
            { "question": "What does the void operator return?", "options": ["undefined", "null", "void", "Error"], "correctAnswer": 0 },
            { "question": "What is short-circuit evaluation?", "options": ["Stopping evaluation when result is determined", "Fast operator execution", "Operator optimization", "Error prevention"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Conditional Statements",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which is the correct if statement syntax?", "options": ["if (condition) { }", "if condition { }", "if (condition) then { }", "if condition then { }"], "correctAnswer": 0 },
            { "question": "What keyword is used for alternative condition?", "options": ["else if", "elseif", "elif", "otherwise"], "correctAnswer": 0 },
            { "question": "What is the switch statement used for?", "options": ["Multiple condition checking", "Loop iteration", "Function declaration", "Variable assignment"], "correctAnswer": 0 },
            { "question": "What keyword prevents fall-through in switch?", "options": ["break", "stop", "exit", "return"], "correctAnswer": 0 },
            { "question": "What happens without break in switch case?", "options": ["Fall-through to next case", "Error", "Exit switch", "Nothing"], "correctAnswer": 0 },
            { "question": "What is the default case in switch?", "options": ["Executes when no case matches", "First case to execute", "Last case to execute", "Error handler"], "correctAnswer": 0 },
            { "question": "Can you use expressions in switch cases?", "options": ["Yes", "No", "Only constants", "Only variables"], "correctAnswer": 0 },
            { "question": "What is a nested if statement?", "options": ["If statement inside another if", "Multiple if conditions", "If with else", "Switch inside if"], "correctAnswer": 0 },
            { "question": "Which operator can replace simple if-else?", "options": ["Ternary operator (?:)", "Logical AND (&&)", "Logical OR (||)", "Assignment (=)"], "correctAnswer": 0 },
            { "question": "What does if (!condition) mean?", "options": ["If condition is false", "If condition is true", "If condition is null", "If condition is undefined"], "correctAnswer": 0 },
            { "question": "Can you omit braces in if statement?", "options": ["Yes, for single statement", "No, always required", "Only in strict mode", "Only for else"], "correctAnswer": 0 },
            { "question": "What is the else clause?", "options": ["Executes when if condition is false", "Alternative if condition", "Error handler", "Loop terminator"], "correctAnswer": 0 },
            { "question": "How do you check multiple conditions with AND?", "options": ["if (a && b)", "if (a and b)", "if (a & b)", "if (a + b)"], "correctAnswer": 0 },
            { "question": "How do you check multiple conditions with OR?", "options": ["if (a || b)", "if (a or b)", "if (a | b)", "if (a + b)"], "correctAnswer": 0 },
            { "question": "What is guard clause pattern?", "options": ["Early return on condition", "Nested if statements", "Switch with default", "Try-catch block"], "correctAnswer": 0 },
            { "question": "Can switch work with strings?", "options": ["Yes", "No", "Only numbers", "Only booleans"], "correctAnswer": 0 },
            { "question": "What is truthy value?", "options": ["Value that converts to true", "Boolean true", "Number 1", "String 'true'"], "correctAnswer": 0 },
            { "question": "What is falsy value?", "options": ["Value that converts to false", "Boolean false", "Number 0", "Empty string"], "correctAnswer": 0 },
            { "question": "How do you chain multiple else if?", "options": ["else if (condition)", "elseif (condition)", "elif (condition)", "if else (condition)"], "correctAnswer": 0 },
            { "question": "What happens if no case matches in switch without default?", "options": ["Nothing executes", "Error occurs", "First case executes", "Last case executes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Loops",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which loop checks condition before execution?", "options": ["while", "do-while", "for", "Both while and for"], "correctAnswer": 3 },
            { "question": "Which loop executes at least once?", "options": ["do-while", "while", "for", "for-in"], "correctAnswer": 0 },
            { "question": "What does break statement do in a loop?", "options": ["Exits the loop", "Skips current iteration", "Restarts loop", "Pauses loop"], "correctAnswer": 0 },
            { "question": "What does continue statement do?", "options": ["Skips to next iteration", "Exits the loop", "Restarts loop", "Pauses loop"], "correctAnswer": 0 },
            { "question": "What is the syntax of for loop?", "options": ["for (init; condition; increment)", "for (condition; init; increment)", "for (increment; condition; init)", "for (condition)"], "correctAnswer": 0 },
            { "question": "What is for-in loop used for?", "options": ["Iterating object properties", "Iterating arrays only", "Numeric loops", "Infinite loops"], "correctAnswer": 0 },
            { "question": "What is for-of loop used for?", "options": ["Iterating iterable values", "Iterating object properties", "Numeric loops", "Conditional loops"], "correctAnswer": 0 },
            { "question": "What creates an infinite loop?", "options": ["while (true)", "for (;;)", "do-while (true)", "All of the above"], "correctAnswer": 3 },
            { "question": "Can you nest loops?", "options": ["Yes", "No", "Only for loops", "Only while loops"], "correctAnswer": 0 },
            { "question": "What happens if you forget increment in for loop?", "options": ["Infinite loop", "Syntax error", "Loop runs once", "Loop doesn't run"], "correctAnswer": 0 },
            { "question": "How do you loop through an array?", "options": ["for, for-of, forEach", "Only for loop", "Only while loop", "Only for-in loop"], "correctAnswer": 0 },
            { "question": "What is the difference between for-in and for-of?", "options": ["for-in gets keys, for-of gets values", "No difference", "for-of gets keys, for-in gets values", "Both get values"], "correctAnswer": 0 },
            { "question": "Can you use let in for loop initialization?", "options": ["Yes", "No", "Only var", "Only const"], "correctAnswer": 0 },
            { "question": "What is loop scope?", "options": ["Variables accessible within loop", "Loop execution time", "Loop nesting level", "Loop type"], "correctAnswer": 0 },
            { "question": "How do you exit nested loops?", "options": ["Labels with break", "Multiple breaks", "Return statement", "Exit function"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Functions",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How do you declare a function?", "options": ["function name() {}", "def name() {}", "func name() {}", "function: name() {}"], "correctAnswer": 0 },
            { "question": "What keyword returns a value from function?", "options": ["return", "yield", "output", "result"], "correctAnswer": 0 },
            { "question": "What are function parameters?", "options": ["Variables in function definition", "Function return values", "Function names", "Function calls"], "correctAnswer": 0 },
            { "question": "What are function arguments?", "options": ["Values passed when calling function", "Function parameters", "Function variables", "Function returns"], "correctAnswer": 0 },
            { "question": "What is function expression?", "options": ["Function assigned to variable", "Function declaration", "Function call", "Function parameter"], "correctAnswer": 0 },
            { "question": "What is arrow function syntax?", "options": ["() => {}", "() -> {}", "() : {}", "() = {}"], "correctAnswer": 0 },
            { "question": "What is function hoisting?", "options": ["Function declarations moved to top", "Function calls first", "Function parameters", "Function returns"], "correctAnswer": 0 },
            { "question": "What is anonymous function?", "options": ["Function without name", "Function with name", "Function parameter", "Function return"], "correctAnswer": 0 },
            { "question": "What is IIFE?", "options": ["Immediately Invoked Function Expression", "Internal Function", "Inherited Function", "Imported Function"], "correctAnswer": 0 },
            { "question": "What is function scope?", "options": ["Variables accessible within function", "Function parameters", "Function returns", "Function calls"], "correctAnswer": 0 },
            { "question": "Can functions be nested?", "options": ["Yes", "No", "Only arrow functions", "Only declarations"], "correctAnswer": 0 },
            { "question": "What is callback function?", "options": ["Function passed as argument", "Function that calls back", "Function return", "Function parameter"], "correctAnswer": 0 },
            { "question": "What is default parameter?", "options": ["Parameter with default value", "First parameter", "Last parameter", "Required parameter"], "correctAnswer": 0 },
            { "question": "What is rest parameter?", "options": ["Collects remaining arguments", "First parameter", "Last parameter", "Default parameter"], "correctAnswer": 0 },
            { "question": "What does function return without return statement?", "options": ["undefined", "null", "0", "Error"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic DOM Manipulation and Event Handling",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does DOM stand for?", "options": ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Display Object Model"], "correctAnswer": 0 },
            { "question": "How do you select element by ID?", "options": ["document.getElementById()", "document.getElement()", "document.selectById()", "document.findById()"], "correctAnswer": 0 },
            { "question": "How do you select elements by class name?", "options": ["document.getElementsByClassName()", "document.getClass()", "document.selectByClass()", "document.findClass()"], "correctAnswer": 0 },
            { "question": "How do you change element text content?", "options": ["element.textContent", "element.text", "element.content", "element.innerText"], "correctAnswer": 0 },
            { "question": "How do you change element HTML content?", "options": ["element.innerHTML", "element.html", "element.content", "element.innerContent"], "correctAnswer": 0 },
            { "question": "How do you add event listener?", "options": ["element.addEventListener()", "element.addEvent()", "element.onEvent()", "element.bindEvent()"], "correctAnswer": 0 },
            { "question": "What is event object?", "options": ["Object containing event information", "DOM element", "Event listener", "Event type"], "correctAnswer": 0 },
            { "question": "How do you prevent default behavior?", "options": ["event.preventDefault()", "event.stop()", "event.cancel()", "event.prevent()"], "correctAnswer": 0 },
            { "question": "What is event bubbling?", "options": ["Event propagating up DOM tree", "Event going down", "Event stopping", "Event repeating"], "correctAnswer": 0 },
            { "question": "How do you create new element?", "options": ["document.createElement()", "document.newElement()", "document.addElement()", "document.makeElement()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Errors and Exception Handling",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is try-catch used for?", "options": ["Error handling", "Loop control", "Function declaration", "Variable assignment"], "correctAnswer": 0 },
            { "question": "What block always executes in try-catch?", "options": ["finally", "catch", "try", "else"], "correctAnswer": 0 },
            { "question": "How do you throw custom error?", "options": ["throw new Error()", "error()", "exception()", "fail()"], "correctAnswer": 0 },
            { "question": "What types of errors exist in JavaScript?", "options": ["Syntax, Runtime, Logical", "Only Syntax", "Only Runtime", "Only Logical"], "correctAnswer": 0 },
            { "question": "What is ReferenceError?", "options": ["Variable not defined", "Syntax error", "Type error", "Range error"], "correctAnswer": 0 },
            { "question": "What is TypeError?", "options": ["Wrong data type operation", "Variable not found", "Syntax error", "Range error"], "correctAnswer": 0 },
            { "question": "What is SyntaxError?", "options": ["Invalid code syntax", "Variable not found", "Type error", "Range error"], "correctAnswer": 0 },
            { "question": "Can you catch specific error types?", "options": ["Yes, using instanceof", "No", "Only in strict mode", "Only with finally"], "correctAnswer": 0 },
            { "question": "What happens if error is not caught?", "options": ["Script stops execution", "Error is ignored", "Script continues", "Browser crashes"], "correctAnswer": 0 },
            { "question": "What is the error object?", "options": ["Contains error information", "DOM element", "Function parameter", "Variable type"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Simple JavaScript in HTML",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Where can you place JavaScript in HTML?", "options": ["<head>, <body>, external file", "Only <head>", "Only <body>", "Only external file"], "correctAnswer": 0 },
            { "question": "What attribute links external JavaScript file?", "options": ["src", "href", "link", "file"], "correctAnswer": 0 },
            { "question": "What is inline JavaScript?", "options": ["JavaScript in HTML attributes", "JavaScript in <script> tag", "External JavaScript", "JavaScript comments"], "correctAnswer": 0 },
            { "question": "When does JavaScript in <head> execute?", "options": ["Before page content loads", "After page loads", "On user interaction", "Never"], "correctAnswer": 0 },
            { "question": "When does JavaScript at end of <body> execute?", "options": ["After HTML content loads", "Before HTML loads", "On user interaction", "Never"], "correctAnswer": 0 },
            { "question": "What is document.ready equivalent?", "options": ["DOMContentLoaded event", "window.onload", "body.onload", "page.ready"], "correctAnswer": 0 },
            { "question": "How do you handle form submission with JavaScript?", "options": ["onsubmit event", "onclick event", "onload event", "onchange event"], "correctAnswer": 0 },
            { "question": "What is noscript tag for?", "options": ["Content when JavaScript disabled", "JavaScript comments", "Script loading", "Error handling"], "correctAnswer": 0 },
            { "question": "How do you access form elements?", "options": ["document.forms", "document.elements", "document.inputs", "document.fields"], "correctAnswer": 0 },
            { "question": "What is best practice for script placement?", "options": ["Before closing </body> tag", "In <head>", "Inline in HTML", "At page top"], "correctAnswer": 0 }
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
            { "question": "What is function hoisting?", "options": ["Moving function declarations to top of scope", "Calling functions before declaration", "Function optimization", "Function caching"], "correctAnswer": 0 },
            { "question": "Are function expressions hoisted?", "options": ["No, only the variable declaration", "Yes, completely", "Only arrow functions", "Only anonymous functions"], "correctAnswer": 0 },
            { "question": "Are arrow functions hoisted?", "options": ["No", "Yes", "Only in strict mode", "Only when assigned to var"], "correctAnswer": 0 },
            { "question": "What happens when you call a function before its declaration?", "options": ["It works due to hoisting", "ReferenceError", "TypeError", "SyntaxError"], "correctAnswer": 0 },
            { "question": "Which functions are fully hoisted?", "options": ["Function declarations", "Function expressions", "Arrow functions", "Method definitions"], "correctAnswer": 0 },
            { "question": "What is the temporal dead zone for functions?", "options": ["Period before let/const function initialization", "Function execution time", "Hoisting period", "Function scope"], "correctAnswer": 0 },
            { "question": "Can you call a var function expression before declaration?", "options": ["No, it's undefined", "Yes, it works", "Only in strict mode", "Throws error"], "correctAnswer": 0 },
            { "question": "What order do declarations get hoisted?", "options": ["Functions first, then variables", "Variables first, then functions", "Alphabetical order", "Declaration order"], "correctAnswer": 0 },
            { "question": "Are class declarations hoisted?", "options": ["Yes, but not initialized", "No", "Yes, completely", "Only methods"], "correctAnswer": 0 },
            { "question": "What's the difference between var and let function hoisting?", "options": ["var is undefined, let throws error", "No difference", "let is undefined, var throws error", "Both throw errors"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Closures",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a closure?", "options": ["Function with access to outer scope variables", "Function that returns another function", "Anonymous function", "Immediately invoked function"], "correctAnswer": 0 },
            { "question": "When is a closure created?", "options": ["When a function is defined", "When a function is called", "When variables are declared", "When scope ends"], "correctAnswer": 0 },
            { "question": "What do closures have access to?", "options": ["Variables from outer scopes", "Only global variables", "Only local variables", "Only parameters"], "correctAnswer": 0 },
            { "question": "What is lexical scoping?", "options": ["Scope determined by where variables are declared", "Scope determined at runtime", "Global scope only", "Function scope only"], "correctAnswer": 0 },
            { "question": "Can closures access variables after outer function returns?", "options": ["Yes", "No", "Only global variables", "Only if explicitly returned"], "correctAnswer": 0 },
            { "question": "What is a common use case for closures?", "options": ["Data privacy and encapsulation", "Performance optimization", "Error handling", "Type checking"], "correctAnswer": 0 },
            { "question": "What is the module pattern?", "options": ["Using closures to create private variables", "Importing external modules", "Function inheritance", "Class definition"], "correctAnswer": 0 },
            { "question": "Can closures cause memory leaks?", "options": ["Yes, if not handled properly", "No, never", "Only in old browsers", "Only with global variables"], "correctAnswer": 0 },
            { "question": "What happens to variables in closure scope?", "options": ["They remain accessible", "They are garbage collected", "They become global", "They are copied"], "correctAnswer": 0 },
            { "question": "How do you create a counter using closures?", "options": ["Return function that accesses outer variable", "Use global variable", "Use class property", "Use static variable"], "correctAnswer": 0 }
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
        },
        {
          "title": "Objects, Prototypes, and Classes in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How do you create an object in JavaScript?", "options": ["Using object literal {} or new Object()", "Only with new Object()", "Only with object literal", "Using function only"], "correctAnswer": 0 },
            { "question": "What is a prototype in JavaScript?", "options": ["Object that serves as template for other objects", "Function parameter", "Variable type", "Error handler"], "correctAnswer": 0 },
            { "question": "How do you access object properties?", "options": ["dot notation or bracket notation", "Only dot notation", "Only bracket notation", "Using methods only"], "correctAnswer": 0 },
            { "question": "What is prototype chain?", "options": ["Chain of prototypes for property lookup", "Array of objects", "Function sequence", "Variable scope"], "correctAnswer": 0 },
            { "question": "How do you create a class in ES6?", "options": ["class ClassName {}", "function ClassName() {}", "new Class()", "object.create()"], "correctAnswer": 0 },
            { "question": "What is constructor method in class?", "options": ["Method called when creating instance", "Method for destroying object", "Static method", "Private method"], "correctAnswer": 0 },
            { "question": "What is inheritance in JavaScript?", "options": ["Object inheriting properties from another", "Function calling", "Variable assignment", "Error handling"], "correctAnswer": 0 },
            { "question": "How do you extend a class?", "options": ["class Child extends Parent", "class Child inherits Parent", "class Child : Parent", "class Child from Parent"], "correctAnswer": 0 },
            { "question": "What is super keyword?", "options": ["Calls parent class methods", "Creates new object", "Defines static method", "Handles errors"], "correctAnswer": 0 },
            { "question": "What is Object.create() used for?", "options": ["Creating object with specific prototype", "Copying objects", "Deleting objects", "Converting objects"], "correctAnswer": 0 },
            { "question": "What are static methods?", "options": ["Methods called on class, not instance", "Methods called on instance", "Private methods", "Async methods"], "correctAnswer": 0 },
            { "question": "What is method overriding?", "options": ["Child class redefining parent method", "Calling multiple methods", "Method deletion", "Method copying"], "correctAnswer": 0 },
            { "question": "What is polymorphism in JavaScript?", "options": ["Same method behaving differently in different classes", "Multiple inheritance", "Method overloading", "Variable types"], "correctAnswer": 0 },
            { "question": "How do you check if property exists in object?", "options": ["'property' in object or hasOwnProperty()", "Only hasOwnProperty()", "Only 'in' operator", "Using typeof"], "correctAnswer": 0 },
            { "question": "What is Object.keys() used for?", "options": ["Getting array of object property names", "Getting property values", "Creating objects", "Deleting properties"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "JavaScript Arrays and Array Methods",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How do you create an array?", "options": ["[] or new Array()", "Only []", "Only new Array()", "Using object literal"], "correctAnswer": 0 },
            { "question": "What does push() method do?", "options": ["Adds element to end of array", "Removes last element", "Adds to beginning", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does pop() method do?", "options": ["Removes and returns last element", "Adds element to end", "Removes first element", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does shift() method do?", "options": ["Removes and returns first element", "Adds to beginning", "Removes last element", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does unshift() method do?", "options": ["Adds element to beginning of array", "Removes first element", "Adds to end", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does map() method return?", "options": ["New array with transformed elements", "Modified original array", "Single value", "Boolean"], "correctAnswer": 0 },
            { "question": "What does filter() method do?", "options": ["Returns new array with elements that pass test", "Modifies original array", "Returns single element", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does reduce() method do?", "options": ["Reduces array to single value", "Filters array", "Maps array", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does forEach() method do?", "options": ["Executes function for each element", "Returns new array", "Filters array", "Sorts array"], "correctAnswer": 0 },
            { "question": "What does find() method return?", "options": ["First element that matches condition", "All matching elements", "Index of element", "Boolean"], "correctAnswer": 0 },
            { "question": "What does indexOf() method return?", "options": ["Index of first occurrence", "Element value", "Boolean", "All indices"], "correctAnswer": 0 },
            { "question": "What does includes() method return?", "options": ["Boolean if element exists", "Element index", "Element value", "Array of matches"], "correctAnswer": 0 },
            { "question": "What does slice() method do?", "options": ["Returns shallow copy of portion", "Modifies original array", "Removes elements", "Adds elements"], "correctAnswer": 0 },
            { "question": "What does splice() method do?", "options": ["Changes array by removing/adding elements", "Returns copy", "Only removes elements", "Only adds elements"], "correctAnswer": 0 },
            { "question": "What does sort() method do?", "options": ["Sorts array in place", "Returns new sorted array", "Only sorts numbers", "Only sorts strings"], "correctAnswer": 0 },
            { "question": "What does reverse() method do?", "options": ["Reverses array in place", "Returns new reversed array", "Only works with numbers", "Only works with strings"], "correctAnswer": 0 },
            { "question": "What does join() method return?", "options": ["String with array elements joined", "New array", "Modified array", "Boolean"], "correctAnswer": 0 },
            { "question": "What does concat() method do?", "options": ["Returns new array with merged arrays", "Modifies original array", "Only works with two arrays", "Removes duplicates"], "correctAnswer": 0 },
            { "question": "What does some() method return?", "options": ["Boolean if any element passes test", "Array of matching elements", "First matching element", "Count of matches"], "correctAnswer": 0 },
            { "question": "What does every() method return?", "options": ["Boolean if all elements pass test", "Array of results", "First failing element", "Count of passes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Asynchronous Programming in JavaScript (Basics)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is asynchronous programming?", "options": ["Code execution without blocking", "Sequential code execution", "Parallel processing", "Error handling"], "correctAnswer": 0 },
            { "question": "What is a Promise?", "options": ["Object representing eventual completion of async operation", "Synchronous function", "Error handler", "Loop construct"], "correctAnswer": 0 },
            { "question": "What are the three states of a Promise?", "options": ["Pending, Fulfilled, Rejected", "Start, Running, End", "True, False, Null", "Success, Error, Loading"], "correctAnswer": 0 },
            { "question": "How do you handle Promise resolution?", "options": [".then() method", ".catch() method", ".finally() method", "All of the above"], "correctAnswer": 3 },
            { "question": "How do you handle Promise rejection?", "options": [".catch() method", ".then() method", ".finally() method", "try-catch"], "correctAnswer": 0 },
            { "question": "What is async/await?", "options": ["Syntactic sugar for Promises", "New data type", "Error handling", "Loop construct"], "correctAnswer": 0 },
            { "question": "What keyword makes function asynchronous?", "options": ["async", "await", "promise", "sync"], "correctAnswer": 0 },
            { "question": "What does await keyword do?", "options": ["Waits for Promise to resolve", "Creates Promise", "Handles errors", "Loops through data"], "correctAnswer": 0 },
            { "question": "Can you use await without async?", "options": ["No, only inside async functions", "Yes, anywhere", "Only in global scope", "Only in classes"], "correctAnswer": 0 },
            { "question": "What is Promise.all() used for?", "options": ["Wait for all Promises to resolve", "Create multiple Promises", "Handle errors", "Sequential execution"], "correctAnswer": 0 },
            { "question": "What happens if one Promise fails in Promise.all()?", "options": ["All fail immediately", "Others continue", "Retry failed Promise", "Ignore failure"], "correctAnswer": 0 },
            { "question": "What is Promise.race() used for?", "options": ["Returns first settled Promise", "Waits for all Promises", "Creates race condition", "Handles timeouts"], "correctAnswer": 0 },
            { "question": "How do you create a resolved Promise?", "options": ["Promise.resolve()", "new Promise()", "Promise.create()", "Promise.success()"], "correctAnswer": 0 },
            { "question": "How do you create a rejected Promise?", "options": ["Promise.reject()", "new Promise()", "Promise.fail()", "Promise.error()"], "correctAnswer": 0 },
            { "question": "What is microtask queue?", "options": ["Queue for Promise callbacks", "Regular callback queue", "Error queue", "Event queue"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Working with API Requests in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is fetch() used for?", "options": ["Making HTTP requests", "Getting DOM elements", "Array operations", "Error handling"], "correctAnswer": 0 },
            { "question": "What does fetch() return?", "options": ["Promise", "Response object", "JSON data", "String"], "correctAnswer": 0 },
            { "question": "How do you get JSON from fetch response?", "options": ["response.json()", "response.data", "response.body", "response.content"], "correctAnswer": 0 },
            { "question": "What HTTP method does fetch use by default?", "options": ["GET", "POST", "PUT", "DELETE"], "correctAnswer": 0 },
            { "question": "How do you make POST request with fetch?", "options": ["Pass method in options object", "Use fetch.post()", "Use postFetch()", "Change URL"], "correctAnswer": 0 },
            { "question": "What is CORS?", "options": ["Cross-Origin Resource Sharing", "Client-Origin Request System", "Cross-Object Resource Security", "Client-Object Request Sharing"], "correctAnswer": 0 },
            { "question": "How do you handle fetch errors?", "options": ["Check response.ok and use .catch()", "Only use .catch()", "Only check response.ok", "Errors are automatic"], "correctAnswer": 0 },
            { "question": "What is XMLHttpRequest?", "options": ["Older API for HTTP requests", "XML parser", "HTTP server", "Database connector"], "correctAnswer": 0 },
            { "question": "What are HTTP status codes?", "options": ["Numbers indicating request result", "Error messages", "Request types", "Response formats"], "correctAnswer": 0 },
            { "question": "What does status code 200 mean?", "options": ["Success", "Not Found", "Server Error", "Unauthorized"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Error Handling Improvements & Debugging Techniques in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the purpose of try-catch-finally?", "options": ["Handle errors gracefully", "Loop control", "Function declaration", "Variable assignment"], "correctAnswer": 0 },
            { "question": "What debugging tool is built into browsers?", "options": ["Developer Tools", "Console only", "Debugger statement", "Error logs"], "correctAnswer": 0 },
            { "question": "What does console.log() do?", "options": ["Outputs information to console", "Handles errors", "Debugs code", "All of the above"], "correctAnswer": 3 },
            { "question": "What is a breakpoint?", "options": ["Point where code execution pauses", "Error location", "Function end", "Variable declaration"], "correctAnswer": 0 },
            { "question": "What does debugger statement do?", "options": ["Pauses code execution", "Logs to console", "Throws error", "Ends function"], "correctAnswer": 0 },
            { "question": "What is stack trace?", "options": ["List of function calls leading to error", "Variable values", "Code performance", "Memory usage"], "correctAnswer": 0 },
            { "question": "How do you handle async function errors?", "options": ["try-catch with await", "Only .catch()", "Only try-catch", "Errors are ignored"], "correctAnswer": 0 },
            { "question": "What is console.error() used for?", "options": ["Logging error messages", "Throwing errors", "Handling errors", "Debugging code"], "correctAnswer": 0 },
            { "question": "What is the difference between console.log and console.error?", "options": ["Error appears in red and may trigger error handlers", "No difference", "Error is faster", "Log is more detailed"], "correctAnswer": 0 },
            { "question": "What is source mapping?", "options": ["Mapping minified code to original", "Error location tracking", "Performance monitoring", "Memory mapping"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Hoisting, Scope, and Execution Context in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is execution context?", "options": ["Environment where code is executed", "Function parameter", "Variable type", "Error handler"], "correctAnswer": 0 },
            { "question": "What are the types of execution context?", "options": ["Global and Function", "Local and Remote", "Public and Private", "Sync and Async"], "correctAnswer": 0 },
            { "question": "What is the call stack?", "options": ["Stack of execution contexts", "Function parameters", "Variable storage", "Error log"], "correctAnswer": 0 },
            { "question": "What is lexical scope?", "options": ["Scope determined by code structure", "Scope determined at runtime", "Global scope only", "Function scope only"], "correctAnswer": 0 },
            { "question": "What is block scope?", "options": ["Scope within curly braces", "Function scope", "Global scope", "Module scope"], "correctAnswer": 0 },
            { "question": "Which variables have block scope?", "options": ["let and const", "var only", "All variables", "None"], "correctAnswer": 0 },
            { "question": "What is variable shadowing?", "options": ["Inner variable hiding outer variable", "Variable hoisting", "Variable deletion", "Variable copying"], "correctAnswer": 0 },
            { "question": "What is the scope chain?", "options": ["Chain of scopes for variable lookup", "Function call chain", "Variable assignment chain", "Error propagation"], "correctAnswer": 0 },
            { "question": "What happens during creation phase of execution context?", "options": ["Variables and functions are hoisted", "Code is executed", "Variables are assigned", "Functions are called"], "correctAnswer": 0 },
            { "question": "What happens during execution phase?", "options": ["Code is executed line by line", "Variables are hoisted", "Functions are declared", "Scope is created"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Event Loop and Concurrency in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the event loop?", "options": ["Mechanism that handles async operations", "Loop for events", "Function loop", "Error loop"], "correctAnswer": 0 },
            { "question": "Is JavaScript single-threaded?", "options": ["Yes, but can handle async operations", "No, it's multi-threaded", "Only in browsers", "Only in Node.js"], "correctAnswer": 0 },
            { "question": "What is the call stack?", "options": ["Stack for function calls", "Event storage", "Variable storage", "Error log"], "correctAnswer": 0 },
            { "question": "What is the callback queue?", "options": ["Queue for callback functions", "Function parameters", "Variable queue", "Error queue"], "correctAnswer": 0 },
            { "question": "What is the microtask queue?", "options": ["High priority queue for Promises", "Regular callback queue", "Event queue", "Error queue"], "correctAnswer": 0 },
            { "question": "Which has higher priority: microtasks or macrotasks?", "options": ["Microtasks", "Macrotasks", "Same priority", "Depends on browser"], "correctAnswer": 0 },
            { "question": "What are Web APIs?", "options": ["Browser-provided async APIs", "JavaScript built-ins", "Node.js modules", "Error handlers"], "correctAnswer": 0 },
            { "question": "When does event loop check queues?", "options": ["When call stack is empty", "Continuously", "On timer", "On events"], "correctAnswer": 0 },
            { "question": "What is blocking code?", "options": ["Code that prevents event loop from continuing", "Async code", "Error code", "Fast code"], "correctAnswer": 0 },
            { "question": "How does setTimeout work with event loop?", "options": ["Callback goes to macrotask queue after delay", "Executes immediately", "Blocks execution", "Goes to microtask queue"], "correctAnswer": 0 }
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
            { "question": "What is heap memory in JavaScript?", "options": ["Memory for objects and functions", "Memory for primitive values", "Stack memory", "Cache memory"], "correctAnswer": 0 },
            { "question": "How can closures cause memory leaks?", "options": ["By keeping references to outer scope variables", "By creating infinite loops", "By using global variables", "By declaring functions"], "correctAnswer": 0 },
            { "question": "What is garbage collection?", "options": ["Automatic memory cleanup of unreferenced objects", "Manual memory management", "Variable deletion", "Function cleanup"], "correctAnswer": 0 },
            { "question": "What is a memory leak?", "options": ["Memory that cannot be freed", "Fast memory access", "Memory optimization", "Memory allocation"], "correctAnswer": 0 },
            { "question": "How do you prevent closure memory leaks?", "options": ["Set references to null when done", "Avoid using closures", "Use global variables", "Use only primitives"], "correctAnswer": 0 },
            { "question": "What is the mark-and-sweep algorithm?", "options": ["Garbage collection method", "Sorting algorithm", "Search algorithm", "Optimization technique"], "correctAnswer": 0 },
            { "question": "What are weak references?", "options": ["References that don't prevent garbage collection", "Strong object references", "Variable references", "Function references"], "correctAnswer": 0 },
            { "question": "What is WeakMap used for?", "options": ["Storing key-value pairs with weak key references", "Regular mapping", "Array operations", "String operations"], "correctAnswer": 0 },
            { "question": "What happens to closure variables when outer function ends?", "options": ["They remain in memory if referenced by closure", "They are immediately deleted", "They become global", "They are copied"], "correctAnswer": 0 },
            { "question": "How do you monitor memory usage in JavaScript?", "options": ["Browser DevTools Memory tab", "console.memory", "Performance API", "All of the above"], "correctAnswer": 3 }
          ]
        },
        {
          "title": "Prototypes and Prototype Chain (In-depth Understanding)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is __proto__ property?", "options": ["Reference to object's prototype", "Object constructor", "Object method", "Object property"], "correctAnswer": 0 },
            { "question": "What is the difference between __proto__ and prototype?", "options": ["__proto__ is instance property, prototype is constructor property", "No difference", "__proto__ is for functions only", "prototype is deprecated"], "correctAnswer": 0 },
            { "question": "What is Object.getPrototypeOf() used for?", "options": ["Getting object's prototype", "Setting object's prototype", "Creating prototype", "Deleting prototype"], "correctAnswer": 0 },
            { "question": "What is Object.setPrototypeOf() used for?", "options": ["Setting object's prototype", "Getting object's prototype", "Creating prototype", "Copying prototype"], "correctAnswer": 0 },
            { "question": "What is prototype pollution?", "options": ["Modifying Object.prototype affecting all objects", "Memory leak", "Performance issue", "Syntax error"], "correctAnswer": 0 },
            { "question": "What is the end of prototype chain?", "options": ["null", "Object.prototype", "undefined", "Function.prototype"], "correctAnswer": 0 },
            { "question": "How do you create object without prototype?", "options": ["Object.create(null)", "new Object()", "{}", "Object.prototype = null"], "correctAnswer": 0 },
            { "question": "What is hasOwnProperty() used for?", "options": ["Check if property belongs to object, not prototype", "Check prototype existence", "Check property type", "Check property value"], "correctAnswer": 0 },
            { "question": "What is the prototype of Function.prototype?", "options": ["Object.prototype", "null", "Function", "undefined"], "correctAnswer": 0 },
            { "question": "How does instanceof operator work?", "options": ["Checks if constructor's prototype exists in object's prototype chain", "Checks object type", "Checks constructor type", "Checks property existence"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Async Programming in JavaScript (Promise Combinators + Event Loop Internals)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does Promise.allSettled() do?", "options": ["Waits for all promises to settle (resolve or reject)", "Waits for all to resolve", "Returns first settled", "Cancels all promises"], "correctAnswer": 0 },
            { "question": "What does Promise.any() do?", "options": ["Returns first fulfilled promise", "Returns all promises", "Returns last promise", "Cancels promises"], "correctAnswer": 0 },
            { "question": "What is the difference between Promise.all() and Promise.allSettled()?", "options": ["all() fails fast, allSettled() waits for all", "No difference", "allSettled() is faster", "all() is deprecated"], "correctAnswer": 0 },
            { "question": "What happens in microtask queue vs macrotask queue?", "options": ["Microtasks have higher priority", "Macrotasks have higher priority", "Same priority", "Depends on browser"], "correctAnswer": 0 },
            { "question": "What are examples of microtasks?", "options": ["Promise callbacks, queueMicrotask", "setTimeout, setInterval", "DOM events", "HTTP requests"], "correctAnswer": 0 },
            { "question": "What are examples of macrotasks?", "options": ["setTimeout, setInterval, I/O operations", "Promise callbacks", "queueMicrotask", "Object creation"], "correctAnswer": 0 },
            { "question": "What is queueMicrotask() used for?", "options": ["Scheduling function to run as microtask", "Creating promises", "Handling errors", "Timing operations"], "correctAnswer": 0 },
            { "question": "How does async/await affect the event loop?", "options": ["await pauses function, yields control to event loop", "Blocks event loop", "Runs in parallel", "No effect"], "correctAnswer": 0 },
            { "question": "What is Promise.race() behavior with rejected promises?", "options": ["Returns first settled (resolved or rejected)", "Ignores rejections", "Waits for resolution", "Throws error"], "correctAnswer": 0 },
            { "question": "What is the order of execution: sync code, microtasks, macrotasks?", "options": ["Sync code, then microtasks, then macrotasks", "All parallel", "Macrotasks first", "Random order"], "correctAnswer": 0 }
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
            { "question": "Which method describes a symbol's purpose to override built-in operations?", "options": ["Symbol methods like Symbol.toStringTag", "Symbol.create()", "Symbol.override()", "Symbol.default()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Proxy and Reflect API for Meta-Programming in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a Proxy in JavaScript?", "options": ["Object that intercepts and customizes operations", "Network proxy", "Function wrapper", "Class extension"], "correctAnswer": 0 },
            { "question": "What is a handler in Proxy?", "options": ["Object defining which operations are intercepted", "Function parameter", "Error handler", "Event handler"], "correctAnswer": 0 },
            { "question": "What is a trap in Proxy context?", "options": ["Method in handler that intercepts operations", "Error condition", "Loop construct", "Function call"], "correctAnswer": 0 },
            { "question": "What does the 'get' trap intercept?", "options": ["Property access operations", "Function calls", "Object creation", "Variable assignment"], "correctAnswer": 0 },
            { "question": "What does the 'set' trap intercept?", "options": ["Property assignment operations", "Function calls", "Object creation", "Variable declaration"], "correctAnswer": 0 },
            { "question": "What is Reflect API used for?", "options": ["Provides methods for interceptable operations", "Object reflection", "Performance monitoring", "Error handling"], "correctAnswer": 0 },
            { "question": "What is the relationship between Proxy traps and Reflect methods?", "options": ["Each trap has corresponding Reflect method", "No relationship", "Reflect replaces Proxy", "Proxy replaces Reflect"], "correctAnswer": 0 },
            { "question": "What does Reflect.get() do?", "options": ["Gets property value like obj[prop]", "Creates object", "Sets property", "Deletes property"], "correctAnswer": 0 },
            { "question": "What is meta-programming?", "options": ["Programming that manipulates programs", "High-performance programming", "Parallel programming", "Network programming"], "correctAnswer": 0 },
            { "question": "Can you revoke a Proxy?", "options": ["Yes, using Proxy.revocable()", "No, proxies are permanent", "Only in strict mode", "Only for certain traps"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Functional Programming Paradigms in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is functional programming?", "options": ["Programming paradigm using functions as first-class citizens", "Object-oriented programming", "Procedural programming", "Event-driven programming"], "correctAnswer": 0 },
            { "question": "What is a pure function?", "options": ["Function with no side effects and same output for same input", "Function that returns value", "Function with parameters", "Async function"], "correctAnswer": 0 },
            { "question": "What is immutability?", "options": ["Data that cannot be changed after creation", "Variable that can change", "Function that doesn't return", "Object property"], "correctAnswer": 0 },
            { "question": "What is higher-order function?", "options": ["Function that takes or returns other functions", "Function with many parameters", "Async function", "Recursive function"], "correctAnswer": 0 },
            { "question": "What is currying?", "options": ["Transforming function with multiple args into sequence of functions", "Function optimization", "Error handling", "Async programming"], "correctAnswer": 0 },
            { "question": "What is function composition?", "options": ["Combining functions to create new function", "Function declaration", "Function calling", "Function parameters"], "correctAnswer": 0 },
            { "question": "What is a closure in functional programming context?", "options": ["Function retaining access to outer scope", "Function parameter", "Function return", "Function declaration"], "correctAnswer": 0 },
            { "question": "What is map() in functional programming?", "options": ["Transforms each element in collection", "Filters collection", "Reduces collection", "Sorts collection"], "correctAnswer": 0 },
            { "question": "What is reduce() used for in functional programming?", "options": ["Accumulating values into single result", "Filtering arrays", "Mapping arrays", "Sorting arrays"], "correctAnswer": 0 },
            { "question": "What is the benefit of avoiding side effects?", "options": ["Predictable and testable code", "Faster execution", "Less memory usage", "Better syntax"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Performance Optimization & Event Delegation in JavaScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is event delegation?", "options": ["Using single event listener on parent for multiple children", "Assigning events to each element", "Removing event listeners", "Creating custom events"], "correctAnswer": 0 },
            { "question": "What is the benefit of event delegation?", "options": ["Better performance and memory usage", "Easier syntax", "Faster event handling", "Better security"], "correctAnswer": 0 },
            { "question": "What is debouncing?", "options": ["Limiting function execution frequency", "Event handling", "Error prevention", "Performance monitoring"], "correctAnswer": 0 },
            { "question": "What is throttling?", "options": ["Limiting function calls to fixed intervals", "Speeding up functions", "Error handling", "Memory management"], "correctAnswer": 0 },
            { "question": "What is lazy loading?", "options": ["Loading resources only when needed", "Preloading all resources", "Caching resources", "Compressing resources"], "correctAnswer": 0 },
            { "question": "What is memoization?", "options": ["Caching function results", "Memory management", "Function optimization", "Error handling"], "correctAnswer": 0 },
            { "question": "What is code splitting?", "options": ["Breaking code into smaller chunks", "Combining code files", "Minifying code", "Compressing code"], "correctAnswer": 0 },
            { "question": "What is tree shaking?", "options": ["Removing unused code from bundles", "Optimizing algorithms", "Memory cleanup", "Performance monitoring"], "correctAnswer": 0 },
            { "question": "What is the purpose of requestAnimationFrame?", "options": ["Optimizing animations for browser refresh rate", "Creating animations", "Handling events", "Loading resources"], "correctAnswer": 0 },
            { "question": "What is virtual DOM concept?", "options": ["In-memory representation of real DOM", "Backup of DOM", "Compressed DOM", "Cached DOM"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Security Best Practices in JavaScript Coding",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is XSS (Cross-Site Scripting)?", "options": ["Injecting malicious scripts into web pages", "Cross-origin requests", "Server-side attacks", "Database injection"], "correctAnswer": 0 },
            { "question": "How do you prevent XSS attacks?", "options": ["Sanitize and validate input, use CSP", "Only use HTTPS", "Disable JavaScript", "Use strong passwords"], "correctAnswer": 0 },
            { "question": "What is CSRF (Cross-Site Request Forgery)?", "options": ["Unauthorized commands from trusted user", "Script injection", "Data theft", "Server overload"], "correctAnswer": 0 },
            { "question": "What is Content Security Policy (CSP)?", "options": ["HTTP header controlling resource loading", "JavaScript security feature", "Browser setting", "Server configuration"], "correctAnswer": 0 },
            { "question": "Why should you avoid eval()?", "options": ["It can execute malicious code", "It's slow", "It's deprecated", "It causes errors"], "correctAnswer": 0 },
            { "question": "What is input validation?", "options": ["Checking user input for malicious content", "Form validation", "Type checking", "Error handling"], "correctAnswer": 0 },
            { "question": "What is output encoding?", "options": ["Converting data to safe format for output", "Data compression", "Data encryption", "Data formatting"], "correctAnswer": 0 },
            { "question": "What is the same-origin policy?", "options": ["Restricting access between different origins", "Allowing all cross-origin requests", "Server security policy", "Database access control"], "correctAnswer": 0 },
            { "question": "What is HTTPS and why is it important?", "options": ["Encrypted HTTP preventing data interception", "Faster HTTP", "Compressed HTTP", "Cached HTTP"], "correctAnswer": 0 },
            { "question": "What are secure cookies?", "options": ["Cookies with security flags like Secure and HttpOnly", "Encrypted cookies", "Compressed cookies", "Temporary cookies"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "In-Depth Understanding of JavaScript Engines and Compiling",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is V8 JavaScript engine?", "options": ["Google's JavaScript engine used in Chrome and Node.js", "Mozilla's JavaScript engine", "Microsoft's JavaScript engine", "Apple's JavaScript engine"], "correctAnswer": 0 },
            { "question": "What is Just-In-Time (JIT) compilation?", "options": ["Compiling code during execution for optimization", "Compiling before execution", "Interpreting without compilation", "Compiling after execution"], "correctAnswer": 0 },
            { "question": "What is the difference between interpretation and compilation?", "options": ["Interpretation executes directly, compilation converts to machine code", "No difference", "Compilation is slower", "Interpretation is more secure"], "correctAnswer": 0 },
            { "question": "What is bytecode in JavaScript engines?", "options": ["Intermediate representation between source and machine code", "Source code", "Machine code", "Error code"], "correctAnswer": 0 },
            { "question": "What is inline caching?", "options": ["Optimization technique caching property access patterns", "Memory caching", "Function caching", "Variable caching"], "correctAnswer": 0 },
            { "question": "What is hidden class optimization?", "options": ["V8 optimization for object property access", "CSS optimization", "Function optimization", "Variable optimization"], "correctAnswer": 0 },
            { "question": "What is deoptimization?", "options": ["Reverting optimized code when assumptions fail", "Code optimization", "Error handling", "Memory cleanup"], "correctAnswer": 0 },
            { "question": "What is the call stack in engine context?", "options": ["Stack tracking function calls and execution contexts", "Memory stack", "Error stack", "Variable stack"], "correctAnswer": 0 },
            { "question": "What is garbage collection in JavaScript engines?", "options": ["Automatic memory management removing unused objects", "Manual memory management", "Code cleanup", "Error cleanup"], "correctAnswer": 0 },
            { "question": "What is the difference between SpiderMonkey and V8?", "options": ["SpiderMonkey is Mozilla's engine, V8 is Google's", "No difference", "Different programming languages", "Different browsers only"], "correctAnswer": 0 }
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
