import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const CPlusNotes = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level C++ Notes",
      topics: [
        {
          title: 'Introduction & Setup of C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is C++?</h2>
    <p class="text-gray-700 mb-4">
      C++ is an extension of C, designed to support object-oriented programming (OOP) and systems programming.
      It was developed by Bjarne Stroustrup in the early 1980s.
      Key features added include:
      <ul class="list-disc list-inside">
        <li>Classes and Objects</li>
        <li>Stronger type checking</li>
        <li>Standard Template Library (STL)</li>
        <li>Dynamic memory management</li>
      </ul>
    </p>

    <h3 class="text-xl font-semibold mb-3">Uses of C++</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Game development</li>
      <li>System software (Operating Systems, drivers)</li>
      <li>GUI applications</li>
      <li>Competitive programming</li>
      <li>Embedded systems</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Setting Up a Compiler</h2>
    <p class="text-gray-700 mb-4">
      To write and execute C++ code, you need a compiler and optionally an IDE.
    </p>

    <h3 class="font-semibold mb-2">Popular Compilers</h3>
    <ul class="list-disc list-inside mb-4">
      <li><strong>G++ (part of GCC):</strong> Cross-platform, widely used, compile with command line:
        <pre class="bg-gray-100 p-2 rounded"><code>g++ program.cpp -o program
./program</code></pre>
      </li>
      <li><strong>MSVC (Microsoft Visual C++):</strong> Windows-only, comes with Visual Studio.</li>
      <li><strong>Clang:</strong> Modern, fast compiler; supports Linux, macOS, Windows.</li>
    </ul>

    <h3 class="font-semibold mb-2">Popular IDEs</h3>
    <ul class="list-disc list-inside">
      <li>VS Code: lightweight, requires C++ extensions.</li>
      <li>Visual Studio: full-featured, primarily Windows.</li>
      <li>CLion: cross-platform, from JetBrains.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Writing a Simple C++ Program</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt; // For input/output

int main() {
    std::cout &lt;&lt; "Hello, C++ World!" &lt;&lt; std::endl; // Output
    int age;
    std::cout &lt;&lt; "Enter your age: ";
    std::cin &gt;&gt; age; // Input
    std::cout &lt;&lt; "You are " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; std::endl;
    return 0;
}</code></pre>

    <p>
      Explanation:<br/>
      <code>#include &lt;iostream&gt;</code> includes standard input/output library.<br/>
      <code>std::cout</code> prints output to the console.<br/>
      <code>std::cin</code> reads input from the user.<br/>
      <code>int main()</code> is the program's entry point.<br/>
      <code>return 0;</code> signals successful program termination.
    </p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>C++ is a powerful, versatile programming language used for both low-level and high-level programming.</li>
      <li>A compiler translates C++ code into executable machine code.</li>
      <li>Basic input/output is performed with <code>std::cout</code> and <code>std::cin</code>.</li>
      <li>C++ supports object-oriented programming, which will be explored further.</li>
    </ul>
  `,
          code: `
#include <iostream> // For input/output

int main() {
    std::cout << "Hello, C++ World!" << std::endl; // Output
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age; // Input
    std::cout << "You are " << age << " years old." << std::endl;
    return 0;
}
  `,
          explanation: `
  - The program starts execution in the main() function.
  - std::cout is used to display messages on the screen.
  - std::cin allows input from the user.
  - Program ends by returning 0 indicating successful run.
  `,
          task: `
  Task:
  1. Install a C++ compiler like G++ or use an IDE with built-in support.
  2. Write the provided "Hello, C++ World!" program.
  3. Compile the program using your compiler.
  4. Run the executable and enter your age when prompted.
  5. Observe the output confirming your input.
  6. Explore modifying the program to ask for other inputs.
  `
        },
        {
          title: 'C++ as a Better C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Core C Concepts in C++</h2>
    <p class="text-gray-700 mb-4">Before exploring C++ enhancements, here’s a quick recap of basic C concepts used in C++:</p>
    
    <h3 class="font-semibold">1. Data Types</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Fundamental types: <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code></li>
      <li>Boolean type: <code>bool</code> (added in C++)</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int age = 25;
float salary = 4500.50;
char grade = 'A';
bool isStudent = true;
</code></pre>
    
    <h3 class="font-semibold">2. Operators</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Arithmetic: <code>+ - * / %</code></li>
      <li>Assignment: <code>= += -= *= /= %=
      </code></li>
      <li>Comparison: <code>== != > < >= <=</code></li>
      <li>Logical: <code>&& || !</code></li>
    </ul>

    <h3 class="font-semibold">3. Control Flow</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Conditionals: <code>if</code>, <code>else if</code>, <code>else</code>, <code>switch</code></li>
      <li>Loops: <code>for</code>, <code>while</code>, <code>do-while</code></li>
    </ul>

    <h3 class="font-semibold">4. Functions</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int add(int a, int b) {
    return a + b;
}
</code></pre>

    <h3 class="font-semibold">5. Arrays</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int numbers[5] = {1, 2, 3, 4, 5};
</code></pre>

    <h3 class="font-semibold">6. Pointers</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int x = 10;
int* ptr = &x; // pointer to x
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. C++ Specific Enhancements</h2>
    
    <h3 class="font-semibold">1. Comments</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Single-line: <code>// comment</code></li>
      <li>Multi-line: <code>/* comment */</code></li>
    </ul>
    
    <h3 class="font-semibold">2. Boolean Type</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>bool isPassed = true;
</code></pre>
    <p>Unlike C, C++ adds explicit <code>bool</code> type instead of using integers for true/false.</p>
    
    <h3 class="font-semibold">3. const Qualifier</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const int MAX = 100;
</code></pre>
    <p>Prevents variable modification and is enhanced in C++ to apply to pointers, references, and function parameters, encouraging safer code.</p>
    
    <h3 class="font-semibold">4. Declaration Anywhere</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int main() {
    int x = 5;
    std::cout << x << std::endl;
    int y = x + 10; // Allowed anywhere in block
}
</code></pre>
    <p>C++ allows declaring variables anywhere inside a block, unlike C where they must be declared at block start.</p>
    
    <h3 class="font-semibold">5. Object-Oriented Programming (OOP) Introduction</h3>
    <p>C++ introduces classes and objects that enable encapsulation and code reuse.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    std::string name;
    int age;
};

int main() {
    Student s1;
    s1.name = "Bilal";
    s1.age = 20;
    std::cout << s1.name << " is " << s1.age << " years old." << std::endl;
}
</code></pre>
    
    <h3 class="font-semibold">6. this Pointer</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    std::string name;
    void setName(std::string name) {
        this->name = name; // distinguish member from parameter
    }
};
</code></pre>
    
    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>C++ retains all C features while adding:</li>
      <ul>
        <li><code>bool</code> type</li>
        <li>More powerful <code>const</code> qualifier</li>
        <li>Flexible variable declaration location</li>
        <li>Object-Oriented Programming features (classes, objects, <code>this</code> pointer)</li>
      </ul>
      <li>These enhancements help write safer, modular, and maintainable code.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int age;
    void setName(std::string name) {
        this->name = name;
    }
};

int main() {
    int age = 25;
    bool isStudent = true;

    Student s1;
    s1.setName("Bilal");
    s1.age = 20;

    std::cout << "Age: " << age << std::endl;
    std::cout << "Is student? " << (isStudent ? "Yes" : "No") << std::endl;
    std::cout << s1.name << " is " << s1.age << " years old." << std::endl;

    return 0;
}
  `,
          explanation: `
  - C++ builds upon C's foundation adding new features for better programming practices.
  - Boolean type improves readability and correctness over int-based logic in C.
  - The const qualifier enforces immutability to avoid bugs.
  - Variables can be declared anywhere for better scoped and modular code.
  - Classes and the this pointer enable OOP concepts, improving code design and reuse.
  `,
          task: `
  Task:
  1. Practice declaring variables of various data types, including bool.
  2. Write simple functions and arrays like in C.
  3. Define a class with member variables and methods.
  4. Use the this pointer inside class methods.
  5. Explore const qualifier in different contexts.
  6. Compare C style code with enhanced C++ style for clarity and safety.
  `
        },
        {
          title: 'Class Core Concepts in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Constructors</h2>
    <p class="text-gray-700 mb-4">
      A constructor is a special member function called automatically when an object is created.
      It initializes data members and has no return type, not even <code>void</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class Student {
public:
    string name;
    int age;

    // Constructor
    Student(string n, int a) {
        name = n;
        age = a;
    }
};

int main() {
    Student s1("Bilal", 20);
    cout &lt;&lt; s1.name &lt;&lt; " is " &lt;&lt; s1.age &lt;&lt; " years old." &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Destructors</h2>
    <p class="text-gray-700 mb-4">
      A destructor is called automatically when an object goes out of scope.
      It is used to release resources like memory or file handles.
      The syntax is <code>~ClassName()</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    string name;
    ~Student() {
        cout &lt;&lt; "Destructor called for " &lt;&lt; name &lt;&lt; endl;
    }
};

int main() {
    Student s1;
    s1.name = "Bilal";
}
</code></pre>
    <p>Output: Destructor called automatically at the end of <code>main()</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Function Overloading (Compile-time Polymorphism)</h2>
    <p>
      Function overloading allows multiple functions with the same name but different parameters.
      The compiler decides which function to call based on arguments.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Calculator {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
};

int main() {
    Calculator calc;
    cout &lt;&lt; calc.add(5, 10) &lt;&lt; endl;      // calls int version
    cout &lt;&lt; calc.add(5.5, 10.5) &lt;&lt; endl;  // calls double version
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Default Arguments</h2>
    <p>Functions can have default values for parameters.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>void greet(string name = "Guest") {
    cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; endl;
}

int main() {
    greet();          // Hello, Guest
    greet("Bilal");   // Hello, Bilal
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Scope Resolution Operator ::</h2>
    <p>
      The scope resolution operator is used to access class members or global variables,
      especially when variable names clash.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

int value = 100; // global variable

class Test {
public:
    int value;
    void show() {
        value = 50;
        cout &lt;&lt; "Local value: " &lt;&lt; value &lt;&lt; endl;
        cout &lt;&lt; "Global value: " &lt;&lt; ::value &lt;&lt; endl;
    }
};

int main() {
    Test t;
    t.show();
}
</code></pre>
    <p>Output:
      <br>Local value: 50
      <br>Global value: 100
    </p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Constructor initializes objects automatically on creation.</li>
      <li>Destructor performs cleanup before an object is destroyed.</li>
      <li>Function overloading enables same function name with different parameters.</li>
      <li>Default arguments provide optional parameters with default values.</li>
      <li>Scope resolution operator <code>::</code> differentiates between local and global members.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int age;

    // Constructor
    Student(string n, int a) {
        name = n;
        age = a;
    }

    // Destructor
    ~Student() {
        cout << "Destructor called for " << name << endl;
    }
};

class Calculator {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
};

void greet(string name = "Guest") {
    cout << "Hello, " << name << endl;
}

int value = 100; // global variable

class Test {
public:
    int value;
    void show() {
        value = 50;
        cout << "Local value: " << value << endl;
        cout << "Global value: " << ::value << endl;
    }
};

int main() {
    Student s1("Bilal", 20);
    cout << s1.name << " is " << s1.age << " years old." << endl;

    Calculator calc;
    cout << calc.add(5, 10) << endl;      // int version
    cout << calc.add(5.5, 10.5) << endl;  // double version

    greet();         // default argument
    greet("Bilal");  // passed argument

    Test t;
    t.show();

    return 0;
}
  `,
          explanation: `
  - Constructors initialize objects and are called automatically when an object is created.
  - Destructors are called automatically when objects go out of scope to clean up resources.
  - Function overloading provides multiple functions with the same name differentiated by parameters.
  - Default arguments make function parameters optional with default values.
  - Scope resolution operator (::) is used to distinguish variables with the same name in different scopes.
  `,
          task: `
  Task:
  1. Create a class with a constructor and destructor and observe automatic calls.
  2. Implement function overloading with different parameter sets.
  3. Write a function with default parameters and call it with and without arguments.
  4. Use the scope resolution operator to access global vs local variables with same name.
  5. Understand these core OOP and language features as foundational C++ concepts.
  `
        },
        {
          title: 'Dynamic Memory in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. new and delete Operators</h2>
    
    <h3 class="font-semibold">1. new Operator</h3>
    <p>
      Allocates memory on the heap for variables or arrays and returns a pointer to that memory.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int* ptr = new int; // allocate memory for single int
    *ptr = 25;
    cout &lt;&lt; *ptr &lt;&lt; endl; // Output: 25

    int* arr = new int[5]; // allocate array of 5 integers
    for (int i = 0; i &lt; 5; i++) arr[i] = i + 1;

    for (int i = 0; i &lt; 5; i++) cout &lt;&lt; arr[i] &lt;&lt; " "; // Output: 1 2 3 4 5
}
</code></pre>
    
    <h3 class="font-semibold">2. delete Operator</h3>
    <p>
      Frees memory allocated by <code>new</code>.
      Use <code>delete</code> for single variables and <code>delete[]</code> for arrays.
    </p>
    <ul class="list-disc list-inside mb-4">
      <li><code>delete ptr;</code> &mdash; for single variable</li>
      <li><code>delete[] arr;</code> &mdash; for arrays</li>
    </ul>
    <p>
      Proper use prevents memory leaks by releasing allocated heap memory.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. new vs malloc (C)</h2>
    <table class="table-auto w-full mb-4 text-gray-800">
      <thead>
        <tr>
          <th class="border px-4 py-2">Feature</th>
          <th class="border px-4 py-2">C (malloc)</th>
          <th class="border px-4 py-2">C++ (new)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border px-4 py-2">Type Safety</td><td class="border px-4 py-2">No (needs casting)</td><td class="border px-4 py-2">Yes (returns correct type)</td></tr>
        <tr><td class="border px-4 py-2">Constructor Call</td><td class="border px-4 py-2">No</td><td class="border px-4 py-2">Yes (for objects)</td></tr>
        <tr><td class="border px-4 py-2">Free Memory</td><td class="border px-4 py-2"><code>free()</code></td><td class="border px-4 py-2"><code>delete / delete[]</code></td></tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. RAII (Resource Acquisition Is Initialization)</h2>
    <p>
      RAII is a core C++ principle that ties resource management to object lifetime:
      the resource is acquired in the constructor and released in the destructor, ensuring automatic cleanup even on exceptions.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class Demo {
    int* data;
public:
    Demo(int size) {
        data = new int[size]; // acquire resource
        cout &lt;&lt; "Memory allocated\\n";
    }
    ~Demo() {
        delete[] data;       // release resource
        cout &lt;&lt; "Memory released\\n";
    }
};

int main() {
    Demo obj(5); // constructor allocates memory
} // destructor automatically frees memory
</code></pre>
    <p>Output:<br/>Memory allocated<br/>Memory released</p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>new</code> allocates memory on the heap and returns a typed pointer.</li>
      <li><code>delete</code> frees allocated memory to avoid leaks.</li>
      <li>C++ <code>new</code> is type-safe and invokes constructors for objects.</li>
      <li>RAII ensures automatic resource management via constructors/destructors.</li>
      <li>Dynamic memory is essential for flexible, efficient C++ programs.</li>
    </ul>
  `,
          code: `
#include <iostream>
using namespace std;

int main() {
    // Single int allocation
    int* ptr = new int;
    *ptr = 25;
    cout << *ptr << endl;

    // Array allocation
    int* arr = new int[5];
    for(int i = 0; i < 5; i++)
        arr[i] = i + 1;

    for(int i = 0; i < 5; i++)
        cout << arr[i] << " ";
    cout << endl;

    // Free memory
    delete ptr;
    delete[] arr;

    return 0;
}

class Demo {
    int* data;
public:
    Demo(int size) {
        data = new int[size];
        cout << "Memory allocated" << endl;
    }
    ~Demo() {
        delete[] data;
        cout << "Memory released" << endl;
    }
};

int main() {
    Demo obj(5);
    return 0;
}
  `,
          explanation: `
  - Use <code>new</code> to allocate memory dynamically on the heap; it returns a pointer of appropriate type.
  - Always release such memory with <code>delete</code> (or <code>delete[]</code> for arrays) to prevent memory leaks.
  - Unlike C's <code>malloc</code>, C++ <code>new</code> calls constructors and is type-safe.
  - RAII uses constructors to allocate and destructors to free resources automatically, guaranteeing cleanup.
  `,
          task: `
  Task:
  1. Use <code>new</code> to allocate and initialize single variables and arrays dynamically.
  2. Practice freeing those allocations with <code>delete</code> and <code>delete[]</code>.
  3. Implement a class demonstrating RAII by acquiring resources in constructor and freeing in destructor.
  4. Observe automatic resource release when object goes out of scope.
  5. Understand difference between <code>new</code> and <code>malloc</code>.
  `
        },
        {
          title: 'References in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Understanding References (&)</h2>
    <p>
      References are aliases for variables. They allow referring to an existing variable by a new name without copying its value.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 10;
    int& ref = x; // ref is a reference (alias) to x

    cout &lt;&lt; x &lt;&lt; endl;   // 10
    cout &lt;&lt; ref &lt;&lt; endl; // 10

    ref = 20;            // changes x as well
    cout &lt;&lt; x &lt;&lt; endl;   // 20
}
</code></pre>
    <p>
      Explanation:<br/>
      The reference <code>ref</code> does not occupy separate memory. Changing <code>ref</code> changes original variable <code>x</code>.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Differences Between References and Pointers</h2>
    <table class="table-auto w-full mb-4 text-gray-800 border border-collapse border-gray-400">
      <thead>
        <tr>
          <th class="border px-4 py-2">Feature</th>
          <th class="border px-4 py-2">Reference (&)</th>
          <th class="border px-4 py-2">Pointer (*)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Null value</td>
          <td class="border px-4 py-2">Cannot be null</td>
          <td class="border px-4 py-2">Can be null</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Reassignment</td>
          <td class="border px-4 py-2">Cannot be reassigned</td>
          <td class="border px-4 py-2">Can point to another variable</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Syntax</td>
          <td class="border px-4 py-2">Simpler: <code>ref = x</code></td>
          <td class="border px-4 py-2">Requires dereferencing: <code>*ptr</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Memory</td>
          <td class="border px-4 py-2">Alias, no new memory</td>
          <td class="border px-4 py-2">Separate memory for pointer variable</td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Pass-by-Reference vs Pass-by-Pointer</h2>
    
    <h3>1. Pass-by-Reference</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>void addOne(int& n) {
    n += 1; // modifies original variable
}

int main() {
    int a = 5;
    addOne(a);
    cout &lt;&lt; a &lt;&lt; endl; // Output: 6
}
</code></pre>

    <h3>2. Pass-by-Pointer</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>void addOne(int* n) {
    *n += 1; // modifies original variable
}

int main() {
    int a = 5;
    addOne(&a);
    cout &lt;&lt; a &lt;&lt; endl; // Output: 6
}
</code></pre>
    <p>Key Difference:<br/>
    Reference syntax is cleaner and safer.<br/>
    Pointers require manual dereferencing (<code>*</code>) and address-of (<code>&</code>) operators.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Reference in Function Return</h2>
    <p>
      Functions can return references to allow modifying variables outside the function.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int& getValue(int& x) {
    return x;
}

int main() {
    int a = 10;
    getValue(a) = 20; // modifies 'a' through reference return
    cout &lt;&lt; a &lt;&lt; endl; // Output: 20
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Reference (&) is an alias to an existing variable.</li>
      <li>References are safer and provide cleaner syntax than pointers in many cases.</li>
      <li>Common uses: function parameters (pass-by-reference) and function return values (modify caller's variable).</li>
      <li>References cannot be null or reassigned after initialization.</li>
    </ul>
  `,
          code: `
#include <iostream>
using namespace std;

void addOneByRef(int& n) {
    n += 1;
}

void addOneByPtr(int* n) {
    *n += 1;
}

int& getValue(int& x) {
    return x;
}

int main() {
    int x = 10;
    int& ref = x;

    cout << x << endl;    // 10
    cout << ref << endl;  // 10

    ref = 20;             // changes x
    cout << x << endl;    // 20

    // Pass-by-reference
    int a = 5;
    addOneByRef(a);
    cout << a << endl;    // 6

    // Pass-by-pointer
    addOneByPtr(&a);
    cout << a << endl;    // 7

    // Function returning reference
    getValue(a) = 50;      // modifies a to 50
    cout << a << endl;    // 50

    return 0;
}
  `,
          explanation: `
  - References serve as aliases to variables, providing an alternative name that refers to the same memory.
  - They provide simpler syntax compared to pointers by eliminating explicit dereferencing.
  - Passing arguments by reference allows functions to modify the caller’s variables directly.
  - Functions returning references enable callers to modify returned variables.
  - References cannot be null and must be initialized at declaration.
  `,
          task: `
  Task:
  1. Declare a reference for an existing variable and show how changing one affects the other.
  2. Write functions that modify their arguments: one using pass-by-reference, one using pass-by-pointer.
  3. Create a function returning a reference and modify a variable through the returned reference.
  4. Observe syntactic differences and advantages of references over pointers.
  5. Explore scenarios where references are preferable to pointers and vice versa.
  `
        },
        {
          title: 'The C++ Standard Library (STL)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Introduction to STL</h2>
    <p class="text-gray-700 mb-4">
      The Standard Template Library (STL) is a rich set of C++ template classes and functions that implement commonly used data structures and algorithms.
      It includes:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Containers (e.g., <code>vector</code>, <code>map</code>, <code>set</code>).</li>
      <li>Iterators for generalized element access.</li>
      <li>Algorithms for sorting, searching, and manipulation.</li>
    </ul>
    <p>STL helps reduce low-level coding efforts for arrays, sorting, and searching.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Using std::string</h2>
    <p>C++ strings are safer and easier than C-style null-terminated character arrays.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string name = "Bilal";
    cout &lt;&lt; "Name: " &lt;&lt; name &lt;&lt; endl;

    name += " Ahmed"; // concatenate
    cout &lt;&lt; name &lt;&lt; endl;

    cout &lt;&lt; "Length: " &lt;&lt; name.length() &lt;&lt; endl;
}
</code></pre>
    <p>Advantages:
      <ul>
        <li>Automatic memory management.</li>
        <li>Rich built-in functions: <code>length()</code>, <code>substr()</code>, <code>find()</code>, etc.</li>
        <li>Safe usage compared to manual char arrays.</li>
      </ul>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Using std::vector</h2>
    <p>Dynamic arrays that grow or shrink as needed.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int main() {
    vector&lt;int&gt; numbers;   // empty vector
    numbers.push_back(10);     // add elements
    numbers.push_back(20);
    numbers.push_back(30);

    for (int num : numbers) {
        cout &lt;&lt; num &lt;&lt; " ";
    }
    cout &lt;&lt; endl;

    cout &lt;&lt; "First element: " &lt;&lt; numbers[0] &lt;&lt; endl;
    cout &lt;&lt; "Size: " &lt;&lt; numbers.size() &lt;&lt; endl;

    numbers.pop_back(); // remove last element
}
</code></pre>
    <p>Advantages:
      <ul>
        <li>Dynamic resizing.</li>
        <li>Iterator and range-based loop support.</li>
        <li>Convenient member functions: <code>push_back()</code>, <code>pop_back()</code>, <code>size()</code>, <code>clear()</code>.</li>
      </ul>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Other Useful STL Containers & Algorithms</h2>
    <ul class="list-disc list-inside mb-4">
      <li><code>std::map</code> — stores key-value pairs.</li>
      <li><code>std::set</code> — stores unique elements.</li>
      <li><code>std::queue</code> — First In First Out structure.</li>
      <li><code>std::stack</code> — Last In First Out structure.</li>
      <li><code>std::algorithm</code> — provides algorithms like sorting and searching.</li>
    </ul>    
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;algorithm&gt;
#include &lt;vector&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int&gt; numbers = {5, 2, 8, 1, 9};
    sort(numbers.begin(), numbers.end());

    for(int n : numbers) cout &lt;&lt; n &lt;&lt; " "; // Output: 1 2 5 8 9
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>STL provides powerful and modern data structures and algorithms for C++.</li>
      <li><code>std::string</code> replaces unsafe C-style strings.</li>
      <li><code>std::vector</code> offers a flexible alternative to static arrays.</li>
      <li>Other containers and algorithms help simplify complex tasks safely and efficiently.</li>
      <li>Using STL is recommended for professional and modern C++ programming.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // std::string usage
    string name = "Bilal";
    cout << "Name: " << name << endl;
    name += " Ahmed";
    cout << name << endl;
    cout << "Length: " << name.length() << endl;

    // std::vector usage
    vector<int> numbers;
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);

    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    cout << "First element: " << numbers[0] << endl;
    cout << "Size: " << numbers.size() << endl;

    numbers.pop_back();

    // std::algorithm example - sorting
    vector<int> nums = {5, 2, 8, 1, 9};
    sort(nums.begin(), nums.end());

    for (int n : nums) cout << n << " "; // 1 2 5 8 9
    cout << endl;

    return 0;
}
  `,
          explanation: `
  - STL includes essential containers, iterators, and algorithms that simplify C++ programming.
  - std::string offers safer, easier string manipulation compared to char arrays.
  - std::vector is a dynamic array that automatically resizes, supporting convenient methods and range-based loops.
  - Containers like std::map, std::set, std::queue, and std::stack provide common data structures.
  - Algorithms in <algorithm> header provide sorting, searching, and other utilities.
  - Using STL leads to safer and more efficient code.
  `,
          task: `
  Task:
  1. Practice using std::string: create, concatenate, and get length.
  2. Use std::vector: add, access, iterate, and remove elements.
  3. Explore std::map and std::set for storing and managing collections.
  4. Use std::algorithm to sort and search data.
  5. Compare STL container usage with traditional C-style arrays and manual implementations.
  `
        },
      ]
    },

    intermediate: {
      title: "Intermediate Level C++ Notes",
      topics: [
        {
          title: 'The Big Four in C++ OOP',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Default Constructor</h2>
    <p>
      A constructor with no parameters. Automatically called when an object is created without arguments.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class Student {
public:
    string name;
    int age;

    // Default Constructor
    Student() {
        name = "Unknown";
        age = 0;
        cout &lt;&lt; "Default Constructor Called" &lt;&lt; endl;
    }
};

int main() {
    Student s1; // Calls default constructor
    cout &lt;&lt; s1.name &lt;&lt; ", " &lt;&lt; s1.age &lt;&lt; endl;
}
</code></pre>
    <p>Output:<br/>Default Constructor Called<br/>Unknown, 0</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Destructor</h2>
    <p>Called automatically when an object is destroyed. Used to free resources.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    ~Student() {
        cout &lt;&lt; "Destructor called" &lt;&lt; endl;
    }
};

int main() {
    Student s1;
} // Destructor automatically called here
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Copy Constructor</h2>
    <p>Initializes a new object as a copy of an existing object.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    string name;
    int age;

    Student(string n, int a) : name(n), age(a) {}

    // Copy Constructor
    Student(const Student &s) {
        name = s.name;
        age = s.age;
        cout &lt;&lt; "Copy Constructor Called" &lt;&lt; endl;
    }
};

int main() {
    Student s1("Bilal", 20);
    Student s2 = s1; // Calls copy constructor
}
</code></pre>
    <p>Output:<br/>Copy Constructor Called</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Copy Assignment Operator</h2>
    <p>Assigns one existing object to another existing object.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Student {
public:
    string name;
    int age;

    Student() {}
    Student(string n, int a) : name(n), age(a) {}

    // Copy Assignment Operator
    Student& operator=(const Student &s) {
        name = s.name;
        age = s.age;
        cout &lt;&lt; "Copy Assignment Called" &lt;&lt; endl;
        return *this;
    }
};

int main() {
    Student s1("Bilal", 20);
    Student s2;
    s2 = s1; // Calls copy assignment
}
</code></pre>
    <p>Output:<br/>Copy Assignment Called</p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>Default Constructor:</strong> Initializes objects with default values automatically.</li>
      <li><strong>Destructor:</strong> Cleans up resources when an object goes out of scope.</li>
      <li><strong>Copy Constructor:</strong> Creates a new object as a copy of an existing one.</li>
      <li><strong>Copy Assignment Operator:</strong> Assigns one existing object’s values to another existing object.</li>
      <li>Proper management of these ensures prevention of shallow copies, memory leaks, and undefined behaviors in object lifecycle management.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int age;

    // Default Constructor
    Student() {
        name = "Unknown";
        age = 0;
        cout << "Default Constructor Called" << endl;
    }

    // Parameterized Constructor
    Student(string n, int a) : name(n), age(a) {}

    // Copy Constructor
    Student(const Student &s) {
        name = s.name;
        age = s.age;
        cout << "Copy Constructor Called" << endl;
    }

    // Copy Assignment Operator
    Student& operator=(const Student &s) {
        name = s.name;
        age = s.age;
        cout << "Copy Assignment Called" << endl;
        return *this;
    }

    // Destructor
    ~Student() {
        cout << "Destructor called for " << name << endl;
    }
};

int main() {
    Student s1;                // Default constructor
    cout << s1.name << ", " << s1.age << endl;

    Student s2("Bilal", 20);   // Parameterized constructor
    Student s3 = s2;           // Copy constructor

    Student s4;
    s4 = s2;                   // Copy assignment operator

    return 0;                  // Destructors called automatically here
}
  `,
          explanation: `
  - The Big Four are special member functions essential for managing object lifecycle in C++ OOP.
  - Default constructor initializes an object without parameters.
  - Destructor frees resources automatically when object lifetime ends.
  - Copy constructor creates a new object as a copy of another.
  - Copy assignment operator copies values from one existing object to another.
  - Understanding and properly implementing these prevent issues like shallow copies and memory leaks.
  `,
          task: `
  Task:
  1. Define a class with a default and parameterized constructor.
  2. Implement copy constructor that copies member variables.
  3. Implement copy assignment operator with safe assignment and returning *this.
  4. Create objects to trigger each special function and observe program output.
  5. Experiment with object copying and assignment to understand invocation of Big Four functions.
  `
        },
        {
          title: 'The Rule of Three / Five / Zero',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. The Rule of Three</h2>
    <p>
      If your class manages dynamic resources like memory and you implement any one of these:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Destructor</li>
      <li>Copy Constructor</li>
      <li>Copy Assignment Operator</li>
    </ul>
    <p>Then you should implement all three to properly manage resources and avoid leaks or errors.</p>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class MyArray {
    int* arr;
    int size;
public:
    MyArray(int s) : size(s) {
        arr = new int[s];
        cout &lt;&lt; "Constructor called\\n";
    }

    // Destructor
    ~MyArray() {
        delete[] arr;
        cout &lt;&lt; "Destructor called\\n";
    }

    // Copy Constructor
    MyArray(const MyArray &a) {
        size = a.size;
        arr = new int[size];
        for(int i = 0; i &lt; size; i++) arr[i] = a.arr[i];
        cout &lt;&lt; "Copy Constructor called\\n";
    }

    // Copy Assignment Operator
    MyArray& operator=(const MyArray &a) {
        if(this != &a) { // prevent self-assignment
            delete[] arr;
            size = a.size;
            arr = new int[size];
            for(int i = 0; i &lt; size; i++) arr[i] = a.arr[i];
        }
        cout &lt;&lt; "Copy Assignment called\\n";
        return *this;
    }
};
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. The Rule of Five</h2>
    <p>
      With C++11, move semantics added:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Move Constructor</li>
      <li>Move Assignment Operator</li>
    </ul>
    <p>Rule of Five says if you implement any of the Big Three, also implement Move Constructor and Move Assignment Operator for efficiency.</p>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Move Constructor
MyArray(MyArray &&a) noexcept {
    arr = a.arr;
    size = a.size;
    a.arr = nullptr; // leave original empty
    cout &lt;&lt; "Move Constructor called\\n";
}

// Move Assignment Operator
MyArray& operator=(MyArray &&a) noexcept {
    if(this != &a) {
        delete[] arr;
        arr = a.arr;
        size = a.size;
        a.arr = nullptr;
    }
    cout &lt;&lt; "Move Assignment called\\n";
    return *this;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. The Rule of Zero</h2>
    <p>
      The modern C++ best practice is to avoid manual resource management by using STL and RAII-friendly types like <code>std::vector</code>, <code>std::string</code>, <code>std::unique_ptr</code>.
      This means you don't need to write destructors, copy/move constructors, or assignment operators.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;string&gt;

class MyClass {
    std::vector&lt;int&gt; data; // automatically managed memory
    std::string name;
};
</code></pre>

    <p>This approach is cleaner, safer, and less prone to errors.</p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>Rule of Three:</strong> Implement destructor, copy constructor, and copy assignment operator if managing resources manually.</li>
      <li><strong>Rule of Five:</strong> Also implement move constructor and move assignment operator (C++11+) for efficiency.</li>
      <li><strong>Rule of Zero:</strong> Prefer RAII standard types to avoid manual memory management altogether.</li>
      <li>These guidelines ensure safe, efficient object lifecycle and resource management.</li>
    </ul>
  `,
          code: `
// Complete MyArray class implementing Rule of Five
#include <iostream>
using namespace std;

class MyArray {
    int* arr;
    int size;
public:
    MyArray(int s) : size(s) {
        arr = new int[s];
        cout << "Constructor called" << endl;
    }

    ~MyArray() {
        delete[] arr;
        cout << "Destructor called" << endl;
    }

    MyArray(const MyArray &a) {
        size = a.size;
        arr = new int[size];
        for(int i=0; i<size; i++) arr[i] = a.arr[i];
        cout << "Copy Constructor called" << endl;
    }

    MyArray& operator=(const MyArray &a) {
        if(this != &a) {
            delete[] arr;
            size = a.size;
            arr = new int[size];
            for(int i=0; i<size; i++) arr[i] = a.arr[i];
        }
        cout << "Copy Assignment called" << endl;
        return *this;
    }

    // Move Constructor
    MyArray(MyArray &&a) noexcept {
        arr = a.arr;
        size = a.size;
        a.arr = nullptr;
        cout << "Move Constructor called" << endl;
    }

    // Move Assignment Operator
    MyArray& operator=(MyArray &&a) noexcept {
        if(this != &a) {
            delete[] arr;
            arr = a.arr;
            size = a.size;
            a.arr = nullptr;
        }
        cout << "Move Assignment called" << endl;
        return *this;
    }
};

int main() {
    MyArray arr1(5);
    MyArray arr2 = arr1;       // copy constructor
    MyArray arr3(10);
    arr3 = arr1;               // copy assignment
    MyArray arr4 = std::move(arr1); // move constructor
    arr3 = std::move(arr4);    // move assignment
    return 0;
}
  `,
          explanation: `
  - If your class manages resources manually, implement destructor, copy constructor, and copy assignment operator (Rule of Three).
  - With C++11, add move constructor and move assignment operator for better performance (Rule of Five).
  - The safest modern practice is to use standard library classes (vector, string, unique_ptr) that automatically manage resources, so you don't define any special functions (Rule of Zero).
  `,
          task: `
  Task:
  1. Implement a class that manages a dynamic array manually.
  2. Define destructor, copy constructor, and copy assignment operator.
  3. Extend the class to include move constructor and move assignment.
  4. Create instances and test copying and moving objects, observing output.
  5. Refactor the class to use std::vector or std::unique_ptr to follow Rule of Zero.
  `
        },
        {
          title: 'Inheritance in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Basics of Inheritance</h2>
    <p>
      Inheritance allows a class (derived) to reuse properties and methods of another class (base), forming an “is-a” relationship.
      <ul>
        <li><strong>Base Class (Parent/Superclass):</strong> The class whose features are inherited.</li>
        <li><strong>Derived Class (Child/Subclass):</strong> The class that inherits features.</li>
      </ul>
      <br/>
      Syntax:
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Base {
public:
    int x;
};

class Derived : access_specifier Base {
    // Derived class body
};
</code></pre>
    <p><code>access_specifier</code> can be <code>public</code>, <code>protected</code>, or <code>private</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Types of Inheritance</h2>

    <h3>1. Public Inheritance</h3>
    <p>Public members of base → public in derived<br/>
    Protected members of base → protected in derived<br/>
    Private members of base → not accessible directly.</p>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class Base {
public:
    int a;
protected:
    int b;
private:
    int c;
};

class Derived : public Base {
public:
    void show() {
        a = 10; // OK
        b = 20; // OK
        // c = 30; // ERROR: private in Base
        cout &lt;&lt; a &lt;&lt; " " &lt;&lt; b &lt;&lt; endl;
    }
};

int main() {
    Derived d;
    d.show();
}</code></pre>

    <h3>2. Protected Inheritance</h3>
    <p>Public members become protected in derived; protected remain protected; private are inaccessible.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Derived : protected Base {
public:
    void show() {
        a = 5;  // OK, a is now protected in Derived
    }
};</code></pre>

    <h3>3. Private Inheritance</h3>
    <p>Public and protected members become private in derived; private members remain inaccessible.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Derived : private Base {
public:
    void show() {
        a = 1;  // OK, a is private in Derived
    }
};

int main() {
    Derived d;
    // d.a = 10; // ERROR: a is private in Derived
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Inheritance supports code reuse and builds OOP hierarchies.</li>
      <li>Access specifiers (<code>public</code>, <code>protected</code>, <code>private</code>) control member visibility in derived classes.</li>
      <li>Public inheritance preserves access; protected inheritance restricts access outside derived; private inheritance hides members from outside and derived classes.</li>
      <li>Private members of base class are never directly accessible in derived classes.</li>
      <li>Inheritance supports polymorphism, method overriding, and common OOP design patterns.</li>
    </ul>
  `,
          code: `#include <iostream>
using namespace std;

class Base {
public:
    int a;
protected:
    int b;
private:
    int c;
};

class PublicDerived : public Base {
public:
    void show() {
        a = 10; // OK
        b = 20; // OK
        // c = 30; // ERROR: private
        cout << "PublicDerived: " << a << " " << b << endl;
    }
};

class ProtectedDerived : protected Base {
public:
    void show() {
        a = 5; // OK: a is protected here
        cout << "ProtectedDerived: " << a << endl;
    }
};

class PrivateDerived : private Base {
public:
    void show() {
        a = 1; // OK: a is private here
        cout << "PrivateDerived: " << a << endl;
    }
};

int main() {
    PublicDerived pd;
    pd.show();
    // pd.a = 100; // OK: a is public in PublicDerived
    
    ProtectedDerived prd;
    prd.show();
    // prd.a = 100; // ERROR: a is protected in ProtectedDerived
    
    PrivateDerived pvd;
    pvd.show();
    // pvd.a = 100; // ERROR: a is private in PrivateDerived

    return 0;
}
`,
          explanation: `
  - Inheritance enables derived classes to reuse features of base classes.
  - The access specifier in inheritance determines visibility of base members in derived classes.
  - Public inheritance preserves base class access levels.
  - Protected inheritance restricts access outside derived classes but allows derived class access.
  - Private inheritance hides base members completely outside the derived class.
  - Private members of base classes are never directly accessible by derived classes.
  - These rules facilitate encapsulation, reuse, and design in object-oriented programming.
  `,
          task: `
  Task:
  1. Create base and derived classes using public, protected, and private inheritance.
  2. Access base class members in derived and outside the class to test visibility.
  3. Observe compiler errors for inaccessible members.
  4. Understand how inheritance and access control enforce encapsulation.
  5. Explore overriding base class methods in derived classes for polymorphism.
  `
        },
        {
          title: 'Polymorphism in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Polymorphism?</h2>
    <p>
      Polymorphism means “many forms”. In C++, it allows a single interface to represent different types.<br/>
      Two main types:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Compile-time Polymorphism (Function Overloading, Operator Overloading)</li>
      <li>Run-time Polymorphism (Virtual Functions, Inheritance)</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Virtual Functions and Runtime Polymorphism</h2>
    <p>
      Virtual functions allow derived classes to override base class functions. Achieved internally via vtable for dynamic dispatch.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

class Base {
public:
    virtual void show() { // virtual keyword
        cout &lt;&lt; "Base class function\\n";
    }
};

class Derived : public Base {
public:
    void show() override {
        cout &lt;&lt; "Derived class function\\n";
    }
};

int main() {
    Base* ptr;
    Derived d;
    ptr = &d;
    ptr-&gt;show(); // Calls Derived's show() due to virtual
}
</code></pre>
    <p>Without <code>virtual</code>, it would call Base's function.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Virtual Destructors</h2>
    <p>
      Virtual destructors ensure proper cleanup of derived class objects when deleting via a base class pointer.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Base {
public:
    virtual ~Base() { cout &lt;&lt; "Base Destructor\\n"; }
};

class Derived : public Base {
public:
    ~Derived() { cout &lt;&lt; "Derived Destructor\\n"; }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // Both destructors called correctly
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Function Overriding (Runtime Polymorphism)</h2>
    <p>
      Derived classes provide their own implementation of base class functions with the same signature, enabling dynamic behavior.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Abstract Classes and Pure Virtual Functions</h2>
    <p>
      Abstract classes can't be instantiated and contain pure virtual functions (<code>= 0</code>).
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Shape {
public:
    virtual void draw() = 0; // pure virtual
};

class Circle : public Shape {
public:
    void draw() override { cout &lt;&lt; "Drawing Circle\\n"; }
};

int main() {
    // Shape s; // ERROR: abstract class
    Circle c;
    c.draw();
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Multiple Inheritance and Diamond Problem</h2>
    <p>
      Multiple inheritance occurs when a class inherits from more than one base class.<br/>
      The Diamond Problem arises when two base classes inherit from the same common base causing ambiguity.<br/>
      Solved with virtual inheritance.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class A { public: void show() { cout &lt;&lt; "A\\n"; } };
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};

int main() {
    D obj;
    obj.show(); // No ambiguity due to virtual inheritance
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Polymorphism allows dynamic behavior at runtime via virtual functions.</li>
      <li>Virtual destructors ensure correct resource cleanup through base pointers.</li>
      <li>Overriding enables derived classes to customize behavior.</li>
      <li>Abstract classes enforce implementation of key methods in derived classes.</li>
      <li>Diamond problem is solved using virtual inheritance.</li>
    </ul>
  `,
          code: `
#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() {
        cout << "Base class function" << endl;
    }
    virtual ~Base() {
        cout << "Base Destructor" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived class function" << endl;
    }
    ~Derived() {
        cout << "Derived Destructor" << endl;
    }
};

class Shape {
public:
    virtual void draw() = 0; // Pure virtual
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

class A {
public:
    void show() {
        cout << "A" << endl;
    }
};

class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};

int main() {
    Base* ptr = new Derived();
    ptr->show();  // Runtime polymorphism calls Derived::show()
    delete ptr;   // Calls Derived and Base destructors correctly

    Circle c;
    c.draw();     // Draw Circle (abstract class demo)

    D obj;
    obj.show();   // Diamond problem resolved by virtual inheritance

    return 0;
}
  `,
          explanation: `
  - Polymorphism in C++ lets functions behave differently based on object type at runtime.
  - Virtual functions enable dynamic dispatch through base class pointers or references.
  - Virtual destructors avoid resource leaks in inheritance hierarchies.
  - Abstract classes force derived classes to provide implementations for core methods.
  - Multiple inheritance can cause ambiguity; virtual inheritance fixes the diamond problem.
  `,
          task: `
  Task:
  1. Create base and derived classes with virtual functions and override methods.
  2. Use base class pointers to call derived methods at runtime.
  3. Implement virtual destructors and observe correct cleanup.
  4. Define abstract classes with pure virtual functions and derive concrete classes.
  5. Experiment with multiple inheritance and resolve diamond problem using virtual inheritance.
  `
        },
        {
          title: 'Templates in C++ (Generic Programming)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Function Templates</h2>
    <p>
      Function templates allow defining a single function that works with multiple data types.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

// Function template
template &lt;typename T&gt;
T add(T a, T b) {
    return a + b;
}

int main() {
    cout &lt;&lt; add&lt;int&gt;(5, 10) &lt;&lt; endl;       // Output: 15
    cout &lt;&lt; add&lt;double&gt;(5.5, 2.3) &lt;&lt; endl; // Output: 7.8
}
</code></pre>
    <p><strong>Explanation:</strong> <code>T</code> is a placeholder type. The compiler generates the correct function for each type used.</p>
    
    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Class Templates</h2>
    <p>
      Class templates define generic classes usable with any data type.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

template &lt;typename T&gt;
class Box {
    T content;
public:
    void setContent(T c) { content = c; }
    T getContent() { return content; }
};

int main() {
    Box&lt;int&gt; intBox;
    intBox.setContent(123);
    cout &lt;&lt; intBox.getContent() &lt;&lt; endl;      // Output: 123

    Box&lt;string&gt; strBox;
    strBox.setContent("Hello");
    cout &lt;&lt; strBox.getContent() &lt;&lt; endl;     // Output: Hello
}
</code></pre>
    <p><strong>Explanation:</strong> Template type <code>T</code> makes the class flexible for any data type.</p>
    
    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Template Specialization</h2>
    <p>
      Specialization allows customizing template behavior for specific types.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

template &lt;typename T&gt;
class Printer {
public:
    void print(T value) { cout &lt;&lt; value &lt;&lt; endl; }
};

// Specialization for bool
template &lt;&gt;
class Printer&lt;bool&gt; {
public:
    void print(bool value) {
        cout &lt;&lt; (value ? "True" : "False") &lt;&lt; endl;
    }
};

int main() {
    Printer&lt;int&gt; p1;
    p1.print(123);   // Output: 123

    Printer&lt;bool&gt; p2;
    p2.print(true);  // Output: True
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Templates reduce code duplication and promote reusability.</li>
      <li>Function templates create generic functions working with any type.</li>
      <li>Class templates create generic classes reusable for many data types.</li>
      <li>Template specialization tailors implementations for specific types.</li>
      <li>STL containers like <code>vector&lt;T&gt;</code> and <code>map&lt;K,V&gt;</code> heavily use templates internally.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>
using namespace std;

// Function template example
template <typename T>
T add(T a, T b) {
    return a + b;
}

// Class template example
template <typename T>
class Box {
    T content;
public:
    void setContent(T c) { content = c; }
    T getContent() { return content; }
};

// Template specialization example
template <typename T>
class Printer {
public:
    void print(T value) { cout << value << endl; }
};

template <>
class Printer<bool> {
public:
    void print(bool value) {
        cout << (value ? "True" : "False") << endl;
    }
};

int main() {
    // Using function template
    cout << add<int>(5, 10) << endl;        // 15
    cout << add<double>(5.5, 2.3) << endl;  // 7.8

    // Using class template
    Box<int> intBox;
    intBox.setContent(123);
    cout << intBox.getContent() << endl;    // 123

    Box<string> strBox;
    strBox.setContent("Hello");
    cout << strBox.getContent() << endl;    // Hello

    // Using template specialization
    Printer<int> p1;
    p1.print(123);                           // 123

    Printer<bool> p2;
    p2.print(true);                          // True

    return 0;
}
  `,
          explanation: `
  - Templates allow writing generic and reusable code in C++.
  - Function templates generate code for each type used at compile-time.
  - Class templates create flexible data structures usable with different types.
  - Specialization enables customizing template behavior for particular data types.
  - Templates form the backbone of STL's generic containers and algorithms.
  `,
          task: `
  Task:
  1. Write a function template to perform operations like addition or comparison.
  2. Create a class template representing a container or simple data holder.
  3. Implement template specialization for at least one specific data type.
  4. Use templates with built-in types (int, double) and user-defined types (classes).
  5. Explore STL containers (vector, map) to see templates in action.
  `
        },
        {
          title: 'STL Containers & Iterators in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Sequence Containers</h2>
    <p>These containers store data in a linear order.</p>

    <h3>1. std::vector – Dynamic array</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v = {1, 2, 3};
    v.push_back(4); // add element
    for(int n : v) cout &lt;&lt; n &lt;&lt; " "; // Output: 1 2 3 4
}
</code></pre>

    <h3>2. std::list – Doubly linked list</h3>
    <p>Supports efficient insertions/deletions anywhere.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;list&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    list&lt;int&gt; l = {1, 2, 3};
    l.push_front(0);
    for(int n : l) cout &lt;&lt; n &lt;&lt; " "; // Output: 0 1 2 3
}
</code></pre>

    <h3>3. std::deque – Double-ended queue</h3>
    <p>Allows efficient insertion/deletion at both front and back.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Associative Containers</h2>
    <p>Store data as key-value pairs or unique keys, automatically sorted.</p>

    <h3>1. std::set</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;set&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    set&lt;int&gt; s = {3, 1, 2, 3};
    for(int n : s) cout &lt;&lt; n &lt;&lt; " "; // Output: 1 2 3 (unique, sorted)
}
</code></pre>

    <h3>2. std::map</h3>
    <p>Stores sorted key-value pairs.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;map&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    map&lt;string,int&gt; m;
    m["Alice"] = 25;
    m["Bob"] = 30;
    for(auto &p : m) cout &lt;&lt; p.first &lt;&lt; ":" &lt;&lt; p.second &lt;&lt; " "; // Output: Alice:25 Bob:30
}
</code></pre>

    <p>Multiset and Multimap allow duplicate keys.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Unordered Containers (C++11)</h2>
    <p>Hash-based containers with no sorting but faster average access time:</p>
    <ul>
      <li>std::unordered_set</li>
      <li>std::unordered_map</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Iterators</h2>
    <p>Objects that point to elements inside containers and bridge containers with algorithms.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v = {10, 20, 30};
    for(vector&lt;int&gt;::iterator it = v.begin(); it != v.end(); ++it) {
        cout &lt;&lt; *it &lt;&lt; " "; // Output: 10 20 30
    }
}
</code></pre>

    <p>Common iterator types:</p>
    <ul>
      <li><code>begin(), end()</code> – range begin and end</li>
      <li><code>rbegin(), rend()</code> – reverse iterators</li>
      <li><code>cbegin(), cend()</code> – constant iterators</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Sequence Containers: std::vector, std::list, std::deque store data linearly.</li>
      <li>Associative Containers: std::set, std::map, std::multiset, std::multimap store sorted data with keys.</li>
      <li>Unordered Containers: std::unordered_set, std::unordered_map use hashing for faster access without sorting.</li>
      <li>Iterators provide a uniform way to traverse containers, enabling generic algorithms.</li>
      <li>STL containers and iterators simplify data management, enhance safety, and reduce coding effort.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <vector>
#include <list>
#include <set>
#include <map>
using namespace std;

int main() {
    // Vector example
    vector<int> v = {1, 2, 3};
    v.push_back(4);
    for(int n : v) cout << n << " ";  // 1 2 3 4
    cout << endl;

    // List example
    list<int> l = {1, 2, 3};
    l.push_front(0);
    for(int n : l) cout << n << " ";  // 0 1 2 3
    cout << endl;

    // Set example
    set<int> s = {3, 1, 2, 3};
    for(int n : s) cout << n << " ";  // 1 2 3
    cout << endl;

    // Map example
    map<string,int> m;
    m["Alice"] = 25;
    m["Bob"] = 30;
    for(auto &p : m) cout << p.first << ":" << p.second << " ";  // Alice:25 Bob:30
    cout << endl;

    // Iterator example
    for(vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";  // 1 2 3 4
    }
    cout << endl;

    return 0;
}
  `,
          explanation: `
  - STL provides various container classes for storing data efficiently.
  - Sequence containers (vector, list, deque) maintain order and allow linear traversal.
  - Associative containers (set, map) store sorted data, enabling fast lookup by keys.
  - Unordered containers (unordered_set, unordered_map) use hashing for faster access but do not sort.
  - Iterators are generalized pointers used to traverse container elements, and are essential in STL algorithms.
  `,
          task: `
  Task:
  1. Use std::vector to add, access, and iterate elements.
  2. Explore std::list for efficient insertion/deletion at front.
  3. Create std::set and std::map to store sorted unique elements and key-value pairs.
  4. Practice iterating containers with iterators and range-based loops.
  5. Try unordered_set or unordered_map for hash based lookups (C++11+).
  6. Understand differences between container types and when to use each.
  `
        },
        {
          title: 'STL Algorithms & Lambda Expressions',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Common STL Algorithms</h2>
    <p>STL algorithms operate on containers to write concise and efficient code. Include <code>&lt;algorithm&gt;</code> header.</p>
    
    <h3>1. std::sort</h3>
    <p>Sorts elements in ascending order by default; custom order possible.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v = {3,1,4,2};
    sort(v.begin(), v.end()); // ascending
    for(int n : v) cout &lt;&lt; n &lt;&lt; " "; // 1 2 3 4
}
</code></pre>
    <p>For descending order:<br/><code>sort(v.begin(), v.end(), greater&lt;int&gt;());</code></p>

    <h3>2. std::find</h3>
    <p>Finds an element in a container.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>vector&lt;int&gt; v = {1,2,3,4};
auto it = find(v.begin(), v.end(), 3);
if(it != v.end()) cout &lt;&lt; "Found at index " &lt;&lt; distance(v.begin(), it) &lt;&lt; endl;
</code></pre>

    <h3>3. std::copy</h3>
    <p>Copies elements from one container to another.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>vector&lt;int&gt; v1 = {1,2,3}, v2(3);
copy(v1.begin(), v1.end(), v2.begin());
</code></pre>

    <h3>4. std::for_each</h3>
    <p>Applies a function to every element.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>vector&lt;int&gt; v = {1,2,3};
for_each(v.begin(), v.end(), [](int x){ cout &lt;&lt; x*x &lt;&lt; " "; }); // Lambda used
</code></pre>
    
    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Lambda Expressions (C++11)</h2>
    <p>Anonymous inline functions for quick use.</p>
    <p>Syntax: <code>[capture](parameters) -&gt; return_type { body }</code></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v = {1,2,3,4};

    // Lambda to print
    for_each(v.begin(), v.end(), [](int x){ cout &lt;&lt; x &lt;&lt; " "; });
    cout &lt;&lt; endl;

    // Lambda with capture
    int factor = 10;
    for_each(v.begin(), v.end(), [factor](int x){ cout &lt;&lt; x*factor &lt;&lt; " "; });
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>STL algorithms like <code>sort</code>, <code>find</code>, <code>copy</code>, and <code>for_each</code> simplify code by avoiding manual loops.</li>
      <li>Lambda expressions provide inline function objects without needing separate function definitions.</li>
      <li>Lambdas can capture external variables by value [=] or reference [&amp;] to use inside.</li>
      <li>Combining lambdas and STL algorithms improves code readability and efficiency.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 2};

    // Sort ascending
    sort(v.begin(), v.end());
    for(int n : v) cout << n << " ";  // 1 2 3 4
    cout << endl;

    // Sort descending
    sort(v.begin(), v.end(), greater<int>());
    for(int n : v) cout << n << " ";  // 4 3 2 1
    cout << endl;

    // Find element
    auto it = find(v.begin(), v.end(), 3);
    if(it != v.end())
        cout << "Found at index " << distance(v.begin(), it) << endl;

    // Copy container
    vector<int> v2(4);
    copy(v.begin(), v.end(), v2.begin());
    for(int n : v2) cout << n << " ";  // 4 3 2 1
    cout << endl;

    // for_each with lambda - print squares
    for_each(v.begin(), v.end(), [](int x){ cout << x * x << " "; });
    cout << endl;

    // Lambda with capture
    int factor = 5;
    for_each(v.begin(), v.end(), [factor](int x){ cout << x * factor << " "; });
    cout << endl;

    return 0;
}
  `,
          explanation: `
  - STL algorithms simplify container operations, reducing manual looping and improving clarity.
  - Lambdas let you define quick, anonymous functions inline, avoiding separate function declarations.
  - Captures enable lambdas to access local variables by value or reference.
  - These features together enhance modern C++ programming expressiveness and efficiency.
  `,
          task: `
  Task:
  1. Use std::sort to sort vectors ascending and descending.
  2. Use std::find to locate elements and report their indices.
  3. Use std::copy to copy one container’s contents into another.
  4. Apply std::for_each with lambdas to perform calculations or print.
  5. Practice lambda captures by value and by reference.
  6. Combine STL algorithms and lambdas in small practical examples.
  `
        },
        {
          title: 'Error Handling in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Basic Exception Handling</h2>
    <p>
      C++ uses <code>try</code>, <code>catch</code>, and <code>throw</code> keywords to handle runtime errors in a structured way.
    </p>
    <ul class="list-disc list-inside mb-4">
      <li><code>throw</code>: signals an error or exception.</li>
      <li><code>try</code>: block of code that may generate exceptions.</li>
      <li><code>catch</code>: block that handles exceptions.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    try {
        int x = 0;
        if (x == 0) throw "Division by zero!";
        cout &lt;&lt; 10 / x;
    } 
    catch(const char* e) {
        cout &lt;&lt; "Error: " &lt;&lt; e &lt;&lt; endl;
    }
}
</code></pre>
    <p>Output:<br/>Error: Division by zero!</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Multiple Catch Blocks</h2>
    <p>Handle different exception types separately.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>try {
    throw 10;
} 
catch(int e) {
    cout &lt;&lt; "Integer Exception: " &lt;&lt; e &lt;&lt; endl;
}
catch(double e) {
    cout &lt;&lt; "Double Exception: " &lt;&lt; e &lt;&lt; endl;
}
catch(...) { // catch-all
    cout &lt;&lt; "Unknown Exception" &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Standard Exception Classes</h2>
    <p>C++ provides predefined exceptions in <code>&lt;stdexcept&gt;</code>.</p>
    <ul>
      <li><code>std::exception</code>: base exception class</li>
      <li><code>std::runtime_error</code></li>
      <li><code>std::logic_error</code></li>
      <li><code>std::out_of_range</code></li>
      <li><code>std::invalid_argument</code></li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;stdexcept&gt;
using namespace std;

int main() {
    try {
        throw out_of_range("Index out of range!");
    } 
    catch(const out_of_range &e) {
        cout &lt;&lt; e.what() &lt;&lt; endl;
    }
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Custom Exception Classes</h2>
    <p>Create user-defined exceptions by inheriting <code>std::exception</code>.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;exception&gt;
using namespace std;

class MyException : public exception {
public:
    const char* what() const noexcept override {
        return "Custom Exception Occurred!";
    }
};

int main() {
    try {
        throw MyException();
    } 
    catch(const MyException &e) {
        cout &lt;&lt; e.what() &lt;&lt; endl;
    }
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code>throw</code> to signal errors and <code>try-catch</code> blocks for handling.</li>
      <li>Multiple <code>catch</code> blocks let you handle different exception types.</li>
      <li>Standard exceptions simplify handling of common errors.</li>
      <li>Custom exceptions provide meaningful domain-specific messages.</li>
      <li>Exception handling improves program robustness and prevents crashes.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <stdexcept>
#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const noexcept override {
        return "Custom Exception Occurred!";
    }
};

int main() {
    try {
        int x = 0;
        if (x == 0) throw "Division by zero!";

        // Throw standard exception
        throw out_of_range("Index out of range!");

        // Throw custom exception
        throw MyException();
    }
    catch(const char* e) {
        cout << "Error: " << e << endl;
    }
    catch(const out_of_range &e) {
        cout << "Standard Exception: " << e.what() << endl;
    }
    catch(const MyException &e) {
        cout << "Custom Exception: " << e.what() << endl;
    }
    catch(...) {
        cout << "Unknown Exception caught" << endl;
    }

    return 0;
}
  `,
          explanation: `
  - Exception handling separates error detection from normal logic using try, throw, and catch.
  - Multiple catch blocks allow differentiated handling of error types.
  - Standard exceptions provide uniform and reusable error classes.
  - Custom exceptions extend standard ones to provide domain-specific error info.
  - Proper exception handling leads to safer and more maintainable code.
  `,
          task: `
  Task:
  1. Write code throwing a literal exception and handle it in catch.
  2. Throw and catch standard exceptions like std::out_of_range.
  3. Define and throw a custom exception class derived from std::exception.
  4. Implement multiple catch blocks handling different exception types.
  5. Test unknown exception catch-all block with generic catch(...).
  `
        },
        {
          title: 'Modern C++ Features (C++11, C++14, C++17)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Smart Pointers</h2>
    <p>
      Replace manual new/delete with automatic memory management to avoid leaks and dangling pointers.
    </p>
    <ul class="list-disc list-inside mb-4">
      <li><code>std::unique_ptr</code> — exclusive ownership, memory deleted when pointer goes out of scope.</li>
      <li><code>std::shared_ptr</code> — shared ownership, memory deleted when last pointer destroyed.</li>
      <li><code>std::weak_ptr</code> — non-owning reference to avoid cyclic dependencies.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;memory&gt;
using namespace std;

int main() {
    unique_ptr&lt;int&gt; p1 = make_unique&lt;int&gt;(10);
    cout &lt;&lt; *p1 &lt;&lt; endl; // Output: 10
    // Memory auto-deleted when p1 goes out of scope
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Move Semantics and R-Value References</h2>
    <p>
      Transfer resources efficiently instead of copying large objects.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;utility&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v1 = {1, 2, 3};
    vector&lt;int&gt; v2 = move(v1); // v1 is now empty
    cout &lt;&lt; "v2 size: " &lt;&lt; v2.size() &lt;&lt; endl; // 3
    cout &lt;&lt; "v1 size: " &lt;&lt; v1.size() &lt;&lt; endl; // 0
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. auto Keyword</h2>
    <p>
      Compiler deduces variable type automatically.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>auto x = 10;      // int
auto y = 3.14;    // double
auto z = "Hello"; // const char*
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Range-Based for Loops</h2>
    <p>Simplifies iteration over containers.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v = {1, 2, 3};
    for (int n : v) {
        cout &lt;&lt; n &lt;&lt; " ";
    }
    // Output: 1 2 3
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. nullptr</h2>
    <p>
      Type-safe null pointer replacing old <code>NULL</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int* p = nullptr;
if (p == nullptr) cout &lt;&lt; "Pointer is null\\n";
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Smart pointers help avoid manual memory management errors.</li>
      <li>Move semantics improve performance by transferring ownership of large resources.</li>
      <li><code>auto</code> and range-based <code>for</code> loops simplify and clean code.</li>
      <li><code>nullptr</code> is safer and clearer than the old <code>NULL</code> macro.</li>
      <li>Modern C++ emphasizes safety, efficiency, and readability improvements.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <memory>
#include <vector>
#include <utility>
using namespace std;

int main() {
    // Smart pointer example
    unique_ptr<int> p1 = make_unique<int>(10);
    cout << *p1 << endl; // 10

    // Move semantics example
    vector<int> v1 = {1, 2, 3};
    vector<int> v2 = move(v1); // v1 becomes empty
    cout << "v2 size: " << v2.size() << endl; // 3
    cout << "v1 size: " << v1.size() << endl; // 0

    // auto keyword
    auto x = 42;        // int
    auto y = 3.14;      // double
    auto z = "Hello";   // const char*

    cout << x << " " << y << " " << z << endl;

    // Range-based for loop
    vector<int> v = {4, 5, 6};
    for(auto n : v) {
        cout << n << " ";
    }
    cout << endl;

    // nullptr
    int* ptr = nullptr;
    if(ptr == nullptr) {
        cout << "Pointer is null" << endl;
    }

    return 0;
}
  `,
          explanation: `
  - Smart pointers automate memory management to prevent leaks.
  - Move semantics allow efficient transfer of resources instead of costly copying.
  - The auto keyword lets the compiler infer variable types, reducing verbosity.
  - Range-based for loops simplify iteration over containers.
  - nullptr replaces NULL for safer and clearer null pointer expressions.
  - These modern C++ features enhance code safety, performance, and clarity.
  `,
          task: `
  Task:
  1. Use std::unique_ptr to manage a dynamically allocated int.
  2. Experiment with std::move to transfer a vector’s contents efficiently.
  3. Declare variables using auto for inferred types.
  4. Iterate over vectors using range-based for loops.
  5. Initialize pointers with nullptr and test null checks.
  6. Explore using shared_ptr and weak_ptr for advanced memory management.
  `
        },
        {
          title: 'Input/Output Streams & File Handling in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Console I/O</h2>
    <p>
      Standard input/output streams include:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li><code>cin</code>: standard input (keyboard)</li>
      <li><code>cout</code>: standard output (console)</li>
      <li><code>cerr</code>: standard error (unbuffered)</li>
      <li><code>clog</code>: logging output (buffered)</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    cout &lt;&lt; "Enter your age: ";
    cin &gt;&gt; age;                 // input
    cout &lt;&lt; "Your age is " &lt;&lt; age &lt;&lt; endl; // output
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. File I/O</h2>
    <p>Use <code>&lt;fstream&gt;</code> for file operations: <code>ifstream</code> for reading, <code>ofstream</code> for writing, and <code>fstream</code> for both.</p>

    <h3>1. Writing to a file</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;fstream&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    ofstream file("example.txt");
    if (file.is_open()) {
        file &lt;&lt; "Hello, C++ File Handling!\\n";
        file.close();
    }
}
</code></pre>

    <h3>2. Reading from a file</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;fstream&gt;
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    ifstream file("example.txt");
    string line;
    if (file.is_open()) {
        while (getline(file, line)) {
            cout &lt;&lt; line &lt;&lt; endl;
        }
        file.close();
    }
}
</code></pre>

    <h3>3. File Modes</h3>
    <p>Common modes include:</p>
    <ul>
      <li><code>ios::in</code> – read mode</li>
      <li><code>ios::out</code> – write mode</li>
      <li><code>ios::app</code> – append mode</li>
      <li><code>ios::binary</code> – binary mode</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>ofstream file("example.txt", ios::app); // append mode
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. String Streams</h2>
    <p>Use <code>&lt;sstream&gt;</code> to treat strings as streams for formatted input/output.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;sstream&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    string data = "100 200 300";
    stringstream ss(data);
    int x, y, z;
    ss &gt;&gt; x &gt;&gt; y &gt;&gt; z;
    cout &lt;&lt; x + y + z &lt;&lt; endl; // Output: 600
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>cin</code> and <code>cout</code> handle console input and output.</li>
      <li><code>ifstream</code> reads files; <code>ofstream</code> writes files.</li>
      <li><code>fstream</code> supports both reading and writing on the same file.</li>
      <li><code>stringstream</code> enables string manipulation using stream operations.</li>
      <li>Always check if files are open before reading/writing.</li>
      <li>Close files after use to flush buffers and release resources.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    // Console I/O
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "Your age is " << age << endl;

    // Writing to a file
    ofstream outfile("example.txt");
    if (outfile.is_open()) {
        outfile << "Hello, C++ File Handling!" << endl;
        outfile.close();
    }

    // Reading from a file
    ifstream infile("example.txt");
    string line;
    if (infile.is_open()) {
        while (getline(infile, line)) {
            cout << line << endl;
        }
        infile.close();
    }

    // String stream to parse numbers from string
    string data = "100 200 300";
    stringstream ss(data);
    int x, y, z;
    ss >> x >> y >> z;
    cout << "Sum: " << x + y + z << endl; // 600

    return 0;
}
  `,
          explanation: `
  - <code>cin</code> and <code>cout</code> are used for console input and output.
  - File streams <code>ifstream</code> and <code>ofstream</code> allow reading from and writing to files.
  - Check files are open successfully before reading or writing.
  - Always close files to properly flush buffers and free resources.
  - String streams (<code>stringstream</code>) help parse and format data in memory.
  `,
          task: `
  Task:
  1. Write a program that takes user input and prints it.
  2. Write strings to a file and read them back.
  3. Use stringstream to parse multiple values from a string.
  4. Practice using different file modes such as append and binary.
  5. Ensure proper error checking and closing of file streams.
  `
        },
      ]

    },
    advanced: {
      title: "Advance Level C++ Notes",
      topics: [
        {
          title: 'Modern C++ Features (C++11/14/17/20)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. C++11 / C++14 Features</h2>
    <ul class="list-disc list-inside mb-4">
      <li><code>constexpr</code> – compile-time constant expressions.<br/>
          <code>constexpr int square(int x) { return x * x; }</code><br/>
          <code>int arr[square(3)]; // array of size 9</code>
      </li>
      <li><code>decltype</code> – deduce the type of an expression.<br/>
          <code>int x = 10;</code><br/>
          <code>decltype(x) y = 20; // y is int</code>
      </li>
      <li>Variable Templates<br/>
        <pre><code>template&lt;typename T&gt;
constexpr T pi = T(3.1415926535897932385);
double area = pi&lt;double&gt; * 10 * 10;</code></pre>
      </li>
      <li>Generic Lambdas<br/>
        <pre><code>auto add = [](auto a, auto b){ return a + b; };
cout << add(5,3) << endl;       // 8
cout << add(2.5,4.5) << endl;   // 7</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. C++17 Features</h2>
    <ul class="list-disc list-inside mb-4">
      <li><code>std::optional</code> – represents optional values.<br/>
        <pre><code>#include &lt;optional&gt;
std::optional&lt;int&gt; getValue(bool flag) {
    if(flag) return 10;
    return std::nullopt;
}</code></pre>
      </li>
      <li><code>std::variant</code> – type-safe union of multiple types.<br/>
        <pre><code>#include &lt;variant&gt;
std::variant&lt;int, std::string&gt; var;
var = 10;
var = "Hello";</code></pre>
      </li>
      <li><code>std::any</code> – container to hold single values of any type.<br/>
        <pre><code>#include &lt;any&gt;
std::any a = 5;
a = std::string("Hello");</code></pre>
      </li>
      <li>Structured Bindings<br/>
        <pre><code>std::pair&lt;int,int&gt; p = {1, 2};
auto [x, y] = p; // x=1, y=2</code></pre>
      </li>
      <li><code>if constexpr</code><br/>
        <pre><code>template&lt;typename T&gt;
void printType() {
    if constexpr(std::is_integral_v&lt;T&gt;)
        std::cout << "Integral\\n";
    else
        std::cout << "Non-Integral\\n";
}</code></pre>
      </li>
      <li><code>std::filesystem</code><br/>
        <pre><code>#include &lt;filesystem&gt;
namespace fs = std::filesystem;
for(auto &p : fs::directory_iterator(".")) {
    std::cout << p.path() << std::endl;
}</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. C++20 Features</h2>
    <ul class="list-disc list-inside mb-4">
      <li>Concepts – constrain template parameters for clearer generic code.<br/>
        <pre><code>template&lt;typename T&gt;
concept Integral = std::is_integral_v&lt;T&gt;;

template&lt;Integral T&gt;
T add(T a, T b) { return a + b; }</code></pre>
      </li>
      <li>Ranges library – functional sequence operations.<br/>
        <pre><code>#include &lt;ranges&gt;
#include &lt;vector&gt;
std::vector&lt;int&gt; v = {1, 2, 3, 4};
auto even = v | std::views::filter([](int x){ return x % 2 == 0; });</code></pre>
      </li>
      <li>Coroutines – async programming with <code>co_await</code>, <code>co_yield</code>.</li>
      <li>Modules – replace traditional headers for faster compile times.</li>
      <li><code>std::format</code> – modern, type-safe string formatting.<br/>
        <pre><code>#include &lt;format&gt;
std::string s = std::format("Hello {}!", "World");</code></pre>
      </li>
      <li><code>std::span</code> – safe, non-owning views over arrays.<br/>
        <pre><code>int arr[] = {1, 2, 3, 4};
std::span&lt;int&gt; sp(arr);</code></pre>
      </li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>C++11/14 features focus on constexpr, type deduction, generic lambdas, and variable templates.</li>
      <li>C++17 adds powerful utilities like optional, variant, any, structured bindings, and filesystem support.</li>
      <li>C++20 introduces concepts, ranges, coroutines, modules, format, and span for safety, clarity, and performance.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <string>
#include <optional>
#include <variant>
#include <any>
#include <filesystem>
#include <type_traits>
#include <vector>
#include <ranges>
#include <format>

using namespace std;

constexpr int square(int x) { return x * x; }

template<typename T>
constexpr T pi = T(3.1415926535897932385);

template<typename T>
concept Integral = std::is_integral_v<T>;

template<Integral T>
T add(T a, T b) { return a + b; }

int main() {
    // C++11/14: constexpr usage
    int arr[square(3)];
    cout << "arr size: " << sizeof(arr) / sizeof(arr[0]) << endl; // 9

    // decltype usage
    int x = 10;
    decltype(x) y = 20; // y is int
    cout << "y = " << y << endl;

    // Variable template usage
    double area = pi<double> * 10 * 10;
    cout << "area = " << area << endl;

    // Generic lambda example
    auto add_lambda = [](auto a, auto b) { return a + b; };
    cout << add_lambda(5, 3) << endl;
    cout << add_lambda(2.5, 4.5) << endl;

    // C++17: optional
    optional<int> val = 42;
    if (val) cout << "Optional value: " << *val << endl;

    // C++17: variant
    variant<int, string> var;
    var = 10;
    cout << "variant int: " << get<int>(var) << endl;
    var = "Hello";
    cout << "variant string: " << get<string>(var) << endl;

    // C++17: any
    any a = 5;
    cout << "any int: " << any_cast<int>(a) << endl;
    a = string("Hello");
    cout << "any string: " << any_cast<string>(a) << endl;

    // Structured bindings
    pair<int,int> p = {1, 2};
    auto [a1, a2] = p;
    cout << "a1 = " << a1 << ", a2 = " << a2 << endl;

    // if constexpr
    printType<int>();

    // filesystem
    namespace fs = std::filesystem;
    for (auto& p : fs::directory_iterator(".")) {
        cout << p.path() << endl;
    }

    // C++20: concepts usage
    cout << "Add integral: " << add(2, 3) << endl;

    // C++20: ranges example
    vector<int> v = {1,2,3,4,5,6};
    auto even = v | views::filter([](int x){ return x %2 == 0; });
    for (int n : even) cout << n << " ";
    cout << endl;

    // C++20: format
    string s = format("Hello {}!", "World");
    cout << s << endl;

    // C++20: span
    int arr2[] = {7,8,9,10};
    span sp(arr2);
    for (int n : sp) cout << n << " ";
    cout << endl;

    return 0;
}
  `,
          explanation: `
  - C++11/14 introduced features improving compile-time computation (constexpr), type deduction (decltype), generic programming (variable templates, generic lambdas).
  - C++17 added utilities like optional, variant, any for safer and more expressive code, structured bindings for elegant unpacking, and filesystem support.
  - C++20 brought concepts to constrain templates, the ranges library for functional-style operations, coroutines for async programming, modules to speed up compilation, improved formatting, and span for safer array views.
  `,
          task: `
  Task:
  1. Write constexpr functions and use variable templates.
  2. Use decltype to deduce types in variables.
  3. Experiment with std::optional, std::variant, and std::any.
  4. Use structured bindings to unpack tuples or pairs.
  5. Define and use template concepts.
  6. Practice applying ranges and std::format for concise and readable code.
  `
        },
        {
          title: 'Advanced Templates & Metaprogramming in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Type Traits</h2>
    <p>
      Provided in <code>&lt;type_traits&gt;</code>, type traits allow compile-time inspection and manipulation of types.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;type_traits&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; boolalpha;
    cout &lt;&lt; is_integral&lt;int&gt;::value &lt;&lt; endl;          // true
    cout &lt;&lt; is_floating_point&lt;double&gt;::value &lt;&lt; endl; // true
}
</code></pre>
    <p><code>enable_if</code> conditionally enables functions:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>template&lt;typename T&gt;
typename enable_if&lt;is_integral&lt;T&gt;::value, T&gt;::type
increment(T x) { return x + 1; }
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. SFINAE (Substitution Failure Is Not An Error)</h2>
    <p>Allows selecting the correct template overload by discarding invalid substitutions at compile-time.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>template&lt;typename T&gt;
auto add(T a, T b) -&gt; typename enable_if&lt;is_arithmetic&lt;T&gt;::value, T&gt;::type {
    return a + b;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Variadic Templates</h2>
    <p>Templates that accept a variable number of template parameters and function arguments.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

template&lt;typename T&gt;
void print(T t) { cout &lt;&lt; t &lt;&lt; " "; }

template&lt;typename T, typename... Args&gt;
void print(T t, Args... args) {
    cout &lt;&lt; t &lt;&lt; " ";
    print(args...);
}

int main() {
    print(1, 2, 3, "Hello"); // Output: 1 2 3 Hello 
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Expression Templates</h2>
    <p>
      A technique for lazy evaluation of expressions at compile-time to optimize performance, widely used in numeric libraries like Eigen.
      (Complex examples beyond scope here)
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. CRTP (Curiously Recurring Template Pattern)</h2>
    <p>Static polymorphism technique where a class inherits from a template instantiated with itself.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

template&lt;typename Derived&gt;
class Base {
public:
    void interface() { static_cast&lt;Derived*&gt;(this)-&gt;implementation(); }
};

class Derived : public Base&lt;Derived&gt; {
public:
    void implementation() { cout &lt;&lt; "CRTP Example\\n"; }
};

int main() {
    Derived d;
    d.interface(); // calls Derived::implementation
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Type Traits inspect and modify types at compile-time (e.g., <code>is_integral</code>, <code>is_same</code>).</li>
      <li>SFINAE enables conditional template overload resolution.</li>
      <li>Variadic Templates allow flexible argument lists for functions and classes.</li>
      <li>Expression Templates optimize computations by lazy evaluation during compilation.</li>
      <li>CRTP implements static polymorphism, avoiding runtime overhead of virtual functions.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <type_traits>
using namespace std;

// enable_if example: only enables for integral types
template<typename T>
typename enable_if<is_integral<T>::value, T>::type
increment(T x) { return x + 1; }

// SFINAE example
template<typename T>
auto add(T a, T b) -> typename enable_if<is_arithmetic<T>::value, T>::type {
    return a + b;
}

// Variadic templates example
template<typename T>
void print(T t) { cout << t << " "; }

template<typename T, typename... Args>
void print(T t, Args... args) {
    cout << t << " ";
    print(args...);
}

// CRTP example
template<typename Derived>
class Base {
public:
    void interface() { static_cast<Derived*>(this)->implementation(); }
};

class Derived : public Base<Derived> {
public:
    void implementation() { cout << "CRTP Example" << endl; }
};

int main() {
    cout << boolalpha;
    cout << "is_integral<int>: " << is_integral<int>::value << endl;  // true
    cout << "is_floating_point<double>: " << is_floating_point<double>::value << endl;  // true

    cout << "Increment 5: " << increment(5) << endl;

    cout << "Add 2.5 + 3.5: " << add(2.5, 3.5) << endl;

    print(1, 2, 3, "Hello");

    Derived d;
    d.interface();

    return 0;
}
  `,
          explanation: `
  - Advanced templates harness compile-time power for safer, more generic code.
  - Type traits in <code>type_traits</code> let you inspect types and conditionally enable code.
  - SFINAE controls which template overloads participate in compilation.
  - Variadic templates allow functions to accept any number of parameters.
  - Expression templates optimize mathematical computations by delaying evaluation.
  - CRTP replaces virtual functions with compile-time polymorphism, improving performance.
  `,
          task: `
  Task:
  1. Use type traits to detect and constrain template functions.
  2. Write variadic template functions that print any number of arguments.
  3. Experiment with SFINAE to enable/disable templates conditionally.
  4. Implement a simple CRTP pattern and call derived functionality.
  5. Research and explore expression templates for numerical optimization.
  `
        },
        {
          title: 'Concurrency & Multithreading in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. std::thread</h2>
    <p>Create threads to run functions concurrently.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;
using namespace std;

void printNumbers() {
    for(int i = 1; i &lt;= 5; ++i) cout &lt;&lt; i &lt;&lt; " ";
}

int main() {
    thread t(printNumbers); // create thread
    t.join(); // wait for thread to finish
    cout &lt;&lt; "\\nMain thread ends\\n";
}
</code></pre>
    <p><code>join()</code> waits for thread to finish; <code>detach()</code> lets it run independently.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Mutex for Mutual Exclusion</h2>
    <p>Protect shared data to avoid race conditions using <code>std::mutex</code>.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;
#include &lt;mutex&gt;
using namespace std;

mutex mtx;
int counter = 0;

void increment() {
    for(int i = 0; i &lt; 1000; ++i) {
        lock_guard&lt;mutex&gt; lock(mtx); // locks automatically
        ++counter;
    }
}

int main() {
    thread t1(increment), t2(increment);
    t1.join(); t2.join();
    cout &lt;&lt; "Counter: " &lt;&lt; counter &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. std::async, std::future, std::promise</h2>
    <p>Manage asynchronous tasks and retrieve results.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;future&gt;
using namespace std;

int computeSum(int a, int b) {
    return a + b;
}

int main() {
    future&lt;int&gt; result = async(computeSum, 5, 10);
    cout &lt;&lt; "Sum: " &lt;&lt; result.get() &lt;&lt; endl; // waits for result
}
</code></pre>
    <p><code>promise</code> lets one thread set a value, retrieved via <code>future</code> in another.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Condition Variables</h2>
    <p>Synchronize threads to wait until a condition is true.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;
#include &lt;condition_variable&gt;
using namespace std;

mutex mtx;
condition_variable cv;
bool ready = false;

void printThread() {
    unique_lock&lt;mutex&gt; lock(mtx);
    cv.wait(lock, []{ return ready; });
    cout &lt;&lt; "Thread proceeds!\\n";
}

int main() {
    thread t(printThread);
    this_thread::sleep_for(chrono::seconds(1));
    {
        lock_guard&lt;mutex&gt; lock(mtx);
        ready = true;
    }
    cv.notify_one();
    t.join();
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Atomic Operations</h2>
    <p>Perform thread-safe operations on shared variables without locks.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;atomic&gt;
#include &lt;thread&gt;
#include &lt;iostream&gt;
using namespace std;

atomic&lt;int&gt; counter(0);

void increment() {
    for(int i = 0; i &lt; 1000; ++i) counter++;
}

int main() {
    thread t1(increment), t2(increment);
    t1.join(); t2.join();
    cout &lt;&lt; "Counter: " &lt;&lt; counter &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>std::thread</code> to create concurrent threads.</li>
      <li><code>std::mutex</code> protects shared data.</li>
      <li><code>std::async</code>, <code>std::future</code>, and <code>std::promise</code> manage async tasks and results.</li>
      <li>Condition variables synchronize threads based on conditions.</li>
      <li><code>std::atomic</code> enables lock-free thread-safe operations.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <thread>
#include <mutex>
#include <future>
#include <condition_variable>
#include <atomic>
#include <chrono>
using namespace std;

mutex mtx;
condition_variable cv;
bool ready = false;
atomic<int> atomicCounter(0);

void printNumbers() {
    for(int i=1; i<=5; ++i) cout << i << " ";
}

void incrementMutex(int& counter) {
    for(int i=0; i<1000; ++i) {
        lock_guard<mutex> lock(mtx);
        ++counter;
    }
}

void incrementAtomic() {
    for(int i=0; i<1000; ++i) {
        atomicCounter++;
    }
}

void printThread() {
    unique_lock<mutex> lock(mtx);
    cv.wait(lock, []{ return ready; });
    cout << "Thread proceeds!\n";
}

int computeSum(int a, int b) {
    return a + b;
}

int main() {
    // std::thread
    thread t1(printNumbers);
    t1.join();
    cout << "\nMain thread ends\n";

    // Mutex example
    int counter = 0;
    thread t2(incrementMutex, ref(counter));
    thread t3(incrementMutex, ref(counter));
    t2.join();
    t3.join();
    cout << "Counter with mutex: " << counter << endl;

    // Atomic example
    thread t4(incrementAtomic);
    thread t5(incrementAtomic);
    t4.join();
    t5.join();
    cout << "Atomic counter: " << atomicCounter << endl;

    // std::async example
    future<int> result = async(computeSum, 5, 10);
    cout << "Sum via async: " << result.get() << endl;

    // Condition variable example
    thread t6(printThread);
    this_thread::sleep_for(chrono::seconds(1));
    {
        lock_guard<mutex> lock(mtx);
        ready = true;
    }
    cv.notify_one();
    t6.join();

    return 0;
}
  `,
          explanation: `
  - Use <code>std::thread</code> to run functions concurrently.
  - Protect shared data with <code>std::mutex</code> and lock guards to prevent race conditions.
  - Use <code>std::atomic</code> for lock-free thread-safe increments or other operations.
  - <code>std::async</code> launches asynchronous tasks returning <code>std::future</code> results.
  - Condition variables synchronize threads, making one wait for a condition triggered by another.
  - Proper synchronization and atomicity prevent data races and undefined behavior.
  `,
          task: `
  Task:
  1. Create multiple threads executing functions concurrently.
  2. Use mutex and lock guards to safely increment shared counters.
  3. Replace mutex protection with atomic variables for performance.
  4. Use std::async to run tasks asynchronously and retrieve results.
  5. Use condition variables to coordinate thread execution.
  6. Observe output and ensure threads are correctly synchronized.
  `
        },
        {
          title: 'Advanced STL & Design Patterns in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Allocators</h2>
    <p>
      Allocators manage memory allocation for STL containers.<br/>
      Default allocator is <code>std::allocator&lt;T&gt;</code>, but custom allocators can optimize performance for specific cases.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;vector&gt;
#include &lt;memory&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    vector&lt;int, allocator&lt;int&gt;&gt; v{1, 2, 3, 4};
    for (auto n : v) cout &lt;&lt; n &lt;&lt; " ";
    cout &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Functors (Function Objects)</h2>
    <p>Objects that behave like functions by overriding <code>operator()</code>. Can hold state unlike normal functions.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;
using namespace std;

struct Square {
    void operator()(int x) { cout &lt;&lt; x*x &lt;&lt; " "; }
};

int main() {
    vector&lt;int&gt; v{1, 2, 3};
    for_each(v.begin(), v.end(), Square());
    cout &lt;&lt; endl;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Policy-Based Design</h2>
    <p>Using templates and classes to inject behaviors like container management, allocation, or comparison strategies.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>template&lt;typename T, typename Compare = std::less&lt;T&gt;&gt;
class SortedArray {
    vector&lt;T&gt; data;
    Compare comp;
public:
    void insert(T val) {
        data.push_back(val);
        sort(data.begin(), data.end(), comp);
    }
};
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Design Patterns in C++</h2>

    <h3>1. Observer Pattern</h3>
    <p>Publish-subscribe pattern for event-driven updates.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

struct Observer { virtual void notify(int data) = 0; };

struct Subject {
    vector&lt;Observer*&gt; observers;
    void addObserver(Observer* o) { observers.push_back(o); }
    void setData(int data) {
        for (auto o : observers)
            o->notify(data);
    }
};

struct ConcreteObserver : Observer {
    void notify(int data) override {
        cout &lt;&lt; "Received: " &lt;&lt; data &lt;&lt; endl;
    }
};

int main() {
    Subject s;
    ConcreteObserver o1, o2;
    s.addObserver(&o1); s.addObserver(&o2);
    s.setData(42);
}
</code></pre>

    <h3>2. Factory Pattern</h3>
    <p>Creates objects without exposing instantiation logic.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

class Shape { public: virtual void draw() = 0; };
class Circle : public Shape { void draw() override { cout &lt;&lt; "Circle\\n"; } };
class Square : public Shape { void draw() override { cout &lt;&lt; "Square\\n"; } };

class ShapeFactory {
public:
    static Shape* createShape(const string &type) {
        if (type == "circle") return new Circle();
        else if (type == "square") return new Square();
        return nullptr;
    }
};

int main() {
    Shape* s1 = ShapeFactory::createShape("circle");
    s1->draw();
    delete s1;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>Allocators:</strong> control memory allocation within containers, allowing optimization.</li>
      <li><strong>Functors:</strong> objects that behave like functions and can maintain state.</li>
      <li><strong>Policy-Based Design:</strong> inject behaviors using templates for flexible designs.</li>
      <li><strong>Observer Pattern:</strong> event-driven communication between subjects and observers.</li>
      <li><strong>Factory Pattern:</strong> encapsulate object creation logic, improving modularity and extensibility.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <vector>
#include <memory>
#include <algorithm>
#include <string>
using namespace std;

// Functor example
struct Square {
    void operator()(int x) { cout << x * x << " "; }
};

// Policy-Based Design example
template<typename T, typename Compare = std::less<T>>
class SortedArray {
    vector<T> data;
    Compare comp;
public:
    void insert(T val) {
        data.push_back(val);
        sort(data.begin(), data.end(), comp);
    }
    void print() {
        for(auto& v : data) cout << v << " ";
        cout << endl;
    }
};

// Observer Pattern
struct Observer { virtual void notify(int data) = 0; };

struct Subject {
    vector<Observer*> observers;
    void addObserver(Observer* o) { observers.push_back(o); }
    void setData(int data) {
        for(auto o : observers) o->notify(data);
    }
};

struct ConcreteObserver : Observer {
    void notify(int data) override {
        cout << "Received: " << data << endl;
    }
};

// Factory Pattern
class Shape { public: virtual void draw() = 0; };
class Circle : public Shape { void draw() override { cout << "Circle" << endl; } };
class Square : public Shape { void draw() override { cout << "Square" << endl; } };

class ShapeFactory {
public:
    static Shape* createShape(const string& type) {
        if(type == "circle") return new Circle();
        else if(type == "square") return new Square();
        return nullptr;
    }
};

int main() {
    // Allocator example
    vector<int, allocator<int>> v{1, 2, 3, 4};
    for(auto n : v) cout << n << " ";
    cout << endl;

    // Functor example
    vector<int> vf{1, 2, 3};
    for_each(vf.begin(), vf.end(), Square());
    cout << endl;

    // Policy-based design example
    SortedArray<int> sa;
    sa.insert(5);
    sa.insert(1);
    sa.insert(3);
    sa.print();

    // Observer pattern example
    Subject subject;
    ConcreteObserver o1, o2;
    subject.addObserver(&o1);
    subject.addObserver(&o2);
    subject.setData(42);

    // Factory pattern example
    Shape* shape = ShapeFactory::createShape("circle");
    shape->draw();
    delete shape;

    return 0;
}
  `,
          explanation: `
  - STL allocators allow customized memory management in containers, improving performance and control.
  - Functors behave like functions but can hold internal state, providing flexible callable objects.
  - Policy-based design uses templates to inject behaviors, making classes more reusable and adaptable.
  - The Observer pattern enables event-driven communication, where subjects notify observers about state changes.
  - The Factory pattern abstracts the creation of objects, decoupling client code from concrete implementations.
  `,
          task: `
  Task:
  1. Create a vector using a custom allocator or default allocator.
  2. Implement a functor and use it with STL algorithms like <code>for_each</code>.
  3. Use policy-based design to inject different comparison behaviors in a container.
  4. Implement the Observer pattern with multiple observers reacting to changes.
  5. Design and use a Factory to create different types of shape objects.
  `
        },
        {
          title: 'Performance & Optimization in C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Move Semantics</h2>
    <p>
      Move semantics avoid unnecessary deep copies by transferring resources from rvalue objects using rvalue references (<code>&&</code>).
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int main() {
    vector&lt;int&gt; v1 = {1, 2, 3};
    vector&lt;int&gt; v2 = std::move(v1); // moves resources from v1 to v2
    cout &lt;&lt; "v1 size: " &lt;&lt; v1.size() &lt;&lt; ", v2 size: " &lt;&lt; v2.size() &lt;&lt; endl;
}
</code></pre>
    <p><strong>Benefit:</strong> Reduces expensive copy overhead and improves performance when handling large objects.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Return Value Optimization (RVO) & Named RVO (NRVO)</h2>
    <p>
      Compiler optimization that eliminates temporary copies when returning objects from functions.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;iostream&gt;
using namespace std;

struct BigData { int arr[1000]; };

BigData createData() {
    BigData b;
    return b; // RVO/NRVO eliminates copy operation here
}

int main() {
    BigData data = createData();
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. constexpr for Compile-Time Computation</h2>
    <p>
      <code>constexpr</code> functions and values are evaluated at compile-time, reducing runtime overhead.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>constexpr int factorial(int n) {
    return n &lt;= 1 ? 1 : n * factorial(n - 1);
}
int arr[factorial(4)]; // arr size 24 computed at compile-time
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Memory Alignment & Cache Awareness</h2>
    <p>
      Use memory alignment to improve CPU cache efficiency.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct alignas(16) Vec4 {
    float x, y, z, w;
};
</code></pre>
    <p><strong>Benefit:</strong> Faster memory access and reduces costly cache misses. Pack frequently accessed data closely.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Other Optimization Tips</h2>
    <ul>
      <li>Pass objects by reference instead of by value to avoid copies.</li>
      <li>Use <code>emplace_back</code> for STL containers to construct elements in-place.</li>
      <li>Avoid unnecessary dynamic allocations (<code>new</code>/<code>delete</code>).</li>
      <li>Use <code>std::array</code> or stack allocation for small fixed-size arrays.</li>
      <li>Use inline functions for small, frequently called functions.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Move semantics avoid unnecessary copies, improving performance.</li>
      <li>RVO/NRVO eliminate redundant temporary objects.</li>
      <li><code>constexpr</code> enables computations at compile-time.</li>
      <li>Memory alignment improves cache usage and access speed.</li>
      <li>Efficient STL usage with <code>emplace_back</code> and pass-by-reference reduces overhead.</li>
    </ul>
  `,
          code: `
#include <iostream>
#include <vector>
using namespace std;

// constexpr function example
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

struct alignas(16) Vec4 {
    float x, y, z, w;
};

int main() {
    // Move semantics example
    vector<int> v1 = {1, 2, 3};
    vector<int> v2 = std::move(v1);
    cout << "v1 size: " << v1.size() << ", v2 size: " << v2.size() << endl;

    // RVO example
    struct BigData { int arr[1000]; };
    auto createData = []() {
        BigData b;
        return b; // RVO applies
    };
    BigData data = createData();

    // constexpr usage
    int arr[factorial(4)]; // size 24 at compile-time
    cout << "Array size: " << sizeof(arr) / sizeof(arr[0]) << endl;

    // Memory alignment
    Vec4 vec{1.0f, 2.0f, 3.0f, 4.0f};
    cout << "Vec4 aligned to: " << alignof(Vec4) << endl;

    return 0;
}
  `,
          explanation: `
  - Move semantics avoid costly deep copies by transferring resources via rvalue references.
  - RVO and NRVO are compiler optimizations that remove unnecessary object copying during return.
  - constexpr makes functions and values evaluated at compile-time, boosting performance.
  - Aligning data structures to CPU-friendly boundaries improves cache access speed and reduces cache misses.
  - Using efficient STL methods like emplace_back and passing objects by reference avoids overhead.
  `,
          task: `
  Task:
  1. Use std::move to move a large vector to another to avoid copy.
  2. Write constexpr functions to compute values at compile-time.
  3. Explore and experiment with RVO by returning large objects.
  4. Define aligned structs and check their alignments with alignof.
  5. Replace push_back with emplace_back in container usage.
  6. Pass large objects to functions by reference to avoid copying.
  `
        },
        {
          title: 'Tooling & Best Practices in Modern C++',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Using Debuggers</h2>
    <p>
      Debuggers like GDB (Linux/macOS) and LLDB (macOS/Clang) provide:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Step-by-step execution of code.</li>
      <li>Inspecting and modifying variables at runtime.</li>
      <li>Setting breakpoints and watchpoints to pause execution.</li>
    </ul>
    <p>Compile with debugging symbols:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>g++ -g main.cpp -o app
gdb ./app
</code></pre>
    <p>Modern editors like VS Code integrate GDB/LLDB for visual debugging.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Static Analyzers</h2>
    <p>Analyze code to find bugs, potential errors, and style violations before runtime.</p>
    <p>Popular tools:</p>
    <ul class="list-disc list-inside mb-4">
      <li>Clang-Tidy</li>
      <li>Cppcheck</li>
    </ul>
    <p>Example usage:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>cppcheck --enable=all main.cpp
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Build Systems</h2>
    <p>Manage compilation, dependencies, and large projects efficiently.</p>
    <p>Popular build systems:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>CMake:</strong> Cross-platform, widely used.</li>
      <li><strong>Bazel:</strong> Fast, scalable builds for very large codebases.</li>
    </ul>
    <p>Example basic <code>CMakeLists.txt</code> snippet:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>cmake_minimum_required(VERSION 3.15)
project(MyProject)
add_executable(MyProject main.cpp)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Dependency Management</h2>
    <p>Tools to easily manage external libraries:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>vcpkg:</strong> <code>vcpkg install boost</code></li>
      <li><strong>Conan:</strong> <code>conan install .</code></li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Code Formatting</h2>
    <p>Consistent code style improves readability and maintainability.</p>
    <p>Use tools like <code>clang-format</code>:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>clang-format -i main.cpp
</code></pre>
    <p>Configure styles with <code>.clang-format</code> file (LLVM, Google, Mozilla, etc.).</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. C++ Core Guidelines</h2>
    <p>Authoritative set of best practices by Bjarne Stroustrup & Herb Sutter focusing on:</p>
    <ul class="list-disc list-inside">
      <li>Safety: avoid undefined behavior, prefer smart pointers for memory management.</li>
      <li>Performance: avoid unnecessary copies, use move semantics.</li>
      <li>Maintainability: write readable, consistent, and well-tested code.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use debuggers for interactive, stepwise troubleshooting.</li>
      <li>Apply static analysis tools to catch bugs early and enforce modern C++ practices.</li>
      <li>Use CMake or Bazel to organize project builds and manage dependencies.</li>
      <li>Leverage dependency managers like vcpkg or Conan for external libraries.</li>
      <li>Keep code consistently formatted using clang-format.</li>
      <li>Follow the C++ Core Guidelines to write robust, efficient, and maintainable code.</li>
    </ul>

    <p class="mt-6 font-semibold">This concludes the Advanced Modern C++ Notes covering:
      <br/>Modern C++ Features (C++11/14/17/20)
      <br/>Advanced Templates & Metaprogramming
      <br/>Concurrency & Multithreading
      <br/>Advanced STL & Design Patterns
      <br/>Performance & Optimization
      <br/>Tooling & Best Practices
    </p>
  `,
          code: `
# Example Workflow for Debugging, Building, and Formatting:

// Compile with debug symbols:
g++ -g main.cpp -o app

// Run program with gdb debugger:
gdb ./app

// Run static analyzer:
cppcheck --enable=all main.cpp

// Basic CMakeLists.txt:
// cmake_minimum_required(VERSION 3.15)
// project(MyProject)
// add_executable(MyProject main.cpp)

// Format code using clang-format:
clang-format -i main.cpp
  `,
          explanation: `
  - Debuggers like GDB and LLDB allow stepwise code execution, breakpoints, and inspection.
  - Static analyzers detect bugs, uninitialized variables, memory leaks, and code style problems.
  - Build systems help organize, configure, and compile complex projects across platforms.
  - Dependency managers simplify integration of external libraries.
  - Consistent formatting tools enforce code style for readability.
  - Adhering to C++ Core Guidelines promotes safety, performance, and maintainability.
  `,
          task: `
  Task:
  1. Compile your C++ program with debug symbols (-g) and run it with GDB or LLDB.
  2. Use static analyzers like Cppcheck or Clang-Tidy on your codebase.
  3. Set up a simple CMake project and build your executable.
  4. Manage a dependency with vcpkg or Conan in your project.
  5. Format code consistently with clang-format and create a .clang-format config.
  6. Study and start applying principles from the C++ Core Guidelines in your code.
  `
        },
      ]

    }
  };

  const finalProject = {
    title: "Final Project: ATM System in C++",
    description: "Build a fully functional ATM system using C++ with features like user login, balance check, deposit, withdraw, money transfer, and transaction history.",
    requirements: [
      "Implement user login with username and PIN verification",
      "Allow users to check their account balance",
      "Implement deposit and withdraw functionalities",
      "Enable money transfer between accounts",
      "Maintain transaction history for each user",
      "Allow users to change username and PIN",
      "Use file handling to save and read user data",
      "Apply OOP concepts: classes, objects, encapsulation",
      "Validate user input to prevent errors and invalid operations",
      "Implement a menu-driven interface in console"
    ],
    structure: `ATM_CPP_Project/
├── main.cpp         (Main program with menu interface)
├── User.h           (User class definition)
├── User.cpp         (User class implementation)
├── ATM.h            (ATM class definition)
├── ATM.cpp          (ATM class implementation)
└── data/
    ├── users.txt    (Stores user credentials and info)
    └── transactions.txt (Stores transaction history)`,
    bonus: [
      "Implement PIN masking while entering password",
      "Encrypt user credentials in file",
      "Add interest calculation for savings accounts",
      "Create a mini statement feature",
      "Use advanced OOP concepts like inheritance and polymorphism"
    ]
  };


  // Function to safely render HTML
  const createMarkup = () => {
    return { __html: htmlContent[activeLevel].topics[activeTopicIndex].theory };
  };
  const createMarkup1 = () => {
    return { __html: htmlContent[activeLevel].topics[activeTopicIndex].explanation };
  };
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Get the code text
    const codeText = htmlContent[activeLevel].topics[activeTopicIndex].code;

    // Copy to clipboard
    navigator.clipboard.writeText(codeText)
      .then(() => {
        setCopied(true);
        // Reset after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className=" container mx-auto text-center mb-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg mt-28">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete C++ Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in C++ from Beginner to Advanced Level
        </p>
      </header>

      {/* Level Navigation */}
      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto container">
        {Object.keys(htmlContent).map((level) => (
          <button
            key={level}
            className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${activeLevel === level
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            onClick={() => {
              setActiveLevel(level);
              setActiveTopicIndex(0);
            }}
          >
            {htmlContent[level].title}
          </button>
        ))}
      </nav>


      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {/* Topics Sidebar */}
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            {htmlContent[activeLevel].title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {htmlContent[activeLevel].topics.map((topic, index) => (
              <button
                key={index}
                className={`p-3 text-left rounded-lg transition-all duration-300 text-sm ${activeTopicIndex === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTopicIndex(index)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Topic Content */}
        <main className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
          {htmlContent[activeLevel].topics[activeTopicIndex] && (
            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 pb-3">
                {htmlContent[activeLevel].topics[activeTopicIndex].title}
              </h2>

              {/* Theory Section */}
              <section className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📚</span>
                  Theory
                </h3>
                <div className="text-gray-600 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={createMarkup()} >
                  {/* {htmlContent[activeLevel].topics[activeTopicIndex].theory} */}
                </div>
              </section>

              {/* Code Section */}
              <section className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Code Example
                </h3>
                <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto relative">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-md text-sm transition-colors duration-200"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* Code Content */}
                  <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                    <code>{htmlContent[activeLevel].topics[activeTopicIndex].code}</code>
                  </pre>
                </div>
              </section>

              {/* Explanation Section */}
              <section className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔍</span>
                  Code Explanation
                </h3>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
                  <pre className="text-xs sm:text-sm font-mono text-gray-700 whitespace-pre-line leading-relaxed" dangerouslySetInnerHTML={createMarkup1()}>
                    {/* {htmlContent[activeLevel].topics[activeTopicIndex].explanation} */}
                  </pre>
                </div>
              </section>

              {/* Task Section */}
              <section className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✅</span>
                  Mini Task
                </h3>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {htmlContent[activeLevel].topics[activeTopicIndex].task}
                  </p>
                </div>
              </section>
            </div>
          )}
        </main>
      </div>

      {/* Final Project Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-3xl mr-3">🚀</span>
          {finalProject.title}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
          {finalProject.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Requirements */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Requirements:
            </h3>
            <ul className="space-y-2">
              {finalProject.requirements.map((req, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-700 flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Structure */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Project Structure:
            </h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                {finalProject.structure}
              </pre>
            </div>
          </div>

          {/* Bonus Features */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Bonus Features:
            </h3>
            <ul className="space-y-2">
              {finalProject.bonus.map((bonus, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-700 flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">★</span>
                  {bonus}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPlusNotes;
