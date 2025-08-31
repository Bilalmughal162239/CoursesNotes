import React, { useState, useEffect, useCallback, useMemo } from "react";

const CQuize = () => {
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
      title: "Beginner Level C Programming Quiz",
      topics: [
        {
          title: "Introduction & Setup for C Programming",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Who developed the C programming language?",
              options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
              correctAnswer: 0,
            },
            {
              question: "In which year was C programming language developed?",
              options: ["1970", "1972", "1975", "1980"],
              correctAnswer: 1,
            },
            {
              question: "Which company developed C programming language?",
              options: ["Microsoft", "IBM", "Bell Labs", "Google"],
              correctAnswer: 2,
            },
            {
              question: "What is the file extension for C source files?",
              options: [".cpp", ".c", ".h", ".exe"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is a C compiler?",
              options: ["GCC", "JVM", "Python", "Node.js"],
              correctAnswer: 0,
            },
            {
              question: "What does IDE stand for?",
              options: ["Integrated Development Environment", "Internet Development Environment", "Internal Development Environment", "Interactive Development Environment"],
              correctAnswer: 0,
            },
            {
              question: "Which header file is required for printf() function?",
              options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
              correctAnswer: 1,
            },
            {
              question: "What is the purpose of #include directive?",
              options: ["To define variables", "To include header files", "To declare functions", "To create loops"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is NOT a C compiler?",
              options: ["GCC", "Clang", "Turbo C", "Eclipse"],
              correctAnswer: 3,
            },
            {
              question: "What is the first step in C program development?",
              options: ["Compilation", "Writing source code", "Linking", "Execution"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Basic Syntax & Structure of a C Program",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which function is the entry point of a C program?",
              options: ["start()", "main()", "begin()", "init()"],
              correctAnswer: 1,
            },
            {
              question: "What is the correct syntax for main function?",
              options: ["int main()", "void main()", "main()", "Both A and B"],
              correctAnswer: 3,
            },
            {
              question: "Which symbol is used to terminate a statement in C?",
              options: [".", ",", ";", ":"],
              correctAnswer: 2,
            },
            {
              question: "What are curly braces {} used for in C?",
              options: ["Comments", "Block of code", "Arrays", "Strings"],
              correctAnswer: 1,
            },
            {
              question: "How do you write a single-line comment in C?",
              options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
              correctAnswer: 1,
            },
            {
              question: "How do you write a multi-line comment in C?",
              options: ["// comment //", "/* comment */", "# comment #", "<!-- comment -->"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is case-sensitive in C?",
              options: ["Keywords", "Variable names", "Function names", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is the return type of main() function by default?",
              options: ["void", "int", "char", "float"],
              correctAnswer: 1,
            },
            {
              question: "Which preprocessor directive is used to include header files?",
              options: ["#define", "#include", "#ifdef", "#endif"],
              correctAnswer: 1,
            },
            {
              question: "What does 'return 0' indicate in main function?",
              options: ["Error", "Success", "Warning", "Nothing"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Data Types & Variables in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which of the following is NOT a basic data type in C?",
              options: ["int", "float", "char", "string"],
              correctAnswer: 3,
            },
            {
              question: "What is the size of int data type in C (typically)?",
              options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
              correctAnswer: 2,
            },
            {
              question: "Which data type is used to store a single character?",
              options: ["int", "float", "char", "double"],
              correctAnswer: 2,
            },
            {
              question: "What is the range of char data type?",
              options: ["-128 to 127", "0 to 255", "Both A and B", "None"],
              correctAnswer: 2,
            },
            {
              question: "Which keyword is used to declare a constant variable?",
              options: ["const", "constant", "final", "static"],
              correctAnswer: 0,
            },
            {
              question: "What is the correct way to declare a variable in C?",
              options: ["int x;", "x int;", "declare int x;", "variable int x;"],
              correctAnswer: 0,
            },
            {
              question: "Which of the following is a valid variable name?",
              options: ["2var", "var-2", "_var2", "var 2"],
              correctAnswer: 2,
            },
            {
              question: "What is the size of double data type?",
              options: ["4 bytes", "8 bytes", "16 bytes", "2 bytes"],
              correctAnswer: 1,
            },
            {
              question: "Which data type has the largest range?",
              options: ["int", "float", "double", "long double"],
              correctAnswer: 3,
            },
            {
              question: "What happens if you don't initialize a local variable?",
              options: ["It gets 0", "It gets garbage value", "Compilation error", "Runtime error"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Input & Output (I/O) in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which function is used to print output in C?",
              options: ["print()", "printf()", "cout", "output()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to read input in C?",
              options: ["read()", "scanf()", "cin", "input()"],
              correctAnswer: 1,
            },
            {
              question: "What is the format specifier for integer in printf()?",
              options: ["%d", "%i", "%int", "Both A and B"],
              correctAnswer: 3,
            },
            {
              question: "What is the format specifier for float in printf()?",
              options: ["%f", "%float", "%fl", "%F"],
              correctAnswer: 0,
            },
            {
              question: "What is the format specifier for character in printf()?",
              options: ["%c", "%char", "%ch", "%character"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used to read a single character?",
              options: ["getchar()", "getch()", "getc()", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Which function is used to print a single character?",
              options: ["putchar()", "putc()", "printf()", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What does \\n represent in printf()?",
              options: ["New line", "Tab", "Space", "Backslash"],
              correctAnswer: 0,
            },
            {
              question: "Which header file contains printf() and scanf()?",
              options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<conio.h>"],
              correctAnswer: 1,
            },
            {
              question: "What is the return type of printf() function?",
              options: ["void", "int", "char", "float"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Operators in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which of the following is an arithmetic operator?",
              options: ["+", "-", "*", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is the result of 10 % 3?",
              options: ["3", "1", "0", "10"],
              correctAnswer: 1,
            },
            {
              question: "Which operator is used for assignment?",
              options: ["=", "==", "!=", "=>"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used for equality comparison?",
              options: ["=", "==", "!=", "==="],
              correctAnswer: 1,
            },
            {
              question: "What does ++ operator do?",
              options: ["Increment by 1", "Decrement by 1", "Add 2", "Multiply by 2"],
              correctAnswer: 0,
            },
            {
              question: "What is the difference between ++i and i++?",
              options: ["No difference", "++i is pre-increment, i++ is post-increment", "++i is faster", "i++ is faster"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is a logical operator?",
              options: ["&&", "||", "!", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is the result of (5 > 3) && (2 < 4)?",
              options: ["0", "1", "True", "False"],
              correctAnswer: 1,
            },
            {
              question: "Which operator has the highest precedence?",
              options: ["+", "*", "()", "="],
              correctAnswer: 2,
            },
            {
              question: "What is the result of 5 + 3 * 2?",
              options: ["16", "11", "13", "10"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is a bitwise operator?",
              options: ["&", "|", "^", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What does the sizeof operator return?",
              options: ["Size in bits", "Size in bytes", "Size in KB", "Size in MB"],
              correctAnswer: 1,
            },
            {
              question: "Which operator is used for address-of?",
              options: ["&", "*", "@", "#"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used for indirection (dereference)?",
              options: ["&", "*", "->", "."],
              correctAnswer: 1,
            },
            {
              question: "What is the ternary operator in C?",
              options: ["?:", "?", ":", "? :"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Control Flow in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which statement is used for decision making in C?",
              options: ["if", "switch", "Both A and B", "None"],
              correctAnswer: 2,
            },
            {
              question: "What is the syntax of if statement?",
              options: ["if(condition) {}", "if condition {}", "if(condition)", "if {condition}"],
              correctAnswer: 0,
            },
            {
              question: "Which keyword is used with if for alternative condition?",
              options: ["else", "elif", "elseif", "otherwise"],
              correctAnswer: 0,
            },
            {
              question: "Which loop executes at least once?",
              options: ["for", "while", "do-while", "None"],
              correctAnswer: 2,
            },
            {
              question: "What is the syntax of for loop?",
              options: ["for(init; condition; increment)", "for(condition; init; increment)", "for(increment; condition; init)", "for(init; increment; condition)"],
              correctAnswer: 0,
            },
            {
              question: "Which statement is used to exit from a loop?",
              options: ["break", "continue", "exit", "return"],
              correctAnswer: 0,
            },
            {
              question: "Which statement is used to skip current iteration?",
              options: ["break", "continue", "skip", "next"],
              correctAnswer: 1,
            },
            {
              question: "What does switch statement use for comparison?",
              options: ["==", "Exact match", "Pattern matching", "Regular expression"],
              correctAnswer: 1,
            },
            {
              question: "Which keyword is used in switch for unmatched cases?",
              options: ["default", "else", "otherwise", "catch"],
              correctAnswer: 0,
            },
            {
              question: "What happens if break is not used in switch case?",
              options: ["Compilation error", "Runtime error", "Fall through", "Nothing"],
              correctAnswer: 2,
            },
            {
              question: "Which loop is best for unknown number of iterations?",
              options: ["for", "while", "do-while", "Both B and C"],
              correctAnswer: 3,
            },
            {
              question: "What is an infinite loop?",
              options: ["Loop that never starts", "Loop that never ends", "Loop with error", "Loop with break"],
              correctAnswer: 1,
            },
            {
              question: "How do you create an infinite for loop?",
              options: ["for(;;)", "for(1;;)", "for(;1;)", "for(;;1)"],
              correctAnswer: 0,
            },
            {
              question: "What is nested loop?",
              options: ["Loop inside function", "Loop inside loop", "Loop with condition", "Loop with break"],
              correctAnswer: 1,
            },
            {
              question: "Which statement can be used to exit from nested loops?",
              options: ["break", "continue", "goto", "return"],
              correctAnswer: 2,
            },
            {
              question: "What is the condition for while loop to execute?",
              options: ["True", "False", "Non-zero", "Both A and C"],
              correctAnswer: 3,
            },
            {
              question: "In which part of for loop is initialization done?",
              options: ["First part", "Second part", "Third part", "Outside loop"],
              correctAnswer: 0,
            },
            {
              question: "What is the difference between while and do-while?",
              options: ["No difference", "while checks condition first", "do-while executes at least once", "Both B and C"],
              correctAnswer: 3,
            },
            {
              question: "Which operator is commonly used in loop conditions?",
              options: ["=", "==", "<", "All comparison operators"],
              correctAnswer: 3,
            },
            {
              question: "What happens when continue is used in a loop?",
              options: ["Loop terminates", "Current iteration skips", "Next iteration skips", "Loop restarts"],
              correctAnswer: 1,
            },
            {
              question: "Can you use multiple conditions in if statement?",
              options: ["No", "Yes, with && or ||", "Yes, with comma", "Only with switch"],
              correctAnswer: 1,
            },
            {
              question: "What is else if used for?",
              options: ["Multiple conditions", "Nested if", "Loop control", "Switch alternative"],
              correctAnswer: 0,
            },
            {
              question: "Which is faster: if-else or switch?",
              options: ["if-else", "switch", "Both same", "Depends on cases"],
              correctAnswer: 3,
            },
            {
              question: "Can switch work with float values?",
              options: ["Yes", "No", "Only with casting", "Only positive values"],
              correctAnswer: 1,
            },
            {
              question: "What is the purpose of goto statement?",
              options: ["Jump to label", "Exit program", "Skip iteration", "Return value"],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level C Programming Quiz",
      topics: [
        {
          title: "Functions in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a function in C?",
              options: ["A block of code", "A reusable code block", "A named code block", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Which keyword is used to define a function?",
              options: ["function", "def", "No specific keyword", "func"],
              correctAnswer: 2,
            },
            {
              question: "What are the parts of a function?",
              options: ["Return type, name, parameters", "Name, body", "Parameters, body", "Return type, name, parameters, body"],
              correctAnswer: 3,
            },
            {
              question: "What is function declaration?",
              options: ["Function definition", "Function prototype", "Function call", "Function body"],
              correctAnswer: 1,
            },
            {
              question: "What is the difference between parameters and arguments?",
              options: ["No difference", "Parameters in definition, arguments in call", "Parameters are values", "Arguments are variables"],
              correctAnswer: 1,
            },
            {
              question: "What does void return type mean?",
              options: ["Returns nothing", "Returns 0", "Returns null", "Returns empty"],
              correctAnswer: 0,
            },
            {
              question: "What is recursion?",
              options: ["Function calling itself", "Function calling another", "Nested function", "Function with loop"],
              correctAnswer: 0,
            },
            {
              question: "What is the scope of local variables?",
              options: ["Global", "Within function", "Within file", "Within program"],
              correctAnswer: 1,
            },
            {
              question: "What are global variables?",
              options: ["Variables inside function", "Variables outside all functions", "Variables in main", "Static variables"],
              correctAnswer: 1,
            },
            {
              question: "What is function overloading in C?",
              options: ["Supported", "Not supported", "Partially supported", "With macros only"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Arrays in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is an array?",
              options: ["Collection of variables", "Collection of same data type", "Indexed collection", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "How do you declare an array in C?",
              options: ["int arr[]", "int arr[10]", "array int arr", "Both A and B"],
              correctAnswer: 3,
            },
            {
              question: "What is the index of first element in array?",
              options: ["1", "0", "-1", "Depends on declaration"],
              correctAnswer: 1,
            },
            {
              question: "How do you access array elements?",
              options: ["arr.0", "arr[0]", "arr(0)", "arr{0}"],
              correctAnswer: 1,
            },
            {
              question: "What happens if you access array out of bounds?",
              options: ["Compilation error", "Runtime error", "Garbage value", "Program crash"],
              correctAnswer: 2,
            },
            {
              question: "How do you initialize an array?",
              options: ["int arr[5] = {1,2,3,4,5}", "int arr[] = {1,2,3}", "Both A and B", "int arr[5] = 1,2,3,4,5"],
              correctAnswer: 2,
            },
            {
              question: "What is a multidimensional array?",
              options: ["Array of arrays", "2D array", "Matrix", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "How do you declare a 2D array?",
              options: ["int arr[3][4]", "int arr[3,4]", "int arr[3*4]", "int arr(3)(4)"],
              correctAnswer: 0,
            },
            {
              question: "What is the relationship between arrays and pointers?",
              options: ["No relationship", "Array name is pointer to first element", "Arrays are pointers", "Pointers are arrays"],
              correctAnswer: 1,
            },
            {
              question: "Can you change the size of array at runtime?",
              options: ["Yes", "No", "Only increase", "Only decrease"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Pointers in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a pointer?",
              options: ["A variable", "A variable that stores address", "A function", "A data type"],
              correctAnswer: 1,
            },
            {
              question: "How do you declare a pointer?",
              options: ["int *ptr", "int ptr*", "pointer int ptr", "*int ptr"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used to get address of variable?",
              options: ["*", "&", "@", "#"],
              correctAnswer: 1,
            },
            {
              question: "Which operator is used to get value at pointer?",
              options: ["*", "&", "->", "."],
              correctAnswer: 0,
            },
            {
              question: "What is NULL pointer?",
              options: ["Pointer with no value", "Pointer pointing to 0", "Uninitialized pointer", "Invalid pointer"],
              correctAnswer: 1,
            },
            {
              question: "What is pointer arithmetic?",
              options: ["Math with pointers", "Adding/subtracting from pointer", "Multiplying pointers", "Dividing pointers"],
              correctAnswer: 1,
            },
            {
              question: "What is double pointer?",
              options: ["Two pointers", "Pointer to pointer", "Pointer with double value", "64-bit pointer"],
              correctAnswer: 1,
            },
            {
              question: "How do you declare double pointer?",
              options: ["int **ptr", "int *ptr*", "int ptr**", "**int ptr"],
              correctAnswer: 0,
            },
            {
              question: "What is void pointer?",
              options: ["Empty pointer", "Generic pointer", "Null pointer", "Invalid pointer"],
              correctAnswer: 1,
            },
            {
              question: "Can you perform arithmetic on void pointer?",
              options: ["Yes", "No", "Only addition", "Only subtraction"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Strings in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "How are strings represented in C?",
              options: ["String data type", "Array of characters", "Linked list", "Structure"],
              correctAnswer: 1,
            },
            {
              question: "What character marks the end of string?",
              options: ["\\0", "\\n", "EOF", "NULL"],
              correctAnswer: 0,
            },
            {
              question: "How do you declare a string?",
              options: ["char str[10]", "char *str", "Both A and B", "string str"],
              correctAnswer: 2,
            },
            {
              question: "Which function is used to find string length?",
              options: ["length()", "strlen()", "size()", "len()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to copy strings?",
              options: ["copy()", "strcpy()", "strdup()", "clone()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to compare strings?",
              options: ["compare()", "strcmp()", "strcomp()", "equal()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to concatenate strings?",
              options: ["concat()", "strcat()", "append()", "join()"],
              correctAnswer: 1,
            },
            {
              question: "Which header file contains string functions?",
              options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<ctype.h>"],
              correctAnswer: 1,
            },
            {
              question: "What does strcmp() return for equal strings?",
              options: ["1", "0", "-1", "true"],
              correctAnswer: 1,
            },
            {
              question: "How do you read a string with spaces?",
              options: ["scanf()", "gets()", "fgets()", "Both B and C"],
              correctAnswer: 3,
            },
          ],
        },
        {
          title: "Dynamic Memory Management in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is dynamic memory allocation?",
              options: ["Compile-time allocation", "Runtime allocation", "Static allocation", "Automatic allocation"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to allocate memory?",
              options: ["alloc()", "malloc()", "new()", "create()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to free memory?",
              options: ["free()", "delete()", "remove()", "clear()"],
              correctAnswer: 0,
            },
            {
              question: "Which function allocates and initializes memory to zero?",
              options: ["malloc()", "calloc()", "realloc()", "alloc()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to resize allocated memory?",
              options: ["resize()", "realloc()", "remalloc()", "expand()"],
              correctAnswer: 1,
            },
            {
              question: "What happens if malloc() fails?",
              options: ["Returns 0", "Returns NULL", "Program crashes", "Returns -1"],
              correctAnswer: 1,
            },
            {
              question: "Which header file contains memory allocation functions?",
              options: ["<stdio.h>", "<stdlib.h>", "<memory.h>", "<alloc.h>"],
              correctAnswer: 1,
            },
            {
              question: "What is memory leak?",
              options: ["Accessing freed memory", "Not freeing allocated memory", "Allocating too much memory", "Freeing memory twice"],
              correctAnswer: 1,
            },
            {
              question: "What is dangling pointer?",
              options: ["NULL pointer", "Pointer to freed memory", "Uninitialized pointer", "Wild pointer"],
              correctAnswer: 1,
            },
            {
              question: "Where is dynamically allocated memory stored?",
              options: ["Stack", "Heap", "Data segment", "Code segment"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Structures & Unions in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a structure?",
              options: ["Collection of same data types", "Collection of different data types", "Array of variables", "Function group"],
              correctAnswer: 1,
            },
            {
              question: "Which keyword is used to define a structure?",
              options: ["struct", "structure", "class", "type"],
              correctAnswer: 0,
            },
            {
              question: "How do you access structure members?",
              options: [".", "->", "Both A and B", "::"],
              correctAnswer: 2,
            },
            {
              question: "What is the difference between . and -> operators?",
              options: ["No difference", ". for structure, -> for pointer to structure", "-> for structure, . for pointer", ". is faster"],
              correctAnswer: 1,
            },
            {
              question: "What is a union?",
              options: ["Same as structure", "Members share same memory", "Collection of functions", "Array of structures"],
              correctAnswer: 1,
            },
            {
              question: "What is the main difference between structure and union?",
              options: ["No difference", "Structure members have separate memory, union members share memory", "Union is faster", "Structure is larger"],
              correctAnswer: 1,
            },
            {
              question: "How do you declare a structure variable?",
              options: ["struct StructName var", "StructName var", "Both A and B with typedef", "new StructName"],
              correctAnswer: 2,
            },
            {
              question: "What is typedef used for?",
              options: ["Define new data type", "Create alias for existing type", "Both A and B", "Define constants"],
              correctAnswer: 2,
            },
            {
              question: "Can structures contain functions?",
              options: ["Yes", "No", "Only function pointers", "Only in C++"],
              correctAnswer: 2,
            },
            {
              question: "What is nested structure?",
              options: ["Structure inside function", "Structure inside structure", "Array of structures", "Pointer to structure"],
              correctAnswer: 1,
            },
            {
              question: "How is memory allocated for structure?",
              options: ["Sum of all members", "Largest member size", "With padding for alignment", "Depends on compiler"],
              correctAnswer: 2,
            },
            {
              question: "What is structure padding?",
              options: ["Extra memory for alignment", "Memory waste", "Compiler optimization", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Can you compare two structures directly?",
              options: ["Yes", "No", "Only with ==", "Only with memcmp()"],
              correctAnswer: 1,
            },
            {
              question: "What is self-referential structure?",
              options: ["Structure calling itself", "Structure containing pointer to same type", "Recursive structure", "Nested structure"],
              correctAnswer: 1,
            },
            {
              question: "How do you pass structure to function?",
              options: ["By value", "By reference", "Both A and B", "Only by pointer"],
              correctAnswer: 2,
            },
          ],
        },
        {
          title: "Basic File I/O in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which function is used to open a file?",
              options: ["open()", "fopen()", "file_open()", "openfile()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to close a file?",
              options: ["close()", "fclose()", "file_close()", "closefile()"],
              correctAnswer: 1,
            },
            {
              question: "What does 'r' mode mean in fopen()?",
              options: ["Read only", "Read and write", "Append", "Create new"],
              correctAnswer: 0,
            },
            {
              question: "What does 'w' mode mean in fopen()?",
              options: ["Write only", "Write and read", "Append", "Create or overwrite"],
              correctAnswer: 3,
            },
            {
              question: "What does 'a' mode mean in fopen()?",
              options: ["Append", "All access", "Auto mode", "ASCII mode"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used to read a character from file?",
              options: ["fgetc()", "getc()", "Both A and B", "fread()"],
              correctAnswer: 2,
            },
            {
              question: "Which function is used to write a character to file?",
              options: ["fputc()", "putc()", "Both A and B", "fwrite()"],
              correctAnswer: 2,
            },
            {
              question: "Which function is used to read a string from file?",
              options: ["fgets()", "gets()", "fread()", "fscanf()"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used to write a string to file?",
              options: ["fputs()", "puts()", "fwrite()", "fprintf()"],
              correctAnswer: 0,
            },
            {
              question: "What does EOF represent?",
              options: ["End of file", "Error in file", "Empty file", "Exit on failure"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used to check end of file?",
              options: ["eof()", "feof()", "iseof()", "end()"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used for formatted input from file?",
              options: ["fscanf()", "scanf()", "fread()", "finput()"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used for formatted output to file?",
              options: ["fprintf()", "printf()", "fwrite()", "foutput()"],
              correctAnswer: 0,
            },
            {
              question: "What is the return type of fopen()?",
              options: ["int", "FILE*", "char*", "void*"],
              correctAnswer: 1,
            },
            {
              question: "What happens if fopen() fails?",
              options: ["Returns 0", "Returns NULL", "Returns -1", "Program crashes"],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    advanced: {
      title: "Advanced Level C Programming Quiz",
      topics: [
        {
          title: "Advanced Pointers in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a function pointer?",
              options: ["Pointer to function", "Function returning pointer", "Pointer inside function", "Function with pointer parameter"],
              correctAnswer: 0,
            },
            {
              question: "How do you declare a function pointer?",
              options: ["int (*ptr)()", "int *ptr()", "int ptr*()", "(*int) ptr()"],
              correctAnswer: 0,
            },
            {
              question: "What is pointer to pointer used for?",
              options: ["Dynamic 2D arrays", "Changing pointer value in function", "Linked lists", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is array of pointers?",
              options: ["Pointer to array", "Array containing pointers", "2D array", "Dynamic array"],
              correctAnswer: 1,
            },
            {
              question: "What is the difference between int *p[10] and int (*p)[10]?",
              options: ["No difference", "First is array of pointers, second is pointer to array", "First is pointer, second is array", "Both are same"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "The C Preprocessor",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is preprocessor?",
              options: ["Part of compiler", "Runs before compilation", "Text processor", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Which symbol starts preprocessor directives?",
              options: ["@", "#", "$", "%"],
              correctAnswer: 1,
            },
            {
              question: "What does #define do?",
              options: ["Defines variable", "Creates macro", "Declares function", "Includes file"],
              correctAnswer: 1,
            },
            {
              question: "What is the difference between #define and const?",
              options: ["No difference", "#define is preprocessor, const is compiler", "#define is faster", "const is faster"],
              correctAnswer: 1,
            },
            {
              question: "What does #ifdef do?",
              options: ["Defines macro", "Conditional compilation", "Includes file", "Undefines macro"],
              correctAnswer: 1,
            },
            {
              question: "What does #ifndef do?",
              options: ["If not defined", "If defined", "Include file", "Define macro"],
              correctAnswer: 0,
            },
            {
              question: "What is #pragma used for?",
              options: ["Compiler-specific directives", "Include files", "Define macros", "Conditional compilation"],
              correctAnswer: 0,
            },
            {
              question: "What does ## operator do in macros?",
              options: ["Concatenation", "Stringification", "Comparison", "Addition"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Advanced Data Structures in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a linked list?",
              options: ["Array of pointers", "Dynamic data structure", "Chain of nodes", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What are the components of a node in linked list?",
              options: ["Data only", "Pointer only", "Data and pointer", "Index and data"],
              correctAnswer: 2,
            },
            {
              question: "What is the advantage of linked list over array?",
              options: ["Dynamic size", "No memory waste", "Easy insertion/deletion", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is a stack?",
              options: ["FIFO structure", "LIFO structure", "Random access", "Sorted structure"],
              correctAnswer: 1,
            },
            {
              question: "What are the main operations of stack?",
              options: ["Push and pop", "Insert and delete", "Add and remove", "Put and get"],
              correctAnswer: 0,
            },
            {
              question: "What is a queue?",
              options: ["LIFO structure", "FIFO structure", "Random access", "Sorted structure"],
              correctAnswer: 1,
            },
            {
              question: "What is a binary tree?",
              options: ["Tree with 2 nodes", "Tree with at most 2 children per node", "Tree with 2 levels", "Tree with binary data"],
              correctAnswer: 1,
            },
            {
              question: "What is tree traversal?",
              options: ["Moving through tree", "Visiting all nodes", "Searching tree", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What are the types of tree traversal?",
              options: ["Inorder, preorder, postorder", "Forward, backward", "Left, right", "Up, down"],
              correctAnswer: 0,
            },
            {
              question: "What is a hash table?",
              options: ["Sorted array", "Key-value storage", "Binary tree", "Linked list"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Advanced File I/O & Error Handling",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is binary file mode?",
              options: ["Text mode", "Binary data mode", "Encrypted mode", "Compressed mode"],
              correctAnswer: 1,
            },
            {
              question: "How do you open file in binary mode?",
              options: ["'b' flag", "'bin' flag", "'binary' flag", "'x' flag"],
              correctAnswer: 0,
            },
            {
              question: "Which function is used for binary file I/O?",
              options: ["fread/fwrite", "fget/fput", "read/write", "input/output"],
              correctAnswer: 0,
            },
            {
              question: "What is file positioning?",
              options: ["File location on disk", "Current position in file", "File size", "File permissions"],
              correctAnswer: 1,
            },
            {
              question: "Which function is used to move file pointer?",
              options: ["fseek()", "fmove()", "fpos()", "fgoto()"],
              correctAnswer: 0,
            },
            {
              question: "What does SEEK_SET mean?",
              options: ["Seek from current position", "Seek from beginning", "Seek from end", "Set seek mode"],
              correctAnswer: 1,
            },
            {
              question: "Which function returns current file position?",
              options: ["ftell()", "fpos()", "fget()", "fwhere()"],
              correctAnswer: 0,
            },
            {
              question: "What is error handling?",
              options: ["Preventing errors", "Managing errors", "Detecting errors", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Which function checks for file errors?",
              options: ["ferror()", "iserror()", "error()", "fcheck()"],
              correctAnswer: 0,
            },
            {
              question: "What is errno?",
              options: ["Error number", "Error function", "Error message", "Error type"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Bit Manipulation in C",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is bit manipulation?",
              options: ["Working with individual bits", "Binary operations", "Low-level programming", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Which operator is used for bitwise AND?",
              options: ["&", "&&", "AND", "*"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used for bitwise OR?",
              options: ["|", "||", "OR", "+"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used for bitwise XOR?",
              options: ["^", "^^", "XOR", "x"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is used for bitwise NOT?",
              options: ["!", "~", "NOT", "-"],
              correctAnswer: 1,
            },
            {
              question: "What does left shift (<<) do?",
              options: ["Moves bits left", "Multiplies by 2", "Both A and B", "Divides by 2"],
              correctAnswer: 2,
            },
            {
              question: "What does right shift (>>) do?",
              options: ["Moves bits right", "Divides by 2", "Both A and B", "Multiplies by 2"],
              correctAnswer: 2,
            },
            {
              question: "How do you set a specific bit?",
              options: ["OR with 1", "AND with 1", "XOR with 1", "NOT with 1"],
              correctAnswer: 0,
            },
            {
              question: "How do you clear a specific bit?",
              options: ["OR with 0", "AND with 0", "XOR with 0", "AND with ~(1<<bit)"],
              correctAnswer: 3,
            },
            {
              question: "How do you toggle a specific bit?",
              options: ["OR with 1", "AND with 1", "XOR with 1", "NOT with 1"],
              correctAnswer: 2,
            },
          ],
        },
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
          Complete C language Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master C language from Beginner to Advanced Level through interactive quizzes,
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

export default CQuize;
