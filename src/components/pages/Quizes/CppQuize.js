import React, { useState, useEffect, useCallback, useMemo } from "react";

const CppQuize = () => {
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
      title: "Beginner Level C++ Quiz",
      topics: [
        {
          "title": "Introduction & Setup of C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Who is the original creator of the C++ programming language?",
              "options": ["Dennis Ritchie", "Bjarne Stroustrup", "Ken Thompson", "Brian Kernighan"],
              "correctAnswer": 1
            },
            {
              "question": "Which file extension is typically used for C++ source files?",
              "options": [".cpp", ".c", ".java", ".cs"],
              "correctAnswer": 0
            },
            {
              "question": "Which symbol is used to include libraries in C++?",
              "options": ["#", "//", "/*", "@"],
              "correctAnswer": 0
            },
            {
              "question": "What is the correct syntax to output \"Hello, World!\" in C++?",
              "options": ["cout << \"Hello, World!\";", "print(\"Hello, World!\");", "echo \"Hello, World!\";", "console.log(\"Hello, World!\");"],
              "correctAnswer": 0
            },
            {
              "question": "What is the entry point function in a C++ program?",
              "options": ["main()", "start()", "init()", "run()"],
              "correctAnswer": 0
            },
            {
              "question": "What namespace contains the standard functions like cout?",
              "options": ["std", "system", "core", "lib"],
              "correctAnswer": 0
            },
            {
              "question": "Which of the following is used for single line comments in C++?",
              "options": ["//", "/* */", "#", "--"],
              "correctAnswer": 0
            },
            {
              "question": "Which operator is used to access members of a class or struct using a pointer?",
              "options": ["->", ".", "*", "::"],
              "correctAnswer": 0
            },
            {
              "question": "What is the correct way to declare an integer variable in C++?",
              "options": ["int a;", "int a = '5';", "int a = \"5\";", "integer a;"],
              "correctAnswer": 0
            },
            {
              "question": "Which command is used to compile a C++ program using g++?",
              "options": ["g++ program.cpp -o program", "gcc program.c", "g++ program.c", "compile program.cpp"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "C++ as a Better C",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Which feature distinguishes C++ from C?",
              "options": ["Object-oriented programming", "Procedural programming", "Pointer arithmetic", "Preprocessor directives"],
              "correctAnswer": 0
            },
            {
              "question": "Which keyword is used to define a class in C++?",
              "options": ["class", "struct", "object", "type"],
              "correctAnswer": 0
            },
            {
              "question": "Which of the following is a key feature of C++?",
              "options": ["Function overloading", "GOTO statements", "Macros", "Unions"],
              "correctAnswer": 0
            },
            {
              "question": "In C++, what supports polymorphism?",
              "options": ["Virtual functions", "Static functions", "Macros", "Pointers"],
              "correctAnswer": 0
            },
            {
              "question": "What does 'namespace' help avoid in C++?",
              "options": ["Name conflicts", "Memory leaks", "Type errors", "Undefined behavior"],
              "correctAnswer": 0
            },
            {
              "question": "What is the purpose of constructors in C++?",
              "options": ["Initialize objects", "Destroy objects", "Allocate memory", "Overload operators"],
              "correctAnswer": 0
            },
            {
              "question": "Which feature is NOT part of C++ compared to C?",
              "options": ["Garbage collection", "Templates", "References", "Operator overloading"],
              "correctAnswer": 0
            },
            {
              "question": "Which of these is a C++ standard stream for output?",
              "options": ["cout", "scanf", "print", "echo"],
              "correctAnswer": 0
            },
            {
              "question": "What is encapsulation in C++?",
              "options": ["Wrapping data and functions into classes", "Converting data types", "Running multiple threads", "Using pointers"],
              "correctAnswer": 0
            },
            {
              "question": "Which C++ feature allows functions with the same name but different signatures?",
              "options": ["Function overloading", "Function overriding", "Templates", "Macros"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Class Core Concepts in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is a class in C++?",
              "options": ["A blueprint for objects", "A function", "An operator", "A pointer"],
              "correctAnswer": 0
            },
            {
              "question": "Which keyword is used to access private members from a class?",
              "options": ["friend", "public", "private", "protected"],
              "correctAnswer": 0
            },
            {
              "question": "Which function is automatically called when an object is created?",
              "options": ["Constructor", "Destructor", "Copy constructor", "Assignment operator"],
              "correctAnswer": 0
            },
            {
              "question": "What is inheritance in C++?",
              "options": ["Deriving new classes from existing ones", "Memory allocation", "Operator overloading", "Exception handling"],
              "correctAnswer": 0
            },
            {
              "question": "What does encapsulation provide?",
              "options": ["Data hiding", "Polymorphism", "Multiple inheritance", "Templates"],
              "correctAnswer": 0
            },
            {
              "question": "Which access specifier allows access within the class and derived classes?",
              "options": ["protected", "private", "public", "internal"],
              "correctAnswer": 0
            },
            {
              "question": "What is polymorphism in C++?",
              "options": ["Methods with the same name behaving differently", "Multiple inheritance", "Memory management", "Writing templates"],
              "correctAnswer": 0
            },
            {
              "question": "Which operator is overloaded for object output streaming?",
              "options": ["<<", ">>", "+", "-"],
              "correctAnswer": 0
            },
            {
              "question": "Which member function is called when an object goes out of scope?",
              "options": ["Destructor", "Constructor", "Copy constructor", "Assignment operator"],
              "correctAnswer": 0
            },
            {
              "question": "What is the default access level for members of a class?",
              "options": ["private", "public", "protected", "internal"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Dynamic Memory in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Which operator is used to allocate dynamic memory?",
              "options": ["new", "malloc", "alloc", "free"],
              "correctAnswer": 0
            },
            {
              "question": "How is dynamically allocated memory released in C++?",
              "options": ["delete", "free", "dispose", "remove"],
              "correctAnswer": 0
            },
            {
              "question": "Which memory area is used for dynamic memory?",
              "options": ["Heap", "Stack", "Code segment", "Data segment"],
              "correctAnswer": 0
            },
            {
              "question": "What happens if dynamically allocated memory is not freed?",
              "options": ["Memory leaks occur", "Program terminates properly", "Memory is reused", "Compiler fixes it"],
              "correctAnswer": 0
            },
            {
              "question": "How do you allocate an array dynamically?",
              "options": ["new type[size]", "malloc(size)", "allocate(type, size)", "new_array(size)"],
              "correctAnswer": 0
            },
            {
              "question": "Which statement is true about 'delete' operator?",
              "options": ["Use delete[] to free arrays", "It can free any pointer", "It is optional", "It only works in class methods"],
              "correctAnswer": 0
            },
            {
              "question": "What is a dangling pointer?",
              "options": ["A pointer pointing to freed memory", "A null pointer", "An uninitialized variable", "A smart pointer"],
              "correctAnswer": 0
            },
            {
              "question": "Which of the following is NOT a smart pointer in C++11?",
              "options": ["raw_ptr", "unique_ptr", "shared_ptr", "weak_ptr"],
              "correctAnswer": 0
            },
            {
              "question": "Which header file defines smart pointers?",
              "options": ["<memory>", "<vector>", "<iostream>", "<string>"],
              "correctAnswer": 0
            },
            {
              "question": "What does 'nullptr' represent?",
              "options": ["A null pointer constant", "An integer zero", "An uninitialized variable", "A deleted pointer"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "References in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is a reference in C++?",
              "options": ["An alias for an existing variable", "A pointer", "A new object", "A copy of a variable"],
              "correctAnswer": 0
            },
            {
              "question": "Which symbol is used to declare a reference?",
              "options": ["&", "*", "%", "$"],
              "correctAnswer": 0
            },
            {
              "question": "Can a reference be null in C++?",
              "options": ["No", "Yes", "Only for pointers", "Only in debug mode"],
              "correctAnswer": 0
            },
            {
              "question": "How many variables can a single reference refer to during its lifetime?",
              "options": ["One", "Many", "Zero", "Depends on type"],
              "correctAnswer": 0
            },
            {
              "question": "Which of the following is true about references?",
              "options": ["Must be initialized when defined", "Can be reassigned later", "Can be null", "Do not refer to variables"],
              "correctAnswer": 0
            },
            {
              "question": "What is the usual purpose of using references in function parameters?",
              "options": ["To avoid copying and allow modification", "To make copies", "To allocate memory", "To create pointers"],
              "correctAnswer": 0
            },
            {
              "question": "Are references safer than pointers since they can't be null?",
              "options": ["Yes", "No", "Only with smart pointers", "Only in C++20"],
              "correctAnswer": 0
            },
            {
              "question": "Is it possible to have a reference to a pointer?",
              "options": ["Yes", "No", "Only for arrays", "Only in templates"],
              "correctAnswer": 0
            },
            {
              "question": "Which operation does a reference NOT support?",
              "options": ["Reassignment to a different variable", "Dereferencing", "Accessing variable members", "Passing as function parameters"],
              "correctAnswer": 0
            },
            {
              "question": "What does the following code do? int a=5; int &b = a;",
              "options": ["b becomes another name for a", "b copies the value of a", "b points to a", "b is uninitialized"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "The C++ Standard Library (STL)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is the STL in C++?",
              "options": ["Standard Template Library", "Simple Type Library", "Standard Tools List", "System Template Locator"],
              "correctAnswer": 0
            },
            {
              "question": "Which of the following is NOT a component of STL?",
              "options": ["Debugger", "Containers", "Algorithms", "Iterators"],
              "correctAnswer": 0
            },
            {
              "question": "Which STL container is usually used for dynamic arrays?",
              "options": ["vector", "array", "list", "queue"],
              "correctAnswer": 0
            },
            {
              "question": "What does an iterator do in STL?",
              "options": ["Provides a pointer-like interface for traversal", "Compiles the code", "Manages memory", "Prints output"],
              "correctAnswer": 0
            },
            {
              "question": "Which header file should you include to use STL vectors?",
              "options": ["<vector>", "<list>", "<array>", "<iostream>"],
              "correctAnswer": 0
            },
            {
              "question": "Which STL container is most suitable for queues?",
              "options": ["queue", "stack", "vector", "set"],
              "correctAnswer": 0
            },
            {
              "question": "What STL component sorts elements efficiently?",
              "options": ["std::sort", "std::copy", "std::merge", "std::accumulate"],
              "correctAnswer": 0
            },
            {
              "question": "Which STL container stores unique sorted elements?",
              "options": ["set", "vector", "list", "map"],
              "correctAnswer": 0
            },
            {
              "question": "Which of these is an associative container in STL?",
              "options": ["map", "vector", "list", "deque"],
              "correctAnswer": 0
            },
            {
              "question": "What algorithm would you use to find the maximum element in a container?",
              "options": ["std::max_element", "std::min_element", "std::find", "std::sort"],
              "correctAnswer": 0
            }
          ]
        }
      ],
    },
    intermediate: {
      title: "Intermediate Level CSS Quiz",
      topics: [
        {
          "title": "The Big Four in C++ OOP",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which of the following is NOT one of the Big Four in C++?", "options": ["Destructor", "Virtual Constructor", "Copy Constructor", "Copy Assignment Operator"], "correctAnswer": 1 },
            { "question": "What is the role of a destructor in C++?", "options": ["Clean up resources", "Allocate memory", "Copy objects", "Initialize members"], "correctAnswer": 0 },
            { "question": "The copy constructor is used to:", "options": ["Create a new object as a copy of an existing one", "Destroy the object", "Assign one object to another", "Initialize arrays"], "correctAnswer": 0 },
            { "question": "The copy assignment operator is used for:", "options": ["Assigning one existing object to another", "Creating objects", "Deleting objects", "Managing templates"], "correctAnswer": 0 },
            { "question": "Which special member function is called when an object is passed by value?", "options": ["Copy Constructor", "Destructor", "Move Constructor", "Default Constructor"], "correctAnswer": 0 },
            { "question": "Which of the Big Four should be explicitly declared if you manage dynamic memory?", "options": ["All four", "Only destructor", "Only copy constructor", "None"], "correctAnswer": 0 },
            { "question": "What happens if you do not define a copy assignment operator in a class?", "options": ["Compiler generates a default shallow copy", "Compiler raises an error", "It deletes the object", "It converts to default constructor"], "correctAnswer": 0 },
            { "question": "Which method is automatically called when an object goes out of scope?", "options": ["Destructor", "Copy constructor", "Assignment operator", "Move constructor"], "correctAnswer": 0 },
            { "question": "The Big Four become the Big Five with:", "options": ["The addition of move constructor", "Virtual destructors", "Copy constructor", "Inheritance"], "correctAnswer": 0 },
            { "question": "When should you define the Big Four explicitly?", "options": ["When your class manages resources", "For all classes", "Only for abstract classes", "Never"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "The Rule of Three / Five / Zero",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does the Rule of Three state?", "options": ["If a class defines one of destructor, copy constructor, or copy assignment operator, it should define all three", "You only need a destructor", "The class should have a default constructor", "None of these"], "correctAnswer": 0 },
            { "question": "The Rule of Five adds which special members to the Rule of Three?", "options": ["Move constructor and move assignment operator", "Virtual destructor", "Friend functions", "Templates"], "correctAnswer": 0 },
            { "question": "The Rule of Zero encourages:", "options": ["Favoring composable types, avoiding explicit special members by using RAII types", "Writing all special member functions", "Avoiding destructors", "Manually managing memory"], "correctAnswer": 0 },
            { "question": "If a class manages a resource, which rule is most important?", "options": ["Rule of Five", "Rule of Zero", "Rule of Three", "None"], "correctAnswer": 0 },
            { "question": "What is RAII in C++?", "options": ["Resource Acquisition Is Initialization", "Random Access Is Integer", "Reference Assignment Is Immutable", "Recursive Algorithm Inheritance"], "correctAnswer": 0 },
            { "question": "Which C++11 feature makes the Rule of Five more relevant?", "options": ["Move semantics", "Templates", "Lambdas", "Constexpr"], "correctAnswer": 0 },
            { "question": "What happens if you delete the copy constructor but not the destructor?", "options": ["Compiler error or unexpected behaviors", "Compilation success", "No effect", "Default copy is used"], "correctAnswer": 0 },
            { "question": "What is the default behavior of compiler-generated special member functions?", "options": ["Shallow copy or default destructor", "Deep copy", "Throws exceptions", "Calls garbage collector"], "correctAnswer": 0 },
            { "question": "Which rule encourages using standard library types for ownership?", "options": ["Rule of Zero", "Rule of Three", "Rule of Five", "Rule of Six"], "correctAnswer": 0 },
            { "question": "When might you explicitly define the destructor but delete the copy operations?", "options": ["To disable copying", "To make shallow copies", "To enable default copying", "Only for templates"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Inheritance in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What keyword is used to declare inheritance in C++?", "options": ["class Derived : public Base", "class Derived inherits Base", "class Derived extends Base", "class Derived <- Base"], "correctAnswer": 0 },
            { "question": "Which type of inheritance allows only one parent class?", "options": ["Single inheritance", "Multiple inheritance", "Hierarchical inheritance", "Hybrid inheritance"], "correctAnswer": 0 },
            { "question": "Which access specifier allows inheritance but hides members from other classes?", "options": ["protected", "public", "private", "internal"], "correctAnswer": 0 },
            { "question": "What is virtual inheritance used for?", "options": ["To solve diamond problem", "To allow access to private members", "To prevent inheritance", "To enable templates"], "correctAnswer": 0 },
            { "question": "How is a base class destructor declared to ensure proper cleanup in inheritance?", "options": ["As virtual", "As static", "As inline", "With no special keyword"], "correctAnswer": 0 },
            { "question": "Can constructors be inherited in C++ automatically?", "options": ["No, except with C++11 using declarations", "Yes, always", "Only for abstract classes", "Never"], "correctAnswer": 0 },
            { "question": "Multiple inheritance in C++ allows:", "options": ["A class to inherit from multiple classes", "Only one base class", "Only interfaces", "Only virtual classes"], "correctAnswer": 0 },
            { "question": "What is the effect of private inheritance?", "options": ["Base class public members become private in derived", "Derived class becomes private", "Base class private members become protected", "No effect"], "correctAnswer": 0 },
            { "question": "Which type of inheritance creates a hierarchy with one base and several derived classes?", "options": ["Hierarchical", "Single", "Multiple", "Hybrid"], "correctAnswer": 0 },
            { "question": "What does the 'override' specifier do in inherited virtual functions?", "options": ["Ensures the function overrides a base", "Declares new function", "Deletes the function", "Changes the function to static"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Polymorphism in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What keyword allows runtime polymorphism in C++?", "options": ["virtual", "static", "inline", "const"], "correctAnswer": 0 },
            { "question": "Which of the following enables compile-time polymorphism?", "options": ["Function overloading", "Virtual functions", "Pointers", "References"], "correctAnswer": 0 },
            { "question": "What does 'pure virtual function' mean?", "options": ["Function with =0 and no implementation", "Function that cannot be overridden", "Function hidden in base", "Function deleted"], "correctAnswer": 0 },
            { "question": "Classes with at least one pure virtual function are called:", "options": ["Abstract classes", "Concrete classes", "Template classes", "Static classes"], "correctAnswer": 0 },
            { "question": "What does the keyword 'override' signify?", "options": ["Derived class overrides a base virtual function", "Function is not virtual", "Deletes a function", "Function is final"], "correctAnswer": 0 },
            { "question": "Which of these is NOT related to polymorphism?", "options": ["Constructor overloading", "Operator overloading", "Function overloading", "Virtual functions"], "correctAnswer": 0 },
            { "question": "What happens if a virtual destructor is missing in a base class?", "options": ["Undefined behavior when deleting derived objects through base pointers", "Compiler error", "No effect", "Object slicing"], "correctAnswer": 0 },
            { "question": "What is function overriding?", "options": ["Derived class function replaces base virtual function", "New function with different name", "Global function", "Deleting a function"], "correctAnswer": 0 },
            { "question": "What allows selecting the appropriate function at compile-time?", "options": ["Overloading", "Virtual functions", "Inheritance", "Templates"], "correctAnswer": 0 },
            { "question": "What is object slicing?", "options": ["Copying derived object to base object, truncating derived parts", "Assigning pointers", "Template instantiation", "Virtual function call"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Templates in C++ (Generic Programming)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a template in C++?", "options": ["A blueprint for generic functions or classes", "A macro", "A built-in type", "A pointer"], "correctAnswer": 0 },
            { "question": "Which keyword introduces a function template?", "options": ["template<typename T>", "generic function", "function template", "template<class T>"], "correctAnswer": 3 },
            { "question": "What advantage do templates provide?", "options": ["Code reuse and type safety", "Faster execution", "Manual memory management", "Runtime polymorphism"], "correctAnswer": 0 },
            { "question": "Can templates be specialized?", "options": ["Yes, through template specialization", "No", "Only for classes", "Only for functions"], "correctAnswer": 0 },
            { "question": "What is template instantiation?", "options": ["Generating concrete functions/classes from templates", "Compiling the program", "Linking", "Running the code"], "correctAnswer": 0 },
            { "question": "Which is TRUE about non-type template parameters?", "options": ["They accept constant values like integers", "They accept types", "They are deprecated", "They are runtime values"], "correctAnswer": 0 },
            { "question": "What does SFINAE stand for?", "options": ["Substitution Failure Is Not An Error", "Simple Function Interface And Error", "Static Function Inlining And Execution", "Safe Function Invocation And Evaluation"], "correctAnswer": 0 },
            { "question": "Can templates be used with multiple type parameters?", "options": ["Yes", "No", "Only one per template", "Only with variadic templates"], "correctAnswer": 0 },
            { "question": "What does the 'typename' keyword do in a template?", "options": ["Declares a template type parameter", "Specifies variable type", "Declares a pointer", "Defines a function"], "correctAnswer": 0 },
            { "question": "Are templates instantiated at compile-time or run-time?", "options": ["Compile-time", "Run-time", "Both", "Depends on usage"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "STL Containers & Iterators in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which STL container provides dynamic array functionality?", "options": ["vector", "list", "deque", "array"], "correctAnswer": 0 },
            { "question": "Which container maintains elements sorted and unique?", "options": ["set", "map", "multimap", "unordered_set"], "correctAnswer": 0 },
            { "question": "What is the role of an iterator in STL?", "options": ["To traverse containers", "To allocate memory", "To sort elements", "To handle exceptions"], "correctAnswer": 0 },
            { "question": "Which iterator category allows both forward and backward traversal?", "options": ["Bidirectional iterator", "Input iterator", "Output iterator", "Forward iterator"], "correctAnswer": 0 },
            { "question": "Which container uses key-value pairs?", "options": ["map", "vector", "list", "deque"], "correctAnswer": 0 },
            { "question": "Which container allows fast insertions and deletions anywhere?", "options": ["list", "vector", "array", "set"], "correctAnswer": 0 },
            { "question": "What does container::begin() return?", "options": ["An iterator to the first element", "The container size", "A pointer to memory", "A reference"], "correctAnswer": 0 },
            { "question": "Which container is a sequential container?", "options": ["vector", "map", "unordered_map", "set"], "correctAnswer": 0 },
            { "question": "Which of these containers is associative?", "options": ["set", "vector", "deque", "list"], "correctAnswer": 0 },
            { "question": "Can iterators be invalidated?", "options": ["Yes, after certain operations", "No, they are always valid", "Only for vector", "Only for list"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "STL Algorithms & Lambda Expressions",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which STL algorithm is used to sort a range of elements?", "options": ["std::sort", "std::copy", "std::accumulate", "std::transform"], "correctAnswer": 0 },
            { "question": "What does std::for_each do?", "options": ["Applies a function to each element in a range", "Finds a value", "Sorts elements", "Removes duplicates"], "correctAnswer": 0 },
            { "question": "What is a lambda expression in C++?", "options": ["Anonymous inline function", "Class template", "Macro", "Function pointer"], "correctAnswer": 0 },
            { "question": "What is the correct syntax to capture all variables by reference in a lambda?", "options": ["[&]", "[=]", "[this]", "[]"], "correctAnswer": 0 },
            { "question": "Which STL algorithm removes consecutive duplicates in a sorted range?", "options": ["std::unique", "std::remove", "std::sort", "std::copy"], "correctAnswer": 0 },
            { "question": "What is the result type of a lambda in C++?", "options": ["Unnamed closure object", "Function pointer", "int", "void"], "correctAnswer": 0 },
            { "question": "Which STL algorithm can be used to find an element satisfying a condition?", "options": ["std::find_if", "std::for_each", "std::accumulate", "std::replace"], "correctAnswer": 0 },
            { "question": "What is the purpose of the 'mutable' keyword in lambda expressions?", "options": ["Allows modifying captured variables by value", "Declares a constant lambda", "Deletes the lambda", "Captures this pointer"], "correctAnswer": 0 },
            { "question": "Which algorithm accumulates values in a container?", "options": ["std::accumulate", "std::copy", "std::sort", "std::remove"], "correctAnswer": 0 },
            { "question": "Can lambdas be assigned to std::function objects?", "options": ["Yes", "No", "Only if static", "Only within a class"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Error Handling in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which keyword is used to handle exceptions?", "options": ["try", "catch", "throw", "All of the above"], "correctAnswer": 3 },
            { "question": "What does the try block do?", "options": ["Contains code that might throw an exception", "Handles exceptions", "Throws exceptions", "Terminates program"], "correctAnswer": 0 },
            { "question": "Which block handles exceptions?", "options": ["catch", "try", "throw", "finally"], "correctAnswer": 0 },
            { "question": "How do you throw an exception in C++?", "options": ["throw exceptionObject;", "throw;", "try {}", "catch()"], "correctAnswer": 0 },
            { "question": "What happens if an exception is not caught?", "options": ["Terminate program via std::terminate", "Proceed normally", "Skip catch blocks", "Memory leak"], "correctAnswer": 0 },
            { "question": "Can multiple catch blocks be used for one try?", "options": ["Yes", "No", "Only one", "Only in C++17"], "correctAnswer": 0 },
            { "question": "What is std::exception?", "options": ["Base class for standard exceptions", "Derived exception", "A namespace", "A function"], "correctAnswer": 0 },
            { "question": "What does noexcept indicate?", "options": ["Function does not throw exceptions", "Function always throws", "Function is deprecated", "Function returns void"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Modern C++ Features (C++11, C++14, C++17)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which feature was introduced in C++11 to support thread management?", "options": ["std::thread", "auto keyword", "nullptr", "constexpr"], "correctAnswer": 0 },
            { "question": "What does the 'auto' keyword do?", "options": ["Deduces variable type", "Declares a pointer", "Defines a function", "Deletes an object"], "correctAnswer": 0 },
            { "question": "Which feature replaces NULL for pointer constants?", "options": ["nullptr", "0", "NULL", "void*"], "correctAnswer": 0 },
            { "question": "What is a lambda expression introduced in C++11?", "options": ["Anonymous inline function", "Template function", "Macro", "Class"], "correctAnswer": 0 },
            { "question": "Which C++14 feature allows return type deduction for functions?", "options": ["auto", "decltype", "typename", "constexpr"], "correctAnswer": 0 },
            { "question": "What feature does C++17 introduce for if and switch statements?", "options": ["if constexpr", "auto", "decltype", "noexcept"], "correctAnswer": 0 },
            { "question": "What does structured binding (C++17) allow?", "options": ["Unpack tuples or pairs into variables", "Bind functions", "Declare threads", "Manage memory"], "correctAnswer": 0 },
            { "question": "Which keyword allows compile-time computation?", "options": ["constexpr", "inline", "auto", "static"], "correctAnswer": 0 },
            { "question": "Which container was introduced in C++11?", "options": ["unordered_map", "map", "vector", "list"], "correctAnswer": 0 },
            { "question": "What feature helps avoid data races in concurrency?", "options": ["std::mutex", "std::vector", "std::function", "std::string"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Input/Output Streams & File Handling in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which header file contains standard I/O stream objects?", "options": ["<iostream>", "<fstream>", "<cstdio>", "<cstring>"], "correctAnswer": 0 },
            { "question": "Which object is used to output to the console?", "options": ["std::cout", "std::cin", "std::cerr", "std::fstream"], "correctAnswer": 0 },
            { "question": "Which object is used to input from the console?", "options": ["std::cin", "std::cout", "std::cerr", "std::ifstream"], "correctAnswer": 0 },
            { "question": "Which class is used to write data to files?", "options": ["std::ofstream", "std::ifstream", "std::fstream", "std::istream"], "correctAnswer": 0 },
            { "question": "Which class handles reading from a file?", "options": ["std::ifstream", "std::ofstream", "std::fstream", "std::iostream"], "correctAnswer": 0 },
            { "question": "What method is used to open a file in file stream classes?", "options": ["open()", "start()", "init()", "load()"], "correctAnswer": 0 },
            { "question": "Which operator is used to extract input from streams?", "options": [">>", "<<", ">>=", "<<="], "correctAnswer": 0 },
            { "question": "Which operator is used to insert output into streams?", "options": ["<<", ">>", ">>=", "<<="], "correctAnswer": 0 },
            { "question": "How do you check if a file opened successfully?", "options": ["Using is_open() method", "Using eof()", "Checking size", "Using open()"], "correctAnswer": 0 },
            { "question": "What is the default mode when opening files with std::ofstream?", "options": ["Truncate and write", "Append", "Read", "Binary"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    advanced: {
      title: "Advanced Level CSS Quiz",
      topics: [
        {
          "title": "Modern C++ Features (C++11/14/17/20)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which keyword was introduced in C++11 for automatic type deduction?", "options": ["auto", "decltype", "template", "constexpr"], "correctAnswer": 0 },
            { "question": "What does the 'constexpr' keyword enable?", "options": ["Compile-time constant evaluation", "Runtime polymorphism", "Memory allocation", "Thread synchronization"], "correctAnswer": 0 },
            { "question": "Which new loop was introduced in C++11 for easy iteration?", "options": ["Range-based for loop", "For-each loop", "While loop", "Do-while loop"], "correctAnswer": 0 },
            { "question": "What feature did C++14 add to improve generic lambdas?", "options": ["Generic lambda parameter types", "Capture by value", "Mutable lambdas", "Lambda recursion"], "correctAnswer": 0 },
            { "question": "Which feature allows multiple return values as structured bindings?", "options": ["Structured bindings", "Tuple", "Pair", "Initializer list"], "correctAnswer": 0 },
            { "question": "What does the '[[nodiscard]]' attribute introduced in C++17 do?", "options": ["Warns if return value is ignored", "Marks deprecated functions", "Enforces inline", "Enables exceptions"], "correctAnswer": 0 },
            { "question": "Which concept-based feature improves template error messages in C++20?", "options": ["Concepts", "SFINAE", "Variadic templates", "Compile-time reflection"], "correctAnswer": 0 },
            { "question": "What is the new way to define constexpr variables in C++14?", "options": ["constexpr variables can have complex bodies", "constexpr variables are deprecated", "constexpr variables must be static", "No changes"], "correctAnswer": 0 },
            { "question": "Which C++20 feature allows simplified coroutines?", "options": ["Coroutines support", "Modules", "Concepts", "Ranges"], "correctAnswer": 0 },
            { "question": "What is the purpose of the 'std::optional' introduced in C++17?", "options": ["Represent optional values", "Handle exceptions", "Manage memory", "Define classes"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Templates & Metaprogramming in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is template metaprogramming?", "options": ["Computations at compile-time using templates", "Runtime polymorphism", "Memory management", "Low-level optimization"], "correctAnswer": 0 },
            { "question": "What technique is often used in template metaprogramming for flow control?", "options": ["Recursion", "Loops", "Exceptions", "Threads"], "correctAnswer": 0 },
            { "question": "What does SFINAE stand for?", "options": ["Substitution Failure Is Not An Error", "Safe Function Invocation And Execution", "Static Function Interface And Evaluation", "Simple Function Implementation And Error"], "correctAnswer": 0 },
            { "question": "Which C++ feature helps to constrain template parameters?", "options": ["Concepts", "Macros", "Inheritance", "Exceptions"], "correctAnswer": 0 },
            { "question": "What type of programming does template metaprogramming resemble?", "options": ["Functional programming", "Procedural programming", "Object-oriented programming", "Imperative programming"], "correctAnswer": 0 },
            { "question": "Which C++ library helps with type traits used in template metaprogramming?", "options": ["<type_traits>", "<iostream>", "<vector>", "<algorithm>"], "correctAnswer": 0 },
            { "question": "What is template specialization?", "options": ["Defining a template for specific parameter types", "A macro technique", "An error handling method", "A runtime check"], "correctAnswer": 0 },
            { "question": "What is a limitation of template metaprogramming in older C++ standards?", "options": ["Complex and hard to read code", "Unsupported by compilers", "No support for recursion", "No type safety"], "correctAnswer": 0 },
            { "question": "Which mechanism replaces verbose template metaprogramming in C++20?", "options": ["Concepts", "Macros", "Virtual functions", "Exceptions"], "correctAnswer": 0 },
            { "question": "What is the result of template instantiation?", "options": ["Generated code for specific types", "Runtime objects", "Errors", "Static variables"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Concurrency & Multithreading in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which header file defines C++11 threading facilities?", "options": ["<thread>", "<mutex>", "<future>", "<atomic>"], "correctAnswer": 0 },
            { "question": "What is the entry point for a new thread in C++?", "options": ["A function callable from std::thread", "main()", "A lambda only", "void loop()"], "correctAnswer": 0 },
            { "question": "Which class is used to ensure mutual exclusion in C++?", "options": ["std::mutex", "std::thread", "std::lock_guard", "std::condition_variable"], "correctAnswer": 0 },
            { "question": "What is a data race?", "options": ["Concurrent access to data without synchronization", "Deadlock", "Thread creation failure", "Exception"], "correctAnswer": 0 },
            { "question": "Which smart lock automatically manages a mutex's lifetime?", "options": ["std::lock_guard", "std::unique_lock", "std::shared_lock", "std::atomic"], "correctAnswer": 0 },
            { "question": "Which library facility is used for asynchronous computations?", "options": ["std::future", "std::thread", "std::mutex", "std::condition_variable"], "correctAnswer": 0 },
            { "question": "Which C++ feature helps to avoid manual locking?", "options": ["RAII with lock_guard", "Raw pointers", "Throwing exceptions", "Macros"], "correctAnswer": 0 },
            { "question": "What does std::async do?", "options": ["Starts a task asynchronously", "Creates a new thread manually", "Locks a mutex", "Waits for threads"], "correctAnswer": 0 },
            { "question": "Which function blocks a thread until a particular condition?", "options": ["std::condition_variable::wait", "std::thread::join", "std::mutex::lock", "std::async"], "correctAnswer": 0 },
            { "question": "What is a deadlock?", "options": ["Two or more threads waiting indefinitely", "A failed thread launch", "Memory leak", "Lost data"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced STL & Design Patterns in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which STL container is most efficient for fast insertions and deletions?", "options": ["list", "vector", "deque", "set"], "correctAnswer": 0 },
            { "question": "What design pattern does std::unique_ptr implement?", "options": ["RAII (Resource Acquisition Is Initialization)", "Factory", "Singleton", "Observer"], "correctAnswer": 0 },
            { "question": "Which STL algorithm removes duplicates from a sorted range?", "options": ["std::unique", "std::distinct", "std::remove", "std::sort"], "correctAnswer": 0 },
            { "question": "Which pattern is commonly used to separate abstraction from implementation?", "options": ["Bridge", "Observer", "Singleton", "Decorator"], "correctAnswer": 0 },
            { "question": "What is the 'Decorator' design pattern used for?", "options": ["Add responsibilities to objects dynamically", "Create single instances", "Observe objects", "Separate interface and implementation"], "correctAnswer": 0 },
            { "question": "Which STL container provides associative array functionality?", "options": ["map", "vector", "list", "queue"], "correctAnswer": 0 },
            { "question": "Which pattern promotes decoupling by allowing objects to subscribe to events?", "options": ["Observer", "Singleton", "Factory", "Adapter"], "correctAnswer": 0 },
            { "question": "Which STL feature is commonly used with algorithms to generalize behavior?", "options": ["Iterators", "Containers", "Allocators", "Exceptions"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Performance & Optimization in C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is the benefit of using move semantics?", "options": ["Efficient transfer of resources without copying", "Simplify code", "Guarantee thread safety", "Avoid exceptions"], "correctAnswer": 0 },
            { "question": "Which keyword allows a function to be inlined?", "options": ["inline", "virtual", "constexpr", "static"], "correctAnswer": 0 },
            { "question": "What does 'cache locality' improve?", "options": ["Program speed by accessing memory efficiently", "Program correctness", "Code readability", "Memory safety"], "correctAnswer": 0 },
            { "question": "What is the cost of frequent dynamic memory allocation and deallocation?", "options": ["Reduced performance", "Improved performance", "No effect", "Error"], "correctAnswer": 0 },
            { "question": "Which STL container has the best performance for random access?", "options": ["vector", "list", "deque", "set"], "correctAnswer": 0 },
            { "question": "What is loop unrolling?", "options": ["Optimization technique reducing loop overhead", "Writing fewer loops", "Avoiding loops", "Parallelizing loops"], "correctAnswer": 0 },
            { "question": "Which C++11 feature helps avoid unnecessary copying of objects?", "options": ["Rvalue references", "Const variables", "Virtual functions", "Exceptions"], "correctAnswer": 0 },
            { "question": "What does the 'constexpr' function enable for optimization?", "options": ["Compile-time evaluation", "Runtime evaluation", "Lazy loading", "Exception safety"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Tooling & Best Practices in Modern C++",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which tool is commonly used for C++ static code analysis?", "options": ["clang-tidy", "gdb", "valgrind", "make"], "correctAnswer": 0 },
            { "question": "What is the purpose of the C++ Core Guidelines?", "options": ["Best practices for writing clean and safe code", "Build tools", "Compiler options", "Debugging"], "correctAnswer": 0 },
            { "question": "Which build system is popular for C++ projects?", "options": ["CMake", "Gradle", "Maven", "npm"], "correctAnswer": 0 },
            { "question": "What does RAII help guarantee?", "options": ["Resource management via object lifetime", "Runtime polymorphism", "Template instantiation", "Code formatting"], "correctAnswer": 0 },
            { "question": "Which of the following tools helps with memory leak detection?", "options": ["Valgrind", "CMake", "GTest", "Boost"], "correctAnswer": 0 },
            { "question": "Which flag enables all compiler warnings in GCC?", "options": ["-Wall", "-Wextra", "-O2", "-g"], "correctAnswer": 0 },
            { "question": "What does the 'auto' keyword promote in code?", "options": ["Type inference", "Explicit typing", "Code obfuscation", "Compile-time errors"], "correctAnswer": 0 },
            { "question": "Why should exceptions be handled properly?", "options": ["To maintain program stability and resource cleanup", "To increase speed", "To avoid all pointers", "To reduce code size"], "correctAnswer": 0 }
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
          Complete C++ language Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master C++ language from Beginner to Advanced Level through interactive quizzes,
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

export default CppQuize;
