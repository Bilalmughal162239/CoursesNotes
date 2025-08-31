import React, { useState, useEffect, useCallback, useMemo } from "react";

const PytonQuize = () => {
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
      title: "Beginner Level Phyton Quiz",
      topics: [
        {
          "title": "Introduction to Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Who created Python programming language?", "options": ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling"], "correctAnswer": 0 },
            { "question": "In which year was Python first released?", "options": ["1991", "1989", "2000", "1995"], "correctAnswer": 0 },
            { "question": "Python is:", "options": ["Interpreted", "Compiled", "Both", "None"], "correctAnswer": 0 },
            { "question": "Which of these is NOT a characteristic of Python?", "options": ["Statically typed", "Dynamically typed", "High-level", "Garbage collected"], "correctAnswer": 0 },
            { "question": "Python syntax emphasizes:", "options": ["Readability and indentation", "Curly braces", "Semicolons", "Parentheses"], "correctAnswer": 0 },
            { "question": "Which symbol is used for comments in Python?", "options": ["#", "//", "<!--", "--"], "correctAnswer": 0 },
            { "question": "Python can be used for:", "options": ["Web development, data analysis, scripting", "Operating system development", "Hardware design", "None"], "correctAnswer": 0 },
            { "question": "What file extension is typical for Python scripts?", "options": [".py", ".java", ".cpp", ".exe"], "correctAnswer": 0 },
            { "question": "Which Python version is currently recommended for use?", "options": ["Python 3", "Python 2", "Python 1", "Python 4"], "correctAnswer": 0 },
            { "question": "Which keyword is used to define a function in Python?", "options": ["def", "function", "func", "lambda"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic Syntax in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the output of print(\"Hello World\")?", "options": ["Hello World", "hello world", "HELLO WORLD", "Syntax error"], "correctAnswer": 0 },
            { "question": "Indentation in Python is:", "options": ["Mandatory to define blocks", "Optional", "Ignored", "Same as C++ braces"], "correctAnswer": 0 },
            { "question": "Which of the following is a valid variable name?", "options": ["my_var", "2var", "my-var", "var!"], "correctAnswer": 0 },
            { "question": "Which data type is NOT built-in in Python?", "options": ["Character", "List", "Tuple", "Dictionary"], "correctAnswer": 0 },
            { "question": "How do you write a single line comment?", "options": ["Start with #", "Start with //", "Start with <!--", "Use /* */"], "correctAnswer": 0 },
            { "question": "Which keyword is used to create a loop?", "options": ["for", "foreach", "loop", "repeat"], "correctAnswer": 0 },
            { "question": "What character is used for line continuation?", "options": ["\\", "/", "#", ";"], "correctAnswer": 0 },
            { "question": "Which of the following is used to take input from the user?", "options": ["input()", "scanf()", "read()", "get()"], "correctAnswer": 0 },
            { "question": "How do you start an interactive Python shell?", "options": ["python in terminal", "run python.exe", "start python", "execute python"], "correctAnswer": 0 },
            { "question": "Which keyword defines a constant in Python?", "options": ["No built-in constant keyword", "const", "final", "constant"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Variables in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Python variables are:", "options": ["Dynamically typed", "Statically typed", "Typed at declaration", "None"], "correctAnswer": 0 },
            { "question": "Which of the following is a valid variable name?", "options": ["var_1", "1var", "var-1", "var 1"], "correctAnswer": 0 },
            { "question": "Which function is used to convert a value to integer?", "options": ["int()", "float()", "str()", "bool()"], "correctAnswer": 0 },
            { "question": "What is the type of variable x = 5.5?", "options": ["float", "int", "double", "string"], "correctAnswer": 0 },
            { "question": "Variables in Python do not require which of these?", "options": ["Explicit type declaration", "Initialization", "Assignment", "Naming"], "correctAnswer": 0 },
            { "question": "What is the scope of a variable defined inside a function?", "options": ["Local", "Global", "Static", "None"], "correctAnswer": 0 },
            { "question": "Which of the following variables is considered global?", "options": ["Defined outside all functions", "Defined in a function", "Defined in a class", "Defined in a loop"], "correctAnswer": 0 },
            { "question": "Which function returns the type of a variable?", "options": ["type()", "typeof()", "varType()", "getType()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Operators in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which operator performs exponentiation in Python?", "options": ["**", "^", "%", "//"], "correctAnswer": 0 },
            { "question": "What is the output of 5 // 2?", "options": ["2", "2.5", "3", "1"], "correctAnswer": 0 },
            { "question": "Which of these is a comparison operator?", "options": ["==", "=", "+", "-"], "correctAnswer": 0 },
            { "question": "The 'and' operator is:", "options": ["Logical AND", "Bitwise AND", "Assignment", "Arithmetic"], "correctAnswer": 0 },
            { "question": "What does the '%' operator do?", "options": ["Modulo operation", "Exponentiation", "Division", "Multiplication"], "correctAnswer": 0 },
            { "question": "Which operator checks membership in a list?", "options": ["in", "not in", "is", "=="], "correctAnswer": 0 },
            { "question": "What is the result of 'a == b' if a = 5 and b = 5?", "options": ["True", "False", "Error", "Undefined"], "correctAnswer": 0 },
            { "question": "Which operator is used to concatenate strings?", "options": ["+", "-", "*", "/"], "correctAnswer": 0 },
            { "question": "What is the difference between '==' and 'is'?", "options": ["'==' compares value, 'is' compares identity", "'==' compares identity, 'is' compares value", "Both same", "None"], "correctAnswer": 0 },
            { "question": "Is Python's '+' operator overloaded?", "options": ["Yes, for strings, lists, numbers", "No", "Only for numbers", "Only for strings"], "correctAnswer": 0 },
            { "question": "Which operator is used for floor division?", "options": ["//", "/", "%", "*"], "correctAnswer": 0 },
            { "question": "Which operator means 'not equal' in Python?", "options": ["!=", "<>", "==", "="], "correctAnswer": 0 },
            { "question": "What operator increases a variable by 1?", "options": ["None - use x = x + 1", "++", "+=", "-=", "*="], "correctAnswer": 0 },
            { "question": "Which bitwise operator inverts bits?", "options": ["~", "&", "|", "^"], "correctAnswer": 0 },
            { "question": "Which operator performs logical OR?", "options": ["or", "||", "|", "&"], "correctAnswer": 0 },
            { "question": "What is the output of 2 ** 3?", "options": ["8", "6", "9", "5"], "correctAnswer": 0 },
            { "question": "Which operator is used to perform identity check?", "options": ["is", "==", "=", "!="], "correctAnswer": 0 },
            { "question": "What does 'not' operator do?", "options": ["Negates a boolean", "Increments", "Performs bitwise NOT", "Reserved keyword"], "correctAnswer": 0 },
            { "question": "Which operator is used for slicing?", "options": [":", "::", "-", "+="], "correctAnswer": 0 },
            { "question": "Which operator returns the type of an object?", "options": ["type()", "typeof", "instanceof", "typeof()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Basic Data Structures in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which of the following is mutable?", "options": ["List", "Tuple", "String", "Integer"], "correctAnswer": 0 },
            { "question": "Which data structure is ordered and immutable?", "options": ["Tuple", "Set", "Dictionary", "List"], "correctAnswer": 0 },
            { "question": "Which data structure stores key-value pairs?", "options": ["Dictionary", "List", "Tuple", "Set"], "correctAnswer": 0 },
            { "question": "Which data structure is unordered and contains unique values?", "options": ["Set", "List", "Tuple", "Dictionary"], "correctAnswer": 0 },
            { "question": "How are elements accessed in a list?", "options": ["By index", "By key", "By value", "By attribute"], "correctAnswer": 0 },
            { "question": "How do you add an element to a set?", "options": ["add()", "append()", "insert()", "push()"], "correctAnswer": 0 },
            { "question": "Which method removes the last item from a list?", "options": ["pop()", "remove()", "delete()", "discard()"], "correctAnswer": 0 },
            { "question": "Which of these is a sequence type?", "options": ["String", "Dictionary", "Set", "None"], "correctAnswer": 0 },
            { "question": "What is list comprehension used for?", "options": ["Creating lists quickly", "Deleting lists", "Sorting lists", "Copying lists"], "correctAnswer": 0 },
            { "question": "Which method converts a list to a tuple?", "options": ["tuple()", "list()", "set()", "dict()"], "correctAnswer": 0 },
            { "question": "Are strings mutable in Python?", "options": ["No", "Yes", "Only in Python3", "Only with special methods"], "correctAnswer": 0 },
            { "question": "Which module provides deque data structure?", "options": ["collections", "array", "math", "sys"], "correctAnswer": 0 },
            { "question": "Which data structure is best for FIFO operations?", "options": ["deque", "list", "tuple", "set"], "correctAnswer": 0 },
            { "question": "How do you get the keys from a dictionary?", "options": ["keys()", "items()", "values()", "get()"], "correctAnswer": 0 },
            { "question": "What data structure maintains insertion order and keys are unique?", "options": ["Dictionary (Python 3.7+)", "List", "Set", "Tuple"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Control Flow in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which statement is used to make a decision in Python?", "options": ["if", "switch", "case", "select"], "correctAnswer": 0 },
            { "question": "What does 'elif' stand for?", "options": ["else if", "else", "if else", "end if"], "correctAnswer": 0 },
            { "question": "Which loop repeats while a condition is true?", "options": ["while", "for", "do-while", "repeat"], "correctAnswer": 0 },
            { "question": "Which keyword breaks out of the innermost loop?", "options": ["break", "continue", "pass", "return"], "correctAnswer": 0 },
            { "question": "What does 'continue' do in a loop?", "options": ["Skips to the next iteration", "Exits loop", "Stops program", "Skips rest of code after loop"], "correctAnswer": 0 },
            { "question": "Which statement does nothing and can be used as a placeholder?", "options": ["pass", "break", "continue", "exit"], "correctAnswer": 0 },
            { "question": "How do you iterate over a list's elements?", "options": ["for item in list:", "foreach", "while list", "repeat"], "correctAnswer": 0 },
            { "question": "Which comparison operator means 'not equal to'?", "options": ["!=", "==", "=", "<>"], "correctAnswer": 0 },
            { "question": "What will be the output if condition in 'if' is False and no 'else'?", "options": ["Nothing", "Error", "Default output", "None"], "correctAnswer": 0 },
            { "question": "Which statement is used to exit from a function?", "options": ["return", "break", "exit", "continue"], "correctAnswer": 0 },
            { "question": "How do you write a for loop that counts from 0 to 4?", "options": ["for i in range(5):", "for i in 0..4", "for i = 0 to 4:", "foreach i in 5"], "correctAnswer": 0 },
            { "question": "Which function returns a sequence of numbers?", "options": ["range()", "list()", "count()", "sequence()"], "correctAnswer": 0 },
            { "question": "What is the output of bool([])?", "options": ["False", "True", "None", "Error"], "correctAnswer": 0 },
            { "question": "Which keyword is used to handle exceptions?", "options": ["try", "catch", "throw", "except"], "correctAnswer": 3 },
            { "question": "What will be output by print(2 < 3 and 3 > 4)?", "options": ["False", "True", "Error", "None"], "correctAnswer": 0 },
            { "question": "How do you write a multiline if statement?", "options": ["Using indentation", "Using braces", "Using semicolon", "Using parentheses"], "correctAnswer": 0 },
            { "question": "Which of these is NOT a loop type in Python?", "options": ["do-while", "while", "for", "nested loops"], "correctAnswer": 0 },
            { "question": "How do you terminate an infinite loop?", "options": ["Using break", "Using continue", "Using pass", "Using return"], "correctAnswer": 0 },
            { "question": "Which keyword is used to declare a switch-case in Python?", "options": ["None - use if-elif-else", "switch", "case", "select"], "correctAnswer": 0 },
            { "question": "What will the pass keyword do inside a loop?", "options": ["Do nothing", "Break the loop", "Continue loop", "Exit program"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Functions in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How do you define a function in Python?", "options": ["def function_name():", "function function_name():", "fun function_name():", "func function_name()"], "correctAnswer": 0 },
            { "question": "Which keyword is used to return a value from a function?", "options": ["return", "yield", "break", "pass"], "correctAnswer": 0 },
            { "question": "What is a default argument in Python functions?", "options": ["An argument with a default value", "An argument without value", "An optional keyword", "An unnamed argument"], "correctAnswer": 0 },
            { "question": "What does *args allow in function definitions?", "options": ["Pass any number of positional arguments", "Pass keyword-only arguments", "Return multiple values", "Use global arguments"], "correctAnswer": 0 },
            { "question": "What does **kwargs allow in functions?", "options": ["Pass any number of keyword arguments", "Pass positional arguments", "Return dictionaries", "Define global variables"], "correctAnswer": 0 },
            { "question": "Which built-in function calls a function passed as argument multiple times?", "options": ["map()", "filter()", "reduce()", "zip()"], "correctAnswer": 0 },
            { "question": "What is a lambda function?", "options": ["Anonymous inline function", "Named function", "Decorator", "Class method"], "correctAnswer": 0 },
            { "question": "Can Python functions return multiple values?", "options": ["Yes, as tuples", "No", "Only one value", "Only lists"], "correctAnswer": 0 },
            { "question": "Which statement defines a function without implementation?", "options": ["def func(): pass", "func func():", "function func(){}", "def func(){}"], "correctAnswer": 0 },
            { "question": "What do decorators do?", "options": ["Modify or enhance functions", "Delete functions", "Rename functions", "Call functions"], "correctAnswer": 0 },
            { "question": "How do you specify a function argument is keyword-only?", "options": ["After * in parameter list", "With **", "With *args", "Using default value"], "correctAnswer": 0 },
            { "question": "What does the 'global' keyword do inside functions?", "options": ["Allow modifying globals", "Create local variable", "Delete variable", "Define constants"], "correctAnswer": 0 },
            { "question": "What is the output of len(function.__code__.co_varnames)?", "options": ["Number of local variables", "Function return type", "Number of parameters", "Number of function calls"], "correctAnswer": 0 },
            { "question": "Which of these is a recursive function?", "options": ["A function that calls itself", "A function with args", "Nested functions", "Anonymous functions"], "correctAnswer": 0 },
            { "question": "What is the term for a function passed as an argument?", "options": ["First-class function", "Callback", "Lambda", "Generator"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "User Input in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which function is used to get input from the user?", "options": ["input()", "scanf()", "cin>>", "readline()"], "correctAnswer": 0 },
            { "question": "What data type does input() return?", "options": ["String", "Integer", "Float", "Boolean"], "correctAnswer": 0 },
            { "question": "How to convert input string to integer?", "options": ["int(input())", "integer(input())", "convert(int)", "cast(int)"], "correctAnswer": 0 },
            { "question": "Which statement reads multiple inputs on same line?", "options": ["input().split()", "input()", "input().join()", "input().read()"], "correctAnswer": 0 },
            { "question": "How do you prompt the user with a message?", "options": ["input('Enter value: ')", "print()", "prompt()", "read()"], "correctAnswer": 0 },
            { "question": "What happens if input cannot be converted to int?", "options": ["ValueError exception", "Returns 0", "Returns None", "Program crashes without error"], "correctAnswer": 0 },
            { "question": "Which module helps read input without blocking?", "options": ["sys", "threading", "multiprocessing", "re"], "correctAnswer": 0 },
            { "question": "How to read a single character from input?", "options": ["input()[0]", "char()", "readChar()", "get()"], "correctAnswer": 0 },
            { "question": "Is input() function available in Python 2?", "options": ["Yes, but behaves differently", "No", "Only in libraries", "Always the same as Python 3"], "correctAnswer": 0 },
            { "question": "How to convert input to float?", "options": ["float(input())", "double(input())", "toFloat(input())", "cast(float)"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "File Handling in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which function is used to open a file in Python?", "options": ["open()", "file()", "openfile()", "read()"], "correctAnswer": 0 },
            { "question": "Which mode opens a file for reading?", "options": ["'r'", "'w'", "'a'", "'x'"], "correctAnswer": 0 },
            { "question": "Which mode opens a file for writing and truncates it?", "options": ["'w'", "'r'", "'a'", "'x'"], "correctAnswer": 0 },
            { "question": "Which method reads the entire file content?", "options": ["read()", "readline()", "readlines()", "input()"], "correctAnswer": 0 },
            { "question": "How do you write to a file object?", "options": ["write()", "writeline()", "print()", "puts()"], "correctAnswer": 0 },
            { "question": "Which statement automatically closes a file after operations?", "options": ["with statement", "try-except", "if statement", "while loop"], "correctAnswer": 0 },
            { "question": "Which method reads a single line from a file?", "options": ["readline()", "read()", "readlines()", "fetchline()"], "correctAnswer": 0 },
            { "question": "How do you append to a file?", "options": ["Open with 'a' mode", "Open with 'w' mode", "Open with 'r' mode", "Open with 'x' mode"], "correctAnswer": 0 },
            { "question": "Can you read and write to a file simultaneously?", "options": ["Yes, using 'r+' or 'w+' modes", "No", "Only in binary mode", "Only with multiple file handles"], "correctAnswer": 0 },
            { "question": "What is the default encoding used by open() in Python 3?", "options": ["UTF-8", "ASCII", "UTF-16", "ISO-8859-1"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    intermediate: {
      title: "Intermediate Level Python Quiz",
      topics: [
        {
          "title": "Object-Oriented Programming (OOP) in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is an object in Python OOP?", "options": ["An instance of a class", "A function", "A variable", "A module"], "correctAnswer": 0 },
            { "question": "How do you define a class in Python?", "options": ["Using the class keyword", "Using the def keyword", "Using the object keyword", "Using the function keyword"], "correctAnswer": 0 },
            { "question": "What method initializes an object when created?", "options": ["__init__", "__start__", "__create__", "__new__"], "correctAnswer": 0 },
            { "question": "What is encapsulation in OOP?", "options": ["Bundling data and methods", "Inheriting properties", "Overloading operators", "Creating instances"], "correctAnswer": 0 },
            { "question": "Which of these is an example of inheritance?", "options": ["A class inheriting from another class", "Two variables with same name", "Function overloading", "Conditional statement"], "correctAnswer": 0 },
            { "question": "What does polymorphism allow?", "options": ["Methods to perform differently based on the object", "Statically typed variables", "Memory management", "Data encapsulation"], "correctAnswer": 0 },
            { "question": "How do you access class variables?", "options": ["Using classname.variable", "Using self.variable", "Using global.variable", "Using local.variable"], "correctAnswer": 0 },
            { "question": "What is the output of isinstance(obj, Class)?", "options": ["Checks if obj is an instance of Class", "Returns the class name", "Checks if Class is a variable", "Throws exception"], "correctAnswer": 0 },
            { "question": "What does the super() function do?", "options": ["Call methods from a parent class", "Create new object", "Override methods", "Delete objects"], "correctAnswer": 0 },
            { "question": "Which method is called to destroy an object?", "options": ["__del__", "__destroy__", "__exit__", "__final__"], "correctAnswer": 0 },
            { "question": "What is method overriding?", "options": ["Redefining a method in subclass", "Defining new method", "Calling a parent class method", "Creating static methods"], "correctAnswer": 0 },
            { "question": "What does the @property decorator do?", "options": ["Defines a getter method", "Defines a setter method", "Defines a class method", "Defines a static method"], "correctAnswer": 0 },
            { "question": "Which operator is used to check object equality by reference?", "options": ["is", "==", "!=", "equals"], "correctAnswer": 0 },
            { "question": "Can Python support multiple inheritance?", "options": ["Yes", "No", "Only with interfaces", "Only with mixins"], "correctAnswer": 0 },
            { "question": "What principle does DRY refer to in OOP?", "options": ["Don't Repeat Yourself", "Data Readability Yield", "Dynamic Runtime Yield", "Defined Resource Yield"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Data Structures in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which of these is a mutable data structure?", "options": ["list", "tuple", "frozenset", "string"], "correctAnswer": 0 },
            { "question": "Which module provides the deque class?", "options": ["collections", "array", "heapq", "queue"], "correctAnswer": 0 },
            { "question": "What is the main advantage of a deque over a list?", "options": ["Fast append and pop from both ends", "Immutable", "Sorted", "Fixed size"], "correctAnswer": 0 },
            { "question": "Which data structure stores unique elements in no particular order?", "options": ["set", "list", "dict", "tuple"], "correctAnswer": 0 },
            { "question": "Which data structure stores key-value pairs?", "options": ["dict", "list", "set", "tuple"], "correctAnswer": 0 },
            { "question": "Which data structure keeps the order of insertion?", "options": ["dict (Python 3.7+)", "set", "list", "tuple"], "correctAnswer": 0 },
            { "question": "Which method adds an element to a set?", "options": ["add()", "append()", "insert()", "push()"], "correctAnswer": 0 },
            { "question": "How do you remove the last item from a list?", "options": ["pop()", "remove()", "del", "discard()"], "correctAnswer": 0 },
            { "question": "Which data structure allows fast insertion and deletion in the middle?", "options": ["linked list", "array", "list", "set"], "correctAnswer": 0 },
            { "question": "What data structure is best for implementing a priority queue?", "options": ["heapq", "set", "list", "dict"], "correctAnswer": 0 },
            { "question": "Which data structure is immutable?", "options": ["tuple", "list", "set", "dict"], "correctAnswer": 0 },
            { "question": "How do you convert a list to a tuple?", "options": ["tuple()", "list()", "set()", "dict()"], "correctAnswer": 0 },
            { "question": "Which of the following is NOT a linear data structure?", "options": ["set", "list", "queue", "stack"], "correctAnswer": 0 },
            { "question": "Which data structure is FIFO?", "options": ["queue", "stack", "list", "set"], "correctAnswer": 0 },
            { "question": "Which is used to store ordered, immutable collection of items?", "options": ["tuple", "list", "set", "dict"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Modules in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How do you import a module in Python?", "options": ["import module_name", "include module", "using module", "#include"], "correctAnswer": 0 },
            { "question": "What file extension do Python modules have?", "options": [".py", ".mod", ".pym", ".pm"], "correctAnswer": 0 },
            { "question": "How do you access a function from a module?", "options": ["module_name.function_name()", "function_name()", "import function", "module.function()"], "correctAnswer": 0 },
            { "question": "Which built-in function shows all attributes of a module?", "options": ["dir(module)", "list(module)", "attrs(module)", "info(module)"], "correctAnswer": 0 },
            { "question": "How do you import a module with an alias?", "options": ["import module_name as alias", "import alias = module", "importalias module", "using alias module"], "correctAnswer": 0 },
            { "question": "Which statement runs code only if the module is executed directly?", "options": ["if __name__ == '__main__':", "if main:", "if start", "if module == '__direct__'"], "correctAnswer": 0 },
            { "question": "How can you import all functions from a module?", "options": ["from module_name import *", "import all module_name", "import module_name all", "using *"], "correctAnswer": 0 },
            { "question": "Is it possible to reload a module during program execution?", "options": ["Yes, using importlib.reload()", "No", "Only in Python 2", "Only with sys module"], "correctAnswer": 0 },
            { "question": "What is a package in Python?", "options": ["A directory of modules", "A single Python file", "A library", "A built-in function"], "correctAnswer": 0 },
            { "question": "What file marks a directory as a package?", "options": ["__init__.py", "__package__.py", "__main__.py", "__mod__.py"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Exceptions in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which Python statement is used to catch exceptions?", "options": ["try-except", "catch", "throw", "handle"], "correctAnswer": 0 },
            { "question": "Which keyword is used to throw an exception?", "options": ["raise", "throw", "except", "try"], "correctAnswer": 0 },
            { "question": "What does finally block do?", "options": ["Executes code irrespective of exceptions", "Executes code only on exception", "Handles exception", "Throws new exception"], "correctAnswer": 0 },
            { "question": "How do you catch multiple exceptions in a single except block?", "options": ["except (Exception1, Exception2):", "catch multi", "except Exception1, Exception2:", "except all"], "correctAnswer": 0 },
            { "question": "Which exception is raised for division by zero?", "options": ["ZeroDivisionError", "ValueError", "ArithmeticError", "OverflowError"], "correctAnswer": 0 },
            { "question": "How to define a custom exception class?", "options": ["Inherit from Exception", "Inherit from BaseError", "Define a function", "Use raise"], "correctAnswer": 0 },
            { "question": "What happens if an exception is not caught?", "options": ["Program terminates with traceback", "Program continues", "Program ignores", "Exception converts to warning"], "correctAnswer": 0 },
            { "question": "Which block can be used without except to execute code?", "options": ["finally", "else", "try", "raise"], "correctAnswer": 0 },
            { "question": "What does the else block do in try-except?", "options": ["Executes if no exceptions occur", "Executes only if exception", "Executes always", "Executes never"], "correctAnswer": 0 },
            { "question": "What type of exceptions are caught by except Exception:", "options": ["All standard exceptions", "SystemExit exceptions", "Syntax errors", "Attribute errors"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Virtual Environment in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a Python virtual environment?", "options": ["Isolated Python environment", "A Python package", "A built-in Python module", "An editor"], "correctAnswer": 0 },
            { "question": "Which module is commonly used to create virtual environments?", "options": ["venv", "virtualenv", "pipenv", "pyenv"], "correctAnswer": 0 },
            { "question": "How do you create a new virtual environment named 'env' using venv?", "options": ["python -m venv env", "python create env", "venv create env", "pip install venv"], "correctAnswer": 0 },
            { "question": "How do you activate a virtual environment on Windows?", "options": ["env\\Scripts\\activate", "source env/bin/activate", "activate env", "venv activate"], "correctAnswer": 0 },
            { "question": "How do you deactivate a virtual environment?", "options": ["deactivate", "exit", "stop", "venv deactivate"], "correctAnswer": 0 },
            { "question": "Why use virtual environments?", "options": ["Avoid package conflicts", "Run code faster", "Access system libraries", "Write less code"], "correctAnswer": 0 },
            { "question": "Which file stores dependencies list for a Python project?", "options": ["requirements.txt", "setup.py", "Pipfile", "environment.yml"], "correctAnswer": 0 },
            { "question": "What is the difference between venv and virtualenv?", "options": ["venv is built-in, virtualenv is third-party", "No difference", "venv is older", "virtualenv is faster"], "correctAnswer": 0 },
            { "question": "Can you use different Python versions in different virtual envs?", "options": ["Yes", "No", "Only on Linux", "Only on Windows"], "correctAnswer": 0 },
            { "question": "What does pip do inside virtual environments?", "options": ["Installs packages locally to env", "Changes system packages", "Installs globally", "Does nothing"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Pip - Python Package Installer",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is pip in Python?", "options": ["Package installer", "Python interpreter", "Virtual environment", "Code editor"], "correctAnswer": 0 },
            { "question": "Which command installs a package using pip?", "options": ["pip install package_name", "pip get package_name", "pip create package_name", "pip add package_name"], "correctAnswer": 0 },
            { "question": "How do you upgrade a package with pip?", "options": ["pip install --upgrade package_name", "pip update package_name", "pip upgrade package_name", "pip install package_name"], "correctAnswer": 0 },
            { "question": "How to uninstall a package with pip?", "options": ["pip uninstall package_name", "pip remove package_name", "pip delete package_name", "pip erase package_name"], "correctAnswer": 0 },
            { "question": "Which command lists installed packages?", "options": ["pip list", "pip show", "pip packages", "pip installed"], "correctAnswer": 0 },
            { "question": "What file records exact package versions?", "options": ["requirements.txt", "setup.cfg", "pipfile.lock", "manifest.in"], "correctAnswer": 0 },
            { "question": "How do you install packages from requirements.txt?", "options": ["pip install -r requirements.txt", "pip install -f requirements.txt", "pip load requirements.txt", "pip add -r requirements.txt"], "correctAnswer": 0 },
            { "question": "Which pip option shows detailed output?", "options": ["-v", "-q", "-e", "-s"], "correctAnswer": 0 },
            { "question": "Can pip install packages globally?", "options": ["Yes", "No", "Only in virtual env", "Only with admin rights"], "correctAnswer": 0 },
            { "question": "Which pip command shows version info?", "options": ["pip --version", "pip version", "pip -v", "pip info"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced File Handling in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which mode opens a file for binary reading?", "options": ["'rb'", "'r'", "'wb'", "'w'"], "correctAnswer": 0 },
            { "question": "What does the seek() method do?", "options": ["Moves file pointer to a specified position", "Reads a line", "Closes file", "Writes data"], "correctAnswer": 0 },
            { "question": "How do you write bytes to a file?", "options": ["File must be opened in binary write mode", "Open in text mode", "Use write_text()", "Use write_bytes()"], "correctAnswer": 0 },
            { "question": "What is the difference between read() and readline()?", "options": ["read() reads whole file, readline() reads a line", "read() reads a line, readline() reads whole file", "No difference", "read() reads bytes, readline() reads chars"], "correctAnswer": 0 },
            { "question": "Which method reads all lines into a list?", "options": ["readlines()", "read()", "readline()", "getlines()"], "correctAnswer": 0 },
            { "question": "How can you handle large files efficiently?", "options": ["Reading line by line using iterators", "Reading whole file into memory", "Using read()", "Using write()"], "correctAnswer": 0 },
            { "question": "Which module provides high level file operations?", "options": ["shutil", "os", "sys", "io"], "correctAnswer": 0 },
            { "question": "How do you copy a file in Python?", "options": ["Using shutil.copy()", "Using open()", "Using os.copy()", "Using file.copy()"], "correctAnswer": 0 },
            { "question": "Which module helps walk through directory trees?", "options": ["os", "shutil", "sys", "pathlib"], "correctAnswer": 0 },
            { "question": "How to write to a file safely ensuring it is closed?", "options": ["Using with statement", "Open and close manually", "Using try-except", "Using finally"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Decorators in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a decorator in Python?", "options": ["A function that modifies another function", "A class", "A module", "A variable"], "correctAnswer": 0 },
            { "question": "Which symbol is used to apply a decorator?", "options": ["@", "#", "$", "%"], "correctAnswer": 0 },
            { "question": "What is passed to a decorator function?", "options": ["A function to be decorated", "A class", "A string", "An integer"], "correctAnswer": 0 },
            { "question": "Which built-in decorator converts a method to a class method?", "options": ["@classmethod", "@staticmethod", "@property", "@abstractmethod"], "correctAnswer": 0 },
            { "question": "Which decorator defines a method that can be called without an instance?", "options": ["@staticmethod", "@classmethod", "@property", "@abstractmethod"], "correctAnswer": 0 },
            { "question": "What is a common use of decorators?", "options": ["Logging, access control, memoization", "Compiling code", "Memory management", "Variable declaration"], "correctAnswer": 0 },
            { "question": "Which syntax preserves a decorated function’s metadata?", "options": ["functools.wraps", "inspect.decorate", "functools.copy", "inspect.wrap"], "correctAnswer": 0 },
            { "question": "Can a decorator accept parameters?", "options": ["Yes, by using a decorator factory", "No", "Only built-in decorators", "Only with classes"], "correctAnswer": 0 },
            { "question": "What design pattern do decorators exemplify?", "options": ["Decorator Pattern", "Observer Pattern", "Factory Pattern", "Singleton Pattern"], "correctAnswer": 0 },
            { "question": "Are decorators applied at runtime or compile-time?", "options": ["Runtime", "Compile-time", "Both", "Never"], "correctAnswer": 0 },
            { "question": "Which function-based decorator modifies the behavior of another function?", "options": ["Wrapper function", "Closure", "Lambda function", "Generator"], "correctAnswer": 0 },
            { "question": "Can multiple decorators be applied to a single function?", "options": ["Yes, stacked", "No", "Only in Python 3", "Only with classes"], "correctAnswer": 0 },
            { "question": "What happens if a decorator function does not return a function?", "options": ["TypeError", "Works fine", "Warning", "Ignored"], "correctAnswer": 0 },
            { "question": "What is the @property decorator used for?", "options": ["Create getter method", "Define a static method", "Make function private", "Create destructor"], "correctAnswer": 0 },
            { "question": "Which Python module provides tools to create decorators?", "options": ["functools", "itertools", "sys", "os"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    advanced: {
      title: "Advanced Level CSS Quiz",
      topics: [
        {
          "title": "Functional Programming in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does it mean that functions are first-class objects in Python?", "options": ["Functions can be passed as arguments, returned from other functions, and assigned to variables", "Functions cannot be assigned to variables", "Functions are only called", "Functions cannot be nested"], "correctAnswer": 0 },
            { "question": "What is a pure function?", "options": ["A function with no side effects and predictable output", "A function with side effects", "A function that returns None", "A function with random output"], "correctAnswer": 0 },
            { "question": "Which keyword is used to define anonymous functions in Python?", "options": ["lambda", "def", "func", "anonymous"], "correctAnswer": 0 },
            { "question": "What Python built-in function applies a function to all items in an iterable?", "options": ["map()", "filter()", "reduce()", "apply()"], "correctAnswer": 0 },
            { "question": "Which function filters items from an iterable based on a function?", "options": ["filter()", "map()", "reduce()", "select()"], "correctAnswer": 0 },
            { "question": "What does functools.reduce() do?", "options": ["Applies a rolling computation to sequential pairs", "Maps elements", "Filters elements", "Creates lists"], "correctAnswer": 0 },
            { "question": "What are higher-order functions?", "options": ["Functions that take other functions as input or return them", "Functions with more than two parameters", "Functions that return integers", "Functions inside classes"], "correctAnswer": 0 },
            { "question": "What is immutability in functional programming?", "options": ["Data objects cannot be changed after creation", "Data objects can be modified", "Functions with mutable state", "Mutable variables"], "correctAnswer": 0 },
            { "question": "Which Python idiom provides lazy evaluation of sequences?", "options": ["Generators", "Lists", "Tuples", "Dictionaries"], "correctAnswer": 0 },
            { "question": "Which function creates an iterable that yields values satisfying a condition?", "options": ["filter()", "map()", "reduce()", "enumerate()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Iterators and Generators in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is an iterator in Python?", "options": ["An object that implements __iter__() and __next__()", "A list", "A generator function", "Any iterable"], "correctAnswer": 0 },
            { "question": "Which method returns the next item in an iterator?", "options": ["__next__()", "next()", "iterate()", "yield()"], "correctAnswer": 0 },
            { "question": "What does StopIteration exception signal?", "options": ["Iterator is exhausted", "Invalid operation", "Error in yield", "End of function"], "correctAnswer": 0 },
            { "question": "How do you create a generator function?", "options": ["Using yield keyword", "Using return keyword", "Using lambda", "Create a list"], "correctAnswer": 0 },
            { "question": "What is lazy evaluation in generators?", "options": ["Values generated on the fly when needed", "Values stored in memory", "All values precomputed", "None of these"], "correctAnswer": 0 },
            { "question": "What is the use of the iter() function?", "options": ["To get an iterator from an iterable", "To convert to list", "To flatten an iterable", "To count elements"], "correctAnswer": 0 },
            { "question": "What built-in function gets the next value from an iterator?", "options": ["next()", "iterate()", "yield()", "get()"], "correctAnswer": 0 },
            { "question": "Generators help to:", "options": ["Reduce memory usage by yielding items one at a time", "Store all values in memory", "Sort values", "Buffer outputs"], "correctAnswer": 0 },
            { "question": "Can generators be iterated multiple times?", "options": ["No, they can be iterated only once", "Yes", "Only in Python 3.8+", "Only if converted to list"], "correctAnswer": 0 },
            { "question": "What happens when the generator function finishes execution?", "options": ["Raises StopIteration when next() is called", "Restarts automatically", "Returns None", "Errors out"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Context Managers in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the purpose of a context manager in Python?", "options": ["Setup and cleanup actions around a block of code", "Create classes", "Call functions", "Manage memory"], "correctAnswer": 0 },
            { "question": "Which statement is used with a context manager?", "options": ["with", "try", "context", "manage"], "correctAnswer": 0 },
            { "question": "Which methods must be implemented for a class to be a context manager?", "options": ["__enter__() and __exit__()", "__init__() and __del__()", "__start__() and __stop__()", "__open__() and __close__()"], "correctAnswer": 0 },
            { "question": "What is the benefit of using with statement?", "options": ["Automatic resource management", "Manual cleanup", "Fast execution", "Infinite loops"], "correctAnswer": 0 },
            { "question": "Which built-in function creates a context manager from two functions?", "options": ["contextlib.contextmanager", "open", "compile", "eval"], "correctAnswer": 0 },
            { "question": "What is typically managed by context managers?", "options": ["Files, locks, and network connections", "Numbers and strings", "Variables", "Functions"], "correctAnswer": 0 },
            { "question": "What does __exit__() receive as arguments?", "options": ["Exception type, value, traceback", "No arguments", "Only exception type", "Only value"], "correctAnswer": 0 },
            { "question": "Can you nest multiple with statements?", "options": ["Yes", "No", "Only in Python 3", "Only using contextlib"], "correctAnswer": 0 },
            { "question": "What does the __enter__() method return?", "options": ["Resource to be used in the with block", "None", "Boolean", "Exception info"], "correctAnswer": 0 },
            { "question": "Which module helps with advanced context manager features?", "options": ["contextlib", "threading", "asyncio", "os"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Metaprogramming in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is metaprogramming?", "options": ["Writing code that manipulates code", "Normal programming", "Writing classes", "Compiling code"], "correctAnswer": 0 },
            { "question": "Which Python feature supports metaprogramming?", "options": ["Decorators", "Loops", "Functions", "Classes"], "correctAnswer": 0 },
            { "question": "What are decorators typically used for?", "options": ["Modifying or enhancing functions or classes", "Managing memory", "Compiling", "Debugging"], "correctAnswer": 0 },
            { "question": "Which module provides tools to manipulate classes and functions?", "options": ["inspect", "os", "sys", "math"], "correctAnswer": 0 },
            { "question": "What is the output of type(obj)?", "options": ["The class of obj", "Memory address of obj", "String representation", "Length of obj"], "correctAnswer": 0 },
            { "question": "Which function dynamically creates new classes?", "options": ["type()", "len()", "dir()", "id()"], "correctAnswer": 0 },
            { "question": "What is monkey patching?", "options": ["Dynamically modifying classes or modules at runtime", "Deleting variables", "Writing decorators", "Handling exceptions"], "correctAnswer": 0 },
            { "question": "Are metaclasses part of metaprogramming?", "options": ["Yes", "No", "Only in Python 2", "Only with decorators"], "correctAnswer": 0 },
            { "question": "What method initializes a new class object?", "options": ["__new__", "__init__", "__call__", "__class__"], "correctAnswer": 0 },
            { "question": "Which hook allows customizing class creation?", "options": ["Metaclass __new__ method", "Instance __init__ method", "Function __call__", "Decorator __init__"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Concurrency and Parallelism in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which Python module provides tools for threading?", "options": ["threading", "multiprocessing", "asyncio", "concurrent.futures"], "correctAnswer": 0 },
            { "question": "What is the Global Interpreter Lock (GIL)?", "options": ["A mutex that protects access to Python objects, preventing true parallel threads", "A hardware lock", "A code style", "A design pattern"], "correctAnswer": 0 },
            { "question": "Which module helps with multi-process parallelism?", "options": ["multiprocessing", "threading", "asyncio", "subprocess"], "correctAnswer": 0 },
            { "question": "What does asyncio module support?", "options": ["Asynchronous programming", "Multiprocessing", "Threading", "Synchronous code"], "correctAnswer": 0 },
            { "question": "Which class allows managing thread pools?", "options": ["concurrent.futures.ThreadPoolExecutor", "threading.ThreadPool", "multiprocessing.pool", "asyncio.Pool"], "correctAnswer": 0 },
            { "question": "What function starts a new thread in the threading module?", "options": ["start()", "run()", "begin()", "execute()"], "correctAnswer": 0 },
            { "question": "What synchronization primitive can be used to avoid race conditions?", "options": ["Lock", "Queue", "Thread", "Future"], "correctAnswer": 0 },
            { "question": "What is the difference between concurrency and parallelism?", "options": ["Concurrency is managing multiple tasks, parallelism is simultaneous execution", "No difference", "Concurrency is sequential", "Parallelism is synchronous"], "correctAnswer": 0 },
            { "question": "Which keyword is used to define an asynchronous function?", "options": ["async", "await", "yield", "def"], "correctAnswer": 0 },
            { "question": "How do you wait for an async function to complete?", "options": ["await", "sleep", "join", "get"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Unit Testing in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which module is commonly used for unit testing in Python?", "options": ["unittest", "pytest", "nose", "doctest"], "correctAnswer": 0 },
            { "question": "What is a test case?", "options": ["A single unit of testing, usually a function", "A bug", "An exception", "A compiled program"], "correctAnswer": 0 },
            { "question": "Which method runs before each test method?", "options": ["setUp()", "tearDown()", "run()", "init()"], "correctAnswer": 0 },
            { "question": "How do you check if two values are equal in unittest?", "options": ["assertEqual(a, b)", "assert(a == b)", "assertEquals(a, b)", "assertEqualValues(a, b)"], "correctAnswer": 0 },
            { "question": "How do you skip a test method?", "options": ["@unittest.skip()", "@skip", "@ignore", "@skipTest"], "correctAnswer": 0 },
            { "question": "Which command runs all tests in a directory?", "options": ["python -m unittest discover", "python test.py", "pytest", "nose"], "correctAnswer": 0 },
            { "question": "What is mocking in unit testing?", "options": ["Creating fake objects or functions for testing", "Debugging", "Performance testing", "Logging"], "correctAnswer": 0 },
            { "question": "Which assert method ensures a value is True?", "options": ["assertTrue()", "assertIs()", "assertEqual()", "assertNone()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Introduction to Python Web Development",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which Python web framework is known for simplicity and flexibility?", "options": ["Flask", "Django", "Pyramid", "FastAPI"], "correctAnswer": 0 },
            { "question": "What is the main feature of Django?", "options": ["Batteries included", "Minimalistic", "No templating", "No ORM"], "correctAnswer": 0 },
            { "question": "Which protocol is primarily used in web development?", "options": ["HTTP", "FTP", "SMTP", "SSH"], "correctAnswer": 0 },
            { "question": "What is WSGI in Python web development?", "options": ["Web Server Gateway Interface", "Web Security Group Interface", "Web Services Generated Interface", "Windows Service Gateway Interface"], "correctAnswer": 0 },
            { "question": "Which Python module helps in parsing URL parameters?", "options": ["urllib.parse", "os", "sys", "requests"], "correctAnswer": 0 },
            { "question": "Which method defines a route in Flask?", "options": ["@app.route()", "@app.get()", "@route()", "@get()"], "correctAnswer": 0 },
            { "question": "What is a template engine in web frameworks?", "options": ["Generates HTML dynamically from templates", "Handles routing", "Manages database", "Optimizes queries"], "correctAnswer": 0 },
            { "question": "Which package is used for making HTTP requests?", "options": ["requests", "urllib", "http.client", "flask"], "correctAnswer": 0 },
            { "question": "What term describes a request method to retrieve data?", "options": ["GET", "POST", "PUT", "DELETE"], "correctAnswer": 0 },
            { "question": "Which templating engine is used by Flask?", "options": ["Jinja2", "Mako", "Django Templates", "Chameleon"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Introduction to Data Science with Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which Python library is commonly used for data manipulation?", "options": ["Pandas", "NumPy", "Matplotlib", "Seaborn"], "correctAnswer": 0 },
            { "question": "What is NumPy primarily used for?", "options": ["Numerical computing and arrays", "Data visualization", "Web scraping", "Machine learning"], "correctAnswer": 0 },
            { "question": "Which library is commonly used for plotting graphs?", "options": ["Matplotlib", "Pandas", "NumPy", "SciPy"], "correctAnswer": 0 },
            { "question": "What is a DataFrame?", "options": ["Two-dimensional labeled data structure in pandas", "An array", "A list", "A dictionary"], "correctAnswer": 0 },
            { "question": "Which library is useful for scientific computing?", "options": ["SciPy", "TensorFlow", "Django", "Flask"], "correctAnswer": 0 },
            { "question": "What is the use of scikit-learn?", "options": ["Machine learning library", "Web development", "Databases", "Testing"], "correctAnswer": 0 },
            { "question": "Which file format is commonly used to store tabular data?", "options": ["CSV", "JSON", "XML", "HTML"], "correctAnswer": 0 },
            { "question": "Which function loads CSV files in pandas?", "options": ["read_csv()", "load_csv()", "import_csv()", "get_csv()"], "correctAnswer": 0 },
            { "question": "What is feature scaling?", "options": ["Normalizing data", "Removing columns", "Collecting data", "Visualizing data"], "correctAnswer": 0 },
            { "question": "What library helps with interactive visualization?", "options": ["Plotly", "NumPy", "Pandas", "Matplotlib"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Scripting & Automation with Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a common use-case for Python scripting?", "options": ["Automate repetitive tasks", "Build mobile apps", "Develop video games", "Design webpages"], "correctAnswer": 0 },
            { "question": "Which module helps work with file paths?", "options": ["os.path", "sys", "math", "random"], "correctAnswer": 0 },
            { "question": "What does the subprocess module allow?", "options": ["Running system commands", "Creating GUIs", "Data analysis", "Web scraping"], "correctAnswer": 0 },
            { "question": "Which module is used for scheduling jobs?", "options": ["schedule", "datetime", "time", "threading"], "correctAnswer": 0 },
            { "question": "What does the 'cron' utility do?", "options": ["Schedules tasks on Unix", "Manages variables", "Runs Python", "Compiles code"], "correctAnswer": 0 },
            { "question": "How do you run Python scripts from the command line?", "options": ["python script.py", "run script.py", "execute script.py", "launch script.py"], "correctAnswer": 0 },
            { "question": "Which module is helpful in web scraping?", "options": ["requests", "math", "os", "threading"], "correctAnswer": 0 },
            { "question": "What is the use of the argparse module?", "options": ["Parsing command-line arguments", "Performing arithmetic", "XML parsing", "Regular expressions"], "correctAnswer": 0 },
            { "question": "Which function pauses execution for a specified time?", "options": ["time.sleep()", "wait()", "pause()", "delay()"], "correctAnswer": 0 },
            { "question": "How do you automate Excel file operations?", "options": ["Using openpyxl or pandas libraries", "Using os", "Using sys", "Using csv"], "correctAnswer": 0 },
            { "question": "Which module can be used for sending emails?", "options": ["smtplib", "imaplib", "email", "socket"], "correctAnswer": 0 },
            { "question": "How do you execute shell commands in Python?", "options": ["os.system()", "run()", "exec()", "shell()"], "correctAnswer": 0 },
            { "question": "What can Python scripts automate?", "options": ["File management, data processing, testing", "Mobile apps", "Database engines", "OS kernels"], "correctAnswer": 0 },
            { "question": "Which module supports multithreading?", "options": ["threading", "asyncio", "multiprocessing", "concurrent"], "correctAnswer": 0 },
            { "question": "What is the main limitation of Python threading?", "options": ["Global Interpreter Lock (GIL)", "Memory consumption", "Syntax", "Standard library"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Packaging & Distribution in Python",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which file is used to specify Python project metadata?", "options": ["setup.py", "requirements.txt", "README.md", "config.ini"], "correctAnswer": 0 },
            { "question": "What tool is used to create source distributions?", "options": ["setuptools", "pip", "wheel", "virtualenv"], "correctAnswer": 0 },
            { "question": "What command builds a wheel distribution?", "options": ["python setup.py bdist_wheel", "pip build", "python build", "pip wheel"], "correctAnswer": 0 },
            { "question": "What is PyPI?", "options": ["Python Package Index", "Python Project Installer", "Python Programming Interface", "Python Package Installer"], "correctAnswer": 0 },
            { "question": "Which file lists dependencies for installation?", "options": ["requirements.txt", "dependencies.txt", "setup.py", "install.txt"], "correctAnswer": 0 },
            { "question": "How do you upload packages to PyPI?", "options": ["twine upload dist/*", "pip upload", "python upload", "setuptools upload"], "correctAnswer": 0 },
            { "question": "Which tool manages virtual environments and dependencies?", "options": ["pipenv", "pip", "setuptools", "virtualenv"], "correctAnswer": 0 },
            { "question": "Which file acts as the entry point for installation in projects?", "options": ["setup.py", "main.py", "install.py", "deploy.py"], "correctAnswer": 0 },
            { "question": "Which packaging format is a zip archive containing metadata?", "options": ["wheel (.whl)", "tar.gz", "zip", "egg"], "correctAnswer": 0 },
            { "question": "What does dependency resolution mean in packaging?", "options": ["Ensuring package dependencies are installed", "Ignoring dependencies", "Deleting packages", "Building packages"], "correctAnswer": 0 }
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
          Complete Python Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master Python from Beginner to Advanced Level through interactive quizzes,
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

export default PytonQuize;
