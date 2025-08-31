import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const CNotes = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level C Notes",
      topics: [
        {
          title: 'Introduction & Setup for C Programming',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Understanding C</h2>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Procedural Language:</strong> Programming is organized around functions and procedures.</li>
      <li><strong>Compiled Language:</strong> Source code is converted to machine code by a compiler before execution.</li>
      <li><strong>Low-Level Features:</strong> Direct memory manipulation via pointers offers powerful control.</li>
      <li><strong>Portability:</strong> C programs run on multiple platforms with minor modifications.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Setting Up the Environment</h2>
    <p>Install a C compiler suitable for your OS:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Windows:</strong> Install MinGW or TDM-GCC.</li>
      <li><strong>Linux:</strong> Install GCC with <code>sudo apt install build-essential</code>.</li>
      <li><strong>Mac:</strong> Install Xcode Command Line Tools via <code>xcode-select --install</code>.</li>
    </ul>
    <p>Choose a text editor or IDE:</p>
    <ul class="list-disc list-inside mb-4">
      <li>Text editors: VS Code, Sublime Text, Atom.</li>
      <li>IDEs: Code::Blocks, CLion, Dev-C++.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Writing Your First Program</h2>
    <p><strong>Hello World</strong> in C:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;  // Standard I/O library

int main() {
    printf("Hello, World!\\n"); // Print text to console
    return 0;                  // Exit status 0 means success
}
</code></pre>
    <h3>Steps to Compile and Run:</h3>
    <p><strong>Linux/macOS:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>gcc hello.c -o hello   # Compile
./hello                # Run
</code></pre>
    <p><strong>Windows (MinGW):</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>gcc hello.c -o hello.exe
hello.exe
</code></pre>

    <h3>Explanation:</h3>
    <ul>
      <li><code>#include &lt;stdio.h&gt;</code>: Includes standard I/O functions like <code>printf</code>.</li>
      <li><code>int main()</code>: Main entry point function.</li>
      <li><code>printf()</code>: Prints formatted text to the console.</li>
      <li><code>return 0;</code>: Signals successful program termination.</li>
    </ul>
  `,
          code: `
// hello.c - Basic C Hello World program
#include <stdio.h>

int main() {
    printf("Hello, World!\\n"); // Prints "Hello, World!" followed by newline
    return 0;                  // Return success code
}
  `,
          explanation: `
  - C is a general-purpose, procedural programming language with low-level features.
  - Use a compiler like GCC or MinGW to translate C code into executable machine code.
  - The basic program consists of a main() function which is the starting point.
  - printf() is the standard output function to display messages on console.
  - Compilation and execution commands differ slightly depending on your operating system.
  `,
          task: `
  Task:
  1. Install a C compiler for your OS.
  2. Write and save the Hello World program as hello.c.
  3. Compile your program using gcc.
  4. Run the compiled executable from the console/terminal.
  5. Experiment by changing the printed message.
  6. Explore how to handle compiler errors and fix them.
  `
        },
        {
          title: 'Basic Syntax & Structure of a C Program',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Structure of a C Program</h2>
    <p>A typical C program is composed of the following parts:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Preprocessor Directives:</strong> Instructions handled before compilation, starting with <code>#</code>. Example: <code>#include &lt;stdio.h&gt;</code> includes the standard input/output library.</li>
      <li><strong>Main Function:</strong> The program's entry point, written as <code>int main() { ... }</code>.</li>
      <li><strong>Statements & Expressions:</strong> Each statement ends with a semicolon <code>;</code>. Example: <code>int a = 5;</code>.</li>
      <li><strong>Comments:</strong> Notes to explain code. 
        <ul>
          <li>Single-line comments: <code>// This is a comment</code></li>
          <li>Multi-line comments: <code>/* This is a multi-line comment */</code></li>
        </ul>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Tokens in C</h2>
    <p>Tokens are the smallest units in C code:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Keywords:</strong> Reserved words with special meanings, e.g. <code>int</code>, <code>float</code>, <code>return</code>, etc.</li>
      <li><strong>Identifiers:</strong> Names for variables, functions, or user-defined data. Example: <code>int myAge;</code> (<code>myAge</code> is an identifier)</li>
      <li><strong>Constants & Literals:</strong> Fixed values like integers (<code>10</code>), floats (<code>3.14</code>), characters (<code>'A'</code>), and strings (<code>"Hello"</code>).</li>
      <li><strong>Operators:</strong> Symbols that perform operations like addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), division (<code>/</code>), and modulus (<code>%</code>).</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Example Program Demonstrating Syntax</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    // Variable declaration
    int age = 20;           // integer
    float height = 5.9;     // float
    char grade = 'A';       // character

    // Output
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);

    return 0; // program ends
}
</code></pre>

    <h3>Explanation:</h3>
    <ul class="list-disc list-inside">
      <li><code>%d</code> → placeholder for integer.</li>
      <li><code>%.1f</code> → placeholder for float with 1 decimal place.</li>
      <li><code>%c</code> → placeholder for character.</li>
    </ul>
  `,
          code: `
// Basic C program demonstrating syntax and output

#include <stdio.h>

int main() {
    // Variable declaration
    int age = 20;
    float height = 5.9;
    char grade = 'A';

    // Print variables using format specifiers
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);

    return 0;
}
  `,
          explanation: `
  - C programs start with preprocessor directives like #include to include headers.
  - main() is the mandatory entry point function.
  - Variables must be declared with types before use.
  - Statements end with semicolons.
  - Comments help document code and can be single-line or multi-line.
  - printf uses format specifiers for printing variable values with desired formatting.
  `,
          task: `
  Task:
  1. Write a C program declaring variables of different types.
  2. Use printf() to output these variables using appropriate format specifiers.
  3. Add single-line and multi-line comments explaining your code.
  4. Experiment by modifying variable values and types.
  5. Try writing simple expressions and print their results.
  `
        },
        {
          title: 'Data Types & Variables in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Fundamental Data Types</h2>
    <p>C provides several fundamental types to store various kinds of data:</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Type</th>
          <th class="border border-gray-400 px-4 py-2">Typical Size</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>int</code></td>
          <td class="border border-gray-400 px-4 py-2">4 bytes</td>
          <td class="border border-gray-400 px-4 py-2">Integer numbers</td>
          <td class="border border-gray-400 px-4 py-2"><code>int age = 25;</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>float</code></td>
          <td class="border border-gray-400 px-4 py-2">4 bytes</td>
          <td class="border border-gray-400 px-4 py-2">Single-precision decimals</td>
          <td class="border border-gray-400 px-4 py-2"><code>float pi = 3.14;</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>double</code></td>
          <td class="border border-gray-400 px-4 py-2">8 bytes</td>
          <td class="border border-gray-400 px-4 py-2">Double-precision decimals</td>
          <td class="border border-gray-400 px-4 py-2"><code>double e = 2.71828;</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>char</code></td>
          <td class="border border-gray-400 px-4 py-2">1 byte</td>
          <td class="border border-gray-400 px-4 py-2">Single character</td>
          <td class="border border-gray-400 px-4 py-2"><code>char grade = 'A';</code></td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Declaring & Initializing Variables</h2>
    <p>
      <code>int a;</code> declares a variable 'a' of type int.<br/>
      <code>a = 10;</code> initializes 'a' with value 10.<br/>
      Or do both at once:<br/>
      <code>int b = 20;</code>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Type Qualifiers</h2>
    <ul class="list-disc list-inside mb-4">
      <li><code>const</code> – makes variables immutable.<br/>
        <code>const int DAYS_IN_WEEK = 7;</code><br/>
        Trying to modify will cause a compile error.</li>
      <li><code>long</code> / <code>short</code> – modifies size of integer types.<br/>
        <code>long int population = 7000000;</code><br/>
        <code>short int smallNumber = 100;</code></li>
      <li><code>unsigned</code> – stores only positive values.<br/>
        <code>unsigned int positive = 50;</code></li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Constants & Literals</h2>
    <ul class="list-disc list-inside mb-4">
      <li>Integer literals: <code>10</code>, <code>0xFF</code> (hexadecimal)</li>
      <li>Floating literals: <code>3.14</code>, <code>2.718</code></li>
      <li>Character literals: <code>'A'</code>, <code>'z'</code></li>
      <li>String literals: <code>"Hello World"</code></li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    const float PI = 3.14159;
    char letter = 'B';
    int year = 2025;

    printf("Year: %d, Letter: %c, PI: %.2f\\n", year, letter, PI);
    return 0;
}
</code></pre>

  `,
          code: `
// Data Types & Variables example in C
#include <stdio.h>

int main() {
    const float PI = 3.14159;
    char letter = 'B';
    int year = 2025;

    printf("Year: %d, Letter: %c, PI: %.2f\\n", year, letter, PI);
    return 0;
}
  `,
          explanation: `
  - Choose data types according to the kind of data and memory considerations.
  - Initialize variables at declaration to avoid indeterminate values.
  - Use <code>const</code> qualifier for fixed values.
  - Literals represent fixed values for initialization and operations.
  - Format specifiers tell printf how to display different types accurately.
  `,
          task: `
  Task:
  1. Declare variables of types int, float, double, char.
  2. Initialize variables both at declaration and separately.
  3. Use const qualifiers where appropriate.
  4. Print variable values using correct format specifiers.
  5. Experiment with type qualifiers (long, short, unsigned).
  6. Observe memory usage and behavior for different types.
  `
        },
        {
          title: 'Input & Output (I/O) in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Output Using printf()</h2>
    <p><code>printf()</code> prints formatted output to the console.</p>
    <p><strong>Syntax:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>printf("format string", variables);</code></pre>
    <p><strong>Common Format Specifiers:</strong></p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Specifier</th>
          <th class="border border-gray-400 px-4 py-2">Type</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>%d</code></td>
          <td class="border border-gray-400 px-4 py-2">Integer</td>
          <td class="border border-gray-400 px-4 py-2"><code>int a = 10;</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>%f</code></td>
          <td class="border border-gray-400 px-4 py-2">Float</td>
          <td class="border border-gray-400 px-4 py-2"><code>float b = 3.14;</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>%c</code></td>
          <td class="border border-gray-400 px-4 py-2">Character</td>
          <td class="border border-gray-400 px-4 py-2"><code>char ch = 'A';</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>%s</code></td>
          <td class="border border-gray-400 px-4 py-2">String</td>
          <td class="border border-gray-400 px-4 py-2"><code>char str[] = "Hi";</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>%lf</code></td>
          <td class="border border-gray-400 px-4 py-2">Double</td>
          <td class="border border-gray-400 px-4 py-2"><code>double d = 2.718;</code></td>
        </tr>
      </tbody>
    </table>
    <p><strong>Example:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    int age = 20;
    float height = 5.9;
    char grade = 'A';
    char name[] = "Bilal";

    printf("Name: %s\\nAge: %d\\nHeight: %.1f\\nGrade: %c\\n", name, age, height, grade);
    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Input Using scanf()</h2>
    <p><code>scanf()</code> reads values from user input via console.</p>
    <p><strong>Syntax:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>scanf("format specifier", &variable);</code></pre>
    <p><strong>Notes:</strong> Use <code>&amp;</code> to pass the address of variables except for strings.</p>
    <p><strong>Example:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    int age;
    float height;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your height: ");
    scanf("%f", &height);

    printf("Age: %d, Height: %.2f\\n", age, height);
    return 0;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code>printf()</code> for formatted output and <code>scanf()</code> for user input.</li>
      <li>Always use the address-of operator (<code>&amp;</code>) for variables in <code>scanf()</code>, except strings.</li>
      <li>Match format specifiers to variable types for correct input/output.</li>
      <li>Control decimal precision in output with formats like <code>%.nf</code> (e.g., <code>%.2f</code> for two decimals).</li>
    </ul>
  `,
          code: `
// C program demonstrating printf() and scanf()

#include <stdio.h>

int main() {
    int age;
    float height;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your height: ");
    scanf("%f", &height);

    printf("Age: %d, Height: %.2f\\n", age, height);
    return 0;
}
  `,
          explanation: `
  - printf prints formatted output; format specifiers tell how to display variables.
  - scanf reads input from user; requires passing address of variables.
  - Proper format specifiers prevent data corruption and help accurate IO.
  - Strings are input with %s without & because arrays naturally decay to pointers.
  - Formatting options like %.2f limit decimal places for floats/doubles.
  `,
          task: `
  Task:
  1. Write a program to read user's name (string), age (int), and height (float).
  2. Print these values formatted using printf().
  3. Ensure appropriate format specifiers and use & in scanf where required.
  4. Experiment with decimal precision in float output using %.nf.
  5. Try reading and printing individual characters.
  6. Validate your input by printing error messages for invalid data (optional).
  `
        },
        {
          title: 'Operators in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Arithmetic Operators</h2>
    <p>Perform basic mathematical operations.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">+</td><td class="border border-gray-400 px-4 py-2">Addition</td><td class="border border-gray-400 px-4 py-2">a + b</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">-</td><td class="border border-gray-400 px-4 py-2">Subtraction</td><td class="border border-gray-400 px-4 py-2">a - b</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">*</td><td class="border border-gray-400 px-4 py-2">Multiplication</td><td class="border border-gray-400 px-4 py-2">a * b</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">/</td><td class="border border-gray-400 px-4 py-2">Division</td><td class="border border-gray-400 px-4 py-2">a / b</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">%</td><td class="border border-gray-400 px-4 py-2">Modulus (remainder)</td><td class="border border-gray-400 px-4 py-2">a % b</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    int a = 10, b = 3;
    printf("Sum: %d\\n", a + b);
    printf("Division: %d\\n", a / b);
    printf("Remainder: %d\\n", a % b);
    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Relational Operators</h2>
    <p>Compare two values and return 1 (true) or 0 (false).</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>==</code> Equal to, e.g., <code>a == b</code></li>
      <li><code>!=</code> Not equal, <code>a != b</code></li>
      <li><code>&gt;</code> Greater than, <code>a &gt; b</code></li>
      <li><code>&lt;</code> Less than, <code>a &lt; b</code></li>
      <li><code>&gt;=</code> Greater or equal, <code>a &gt;= b</code></li>
      <li><code>&lt;=</code> Less or equal, <code>a &lt;= b</code></li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Logical Operators</h2>
    <p>Combine multiple conditions.</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>&&</code> Logical AND: <code>(a &gt; 0 && b &gt; 0)</code></li>
      <li><code>||</code> Logical OR (missing in query but standard): <code>(a &gt; 0 || b &gt; 0)</code></li>
      <li><code>!</code> Logical NOT: <code>!(a &gt; b)</code></li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Assignment Operators</h2>
    <p>Perform operations and assignment together.</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>=</code> Assign: <code>a = 10</code></li>
      <li><code>+=</code> Add & assign: <code>a += 5</code></li>
      <li><code>-=</code> Subtract & assign: <code>a -= 2</code></li>
      <li><code>*=</code> Multiply & assign: <code>a *= 3</code></li>
      <li><code>/=</code> Divide & assign: <code>a /= 2</code></li>
      <li><code>%=</code> Modulus & assign: <code>a %= 3</code></li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Increment/Decrement Operators</h2>
    <p>Increase or decrease value by 1. Can be prefix or postfix.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 5;
printf("%d\\n", ++a); // Prefix increment: outputs 6
printf("%d\\n", a++); // Postfix increment: outputs 6, then a becomes 7
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Bitwise Operators (Basic Awareness)</h2>
    <p>Operate on individual bits of integers.</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>&amp;</code> AND, e.g., <code>a &amp; b</code></li>
      <li><code>^</code> XOR, e.g., <code>a ^ b</code></li>
      <li><code>~</code> NOT, e.g., <code>~a</code></li>
      <li><code>&lt;&lt;</code> Left shift, e.g., <code>a &lt;&lt; 1</code></li>
      <li><code>&gt;&gt;</code> Right shift, e.g., <code>a &gt;&gt; 1</code></li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use appropriate operator types for intended operations.</li>
      <li>Relational operators return boolean values to control flow.</li>
      <li>Logical operators combine complex conditions.</li>
      <li>Bitwise operators allow low-level data manipulation.</li>
      <li>Understand prefix vs postfix increments affects evaluation order and values.</li>
    </ul>
  `,
          code: `
// Demonstration of arithmetic and increment operators in C

#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Sum: %d\\n", a + b);
    printf("Division: %d\\n", a / b);
    printf("Remainder: %d\\n", a % b);

    printf("Prefix increment: %d\\n", ++a); // a becomes 11, prints 11
    printf("Postfix increment: %d\\n", a++); // prints 11, a becomes 12

    return 0;
}
  `,
          explanation: `
  - Arithmetic operators perform basic maths on variables and literals.
  - Relational operators compare values and help make decisions.
  - Logical operators combine multiple boolean expressions.
  - Assignment operators combine math and assignment in one operation.
  - Increment and decrement operators change variables by one and have different prefix/postfix behaviors.
  - Bitwise operators manipulate individual bits, useful in systems programming and low-level tasks.
  `,
          task: `
  Task:
  1. Write expressions using all arithmetic operators and print results.
  2. Compare values using relational operators, print boolean results.
  3. Combine conditions using logical operators in if statements.
  4. Use assignment operators to modify variables concisely.
  5. Experiment with prefix and postfix increment/decrement and observe results.
  6. Write simple bitwise operations and display results in decimal.
  `
        },
        {
          title: 'Control Flow in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Conditional Statements</h2>
    <p>Control execution based on conditions.</p>

    <h3>1. if Statement</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 10;
if (a > 5) {
    printf("a is greater than 5\\n");
}
</code></pre>

    <h3>2. if-else Statement</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 3;
if (a > 5) {
    printf("a &gt; 5\\n");
} else {
    printf("a &lt;= 5\\n");
}
</code></pre>

    <h3>3. if-else-if Ladder</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int score = 85;
if (score &gt;= 90) {
    printf("Grade A\\n");
} else if (score &gt;= 75) {
    printf("Grade B\\n");
} else {
    printf("Grade C\\n");
}
</code></pre>

    <h3>4. switch-case</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int day = 3;
switch (day) {
    case 1: printf("Monday\\n"); break;
    case 2: printf("Tuesday\\n"); break;
    case 3: printf("Wednesday\\n"); break;
    default: printf("Other day\\n");
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Looping Statements</h2>
    <p>Repeat code blocks repeatedly.</p>

    <h3>1. while Loop</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int i = 0;
while (i &lt; 5) {
    printf("%d\\n", i);
    i++;
}
</code></pre>

    <h3>2. do-while Loop</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int i = 0;
do {
    printf("%d\\n", i);
    i++;
} while (i &lt; 5);
</code></pre>

    <h3>3. for Loop</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for (int i = 0; i &lt; 5; i++) {
    printf("%d\\n", i);
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Jump Statements</h2>
    <p>Alter flow by exiting or skipping iterations.</p>

    <h3>1. break</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for (int i = 0; i &lt; 10; i++) {
    if (i == 5) break;
    printf("%d\\n", i);
}
</code></pre>

    <h3>2. continue</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for (int i = 0; i &lt; 5; i++) {
    if (i == 2) continue;
    printf("%d\\n", i);
}
</code></pre>

    <h3>3. goto (rarely used)</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int i = 0;
loop:
printf("%d\\n", i);
i++;
if (i &lt; 5) goto loop;
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Conditional statements control which code executes based on conditions.</li>
      <li>Loops repeat code until the condition becomes false.</li>
      <li>Jump statements like break, continue, and goto change normal flow, but use them sparingly.</li>
    </ul>
  `,
          code: `
// Control flow example in C

#include <stdio.h>

int main() {
    int a = 10;
    
    // if statement
    if (a > 5) {
        printf("a is greater than 5\\n");
    }
    
    // if-else statement
    a = 3;
    if (a > 5) {
        printf("a > 5\\n");
    } else {
        printf("a <= 5\\n");
    }
    
    // if-else-if ladder
    int score = 85;
    if (score >= 90) {
        printf("Grade A\\n");
    } else if (score >= 75) {
        printf("Grade B\\n");
    } else {
        printf("Grade C\\n");
    }
    
    // switch-case
    int day = 3;
    switch(day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        default: printf("Other day\\n");
    }
    
    // while loop
    int i = 0;
    while(i < 5) {
        printf("%d\\n", i);
        i++;
    }
    
    // do-while loop
    i = 0;
    do {
        printf("%d\\n", i);
        i++;
    } while(i < 5);
    
    // for loop
    for(int j = 0; j < 5; j++) {
        if (j == 2) continue;
        if (j == 4) break;
        printf("%d\\n", j);
    }
    
    // goto (rarely used)
    i = 0;
    loop:
    printf("%d\\n", i);
    i++;
    if(i < 5) goto loop;
    
    return 0;
}
  `,
          explanation: `
  - if, if-else, and if-else-if statements enable branching based on conditions.
  - switch-case provides cleaner syntax for multiple fixed-value branches.
  - while, do-while, and for loops enable repeated execution of code blocks.
  - break exits a loop or switch immediately.
  - continue skips the current iteration of a loop.
  - goto jumps to a labelled statement but is discouraged in structured programming.
  `,
          task: `
  Task:
  1. Write if, if-else, and if-else-if statements with different conditions.
  2. Implement switch-case for days of the week or menu options.
  3. Practice while, do-while, and for loops to print sequences.
  4. Use break and continue inside loops and observe behavior.
  5. Experiment with a simple goto-based loop (though avoid in real code).
  6. Combine multiple control flow statements to solve small problems.
  `
        },
      ]
    },

    intermediate: {
      title: "Intermediate Level C Notes",
      topics: [
        {
          title: 'Functions in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Defining and Calling Functions</h2>
    <p>Functions are reusable code blocks performing specific tasks.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>return_type function_name(parameters) {
    // code block
}</code></pre>
    <p>Example:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

void greet() {
    printf("Hello, World!\\n");
}

int main() {
    greet();  // Calling the function
    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Function Prototypes / Declarations</h2>
    <p>Declaring function before use informs compiler of its signature.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

void greet(); // Prototype declaration

int main() {
    greet();
    return 0;
}

void greet() {
    printf("Hello!\\n");
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Function Arguments and Return Values</h2>
    <p>Functions can accept parameters (inputs) and return values (outputs).</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int add(int a, int b) {
    return a + b; // Return sum
}

int main() {
    int sum = add(5, 7); // Pass arguments
    printf("Sum: %d\\n", sum);
    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Scope of Variables</h2>
    <p>Determines where variables are accessible.</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Local Variables:</strong> Declared inside functions, accessible only there.</li>
      <li><strong>Global Variables:</strong> Declared outside all functions, accessible anywhere in program.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int globalVar = 10; // Global variable

int main() {
    int localVar = 5; // Local variable
    printf("Global: %d, Local: %d\\n", globalVar, localVar);
    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Storage Classes</h2>
    <p>Define lifetime and visibility of variables.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Storage Class</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>auto</code></td>
          <td class="border border-gray-400 px-4 py-2">Default for local variables (usually omitted)</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>static</code></td>
          <td class="border border-gray-400 px-4 py-2">Preserves value between function calls</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>extern</code></td>
          <td class="border border-gray-400 px-4 py-2">Access global variable from other files</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2"><code>register</code></td>
          <td class="border border-gray-400 px-4 py-2">Suggest variable stored in CPU register for faster access</td>
        </tr>
      </tbody>
    </table>
    <p>Example of <code>static</code> storage:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

void counter() {
    static int count = 0;
    count++;
    printf("Count: %d\\n", count);
}

int main() {
    counter(); // Count: 1
    counter(); // Count: 2
    counter(); // Count: 3
    return 0;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Functions modularize code and reduce repetition.</li>
      <li>Return type must match function output.</li>
      <li>Local variables exist only inside their function block.</li>
      <li>Global variables accessible throughout the program.</li>
      <li><code>static</code> preserves variable value between calls.</li>
    </ul>
  `,
          code: `
// Functions in C with storage classes and scopes

#include <stdio.h>

void greet(); // Function prototype

int add(int a, int b) {
    return a + b;
}

void counter() {
    static int count = 0;
    count++;
    printf("Count: %d\\n", count);
}

int globalVar = 10; // Global variable

int main() {
    greet();

    int sum = add(5, 7);
    printf("Sum: %d\\n", sum);

    int localVar = 20;
    printf("Global: %d, Local: %d\\n", globalVar, localVar);

    counter();
    counter();
    counter();

    return 0;
}

void greet() {
    printf("Hello!\\n");
}
  `,
          explanation: `
  - Functions allow encapsulating logical code blocks, improving readability.
  - Declare function prototypes before use to help compiler and for organization.
  - Understand the difference between local and global variables for scope management.
  - Storage classes like static extend variable lifetime beyond the function scope.
  - Returning values from functions enables reusable computations.
  `,
          task: `
  Task:
  1. Define and call void and value-returning functions.
  2. Use function prototypes to declare functions before definitions.
  3. Create local and global variables; observe accessibilities.
  4. Implement a static variable inside a function and call multiple times.
  5. Pass parameters to functions and return computed results.
  6. Experiment with changing storage classes and notice behavior differences.
  `
        },
        {
          title: 'Arrays in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. One-Dimensional Arrays (1D)</h2>
    <p>Arrays store multiple elements of the same type in contiguous memory.</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Declaration:</strong> <code>int numbers[5];</code> defines an array of size 5.</li>
      <li><strong>Initialization:</strong> <code>int values[5] = {1,2,3,4,5};</code></li>
      <li><strong>Access elements:</strong> Indexing starts from 0, e.g., <code>values[0]</code> is the first element.</li>
    </ul>
    <p><strong>Example:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for(int i = 0; i &lt; 5; i++) {
    printf("%d ", values[i]);
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Multi-Dimensional Arrays (2D Arrays)</h2>
    <p>Useful for matrices or tables.</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Declaration:</strong></li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
</code></pre>
    <p><strong>Accessing elements:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>printf("Element at row 1, col 2: %d\\n", matrix[0][1]); // 2
</code></pre>
    <p><strong>Looping through 2D arrays:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for(int i = 0; i &lt; 2; i++) {
    for(int j = 0; j &lt; 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Passing Arrays to Functions</h2>
    <p>Arrays are passed by reference (pointer to first element). Modifications affect original array.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

void printArray(int arr[], int size) {
    for(int i = 0; i &lt; size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    printArray(numbers, 5);
    return 0;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Arrays hold elements of the same type in contiguous memory locations.</li>
      <li>1D arrays are for linear collections, 2D arrays represent matrices/tables.</li>
      <li>Passing arrays to functions passes the reference; changes affect the original data.</li>
      <li>Always pass or know array size to prevent out-of-bounds access.</li>
    </ul>
  `,
          code: `
// Arrays example in C

#include <stdio.h>

// Function to print elements of an array
void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    // One-dimensional array
    int values[5] = {1, 2, 3, 4, 5};
    printf("1D array elements: ");
    for(int i = 0; i < 5; i++) {
        printf("%d ", values[i]);
    }
    printf("\\n");

    // Two-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    printf("2D matrix elements:\\n");
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    // Passing array to function
    int numbers[] = {10, 20, 30, 40, 50};
    printf("Array passed to function: ");
    printArray(numbers, 5);

    return 0;
}
  `,
          explanation: `
  - Arrays are fixed-size collections of elements of the same type stored consecutively in memory.
  - Access elements by index starting at zero.
  - Nested loops allow processing multi-dimensional arrays.
  - When passed to functions, arrays decay into pointers; the function operates on the same memory.
  - Always keep track of array sizes to avoid errors.
  `,
          task: `
  Task:
  1. Declare and initialize 1D and 2D arrays.
  2. Loop over arrays to print all elements.
  3. Write functions that accept arrays and their size; modify and print elements.
  4. Experiment with partial initialization of arrays.
  5. Explore out-of-bound accesses and observe issues.
  6. Use arrays in simple problems like sums or searching values.
  `
        },
        {
          title: 'Pointers in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Declaring and Initializing Pointers</h2>
    <p>Pointers are variables that store memory addresses of other variables.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 10;
int *ptr;    // Pointer to int
ptr = &a;    // Store address of 'a' in ptr

printf("Value of a: %d\\n", a);
printf("Address of a: %p\\n", &a);
printf("Value via pointer: %d\\n", *ptr);
</code></pre>
    <ul>
      <li><code>*ptr</code>: Dereference operator to access the value at the address.</li>
      <li><code>&a</code>: Address-of operator to get the address of variable 'a'.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Pointer Arithmetic</h2>
    <p>Pointers can be incremented or decremented to move through memory addresses (especially useful in arrays).</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int arr[3] = {10, 20, 30};
int *p = arr;

printf("%d\\n", *p);    // 10
p++;
printf("%d\\n", *p);    // 20
p--;
printf("%d\\n", *p);    // 10
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Pointers and Arrays</h2>
    <p>The array name points to the first element of the array.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int numbers[3] = {1, 2, 3};
int *p = numbers;    // same as &numbers[0]
printf("%d\\n", *(p+1)); // 2
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Pointers to Pointers (Double Pointers)</h2>
    <p>Pointers that point to other pointers.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 5;
int *p = &a;
int **pp = &p;

printf("%d\\n", **pp); // 5
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Void Pointers</h2>
    <p>Generic pointers that can point to any data type. Must cast before dereferencing.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int a = 10;
void *vp = &a;
printf("%d\\n", *(int*)vp); // Typecast before dereferencing
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Passing Pointers to Functions</h2>
    <p>Allows modification of variables outside the function (simulates call by reference).</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

void increment(int *num) {
    (*num)++;
}

int main() {
    int a = 5;
    increment(&a);
    printf("a = %d\\n", a); // 6
    return 0;
}
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Pointers store memory addresses rather than direct values.</li>
      <li>Use <code>*</code> to dereference and <code>&amp;</code> to get the address.</li>
      <li>Pointer arithmetic enables efficient traversal of arrays.</li>
      <li>Double pointers and void pointers are advanced concepts for flexibility and indirection.</li>
      <li>Passing pointers to functions lets functions modify variables outside their scope.</li>
    </ul>
  `,
          code: `
// Pointers in C - Syntax and Examples

#include <stdio.h>

int main() {
    int a = 10;
    int *ptr;        // Declare pointer to int
    ptr = &a;        // Initialize pointer with address of 'a'

    printf("Value of a: %d\\n", a);
    printf("Address of a: %p\\n", &a);
    printf("Value via pointer: %d\\n", *ptr);

    // Pointer arithmetic
    int arr[3] = {10, 20, 30};
    int *p = arr;
    printf("First element: %d\\n", *p);  // 10
    p++;
    printf("Second element: %d\\n", *p); // 20
    p--;
    printf("Back to first: %d\\n", *p);  // 10

    // Pointer to pointer
    int **pp = &p;
    printf("Value via double pointer: %d\\n", **pp);

    // Void pointer usage
    void *vp = &a;
    printf("Value via void pointer: %d\\n", *(int*)vp);

    return 0;
}
  `,
          explanation: `
  - Pointers allow direct manipulation of memory addresses, providing powerful capabilities.
  - Using * dereferences a pointer to access the variable it points to.
  - The address-of operator & obtains the memory address of variables.
  - Arithmetic on pointers enables navigation through elements in an array.
  - Double pointers allow multiple levels of indirection useful in complex data structures.
  - Void pointers can hold addresses of any type but must be cast before use.
  - Passing pointers to functions enables modification of variables outside the function scope.
  `,
          task: `
  Task:
  1. Declare pointers and initialize with variable addresses.
  2. Use pointer arithmetic to traverse arrays.
  3. Create and use double pointers.
  4. Experiment with void pointers and type casting.
  5. Pass pointers to functions to modify variables.
  6. Observe the output and understand memory addresses and pointer behavior.
  `
        },
        {
          title: 'Strings in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Declaring and Initializing Strings</h2>
    <ul class="list-disc list-inside mb-4">
      <li><strong>1D Character Array:</strong><br/>
        <code>char name[10] = "Bilal";</code> — string stored as array with null character <code>\\0</code> automatically added.</li>
      <li><strong>Pointer to String Literal:</strong><br/>
        <code>char *name = "Bilal";</code> — points to string literal which is usually read-only; modifying it causes undefined behavior.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Accessing Characters</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>char str[] = "Hello";
printf("%c\\n", str[0]);  // Outputs: H
str[0] = 'h';            // Modify first character
printf("%s\\n", str);    // Outputs: hello
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Standard String Functions (<code>&lt;string.h&gt;</code>)</h2>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Function</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2"><code>strlen(str)</code></td><td class="border border-gray-400 px-4 py-2">Returns length excluding <code>\\0</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2"><code>strcpy(dest, src)</code></td><td class="border border-gray-400 px-4 py-2">Copies <code>src</code> string to <code>dest</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2"><code>strcat(dest, src)</code></td><td class="border border-gray-400 px-4 py-2">Concatenates <code>src</code> string at end of <code>dest</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2"><code>strcmp(str1, str2)</code></td><td class="border border-gray-400 px-4 py-2">Compares two strings; returns 0 if equal</td></tr>
      </tbody>
    </table>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";

    strcat(str1, str2);  // str1 becomes "HelloWorld"
    printf("Concatenated: %s\\n", str1);

    printf("Length: %lu\\n", strlen(str1)); // Outputs: 10

    if(strcmp(str1, str2) == 0)
        printf("Strings are equal\\n");
    else
        printf("Strings are different\\n");

    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Important Notes</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Always allocate enough space for the null character <code>\\0</code> when declaring string arrays.</li>
      <li><code>strlen()</code> excludes the null character in count.</li>
      <li><code>strcpy()</code> and <code>strcat()</code> may cause buffer overflow; prefer <code>strncpy()</code> and <code>strncat()</code> for safety.</li>
      <li>Strings are arrays of characters, so pointer operations on strings also work.</li>
    </ul>
  `,
          code: `
// Strings in C - Basic operations

#include <stdio.h>
#include <string.h>

int main() {
    // Declaring strings
    char name[10] = "Bilal";  // 1D char array with null terminator
    char *ptr = "Bilal";      // Pointer to string literal (read-only)

    // Accessing and modifying characters
    char str[] = "Hello";
    printf("Original first char: %c\\n", str[0]);
    str[0] = 'h';
    printf("Modified string: %s\\n", str);

    // Using string functions
    char str1[20] = "Hello";
    char str2[] = "World";

    strcat(str1, str2);    // str1 now "HelloWorld"
    printf("Concatenated: %s\\n", str1);

    printf("Length: %lu\\n", strlen(str1)); // Outputs: 10

    if (strcmp(str1, str2) == 0)
        printf("Strings are equal\\n");
    else
        printf("Strings are different\\n");

    return 0;
}
  `,
          explanation: `
  - Strings are character arrays terminated by a null character \\0.
  - Use character arrays or pointers, but modifying string literals (via pointers) is unsafe.
  - Standard library functions from <string.h> help manipulate strings safely and efficiently.
  - Always ensure enough space in arrays to hold strings and the terminating null character.
  - Prefer safer functions strncpy and strncat over strcpy and strcat to prevent buffer overflow.
  `,
          task: `
  Task:
  1. Declare strings as arrays and as pointers; observe differences.
  2. Access and modify individual characters in string arrays.
  3. Use strlen, strcpy, strcat, and strcmp to manipulate and compare strings.
  4. Experiment with strncpy and strncat for safe copying and concatenation.
  5. Always remember to allocate adequate array size including space for \\0.
  6. Try writing a function to count vowels in a string using pointer arithmetic.
  `
        },
        {
          title: 'Dynamic Memory Management in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Why Dynamic Memory?</h2>
    <p>
      Static arrays have fixed size known at compile-time, limiting flexibility.<br/>
      Dynamic memory allows allocation at runtime, enabling programs to handle varying data sizes efficiently.<br/>
      Dynamic memory is allocated on the heap, unlike local (stack) variables.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Core Functions (&lt;stdlib.h&gt;)</h2>

    <h3>1. malloc()</h3>
    <p>Allocates uninitialized memory block; returns a void pointer that must be typecast.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int *ptr;
    ptr = (int*)malloc(5 * sizeof(int)); // Allocate memory for 5 integers

    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    for(int i = 0; i &lt; 5; i++) {
        ptr[i] = i + 1;
        printf("%d ", ptr[i]);
    }
    
    free(ptr); // Release allocated memory
    return 0;
}
</code></pre>

    <h3>2. calloc()</h3>
    <p>Allocates memory for multiple elements and initializes all bytes to zero.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int *ptr = (int*)calloc(5, sizeof(int));</code></pre>

    <h3>3. realloc()</h3>
    <p>Resizes previously allocated memory block.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>ptr = (int*)realloc(ptr, 10 * sizeof(int)); // Resize to hold 10 integers</code></pre>

    <h3>4. free()</h3>
    <p>Frees allocated memory and helps avoid memory leaks. Setting pointer to <code>NULL</code> afterward is good practice.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>free(ptr);
ptr = NULL;</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Always check if <code>malloc</code> or <code>calloc</code> returns <code>NULL</code> to handle allocation failure.</li>
      <li><code>malloc</code> allocates uninitialized memory; <code>calloc</code> allocates zero-initialized memory.</li>
      <li><code>realloc</code> allows flexible resizing of dynamic arrays.</li>
      <li>Always <code>free</code> dynamically allocated memory to avoid leaks.</li>
      <li>Setting pointer to <code>NULL</code> after freeing is recommended to avoid dangling pointers.</li>
    </ul>
  `,
          code: `
// Dynamic memory allocation example in C

#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*)malloc(5 * sizeof(int)); // Allocating memory for 5 integers
    if(ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Initialize and print
    for(int i = 0; i < 5; i++) {
        ptr[i] = i + 1;
        printf("%d ", ptr[i]);
    }
    printf("\\n");

    // Resize to 10 integers
    ptr = (int*)realloc(ptr, 10 * sizeof(int));
    if(ptr == NULL) {
        printf("Memory reallocation failed!\\n");
        return 1;
    }

    // Initialize new elements
    for(int i = 5; i < 10; i++) {
        ptr[i] = i + 1;
    }

    // Print all elements after realloc
    for(int i = 0; i < 10; i++) {
        printf("%d ", ptr[i]);
    }
    printf("\\n");

    // Free allocated memory
    free(ptr);
    ptr = NULL;

    return 0;
}
  `,
          explanation: `
  - Dynamic memory functions in stdlib.h manage heap allocation at runtime, allowing flexible program behavior.
  - malloc allocates a specified number of bytes, but the memory content is not initialized.
  - calloc allocates memory and initializes all bits to zero.
  - realloc resizes previously allocated memory blocks, preserving data.
  - Always check the return values of these functions to handle allocation failures gracefully.
  - Freeing memory after use prevents memory leaks and dangling pointers.
  `,
          task: `
  Task:
  1. Allocate memory dynamically with malloc and initialize it.
  2. Use calloc to allocate and zero-initialize memory, and verify.
  3. Resize allocated memory with realloc and initialize new parts.
  4. Handle malloc/calloc/realloc failures by checking for NULL.
  5. Free all allocated memory and set pointers to NULL.
  6. Build a simple dynamic array program that grows as user inputs numbers.
  `
        },
        {
          title: 'Structures & Unions in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Structures (struct)</h2>
    <p>Structures group different types of variables under one name.</p>

    <h3>1. Defining a Structure</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Student {
    int id;
    char name[20];
    float marks;
};
</code></pre>

    <h3>2. Declaring Structure Variables</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Student s1, s2;</code></pre>

    <h3>3. Initializing Structure</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Student s1 = {101, "Bilal", 95.5};</code></pre>

    <h3>4. Accessing Members</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>printf("Name: %s\\n", s1.name);
printf("Marks: %.2f\\n", s1.marks);
</code></pre>

    <h3>5. Pointer to Structure</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Student *ptr = &s1;
printf("ID: %d\\n", ptr->id);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Array of Structures</h2>
    <p>Useful to store multiple records.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Student students[3] = {
    {101, "Ali", 85.5},
    {102, "Sara", 90.0},
    {103, "Ahmed", 88.0}
};

for(int i = 0; i &lt; 3; i++) {
    printf("%s: %.2f\\n", students[i].name, students[i].marks);
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Unions (union)</h2>
    <p>Like structures but all members share the same memory location.</p>
    <p>Only one member can hold a valid value at a time (memory optimization).</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data d;
    d.i = 10;
    printf("i = %d\\n", d.i);

    d.f = 220.5; // overwrites 'i'
    printf("f = %.2f\\n", d.f);

    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>struct:</strong> Members stored independently at separate memory locations.</li>
      <li><strong>union:</strong> All members share the same memory, saving space; only last assigned is valid.</li>
      <li>Use <code>.</code> operator for accessing structure members.</li>
      <li>Use arrow <code>-></code> operator for pointers to structures.</li>
      <li>Array of structures perfect for multiple records like lists or databases.</li>
    </ul>
  `,
          code: `
// Structures and Unions example in C

#include <stdio.h>

// Structure definition
struct Student {
    int id;
    char name[20];
    float marks;
};

// Union definition
union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    // Initialize and access structure
    struct Student s1 = {101, "Bilal", 95.5};
    printf("Student Name: %s, Marks: %.2f\\n", s1.name, s1.marks);

    // Pointer to structure
    struct Student *ptr = &s1;
    printf("Student ID via pointer: %d\\n", ptr->id);

    // Array of structures
    struct Student students[3] = {
        {101, "Ali", 85.5},
        {102, "Sara", 90.0},
        {103, "Ahmed", 88.0}
    };
    for(int i = 0; i < 3; i++) {
        printf("%s: %.2f\\n", students[i].name, students[i].marks);
    }

    // Using union
    union Data d;
    d.i = 10;
    printf("Union int: %d\\n", d.i);

    d.f = 220.5;  // overwrites d.i
    printf("Union float: %.2f\\n", d.f);

    return 0;
}
  `,
          explanation: `
  - Structures group various data types into a single composite type with separate memory allocated for each member.
  - You can declare variables of a structure type and access members via dot operator.
  - Pointers to structures use the arrow operator to access members.
  - Arrays of structures help manage collections of related records easily.
  - Unions share the same memory for all members; only the last assigned member contains a valid value, useful for memory optimization.
  `,
          task: `
  Task:
  1. Define and initialize a structure with multiple data types.
  2. Access structure members directly and via pointers.
  3. Declare and use an array of structures; iterate and print members.
  4. Define and experiment with a union; assign different members and print.
  5. Observe how union members share memory and affect each other.
  6. Apply structures and unions in a simple data management program.
  `
        },
        {
          title: 'Basic File I/O in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Opening and Closing Files</h2>
    <p>Use <code>FILE</code> pointer from <code>&lt;stdio.h&gt;</code> to work with files.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>FILE *fp;
fp = fopen("data.txt", "w"); // Open file in write mode

if (fp == NULL) {
    printf("Error opening file!\\n");
    return 1;
}

fclose(fp); // Close file after operations
</code></pre>
    <p><strong>Common File Modes:</strong></p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Mode</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">"r"</td><td class="border border-gray-400 px-4 py-2">Read only; file must exist</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"w"</td><td class="border border-gray-400 px-4 py-2">Write only; creates or overwrites file</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"a"</td><td class="border border-gray-400 px-4 py-2">Append; writes at file end</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"r+"</td><td class="border border-gray-400 px-4 py-2">Read and write; file must exist</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"w+"</td><td class="border border-gray-400 px-4 py-2">Read and write; creates or overwrites file</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"a+"</td><td class="border border-gray-400 px-4 py-2">Read and append; creates file if needed</td></tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Writing to a File</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>FILE *fp = fopen("data.txt", "w");
fprintf(fp, "Hello World\\n");   // Write formatted text
fputs("This is a line\\n", fp);  // Write string
fclose(fp);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Reading from a File</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>FILE *fp = fopen("data.txt", "r");
char str[100];
fgets(str, 100, fp);   // Read a line
printf("%s", str);
fclose(fp);
</code></pre>
    <p>Other reading methods:</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>fgetc(fp)</code> - reads one character;</li>
      <li><code>fscanf(fp, "%s", str)</code> - reads formatted input;</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Important Notes</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Always check if <code>fopen()</code> returns <code>NULL</code> to handle file open errors.</li>
      <li>Use <code>fclose()</code> to release file resources after operations.</li>
      <li>Choose file mode appropriate to the operation (read/write/append).</li>
      <li>Reading/writing files line-by-line is safer and better for large files.</li>
    </ul>
  `,
          code: `
// Basic file I/O example in C

#include <stdio.h>

int main() {
    FILE *fp;

    // Writing to file
    fp = fopen("data.txt", "w");
    if (fp == NULL) {
        printf("Error opening file for writing!\\n");
        return 1;
    }
    fprintf(fp, "Hello World\\n");
    fputs("This is a line\\n", fp);
    fclose(fp);

    // Reading from file
    fp = fopen("data.txt", "r");
    if (fp == NULL) {
        printf("Error opening file for reading!\\n");
        return 1;
    }
    char str[100];
    while(fgets(str, sizeof(str), fp) != NULL) {
        printf("%s", str);
    }
    fclose(fp);

    return 0;
}
  `,
          explanation: `
  - FILE pointers are used to control access to files for reading and writing.
  - fopen() opens the file with specified mode; always check for NULL returns.
  - fprintf() and fputs() write formatted or raw text to files.
  - fgets() reads a line safely into a buffer with size limit.
  - Always fclose() the file to flush buffers and close resources.
  - For large files, reading/writing line-by-line avoids memory issues.
  `,
          task: `
  Task:
  1. Write a program to create and write multiple lines to a file.
  2. Open the file for reading and display its contents line-by-line.
  3. Handle file open errors gracefully.
  4. Practice with different file modes like append ("a") to add content.
  5. Use fgetc() and fscanf() and compare with fgets for reading techniques.
  6. Explore how to write and read binary files (optional/advanced).
  `
        },
      ]
    },
    advanced: {
      title: "Advance Level C Notes",
      topics: [
        {
          title: 'Advanced Pointers in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Array of Pointers</h2>
    <p>An array of pointers stores addresses of variables rather than the values themselves, often used for strings or dynamic arrays.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    char *names[] = {"Ali", "Sara", "Bilal"}; // array of string pointers

    for(int i = 0; i &lt; 3; i++) {
        printf("%s\\n", names[i]);
    }

    return 0;
}
</code></pre>
    <p><code>names[0]</code> points to string <code>"Ali"</code>, <code>names[1]</code> points to <code>"Sara"</code>, etc.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Pointer to Functions</h2>
    <p>Function pointers store addresses of functions, enabling callbacks and dynamic execution.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

int main() {
    int (*operation)(int, int); // pointer to function returning int and taking two ints
    operation = add;            // assign function

    printf("Add: %d\\n", operation(5, 3)); // call function via pointer

    operation = multiply;
    printf("Multiply: %d\\n", operation(5, 3));

    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Complex Declarations (Right-Left Rule)</h2>
    <p>To understand complex C declarations, start reading from the identifier, then move right first, then left.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int *(*funcPtrArray[3])(int);
</code></pre>
    <p>Breakdown:</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>funcPtrArray</code> &rarr; an array of 3 elements</li>
      <li><code>(*funcPtrArray[3])</code> &rarr; each element is a pointer</li>
      <li><code>(*funcPtrArray[3])(int)</code> &rarr; pointer to a function taking an <code>int</code> parameter</li>
      <li><code>int *(*funcPtrArray[3])(int)</code> &rarr; function returning a pointer to <code>int</code></li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">D. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Arrays of pointers efficiently store collections of strings or dynamically allocated data.</li>
      <li>Function pointers enable callback mechanisms and modular program designs.</li>
      <li>Complex pointer declarations require careful reading using the right-left rule for clarity.</li>
    </ul>
  `,
          code: `
// Advanced pointer examples in C

#include <stdio.h>

// Function definitions
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

int main() {
    // A. Array of pointers to strings
    char *names[] = {"Ali", "Sara", "Bilal"};
    for(int i = 0; i < 3; i++) {
        printf("%s\\n", names[i]);
    }

    // B. Pointer to functions
    int (*operation)(int, int);
    operation = add;
    printf("Add: %d\\n", operation(5, 3));

    operation = multiply;
    printf("Multiply: %d\\n", operation(5, 3));

    // C. Complex declaration example (unused in code)
    // int *(*funcPtrArray[3])(int); 
    // Explanation: funcPtrArray is an array of 3 pointers to functions taking int and returning int pointer.

    return 0;
}
  `,
          explanation: `
  - Arrays of pointers typically hold addresses of strings or dynamic arrays, allowing efficient handling of text data.
  - Function pointers provide a way to call functions dynamically, useful in callback designs or table-driven code.
  - Complex declarations can be understood with the right-left reading rule starting from the identifier.
  - Practicing reading and writing such declarations enhances understanding of advanced C pointer syntax.
  `,
          task: `
  Task:
  1. Create an array of pointers to strings and print all names.
  2. Write multiple simple functions and call them via function pointers.
  3. Declare complex pointers as shown and explain their meaning in comments.
  4. Use function pointers in callback-style function implementations.
  5. Practice reading and writing complex declarations using the right-left rule.
  6. Experiment with arrays of function pointers performing arithmetic or string operations.
  `
        },
        {
          title: 'The C Preprocessor',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. #include and Header Files</h2>
    <p><code>#include</code> inserts the contents of one file into another before compilation.</p>
    <ul class="list-disc list-inside mb-4">
      <li>Use &lt; &gt; for standard headers: <code>#include &lt;stdio.h&gt;</code></li>
      <li>Use double quotes for user headers: <code>#include "myheader.h"</code></li>
    </ul>
    <p>Header guards prevent multiple inclusions:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#ifndef MYHEADER_H
#define MYHEADER_H

void myFunction();

#endif
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Macro Definitions (#define)</h2>
    <p>Macros define constants or inline code substitutions.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#define PI 3.14159
#define MAX 100

#define SQUARE(x) ((x) * (x))   // function-like macro with proper parentheses
printf("%d\\n", SQUARE(5));    // prints 25
</code></pre>
    <p><em>Tip:</em> Always use parentheses in macros to avoid operator precedence issues.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Conditional Compilation</h2>
    <p>Compile sections of code selectively based on macros.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#ifdef DEBUG
    printf("Debug mode active\\n");
#endif

#ifndef RELEASE
    printf("Release not defined\\n");
#endif

#if VERSION >= 2
    printf("Version 2 or above\\n");
#elif VERSION == 1
    printf("Version 1\\n");
#else
    printf("Unknown version\\n");
#endif
</code></pre>
    <p>Useful for debugging, platform-specific code, and feature toggles.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Preprocessor runs before compilation, modifying source code as instructed.</li>
      <li>Header guards prevent multiple inclusion errors.</li>
      <li>Macros can define constants and inline code to improve clarity and reduce duplication.</li>
      <li>Conditional compilation enables flexible, portable, and configurable code bases.</li>
    </ul>
  `,
          code: `
// Example demonstrating C Preprocessor features

#include <stdio.h>

#define PI 3.14159
#define MAX 100
#define SQUARE(x) ((x) * (x))

#define DEBUG
#define VERSION 2

int main() {
#ifdef DEBUG
    printf("Debug mode active\\n");
#endif

#if VERSION >= 2
    printf("Version 2 or above\\n");
#elif VERSION == 1
    printf("Version 1\\n");
#else
    printf("Unknown version\\n");
#endif

    printf("PI = %.5f\\n", PI);
    printf("Square of 5 = %d\\n", SQUARE(5));
    return 0;
}
  `,
          explanation: `
  - The C preprocessor executes before compilation and handles #include, #define, and conditional compilation directives.
  - Header guards prevent errors from including the same header multiple times.
  - Macros can define symbolic constants or implement simple function-like code snippets.
  - Conditional compilation allows selective compilation of code depending on macros defined, aiding in debugging and platform targeting.
  `,
          task: `
  Task:
  1. Create and use header files with proper header guards.
  2. Define constants and function-like macros; observe correct behavior with parentheses.
  3. Use #ifdef, #ifndef, #if, #elif, #else, and #endif to control compilation.
  4. Experiment by defining or commenting out macros to see different code paths.
  5. Use macros for feature toggling or debugging messages.
  6. Explore common pitfalls in macros like side effects and operator precedence.
  `
        },
        {
          title: 'Advanced Data Structures in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Linked Lists</h2>
    <h3>1. Singly Linked List</h3>
    <p>Each node contains data and a pointer to the next node.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));

    head-&gt;data = 10;
    head-&gt;next = second;

    second-&gt;data = 20;
    second-&gt;next = NULL;

    struct Node* temp = head;
    while(temp != NULL) {
        printf("%d -> ", temp-&gt;data);
        temp = temp-&gt;next;
    }
    printf("NULL\\n");

    free(head);
    free(second);
    return 0;
}
</code></pre>

    <h3>2. Doubly Linked List</h3>
    <p>Each node has <code>prev</code>, <code>data</code>, and <code>next</code> pointers for two-way traversal.</p>

    <h3>3. Circular Linked List</h3>
    <p>Last node points back to the first node, forming a circle.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Stacks</h2>
    <p>LIFO (Last In First Out) structure, implemented with arrays or linked lists.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#define MAX 100
int stack[MAX];
int top = -1;

void push(int val) { stack[++top] = val; }
int pop() { return stack[top--]; }
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Queues</h2>
    <p>FIFO (First In First Out) structure, implemented with arrays or linked lists.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#define SIZE 100
int queue[SIZE];
int front = 0, rear = -1;

void enqueue(int val) { queue[++rear] = val; }
int dequeue() { return queue[front++]; }
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Binary Trees</h2>
    <p>Hierarchical data structure with nodes having pointers to left and right child nodes.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Graphs (Basic Understanding)</h2>
    <p>Graphs are represented by:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Adjacency Matrix:</strong> 2D array representing edges.</li>
      <li><strong>Adjacency List:</strong> Array of lists representing edges.</li>
    </ul>
    <p>Used in networking, routing, and algorithmic problems.</p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Structs + pointers form the basis of advanced data structures.</li>
      <li>Linked lists allow dynamic, flexible data management.</li>
      <li>Stacks and queues have simple logic but can be implemented with arrays or linked lists.</li>
      <li>Binary trees enable efficient hierarchical data representation and searching.</li>
      <li>Graphs model complex relationships via adjacency matrices or adjacency lists.</li>
    </ul>
  `,
          code: `
// Examples of Advanced Data Structures in C

#include <stdio.h>
#include <stdlib.h>

// Singly Linked List node
struct Node {
    int data;
    struct Node* next;
};

// Stack (array-based)
#define MAX 100
int stack[MAX];
int top = -1;

void push(int val) {
    if(top < MAX - 1) {
        stack[++top] = val;
    } else {
        printf("Stack overflow\\n");
    }
}

int pop() {
    if(top >= 0) {
        return stack[top--];
    } else {
        printf("Stack underflow\\n");
        return -1;
    }
}

// Queue (array-based)
#define SIZE 100
int queue[SIZE];
int front = 0, rear = -1;

void enqueue(int val) {
    if(rear < SIZE - 1) {
        queue[++rear] = val;
    } else {
        printf("Queue overflow\\n");
    }
}

int dequeue() {
    if(front <= rear) {
        return queue[front++];
    } else {
        printf("Queue underflow\\n");
        return -1;
    }
}

// Binary Tree node
struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

int main() {
    // Singly linked list creation
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    struct Node* second = (struct Node*)malloc(sizeof(struct Node));

    head->data = 10;
    head->next = second;

    second->data = 20;
    second->next = NULL;

    struct Node* temp = head;
    printf("Singly linked list: ");
    while(temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");

    free(head);
    free(second);

    // Stack operations
    push(5);
    push(10);
    printf("Popped from stack: %d\\n", pop());

    // Queue operations
    enqueue(1);
    enqueue(2);
    printf("Dequeued from queue: %d\\n", dequeue());

    return 0;
}
  `,
          explanation: `
  - Advanced data structures rely on structs and pointers to organize dynamic data efficiently.
  - Singly linked lists link elements via pointers and support dynamic sizing.
  - Stacks operate on LIFO principle; queues on FIFO; both can be array or list based.
  - Binary trees store hierarchical data with efficient search and traversal algorithms.
  - Graphs model complex relationships via adjacency matrices or adjacency lists.
  `,
          task: `
  Task:
  1. Implement singly linked list creation, traversal, and memory management.
  2. Write push/pop functions for a stack with overflow and underflow checks.
  3. Write enqueue/dequeue functions for a queue with overflow and underflow checks.
  4. Define and create binary tree nodes; practice simple traversals.
  5. Explore representing and traversing simple graphs with adjacency lists or matrices.
  6. Use pointers and structs confidently to manage dynamic data.
  `
        },
        {
          title: 'Advanced File I/O & Error Handling',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Binary File I/O</h2>
    <p>Binary files store data in raw byte format, which is faster and more compact than text.</p>
    <p><strong>Writing to a binary file:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

struct Student {
    int id;
    char name[20];
};

int main() {
    FILE *fp = fopen("students.bin", "wb"); // open file in write-binary mode
    if (!fp) {
        perror("File opening failed");
        return 1;
    }

    struct Student s1 = {1, "Ali"};
    fwrite(&s1, sizeof(struct Student), 1, fp); // write one record

    fclose(fp);
    return 0;
}
</code></pre>
    <p><strong>Reading from a binary file:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>FILE *fp = fopen("students.bin", "rb"); // open file in read-binary mode
struct Student s;
fread(&s, sizeof(struct Student), 1, fp); // read one record
printf("ID: %d, Name: %s\\n", s.id, s.name);
fclose(fp);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Random Access in Files</h2>
    <p>Use file positioning functions to access specific parts without reading everything sequentially.</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>fseek(fp, offset, origin)</code>: Move file pointer to offset from origin (<code>SEEK_SET</code>, <code>SEEK_CUR</code>, <code>SEEK_END</code>)</li>
      <li><code>ftell(fp)</code>: Returns current file pointer position</li>
      <li><code>rewind(fp)</code>: Moves file pointer to beginning</li>
    </ul>
    <p>Useful for reading/writing specific records in large files.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Error Handling</h2>
    <p>Always verify success of file operations and handle errors gracefully.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;
#include &lt;errno.h&gt;
#include &lt;string.h&gt;

FILE *fp = fopen("data.txt", "r");
if (!fp) {
    perror("Error opening file");       // prints descriptive error
    printf("Error code: %d\\n", errno); // error number
    return 1;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Binary file I/O is efficient for reading/writing structured data.</li>
      <li>Random access (fseek, ftell, rewind) enables flexible manipulation of large files.</li>
      <li>Always check return values; use <code>perror()</code> and <code>errno</code> for detailed error messages.</li>
    </ul>
  `,
          code: `
// Advanced File I/O and Error Handling in C

#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

struct Student {
    int id;
    char name[20];
};

int main() {
    // Writing binary file
    FILE *fp = fopen("students.bin", "wb");
    if (!fp) {
        perror("File opening failed");
        return 1;
    }

    struct Student s1 = {1, "Ali"};
    fwrite(&s1, sizeof(struct Student), 1, fp);
    fclose(fp);

    // Reading binary file with random access
    fp = fopen("students.bin", "rb");
    if (!fp) {
        perror("File opening failed");
        return 1;
    }

    // Move to beginning (optional here)
    rewind(fp);

    struct Student s;
    if (fread(&s, sizeof(struct Student), 1, fp) != 1) {
        perror("File read failed");
        fclose(fp);
        return 1;
    }

    printf("ID: %d, Name: %s\n", s.id, s.name);

    // Determine file size using fseek and ftell
    fseek(fp, 0, SEEK_END);
    long size = ftell(fp);
    printf("File size: %ld bytes\n", size);

    fclose(fp);
    return 0;
}
  `,
          explanation: `
  - Binary I/O functions fread and fwrite operate on raw bytes, suitable for storing structs directly.
  - Random access functions fseek, ftell, and rewind allow moving around the file pointer for flexible operations.
  - Proper error checking after fopen, fread, and fwrite is essential to make robust programs.
  - perror uses errno to provide human-readable error descriptions.
  `,
          task: `
  Task:
  1. Write a program to save an array of structs to a binary file.
  2. Read back specific records using fseek to jump to record positions.
  3. Use perror and errno to handle file errors gracefully.
  4. Calculate and display the size of the binary file.
  5. Explore reading/writing multiple records at once with fread/fwrite.
  6. Attempt to corrupt file and observe error messages when reading.
  `
        },
        {
          title: 'Standard Library Deep Dive in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">&lt;stdlib.h&gt; – General Utilities</h2>
    <h3>1. Memory Allocation</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdlib.h&gt;

int *arr = (int*)malloc(5 * sizeof(int));  // allocate uninitialized memory
if (!arr) {
    // handle allocation failure
}
free(arr);  // free allocated memory

// calloc allocates and initializes to zero
int *arr2 = (int*)calloc(5, sizeof(int));

// realloc resizes an allocated block
arr2 = (int*)realloc(arr2, 10 * sizeof(int));
</code></pre>

    <h3>2. Random Numbers</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdlib.h&gt;
#include &lt;time.h&gt;

srand(time(0));         // seed random generator
int r = rand() % 100;   // random number between 0-99
</code></pre>

    <h3>3. Program Termination</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>exit(0);  // normal termination
exit(1);  // abnormal/error termination
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">&lt;ctype.h&gt; – Character Handling</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;ctype.h&gt;

char c = 'A';

if(isalpha(c)) printf("Alphabet\\n");
if(isdigit('5')) printf("Digit\\n");

char lower = tolower(c);  // convert to lowercase
char upper = toupper(c);  // convert to uppercase
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">&lt;math.h&gt; – Mathematical Functions</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;math.h&gt;

double x = 9.0;

printf("Square root: %f\\n", sqrt(x));
printf("Power: %f\\n", pow(2, 3));
printf("Absolute: %f\\n", fabs(-5.5));
printf("Trigonometry: sin(3.14) = %f\\n", sin(3.14));

// Other useful functions: ceil(), floor(), round(), log(), exp()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">&lt;time.h&gt; – Time and Date Functions</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;time.h&gt;

time_t t;
time(&t);
printf("Current time: %s", ctime(&t));

clock_t start = clock();
// some code to measure
clock_t end = clock();
double time_taken = (double)(end - start) / CLOCKS_PER_SEC;
printf("Execution time: %f seconds\\n", time_taken);
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>&lt;stdlib.h&gt;</code> - memory management, random number generation, process control.</li>
      <li><code>&lt;ctype.h&gt;</code> - character classification and conversion.</li>
      <li><code>&lt;math.h&gt;</code> - mathematical computations including powers, roots, trigonometry.</li>
      <li><code>&lt;time.h&gt;</code> - time measurement, delays, timestamps, and profiling.</li>
    </ul>
  `,
          code: `
// Demonstrating Standard Library Functions in C

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h>
#include <time.h>

int main() {
    // Memory allocation example
    int *arr = (int*)malloc(5 * sizeof(int));
    if (!arr) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    for(int i = 0; i < 5; i++) arr[i] = i * i;
    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);

    // Random number generation
    srand(time(0));
    printf("Random number (0-99): %d\\n", rand() % 100);

    // Character handling
    char c = 'A';
    if(isalpha(c)) printf("%c is an alphabet.\\n", c);
    if(isdigit('5')) printf("5 is a digit.\\n");
    printf("%c to lower case: %c\\n", c, tolower(c));

    // Math functions
    double x = 16.0;
    printf("Square root of %.2f is %.2f\\n", x, sqrt(x));
    printf("2 raised to 3 power is %.2f\\n", pow(2, 3));
    printf("Absolute of -5.5 is %.2f\\n", fabs(-5.5));
    printf("sin(3.14) = %.2f\\n", sin(3.14));

    // Time functions
    time_t t;
    time(&t);
    printf("Current time: %s", ctime(&t));

    clock_t start = clock();
    // Some CPU intensive work simulated here
    for(int i = 0; i < 100000000; i++);
    clock_t end = clock();
    double time_taken = (double)(end - start) / CLOCKS_PER_SEC;
    printf("Execution time: %f seconds\\n", time_taken);

    return 0;
}
  `,
          explanation: `
  - <stdlib.h> provides memory management, random number generation, and process termination functions.
  - <ctype.h> offers functions for checking character types and converting case.
  - <math.h> contains mathematical functions like power, square root, absolute value, and trigonometry.
  - <time.h> helps with getting current time, measuring execution time, and timing operations.
  - Using these standard libraries effectively simplifies many common programming tasks.
  `,
          task: `
  Task:
  1. Write code allocating and freeing dynamic memory using malloc, calloc, and realloc.
  2. Generate random numbers and seed the random generator.
  3. Use ctype functions to classify and convert characters.
  4. Calculate powers, roots, and trigonometric values with math functions.
  5. Use time functions to display current time and measure execution durations of code blocks.
  6. Experiment with error scenarios for memory allocation and handle them gracefully.
  `
        },
        {
          title: 'Bit Manipulation in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Basic Bitwise Operators</h2>
    <p>Bitwise operators operate on individual bits of integers.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">&amp;</td><td class="border border-gray-400 px-4 py-2">AND</td><td class="border border-gray-400 px-4 py-2">5 &amp; 3 = 1</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">|</td><td class="border border-gray-400 px-4 py-2">OR</td><td class="border border-gray-400 px-4 py-2">5 | 3 = 7</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">^</td><td class="border border-gray-400 px-4 py-2">XOR</td><td class="border border-gray-400 px-4 py-2">5 ^ 3 = 6</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">~</td><td class="border border-gray-400 px-4 py-2">NOT (bitwise complement)</td><td class="border border-gray-400 px-4 py-2">~5 = -6</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&lt;&lt;</td><td class="border border-gray-400 px-4 py-2">Left Shift</td><td class="border border-gray-400 px-4 py-2">5 &lt;&lt; 1 = 10</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&gt;&gt;</td><td class="border border-gray-400 px-4 py-2">Right Shift</td><td class="border border-gray-400 px-4 py-2">5 &gt;&gt; 1 = 2</td></tr>
      </tbody>
    </table>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 3;

    printf("AND: %d\\n", a & b);
    printf("OR: %d\\n", a | b);
    printf("XOR: %d\\n", a ^ b);
    printf("NOT a: %d\\n", ~a);
    printf("a << 1: %d\\n", a << 1);
    printf("a >> 1: %d\\n", a >> 1);

    return 0;
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Setting, Clearing, Toggling, and Checking Bits</h2>
    <p>Manipulate specific bits by using bitwise operators.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>int x = 5; // binary 0101

// Set 2nd bit
x |= (1 << 1);      // 0101 | 0010 = 0111 (7)

// Clear 3rd bit
x &= ~(1 << 2);     // 0111 & 1011 = 0011 (3)

// Toggle 1st bit
x ^= (1 << 0);      // 0011 ^ 0001 = 0010 (2)

// Check if 2nd bit is set
if (x & (1 << 1))
    printf("2nd bit is set\\n");
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Bit-fields in Structures</h2>
    <p>Bit-fields allow storing multiple small-sized flags efficiently within a struct.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>struct Flags {
    unsigned int isOn : 1;
    unsigned int isVisible : 1;
    unsigned int error : 2;
};

int main() {
    struct Flags f = {1, 0, 3};
    printf("isOn=%d, isVisible=%d, error=%d\\n", f.isOn, f.isVisible, f.error);
    return 0;
}
</code></pre>
    <p>This reduces overall memory by assigning fewer bits per field.</p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Bitwise operators facilitate efficient, low-level integer manipulation.</li>
      <li>Bit-fields save memory by packing several flags into a small space inside structs.</li>
      <li>Common uses: embedded systems, graphics, cryptography, compressing data.</li>
    </ul>
  `,
          code: `
// Bit manipulation examples in C

#include <stdio.h>

int main() {
    int a = 5, b = 3;

    // Basic bitwise operations
    printf("AND: %d\\n", a & b);
    printf("OR: %d\\n", a | b);
    printf("XOR: %d\\n", a ^ b);
    printf("NOT a: %d\\n", ~a);
    printf("a << 1: %d\\n", a << 1);
    printf("a >> 1: %d\\n", a >> 1);

    // Bit manipulation (set, clear, toggle, check)
    int x = 5; // 0101

    x |= (1 << 1);   // Set 2nd bit → 7
    printf("After setting 2nd bit: %d\\n", x);

    x &= ~(1 << 2);  // Clear 3rd bit → 3
    printf("After clearing 3rd bit: %d\\n", x);

    x ^= (1 << 0);   // Toggle 1st bit → 2
    printf("After toggling 1st bit: %d\\n", x);

    if (x & (1 << 1))
        printf("2nd bit is set\\n");
    else
        printf("2nd bit is not set\\n");

    // Bit-fields in structure
    struct Flags {
        unsigned int isOn : 1;
        unsigned int isVisible : 1;
        unsigned int error : 2;
    };

    struct Flags f = {1, 0, 3};
    printf("isOn=%d, isVisible=%d, error=%d\\n", f.isOn, f.isVisible, f.error);

    return 0;
}
  `,
          explanation: `
  - Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual bits of integers.
  - Setting bits: use OR with mask shifted to position.
  - Clearing bits: AND with negated mask.
  - Toggling bits: XOR with mask.
  - Checking bits: AND with mask, result non-zero means bit is set.
  - Bit-fields in structs allocate fewer bits per variable, saving memory.
  - Bit manipulation is common in low-level programming and performance critical code.
  `,
          task: `
  Task:
  1. Practice using basic bitwise operators with different integers.
  2. Write functions to set, clear, toggle, and check specific bits.
  3. Define structs with bit-fields to store multiple boolean flags.
  4. Experiment with printing bit patterns using shifts and masks.
  5. Explore real-world use cases e.g., setting permission bits or flag registers.
  6. Learn to debug bitwise logic with visual aids like binary representations.
  `
        },
        {
          title: 'Multi-file Projects & Build Process in C',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Splitting Code into Multiple Files</h2>
    
    <h3>1. Header Files (.h)</h3>
    <p>Contain function prototypes, macros, structs, constants.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int multiply(int a, int b);

#endif
</code></pre>
    
    <h3>2. Source Files (.c)</h3>
    <p>Contain function definitions and implementations.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
</code></pre>
    
    <h3>3. Main Program</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>#include &lt;stdio.h&gt;
#include "math_utils.h"

int main() {
    printf("Sum: %d\\n", add(5, 3));
    printf("Product: %d\\n", multiply(5, 3));
    return 0;
}
</code></pre>
    
    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Compilation Process</h2>
    <p>Steps to compile a multi-file C project:</p>
    <ol class="list-decimal list-inside mb-4">
      <li><strong>Preprocessing:</strong> Handles <code>#include</code>, <code>#define</code>, macros.</li>
      <li><strong>Compilation:</strong> Converts C code to assembly.</li>
      <li><strong>Assembling:</strong> Converts assembly to object files (.o).</li>
      <li><strong>Linking:</strong> Combines object files into executable.</li>
    </ol>
    <p>Example commands:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>gcc -c math_utils.c -o math_utils.o  # compile to object file
gcc -c main.c -o main.o
gcc main.o math_utils.o -o program   # link object files
./program                            # run
</code></pre>
    
    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Makefiles (Automating Builds)</h2>
    <p>Makefile automates compilation and linking, recompiling only changed files.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>CC = gcc
CFLAGS = -Wall
OBJ = main.o math_utils.o
TARGET = program

$(TARGET): $(OBJ)
    $(CC) $(OBJ) -o $(TARGET)

main.o: main.c math_utils.h
    $(CC) $(CFLAGS) -c main.c

math_utils.o: math_utils.c math_utils.h
    $(CC) $(CFLAGS) -c math_utils.c

clean:
    rm -f *.o $(TARGET)
</code></pre>
    <p>Commands:</p>
    <ul class="list-disc list-inside mb-4">
      <li><code>make</code> &mdash; builds the project</li>
      <li><code>make clean</code> &mdash; deletes object files and executables</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use header files for declarations, source (.c) files for definitions.</li>
      <li>Object files (.o) allow compiling individual modules separately.</li>
      <li>Makefiles help automate building large projects efficiently.</li>
      <li>Understanding the build steps (preprocessing, compiling, assembling, linking) is vital for complex programs.</li>
    </ul>
  `,
          code: `
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int multiply(int a, int b);

#endif

// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

// main.c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("Sum: %d\\n", add(5, 3));
    printf("Product: %d\\n", multiply(5, 3));
    return 0;
}
  `,
          explanation: `
  - The header file (.h) declares functions, keeping interfaces clean and separate from implementation.
  - Source files (.c) implement the declared functions and include respective headers.
  - Main program includes headers and calls functions.
  - Compilation involves creating object files (.o) from source files and then linking them into an executable.
  - Makefiles define rules and dependencies, automating and streamlining the build process.
  `,
          task: `
  Task:
  1. Create header and source files for utility functions.
  2. Write a main program that uses those utilities.
  3. Compile source files separately into object files and link them manually.
  4. Write a Makefile to automate compilation and linking.
  5. Practice modifying one source file and rebuilding using the Makefile.
  6. Explore adding flags like -Wall to see compiler warnings.
  `
        },
      ]
    }
  };

  const finalProject = {
    title: "Final Project: C Language ATM System",
    description: "A console-based ATM management system in C where users can register accounts, login using PIN, check balance, deposit, withdraw, transfer money, and view transaction history.",
    requirements: [
      "Use structs to store account information",
      "Implement functions for account creation, login, deposit, withdraw, transfer, and transaction history",
      "Use file handling to save account data permanently",
      "Create a menu-driven interface for user interaction",
      "Validate user input (PIN, amount, etc.)",
      "Ensure secure access with PIN authentication",
      "Optional: Add multi-user support and auto-increment account numbers"
    ],
    structure: `ATM_System/
├── main.c         // Main program with menu
├── account.c      // Functions for account operations
├── account.h      // Structs and function declarations
└── data.txt       // Stored account data for persistence`,
    bonus: [
      "Add transaction history file to keep record of deposits, withdrawals, and transfers",
      "Implement multi-user support with multiple accounts",
      "Encrypt PINs for security",
      "Add detailed account statements on request",
      "Improve menu with color formatting and better UX in console"
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
          Complete C Language Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in C Language from Beginner to Advanced Level
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

export default CNotes;
