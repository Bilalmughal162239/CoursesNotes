import React, { useState } from 'react';
const PythonNotes = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level Python Notes",
      topics: [
        {
          title: "Introduction to Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Python?</h2>
    <p>Python is a high-level, interpreted, general-purpose programming language widely used for:</p>
    <ul class="list-disc list-inside mb-4">
      <li>Web development (Django, Flask)</li>
      <li>Data analysis and visualization (Pandas, Matplotlib)</li>
      <li>Machine Learning & AI (TensorFlow, PyTorch)</li>
      <li>Automation and scripting</li>
      <li>Game development</li>
      <li>Desktop applications</li>
    </ul>
    <p><strong>Key features of Python:</strong></p>
    <ul class="list-disc list-inside mb-4">
      <li>Easy to Learn & Readable – Uses simple syntax similar to English.</li>
      <li>Interpreted Language – Run code line by line.</li>
      <li>Dynamically Typed – No need to declare variable types explicitly.</li>
      <li>Object-Oriented – Supports classes and objects.</li>
      <li>Cross-Platform – Works on Windows, Linux, macOS, etc.</li>
      <li>Large Standard Library – Comes with many built-in modules.</li>
    </ul>

    <h3 class="font-semibold">Example of Python code:</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># This is a comment in Python
print("Python is awesome!")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Python is awesome!</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Installing Python</h2>
    <ol class="list-decimal list-inside mb-4">
      <li><strong>Download Python:</strong> Go to the official Python website and download the latest stable version (e.g., Python 3.12.x).</li>
      <li><strong>Install Python:</strong> Run the installer, check “Add Python to PATH,” and click “Install Now.”</li>
      <li><strong>Verify installation:</strong></li>
    </ol>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>python --version
# or
python3 --version

# Sample output:
Python 3.12.0
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Setting up an IDE / Editor</h2>
    <p>You can write Python code in various environments:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>IDLE:</strong> Comes with Python; simple editor & console, good for beginners.</li>
      <li><strong>VS Code:</strong> Lightweight editor; install Python extension; create .py file and run code.</li>
      <li><strong>PyCharm:</strong> Feature-rich IDE by JetBrains; create project and choose Python interpreter.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Writing Your First Python Program</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>Open your IDE or IDLE.</li>
      <li>Create a new file named <code>hello.py</code>.</li>
      <li>Type the following code:</li>
    </ol>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("Hello, World!")</code></pre>
    <p>Run the program.</p>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello, World!</code></pre>
    <p><strong>Explanation:</strong> <code>print()</code> is a built-in function that displays text on the screen. Text inside quotes <code>" "</code> is a string.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Print your name.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("My name is Muhammad Bilal")</code></pre>
      <li><strong>Task 2:</strong> Print three different sentences on three lines.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("Python is fun")
print("I am learning Python")
print("I love coding")</code></pre>
      <li><strong>Task 3:</strong> Print a combination of numbers and strings.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("I am", 20, "years old")</code></pre>
      <li><strong>Task 4:</strong> Add a comment explaining your code.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code># This program prints my favorite hobby
print("I love playing football")</code></pre>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">✅ Summary:</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Python is simple, powerful, and versatile.</li>
      <li>Install Python from python.org and set up your IDE.</li>
      <li>Your first program: <code>print("Hello, World!")</code>.</li>
      <li>Practice printing texts, numbers, and adding comments.</li>
    </ul>
  `
        },
        {
          title: "Basic Syntax in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.1 Writing Comments</h2>
    <p>Comments explain the code and are ignored by the interpreter.</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Single-line comment:</strong> Starts with <code>#</code></li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code># This is a single-line comment
print("Hello, World!")  # Prints a message
</code></pre>
      <li><strong>Multi-line comment:</strong> Enclosed in triple quotes <code>""" """</code> or <code>''' '''</code></li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>"""
This is a
multi-line comment
explaining the program
"""
print("Python is fun!")
</code></pre>
    </ul>
    <p><strong>Mini Task 1:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># My name is Muhammad Bilal
print("Muhammad Bilal")
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.2 Understanding Statements</h2>
    <p>A statement performs an action and usually ends at newline.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Single statement
print("Hello, World!")

# Multiple statements
x = 10
y = 5
print(x + y)
</code></pre>
    <p>Python does not require semicolons, but you can write multiple statements in one line separated by <code>;</code> (not recommended for beginners):</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>x = 5; y = 10; print(x + y)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.3 Indentation (Whitespace is Crucial)</h2>
    <p>Python uses indentation to define code blocks instead of braces. Incorrect indentation causes errors.</p>
    <h4>Example: Correct Indentation</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>if True:
    print("This is indented")
    print("This is part of the block")
</code></pre>
    <h4>Example: Incorrect Indentation</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>if True:
print("This will cause an error")  # IndentationError occurs
</code></pre>
    <p><strong>Indentation Rules:</strong></p>
    <ul class="list-disc list-inside mb-4">
      <li>Use 4 spaces per indentation level (recommended).</li>
      <li>All lines in a block must have the same indentation.</li>
      <li>Mixing tabs and spaces causes errors.</li>
    </ul>
    <p><strong>Mini Task 2:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>number = 10
if number > 0:
    print("The number is positive")
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.4 Putting it All Together</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># Program to check if a number is positive

number = 15  # Variable to store the number

if number > 0:  # Condition
    print("The number is positive")  # Runs if true
else:
    print("The number is zero or negative")  # Runs if false
</code></pre>

    <p><strong>Output:</strong></p>
    <pre class="bg-gray-50 p-3 rounded"><code>The number is positive</code></pre>

    <h2 class="text-xl font-semibold text-green-600">Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Comments: <code>#</code> for single-line, triple quotes for multi-line.</li>
      <li>Statements: Lines of code that perform actions.</li>
      <li>Indentation: Whitespace defines code blocks and is mandatory.</li>
    </ul>
  `
        },
        {
          title: "Variables in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.1 Creating Variables and Assigning Values</h2>
    <p>A variable is a container for storing data. Python automatically infers the type from the assigned value.</p>
    <p><strong>Rules for variable names:</strong></p>
    <ul class="list-disc list-inside mb-4">
      <li>Start with a letter or underscore (_)</li>
      <li>Cannot start with a number</li>
      <li>No spaces or special characters except underscore</li>
      <li>Should be descriptive</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Creating variables
name = "Muhammad Bilal"   # String
age = 20                  # Integer
height = 5.9              # Float
is_student = True         # Boolean

# Printing variables
print(name)
print(age)
print(height)
print(is_student)
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Muhammad Bilal
20
5.9
True
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Core Data Types in Python</h2>
    <h3>2.1 Numbers</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Integer
x = 10
print(x, type(x))  # Output: 10 <class 'int'>

# Float
y = 3.14
print(y, type(y))  # Output: 3.14 <class 'float'>
</code></pre>

    <h3>2.2 Text Type</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>message = "Hello, Python!"
print(message, type(message))  # Output: Hello, Python! <class 'str'>
</code></pre>

    <h3>2.3 Boolean</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>is_sunny = True
is_raining = False
print(is_sunny, type(is_sunny))    # Output: True <class 'bool'>
print(is_raining, type(is_raining)) # Output: False <class 'bool'>
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Checking Data Types</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>x = 25
y = "Python"
z = 3.14
w = False

print(type(x))  # &lt;class 'int'&gt;
print(type(y))  # &lt;class 'str'&gt;
print(type(z))  # &lt;class 'float'&gt;
print(type(w))  # &lt;class 'bool'&gt;
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Create variables for your name, age, height, then print them and their types.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>name = "Muhammad Bilal"
age = 20
height = 5.9

print(name, type(name))
print(age, type(age))
print(height, type(height))
</code></pre>

      <li><strong>Task 2:</strong> Create two numbers, add them, print the sum.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>a = 15
b = 5
sum = a + b
print("Sum:", sum)
</code></pre>

      <li><strong>Task 3:</strong> Create a boolean <code>is_student</code> variable and print a message accordingly.</li>
      <pre class="bg-gray-100 p-3 rounded mb-6"><code>is_student = True
if is_student:
    print("You are a student")
else:
    print("You are not a student")
</code></pre>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Variables store data and are dynamically typed in Python.</li>
      <li>Core Data Types: <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>.</li>
      <li>Use <code>type()</code> function to check variable data types.</li>
      <li>Python infers data type automatically upon assignment.</li>
    </ul>
  `
        },
        {
          title: "Operators in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Arithmetic Operators</h2>
    <p>Used to perform mathematical operations.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
          <th class="border border-gray-400 px-4 py-2">Output</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">+</td><td class="border border-gray-400 px-4 py-2">Addition</td><td class="border border-gray-400 px-4 py-2">5 + 3</td><td class="border border-gray-400 px-4 py-2">8</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">-</td><td class="border border-gray-400 px-4 py-2">Subtraction</td><td class="border border-gray-400 px-4 py-2">5 - 3</td><td class="border border-gray-400 px-4 py-2">2</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">*</td><td class="border border-gray-400 px-4 py-2">Multiplication</td><td class="border border-gray-400 px-4 py-2">5 * 3</td><td class="border border-gray-400 px-4 py-2">15</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">/</td><td class="border border-gray-400 px-4 py-2">Division</td><td class="border border-gray-400 px-4 py-2">5 / 2</td><td class="border border-gray-400 px-4 py-2">2.5</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">%</td><td class="border border-gray-400 px-4 py-2">Modulus (remainder)</td><td class="border border-gray-400 px-4 py-2">5 % 2</td><td class="border border-gray-400 px-4 py-2">1</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">**</td><td class="border border-gray-400 px-4 py-2">Exponentiation</td><td class="border border-gray-400 px-4 py-2">5 ** 2</td><td class="border border-gray-400 px-4 py-2">25</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">//</td><td class="border border-gray-400 px-4 py-2">Floor division</td><td class="border border-gray-400 px-4 py-2">5 // 2</td><td class="border border-gray-400 px-4 py-2">2</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>x = 10
y = 3

print("Addition:", x + y)         # 13
print("Subtraction:", x - y)      # 7
print("Multiplication:", x * y)   # 30
print("Division:", x / y)         # 3.3333
print("Modulus:", x % y)          # 1
print("Exponent:", x ** y)        # 1000
print("Floor Division:", x // y)  # 3
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Comparison Operators</h2>
    <p>Compare values and return Boolean (True/False).</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
          <th class="border border-gray-400 px-4 py-2">Output</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">==</td><td class="border border-gray-400 px-4 py-2">Equal to</td><td class="border border-gray-400 px-4 py-2">5 == 5</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">!=</td><td class="border border-gray-400 px-4 py-2">Not equal to</td><td class="border border-gray-400 px-4 py-2">5 != 3</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&gt;</td><td class="border border-gray-400 px-4 py-2">Greater than</td><td class="border border-gray-400 px-4 py-2">5 &gt; 3</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&lt;</td><td class="border border-gray-400 px-4 py-2">Less than</td><td class="border border-gray-400 px-4 py-2">5 &lt; 3</td><td class="border border-gray-400 px-4 py-2">False</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&gt;=</td><td class="border border-gray-400 px-4 py-2">Greater than or equal</td><td class="border border-gray-400 px-4 py-2">5 &gt;= 5</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">&lt;=</td><td class="border border-gray-400 px-4 py-2">Less than or equal</td><td class="border border-gray-400 px-4 py-2">3 &lt;= 5</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>a = 10
b = 5

print(a == b)   # False
print(a != b)   # True
print(a &gt; b)    # True
print(a &lt; b)    # False
print(a &gt;= 10)  # True
print(b &lt;= 5)   # True
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Logical Operators</h2>
    <p>Combine Boolean expressions.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
          <th class="border border-gray-400 px-4 py-2">Output</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">and</td><td class="border border-gray-400 px-4 py-2">True if both True</td><td class="border border-gray-400 px-4 py-2">True and False</td><td class="border border-gray-400 px-4 py-2">False</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">or</td><td class="border border-gray-400 px-4 py-2">True if any True</td><td class="border border-gray-400 px-4 py-2">True or False</td><td class="border border-gray-400 px-4 py-2">True</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">not</td><td class="border border-gray-400 px-4 py-2">Reverse Boolean</td><td class="border border-gray-400 px-4 py-2">not True</td><td class="border border-gray-400 px-4 py-2">False</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>x = 10
y = 5

print(x &gt; 5 and y &lt; 10)   # True
print(x &lt; 5 or y &lt; 10)    # True
print(not(x &gt; y))          # False
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Assignment Operators</h2>
    <p>Used to assign and update variable values.</p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Operator</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">=</td><td class="border border-gray-400 px-4 py-2">Assign</td><td class="border border-gray-400 px-4 py-2">x = 5</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">+=</td><td class="border border-gray-400 px-4 py-2">Add and assign</td><td class="border border-gray-400 px-4 py-2">x += 3</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">-=</td><td class="border border-gray-400 px-4 py-2">Subtract and assign</td><td class="border border-gray-400 px-4 py-2">x -= 2</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">*=</td><td class="border border-gray-400 px-4 py-2">Multiply and assign</td><td class="border border-gray-400 px-4 py-2">x *= 4</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">/=</td><td class="border border-gray-400 px-4 py-2">Divide and assign</td><td class="border border-gray-400 px-4 py-2">x /= 2</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">%=</td><td class="border border-gray-400 px-4 py-2">Modulus and assign</td><td class="border border-gray-400 px-4 py-2">x %= 3</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">**=</td><td class="border border-gray-400 px-4 py-2">Exponent and assign</td><td class="border border-gray-400 px-4 py-2">x **= 2</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">//=</td><td class="border border-gray-400 px-4 py-2">Floor divide and assign</td><td class="border border-gray-400 px-4 py-2">x //= 3</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>x = 10
x += 5  # x = x + 5
print(x)  # 15

x *= 2  # x = x * 2
print(x)  # 30

x //= 4  # x = x // 4
print(x)  # 7
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Perform all arithmetic operations on two numbers.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>a = 8
b = 3

print("Sum:", a + b)
print("Difference:", a - b)
print("Product:", a * b)
print("Division:", a / b)
print("Modulus:", a % b)
print("Exponent:", a ** b)
print("Floor Division:", a // b)
</code></pre>

      <li><strong>Task 2:</strong> Compare two numbers using all comparison operators.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>x = 10
y = 7

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)
</code></pre>

      <li><strong>Task 3:</strong> Use logical operators to check if a number is between 5 and 15.</li>
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>number = 12
if number &gt; 5 and number &lt; 15:
    print("Number is between 5 and 15")
else:
    print("Number is not in the range")
</code></pre>

      <li><strong>Task 4:</strong> Use assignment operators to update a variable multiple times.</li>
      <pre class="bg-gray-100 p-3 rounded"><code>num = 5
num += 3
print(num)
num -= 2
print(num)
num *= 4
print(num)
num /= 2
print(num)
num %= 3
print(num)
num **= 2
print(num)
</code></pre>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Arithmetic Operators: <code>+ - * / % ** //</code></li>
      <li>Comparison Operators: <code>== != &gt; &lt; &gt;= &lt;=</code></li>
      <li>Logical Operators: <code>and, or, not</code></li>
      <li>Assignment Operators: <code>=, +=, -=, *=, /=, %=, **=, //=</code></li>
    </ul>
  `
        },
        {
          title: "Basic Data Structures in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. List</h2>
    <p>A list is an ordered and mutable collection of elements.</p>
    <p>Elements can be of any data type such as numbers, strings, or even other lists.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>my_list = [1, 2, 3, 4, 5]
print(my_list)        # Output: [1, 2, 3, 4, 5]
print(type(my_list))  # Output: &lt;class 'list'&gt;

print(my_list[0])  # 1
print(my_list[2])  # 3

my_list[1] = 20
print(my_list)  # [1, 20, 3, 4, 5]
</code></pre>
    <p><strong>Mini Task 1:</strong> Create a list of your favorite fruits and print the second fruit.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Tuple</h2>
    <p>A tuple is an ordered and immutable collection. Once created, the elements cannot be changed.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)        # Output: (1, 2, 3, 4, 5)
print(type(my_tuple))  # Output: &lt;class 'tuple'&gt;

print(my_tuple[0])  # 1
print(my_tuple[-1]) # 5
</code></pre>
    <p><strong>Mini Task 2:</strong> Create a tuple of your 5 favorite colors and print the first and last colors.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Dictionary</h2>
    <p>Dictionaries are unordered collections of key-value pairs with unique keys.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>my_dict = {"name": "Alice", "age": 25, "city": "London"}
print(my_dict)        # {'name': 'Alice', 'age': 25, 'city': 'London'}
print(type(my_dict))  # &lt;class 'dict'&gt;

print(my_dict["name"])    # Alice
print(my_dict.get("age")) # 25

my_dict["age"] = 26          # Update
my_dict["country"] = "UK"    # Add new key-value
print(my_dict)
</code></pre>
    <p><strong>Mini Task 3:</strong> Create a dictionary for yourself with keys: "name", "age", "city", and print your age.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Set</h2>
    <p>A set is an unordered collection of unique elements (duplicates removed automatically).</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>my_set = {1, 2, 3, 3, 4}
print(my_set)        # Output: {1, 2, 3, 4}
print(type(my_set))  # &lt;class 'set'&gt;

my_set.add(5)     # Add element
my_set.remove(2)  # Remove element
print(my_set)     # {1, 3, 4, 5}
</code></pre>
    <p><strong>Mini Task 4:</strong> Create a set of 5 numbers and add one more number. Print the set.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Data Structure</th>
          <th class="border border-gray-400 px-4 py-2">Ordered</th>
          <th class="border border-gray-400 px-4 py-2">Mutable</th>
          <th class="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">List</td><td class="border border-gray-400 px-4 py-2">Yes</td><td class="border border-gray-400 px-4 py-2">Yes</td><td class="border border-gray-400 px-4 py-2">[1, 2, 3]</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Tuple</td><td class="border border-gray-400 px-4 py-2">Yes</td><td class="border border-gray-400 px-4 py-2">No</td><td class="border border-gray-400 px-4 py-2">(1, 2, 3)</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Dictionary</td><td class="border border-gray-400 px-4 py-2">No</td><td class="border border-gray-400 px-4 py-2">Yes</td><td class="border border-gray-400 px-4 py-2">{"name": "Alice"}</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Set</td><td class="border border-gray-400 px-4 py-2">No</td><td class="border border-gray-400 px-4 py-2">Yes</td><td class="border border-gray-400 px-4 py-2">{1, 2, 3}</td>
        </tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Control Flow in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Conditional Statements</h2>

    <h3>2.1 if Statement</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>age = 18

if age >= 18:
    print("You are an adult")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-4"><code>You are an adult</code></pre>

    <h3>2.2 elif Statement</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>age = 16

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-4"><code>You are a teenager</code></pre>

    <h3>2.3 else Statement</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>age = 10

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>You are a child</code></pre>

    <p><strong>Mini Task 1:</strong> Check if a number is positive, negative, or zero.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Looping Statements</h2>

    <h3>3.1 for Loop</h3>
    <p>Use it to iterate over sequences.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

for letter in "Python":
    print(letter)

for i in range(5):  # 0 to 4
    print(i)
</code></pre>

    <h3>3.2 while Loop</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>count = 0

while count &lt; 5:
    print("Count is:", count)
    count += 1
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Count is: 0
Count is: 1
Count is: 2
Count is: 3
Count is: 4
</code></pre>

    <h3>3.3 Loop Control: break and continue</h3>
    <p><strong>break</strong> exits the loop immediately:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>for i in range(10):
    if i == 5:
        break
    print(i)
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-4"><code>0
1
2
3
4
</code></pre>

    <p><strong>continue</strong> skips current iteration:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>for i in range(5):
    if i == 2:
        continue
    print(i)
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>0
1
3
4
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Check if a number is even or odd.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>num = 7
if num % 2 == 0:
    print("Even")
else:
    print("Odd")
</code></pre>
      </li>
      <li><strong>Task 2:</strong> Print numbers from 1 to 10 with a for loop.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>for i in range(1, 11):
    print(i)
</code></pre>
      </li>
      <li><strong>Task 3:</strong> Use a while loop to print numbers from 5 down to 1.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>count = 5
while count &gt; 0:
    print(count)
    count -= 1
</code></pre>
      </li>
      <li><strong>Task 4:</strong> Use break to stop printing numbers when reaching 3 in a loop from 0 to 5.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>for i in range(6):
    if i == 3:
        break
    print(i)
</code></pre>
      </li>
      <li><strong>Task 5:</strong> Use continue to skip printing number 2 in a loop from 0 to 4.
      <pre class="bg-gray-100 p-3 rounded"><code>for i in range(5):
    if i == 2:
        continue
    print(i)
</code></pre>
      </li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">5. Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Conditional Statements: <code>if</code>, <code>elif</code>, <code>else</code></li>
      <li>For Loop: iterate over sequences</li>
      <li>While Loop: repeat while condition is true</li>
      <li><code>break</code>: exit loop early</li>
      <li><code>continue</code>: skip current iteration</li>
    </ul>
  `
        },
        {
          title: "Functions in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1.1 Purpose of Functions</h2>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Reusability:</strong> Write once, use many times.</li>
      <li><strong>Organization:</strong> Makes code cleaner and easier to read.</li>
      <li><strong>Avoid repetition:</strong> Helps reduce duplicate code.</li>
      <li><strong>Modularity:</strong> Breaks programs into smaller pieces (modules).</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Defining a Function</h2>
    <p>Use the <code>def</code> keyword to declare a function.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>def function_name(parameters):
    # code block
    return value  # optional
</code></pre>
    <p>Example:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>def greet():
    print("Hello, World!")

greet()  # Calling the function
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello, World!</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Parameters and Arguments</h2>
    <p><strong>Parameters</strong> are variables in the function definition; <strong>Arguments</strong> are the actual values passed when calling.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>def greet_user(name):  # 'name' is a parameter
    print("Hello,", name)

greet_user("Alice")  # "Alice" is the argument
greet_user("Bilal")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello, Alice
Hello, Bilal
</code></pre>
    <p>Example with multiple parameters:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def add_numbers(a, b):
    sum = a + b
    print("Sum is:", sum)

add_numbers(5, 10)  # 15
add_numbers(7, 3)   # 10
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. The return Statement</h2>
    <p>The <code>return</code> keyword sends a result back to the caller.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>def multiply(a, b):
    return a * b

result = multiply(5, 4)
print("Result:", result)
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Result: 20</code></pre>
    <p>Example without return - prints but does not return:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def multiply(a, b):
    print(a * b)

multiply(5, 4)  # prints 20 but cannot store result
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Create a function <code>greet()</code> that prints your name.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>def greet():
    print("Your Name")

greet()
</code></pre>
      </li>
      <li><strong>Task 2:</strong> Create a function <code>add_numbers(a, b)</code> that returns sum, then call and print results.</li>
      <li><strong>Task 3:</strong> Create function <code>is_even(number)</code> returning <code>True</code> if even, else <code>False</code>.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>def is_even(number):
    return number % 2 == 0

print(is_even(10))  # True
print(is_even(7))   # False
</code></pre>
      </li>
      <li><strong>Task 4:</strong> Create <code>circle_area(radius)</code> calculating area: <code>3.14 * radius ** 2</code>, returning result.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Function</td><td class="border border-gray-400 px-4 py-2">Block of reusable code</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">def</td><td class="border border-gray-400 px-4 py-2">Keyword to define a function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Parameters</td><td class="border border-gray-400 px-4 py-2">Variables in the function definition</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Arguments</td><td class="border border-gray-400 px-4 py-2">Values passed to the function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">return</td><td class="border border-gray-400 px-4 py-2">Sends a result back from the function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Reusability, organization, avoiding repetition, modularity</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "User Input in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Getting Input from User</h2>
    <p>Use the built-in <code>input()</code> function. It always returns a string.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>variable = input("Enter something: ")</code></pre>
    <p>Convert input to numbers if needed using <code>int()</code>, <code>float()</code>.</p>

    <h3>Example 1: Basic Input</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>name = input("Enter your name: ")
print("Hello,", name)</code></pre>
    <p><strong>Output:</strong></p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Enter your name: Bilal
Hello, Bilal</code></pre>

    <h3>Example 2: Numeric Input</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>age = int(input("Enter your age: "))
print("You are", age, "years old")</code></pre>
    <p><strong>Output:</strong></p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Enter your age: 20
You are 20 years old</code></pre>

    <h3>Example 3: Float Input</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>height = float(input("Enter your height in meters: "))
print("Your height is", height, "meters")</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Displaying Output with print()</h2>
    <p>Display output on the screen.</p>

    <h4>Basic Usage</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("Hello, World!")</code></pre>

    <h4>Printing multiple items</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>name = "Alice"
age = 25
print("Name:", name, "Age:", age)</code></pre>

    <h4>String Formatting</h4>
    <p><strong>f-strings (Python 3.6+):</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>name = "Bilal"
age = 20
print(f"My name is {name} and I am {age} years old")</code></pre>

    <p><strong>Using format() method:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>print("My name is {} and I am {} years old".format(name, age))</code></pre>

    <p><strong>Using concatenation:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>print("My name is " + name + " and I am " + str(age) + " years old")</code></pre>

    <h4>Printing on the same line:</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>print("Hello", end=" ")  # Prevent newline
print("World!")</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello World!</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Ask the user for their name and greet them.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>name = input("Enter your name: ")
print("Hello, " + name)</code></pre>
      </li>
      <li><strong>Task 2:</strong> Ask the user for two numbers and print their sum.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print("Sum:", num1 + num2)</code></pre>
      </li>
      <li><strong>Task 3:</strong> Ask user for favorite color and display with f-string.
      <pre class="bg-gray-100 p-3 rounded mb-4"><code>color = input("Enter your favorite color: ")
print(f"Your favorite color is {color}")</code></pre>
      </li>
      <li><strong>Task 4:</strong> Ask user for a number; check if even or odd and print.
      <pre class="bg-gray-100 p-3 rounded"><code>number = int(input("Enter a number: "))
if number % 2 == 0:
    print("Even")
else:
    print("Odd")</code></pre>
      </li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">4. Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>input()</code>: Get user input (returns string).</li>
      <li>Convert input using <code>int()</code>, <code>float()</code>.</li>
      <li><code>print()</code>: Display output; supports multiple values and formatting.</li>
      <li>Control newline behavior using <code>end</code> parameter.</li>
    </ul>
  `
        },
        {
          title: "File Handling in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Opening a File</h2>
    <p>Use the <code>open()</code> function to open a file.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>file = open("filename", "mode")</code></pre>
    <p><strong>Common Modes:</strong></p>
    <table class="table-auto border-collapse border border-gray-400 mb-4">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Mode</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">"r"</td><td class="border border-gray-400 px-4 py-2">Read (default)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"w"</td><td class="border border-gray-400 px-4 py-2">Write (creates new or overwrites)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"a"</td><td class="border border-gray-400 px-4 py-2">Append (add content at end)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"rb"</td><td class="border border-gray-400 px-4 py-2">Read binary</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">"wb"</td><td class="border border-gray-400 px-4 py-2">Write binary</td></tr>
      </tbody>
    </table>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>file = open("example.txt", "w")  # Open file in write mode
file.write("Hello, Python!")     # Write text
file.close()                     # Close file
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Reading from a File</h2>
    <p>Read full content or lines.</p>
    <p><strong>Using read():</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>file = open("example.txt", "r")
content = file.read()
print(content)
file.close()
</code></pre>
    <p><strong>Using readlines():</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>file = open("example.txt", "r")
lines = file.readlines()
print(lines)  # List of lines
file.close()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Writing to a File</h2>
    <p><strong>Using write():</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>file = open("example.txt", "w")
file.write("Python is awesome!\\n")
file.write("We are learning file handling.\\n")
file.close()
</code></pre>
    <p><strong>Appending text:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>file = open("example.txt", "a")
file.write("This line is appended.\\n")
file.close()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Closing a File</h2>
    <p>Always close the file after operations:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>file = open("example.txt", "r")
content = file.read()
print(content)
file.close()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Using with Statement (Recommended)</h2>
    <p>Automatically closes the file even if errors occur.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# No need to call file.close()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">7. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a file <code>my_file.txt</code> and write your name and age.</li>
      <li>Read <code>my_file.txt</code> and print line by line.</li>
      <li>Append your favorite hobby to the file and display updated content.</li>
      <li>Use <code>with open()</code> to safely read the file.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">8. Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>open(filename, mode)</code>: Open a file.</li>
      <li><code>read(), readlines()</code>: Read content from a file.</li>
      <li><code>write(), writelines()</code>: Write content to a file.</li>
      <li><code>close()</code>: Close the file.</li>
      <li><code>with open()</code>: Recommended way as it auto manages closing.</li>
    </ul>
  `
        },
      ]
    },

    intermediate: {
      title: "Intermediate Level Python Notes",
      topics: [
        {
          title: "Object-Oriented Programming (OOP) in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Concepts</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Class:</strong> Blueprint for creating objects.</li>
      <li><strong>Object:</strong> An instance of a class.</li>
      <li><strong>Inheritance:</strong> Allows a child class to inherit from a parent class.</li>
      <li><strong>Encapsulation:</strong> Restricts access to internal data using private attributes.</li>
      <li><strong>Polymorphism:</strong> Same method behaves differently in different classes.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Classes and Objects</h2>
    <h3>2.1 Creating a Class</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>class Person:
    pass  # Empty class
</code></pre>

    <h3>2.2 Creating an Object</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>person1 = Person()  # Creating an object
print(person1)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. The Constructor Method (__init__)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

person1 = Person("Alice", 25)
person1.greet()
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello, my name is Alice and I am 25 years old.</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Inheritance</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):  # Dog inherits Animal
    def speak(self):
        print("Dog barks")

dog1 = Dog()
dog1.speak()  # Dog barks
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Encapsulation</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class Person:
    def __init__(self, name, age):
        self.__name = name   # private attribute
        self.__age = age

    def display_info(self):
        print(f"Name: {self.__name}, Age: {self.__age}")

person1 = Person("Bilal", 20)
person1.display_info()
# print(person1.__name)  # Error: private attribute

# Accessing via name mangling (not recommended)
print(person1._Person__name)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Polymorphism</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class Cat:
    def speak(self):
        print("Cat meows")

class Dog:
    def speak(self):
        print("Dog barks")

def make_animal_speak(animal):
    animal.speak()  # same method, different behavior

cat1 = Cat()
dog1 = Dog()

make_animal_speak(cat1)  # Cat meows
make_animal_speak(dog1)  # Dog barks
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">7. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create <code>Car</code> class with attributes <code>make</code> and <code>model</code>. Create an object and print attributes.</li>
      <li>Add method <code>start_engine()</code> in <code>Car</code> class that prints a starting message.</li>
      <li>Create <code>Vehicle</code> class with <code>fuel_type()</code> method. Create <code>Bike</code> class that inherits and overrides <code>fuel_type()</code>.</li>
      <li>Use encapsulation to make <code>salary</code> a private attribute in <code>Employee</code> class and provide access via method.</li>
      <li>Create <code>Bird</code> and <code>Parrot</code> classes with <code>sing()</code> method. Show polymorphism by calling <code>sing()</code> of both in a function.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">8. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Class</td><td class="border border-gray-400 px-4 py-2">Blueprint for creating objects</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Object</td><td class="border border-gray-400 px-4 py-2">Instance of a class</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">__init__</td><td class="border border-gray-400 px-4 py-2">Constructor to initialize attributes</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Inheritance</td><td class="border border-gray-400 px-4 py-2">Child class inherits methods and properties from parent</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Encapsulation</td><td class="border border-gray-400 px-4 py-2">Hiding internal data using private attributes (__ prefix)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Polymorphism</td><td class="border border-gray-400 px-4 py-2">Same method behaves differently in different classes</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Advanced Data Structures in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. List Comprehensions</h2>
    <p>A compact way to create lists in a single line:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>new_list = [expression for item in iterable if condition]</code></pre>
    <h4>Example 1: Create a list of squares</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]</code></pre>
    <h4>Example 2: Filter even numbers</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>numbers = [1, 2, 3, 4, 5, 6]
even_numbers = [n for n in numbers if n % 2 == 0]
print(even_numbers)  # [2, 4, 6]</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Nested Lists and Dictionaries</h2>
    <h3>3.1 Nested Lists</h3>
    <p>Lists inside lists, useful for 2D data (e.g., matrices):</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0][1])  # 2
print(matrix[2][0])  # 7

for row in matrix:
    for item in row:
        print(item, end=" ")
    print()</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>1 2 3 
4 5 6 
7 8 9</code></pre>

    <h3>3.2 Nested Dictionaries</h3>
    <p>Dictionaries inside dictionaries, for structured data:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>students = {
    "Alice": {"age": 20, "grade": "A"},
    "Bob": {"age": 22, "grade": "B"}
}

print(students["Alice"]["age"])   # 20
print(students["Bob"]["grade"])   # B

for student, info in students.items():
    print(student, info)</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Alice {'age': 20, 'grade': 'A'}
Bob {'age': 22, 'grade': 'B'}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Dictionary Comprehensions</h2>
    <p>Similar syntax to list compr., but creates dictionaries:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>new_dict = {key_expr: value_expr for item in iterable if condition}</code></pre>
    <h4>Example 1: Squares as values</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>squares_dict = {x: x**2 for x in range(1, 6)}
print(squares_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>
    <h4>Example 2: Filter even numbers as keys</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Task 1:</strong> Create a list of cubes from 1 to 10 using a list comprehension.</li>
      <li><strong>Task 2:</strong> Create a 3x3 nested list (matrix) and print the diagonal elements.</li>
      <li><strong>Task 3:</strong> Create a nested dictionary for 3 students with name, age, and grade, and print each student’s grade.</li>
      <li><strong>Task 4:</strong> Use dictionary comprehension to create a dictionary with numbers 1–10 as keys and their factorial as values (<code>math.factorial()</code>).</li>
      <li><strong>Task 5:</strong> Filter a list of numbers to include only numbers divisible by 3 using a list comprehension.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Feature</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">List Comprehension</td><td class="border border-gray-400 px-4 py-2">Create lists concisely using [expression for item in iterable if condition]</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Nested List</td><td class="border border-gray-400 px-4 py-2">List that contains other lists (2D data)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Nested Dictionary</td><td class="border border-gray-400 px-4 py-2">Dictionary that contains other dictionaries</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Dictionary Comprehension</td><td class="border border-gray-400 px-4 py-2">Create dictionaries concisely using {key: value for item in iterable if condition}</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Modules in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is a Module?</h2>
    <p>A module is a Python file containing code such as functions, classes, or variables that can be reused in other programs.</p>
    <p>Use modules to organize and reuse code without rewriting it.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import module_name</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using Standard Library Modules</h2>

    <h3>2.1 math Module</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import math

print(math.sqrt(16))        # 4.0
print(math.pi)              # 3.141592653589793
print(math.factorial(5))    # 120
</code></pre>

    <h3>2.2 random Module</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import random

print(random.randint(1, 10))                             # Random integer between 1 and 10
print(random.choice(['apple', 'banana', 'cherry']))     # Random choice from list
</code></pre>

    <h3>2.3 datetime Module</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>from datetime import datetime

now = datetime.now()
print("Current date & time:", now)
print("Year:", now.year, "Month:", now.month, "Day:", now.day)
</code></pre>

    <h3>2.4 os Module</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import os

print("Current Directory:", os.getcwd())
os.mkdir("test_folder")  # Creates a new folder called 'test_folder'
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Creating Your Own Module</h2>
    <p>Create a file named <code>mymodule.py</code> with functions:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b
</code></pre>
    <p>Import and use in another file:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import mymodule

print(mymodule.greet("Bilal"))  # Hello, Bilal!
print(mymodule.add(5, 10))      # 15
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Packages in Python</h2>
    <p>A package is a folder containing multiple modules and a special file <code>__init__.py</code>.</p>
    <p>Packages help organize modules in directories.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>my_package/
    __init__.py
    module1.py
    module2.py
</code></pre>
    <p>Use a package:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>from my_package import module1

module1.some_function()</code></pre>
    <p><code>__init__.py</code> can be empty or contain initialization code for the package.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Use <code>math</code> module to calculate square root of 49 and factorial of 6.</li>
      <li>Use <code>random</code> module to select a random fruit from a list of 5 fruits.</li>
      <li>Use <code>datetime</code> module to print the current date in YYYY-MM-DD format.</li>
      <li>Create a module <code>calculator.py</code> with functions <code>add</code>, <code>subtract</code>, <code>multiply</code>, <code>divide</code> and use it elsewhere.</li>
      <li>Create a package <code>mytools</code> with two modules: <code>math_tools.py</code> and <code>string_tools.py</code>. Use functions from both in a main program.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Module</td><td class="border border-gray-400 px-4 py-2">Python file containing functions, classes, or variables</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Import</td><td class="border border-gray-400 px-4 py-2">Used to include module code in another program</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Standard Library</td><td class="border border-gray-400 px-4 py-2">Pre-installed modules like math, random, datetime, os</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Creating Module</td><td class="border border-gray-400 px-4 py-2">Write reusable functions/classes in a .py file</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Package</td><td class="border border-gray-400 px-4 py-2">Folder containing multiple modules with __init__.py</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">__init__.py</td><td class="border border-gray-400 px-4 py-2">Marks folder as a package and can contain initialization code</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Exceptions in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is an Exception?</h2>
    <p>An exception is an error that occurs during program execution.</p>
    <p>If not handled, it stops the program and displays an error message.</p>
    <p>Python provides <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code> to handle exceptions gracefully.</p>

    <h3>Common Python Exceptions</h3>
    <table class="table-auto border-collapse border border-gray-400 mb-6">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Exception Type</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">ZeroDivisionError</td><td class="border border-gray-400 px-4 py-2">Division by zero</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">ValueError</td><td class="border border-gray-400 px-4 py-2">Wrong value type</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">TypeError</td><td class="border border-gray-400 px-4 py-2">Unsupported operation for data types</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">FileNotFoundError</td><td class="border border-gray-400 px-4 py-2">File does not exist</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">IndexError</td><td class="border border-gray-400 px-4 py-2">Index out of range</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">KeyError</td><td class="border border-gray-400 px-4 py-2">Key not found in dictionary</td></tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. try and except Blocks</h2>
    <p>Use <code>try</code> for code that may raise exceptions and <code>except</code> to handle them.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print("Result:", result)
except ZeroDivisionError:
    print("Error: Division by zero is not allowed!")
except ValueError:
    print("Error: Invalid input! Enter a number.")</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. else and finally Clauses</h2>
    <p><code>else</code> runs if no exception occurs. <code>finally</code> runs always (used for cleanup).</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid input!")
else:
    print("Division successful. Result:", result)
finally:
    print("This block runs no matter what.")</code></pre>
    <p><strong>Output Example:</strong></p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Input = 2
Division successful. Result: 5.0
This block runs no matter what.

Input = 0
Cannot divide by zero!
This block runs no matter what.</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Catching Specific Exceptions</h2>
    <p>You can catch multiple specific exceptions or use a generic catch-all.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ZeroDivisionError:
    print("Division by zero!")
except ValueError:
    print("Invalid input!")
except Exception as e:
    print("An unexpected error occurred:", e)</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Ask user for a number and divide 100 by it. Handle division by zero.</li>
      <li>Ask user for an integer input. Handle invalid input (ValueError).</li>
      <li>Open <code>data.txt</code> and handle <code>FileNotFoundError</code>.</li>
      <li>Use <code>else</code> to print a success message if no exception occurs.</li>
      <li>Use <code>finally</code> to print “Program completed” regardless of errors.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Keyword</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">try</td><td class="border border-gray-400 px-4 py-2">Block where code that may raise exception is placed</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">except</td><td class="border border-gray-400 px-4 py-2">Block to handle exceptions</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">else</td><td class="border border-gray-400 px-4 py-2">Runs if no exception occurs in try block</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">finally</td><td class="border border-gray-400 px-4 py-2">Runs always, usually for cleanup</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Exception</td><td class="border border-gray-400 px-4 py-2">Base class for all exceptions, can catch all errors</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Virtual Environment in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is a Virtual Environment?</h2>
    <p>A virtual environment is an isolated Python environment allowing package installations without affecting the global Python setup.</p>
    <p><strong>Why virtual environments are important:</strong></p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Project Isolation:</strong> Different projects can use different package versions.</li>
      <li><strong>Avoid Conflicts:</strong> Prevent package version conflicts.</li>
      <li><strong>Clean Environment:</strong> Keeps global Python uncluttered.</li>
      <li><strong>Reproducibility:</strong> Makes sharing and replicating environments easier.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Creating a Virtual Environment</h2>
    <p>Use the built-in module <code>venv</code>:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>python -m venv &lt;env_name&gt;</code></pre>
    <p><strong>Example:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>python -m venv myenv</code></pre>
    <p>This creates a folder <code>myenv</code> with the isolated Python environment.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Activating a Virtual Environment</h2>
    <h3>3.1 On Windows</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>myenv/Scripts/activate</code></pre>
    <p>Prompt changes to:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>(myenv) C:/Users/YourName></code></pre>

    <h3>3.2 On macOS / Linux</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>source myenv/bin/activate</code></pre>
    <p>Prompt changes to:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>(myenv) user@machine:~$</code></pre>
    <p>After activation, installing packages via <code>pip</code> will be local to this environment.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Deactivating a Virtual Environment</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>deactivate</code></pre>
    <p>The prompt returns to normal and environment is deactivated.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Installing Packages in Virtual Environment</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install package_name</code></pre>
    <p><strong>Example:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install requests</code></pre>
    <p>To see installed packages:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip list</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a virtual environment named <code>project_env</code>.</li>
      <li>Activate the virtual environment on your OS.</li>
      <li>Install the <code>numpy</code> package inside the environment.</li>
      <li>List all installed packages in the environment.</li>
      <li>Deactivate the virtual environment.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Virtual Environment</td><td class="border border-gray-400 px-4 py-2">Isolated Python environment per project</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">venv module</td><td class="border border-gray-400 px-4 py-2">Built-in module to create virtual environments</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Activate</td><td class="border border-gray-400 px-4 py-2">Enables the virtual environment</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Deactivate</td><td class="border border-gray-400 px-4 py-2">Exits the virtual environment</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip install</td><td class="border border-gray-400 px-4 py-2">Installs packages inside the virtual environment</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Pip - Python Package Installer",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is Pip?</h2>
    <p>Pip is Python’s package installer that helps install, upgrade, and manage third-party Python libraries not included in the standard library.</p>
    <p>Pip works with the Python Package Index (PyPI), hosting thousands of packages.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Checking if Pip is Installed</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip --version</code></pre>
    <p>Example Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>pip 23.0.1 from ... (python 3.10)</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Installing Packages with Pip</h2>
    <p><strong>Syntax:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install package_name</code></pre>
    <p><strong>Examples:</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install requests
pip install numpy
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Upgrading Packages</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install --upgrade package_name</code></pre>
    <p>Example:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install --upgrade numpy</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Uninstalling Packages</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip uninstall package_name</code></pre>
    <p>Example:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip uninstall requests</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Listing Installed Packages</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip list</code></pre>
    <p>To show outdated packages:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip list --outdated</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">7. Installing Specific Package Versions</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install package_name==version</code></pre>
    <p>Example:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install numpy==1.24.0</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">8. Using Pip in Virtual Environments</h2>
    <p>Inside a virtual environment, pip installs packages locally to avoid global conflicts.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>python -m venv myenv
source myenv/bin/activate  # macOS/Linux
myenv\\Scripts\\activate   # Windows
pip install requests
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">9. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Check pip version installed.</li>
      <li>Install the <code>requests</code> package.</li>
      <li>Install numpy version 1.24.0.</li>
      <li>Upgrade the <code>requests</code> package.</li>
      <li>List installed packages and check if numpy is installed.</li>
      <li>Uninstall the <code>requests</code> package.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">10. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Command</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">pip install package_name</td><td class="border border-gray-400 px-4 py-2">Install a new package</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip install --upgrade package_name</td><td class="border border-gray-400 px-4 py-2">Upgrade an existing package</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip uninstall package_name</td><td class="border border-gray-400 px-4 py-2">Remove a package</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip list</td><td class="border border-gray-400 px-4 py-2">List all installed packages</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip list --outdated</td><td class="border border-gray-400 px-4 py-2">Show outdated packages</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pip install package_name==version</td><td class="border border-gray-400 px-4 py-2">Install a specific package version</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Advanced File Handling in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Advanced File Handling</h2>
    <p>Instead of manually opening and closing files, Python's <code>with</code> statement (context manager) ensures files are safely closed even if errors occur.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using with Statement</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>with open("filename", "mode") as file_variable:
    # perform file operations
# File is automatically closed here
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Reading Files Using with</h2>
    <h4>Example 1: Read entire file</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>with open("example.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed
</code></pre>
    <h4>Example 2: Read lines as list and print</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>with open("example.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Writing Files Using with</h2>
    <h4>Example 1: Writing text</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>with open("example.txt", "w") as file:
    file.write("Hello, Python!\\n")
    file.write("Using with statement for safe file handling.\\n")
</code></pre>
    <h4>Example 2: Appending text</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>with open("example.txt", "a") as file:
    file.write("This line is appended.\\n")
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Benefits of Using with Statement</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Automatic file closure – no need to call <code>file.close()</code>.</li>
      <li>Error-safe – closes file even if exceptions occur.</li>
      <li>Cleaner code and reduces resource leaks.</li>
      <li>Better readability – clearly shows your file operations block.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a file <code>data.txt</code> and write your name and age using <code>with</code>.</li>
      <li>Read <code>data.txt</code> and print contents.</li>
      <li>Append your favorite hobby to <code>data.txt</code>.</li>
      <li>Read all lines from <code>data.txt</code> and print in uppercase.</li>
      <li>Use <code>with</code> to safely read a file and handle <code>FileNotFoundError</code> with try-except.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Feature</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2"><code>with open(filename, mode) as file</code></td><td class="border border-gray-400 px-4 py-2">Open file and auto-close</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Reading</td><td class="border border-gray-400 px-4 py-2"><code>file.read(), file.readlines()</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Writing</td><td class="border border-gray-400 px-4 py-2"><code>file.write(), file.writelines()</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Appending</td><td class="border border-gray-400 px-4 py-2">Open in “a” mode and use <code>write()</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Safe, clean, concise, auto-closes file</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Decorators in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What are Decorators?</h2>
    <p>A decorator is a function that modifies or enhances another function without altering its code.</p>
    <p>Used widely for logging, authentication, caching, performance measurement, etc.</p>
    <p>They follow the principle of “wrapping” a function inside another.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Basic Syntax of a Decorator</h2>
    <ol class="list-decimal list-inside mb-6">
      <li>Define a decorator function that takes a function as an argument.</li>
      <li>Define a wrapper function inside to add extra functionality.</li>
      <li>Return the wrapper.</li>
      <li>Apply decorator using <code>@decorator_name</code> above the target function.</li>
    </ol>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Example 1: Simple Decorator</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># Define a decorator
def my_decorator(func):
    def wrapper():
        print("Before the function runs")
        func()
        print("After the function runs")
    return wrapper

# Use the decorator
@my_decorator
def say_hello():
    print("Hello, World!")

# Call the function
say_hello()
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Before the function runs
Hello, World!
After the function runs</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Example 2: Decorator with Arguments</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def decorator(func):
    def wrapper(name):
        print(f"Hello, {name}! Welcome.")
        func(name)
        print("Goodbye!")
    return wrapper

@decorator
def greet(name):
    print(f"{name} is learning Python.")

greet("Bilal")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello, Bilal! Welcome.
Bilal is learning Python.
Goodbye!</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Benefits of Using Decorators</h2>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Code Reusability:</strong> Write common functionality once.</li>
      <li><strong>Separation of Concerns:</strong> Keep original functions clean.</li>
      <li><strong>Dynamic Behavior:</strong> Modify function behavior at runtime.</li>
      <li><strong>Readable Code:</strong> Use <code>@decorator</code> syntax for clarity.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a decorator that prints "Starting Function" before and "Ending Function" after running any function.</li>
      <li>Create a decorator to measure execution time of a function.</li>
      <li>Create a decorator to check if a number passed to a function is positive before calling it.</li>
      <li>Create a decorator to convert the return value of a function to uppercase.</li>
      <li>Chain two decorators on a single function, e.g., one prints messages and another doubles the result.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Decorator</td><td class="border border-gray-400 px-4 py-2">A function that modifies or enhances another function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Wrapper Function</td><td class="border border-gray-400 px-4 py-2">Inner function inside a decorator that adds extra behavior</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">@decorator</td><td class="border border-gray-400 px-4 py-2">Syntax to apply a decorator to a function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Reusable code, cleaner functions, dynamic behavior, readable syntax</td></tr>
      </tbody>
    </table>
  `
        },
      ]

    },
    advanced: {
      title: "Advance Level Python Notes",
      topics: [
        {
          title: "Functional Programming in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is Functional Programming?</h2>
    <p>Functional Programming (FP) treats computation as evaluation of mathematical functions, avoiding mutable data and state changes.</p>
    <p>Python supports FP with lambda functions, <code>map</code>, <code>filter</code>, and <code>reduce</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Lambda Functions (Anonymous Functions)</h2>
    <p>Small unnamed functions defined using the <code>lambda</code> keyword.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>lambda arguments: expression</code></pre>
    <h4>Example 1: Simple lambda</h4>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>square = lambda x: x**2
print(square(5))  # 25
</code></pre>
    <h4>Example 2: Lambda with multiple arguments</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>add = lambda a, b: a + b
print(add(3, 7))  # 10
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. map() Function</h2>
    <p>Applies a function to all items in an iterable returns a map object.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>map(function, iterable)</code></pre>
    <h4>Example: Square all numbers in a list</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. filter() Function</h2>
    <p>Filters items in iterable based on function returning True or False.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>filter(function, iterable)</code></pre>
    <h4>Example: Filter even numbers</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4, 6]
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. reduce() Function</h2>
    <p>Applies a function cumulatively to items, reducing iterable to a single value.</p>
    <p>Located in the <code>functools</code> module.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from functools import reduce
reduce(function, iterable)</code></pre>
    <h4>Example: Sum all numbers</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from functools import reduce

numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(total)  # 15
</code></pre>
    <h4>Example: Product of numbers</h4>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>product = reduce(lambda a, b: a * b, numbers)
print(product)  # 120
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a lambda function that calculates the cube of a number.</li>
      <li>Use <code>map()</code> to double all numbers in <code>[1,2,3,4,5]</code>.</li>
      <li>Use <code>filter()</code> to select numbers greater than 5 from <code>[3,6,2,9,5]</code>.</li>
      <li>Use <code>reduce()</code> to find the sum of <code>[10,20,30,40]</code>.</li>
      <li>Combine <code>map()</code> and <code>filter()</code> to double a list <code>[1,2,3,4]</code> then select numbers > 5.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Function / Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Lambda</td><td class="border border-gray-400 px-4 py-2">Anonymous, single-expression function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">map()</td><td class="border border-gray-400 px-4 py-2">Apply a function to all items in iterable</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">filter()</td><td class="border border-gray-400 px-4 py-2">Filter items based on a condition function</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">reduce()</td><td class="border border-gray-400 px-4 py-2">Reduce iterable to a single value cumulatively</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">functools.reduce</td><td class="border border-gray-400 px-4 py-2">Module required for reduce()</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Iterators and Generators in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Iterators in Python</h2>
    <p>An iterator is an object that can be traversed element by element.</p>
    <p>Lists, tuples, dictionaries, sets are iterable; use <code>iter()</code> to get iterator object, and <code>next()</code> to access items one by one.</p>

    <h3>1.1 Creating an Iterator</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Iterable
numbers = [1, 2, 3, 4, 5]

# Get iterator object
num_iterator = iter(numbers)

# Access elements using next()
print(next(num_iterator))  # 1
print(next(num_iterator))  # 2
print(next(num_iterator))  # 3
</code></pre>
    <p>When iterator is exhausted, <code>StopIteration</code> is raised:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>try:
    while True:
        print(next(num_iterator))
except StopIteration:
    print("Iterator reached the end.")</code></pre>

    <h3>1.2 Iterators in Loops</h3>
    <p>For loops use iterators automatically:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Generators in Python</h2>
    <p>Generators are special iterators using <code>yield</code> to produce items one at a time, saving memory.</p>

    <h3>2.1 Creating a Generator</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()

print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3</code></pre>

    <h3>2.2 Generator with Loop</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def squares(n):
    for i in range(1, n+1):
        yield i**2

for square in squares(5):
    print(square)</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>1
4
9
16
25</code></pre>

    <h3>2.3 Benefits of Generators</h3>
    <ul class="list-disc list-inside mb-6">
      <li>Memory efficient: generate items on demand</li>
      <li>Lazy evaluation: only produce items when needed</li>
      <li>Simpler code: avoid writing iterator classes</li>
      <li>Can create infinite sequences</li>
    </ul>
    <p><strong>Example: Infinite Generator</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def infinite_numbers():
    n = 1
    while True:
        yield n
        n += 1

# Warning: Don't print all, it's infinite!</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create an iterator from list [10, 20, 30] and print each item using <code>next()</code>.</li>
      <li>Write a generator function that yields the first 5 even numbers.</li>
      <li>Write a generator to yield squares of numbers from 1 to 10 and print them.</li>
      <li>Use a generator to create the Fibonacci sequence up to 50.</li>
      <li>Compare memory usage of a list vs generator for numbers 1 to 1,000,000.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">4. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Iterator</td><td class="border border-gray-400 px-4 py-2">Object traversed using <code>next()</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">iter()</td><td class="border border-gray-400 px-4 py-2">Convert iterable to iterator</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">next()</td><td class="border border-gray-400 px-4 py-2">Access next item from iterator</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Generator</td><td class="border border-gray-400 px-4 py-2">Function yielding items one by one using <code>yield</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">yield</td><td class="border border-gray-400 px-4 py-2">Produce value in generator and pause execution</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Memory-efficient, lazy evaluation, infinite sequences possible</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Context Managers in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is a Context Manager?</h2>
    <p>A context manager sets up a context, runs code inside it, and then cleans up automatically.</p>
    <p>Most common use is the <code>with</code> statement for safe file handling:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>with open("file.txt", "r") as f:
    content = f.read()
# File is automatically closed after the block</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. How the with Statement Works Behind the Scenes</h2>
    <p>Equivalent to:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>manager = expression.__enter__()
try:
    # Execute block
finally:
    expression.__exit__(None, None, None)
</code></pre>
    <p><code>__enter__()</code> runs at block start; returns the resource.</p>
    <p><code>__exit__(exc_type, exc_val, exc_tb)</code> runs at block end; handles cleanup and exceptions.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Creating Your Own Context Manager (Class-based)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class MyContext:
    def __enter__(self):
        print("Entering the context")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting the context")
        if exc_type:
            print(f"An exception occurred: {exc_val}")
        return True  # Suppress exception

with MyContext() as context:
    print("Inside the context")
    # raise ValueError("Oops!")  # Uncomment to test exception handling
</code></pre>
    <p><strong>Output without exception:</strong></p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Entering the context
Inside the context
Exiting the context</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Creating a Context Manager (Function-based) using contextlib</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from contextlib import contextmanager

@contextmanager
def my_context():
    print("Entering")
    try:
        yield
    finally:
        print("Exiting")

with my_context():
    print("Inside the block")
</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Entering
Inside the block
Exiting</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Benefits of Custom Context Managers</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Automatic cleanup of resources like files, sockets, database connections.</li>
      <li>Graceful exception handling inside <code>with</code> block.</li>
      <li>Reusable setup and teardown code.</li>
      <li>Improved readability and maintainability.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a context manager for a file that prints “File opened” and “File closed” on <code>with</code>.</li>
      <li>Create a class-based context manager that measures execution time of a block.</li>
      <li>Create a function-based context manager using <code>contextlib</code> to temporarily change directory.</li>
      <li>Handle exceptions in your custom context manager, print a friendly message.</li>
      <li>Use a custom context manager to acquire and release a mock resource like a database connection.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Context Manager</td><td class="border border-gray-400 px-4 py-2">Manages setup and cleanup automatically using <code>with</code></td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">with statement</td><td class="border border-gray-400 px-4 py-2">Simplifies resource management</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">__enter__()</td><td class="border border-gray-400 px-4 py-2">Runs entering context, returns resource</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">__exit__()</td><td class="border border-gray-400 px-4 py-2">Runs exiting context, handles cleanup and exceptions</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">contextlib.contextmanager</td><td class="border border-gray-400 px-4 py-2">Decorator for function-based context managers</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Automatic cleanup, exception handling, readable and reusable code</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Metaprogramming in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What is Metaprogramming?</h2>
    <p>Metaprogramming is writing code that manipulates code dynamically.</p>
    <p>In Python, this includes decorators, class decorators, and metaclasses.</p>
    <p>It allows modification of classes or functions at runtime.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Decorators (In-depth)</h2>

    <h3>2.1 Function Decorators</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"Hello, {name}"

print(greet("Bilal"))  # Output: HELLO, BILAL
</code></pre>

    <h3>2.2 Class Decorators</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>def add_str_method(cls):
    cls.__str__ = lambda self: f"Instance of {self.__class__.__name__}"
    return cls

@add_str_method
class MyClass:
    pass

obj = MyClass()
print(obj)  # Output: Instance of MyClass
</code></pre>
    <p><strong>Benefits:</strong> Logging, authentication, validation, code reuse, dynamic behavior.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Metaclasses (Basic Understanding)</h2>
    <p>Metaclasses are “classes of classes” controlling how classes behave.</p>
    <p><strong>Default metaclass:</strong> All Python classes have <code>type</code> as metaclass.</p>

    <h3>3.1 Basic Example of Metaclass</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>class MyMeta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass
</code></pre>
    <p><strong>Output:</strong></p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Creating class MyClass</code></pre>

    <h3>3.2 Why Metaclasses?</h3>
    <ul class="list-disc list-inside mb-6">
      <li>Enforce coding standards</li>
      <li>Automatically add methods or attributes</li>
      <li>Create singleton classes</li>
      <li>Used in advanced frameworks (e.g., Django ORM)</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Write a decorator that logs function name and arguments when called.</li>
      <li>Create a decorator that measures function execution time.</li>
      <li>Write a class decorator adding an <code>id</code> attribute to instances.</li>
      <li>Create a metaclass that adds class attribute <code>version = 1.0</code> automatically.</li>
      <li>Write a metaclass that prevents class instantiation by raising an exception in <code>__call__</code>.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">5. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Metaprogramming</td><td class="border border-gray-400 px-4 py-2">Code that dynamically manipulates other code</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Decorator (Function)</td><td class="border border-gray-400 px-4 py-2">Modifies a function without changing original code</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Decorator (Class)</td><td class="border border-gray-400 px-4 py-2">Modifies a class dynamically</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Metaclass</td><td class="border border-gray-400 px-4 py-2">Class of a class; controls creation of classes</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">type</td><td class="border border-gray-400 px-4 py-2">Default metaclass for Python classes</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Benefits</td><td class="border border-gray-400 px-4 py-2">Logging, validation, dynamic behavior, code reuse</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Concurrency and Parallelism in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. What are Concurrency and Parallelism?</h2>
    <p><strong>Concurrency:</strong> Multiple tasks make progress logically at the same time, but not necessarily simultaneously.</p>
    <p><strong>Parallelism:</strong> Tasks actually run simultaneously using multiple CPU cores.</p>
    <p>Python offers threading, multiprocessing, and asynchronous programming to handle these.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Threading (I/O-bound Tasks)</h2>
    <p>Threads run concurrently within one process, sharing memory.</p>
    <p>Best for I/O-bound tasks due to Python’s Global Interpreter Lock (GIL) limiting CPU-bound parallelism.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import threading
import time

def print_numbers():
    for i in range(1, 6):
        print(i)
        time.sleep(1)

def print_letters():
    for letter in ['A', 'B', 'C', 'D', 'E']:
        print(letter)
        time.sleep(1)

t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

t1.start()
t2.start()

t1.join()
t2.join()

print("Done!")</code></pre>
    <p><strong>Use Case:</strong> Downloading files, network calls, reading/writing I/O.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Multiprocessing (CPU-bound Tasks)</h2>
    <p>Creates separate processes with independent memory; enables true parallelism across CPU cores.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from multiprocessing import Process
import time

def square_numbers():
    for i in range(1, 6):
        print(i*i)
        time.sleep(1)

def cube_numbers():
    for i in range(1, 6):
        print(i**3)
        time.sleep(1)

p1 = Process(target=square_numbers)
p2 = Process(target=cube_numbers)

p1.start()
p2.start()

p1.join()
p2.join()

print("Done!")</code></pre>
    <p><strong>Use Case:</strong> Data processing, image/video processing, machine learning computations.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Asynchronous Programming with asyncio</h2>
    <p>Non-blocking concurrency using <code>async</code>/<code>await</code> syntax; ideal for high-level I/O tasks.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("Hello again")

async def say_world():
    print("World")
    await asyncio.sleep(1)
    print("World again")

async def main():
    await asyncio.gather(say_hello(), say_world())

asyncio.run(main())</code></pre>
    <p>Output:</p>
    <pre class="bg-gray-50 p-3 rounded mb-6"><code>Hello
World
Hello again
World again</code></pre>
    <p><strong>Use Case:</strong> Network requests, APIs, web scraping, chatbots.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create two threads that print numbers 1–5 and letters A–E concurrently.</li>
      <li>Create two processes computing squares and cubes of 1–5 in parallel.</li>
      <li>Use asyncio to simulate downloading three files asynchronously.</li>
      <li>Compare execution time of threading vs multiprocessing on CPU-heavy tasks.</li>
      <li>Write an async function to fetch data from multiple APIs concurrently using <code>asyncio.gather</code>.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Use Case</th>
          <th class="border border-gray-400 px-4 py-2">Key Feature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Threading</td>
          <td class="border border-gray-400 px-4 py-2">I/O-bound tasks</td>
          <td class="border border-gray-400 px-4 py-2">Shared memory, concurrent threads</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Multiprocessing</td>
          <td class="border border-gray-400 px-4 py-2">CPU-bound tasks</td>
          <td class="border border-gray-400 px-4 py-2">Separate processes, true parallelism</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Asyncio (async/await)</td>
          <td class="border border-gray-400 px-4 py-2">High-level I/O tasks</td>
          <td class="border border-gray-400 px-4 py-2">Non-blocking, single-threaded concurrency</td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">GIL</td>
          <td class="border border-gray-400 px-4 py-2">Limits Python threading</td>
          <td class="border border-gray-400 px-4 py-2">Global Interpreter Lock</td>
        </tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Unit Testing in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Importance of Unit Testing</h2>
    <p>Unit Testing verifies individual units/components of code work correctly.</p>
    <p><strong>Benefits:</strong></p>
    <ul class="list-disc list-inside mb-6">
      <li>Catch bugs early in development.</li>
      <li>Ensure correctness when making changes.</li>
      <li>Improve code design and maintainability.</li>
      <li>Facilitate safe refactoring.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using the Built-in unittest Framework</h2>
    <p>Steps:</p>
    <ol class="list-decimal list-inside mb-6">
      <li>Import <code>unittest</code>.</li>
      <li>Create a class inheriting <code>unittest.TestCase</code>.</li>
      <li>Write methods starting with <code>test_</code> for tests.</li>
      <li>Run tests using <code>unittest.main()</code>.</li>
    </ol>
    <h3>2.2 Example: Testing a Simple Function</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># my_module.py
def add(a, b):
    return a + b

# test_my_module.py
import unittest
from my_module import add

class TestAddFunction(unittest.TestCase):

    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

    def test_add_zero(self):
        self.assertEqual(add(0, 5), 5)

if __name__ == '__main__':
    unittest.main()</code></pre>
    <p><strong>Common Assertions:</strong></p>
    <ul class="list-disc list-inside mb-6">
      <li><code>assertEqual(a, b)</code> – checks if <code>a == b</code></li>
      <li><code>assertTrue(x)</code> – checks if <code>x</code> is True</li>
      <li><code>assertFalse(x)</code> – checks if <code>x</code> is False</li>
      <li><code>assertRaises(Error, func, *args)</code> – checks for expected error</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Using pytest Framework</h2>
    <p>pytest is a popular third-party testing framework with simpler syntax and powerful features.</p>
    <h3>3.1 Installation</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install pytest</code></pre>
    <h3>3.2 Writing Tests with pytest</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># test_my_module_pytest.py
from my_module import add

def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-1, -1) == -2

def test_add_zero():
    assert add(0, 5) == 5
</code></pre>
    <h3>3.3 Running Tests</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pytest</code></pre>
    <p>pytest auto-discovers tests and gives detailed reports.</p>
    <p><strong>Advanced Features:</strong></p>
    <ul class="list-disc list-inside mb-6">
      <li>Fixtures for setup/teardown</li>
      <li>Parametrized tests</li>
      <li>Plugins for coverage reports and more</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Write a multiplication function and unittest tests for it.</li>
      <li>Write a division function and test division by zero exceptions.</li>
      <li>Install pytest and rewrite above tests using pytest.</li>
      <li>Create a pytest test function with multiple input values using <code>@pytest.mark.parametrize</code>.</li>
      <li>Measure test coverage using the <code>pytest-cov</code> plugin.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">5. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Unit Testing</td><td class="border border-gray-400 px-4 py-2">Tests individual components of code</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">unittest</td><td class="border border-gray-400 px-4 py-2">Built-in Python testing framework</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">pytest</td><td class="border border-gray-400 px-4 py-2">Third-party testing framework with simpler syntax and rich features</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Assertions</td><td class="border border-gray-400 px-4 py-2">Methods to verify expected results (<code>assertEqual</code>, <code>assertTrue</code>, <code>assertRaises</code>)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Fixtures / Parametrize</td><td class="border border-gray-400 px-4 py-2">pytest features for setup, teardown, and testing multiple inputs</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Introduction to Python Web Development",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Introduction to Python Web Development</h2>
    <p>Python is popular for building web applications, with different frameworks based on project size:</p>
    <ul class="list-disc list-inside mb-6">
      <li><strong>Flask:</strong> Lightweight, simple, flexible micro-framework for small web apps and APIs.</li>
      <li><strong>Django:</strong> Full-featured, batteries-included framework with ORM, authentication, admin panel, ideal for large projects.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Web Frameworks</h2>

    <h3>2.1 Flask (Micro-framework)</h3>
    <p>Minimal and quick to build small web apps.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World! Welcome to Flask."

if __name__ == '__main__':
    app.run(debug=True)
</code></pre>
    <p>Run and open <a href="http://127.0.0.1:5000/">http://127.0.0.1:5000/</a> in a browser.</p>

    <h3>2.2 Django (Batteries-included Framework)</h3>
    <p>Great for large-scale apps with built-in tools:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver
</code></pre>
    <p>Visit <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> to see the Django default page.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. APIs: Creating RESTful APIs</h2>
    <p>REST API enables communication over HTTP with GET, POST, PUT, DELETE.</p>
    <p>Flask provides simple tools to build APIs.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from flask import Flask, jsonify, request

app = Flask(__name__)

data = {"message": "Hello, API!"}

@app.route('/api', methods=['GET'])
def get_data():
    return jsonify(data)

@app.route('/api', methods=['POST'])
def post_data():
    new_data = request.json
    data.update(new_data)
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
    <p>Access GET via <a href="http://127.0.0.1:5000/api">http://127.0.0.1:5000/api</a>. Use tools like Postman for POST.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Web Scraping</h2>
    <p>Extract information programmatically from websites using <code>requests</code> and <code>BeautifulSoup</code>.</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

# Extract title
title = soup.title.text
print("Page Title:", title)

# Extract all links
links = [a['href'] for a in soup.find_all('a', href=True)]
print("Links:", links)</code></pre>
    <p>Note: Always respect <code>robots.txt</code> when scraping websites.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a basic Flask app with routes <code>/</code> and <code>/about</code>.</li>
      <li>Create a Django project and display “Hello, Django” on homepage.</li>
      <li>Create a simple REST API with Flask returning list of students.</li>
      <li>Use <code>requests</code> and <code>BeautifulSoup</code> to scrape all <code>&lt;h1&gt;</code> headings from a web page.</li>
      <li>Combine Flask API with scraped data and return as JSON.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">Flask</td><td class="border border-gray-400 px-4 py-2">Micro-framework for small web apps and APIs</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Django</td><td class="border border-gray-400 px-4 py-2">Full-featured framework with built-in tools</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">REST API</td><td class="border border-gray-400 px-4 py-2">HTTP-based web service managing resources</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Web Scraping</td><td class="border border-gray-400 px-4 py-2">Extracting data from websites using requests and BeautifulSoup</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">Requests</td><td class="border border-gray-400 px-4 py-2">Library for making HTTP requests</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">BeautifulSoup</td><td class="border border-gray-400 px-4 py-2">Library for parsing HTML and extracting data</td></tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Introduction to Data Science with Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Introduction</h2>
    <p>Python is popular in data science for its powerful libraries:</p>
    <ul class="list-disc list-inside mb-6">
      <li><strong>NumPy:</strong> Efficient numerical computations.</li>
      <li><strong>Pandas:</strong> Data manipulation and analysis.</li>
      <li><strong>Matplotlib / Seaborn:</strong> Data visualization.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. NumPy (Numerical Python)</h2>
    <h3>2.1 Installation</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install numpy</code></pre>
    <h3>2.2 Example: NumPy Arrays</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import numpy as np

# Create 1D array
arr = np.array([1, 2, 3, 4, 5])
print("Array:", arr)

# Arithmetic operations
print("Square:", arr**2)

# Create 2D array
matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\\n", matrix)

# Sum along axis
print("Sum of columns:", matrix.sum(axis=0))
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Pandas (Data Manipulation & Analysis)</h2>
    <h3>3.1 Installation</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install pandas</code></pre>
    <h3>3.2 Example: Pandas DataFrame</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 22],
    "City": ["NY", "LA", "Chicago"]
}
df = pd.DataFrame(data)
print(df)

# Access columns
print("Names:", df["Name"])

# Filter rows
print("Age > 25:\\n", df[df["Age"] > 25])

# Summary statistics
print(df.describe())
</code></pre>
    <h3>3.3 Reading/Writing Files</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code># Read CSV
df = pd.read_csv("data.csv")

# Write CSV
df.to_csv("output.csv", index=False)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Data Visualization</h2>
    <h3>4.1 Matplotlib</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y, marker='o', color='green', label="Line")
plt.title("Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.legend()
plt.show()
</code></pre>
    <h3>4.2 Seaborn</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import seaborn as sns
import pandas as pd

data = {
    "Age": [25, 30, 22, 35, 28],
    "Salary": [50000, 60000, 45000, 80000, 55000]
}
df = pd.DataFrame(data)

# Scatter plot
sns.scatterplot(x="Age", y="Salary", data=df)
plt.show()

# Histogram
sns.histplot(df["Salary"], bins=5, kde=True)
plt.show()
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create a NumPy array from 1 to 20, compute mean and standard deviation.</li>
      <li>Create a Pandas DataFrame of students with Name, Age, Marks; filter students with Marks &gt; 70.</li>
      <li>Read a CSV file with Pandas and print first 5 rows.</li>
      <li>Plot a line graph with markers and labels using Matplotlib.</li>
      <li>Use Seaborn to create a histogram of a numeric column with KDE curve.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Library</th>
          <th class="border border-gray-400 px-4 py-2">Purpose</th>
          <th class="border border-gray-400 px-4 py-2">Example Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">NumPy</td>
          <td class="border border-gray-400 px-4 py-2">Numerical computations, arrays, matrices</td>
          <td class="border border-gray-400 px-4 py-2"><code>np.array([1,2,3])</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Pandas</td>
          <td class="border border-gray-400 px-4 py-2">Data manipulation, analysis, reading/writing files</td>
          <td class="border border-gray-400 px-4 py-2"><code>pd.DataFrame({...})</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Matplotlib</td>
          <td class="border border-gray-400 px-4 py-2">Basic plotting (line, bar, scatter)</td>
          <td class="border border-gray-400 px-4 py-2"><code>plt.plot(x, y)</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">Seaborn</td>
          <td class="border border-gray-400 px-4 py-2">Statistical plots and advanced visualization</td>
          <td class="border border-gray-400 px-4 py-2"><code>sns.scatterplot(...)</code></td>
        </tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Scripting & Automation with Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Introduction to Scripting & Automation</h2>
    <p>Python is widely used for automating repetitive tasks and interacting with the system.</p>
    <p>Common tasks include file management, system operations, text processing, and pattern matching.</p>
    <p>Core modules: <code>os</code>, <code>shutil</code>, <code>re</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Interacting with the Operating System (os module)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import os

# Current working directory
print("CWD:", os.getcwd())

# List files and directories
print("Files & Folders:", os.listdir())

# Create a new directory
os.mkdir("test_folder")

# Rename directory
os.rename("test_folder", "renamed_folder")

# Remove directory
os.rmdir("renamed_folder")
</code></pre>
    <p>Other useful functions: <code>os.path.exists()</code>, <code>os.path.join()</code>, <code>os.environ</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Managing the Filesystem (shutil module)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import shutil

# Copy file
shutil.copy("source.txt", "destination.txt")

# Copy folder
shutil.copytree("source_folder", "backup_folder")

# Move file
shutil.move("destination.txt", "backup_folder/")

# Delete folder
shutil.rmtree("backup_folder")
</code></pre>
    <p>Use Cases: Backups, file organizing, batch file operations.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Regular Expressions (re module)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>import re

text = "My email is bilal@example.com and my friend's is alice@mail.com"

# Find all emails
emails = re.findall(r'\\b[\\w.-]+@[\\w.-]+\\.\\w+\\b', text)
print("Emails found:", emails)

# Check if string starts with 'My'
pattern = r'^My'
match = re.match(pattern, text)
if match:
    print("Text starts with 'My'")
</code></pre>
    <p>Common Regex Functions:</p>
    <ul class="list-disc list-inside mb-6">
      <li><code>re.search()</code> – Search pattern in text</li>
      <li><code>re.match()</code> – Match pattern from start</li>
      <li><code>re.findall()</code> – Return all matches as list</li>
      <li><code>re.sub()</code> – Replace matched patterns</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Use <code>os</code> to list all <code>.txt</code> files in current directory.</li>
      <li>Create a folder called <code>Automation</code>, copy a file into it, then rename the folder using <code>shutil</code>.</li>
      <li>Write a script to delete all empty folders in a given directory.</li>
      <li>Use <code>re</code> to extract all phone numbers like <code>+92-300-1234567</code> from text.</li>
      <li>Combine <code>os</code>, <code>shutil</code>, and <code>re</code> to find all <code>.txt</code> files containing a keyword and move them to a new folder.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">6. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Module</th>
          <th class="border border-gray-400 px-4 py-2">Purpose</th>
          <th class="border border-gray-400 px-4 py-2">Example Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-4 py-2">os</td>
          <td class="border border-gray-400 px-4 py-2">Interact with operating system</td>
          <td class="border border-gray-400 px-4 py-2"><code>os.listdir(), os.mkdir()</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">shutil</td>
          <td class="border border-gray-400 px-4 py-2">File and folder operations</td>
          <td class="border border-gray-400 px-4 py-2"><code>shutil.copy(), shutil.move()</code></td>
        </tr>
        <tr>
          <td class="border border-gray-400 px-4 py-2">re</td>
          <td class="border border-gray-400 px-4 py-2">Pattern matching and text manipulation</td>
          <td class="border border-gray-400 px-4 py-2"><code>re.findall(), re.sub()</code></td>
        </tr>
      </tbody>
    </table>
  `
        },
        {
          title: "Packaging & Distribution in Python",
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Introduction to Packaging & Distribution</h2>
    <p>Packaging organizes your Python code for sharing and reuse.</p>
    <p>Distribution allows publishing packages to PyPI for installation via pip.</p>
    <p>Key tools: <code>setuptools</code>, <code>wheel</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using setuptools and wheel</h2>
    <h3>2.1 Installation</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install setuptools wheel twine</code></pre>
    <h3>2.2 Project Structure Example</h3>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>my_package/
├── my_package/
│   ├── __init__.py
│   └── utils.py
├── setup.py
├── README.md
└── LICENSE
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Writing setup.py</h2>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1.0",
    author="Your Name",
    author_email="your@email.com",
    description="A simple Python package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/username/my_package",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Creating the Distribution</h2>
    <p>Run in your project root (where <code>setup.py</code> is):</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>python setup.py sdist bdist_wheel</code></pre>
    <p>This creates a <code>dist/</code> folder with <code>.tar.gz</code> and <code>.whl</code> files.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Uploading to PyPI</h2>
    <p>Create an account on <a href="https://pypi.org/">PyPI</a>.</p>
    <p>If needed, install <code>twine</code>:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install twine</code></pre>
    <p>Upload your package with:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>twine upload dist/*</code></pre>
    <p>Enter PyPI credentials when prompted.</p>
    <p>After successful upload, install via:</p>
    <pre class="bg-gray-100 p-3 rounded mb-6"><code>pip install my_package</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">6. Mini Tasks</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Create package <code>math_utils</code> with functions <code>add(a, b)</code> and <code>multiply(a, b)</code>.</li>
      <li>Write a <code>setup.py</code> with appropriate metadata.</li>
      <li>Build source and wheel distributions.</li>
      <li>Upload to TestPyPI and test installation.</li>
      <li>Install package via pip and test functions.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600">7. Summary Table</h2>
    <table class="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Concept</th>
          <th class="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="border border-gray-400 px-4 py-2">setuptools</td><td class="border border-gray-400 px-4 py-2">Tool to create and build Python packages</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">wheel</td><td class="border border-gray-400 px-4 py-2">Built package format for faster installation</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">setup.py</td><td class="border border-gray-400 px-4 py-2">Configuration file with package metadata</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">sdist</td><td class="border border-gray-400 px-4 py-2">Source distribution</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">bdist_wheel</td><td class="border border-gray-400 px-4 py-2">Binary distribution (wheel)</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">PyPI</td><td class="border border-gray-400 px-4 py-2">Python Package Index for sharing packages</td></tr>
        <tr><td class="border border-gray-400 px-4 py-2">twine</td><td class="border border-gray-400 px-4 py-2">Tool to upload packages to PyPI</td></tr>
      </tbody>
    </table>
  `
        },
      ]
    }
  };

  const finalProject = {
    title: "Final Project: Python Student Management System",
    description: "A console-based Python Student Management System where you can manage student records, including adding, viewing, updating, and deleting students, along with saving data permanently using file handling.",

    requirements: [
      "Use classes and objects to represent Students and the Management System",
      "Implement functions to add, view, update, and delete student records",
      "Use file handling (CSV or text files) to save student data permanently",
      "Create a menu-driven interface for easy user interaction",
      "Validate user input (IDs, names, grades, etc.)",
      "Optional: Include search functionality for students by ID, name, or class"
    ],

    structure: `Student_Management_System/
├── main.py          // Main program with menu
├── student.py       // Classes and methods for student operations
└── students.csv     // Stored student data`,

    bonus: [
      "Add sorting of students by name, grade, or ID",
      "Implement student report cards generation",
      "Include login system for admin and staff",
      "Generate summary reports (total students, class-wise count, etc.)",
      "Optional GUI using Tkinter for interactive desktop application"
    ]
  };



  // Function to safely render HTML
  const createMarkup = () => {
    return { __html: htmlContent[activeLevel].topics[activeTopicIndex].theory };
  };
  // const createMarkup1 = () => {
  //   return { __html: htmlContent[activeLevel].topics[activeTopicIndex].explanation };
  // };
  // const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   // Get the code text
  //   const codeText = htmlContent[activeLevel].topics[activeTopicIndex].code;

  //   // Copy to clipboard
  //   navigator.clipboard.writeText(codeText)
  //     .then(() => {
  //       setCopied(true);
  //       // Reset after 2 seconds
  //       setTimeout(() => setCopied(false), 2000);
  //     })
  //     .catch(err => {
  //       console.error('Failed to copy: ', err);
  //     });
  // };
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className=" container mx-auto text-center mb-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg mt-28">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete Python Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in Python from Beginner to Advanced Level
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

export default PythonNotes;
