import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const JavaSceriptNotes = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level JS Notes",
      topics: [
        {
          title: 'Introduction to JavaScript and Its Uses',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">What is JavaScript?</h2>
      <p class="text-gray-700 mb-4">
        JavaScript (JS) is a <span class="font-semibold">high-level, dynamic, interpreted</span> programming language that is primarily used for making web pages interactive.
      </p>

      <h3 class="text-xl font-semibold text-green-600 mb-2">History & Evolution:</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Created in 1995 by <span class="font-semibold">Brendan Eich</span> at Netscape.</li>
        <li>Initially called <span class="italic">Mocha</span>, then <span class="italic">LiveScript</span>, and finally JavaScript.</li>
        <li>Standardized by <span class="font-semibold">ECMAScript (ES)</span>.</li>
      </ul>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Why it’s important?</h3>
      <p class="text-gray-700 mb-4">
        JavaScript is one of the <span class="font-bold">core technologies</span> of the web, alongside HTML and CSS.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">Main Uses:</h3>
      <ul class="list-disc list-inside text-gray-700">
        <li><span class="font-semibold">Front-End Development (Client-Side):</span> Animations, forms, DOM manipulation, dynamic UI.</li>
        <li><span class="font-semibold">Back-End Development (Server-Side):</span> With Node.js, JS can run on servers.</li>
        <li><span class="font-semibold">Mobile Apps:</span> Frameworks like React Native.</li>
        <li><span class="font-semibold">Desktop Apps:</span> Electron.js (e.g., VS Code).</li>
        <li><span class="font-semibold">Game Development:</span> Phaser.js and Three.js for 2D/3D games.</li>
      </ul>
    </div>
  `,
          code: `
    // Example JavaScript Code
    console.log("Hello, World!");
  `,
          explanation: `
    The above code prints "Hello, World!" in the browser console.
    This is often the first step when learning JavaScript to ensure everything is set up correctly.
  `,
          task: 'Write a JavaScript program that prints your name and favorite programming language in the console.',
        },
        {
          title: 'Basic Syntax, Comments, and Statements',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Syntax</h2>
      <p class="text-gray-700 mb-4">
        JavaScript <span class="font-semibold">syntax</span> is a set of rules that define how programs are written and interpreted.
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><span class="font-semibold">Case-sensitive:</span> <code class="bg-gray-200 px-1 rounded">name</code> and <code class="bg-gray-200 px-1 rounded">Name</code> are different.</li>
        <li><span class="font-semibold">Statements:</span> Usually end with a semicolon (<code class="bg-gray-200 px-1 rounded">;</code>).</li>
        <li><span class="font-semibold">Code blocks:</span> Written inside curly braces <code class="bg-gray-200 px-1 rounded">{ }</code>.</li>
      </ul>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Comments</h3>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto"><code>// Single-line comment
/* Multi-line
   comment */</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Statements Example</h3>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>let name = "Bilal"; // variable declaration
console.log("Hello " + name); // output statement</code></pre>
    </div>
  `,
          code: `
    // Example Code
    let age = 20; 
    if (age >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }
  `,
          explanation: `
    In this example:
    - A variable 'age' is declared with the value 20.
    - Using an if-else statement, the program checks if the person is an adult or a minor.
  `,
          task: 'Write a program that declares a variable "city" with your city name and prints "I live in <city>" using console.log.',
        },
        {
          title: 'Variables: var, let, const and Their Scope',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">Understanding Variables in JavaScript</h2>
      <p class="text-gray-700 mb-4">
        JavaScript provides <span class="font-semibold">var</span>, <span class="font-semibold">let</span>, and <span class="font-semibold">const</span> for declaring variables, each with different scoping rules and behaviors.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">var</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><span class="font-semibold">Function-scoped.</span></li>
        <li>Can be <span class="font-semibold">re-declared</span> and <span class="font-semibold">updated.</span></li>
        <li><span class="font-semibold">Hoisted:</span> moved to the top of scope with <code class="bg-gray-200 px-1 rounded">undefined</code> value.</li>
      </ul>

      <h3 class="text-xl font-semibold text-green-600 mb-2">let</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><span class="font-semibold">Block-scoped { }.</span></li>
        <li>Can be <span class="font-semibold">updated</span> but <span class="font-semibold">not re-declared</span> in the same scope.</li>
      </ul>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">const</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><span class="font-semibold">Block-scoped.</span></li>
        <li>Cannot be <span class="font-semibold">re-declared</span> or <span class="font-semibold">updated.</span></li>
        <li>Values of <span class="font-semibold">objects/arrays</span> declared with const <span class="italic">can be modified</span>, but the variable itself cannot be reassigned.</li>
      </ul>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">Example</h3>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>if (true) {
  var x = 10;   // accessible outside block
  let y = 20;   // only inside block
  const z = 30; // only inside block
}
console.log(x); // 10
console.log(y); // Error
console.log(z); // Error</code></pre>
    </div>
  `,
          code: `
    // Example with var, let, and const
    function testScope() {
      if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
      }
      console.log(a); // Works
      console.log(b); // Error: not defined
      console.log(c); // Error: not defined
    }
    testScope();
  `,
          explanation: `
    - 'var' is function-scoped, so it is accessible outside the block but inside the function.
    - 'let' and 'const' are block-scoped, so they cannot be accessed outside their block.
    - 'const' prevents reassignment, but allows modification of object or array values.
  `,
          task: 'Write a program using var, let, and const to demonstrate their scope differences. Try printing them outside their block to observe behavior.',
        },
        {
          title: 'Data Types and Type Conversion / Coercion',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Data Types</h2>
      <p class="text-gray-700 mb-4">
        JavaScript has two main categories of data types: 
        <span class="font-semibold">Primitive</span> and 
        <span class="font-semibold">Reference (Non-Primitive)</span>.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">Primitive Types</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>String</li>
        <li>Number</li>
        <li>Boolean</li>
        <li>Undefined</li>
        <li>Null</li>
        <li>Symbol</li>
        <li>BigInt</li>
      </ul>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Reference Types (Non-Primitive)</h3>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Objects</li>
        <li>Arrays</li>
        <li>Functions</li>
      </ul>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Examples</h3>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto"><code>let name = "Ali";        // string
let age = 21;            // number
let isStudent = true;    // boolean
let car = null;          // null
let data;                // undefined</code></pre>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">Type Conversion (Explicit)</h3>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto"><code>Number("123"); // 123
String(45);    // "45"
Boolean(0);    // false</code></pre>

      <h3 class="text-xl font-semibold text-yellow-600 mb-2">Type Coercion (Implicit)</h3>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>"5" + 2  // "52" (string concatenation)
"5" - 2  // 3   (converted to number)</code></pre>
    </div>
  `,
          code: `
    // Example of Type Conversion and Coercion
    let value1 = "10";
    let value2 = 5;

    // Explicit Conversion
    let sum = Number(value1) + value2; // 15

    // Implicit Conversion
    let result1 = value1 + value2; // "105"
    let result2 = value1 - value2; // 5

    console.log(sum, result1, result2);
  `,
          explanation: `
    - Primitive data types are immutable and stored directly in memory.
    - Reference types are stored as references (pointers to memory).
    - Explicit conversion uses functions like Number(), String(), Boolean().
    - Implicit coercion happens automatically during operations, e.g., "+" converts to string, "-" converts to number.
  `,
          task: 'Write a program where you declare variables of each primitive type, then try converting them explicitly and implicitly. Print the results to observe the differences.',
        },
        {
          title: 'Basic Operators',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Operators</h2>
      <p class="text-gray-700 mb-4">
        Operators are special symbols used to perform operations on values and variables.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">Arithmetic Operators</h3>
      <p class="text-gray-700 mb-2">Used for mathematical calculations.</p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><code class="bg-gray-200 px-1 rounded">+</code> Addition</li>
        <li><code class="bg-gray-200 px-1 rounded">-</code> Subtraction</li>
        <li><code class="bg-gray-200 px-1 rounded">*</code> Multiplication</li>
        <li><code class="bg-gray-200 px-1 rounded">/</code> Division</li>
        <li><code class="bg-gray-200 px-1 rounded">%</code> Modulus (remainder)</li>
        <li><code class="bg-gray-200 px-1 rounded">**</code> Exponentiation</li>
      </ul>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Assignment Operators</h3>
      <p class="text-gray-700 mb-2">Used to assign values to variables.</p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><code class="bg-gray-200 px-1 rounded">=</code> Assign</li>
        <li><code class="bg-gray-200 px-1 rounded">+=</code> Add and assign</li>
        <li><code class="bg-gray-200 px-1 rounded">-=</code> Subtract and assign</li>
        <li><code class="bg-gray-200 px-1 rounded">*=</code> Multiply and assign</li>
        <li><code class="bg-gray-200 px-1 rounded">/=</code> Divide and assign</li>
      </ul>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Comparison Operators</h3>
      <p class="text-gray-700 mb-2">Used to compare values.</p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><code class="bg-gray-200 px-1 rounded">==</code> Loose equality (type coercion allowed)</li>
        <li><code class="bg-gray-200 px-1 rounded">===</code> Strict equality (no coercion)</li>
        <li><code class="bg-gray-200 px-1 rounded">!=</code> Loose inequality</li>
        <li><code class="bg-gray-200 px-1 rounded">!==</code> Strict inequality</li>
      </ul>

      <h3 class="text-xl font-semibold text-yellow-600 mb-2">Logical Operators</h3>
      <p class="text-gray-700 mb-2">Used to combine conditions.</p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><code class="bg-gray-200 px-1 rounded">&&</code> AND</li>
        <li><code class="bg-gray-200 px-1 rounded">||</code> OR</li>
        <li><code class="bg-gray-200 px-1 rounded">!</code> NOT</li>
      </ul>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">Example</h3>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>let a = 5, b = "5";
console.log(a == b);  // true (loose equality)
console.log(a === b); // false (strict equality)</code></pre>
    </div>
  `,
          code: `
    // Example with operators
    let x = 10, y = 3;

    // Arithmetic
    console.log(x + y); // 13
    console.log(x % y); // 1

    // Assignment
    x += 5; 
    console.log(x); // 15

    // Comparison
    console.log(x > y); // true

    // Logical
    console.log(x > 5 && y < 5); // true
  `,
          explanation: `
    - Arithmetic operators handle math operations.
    - Assignment operators change variable values.
    - Comparison operators return true/false based on conditions.
    - Logical operators combine conditions.
    - Loose equality (==) allows type coercion, while strict equality (===) checks both value and type.
  `,
          task: 'Write a program that takes two numbers and demonstrates all arithmetic, assignment, comparison, and logical operators with them.',
        },
        {
          title: 'Conditional Statements',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Conditional Statements</h2>
      <p class="text-gray-700 mb-4">
        Conditional statements are used to perform different actions based on conditions.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">if-else</h3>
      <p class="text-gray-700 mb-2">Executes a block of code if the condition is true, otherwise executes another block.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto"><code>let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}</code></pre>

      <h3 class="text-xl font-semibold text-green-600 mb-2">switch-case</h3>
      <p class="text-gray-700 mb-2">Used to perform different actions based on multiple possible values of a variable.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto"><code>let day = "Monday";
switch (day) {
  case "Monday": 
    console.log("Start of the week"); 
    break;
  case "Friday": 
    console.log("Almost weekend"); 
    break;
  default: 
    console.log("Another day");
}</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Ternary Operator</h3>
      <p class="text-gray-700 mb-2">A shorthand way of writing simple if-else conditions.</p>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>let result = (age >= 18) ? "Adult" : "Minor";</code></pre>
    </div>
  `,
          code: `
    // Example: Nested Conditional Statements
    let marks = 75;

    if (marks >= 90) {
      console.log("Grade: A+");
    } else if (marks >= 80) {
      console.log("Grade: A");
    } else if (marks >= 70) {
      console.log("Grade: B");
    } else {
      console.log("Grade: C or below");
    }

    // Using ternary
    let grade = (marks >= 50) ? "Pass" : "Fail";
    console.log(grade);
  `,
          explanation: `
    - if-else is used for binary decisions (true/false).
    - switch-case is better for multiple possible values of one variable.
    - ternary operator provides a shorthand for simple if-else conditions.
  `,
          task: 'Write a program that checks today’s day and prints a special message using both switch-case and ternary operator.',
        },
        {
          title: 'Loops',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Loops</h2>
      <p class="text-gray-700 mb-4">
        Loops are used to execute a block of code repeatedly as long as a specified condition is true.
      </p>

      <h3 class="text-xl font-semibold text-red-600 mb-2">for loop</h3>
      <p class="text-gray-700 mb-2">Repeats code a specific number of times.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

      <h3 class="text-xl font-semibold text-green-600 mb-2">while loop</h3>
      <p class="text-gray-700 mb-2">Executes as long as the condition is true.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">do-while loop</h3>
      <p class="text-gray-700 mb-2">Executes the block at least once before checking the condition.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);</code></pre>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">for-in loop</h3>
      <p class="text-gray-700 mb-2">Used for iterating over object properties.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>let obj = {name: "Ali", age: 21};
for (let key in obj) {
  console.log(key, obj[key]);
}</code></pre>

      <h3 class="text-xl font-semibold text-yellow-600 mb-2">for-of loop</h3>
      <p class="text-gray-700 mb-2">Used for iterating over arrays or strings.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg"><code>let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}</code></pre>
    </div>
  `,
          code: `
    // Example: Combining Loops
    let fruits = ["Apple", "Banana", "Mango"];

    // for loop
    for (let i = 0; i < fruits.length; i++) {
      console.log("For:", fruits[i]);
    }

    // for-of loop
    for (let fruit of fruits) {
      console.log("For-of:", fruit);
    }

    // for-in loop (with object)
    let student = {name: "Bilal", age: 20, course: "BSCS"};
    for (let key in student) {
      console.log(key + ":", student[key]);
    }
  `,
          explanation: `
    - for loop is best when the number of iterations is known.
    - while loop is used when the number of iterations is not fixed.
    - do-while loop runs at least once before checking the condition.
    - for-in is designed for objects (iterates over keys).
    - for-of is designed for arrays/iterables (iterates over values).
  `,
          task: 'Write a program that prints all numbers from 1 to 10 using for, while, and do-while loops. Then, use for-in to display object properties and for-of to display array values.',
        },
        {
          title: 'Functions',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">JavaScript Functions</h2>
      <p class="text-gray-700 mb-4">
        A function is a reusable block of code designed to perform a particular task. 
        Functions make programs more modular, maintainable, and reusable.
      </p>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Function Declaration</h3>
      <p class="text-gray-700 mb-2">Defined using the <code>function</code> keyword.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto "><code>function greet(name) {
  return "Hello " + name;
}
console.log(greet("Bilal"));</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Function Expression</h3>
      <p class="text-gray-700 mb-2">Stored inside a variable.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto "><code>const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));</code></pre>

      <h3 class="text-xl font-semibold text-red-600 mb-2">Arrow Function</h3>
      <p class="text-gray-700 mb-2">Shorter syntax introduced in ES6.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto "><code>const multiply = (x, y) => x * y;
console.log(multiply(4, 6));</code></pre>

      <h3 class="text-xl font-semibold text-yellow-600 mb-2">Default Parameters</h3>
      <p class="text-gray-700 mb-2">Allow setting default values for function arguments.</p>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>function welcome(name = "Guest") {
  return "Welcome " + name;
}
console.log(welcome());
console.log(welcome("Ali"));</code></pre>
    </div>
  `,
          code: `
    // Example: Different function types
    function square(n) {
      return n * n;
    }

    const divide = function(a, b) {
      return a / b;
    };

    const power = (base, exp) => base ** exp;

    console.log("Square:", square(5));
    console.log("Divide:", divide(10, 2));
    console.log("Power:", power(2, 3));
  `,
          explanation: `
    - Function Declaration: Traditional way, hoisted (can be called before definition).
    - Function Expression: Stored in a variable, not hoisted.
    - Arrow Function: Short syntax, doesn't bind its own 'this'.
    - Default Parameters: Provide fallback values if arguments are missing.
  `,
          task: 'Create a function to calculate factorial of a number. Write it using declaration, expression, and arrow function styles.',
        },
        {
          title: 'Basic DOM Manipulation and Event Handling',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-600 mb-3">Basic DOM Manipulation and Event Handling</h2>
      <p class="text-gray-700 mb-4">
        The DOM (Document Object Model) represents a web page as a tree of nodes. 
        JavaScript can be used to access, change, and interact with these nodes, making 
        web pages dynamic and interactive.
      </p>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Accessing Elements</h3>
      <p class="text-gray-700 mb-2">Use DOM methods to select HTML elements.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto "><code>document.getElementById("demo");
document.querySelector(".className");</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">Changing Content & Styles</h3>
      <p class="text-gray-700 mb-2">Modify text, HTML, or CSS styles dynamically.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4 overflow-x-auto "><code>let el = document.getElementById("demo");
el.innerHTML = "New Content";
el.style.color = "blue";</code></pre>

      <h3 class="text-xl font-semibold text-red-600 mb-2">Event Handling</h3>
      <p class="text-gray-700 mb-2">Attach JavaScript functions to user actions (like clicks).</p>
      <pre class="bg-black text-white p-3 rounded-lg overflow-x-auto"><code>&lt;button id="btn"&gt;Click Me&lt;/button&gt;

&lt;script&gt;
  document.getElementById("btn").addEventListener("click", () =&gt; {
    alert("Button was clicked!");
  });
&lt;/script&gt;</code></pre>
    </div>
  `,
          code: `
// Example: DOM Manipulation and Event Handling
const heading = document.getElementById("heading");

// Change content and style
heading.innerText = "Updated Heading!";
heading.style.color = "green";

// Add event listener
document.getElementById("btn").addEventListener("mouseover", () => {
  heading.style.fontSize = "30px";
  console.log("Mouse over the button!");
});
  `,
          explanation: `
    - The DOM is a tree-like structure that represents your webpage.
    - Accessing Elements: Methods like getElementById and querySelector help select elements.
    - Changing Content/Style: innerHTML, innerText, and style properties are used to update elements.
    - Event Handling: addEventListener allows interaction (click, hover, keypress, etc.) with elements.
  `,
          task: 'Create a button that changes the background color of the page every time it is clicked. Try using both inline and external event handling methods.',
        },
        {
          title: 'Errors and Exception Handling',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-red-600 mb-3">Errors and Exception Handling</h2>
      <p class="text-gray-700 mb-4">
        Errors are unexpected issues that occur during program execution. If not handled, they can crash the program. 
        Exception handling allows us to gracefully catch and respond to these errors without stopping the application.
      </p>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">try-catch Block</h3>
      <p class="text-gray-700 mb-2">The <code>try</code> block contains code that might throw an error. 
      If an error occurs, control is passed to the <code>catch</code> block.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>try {
  let result = 10 / 0;
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Error: " + err.message);
} finally {
  console.log("Always executes");
}</code></pre>

      <h3 class="text-xl font-semibold text-green-600 mb-2">Custom Errors</h3>
      <p class="text-gray-700 mb-2">You can create and throw your own errors using the <code>Error</code> object.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.error(err.message);
}</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">finally Block</h3>
      <p class="text-gray-700 mb-2">The <code>finally</code> block executes regardless of whether an error occurred.</p>
    </div>
  `,
          code: `
    // Example: Error Handling
    try {
      JSON.parse("{invalidJson}");
    } catch (err) {
      console.error("Caught an error:", err.message);
    } finally {
      console.log("Parsing attempt finished.");
    }

    // Custom Error Example
    function divide(a, b) {
      if (b === 0) throw new Error("Division by zero is not allowed");
      return a / b;
    }

    try {
      console.log(divide(10, 0));
    } catch (err) {
      console.error("Error:", err.message);
    }
  `,
          explanation: `
    - try: Wraps code that may throw an error.
    - catch: Handles the error if one occurs.
    - finally: Executes code regardless of success or failure.
    - throw: Used to create custom errors.
  `,
          task: 'Write a function that checks if a number is positive. If it is negative, throw an error. Use try-catch to handle it.',
        },
        {
          title: 'Simple JavaScript in HTML',
          theroy: `
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-indigo-600 mb-3">Simple JavaScript in HTML</h2>
      <p class="text-gray-700 mb-4">
        JavaScript can be included in an HTML page in three main ways: 
        <strong>Inline</strong>, <strong>Internal</strong>, and <strong>External</strong>. 
        External scripts are generally considered best practice for cleaner and reusable code.
      </p>

      <h3 class="text-xl font-semibold text-blue-600 mb-2">1. Inline JavaScript</h3>
      <p class="text-gray-700 mb-2">Directly write JavaScript inside an HTML element’s attribute.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>&lt;button onclick="alert('Hello!')"&gt;Click&lt;/button&gt;</code></pre>

      <h3 class="text-xl font-semibold text-green-600 mb-2">2. Internal JavaScript</h3>
      <p class="text-gray-700 mb-2">Write JavaScript inside the <code>&lt;script&gt;</code> tag in the HTML file.</p>
      <pre class="bg-black overflow-x-auto text-white p-3 rounded-lg mb-4"><code>&lt;script&gt;
  console.log("Hello from JS");
&lt;/script&gt;</code></pre>

      <h3 class="text-xl font-semibold text-purple-600 mb-2">3. External JavaScript</h3>
      <p class="text-gray-700 mb-2">Save JavaScript in a separate file (e.g., <code>app.js</code>) and link it.</p>
      <pre class="bg-black text-white p-3 rounded-lg mb-4"><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre>
    </div>
  `,
          code: `
    <!-- Inline Example -->
    <button onclick="alert('Inline Hello!')">Click Me</button>

    <!-- Internal Example -->
    <script>
      document.write("This is Internal JS Example<br>");
    </script>

    <!-- External Example -->
    <script src="app.js"></script>
  `,
          explanation: `
    - Inline: Quick but not recommended for larger projects.
    - Internal: Keeps JS in the same file, good for small scripts.
    - External: Best practice, makes code reusable and clean.
  `,
          task: 'Create a button that shows an alert using Inline, Internal, and External JavaScript one by one.',
        },
        // {
        //   title: '',
        //   theroy: ``,
        //   code: ``,
        //   explanation: ``,
        //   task: '',
        // },
      ]

    },

    intermediate: {
      title: "Intermediate Level JS Notes",
      topics: [
        {
          title: 'Function Hoisting',
          theroy: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold text-blue-600 mb-2">Function Hoisting</h2>
      <p class="text-gray-700">
        Hoisting means moving declarations to the top of the scope before code execution. 
        In JavaScript, <span class="font-semibold text-green-600">function declarations</span> 
        are hoisted, but <span class="font-semibold text-red-600">function expressions</span> are not.
      </p>
      <ul class="list-disc pl-6 text-gray-700 mt-2">
        <li><strong>Function Declarations</strong> → Hoisted ✅</li>
        <li><strong>Function Expressions & Arrow Functions</strong> → Not hoisted ❌</li>
      </ul>
    </div>
  `,
          code: `// Example 1 (Declaration Hoisting)
greet(); // ✅ Works

function greet() {
  console.log("Hello!");
}

// Example 2 (Expression not hoisted)
greet(); // ❌ Error

const greet = function() {
  console.log("Hello!");
};`,
          explanation: `Function declarations are moved to the top of their scope, so they can be called before they are defined. Function expressions and arrow functions are not hoisted, so they must be defined before calling.`,
          task: 'Write a function expression and test what happens when you call it before definition vs after definition.'
        },

        {
          title: 'Closures',
          theroy: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold text-purple-600 mb-2">Closures</h2>
      <p class="text-gray-700">
        A closure is formed when a function <span class="text-green-600 font-semibold">remembers variables from its outer scope</span> 
        even after that outer function has finished executing.
      </p>
      <ul class="list-disc pl-6 text-gray-700 mt-2">
        <li>Provides <strong>data privacy</strong> (encapsulation)</li>
        <li>Maintains <strong>state</strong> between function calls</li>
      </ul>
    </div>
  `,
          code: `function outer() {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  return inner;
}

const increase = outer();
console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3`,
          explanation: `Closures let inner functions keep access to variables of their parent function, even after the parent function has finished running.`,
          task: 'Create a closure that keeps track of how many times a button was clicked.'
        },

        {
          title: 'Callbacks',
          theroy: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold text-indigo-600 mb-2">Callbacks</h2>
      <p class="text-gray-700">
        A callback is a function passed as an argument to another function, 
        to be executed later. Commonly used in asynchronous operations.
      </p>
      <p class="mt-2 text-gray-700">
        Example: <code>setTimeout</code>, API calls, or event listeners.
      </p>
    </div>
  `,
          code: `// Example 1 (Simple Callback)
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Bilal", sayBye);

// Example 2 (Async Callback)
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");`,
          explanation: `Callbacks are functions passed as arguments. They are useful for async tasks but can lead to "callback hell," which is solved by Promises and async/await.`,
          task: 'Write a function that takes a user’s name and calls a callback to display a welcome message.'
        },

        {
          title: 'Putting It All Together',
          theroy: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold text-teal-600 mb-2">Putting It All Together</h2>
      <p class="text-gray-700">
        Hoisting explains why function declaration order matters. 
        Closures allow variables to persist beyond execution. 
        Callbacks handle asynchronous code.
      </p>
    </div>
  `,
          code: `function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

function processData(data) {
  console.log("Processing: " + data);
}

fetchData(processData);`,
          explanation: `This example combines all three concepts: hoisting (functions work before defined if declared), closures (state persistence), and callbacks (async execution).`,
          task: 'Modify fetchData to use a closure that counts how many times data was fetched, and pass that count to the callback.'
        },
        {
          title: 'Objects, Prototypes, and Classes in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold mb-3 text-blue-600">Objects in JavaScript</h2>
    <p class="mb-2">An <b>object</b> is a collection of key-value pairs (properties and methods). Objects allow us to model real-world entities.</p>
    <ul class="list-disc list-inside mb-4">
      <li><b>Properties</b> = Data (variables inside objects)</li>
      <li><b>Methods</b> = Functions inside objects</li>
    </ul>

    <h2 class="text-xl font-semibold mb-2 text-green-600">Prototypes</h2>
    <p class="mb-2">Every JavaScript object has a hidden property <code>[[Prototype]]</code> that points to another object. This allows <b>inheritance</b> (method sharing without duplication).</p>

    <h2 class="text-xl font-semibold mb-2 text-purple-600">Classes (ES6)</h2>
    <p class="mb-2">Classes are <b>syntactic sugar</b> over prototypes. They provide cleaner, object-oriented syntax similar to Java/C++.</p>

    <h2 class="text-xl font-semibold mb-2 text-pink-600">Inheritance</h2>
    <p class="mb-2">Classes can inherit properties and methods using the <code>extends</code> keyword.</p>

    <h2 class="text-xl font-semibold mb-2 text-red-600">Important OOP Concepts</h2>
    <ul class="list-disc list-inside mb-4">
      <li><b>Encapsulation</b>: Bundle data + methods</li>
      <li><b>Inheritance</b>: Reuse methods from parent classes</li>
      <li><b>Polymorphism</b>: Same method behaves differently in subclasses</li>
      <li><b>Abstraction</b>: Hiding details, exposing essentials</li>
    </ul>

    <h2 class="text-xl font-semibold mb-2 text-indigo-600">Objects vs Classes vs Prototypes</h2>
    <ul class="list-disc list-inside">
      <li><b>Objects</b>: Direct key-value storage</li>
      <li><b>Prototypes</b>: Provide inheritance</li>
      <li><b>Classes</b>: Modern, clean OOP syntax</li>
    </ul>
  `,
          code: `// Objects
let person = {
  name: "Bilal",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
console.log(person.name); // Bilal
person.greet(); // Hello, my name is Bilal

// Prototypes
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello, I'm " + this.name);
};
let p1 = new Person("Ali");
let p2 = new Person("Bilal");
p1.greet(); // Hello, I'm Ali
p2.greet(); // Hello, I'm Bilal

// Classes
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(\`Hi, my name is \${this.name} and I'm \${this.age}\`);
  }
}
let user1 = new PersonClass("Bilal", 20);
user1.greet(); // Hi, my name is Bilal and I'm 20

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a noise\`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}
let d = new Dog("Rex");
d.speak(); // Rex barks
`,
          explanation: `
    - Objects are the foundation of JavaScript's OOP.
    - Prototypes allow objects to share methods without duplication.
    - Classes are modern syntax built on prototypes.
    - Inheritance allows one class to extend another, promoting code reuse.
    - OOP concepts like Encapsulation, Polymorphism, and Abstraction can be applied in JS.
  `,
          task: 'Create a class "Car" with properties (brand, model) and a method "drive". Then create a subclass "ElectricCar" that extends Car and adds a "battery" property with a custom method.',
        },
        {
          title: 'JavaScript Arrays and Array Methods',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What are Arrays?</h2>
    <p class="text-gray-700 mb-4">
      In JavaScript, an <span class="font-semibold text-purple-600">Array</span> is a special variable 
      that can hold more than one value at a time. It is an ordered collection where each item 
      is stored at a numeric <span class="text-green-600 font-medium">index (starting from 0)</span>.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✨ Key Features:</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Can store multiple values in a single variable</li>
      <li>Supports different data types in the same array</li>
      <li>Dynamic in size (can grow or shrink)</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">⚙️ Common Array Methods:</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code class="bg-gray-200 px-1 rounded">push()</code> → Add item at the end</li>
      <li><code class="bg-gray-200 px-1 rounded">pop()</code> → Remove item from the end</li>
      <li><code class="bg-gray-200 px-1 rounded">shift()</code> → Remove item from the beginning</li>
      <li><code class="bg-gray-200 px-1 rounded">unshift()</code> → Add item at the beginning</li>
      <li><code class="bg-gray-200 px-1 rounded">length</code> → Find the size of the array</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔄 Looping Through Arrays:</h2>
    <p class="text-gray-700 mb-4">We can use <span class="text-purple-600">for loop</span>, 
    <span class="text-purple-600">for...of</span>, or <span class="text-purple-600">forEach()</span> 
    to loop through arrays.</p>
  `,
          code: `
// Creating arrays
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "Bilal", true, { age: 20 }];

// Accessing elements
console.log(numbers[0]); // 1
console.log(mixed[1]);   // Bilal

// Array operations
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");  // Add at end
fruits.pop();           // Remove last
fruits.shift();         // Remove first
fruits.unshift("Grapes"); // Add at start

console.log(fruits.length); // Size of array

// Looping through arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
  `,
          explanation: `
  - Arrays store multiple values in a single variable.
  - Indexing starts from 0.
  - push(), pop(), shift(), unshift() are used for adding/removing values.
  - length gives the size of the array.
  - We can loop using for, for...of, or forEach().
  `,
          task: `
  Create an array of 5 student names. 
  - Add one new student at the beginning and end. 
  - Remove the last student. 
  - Loop through the array and print each name.
  `,
        },
        {
          title: 'JavaScript Arrays and Array Methods Part 2',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What are Arrays?</h2>
    <p class="text-gray-700 mb-4">
      In JavaScript, an <span class="font-semibold text-purple-600">Array</span> is a special variable 
      that can hold more than one value at a time. It is an ordered collection where each item 
      is stored at a numeric <span class="text-green-600 font-medium">index (starting from 0)</span>.
      <br>
      Arrays can hold different types of values including numbers, strings, objects, functions, and even other arrays.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✨ Key Features:</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Can store multiple values in a single variable</li>
      <li>Supports different data types in the same array</li>
      <li>Zero-indexed: the first element is at index 0</li>
      <li>Dynamic in size (can grow or shrink)</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">⚙️ Common Array Methods:</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code class="bg-gray-200 px-1 rounded">push(item)</code> → Adds item at the end</li>
      <li><code class="bg-gray-200 px-1 rounded">pop()</code> → Removes the last item</li>
      <li><code class="bg-gray-200 px-1 rounded">unshift(item)</code> → Adds item at the start</li>
      <li><code class="bg-gray-200 px-1 rounded">shift()</code> → Removes the first item</li>
      <li><code class="bg-gray-200 px-1 rounded">indexOf(item)</code> → Returns index or -1 if not found</li>
      <li><code class="bg-gray-200 px-1 rounded">includes(item)</code> → Checks if item exists</li>
      <li><code class="bg-gray-200 px-1 rounded">find(callback)</code> → Returns first matching element</li>
      <li><code class="bg-gray-200 px-1 rounded">findIndex(callback)</code> → Returns index of first matching element</li>
      <li><code class="bg-gray-200 px-1 rounded">forEach(callback)</code> → Loops through array items</li>
      <li><code class="bg-gray-200 px-1 rounded">map(callback)</code> → Creates new array by transforming each item</li>
      <li><code class="bg-gray-200 px-1 rounded">filter(callback)</code> → Creates new array with items passing condition</li>
      <li><code class="bg-gray-200 px-1 rounded">reduce(callback, initialValue)</code> → Reduces array to a single value</li>
      <li><code class="bg-gray-200 px-1 rounded">sort()</code> → Sorts array (alphabetically by default)</li>
      <li><code class="bg-gray-200 px-1 rounded">reverse()</code> → Reverses array order</li>
      <li><code class="bg-gray-200 px-1 rounded">join(separator)</code> → Creates string from array elements</li>
      <li><code class="bg-gray-200 px-1 rounded">slice(start, end)</code> → Returns a portion (copy) of array</li>
      <li><code class="bg-gray-200 px-1 rounded">splice(start, deleteCount, ...items)</code> → Adds/removes items in array</li>
      <li><code class="bg-gray-200 px-1 rounded">some(callback)</code> → Checks if at least one element passes test</li>
      <li><code class="bg-gray-200 px-1 rounded">every(callback)</code> → Checks if all elements pass test</li>
      <li><code class="bg-gray-200 px-1 rounded">flat(depth)</code> → Flattens nested arrays</li>
      <li><code class="bg-gray-200 px-1 rounded">flatMap(callback)</code> → Map and flatten combined</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔄 Looping Through Arrays:</h2>
    <p class="text-gray-700 mb-4">
      Looping is commonly done using <code class="bg-gray-200 px-1 rounded">for</code>, 
      <code class="bg-gray-200 px-1 rounded">for...of</code>, or 
      <code class="bg-gray-200 px-1 rounded">forEach()</code> methods.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">💡 Why Arrays Matter:</h2>
    <p class="text-gray-700 mb-4">
      Arrays are essential for managing collections of data. Methods like <code class="bg-gray-200 px-1 rounded">map</code>, <code class="bg-gray-200 px-1 rounded">filter</code>, and <code class="bg-gray-200 px-1 rounded">reduce</code> are heavily used in frameworks/libraries such as React and Node.js for data processing and UI rendering.
    </p>
  `,
          code: `
// Creating arrays
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// Adding / Removing Elements
fruits.push("Mango");      // Add at end: ["Apple", "Banana", "Orange", "Mango"]
fruits.pop();              // Remove last: ["Apple", "Banana", "Orange"]
fruits.unshift("Grapes");  // Add at start: ["Grapes", "Apple", "Banana", "Orange"]
fruits.shift();            // Remove first: ["Apple", "Banana", "Orange"]

// Searching
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Cherry")); // false

// Transforming and Iterating
fruits.forEach(fruit => console.log(fruit.toUpperCase()));  // Loop with forEach

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "ORANGE"]

let filtered = fruits.filter(fruit => fruit.startsWith("A"));
console.log(filtered);  // ["Apple"]

let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Sum of letters in all fruit names

// Sorting and Joining
fruits.sort();
console.log(fruits);     // Sorted alphabetically
console.log(fruits.join(" - ")); // Joined string "Apple - Banana - Orange"

// Slice and Splice
let sliced = fruits.slice(0, 2); // ["Apple", "Banana"] (copy, original not changed)
console.log(sliced);

fruits.splice(1, 1, "Pineapple"); // Changes original array at index 1
console.log(fruits); // ["Apple", "Pineapple", "Orange"]

// Special Methods
console.log(fruits.some(fruit => fruit.length > 6));  // true
console.log(fruits.every(fruit => fruit.includes("a"))); // false

let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]
  `,
          explanation: `
  - Arrays are ordered collections with zero-based indexing.
  - push()/pop() handle end of the array, unshift()/shift() handle start.
  - Search methods like indexOf and includes help find elements.
  - Iteration and transformation using forEach, map, filter, reduce.
  - sort(), join(), slice(), and splice() provide powerful manipulation options.
  - some() and every() test conditions on array elements.
  - flat() and flatMap() are useful for nested arrays.
  - These methods form the backbone of data handling in JavaScript applications.
  `,
          task: `
  Task: 
  1. Create an array of 5 student names.
  2. Add one student at the beginning and one at the end.
  3. Remove the last student.
  4. Loop through the array and print each student's name.
  `
        },
        {
          title: 'Asynchronous Programming in JavaScript (Basics)',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">🕑 What is Asynchronous Programming?</h2>
    <p class="text-gray-700 mb-4">
      JavaScript is <span class="font-semibold text-purple-600">single-threaded</span>, meaning it executes one operation at a time. 
      But modern apps need to do tasks like fetching data or timers without stopping everything else. 
      <br>
      <span class="font-semibold text-green-600">Asynchronous programming</span> lets these tasks run in the background while JS keeps working on other things.
    </p>
    <p class="text-gray-700 mb-4">
      Example: Loading data from an API - the page doesn’t freeze, JS continues running and handles the data once it arrives.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔄 Callbacks</h2>
    <p class="text-gray-700 mb-3">
      A <span class="font-semibold">callback</span> is a function passed into another function to run later when a task completes.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}
fetchData((result) => {
  console.log(result); // Output after 2 seconds: Data received!
});</code></pre>
    <p class="text-red-600 font-semibold">
      ⚠ Problem: Callback hell (many nested callbacks) makes code hard to read and maintain.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📜 Promises</h2>
    <p class="text-gray-700 mb-3">
      A <span class="font-semibold">Promise</span> represents a future value from an async task.
      It can be:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code class="bg-gray-200 px-1 rounded">pending</code> - still working</li>
      <li><code class="bg-gray-200 px-1 rounded">fulfilled</code> - success</li>
      <li><code class="bg-gray-200 px-1 rounded">rejected</code> - error</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    success ? resolve("Data loaded") : reject("Error loading data");
  }, 2000);
});
promise
  .then(result => console.log(result)) // runs on success
  .catch(error => console.log(error)); // runs on failure
</code></pre>
    <p class="text-green-600 font-semibold">
      ✅ Promises help write cleaner async code than callbacks.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">⚡ Async/Await</h2>
    <p class="text-gray-700 mb-3">
      Introduced in ES2017, <span class="font-semibold">async/await</span> makes async code look synchronous.
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code class="bg-gray-200 px-1 rounded">async</code> keyword declares an asynchronous function.</li>
      <li><code class="bg-gray-200 px-1 rounded">await</code> pauses execution until a Promise resolves.</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>async function getData() {
  try {
    let response = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched"), 2000)
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData();</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🌍 Real Example with API</h2>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchUsers();</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔑 Key Takeaways</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Callbacks work but can cause “callback hell”.</li>
      <li>Promises make async code cleaner and chainable.</li>
      <li>Async/Await is modern, easier to read and write.</li>
      <li>Asynchronous programming prevents blocking and keeps apps responsive.</li>
    </ul>
  `,
          code: `
// Callback example
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

fetchData(result => {
  console.log(result); // Data received! after 2 seconds
});

// Promise example
let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    success ? resolve("Data loaded") : reject("Error loading data");
  }, 2000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Async/Await example
async function getData() {
  try {
    let response = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched"), 2000)
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getData();

// Fetch API example
async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchUsers();
  `,
          explanation: `
  - JavaScript runs code synchronously but async programming allows tasks to run in the background.
  - Callbacks are functions passed to run after tasks finish; they can lead to nested code ("callback hell").
  - Promises represent future results and improve chaining success/failure handlers.
  - Async/Await makes async code easier to write and understand by appearing synchronous.
  - Modern JS apps rely heavily on async programming for responsiveness and performance.
  `,
          task: `
  Task:
  1. Write a function using callbacks that simulates fetching data with a delay.
  2. Rewrite it using Promises.
  3. Then write an async function using async/await to fetch the same data.
  4. Test each method by logging the output after the simulated delay.
  `
        },
        {
          title: 'Working with API Requests in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">🔄 What is an API Request?</h2>
    <p class="text-gray-700 mb-4">
      APIs (Application Programming Interfaces) allow web applications to request and exchange data with servers.
      <br>
      Example: A weather app requests live temperature data from a weather API.
    </p>
    <p class="text-gray-700 mb-4">
      In JavaScript, there are two main ways to make API requests:
      <ul class="list-disc list-inside text-gray-800 mb-4">
        <li><code class="bg-gray-200 px-1 rounded">XMLHttpRequest (XHR)</code> – The older method</li>
        <li><code class="bg-gray-200 px-1 rounded">fetch()</code> API – Modern, simpler, and Promise-based</li>
      </ul>
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📜 XMLHttpRequest (Old Way)</h2>
    <p class="text-gray-700 mb-3">
      Before <code class="bg-gray-200 px-1 rounded">fetch()</code>, <code class="bg-gray-200 px-1 rounded">XMLHttpRequest</code> was used to make HTTP requests.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  } else {
    console.error("Error:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();</code></pre>
    <p class="text-red-600 font-semibold">
      ⚠ Downsides: Verbose syntax, and harder to manage asynchronous flows.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">⚡ Fetch API (Modern Way)</h2>
    <p class="text-gray-700 mb-3">
      The <code class="bg-gray-200 px-1 rounded">fetch()</code> API returns a Promise and is simpler to use.
      It supports chaining with <code class="bg-gray-200 px-1 rounded">.then()</code>, or can be used with <code class="bg-gray-200 px-1 rounded">async/await</code>.
    </p>

    <h3 class="text-lg font-semibold mb-1">Using Promises</h3>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Error:", error));</code></pre>

    <h3 class="text-lg font-semibold mb-1">Using Async/Await</h3>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPosts();</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📤 Sending Data (POST Request)</h2>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>async function addPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "My New Post",
        body: "This is post content",
        userId: 1
      }),
    });
    let result = await response.json();
    console.log("Created:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
addPost();</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔑 Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code class="bg-gray-200 px-1 rounded">XMLHttpRequest</code> is older but still works;</li>
      <li><code class="bg-gray-200 px-1 rounded">fetch()</code> is the modern, cleaner, Promise-based API;</li>
      <li>Supports <code class="bg-gray-200 px-1 rounded">GET</code>, <code class="bg-gray-200 px-1 rounded">POST</code>, <code class="bg-gray-200 px-1 rounded">PUT</code>, <code class="bg-gray-200 px-1 rounded">DELETE</code>, etc.;</li>
      <li>Often used with <code class="bg-gray-200 px-1 rounded">async/await</code> for more readable code;</li>
      <li>Widely used in React, Node.js, and vanilla JavaScript apps for server communication.</li>
    </ul>
  `,
          code: `
// XMLHttpRequest example (old way)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  } else {
    console.error("Error:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();

// Fetch API example (GET request)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Error:", error));

// Fetch API example with async/await (GET request)
async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPosts();

// Fetch API example (POST request)
async function addPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "My New Post",
        body: "This is post content",
        userId: 1
      }),
    });
    let result = await response.json();
    console.log("Created:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
addPost();
  `,
          explanation: `
  - APIs enable web apps to exchange data with servers.
  - XMLHttpRequest was used before fetch API; it is more complex and verbose.
  - fetch() API is Promise-based, simpler, and supports chaining .then() or async/await.
  - Fetch allows making all types of HTTP requests: GET, POST, PUT, DELETE.
  - Sending data with POST requires specifying method, headers, and body (usually JSON).
  - Using async/await with fetch greatly improves readability and error handling.
  - These techniques are foundational for building modern interactive web apps.
  `,
          task: `
  Task:
  1. Use fetch with Promise chaining to GET data from "https://jsonplaceholder.typicode.com/users" and log it.
  2. Rewrite the same GET request using async/await syntax.
  3. Create a POST request that creates a new user with some dummy data.
  4. Add proper error handling for all requests.
  `
        },
        {
          title: 'Error Handling Improvements & Debugging Techniques in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">⚡ Types of Errors in JavaScript</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Syntax Errors:</strong> Mistakes in code structure.<br><code class="bg-gray-200 px-1 rounded">console.log("Hello"</code> (missing closing parenthesis)</li>
      <li><strong>Runtime Errors:</strong> Occur during execution.<br><code class="bg-gray-200 px-1 rounded">let user = undefined; console.log(user.name);</code> (Cannot read property 'name' of undefined)</li>
      <li><strong>Logical Errors:</strong> Code runs but gives incorrect result.<br><code class="bg-gray-200 px-1 rounded">let sum = (a, b) =&gt; a - b;</code> (supposed to add but subtracts)</li>
    </ul>
    
    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Handling Errors with try...catch</h2>
    <p class="text-gray-700 mb-4">
      Use <code class="bg-gray-200 px-1 rounded">try...catch</code> to catch errors and handle them gracefully without stopping the whole program.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>try {
  let result = JSON.parse('{"name":"Ali"}');  
  console.log(result.name);
} catch (error) {
  console.error("Error occurred:", error.message);
}</code></pre>
    
    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔄 finally Block</h2>
    <p class="text-gray-700 mb-4">
      The <code class="bg-gray-200 px-1 rounded">finally</code> block runs whether or not an error occurred—perfect for cleanup tasks.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>try {
  console.log("Start process...");
  throw new Error("Something went wrong");
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  console.log("Process finished.");
}</code></pre>
    
    <h2 class="text-xl font-semibold text-blue-500 mb-2">⚡ Throwing Custom Errors</h2>
    <p class="text-gray-700 mb-4">
      Create and throw your own errors for validations or specific business logic.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Custom Error:", error.message);
}</code></pre>
    
    <h2 class="text-xl font-semibold text-blue-500 mb-2">🕵️ Debugging Techniques</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Console methods:</strong><br>
        <code class="bg-gray-200 px-1 rounded">console.log()</code> for info,<br>
        <code class="bg-gray-200 px-1 rounded">console.error()</code> for errors,<br>
        <code class="bg-gray-200 px-1 rounded">console.warn()</code> for warnings,<br>
        <code class="bg-gray-200 px-1 rounded">console.table()</code> to display tabular data.
      </li>
      <li><strong>Breakpoints:</strong> Use Developer Tools (press F12 → Sources tab) to pause code execution and inspect variables step by step.</li>
      <li><strong>Debugger Statement:</strong> Add <code class="bg-gray-200 px-1 rounded">debugger;</code> in code to pause execution when DevTools are open.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>function test(x) {
  debugger; // pauses in DevTools
  return x * 2;
}
test(5);</code></pre></li>
      <li><strong>Linting Tools:</strong> Tools like <code class="bg-gray-200 px-1 rounded">ESLint</code> catch syntax and logical mistakes before running the code.</li>
    </ul>
    
    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔑 Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code class="bg-gray-200 px-1 rounded">try...catch</code> for safer code execution.</li>
      <li><code class="bg-gray-200 px-1 rounded">finally</code> block ensures cleanup regardless of errors.</li>
      <li>Throw custom errors to handle validations or unexpected situations.</li>
      <li>Utilize console methods, breakpoints, and the debugger for effective debugging.</li>
      <li>Linting helps find issues early on.</li>
      <li>Debugging is as important as writing code to build stable applications.</li>
    </ul>
  `,
          code: `
// Handling error with try...catch
try {
  let data = JSON.parse('{"name":"Ali"}');
  console.log("Name:", data.name);
} catch (error) {
  console.error("Parsing error:", error.message);
}

// Using finally block
try {
  console.log("Processing data...");
  throw new Error("Unexpected issue");
} catch (err) {
  console.error("Caught error:", err.message);
} finally {
  console.log("Process completed.");
}

// Throwing custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(20, 0));
} catch (error) {
  console.error("Custom Error:", error.message);
}

// Debugging examples
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];
console.table(users);

function multiply(x) {
  debugger; // pauses in DevTools
  return x * 10;
}
multiply(5);
  `,
          explanation: `
  - Syntax errors are mistakes in code structure detected before running.
  - Runtime errors happen during execution and can crash programs if unhandled.
  - Logical errors cause wrong output though code runs without crashing.
  - try...catch gracefully catches runtime errors to keep app running.
  - finally block always executes for cleanup jobs.
  - Throw custom errors for specific cases like input validations.
  - Debug using console methods, breakpoints, and debugger statements.
  - Linting tools help catch bugs early, improving code quality.
  - Together these techniques boost app reliability and maintainability.
  `,
          task: `
  Task:
  1. Write a function that parses JSON; use try...catch to handle invalid input.
  2. Add a finally block to log “Parsing attempt finished.”
  3. Write a function that calculates square root; throw an error if input is negative.
  4. Use console methods and debugger to inspect your code while testing.
  `
        },
        {
          title: 'Hoisting, Scope, and Execution Context in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">⚡ Hoisting</h2>
    <p class="text-gray-700 mb-4">
      Hoisting means JavaScript moves variable and function <strong>declarations</strong> to the top of their scope during compilation, before executing the code.
      <br>
      Important:
      <ul class="list-disc list-inside text-gray-800 mb-4">
        <li>Only declarations are hoisted, not initializations.</li>
        <li><code class="bg-gray-200 px-1 rounded">var</code> is hoisted and initialized with <code class="bg-gray-200 px-1 rounded">undefined</code>.</li>
        <li><code class="bg-gray-200 px-1 rounded">let</code> and <code class="bg-gray-200 px-1 rounded">const</code> are also hoisted but stay in <span class="font-semibold text-red-600">Temporal Dead Zone (TDZ)</span> until initialized.</li>
        <li>Function declarations are fully hoisted.</li>
        <li>Function expressions assigned with <code class="bg-gray-200 px-1 rounded">let/const</code> are not hoisted.</li>
      </ul>
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>console.log(a); // undefined (hoisted declaration, not initialization)
var a = 10;

sayHello(); // works because function decl is hoisted
function sayHello() {
  console.log("Hello World");
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">🌍 Scope</h2>
    <p class="text-gray-700 mb-4">
      Scope defines where variables are accessible in your code.
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Global Scope:</strong> Variables accessible anywhere.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>var globalVar = "I'm global";
console.log(globalVar); // works everywhere</code></pre>
      </li>
      <li><strong>Function Scope:</strong> Variables declared with <code class="bg-gray-200 px-1 rounded">var</code> inside functions.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>function test() {
  var x = 5;
  console.log(x); // works here
}
console.log(x); // error - x not accessible outside function</code></pre>
      </li>
      <li><strong>Block Scope:</strong> Variables declared with <code class="bg-gray-200 px-1 rounded">let</code> or <code class="bg-gray-200 px-1 rounded">const</code> are limited to the block (curly braces).
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>{
  let y = 10;
  const z = 20;
}
console.log(y); // error - y is block scoped</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">⚙️ Execution Context</h2>
    <p class="text-gray-700 mb-4">
      Whenever JS runs code, it creates an execution context which holds the environment for that code.
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Global Execution Context (GEC):</strong> Created once when program starts, contains global variables and functions, and the global object (<code>window</code> in browsers).</li>
      <li><strong>Function Execution Context (FEC):</strong> Created each time a function is called; has its own variables, arguments, and scope chain.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">🔄 Call Stack</h2>
    <p class="text-gray-700 mb-4">
      Execution contexts are managed in a call stack (Last In, First Out).
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function first() {
  console.log("First");
  second();
}
function second() {
  console.log("Second");
}
first();
// Output:
// First
// Second
</code></pre>
    <p class="text-gray-700 mb-4">
      <strong>Process:</strong>
      <ul class="list-disc list-inside text-gray-800">
        <li><code>first()</code> is pushed onto the stack.</li>
        <li><code>second()</code> is called inside <code>first()</code>, and pushed on top.</li>
        <li>When <code>second()</code> finishes, it is popped off.</li>
        <li>Then <code>first()</code> finishes and is popped off.</li>
      </ul>
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔑 Key Points to Remember</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Hoisting moves declarations up but does not move assignments.</li>
      <li>Scope determines variable accessibility; global, function, and block scope differ.</li>
      <li>Execution context is the environment where code runs; global and function types exist.</li>
      <li>Call stack manages which function’s execution context is currently running.</li>
    </ul>
  `,
          code: `
// Hoisting Example
console.log(a); // undefined (var declaration hoisted, not initialization)
var a = 10;

sayHello(); // Works because function declaration is hoisted
function sayHello() {
  console.log("Hello World");
}

// Scope Example: global vs function vs block
var globalVar = "I'm global";

function test() {
  var x = 5; // function scoped
  console.log(x); // 5
}
test();
// console.log(x); // ReferenceError

{
  let y = 10;  // block scoped
  const z = 20; // block scoped
}
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

// Execution Context & Call Stack Example
function first() {
  console.log("First");
  second();
}
function second() {
  console.log("Second");
}
first();
// Logs:
// First
// Second
  `,
          explanation: `
  - Hoisting lifts variable and function declarations to the top of their scope.
  - Variables declared with var are hoisted but initialized as undefined.
  - let and const are hoisted but cannot be accessed before initialization due to Temporal Dead Zone (TDZ).
  - Function declarations are fully hoisted and available anywhere in their scope.
  - Scope defines where a variable is visible: global, function, or block.
  - Execution context is the environment for code execution: global or function.
  - The call stack keeps track of execution contexts and manages function calls in LIFO order.
  `,
          task: `
  Task:
  1. Show hoisting behavior of var, let, and const with examples.
  2. Write a function demonstrating function scope using var.
  3. Write a block demonstrating block scope using let and const.
  4. Illustrate call stack order with nested function calls.
  `
        },
        {
          title: 'Event Loop and Concurrency in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Call Stack</h2>
    <p class="text-gray-700 mb-4">
      The Call Stack keeps track of the execution contexts (functions) that are currently running.
      It works on a <strong>LIFO</strong> (Last In, First Out) principle.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function a() {
  console.log("A");
}
function b() {
  a();
  console.log("B");
}
b();
// Output:
// A
// B
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Web APIs (Browser Features)</h2>
    <p class="text-gray-700 mb-4">
      Asynchronous functions like <code class="bg-gray-200 px-1 rounded">setTimeout()</code>, <code class="bg-gray-200 px-1 rounded">fetch()</code>, and DOM events (<code>click</code>, <code>scroll</code>) 
      are handled by the browser’s Web APIs outside the JavaScript engine.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Inside setTimeout
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Callback Queue (Task Queue)</h2>
    <p class="text-gray-700 mb-4">
      The callback queue stores asynchronous callbacks (e.g., from <code>setTimeout</code> and DOM events) waiting to be executed.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Microtask Queue</h2>
    <p class="text-gray-700 mb-4">
      The microtask queue holds callbacks from promises and mutation observers.
      It has higher priority than the callback queue.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// setTimeout
</code></pre>
    <p class="text-gray-700 mb-4">
      Although <code>setTimeout</code> has 0ms delay, the promise’s callback runs first because microtask queue has higher priority.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Event Loop</h2>
    <p class="text-gray-700 mb-4">
      The event loop continuously checks if the call stack is empty.
      <br>
      If empty, it first processes all callbacks in the microtask queue, then processes callbacks in the callback queue.
      <br>
      This mechanism allows JavaScript to achieve concurrency despite being single-threaded.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">🔑 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>Call Stack:</strong> Executes JS code line by line.</li>
      <li><strong>Web APIs:</strong> Handle async operations outside JS engine.</li>
      <li><strong>Callback Queue:</strong> Stores async callbacks like <code>setTimeout</code> and events.</li>
      <li><strong>Microtask Queue:</strong> Stores promise callbacks with higher priority.</li>
      <li><strong>Event Loop:</strong> Moves tasks from queues to call stack when stack is empty, enabling asynchronous behavior.</li>
    </ul>
  `,
          code: `
// Call Stack example
function a() {
  console.log("A");
}
function b() {
  a();
  console.log("B");
}
b();  // Output: A B

// Web API and setTimeout example
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Inside setTimeout

// Microtask vs Callback Queue example
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// setTimeout
  `,
          explanation: `
  - The Call Stack keeps track of which functions are currently executing.
  - Asynchronous tasks like timers, HTTP requests, and events are handled by browser Web APIs.
  - Once async tasks complete, their callbacks are pushed into either the Callback Queue or Microtask Queue.
  - Microtask Queue (promises) has higher priority and will be emptied before Callback Queue tasks.
  - The Event Loop constantly monitors the call stack; when empty, it moves tasks from queues into the stack.
  - This design allows JavaScript to handle concurrency gracefully despite its single-threaded nature.
  `,
          task: `
  Task:
  1. Write nested functions and observe Call Stack order.
  2. Use setTimeout to add a delayed callback.
  3. Add a resolved Promise and observe Microtask queue priority over setTimeout.
  4. Explain the event loop order based on your output.
  `
        },
      ]

    },
    advanced: {
      title: "Advance Level JS Notes",
      topics: [
        {
          title: 'Advanced Closures and Memory Management (Heap Memory Related)',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Recap of Closures</h2>
    <p class="text-gray-700 mb-4">
      A <strong>closure</strong> occurs when a function retains access to variables from its lexical scope even after that scope has finished executing.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function outer() {
  let count = 0;  // captured variable

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3</code></pre>
    <p class="text-green-600 font-semibold mb-4">
      ✅ Here, <code>inner()</code> keeps a reference to <code>count</code>, even though <code>outer()</code> has finished.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Memory Allocation in JavaScript</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Stack Memory:</strong> Stores function calls and primitive variables (numbers, strings, booleans).</li>
      <li><strong>Heap Memory:</strong> Stores objects, functions, and closures (non-primitives) that need to persist beyond the current execution context.</li>
    </ul>
    <p class="text-gray-700 mb-4">
      👉 Closures live in <strong>heap memory</strong> because they preserve variables beyond their parent function’s execution.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 How Closures Affect Memory</h2>
    <p class="text-gray-700 mb-4">
      JS stores references to outer scope variables inside closures, so those variables remain in heap memory as long as the closure is reachable.
      This can lead to <strong>memory leaks</strong> if large objects are retained unnecessarily.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function bigClosure() {
  const largeArray = new Array(1000000).fill("🚀"); // Huge data
  return function getArray() {
    return largeArray;
  };
}

const leaked = bigClosure(); // largeArray stays in memory because of closure reference
</code></pre>
    <p class="text-red-600 font-semibold">
      ⚠️ Here, <code>largeArray</code> will not be garbage collected while <code>leaked</code> exists.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Avoiding Memory Leaks</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Nullify references when no longer needed to allow garbage collection:
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>let leaked = bigClosure();
console.log(leaked());
leaked = null; // frees largeArray for garbage collection</code></pre>
      </li>
      <li>Use <code>WeakMap</code> or <code>WeakSet</code> for temporary objects that should not prevent garbage collection:
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>let weak = new WeakMap();
(function() {
  let obj = {};
  weak.set(obj, "temp");
})(); 
// obj can be garbage collected automatically</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Practical Uses of Closures in Memory Management</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Data hiding / encapsulation:
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>function userSecret() {
  let secret = "myPassword123";
  return {
    getSecret: () => secret
  };
}
const user = userSecret();
console.log(user.getSecret()); // Access without exposing variable</code></pre>
      </li>
      <li>Module pattern to keep private variables safe.</li>
      <li>Performance optimizations, like caching results inside closures to avoid recomputation.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Closures store references to outer scope variables in heap memory.</li>
      <li>This can cause memory leaks if references are not cleared properly.</li>
      <li>Nullifying references and using WeakMaps can prevent leaks.</li>
      <li>Closures are powerful tools for encapsulation, security, and caching.</li>
    </ul>
  `,
          code: `
// Closure capturing variable
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Memory leak example
function bigClosure() {
  const largeArray = new Array(1000000).fill("🚀");
  return function getArray() {
    return largeArray;
  };
}

let leaked = bigClosure();
console.log(leaked()); // largeArray exists in memory

// Free memory by nulling reference
leaked = null;

// Using WeakMap to avoid leaks
let weak = new WeakMap();
(function(){
  let obj = {};
  weak.set(obj, "temporary");
})(); // obj can be garbage collected

// Data hiding with closure
function userSecret() {
  let secret = "s3cr3t";
  return {
    getSecret: () => secret
  };
}
const user = userSecret();
console.log(user.getSecret()); // s3cr3t
  `,
          explanation: `
  - Closures keep outer function variables alive in heap memory, enabling functions to remember state.
  - Because closures hold references, large captured objects are not garbage collected causing memory leaks.
  - Clearing references (e.g., by setting to null) permits garbage collection.
  - WeakMaps hold keys weakly, so entries get removed when keys are no longer referenced elsewhere.
  - Closures enable private data and efficient caching in JavaScript.
  - Understanding memory management with closures helps build performant and leak-free apps.
  `,
          task: `
  Task:
  1. Create a closure that stores a counter and increments it on each call.
  2. Write a function returning a closure that holds a large array; simulate and fix potential memory leak.
  3. Use WeakMap to store temporary metadata about objects.
  4. Build a data hiding example using closure that exposes a secret only through a getter method.
  `
        },
        {
          title: 'Prototypes and Prototype Chain (In-depth Understanding)',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What is a Prototype?</h2>
    <p class="text-gray-700 mb-4">
      Every JavaScript object has a hidden property called <code class="bg-gray-200 px-1 rounded">[[Prototype]]</code> (accessed as <code class="bg-gray-200 px-1 rounded">__proto__</code>). 
      This points to another object that acts as a fallback when a property or method is not found on the original object.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const user = { name: "Ali" };
console.log(user.__proto__); // Default Object prototype object</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Prototype Chain</h2>
    <p class="text-gray-700 mb-4">
      When you access a property on an object, JavaScript:
      <ol class="list-decimal list-inside text-gray-800 mb-4">
        <li>Looks for the property on the object itself.</li>
        <li>If not found, it checks the object's <code class="bg-gray-200 px-1 rounded">__proto__</code> (prototype).</li>
        <li>This process continues up the <strong>prototype chain</strong> until the property is found or the chain ends at <code>null</code>.</li>
      </ol>
      Example:
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const obj = {};
console.log(obj.toString());
// toString not on obj → found in Object.prototype</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Functions and the <code>prototype</code> Property</h2>
    <p class="text-gray-700 mb-4">
      Functions have a special <code class="bg-gray-200 px-1 rounded">.prototype</code> property used for inheritance when creating new objects via <code>new</code>.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(\`Hello, I am \${this.name}\`);
};

const p1 = new Person("Bilal");
p1.sayHello(); // Hello, I am Bilal
// p1 itself doesn't have sayHello, it’s found via Person.prototype</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Object.create() – Manual Prototype Linking</h2>
    <p class="text-gray-700 mb-4">
      You can create an object with a specific prototype using <code>Object.create()</code>.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const animal = {
  speak() {
    console.log("Animal sound");
  }
};

const dog = Object.create(animal);
dog.speak(); // Animal sound</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 ES6 Classes (Syntactic Sugar for Prototypes)</h2>
    <p class="text-gray-700 mb-4">
      ES6 classes are just a nicer syntax on top of prototypes.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>class Car {
  drive() {
    console.log("Vroom 🚗");
  }
}
const c1 = new Car();
c1.drive(); // Vroom 🚗
// Internally, Car.prototype.drive = function() { ... }</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Prototype Chain Example</h2>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function A() {}
A.prototype.sayHi = function() {
  console.log("Hi from A");
};

function B() {}
B.prototype = Object.create(A.prototype); // Inherit from A
B.prototype.constructor = B;

const b1 = new B();
b1.sayHi(); // Hi from A

// b1 → B.prototype → A.prototype → Object.prototype → null</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Important Notes</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>All objects inherit from <code>Object.prototype</code> at the top of the chain.</li>
      <li>Arrays inherit from <code>Array.prototype</code>, which inherits from <code>Object.prototype</code>.</li>
      <li>Functions inherit from <code>Function.prototype</code>.</li>
      <li><code>null</code> has no prototype and ends the chain.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Why is This Important?</h2>
    <p class="text-gray-700">
      Understanding prototypes explains how inheritance works in JavaScript, why methods like <code>.map()</code> and <code>.filter()</code> exist on arrays,
      and forms the basis for object-oriented programming in JavaScript.
    </p>

    <h2 class="text-xl font-semibold text-green-600 mb-3">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Every object has a <code>[[Prototype]]</code>.</li>
      <li>The <strong>prototype chain</strong> is the lookup mechanism for properties and methods.</li>
      <li>Functions have a <code>prototype</code> property used during <code>new</code> object creation.</li>
      <li>ES6 classes are syntactic sugar over prototypes.</li>
    </ul>
  `,
          code: `
// Prototype example
const user = { name: "Ali" };
console.log(user.__proto__); // Object.prototype

// Prototype chain lookup
const obj = {};
console.log(obj.toString()); // Found on Object.prototype

// Function with prototype property
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(\`Hello, I am \${this.name}\`);
};
const p1 = new Person("Bilal");
p1.sayHello(); // Hello, I am Bilal

// Object.create to set prototype manually
const animal = {
  speak() {
    console.log("Animal sound");
  }
};
const dog = Object.create(animal);
dog.speak(); // Animal sound

// ES6 class syntax (sugar over prototypes)
class Car {
  drive() {
    console.log("Vroom 🚗");
  }
}
const c1 = new Car();
c1.drive(); // Vroom 🚗

// Prototype inheritance example
function A() {}
A.prototype.sayHi = function() {
  console.log("Hi from A");
};

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const b1 = new B();
b1.sayHi(); // Hi from A

// Prototype chain: b1 -> B.prototype -> A.prototype -> Object.prototype -> null
  `,
          explanation: `
  - Every object has a hidden [[Prototype]] which links to another object.
  - If a property/method is not found on an object, JS looks up the prototype chain.
  - Functions have a prototype property that is used when creating new instances via 'new'.
  - Object.create() allows explicit prototype linking.
  - ES6 classes are syntactic sugar built on prototypes.
  - Understanding this explains inheritance, method lookups, and OOP in JavaScript.
  `,
          task: `
  Task:
  1. Create a constructor function with a method on its prototype. Instantiate and call the method.
  2. Use Object.create() to create an object with a custom prototype.
  3. Write two constructor functions A and B, make B inherit from A’s prototype, and test method inheritance.
  4. Explain the prototype chain for an array and how it inherits Array.prototype and Object.prototype.
  `
        },
        {
          title: 'Advanced Async Programming in JavaScript (Promise Combinators + Event Loop Internals)',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Event Loop Internals</h2>
    <p class="text-gray-700 mb-4">
      The event loop allows JavaScript, which is single-threaded, to handle asynchronous tasks without blocking the main thread.
      Here's the flow:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Call Stack:</strong> Executes synchronous code.</li>
      <li><strong>Web APIs:</strong> Manage async operations like <code>setTimeout</code> and <code>fetch</code>.</li>
      <li><strong>Callback/Task Queue:</strong> Holds pending macrotasks like <code>setTimeout</code> callbacks.</li>
      <li><strong>Microtask Queue:</strong> Holds higher-priority tasks like Promise callbacks, MutationObservers.</li>
      <li><strong>Event Loop:</strong> Checks if call stack is empty, then runs all microtasks before macrotasks.</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
</code></pre>
    <p class="text-gray-700 mb-4">
      Promises (microtasks) always run before <code>setTimeout</code> (macrotasks) even if the delay is 0.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Promise Combinators</h2>
    <p class="text-gray-700 mb-4">
      Promise combinators help work with multiple promises at once:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Promise.all</strong>: Waits for all promises to resolve; rejects if any fail.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>Promise.all([
  fetch("/user"),
  fetch("/posts"),
])
.then(([user, posts]) => console.log("Both done"))
.catch(err => console.error(err));
</code></pre>
      </li>
      <li><strong>Promise.race</strong>: Returns the first promise that settles (resolve or reject).
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>Promise.race([
  fetch("/slow"),
  fetch("/fast"),
]).then(res => console.log("Fastest response"));
</code></pre>
      </li>
      <li><strong>Promise.allSettled</strong>: Waits for all promises; never rejects, returns all results.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>Promise.allSettled([
  Promise.resolve("✅ success"),
  Promise.reject("❌ error")
]).then(results => console.log(results));
</code></pre>
      </li>
      <li><strong>Promise.any</strong>: Returns the first fulfilled promise, ignores rejections.
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded my-2"><code>Promise.any([
  Promise.reject("fail"),
  Promise.resolve("first success"),
  Promise.resolve("second success"),
]).then(res => console.log(res)); // first success
</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Async/Await with Combinators</h2>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>async function getData() {
  try {
    const [user, posts] = await Promise.all([
      fetch("/user"),
      fetch("/posts")
    ]);
    console.log("Data fetched", user, posts);
  } catch (err) {
    console.error("Error fetching", err);
  }
}</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Best Practices</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code>Promise.all</code> for independent tasks that must all succeed.</li>
      <li>Use <code>Promise.allSettled</code> to get all results regardless of failures.</li>
      <li>Use <code>Promise.race</code> for timeouts or first response wins.</li>
      <li>Use <code>Promise.any</code> to get first successful result ignoring errors.</li>
      <li>Always handle errors via <code>.catch</code> or <code>try...catch</code>.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mb-3">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>The event loop manages async execution with microtasks prioritized over macrotasks.</li>
      <li>Promise combinators simplify managing multiple asynchronous operations.</li>
      <li><code>Promise.any</code> and <code>Promise.allSettled</code> are newer and very practical.</li>
      <li>async/await pairs naturally with promise combinators to write clean async code.</li>
    </ul>
  `,
          code: `
// Event loop demonstration
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Promise combinators examples

// Promise.all - all must succeed
Promise.all([
  Promise.resolve("User data"),
  Promise.resolve("Posts data")
])
.then(([user, posts]) => console.log("All data:", user, posts))
.catch(err => console.error("Error:", err));

// Promise.race - first to settle wins
Promise.race([
  new Promise(res => setTimeout(() => res("Slow"), 2000)),
  new Promise(res => setTimeout(() => res("Fast"), 1000))
])
.then(res => console.log("Race winner:", res));

// Promise.allSettled - all results, no reject
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure")
]).then(results => console.log("Settled results:", results));

// Promise.any - first fulfilled
Promise.any([
  Promise.reject("fail"),
  Promise.resolve("First Success"),
  Promise.resolve("Second Success")
]).then(res => console.log("Any result:", res));

// Async/await + combinators
async function getData() {
  try {
    const [user, posts] = await Promise.all([
      Promise.resolve("User info"),
      Promise.resolve("Posts info")
    ]);
    console.log("Data fetched", user, posts);
  } catch (err) {
    console.error("Error fetching", err);
  }
}
getData();
  `,
          explanation: `
  - JavaScript uses the event loop to handle async tasks without blocking synchronous code.
  - Microtasks (promises) have higher priority than macrotasks (setTimeout).
  - Promise combinators like all, race, allSettled, and any help manage multiple promises.
  - Promise.all waits for all to resolve or rejects immediately.
  - Promise.race returns on first resolved or rejected promise.
  - Promise.allSettled returns status of all promises without rejecting.
  - Promise.any returns first fulfilled promise, ignoring rejects.
  - async/await syntax works smoothly with promise combinators for clean code.
  - Proper error handling is essential with all async workflows.
  `,
          task: `
  Task:
  1. Write code demonstrating Promise.all with three independent promises.
  2. Write code demonstrating Promise.race with two promises that resolve at different times.
  3. Show Promise.allSettled with three promises that include one reject.
  4. Use Promise.any with some promises rejected and others resolved.
  5. Rewrite one example with async/await using Promise.all and handle errors.
  `
        },
        {
          title: 'JavaScript Design Patterns & Modular Architecture',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Module Pattern</h2>
    <p class="text-gray-700 mb-4">
      Encapsulates code and exposes only what’s necessary, enabling private and public members.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const Counter = (() => {
  let count = 0; // private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.value());     // 1</code></pre>
    <p class="text-blue-600 font-semibold">
      👉 Great for information hiding and avoiding global namespace pollution.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Singleton Pattern</h2>
    <p class="text-gray-700 mb-4">
      Ensures only one instance of a class or object exists.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    this.settings = {};
    Config.instance = this;
  }
}

const c1 = new Config();
const c2 = new Config();

console.log(c1 === c2); // true</code></pre>
    <p class="text-blue-600 font-semibold">
      👉 Useful for configuration, database connection, or managing global state.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Observer Pattern (Pub/Sub)</h2>
    <p class="text-gray-700 mb-4">
      Allows objects to subscribe to events and be notified when those events happen.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}

const bus = new EventEmitter();
bus.on("login", user => console.log(\`\${user} logged in\`));
bus.emit("login", "Bilal");</code></pre>
    <p class="text-blue-600 font-semibold">
      👉 Widely used in React hooks, Node.js events, and state management like Redux.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Factory Pattern</h2>
    <p class="text-gray-700 mb-4">
      Creates objects without specifying exact classes, based on input.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function createUser(type) {
  if (type === "admin") return { role: "admin", canEdit: true };
  if (type === "guest") return { role: "guest", canEdit: false };
}

console.log(createUser("admin"));</code></pre>
    <p class="text-blue-600 font-semibold">
      👉 Useful for creating different objects with a unified interface.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Strategy Pattern</h2>
    <p class="text-gray-700 mb-4">
      Encapsulates interchangeable algorithms or behaviors.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>class Payment {
  constructor(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    return this.strategy.pay(amount);
  }
}

class PayPal {
  pay(amount) { console.log("Paid with PayPal:", amount); }
}
class CreditCard {
  pay(amount) { console.log("Paid with Credit Card:", amount); }
}

const payment1 = new Payment(new PayPal());
payment1.pay(100);

const payment2 = new Payment(new CreditCard());
payment2.pay(200);</code></pre>
    <p class="text-blue-600 font-semibold">
      👉 Used in apps where payment or logic methods can change dynamically.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Modular Architecture in JavaScript</h2>
    <p class="text-gray-700 mb-4">
      Organize large apps into modules for better maintainability and scalability.
    </p>
    <p class="text-gray-700 mb-2 font-semibold">🔹 ES6 Modules</p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// user.js
export function getUser() {
  return { name: "Bilal" };
}

// app.js
import { getUser } from './user.js';
console.log(getUser());</code></pre>

    <p class="text-gray-700 mb-2 font-semibold">🔹 CommonJS (Node.js)</p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// user.js
module.exports = { getUser: () => ({ name: "Bilal" }) };

// app.js
const { getUser } = require("./user");
console.log(getUser());</code></pre>

    <p class="text-blue-600 font-semibold">
      👉 Benefits include separation of concerns, reusability, easy testing, and scalable architecture.
    </p>

    <h2 class="text-xl font-semibold text-green-600 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Common design patterns: Module, Singleton, Observer, Factory, Strategy.</li>
      <li>Modular architecture via ES6 Modules or CommonJS.</li>
      <li>Patterns help create scalable, readable, and maintainable apps.</li>
    </ul>
  `,
          code: `
// Module pattern example
const Counter = (() => {
  let count = 0; // private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.value());     // 1

// Singleton pattern example
class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    this.settings = {};
    Config.instance = this;
  }
}

const c1 = new Config();
const c2 = new Config();
console.log(c1 === c2); // true

// Observer pattern example (Pub/Sub)
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}

const bus = new EventEmitter();
bus.on("login", user => console.log(\`\${user} logged in\`));
bus.emit("login", "Bilal");

// Factory pattern example
function createUser(type) {
  if (type === "admin") return { role: "admin", canEdit: true };
  if (type === "guest") return { role: "guest", canEdit: false };
}

console.log(createUser("admin"));

// Strategy pattern example
class Payment {
  constructor(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    return this.strategy.pay(amount);
  }
}

class PayPal {
  pay(amount) { console.log("Paid with PayPal:", amount); }
}
class CreditCard {
  pay(amount) { console.log("Paid with Credit Card:", amount); }
}

const payment1 = new Payment(new PayPal());
payment1.pay(100);

const payment2 = new Payment(new CreditCard());
payment2.pay(200);

// ES6 Modules example
// user.js
// export function getUser() { return { name: "Bilal" }; }

// app.js
// import { getUser } from './user.js';
// console.log(getUser());

// CommonJS example
// user.js
// module.exports = { getUser: () => ({ name: "Bilal" }) };

// app.js
// const { getUser } = require("./user");
// console.log(getUser());
  `,
          explanation: `
  - Module pattern encapsulates and exposes only needed parts of code for better organization.
  - Singleton pattern ensures a single instance for managing global states or configurations.
  - Observer pattern allows event-driven architecture where objects listen and respond to events.
  - Factory pattern abstracts object creation based on type or input.
  - Strategy pattern makes algorithms interchangeable at runtime.
  - Modular architecture using ES6 modules or CommonJS promotes reusable, testable, and maintainable code.
  - These patterns and structures help build scalable, clean JavaScript applications.
  `,
          task: `
  Task:
  1. Create a module pattern example that manages a private message string and exposes getter/setter functions.
  2. Implement a singleton class for app configuration with a property for user language.
  3. Build a simple event emitter and demonstrate subscribing and emitting a "data" event.
  4. Write a factory function producing different vehicle objects (car, bike) with a common interface.
  5. Implement a strategy pattern for a simple calculator supporting addition and multiplication strategies.
  `
        },
        {
          title: 'Symbol Type and Its Use Cases in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What is a Symbol?</h2>
    <p class="text-gray-700 mb-4">
      <strong>Symbol</strong> is a unique and immutable primitive type introduced in ES6.
      Each Symbol is guaranteed to be unique, even if descriptions (optional labels) are the same.
      This uniqueness helps prevent property name collisions in objects.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Using Symbols as Object Keys</h2>
    <p class="text-gray-700 mb-4">
      Symbols can be used as keys in objects, creating properties that are not enumerable in normal loops.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const id = Symbol("id");

const user = {
  name: "Bilal",
  [id]: 12345,  // Symbol used as property key
};

console.log(user.name);  // Bilal
console.log(user[id]);   // 12345

// Symbol keys are skipped by for...in loops
for (let key in user) {
  console.log(key); // only logs "name"
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Global Symbol Registry</h2>
    <p class="text-gray-700 mb-4">
      Use <code>Symbol.for(key)</code> to create or retrieve a global symbol shared across your codebase.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const globalSym = Symbol.for("appId");
const sameSym = Symbol.for("appId");

console.log(globalSym === sameSym); // true

console.log(Symbol.keyFor(globalSym)); // "appId"</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Well-known Symbols</h2>
    <p class="text-gray-700 mb-4">
      JavaScript provides built-in symbols to customize object behavior:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>Symbol.iterator</code> → makes an object iterable with <code>for...of</code></li>
      <li><code>Symbol.toStringTag</code> → sets custom tag for <code>Object.prototype.toString</code></li>
      <li><code>Symbol.hasInstance</code> → customizes behavior of <code>instanceof</code></li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const myIterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) return { value: step, done: false };
        return { value: undefined, done: true };
      }
    };
  }
};

for (let val of myIterable) {
  console.log(val); // 1, 2, 3
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Use Cases of Symbols</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Avoid property name collisions in complex objects or libraries.</li>
      <li>Define hidden, private-like properties.</li>
      <li>Customize object behaviors with well-known symbols.</li>
      <li>Enable meta-programming with Proxy and Reflect APIs.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Symbols are unique, immutable primitive values.</li>
      <li>They can be used as object keys that are non-enumerable.</li>
      <li>Global symbol registry lets different parts of your app share symbols.</li>
      <li>Well-known symbols allow advanced customization of built-in JavaScript behavior.</li>
    </ul>
  `,
          code: `
// Creating unique symbols
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// Using symbols as object keys
const id = Symbol("id");
const user = {
  name: "Bilal",
  [id]: 12345,
};
console.log(user.name);  // Bilal
console.log(user[id]);   // 12345

// Symbols are not enumerable in for...in loops
for (let key in user) {
  console.log(key); // logs only "name"
}

// Global Symbol Registry
const globalSym = Symbol.for("appId");
const sameSym = Symbol.for("appId");
console.log(globalSym === sameSym); // true
console.log(Symbol.keyFor(globalSym)); // appId

// Well-known Symbol: Symbol.iterator example
const myIterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) {
          return { value: step, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const val of myIterable) {
  console.log(val); // 1, 2, 3
}
  `,
          explanation: `
  - Symbols guarantee uniqueness, preventing accidental overwrites in objects.
  - Symbol keys are not included in typical property enumerations, protecting internal properties.
  - The global symbol registry allows symbols to be shared across different modules or parts of an app.
  - Well-known symbols customize how built-in operations work on objects (e.g., iteration).
  - Symbols enhance object design patterns by enabling private-like properties and meta-programming.
  `,
          task: `
  Task:
  1. Create an object with symbol keys and iterate over properties showing symbols are skipped.
  2. Register a global symbol with Symbol.for and retrieve it in another variable; compare equality.
  3. Implement a custom iterable object using Symbol.iterator.
  4. Experiment with Symbol.toStringTag to customize Object.prototype.toString output.
  `
        },
        {
          title: 'Proxy and Reflect API for Meta-Programming in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What is Proxy?</h2>
    <p class="text-gray-700 mb-4">
      A <strong>Proxy</strong> wraps an object and allows intercepting fundamental operations like property access, assignment, function calls, deletion, and more.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const user = { name: "Bilal", age: 25 };

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(\`Accessing property: \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    target[prop] = value;
    return true;
  }
});

console.log(proxyUser.name);  // Logs: Accessing property: name → Bilal
proxyUser.age = 30;           // Logs: Setting age to 30
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Common Proxy Traps</h2>
    <p class="text-gray-700 mb-4">
      Proxy provides various "traps" to intercept operations:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>get</code> → intercept property access</li>
      <li><code>set</code> → intercept property assignment</li>
      <li><code>deleteProperty</code> → intercept property deletion</li>
      <li><code>has</code> → intercept <code>in</code> operator</li>
      <li><code>apply</code> → intercept function calls</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const func = () => "Hello";

const proxyFunc = new Proxy(func, {
  apply(target, thisArg, args) {
    console.log("Function called!");
    return target(...args);
  }
});

proxyFunc(); // Logs: Function called! → Hello
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 What is Reflect?</h2>
    <p class="text-gray-700 mb-4">
      The <strong>Reflect</strong> object offers methods that correspond to fundamental JavaScript operations, providing default behavior utilities.
      It is commonly used inside Proxy traps to delegate operations to the original object.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const user = { name: "Bilal" };

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return Reflect.get(target, prop); // invoke default behavior
  }
});

console.log(proxyUser.name); // Logs: Getting name → Bilal
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Use Cases of Proxy + Reflect</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Validation:</strong> enforce rules on property assignments.</li>
      <li><strong>Auto-population / Defaults:</strong> provide default values for missing props.</li>
      <li><strong>Logging / Debugging:</strong> track property access and changes.</li>
      <li><strong>Reactive frameworks:</strong> like Vue.js use Proxy to track dependencies and trigger updates.</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const numbers = [];
const reactiveNumbers = new Proxy(numbers, {
  set(target, prop, value) {
    console.log(\`Adding value: \${value}\`);
    return Reflect.set(target, prop, value);
  }
});

reactiveNumbers.push(10); // Logs: Adding value: 10
</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><strong>Proxy:</strong> intercepts and customizes object behavior.</li>
      <li><strong>Reflect:</strong> provides default operation methods, allowing proxies to forward operations.</li>
      <li>Enables meta-programming for validation, logging, reactive programming, and custom behaviors.</li>
      <li>Widely used in modern JavaScript frameworks and libraries.</li>
    </ul>
  `,
          code: `
// Basic Proxy example
const user = { name: "Bilal", age: 25 };

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(\`Accessing property: \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    target[prop] = value;
    return true;
  }
});

console.log(proxyUser.name);  // Accessing property: name → Bilal
proxyUser.age = 30;           // Setting age to 30

// Proxy with function trap (apply)
const func = () => "Hello";

const proxyFunc = new Proxy(func, {
  apply(target, thisArg, args) {
    console.log("Function called!");
    return target(...args);
  }
});

console.log(proxyFunc()); // Function called! → Hello

// Using Reflect to forward default behavior
const userReflect = { name: "Bilal" };

const proxyReflect = new Proxy(userReflect, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return Reflect.get(target, prop);
  }
});

console.log(proxyReflect.name); // Getting name → Bilal

// Use case: reactive array
const numbers = [];
const reactiveNumbers = new Proxy(numbers, {
  set(target, prop, value) {
    console.log(\`Adding value: \${value}\`);
    return Reflect.set(target, prop, value);
  }
});

reactiveNumbers.push(10); // Adding value: 10
  `,
          explanation: `
  - Proxy wraps an object and intercepts operations (like get, set, apply).
  - Traps enable custom behavior when interacting with the object.
  - Reflect provides default implementations to call inside traps for forwarding operations.
  - Combination enables advanced meta-programming like validation, reactive data, and logging.
  - These APIs empower frameworks and libraries to enhance object behavior transparently.
  `,
          task: `
  Task:
  1. Create a Proxy that logs all property reads and writes of an object.
  2. Use the 'deleteProperty' trap to prevent deleting certain properties.
  3. Wrap a function in a Proxy with an 'apply' trap to log each call.
  4. Use Reflect inside traps to preserve the original behavior.
  5. Create a reactive object that logs when properties are added or changed.
  `
        },
        {
          title: 'Functional Programming Paradigms in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 First-Class Functions</h2>
    <p class="text-gray-700 mb-4">
      Functions in JavaScript are first-class citizens, meaning they can be:
      <ul class="list-disc list-inside text-gray-800 mb-4">
        <li>Assigned to variables</li>
        <li>Passed as arguments to other functions</li>
        <li>Returned from other functions</li>
      </ul>
      Example:
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const greet = () => "Hello";
const say = (fn) => fn() + " World";

console.log(say(greet)); // Hello World</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Pure Functions</h2>
    <p class="text-gray-700 mb-4">
      A pure function:
      <ul class="list-disc list-inside text-gray-800 mb-4">
        <li>Always returns the same output given the same inputs</li>
        <li>Has no side effects (does not modify external state)</li>
      </ul>
      Example:
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function add(a, b) {
  return a + b; // pure function
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Immutability</h2>
    <p class="text-gray-700 mb-4">
      Avoid changing existing data directly; instead create new copies. This prevents unintended side effects.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const arr = [1, 2, 3];
const newArr = [...arr, 4]; // immutable approach

console.log(arr);    // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Higher-Order Functions (HOF)</h2>
    <p class="text-gray-700 mb-4">
      Higher-order functions accept functions as arguments or return new functions.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const multiplyBy = (n) => (x) => x * n;
const double = multiplyBy(2);

console.log(double(5)); // 10</code></pre>
    <p class="text-gray-700 mb-4">
      Common HOFs on arrays include <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>, <code>.forEach()</code>, <code>.some()</code>, <code>.every()</code>.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Function Composition</h2>
    <p class="text-gray-700 mb-4">
      Combining multiple functions to form a sequence or pipeline.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;

const composed = (x) => multiply2(add5(x));
console.log(composed(10)); // 30</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Benefits of Functional Programming</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Cleaner, more predictable code</li>
      <li>Easier debugging and testing</li>
      <li>Avoids side effects and shared state</li>
      <li>Works well with asynchronous programming</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Treat functions as first-class citizens;</li>
      <li>Use pure functions, immutability, higher-order functions, and composition;</li>
      <li>Functional programming improves code readability, maintainability, and testability.</li>
    </ul>
  `,
          code: `
// First-class functions example
const greet = () => "Hello";
const say = (fn) => fn() + " World";
console.log(say(greet)); // Hello World

// Pure function example
function add(a, b) {
  return a + b;
}

// Immutability example
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(arr);    // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]

// Higher-order function example
const multiplyBy = (n) => (x) => x * n;
const double = multiplyBy(2);
console.log(double(5)); // 10

// Array Higher-order functions
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// Function composition example
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const composed = x => multiply2(add5(x));
console.log(composed(10)); // 30
  `,
          explanation: `
  - Functions can be assigned to variables, passed, and returned (first-class).
  - Pure functions always produce the same output for same inputs with no side effects.
  - Immutability prevents changing existing data, improving predictability.
  - Higher-order functions accept or return functions enabling expressive APIs.
  - Function composition builds complex behavior by combining simple functions.
  - Functional programming leads to clearer, easier-to-test, and maintainable code.
  `,
          task: `
  Task:
  1. Write a pure function that returns a new array doubled without modifying the original array.
  2. Create a higher-order function that takes a function and a value and applies the function to the value.
  3. Compose two functions: one that adds 3 and one that multiplies by 4; test the composed function.
  4. Use array methods like map, filter, and reduce to process an array of numbers functionally.
  `
        },
        {
          title: 'Performance Optimization & Event Delegation in JavaScript',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Performance Optimization Techniques</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Minimize DOM Access:</strong><br>
        Accessing and updating the DOM is slow. Cache DOM elements and batch updates.
      </li>
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// Bad approach
for (let i = 0; i &lt; 100; i++) {
  document.getElementById("list").innerHTML += "&lt;li&gt;Item&lt;/li&gt;";
}

// Optimized approach
const list = document.getElementById("list");
let html = "";
for (let i = 0; i &lt; 100; i++) {
  html += "&lt;li&gt;Item&lt;/li&gt;";
}
list.innerHTML = html;
</code></pre>

      <li><strong>Debouncing & Throttling:</strong><br>
        Reduce how often event handlers execute during high-frequency events like scroll or resize.
      </li>
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// Debounce function
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener("resize", debounce(() => console.log("Resized"), 200));
</code></pre>

      <li><strong>Avoid Memory Leaks:</strong><br>
        Remove unnecessary event listeners and clear references to DOM elements no longer needed.
      </li>
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>element.removeEventListener("click", handleClick);
element = null;
</code></pre>

      <li><strong>Use requestAnimationFrame:</strong><br>
        For smooth animations, use <code>requestAnimationFrame</code> instead of <code>setTimeout</code> or <code>setInterval</code>.
      </li>
      <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function animate() {
  // update element position here
  requestAnimationFrame(animate);
}

animate();
</code></pre>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Event Delegation</h2>
    <p class="text-gray-700 mb-4">
      Instead of attaching event listeners to many individual elements, attach one listener to a common parent element and handle events via <code>event.target</code>.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
</code></pre>
    <p class="text-blue-600 font-semibold">
      ✅ Benefits:
      <ul class="list-disc list-inside text-blue-700">
        <li>Reduces memory usage by limiting number of listeners</li>
        <li>Handles dynamic elements added after page load</li>
        <li>Improves performance for large lists and complex DOM trees</li>
      </ul>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">🔹 Example: Dynamic List with Delegation</h2>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.background = "yellow";
  }
});

// Adding new item dynamically
const li = document.createElement("li");
li.textContent = "New Item";
ul.appendChild(li); // Works without adding extra listener</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Minimize DOM manipulations by caching and batching updates.</li>
      <li>Use debouncing and throttling to optimize performance of frequent events.</li>
      <li>Prevent memory leaks by removing event listeners and clearing unused references.</li>
      <li>Use <code>requestAnimationFrame</code> for optimized animations.</li>
      <li>Apply event delegation to improve performance for multiple or dynamic elements.</li>
    </ul>
  `,
          code: `
// Minimizing DOM access (better)
const list = document.getElementById("list");
let items = "";
for (let i = 0; i < 100; i++) {
  items += "<li>Item</li>";
}
list.innerHTML = items;

// Debouncing example
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener("resize", debounce(() => console.log("Resized"), 200));

// Event delegation example
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.background = "yellow";
  }
});

// Dynamically add new list item — no new listener needed
const li = document.createElement("li");
li.textContent = "New Item";
ul.appendChild(li);

// requestAnimationFrame example
function animate() {
  // update animation here
  requestAnimationFrame(animate);
}
animate();
  `,
          explanation: `
  - DOM interactions are expensive; minimize reflows and repaints by caching elements and batching updates.
  - Debouncing delays rapid event calls until activity pauses; throttling limits calls per time.
  - Avoid memory leaks by cleaning event listeners and DOM references.
  - requestAnimationFrame syncs animations with browser repaint for smoothness.
  - Event delegation uses a single listener on a common ancestor, reducing listeners and handling dynamic elements.
  - These techniques collectively improve app speed, responsiveness, and scalability.
  `,
          task: `
  Task:
  1. Write code that adds 50 list items efficiently minimizing DOM access.
  2. Implement a debounced input event listener logging input value with 300ms delay.
  3. Create an event delegation for click events on a list container logging clicked item text.
  4. Add a new list item dynamically and ensure it is handled by the delegated event.
  5. Create a simple animation loop using requestAnimationFrame.
  `
        },
        {
          title: 'Security Best Practices in JavaScript Coding',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Avoid XSS (Cross-Site Scripting)</h2>
    <p class="text-gray-700 mb-4">
      XSS occurs when untrusted user input is executed as code in the browser.
      Always sanitize or escape user input before inserting into the DOM.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// Unsafe - vulnerable to XSS
document.getElementById("output").innerHTML = userInput;

// Safe - textContent prevents code execution
document.getElementById("output").textContent = userInput;

// Use libraries like DOMPurify for advanced sanitization</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Avoid Eval and Unsafe Functions</h2>
    <p class="text-gray-700 mb-4">
      <code>eval()</code> executes strings as JavaScript code, which is dangerous and can lead to code injection.
      Use safer alternatives, like <code>JSON.parse</code>, whenever possible.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>// Unsafe
eval("alert('Hacked!')");

// Safe
const data = JSON.parse('{"name":"Bilal"}');</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Secure Event Handling</h2>
    <p class="text-gray-700 mb-4">
      Avoid inline event handlers such as <code>onclick</code> or <code>onload</code>, which may be exploited for injection.
      Use <code>addEventListener</code> to attach event handlers securely.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>button.addEventListener("click", handleClick);</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Input Validation & Sanitization</h2>
    <p class="text-gray-700 mb-4">
      Always validate user input both on client and server sides using type checks, regex, length checks to prevent invalid data.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Prevent Prototype Pollution</h2>
    <p class="text-gray-700 mb-4">
      Avoid letting untrusted input modify <code>Object.prototype</code> or <code>__proto__</code>, which can cause security flaws.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>const obj = {};
const malicious = JSON.parse('{"__proto__":{"isAdmin":true}}');
Object.assign(obj, malicious);
console.log({}.isAdmin); // true → vulnerability

// ✅ Always sanitize or filter keys before assigning</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Use HTTPS & Secure Headers</h2>
    <p class="text-gray-700 mb-4">
      Serve JavaScript and all content over HTTPS.
      Use security headers like Content-Security-Policy (CSP), X-Content-Type-Options, and X-Frame-Options to protect your app.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Avoid Global Variables</h2>
    <p class="text-gray-700 mb-4">
      Avoid polluting the global scope as it may be exploited.
      Use block-scoped <code>let</code>, <code>const</code>, closures, or modules instead of <code>var</code>.
    </p>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>(function(){
  let privateVar = 123; // not accessible globally
})();</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Sanitize user input to prevent XSS attacks.</li>
      <li>Avoid <code>eval()</code> and unsafe code execution.</li>
      <li>Use secure event handling (prefer <code>addEventListener</code>).</li>
      <li>Validate & sanitize input on client and server sides.</li>
      <li>Protect against prototype pollution by sanitizing keys.</li>
      <li>Use HTTPS and set strong security headers.</li>
      <li>Minimize global scope pollution using block scope and modules.</li>
    </ul>
  `,
          code: `
// Avoid XSS by using textContent instead of innerHTML
const userInput = "<img src='x' onerror='alert(1)'>";
document.getElementById("output").textContent = userInput; // Safe

// Avoid eval; parse JSON safely
const jsonString = '{"name":"Bilal"}';
const data = JSON.parse(jsonString);
console.log(data.name); // Bilal

// Secure event handling
const button = document.getElementById("btn");
button.addEventListener("click", () => console.log("Button clicked"));

// Input validation example
function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}
console.log(isValidEmail("test@example.com")); // true

// Prevent prototype pollution example
const obj = {};
const malicious = JSON.parse('{"__proto__":{"isAdmin":true}}');

function safeAssign(target, source) {
  for (const key in source) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue; // skip dangerous keys
    }
    target[key] = source[key];
  }
}

safeAssign(obj, malicious);
console.log({}.isAdmin); // undefined - safe

// Avoid global variables using IIFE
(function(){
  let privateVar = 123;
  console.log(privateVar); // 123
})();
// console.log(privateVar); // ReferenceError
  `,
          explanation: `
  - Sanitize user input before adding to DOM to avoid XSS security holes.
  - eval() executes arbitrary code and should be replaced with safe alternatives.
  - Use addEventListener for safer event handling than inline attributes.
  - Input validation minimizes the risk of bad or malicious data.
  - Prototype pollution is a risky attack vector from untrusted object assignments; sanitize keys.
  - Serving via HTTPS and using security headers strengthens protection.
  - Minimize global variables to reduce exposure and conflicts.
  - Combining these techniques improves overall JavaScript app security.
  `,
          task: `
  Task:
  1. Write a function that safely inserts user input into the DOM.
  2. Replace an eval usage with JSON.parse in a safe way.
  3. Implement input validation for email addresses.
  4. Write a safe object assign function that prevents prototype pollution.
  5. Show how to use addEventListener to securely attach a click handler to a button.
  `
        },
        {
          title: 'In-Depth Understanding of JavaScript Engines and Compiling',
          theroy: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 How JavaScript Engines Work</h2>
    <p class="text-gray-700 mb-4">
      JavaScript engines (like V8, SpiderMonkey) perform three main steps to run JS code efficiently:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Parsing:</strong> Converts JS source code into an Abstract Syntax Tree (AST). Syntax errors are detected here.</li>
      <li><strong>Compilation / Interpretation:</strong> Modern engines use Just-In-Time (JIT) compilation, turning code into machine code at runtime for faster execution.</li>
      <li><strong>Execution:</strong> Runs the compiled machine code in the execution context, manages memory, call stack, heap, and the event loop.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Memory Management in JS Engines</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Stack Memory:</strong> Stores primitive values and function calls, managing local variables.</li>
      <li><strong>Heap Memory:</strong> Stores objects, closures, and dynamic data.</li>
      <li><strong>Garbage Collection (GC):</strong> Automatically frees memory no longer referenced, using algorithms like Mark-and-Sweep.</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>let obj = { name: "Bilal" };
obj = null; // obj is now eligible for garbage collection
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Optimization Techniques by Engines</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Inline Caching:</strong> Caches object property accesses to speed up repeated lookups.</li>
      <li><strong>Hidden Classes / Shapes:</strong> Engines assign internal structures to objects with the same shape for faster access.</li>
      <li><strong>TurboFan (V8):</strong> An advanced JIT compiler optimizing frequently run (hot) functions.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Execution Context & Call Stack</h2>
    <p class="text-gray-700 mb-4">
      JavaScript engines maintain a stack of execution contexts:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Global execution context is created when the program starts.</li>
      <li>Each function call creates a new function execution context.</li>
      <li>Local variables and parameters are stored in the stack.</li>
      <li>Asynchronous tasks are handled via the event loop and callback/microtask queues.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">📌 Just-In-Time (JIT) Compilation</h2>
    <p class="text-gray-700 mb-4">
      JS engines monitor code execution:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Frequently executed ("hot") functions are compiled to optimized machine code by the JIT compiler.</li>
      <li>If assumptions made during optimization break, engines <em>deoptimize</em> back to less optimized versions.</li>
    </ul>
    <pre class="bg-gray-100 overflow-x-auto p-3 rounded mb-4"><code>function add(a, b) {
  return a + b;
}

for (let i = 0; i &lt; 1e6; i++) add(2, 3); // JIT optimizes this loop
</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">📌 Key Takeaways</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>JS engines parse, compile, and execute code efficiently.</li>
      <li>Memory management involves stack, heap, and automatic garbage collection.</li>
      <li>JIT compilation boosts performance by optimizing hot code paths.</li>
      <li>Understanding engine internals helps write faster and more memory-efficient JS code.</li>
    </ul>
  `,
          code: `
// Parsing converts code into an Abstract Syntax Tree (AST)
function add(a, b) {
  return a + b;
}

// Execution creates contexts and uses stacks
function multiply(x, y) {
  return x * y;
}

const result = multiply(5, 10);
console.log(result); // 50

// Memory allocation: Stack for primitives, Heap for objects
let num = 10;               // Stored in stack
let obj = { name: "Bilal" } // Stored in heap

// Making objects eligible for garbage collection
obj = null; // Heap memory can now be freed

// JIT optimization example - JIT compiles hot functions
for (let i = 0; i < 1e6; i++) {
  add(2, 3);
}
  `,
          explanation: `
  - JavaScript engines parse code into an Abstract Syntax Tree (AST) to understand code structure.
  - Modern engines use Just-In-Time (JIT) compilation to convert JS to machine code during runtime, improving speed.
  - Memory is divided into stack (for primitive data and function call contexts) and heap (for objects and closures).
  - Garbage collection automatically frees memory that is no longer referenced.
  - Engines optimize frequently executed code paths, but can fallback if assumptions change.
  - Knowledge of engines helps developers avoid performance pitfalls and write efficient JS.
  `,
          task: `
  Task:
  1. Write a function adding two numbers, call it multiple times to simulate hot function for JIT.
  2. Create an object and nullify it to mark it for garbage collection.
  3. Explain the difference between stack and heap memory in context of your code.
  4. Investigate behavior when changing object structure on the fly and its impact on engine optimizations.
  `
        },
        {
          title: 'Complete JavaScript Cheat Sheet',
          theroy: `
    <h2 class="text-3xl font-bold text-blue-700 mb-6">1. Introduction & Basics</h2>
    <ul class="list-disc list-inside text-gray-800 mb-6">
      <li><strong>JavaScript:</strong> High-level, interpreted language used client and server side (Node.js).</li>
      <li><strong>Uses:</strong> DOM manipulation, web apps, APIs, server-side programming.</li>
      <li><strong>Basic Syntax:</strong> statements, <code>//</code> and <code>/* */</code> comments, semicolons optional.</li>
      <li><strong>Variables:</strong>
        <ul class="list-disc list-inside ml-4">
          <li><code>var</code>: function-scoped, hoisted, can be redeclared.</li>
          <li><code>let</code>: block-scoped, hoisted in TDZ, no redeclare in same scope.</li>
          <li><code>const</code>: block-scoped, immutable reference, hoisted in TDZ.</li>
        </ul>
      </li>
      <li><strong>Data Types:</strong> 
        <ul class="list-disc list-inside ml-4">
          <li>Primitive: string, number, boolean, null, undefined, symbol, bigint</li>
          <li>Non-primitive: object, array, function</li>
        </ul>
      </li>
      <li><strong>Operators:</strong> Arithmetic (+, -, *, /, %), Assignment (=, +=), Comparison (==, ===), Logical (&&, ||, !).</li>
      <li><strong>Control Flow:</strong> if-else, switch-case, ternary <code>?:</code></li>
      <li><strong>Loops:</strong> for, while, do-while, for-in, for-of</li>
      <li><strong>Functions:</strong> Declarations, Expressions, Arrow functions, Hoisting rules.</li>
      <li><strong>DOM Manipulation:</strong> <code>getElementById</code>, <code>querySelector</code>, <code>addEventListener</code></li>
      <li><strong>Error Handling:</strong> try-catch-finally</li>
    </ul>

    <h2 class="text-3xl font-bold text-blue-700 mb-6">2. Intermediate Concepts</h2>
    <ul class="list-disc list-inside text-gray-800 mb-6">
      <li><strong>Closures:</strong> Functions retaining access to outer lexical scope variables.</li>
      <li><strong>Scope:</strong> Global, Function, Block scopes.</li>
      <li><strong>Execution Context:</strong> Global & Function contexts, Call Stack and Event Loop.</li>
      <li><strong>Hoisting:</strong> var & function declarations hoisted; let & const in Temporal Dead Zone (TDZ).</li>
      <li><strong>Objects & Prototypes:</strong> Prototype chain, inheritance, <code>Object.create</code>, ES6 Classes.</li>
      <li><strong>Arrays:</strong> <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>forEach</code>, <code>some</code>, <code>every</code>.</li>
      <li><strong>Modules:</strong> ES6 <code>import/export</code>, CommonJS <code>require/module.exports</code>.</li>
      <li><strong>Asynchronous JS:</strong> Callbacks, Promises, async/await, event loop, microtasks vs macrotasks.</li>
      <li><strong>API Requests:</strong> <code>fetch</code>, <code>XMLHttpRequest</code>.</li>
      <li><strong>Debugging & Error Handling:</strong> <code>console.log</code>, DevTools, try-catch, throw.</li>
    </ul>

    <h2 class="text-3xl font-bold text-blue-700 mb-6">3. Advanced Topics</h2>
    <ul class="list-disc list-inside text-gray-800 mb-6">
      <li><strong>Closures & Memory:</strong> Closures stored in heap, possible memory leaks, avoid by nulling references or using WeakMap.</li>
      <li><strong>Prototypes & Prototype Chain:</strong> [[Prototype]] chain, Object.prototype at top, ES6 classes as syntactic sugar.</li>
      <li><strong>Advanced Async Programming:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Event Loop: Call stack → microtask queue (Promises) → task queue (setTimeout)</li>
          <li>Promise Combinators:
            <ul class="list-disc list-inside ml-6">
              <li><code>Promise.all</code>: all must resolve</li>
              <li><code>Promise.race</code>: first settled</li>
              <li><code>Promise.allSettled</code>: all results, never rejects</li>
              <li><code>Promise.any</code>: first fulfilled</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>Design Patterns & Modular Architecture:</strong> Module, Singleton, Observer, Factory, Strategy patterns; modular code with ES6 & CommonJS.</li>
      <li><strong>Symbols:</strong> Unique, immutable primitives for object keys; global registry with <code>Symbol.for()</code>; well-known symbols like <code>Symbol.iterator</code>.</li>
      <li><strong>Proxy & Reflect:</strong> Intercept object operations for validation, reactive frameworks, logging, meta-programming.</li>
      <li><strong>Functional Programming:</strong> First-class functions, pure functions, immutability, higher-order functions (<code>map</code>, <code>filter</code>, <code>reduce</code>), function composition.</li>
      <li><strong>Performance Optimization:</strong> Minimize DOM access, debounce/throttle, event delegation, use requestAnimationFrame, avoid memory leaks.</li>
      <li><strong>Security Best Practices:</strong> Sanitize input, avoid <code>eval()</code>, validate inputs, prevent prototype pollution, use HTTPS & CSP, minimize globals.</li>
      <li><strong>JS Engines & Compiling:</strong> V8, SpiderMonkey; stages - parsing, compilation (JIT), execution; memory stack & heap, garbage collection; optimizations like inline caching, hidden classes, TurboFan.</li>
    </ul>
  `,
          code: `
// Basic Syntax Examples
var x = 10;          // function scoped
let y = 20;          // block scoped
const z = 30;        // constant reference

// Function Declaration
function greet(name) {
  return "Hello " + name;
}

// Arrow Function
const add = (a, b) => a + b;

// Closure Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1

// Array Methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

// Promise Example
const promise = new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
promise.then(console.log);

// Proxy Example
const obj = new Proxy({}, {
  get(target, prop) {
    console.log("Get", prop);
    return Reflect.get(target, prop);
  }
});
obj.a = 10;
console.log(obj.a);

// Module Example (ES6)
// export function getUser() { return { name: "Bilal" }; }
// import { getUser } from './user.js';

// Debounce function
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Security (XSS safe)
const output = document.getElementById("output");
output.textContent = "<script>alert('XSS Attack!')</script>";
  `,
          explanation: `
  - JavaScript basics cover variables, functions, control flow, and DOM manipulation.
  - Intermediate concepts include closures, modules, asynchronous programming, and debugging.
  - Advanced topics cover memory management, prototype chains, design patterns, and functional programming.
  - Performance can be optimized by minimizing DOM access, using debouncing, event delegation, and requestAnimationFrame.
  - Security best practices include input sanitization, avoiding eval, preventing prototype pollution, and using HTTPS.
  - Understanding JS engines helps write optimized and memory-efficient code.
  `,
          task: `
  Task:
  1. Write a closure that counts how many times it’s called.
  2. Use Promise.all to fetch multiple resources concurrently.
  3. Implement a Proxy that logs property accesses.
  4. Create a module exporting a function and import it elsewhere.
  5. Use debounce to limit input event calls.
  6. Sanitize user input to prevent XSS attack.
  7. Explain prototype chain for an object you create.
  `
        },
      ]

    }
  };

  const finalProject = {
    title: "Final Project: Complete Restaurant Website Styling",
    description: "Style the complete restaurant website using all the CSS concepts you've learned, including responsive design, Flexbox, Grid, transitions, animations, variables, and advanced selectors. Also add interactivity using JavaScript for dynamic UI components.",
    requirements: [
      "Use CSS variables for colors, fonts, and spacing",
      "Create a responsive layout using Flexbox and Grid",
      "Style the navigation menu with hover effects and active states",
      "Design the food menu with cards, including hover animations",
      "Style forms (contact & reservation) with focus states and transitions",
      "Implement typography styles for headings, paragraphs, and lists",
      "Use pseudo-classes and pseudo-elements for interactive elements",
      "Add background images, gradients, and overlay effects",
      "Include media queries for mobile-first responsive design",
      "Apply animations and transitions for buttons, images, and other interactive elements",
      "Ensure accessibility-friendly styling (focus outlines, color contrast)",
      "Optimize CSS using shorthand properties and modular structure"
    ],
    structure: `restaurant-website-css/
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js               (Core JS for navigation, menu, theme switch)
│   ├── slider.js             (Hero or image carousel functionality)
│   └── formValidation.js     (Form validation and submission handling)
├── images/
│   └── (logo, hero, food images)
└── index.html`,
    bonus: [
      "Create a dark/light theme switch using CSS variables and JS toggle",
      "Add a sticky header that changes style on scroll",
      "Include animated hover effects on menu cards",
      "Add a hero section with animated background or text",
      "Implement CSS Grid for a testimonial or gallery section",
      "Use clip-path or masking for creative shapes in images",
      "Use JS to validate forms dynamically before submission",
      "Add smooth scrolling and scroll-to-section buttons using JS",
      "Interactive menu filter (e.g., filter food items by category) using JS"
    ],
    ko: {
      category: "Web Development / Frontend Project",
      keyConcepts: [
        "Responsive Design",
        "CSS Variables",
        "Flexbox & Grid Layouts",
        "Animations & Transitions",
        "Accessibility",
        "Modular CSS Structure",
        "JavaScript DOM Manipulation",
        "Event Handling",
        "Form Validation",
        "Interactive Components"
      ],
      difficulty: "Intermediate to Advanced"
    },
    jsFeatures: [
      "Dynamic navigation menu (toggle on mobile)",
      "Hero section slider or carousel",
      "Dark/light theme toggle",
      "Form validation and feedback messages",
      "Scroll-based animations (sticky header, fade-in elements)",
      "Interactive menu filtering",
      "Smooth scrolling for navigation links"
    ]
  };

  // Function to safely render HTML
  const createMarkup = () => {
    return { __html: htmlContent[activeLevel].topics[activeTopicIndex].theroy };
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
          Complete JavaScript Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in JavaScript from Beginner to Advanced Level
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

export default JavaSceriptNotes;
