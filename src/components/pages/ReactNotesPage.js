import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const ReactNotesPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level React js Notes",
      topics: [
        {
          title: 'What is React? (Library vs Framework)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">Definition</h2>
    <p class="text-gray-700 mb-4">
      React is a JavaScript <strong>library</strong> developed by Facebook for building user interfaces (UI).
      It focuses mainly on the <em>view layer</em> of an application, i.e., what users see on the screen.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Features of React</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Component-Based Architecture:</strong> UI is built from reusable components like Header, Footer, Sidebar, Buttons, and Cards. Components can be nested and reused.</li>
      <li><strong>Declarative:</strong> Instead of manually updating DOM step-by-step, you describe what the UI should look like. React updates the UI automatically when data changes.
        <pre class="bg-gray-100 p-3 rounded my-2"><code>const name = "Bilal";
const element = &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;</code></pre>
      React automatically updates the <code>&lt;h1&gt;</code> when <code>name</code> changes.
      </li>
      <li><strong>Virtual DOM:</strong> React keeps a lightweight copy of the actual DOM. When data changes, it compares old and new Virtual DOM and only updates necessary parts of the real DOM, making UI updates fast and efficient.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Library vs Framework</h2>
    <table class="table-auto border-collapse border border-gray-300 w-full mb-6 text-left">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">Feature</th>
          <th class="border border-gray-300 px-4 py-2">Library (React)</th>
          <th class="border border-gray-300 px-4 py-2">Framework (Angular/Vue)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Control</td>
          <td class="border border-gray-300 px-4 py-2">You control when to call it</td>
          <td class="border border-gray-300 px-4 py-2">Framework controls the structure</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Focus</td>
          <td class="border border-gray-300 px-4 py-2">Only UI (View layer)</td>
          <td class="border border-gray-300 px-4 py-2">Full-stack features (Routing, State, HTTP, etc.)</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Learning Curve</td>
          <td class="border border-gray-300 px-4 py-2">Easier to learn</td>
          <td class="border border-gray-300 px-4 py-2">Steeper learning curve</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Flexibility</td>
          <td class="border border-gray-300 px-4 py-2">High (combine with other libraries)</td>
          <td class="border border-gray-300 px-4 py-2">More opinionated and structured</td>
        </tr>
      </tbody>
    </table>
    <p class="text-gray-700 mb-4">
      <strong>Key takeaway:</strong> React is a flexible library, not a full framework. You can integrate it with tools like Redux (state management), React Router (routing), Axios (API calls), etc.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Simple React Component</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";

function Welcome() {
  return &lt;h1&gt;Hello, welcome to React!&lt;/h1&gt;;
}

export default Welcome;</code></pre>
    <p class="text-gray-700 mb-4">
      This is a functional component, which can be rendered in the DOM using ReactDOM.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why React is Popular</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Huge community support and ecosystem.</li>
      <li>Easy to learn for developers with JavaScript knowledge.</li>
      <li>Used by major apps such as Facebook, Instagram, Netflix.</li>
      <li>Supports mobile development through React Native.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React is a JavaScript library for building user interfaces.</li>
      <li>It leverages components, JSX syntax, and a Virtual DOM.</li>
      <li>Unlike full frameworks, React focuses only on the view layer.</li>
      <li>It's flexible, fast, and a popular choice for modern web development.</li>
    </ul>
  `,
          code: `
// React functional component example
import React from 'react';

function Welcome() {
  const name = "Bilal";
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
  `,
          explanation: `
  - React is a library focused on building UI components efficiently.
  - It abstracts DOM manipulation with a Virtual DOM, making UI updates faster.
  - React is declarative: you describe what the UI looks like, not the step-by-step DOM changes.
  - Compared to frameworks, React is more flexible and can be combined with other libraries for routing, state management, and API calls.
  - React’s component-based design encourages reusable, maintainable, and modular code.
  - Its ecosystem and ease of learning contribute to its popularity.
  `,
          task: `
  Task:
  1. Create a React functional component that accepts a prop and displays a greeting.
  2. Use JSX syntax to embed JavaScript expressions inside the component.
  3. Compare React’s library approach with frameworks like Angular or Vue.
  4. Build a small app using React components and update state to reflect user input.
  `
        },
        {
          title: 'Understanding the Virtual DOM',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is the Virtual DOM?</h2>
    <p class="text-gray-700 mb-4">
      The DOM (Document Object Model) is the browser’s representation of your HTML.
      Directly updating the real DOM is slow, especially for large applications.
      The <strong>Virtual DOM (VDOM)</strong> is a lightweight, in-memory copy of the real DOM used by React.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">How it Works</h2>
    <ol class="list-decimal list-inside text-gray-800 mb-4">
      <li>React keeps a Virtual DOM representation of your UI.</li>
      <li>When state or props change, React creates a new Virtual DOM tree.</li>
      <li>React diffs the old Virtual DOM and the new Virtual DOM to find changes.</li>
      <li>Only the changed parts are updated in the real DOM.</li>
    </ol>
    <p>This process is called <strong>reconciliation</strong>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why Virtual DOM is Important</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Improves performance by minimizing expensive DOM manipulations.</li>
      <li>Makes UI updates predictable and efficient.</li>
      <li>Allows React to be declarative: you describe <em>what</em> the UI should look like instead of <em>how</em> to update it step-by-step.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Virtual DOM Flow Example</h2>
    <p>Initial UI:</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const element = &lt;h1&gt;Hello, Bilal!&lt;/h1&gt;
</code></pre>
    <p>React renders <code>&lt;h1&gt;Hello, Bilal!&lt;/h1&gt;</code> in the real DOM.</p>
    <p>State changes: <code>setName("Sara")</code></p>
    <p>React creates a new VDOM: <code>&lt;h1&gt;Hello, Sara!&lt;/h1&gt;</code></p>
    <p>React diffs old vs new VDOM and updates <code>&lt;h1&gt;</code> text node only in the real DOM.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Code Example Demonstrating VDOM Concept</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [name, setName] = useState("Bilal");

  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;
      &lt;button onClick={() =&gt; setName("Sara")}&gt;Change Name&lt;/button&gt;
    &lt;/div&gt;
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(&lt;App /&gt;);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Explanation</h2>
    <p class="text-gray-700 mb-4">
      At initial render: <code>&lt;h1&gt;Hello, Bilal!&lt;/h1&gt;</code> is created.
      Clicking the button changes state → a new Virtual DOM is created →
      React compares it with the old Virtual DOM and finds only the <code>&lt;h1&gt;</code> text needs updating →
      React efficiently updates just that text in the real DOM.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Virtual DOM is faster than direct real DOM manipulation.</li>
      <li>React updates only the differences between Virtual DOM trees.</li>
      <li>This optimization enables smooth, performant UI updates even in complex applications.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Virtual DOM = lightweight copy of real DOM.</li>
      <li>React diffs old and new Virtual DOM to update only changed elements.</li>
      <li>Improves performance and enables declarative UI development.</li>
    </ul>
  `,
          code: `
// React component showing VDOM in action
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [name, setName] = useState("Bilal");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("Sara")}>Change Name</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  `,
          explanation: `
  - React keeps a Virtual DOM to efficiently track UI changes.
  - When state or props change, a new Virtual DOM tree is created.
  - React compares the previous and new Virtual DOM trees to find minimal changes.
  - Only affected portions of the real DOM are updated, improving app performance.
  - This enables developers to write declarative UI code without manual DOM manipulation.
  `,
          task: `
  Task:
  1. Write a simple React component with a piece of state displayed in the UI.
  2. Update the state via button click and observe UI update.
  3. Explain how Virtual DOM helps update only the changed parts.
  4. Compare Virtual DOM approach with direct DOM manipulation.
  `
        },
        {
          title: 'JSX (JavaScript XML) Syntax and Rules',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is JSX?</h2>
    <p class="text-gray-700 mb-4">
      JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
      React uses JSX to make UI code more readable and declarative.
    </p>
    <p class="text-gray-700 mb-4">
      Example:
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;
// Translates to:
const element = React.createElement("h1", null, "Hello, React!");</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">JSX Syntax Rules</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Single Parent Element:</strong> JSX must have one root element.
        <br />❌ Incorrect:
        <pre class="bg-gray-100 p-3 rounded my-2"><code>return (
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;World&lt;/p&gt;
);
</code></pre>
        ✅ Correct:
        <pre class="bg-gray-100 p-3 rounded my-2"><code>return (
  &lt;div&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;World&lt;/p&gt;
  &lt;/div&gt;
);
</code></pre>
      </li>

      <li><strong>JavaScript Expressions:</strong> Use curly braces <code>{}</code> to embed JS expressions.
        <pre class="bg-gray-100 p-3 rounded my-2"><code>const name = "Bilal";
return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;</code></pre>
      </li>

      <li><strong>Attributes:</strong> Use camelCase for attribute names.
        <ul>
          <li><code>class</code> → <code>className</code></li>
          <li><code>for</code> → <code>htmlFor</code></li>
          <li><code>onclick</code> → <code>onClick</code></li>
        </ul>
        Example:
        <pre class="bg-gray-100 p-3 rounded my-2"><code>&lt;button className="btn" onClick={handleClick}&gt;Click Me&lt;/button&gt;</code></pre>
      </li>

      <li><strong>Comments inside JSX:</strong> Use curly braces with JavaScript comment syntax.
        <pre class="bg-gray-100 p-3 rounded my-2"><code>return (
  &lt;div&gt;
    {/* This is a JSX comment */}
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/div&gt;
);</code></pre>
      </li>

      <li><strong>Embedding Expressions:</strong> Any valid JS expression works inside <code>{}</code>.
        <pre class="bg-gray-100 p-3 rounded my-2"><code>const a = 5, b = 10;
return &lt;p&gt;{a} + {b} = {a + b}&lt;/p&gt;;</code></pre>
      </li>

      <li><strong>Conditional Rendering:</strong> Use ternary operators or logical && inside JSX.
        <pre class="bg-gray-100 p-3 rounded my-2"><code>const isLoggedIn = true;
return (
  &lt;div&gt;
    {isLoggedIn ? &lt;h1&gt;Welcome Back!&lt;/h1&gt; : &lt;h1&gt;Please Login&lt;/h1&gt;}
  &lt;/div&gt;
);
</code></pre>
      </li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Complete JSX Usage</h2>
    <pre class="bg-gray-100 p-3 rounded my-2"><code>import React from "react";

function App() {
  const user = { name: "Bilal", age: 22 };
  const isLoggedIn = true;

  return (
    &lt;div&gt;
      {/* Header */}
      &lt;h1&gt;Hello, {user.name}!&lt;/h1&gt;
      
      {/* Conditional Greeting */}
      {isLoggedIn ? &lt;p&gt;Welcome Back!&lt;/p&gt; : &lt;p&gt;Please Login&lt;/p&gt;}
      
      {/* Calculations */}
      &lt;p&gt;{2 + 3} is the sum of 2 and 3&lt;/p&gt;
      
      {/* Button */}
      &lt;button onClick={() =&gt; alert("Clicked!")}&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>JSX looks like HTML but is not HTML.</li>
      <li>JavaScript inside JSX must be within curly braces <code>{}</code>.</li>
      <li>JSX must have a single root element.</li>
      <li>Use camelCase for attribute names such as <code>className</code> and <code>onClick</code>.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>JSX combines JavaScript and HTML-like syntax to write UI components easily.</li>
      <li>It supports embedding expressions, event handling, and conditional rendering.</li>
      <li>React compiles JSX into React.createElement calls to efficiently update the DOM.</li>
    </ul>
  `,
          code: `
// JSX Example - Functional Component
import React from 'react';

function App() {
  const user = { name: "Bilal", age: 22 };
  const isLoggedIn = true;

  return (
    <div>
      {/* Display user name */}
      <h1>Hello, {user.name}!</h1>

      {/* Conditional content */}
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Login</p>}

      {/* Simple expression */}
      <p>{2 + 3} is the sum of 2 and 3</p>

      {/* Event handling */}
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}

export default App;
  `,
          explanation: `
  - JSX enables writing JavaScript and HTML together with better readability.
  - You must wrap JavaScript expressions in curly braces.
  - JSX requires a single root element, often a <div> or React.Fragment.
  - Use camelCase for JSX attributes to match JavaScript syntax.
  - Comments inside JSX use {/* comment */} syntax.
  - Conditional rendering can be done with ternaries or logical && operators inside JSX.
  - JSX is compiled to React.createElement() calls that build the Virtual DOM.
  `,
          task: `
  Task:
  1. Create a React component using JSX that displays a dynamic greeting with a name variable.
  2. Use a button with an onClick handler to change the displayed name.
  3. Use conditional rendering to show different messages for logged in vs logged out states.
  4. Practice embedding JavaScript expressions inside JSX (e.g., arithmetic, function calls).
  5. Add comments inside your JSX to explain parts of your component.
  `
        },
        {
          title: 'Components: Functional vs Class Components',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is a Component?</h2>
    <p class="text-gray-700 mb-4">
      A component is a reusable piece of UI in React. It can be thought of as a function or class that returns React elements. 
      Components allow breaking the UI into smaller, manageable parts.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Functional Components</h2>
    <p class="text-gray-700 mb-4">
      <strong>Definition:</strong> A JavaScript function that returns JSX.
      Functional components are simpler and represent the modern way to build React components.
      They can use <code>Hooks</code> (like <code>useState</code>, <code>useEffect</code>) to manage state and lifecycle features.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";

function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

export default Welcome;
</code></pre>
    <p class="text-gray-700 mb-4">
      <strong>Usage:</strong>
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(&lt;Welcome name="Bilal" /&gt;);
</code></pre>

    <p class="text-gray-700 mb-4"><strong>Key Points:</strong> Props passed as argument, can be stateless or use Hooks, preferred in modern React.</p>

    <h3 class="font-semibold mb-2">Functional Component with State Example</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Class Components (Basic Understanding)</h2>
    <p class="text-gray-700 mb-4">
      <strong>Definition:</strong> A JavaScript class that extends <code>React.Component</code>.
      Must have a <code>render()</code> method that returns JSX.
      Supports state and lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;;
  }
}

export default Welcome;
</code></pre>
    <p><strong>Usage:</strong> <code>&lt;Welcome name="Bilal" /&gt;</code></p>
    <p class="text-gray-700 mb-4"><strong>Key Points:</strong> Uses <code>this.props</code> and <code>this.state</code>, lifecycle methods available, less used in modern React.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Comparison: Functional vs Class Components</h2>
    <table class="table-auto border border-gray-300 w-full mb-6 text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-4 py-2">Feature</th>
          <th class="border border-gray-300 px-4 py-2">Functional Component</th>
          <th class="border border-gray-300 px-4 py-2">Class Component</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Syntax</td>
          <td class="border border-gray-300 px-4 py-2">function Component() {}</td>
          <td class="border border-gray-300 px-4 py-2">class Component extends React.Component</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">State</td>
          <td class="border border-gray-300 px-4 py-2">useState hook</td>
          <td class="border border-gray-300 px-4 py-2">this.state</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Lifecycle Methods</td>
          <td class="border border-gray-300 px-4 py-2">useEffect hook</td>
          <td class="border border-gray-300 px-4 py-2">componentDidMount, etc.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Simplicity</td>
          <td class="border border-gray-300 px-4 py-2">Simpler, less boilerplate</td>
          <td class="border border-gray-300 px-4 py-2">More verbose</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Modern Usage</td>
          <td class="border border-gray-300 px-4 py-2">Preferred</td>
          <td class="border border-gray-300 px-4 py-2">Older codebases</td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Combining Components</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Header() {
  return &lt;h1&gt;My App Header&lt;/h1&gt;;
}

function Footer() {
  return &lt;footer&gt;My App Footer&lt;/footer&gt;;
}

function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;p&gt;Welcome to my React app!&lt;/p&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  );
}

export default App;
</code></pre>
    <p class="text-gray-700">
      Components can be nested and reused multiple times.
      This helps organize large React applications.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-3">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React components are reusable UI pieces.</li>
      <li>Functional components are modern, simpler, and use Hooks for state and lifecycle.</li>
      <li>Class components offer lifecycle methods and state but are less used now.</li>
      <li>Props and state enable dynamic data and interactivity in components.</li>
      <li>Components can be nested to build complex, maintainable UIs.</li>
    </ul>
  `,
          code: `
// Functional Component Example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// Class Component Example
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
  `,
          explanation: `
  - Components form the building blocks of React UI.
  - Functional components are just JavaScript functions returning JSX and support Hooks (e.g., useState, useEffect).
  - Class components extend React.Component and provide state and lifecycle methods via class syntax.
  - Functional components are simpler, less verbose, and preferred in modern React applications.
  - Both component types accept props to customize rendered output.
  - Components can be nested for building complex UIs and promoting reuse.
  `,
          task: `
  Task:
  1. Create a functional component that accepts a name as prop and displays a greeting.
  2. Convert the functional component to a class component.
  3. Add state to a functional component using useState to implement a counter.
  4. Add state to a class component using this.state and increment a counter.
  5. Nest multiple components inside an App component and render it.
  `
        },
        {
          title: 'Props: Passing Data from Parent to Child Components',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What are Props?</h2>
    <p class="text-gray-700 mb-4">
      Props (short for properties) are a way to pass data from a parent component to a child component.
      They are <strong>read-only</strong>, meaning child components cannot modify them.
      Props help make components reusable and dynamic.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why Use Props?</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>To customize child components with different data.</li>
      <li>To pass functions or values from parent to child.</li>
      <li>To maintain unidirectional data flow (parent → child).</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Basic Example</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Child Component
function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

// Parent Component
function App() {
  return (
    &lt;div&gt;
      &lt;Greeting name="Bilal" /&gt;
      &lt;Greeting name="Sara" /&gt;
      &lt;Greeting name="Ali" /&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
    <p class="text-gray-700 mb-4">
      Explanation: The <code>Greeting</code> component receives a <code>name</code> prop from the parent. Output will be:
      <br/>
      Hello, Bilal!<br/>
      Hello, Sara!<br/>
      Hello, Ali!
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Destructuring Props</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Passing Multiple Props</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Profile({ name, age, city }) {
  return (
    &lt;p&gt;
      Name: {name}, Age: {age}, City: {city}
    &lt;/p&gt;
  );
}

function App() {
  return &lt;Profile name="Bilal" age={22} city="Lahore" /&gt;;
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Passing Functions as Props</h2>
    <p class="text-gray-700 mb-4">
      Useful for handling events in the parent from child components.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Child({ onClick }) {
  return &lt;button onClick={onClick}&gt;Click Me&lt;/button&gt;;
}

function Parent() {
  const handleClick = () =&gt; alert("Button clicked from Child!");
  return &lt;Child onClick={handleClick} /&gt;;
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points about Props</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Props are <strong>read-only</strong>; children cannot modify them.</li>
      <li>Make components dynamic and reusable.</li>
      <li>Data flows <strong>unidirectionally</strong> from parent to child.</li>
      <li>Props can be strings, numbers, arrays, objects, or functions.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: List Rendering with Props</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function User({ name, age }) {
  return &lt;li&gt;{name} - {age} years old&lt;/li&gt;;
}

function App() {
  const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
    { name: "Bilal", age: 28 }
  ];

  return (
    &lt;ul&gt;
      {users.map((user, index) =&gt; (
        &lt;User key={index} name={user.name} age={user.age} /&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    <p class="text-gray-700 mb-4">Explanation: Each <code>User</code> component receives <code>name</code> and <code>age</code> props from the parent. The <code>key</code> prop helps React update the list efficiently.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Props are data passed from parent to child components.</li>
      <li>They are read-only, preserving unidirectional data flow.</li>
      <li>Props can include various data types including functions.</li>
      <li>Props make components dynamic and reusable.</li>
    </ul>
  `,
          code: `
// Basic child component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Destructured props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Passing multiple props
function Profile({ name, age, city }) {
  return (
    <p>
      Name: {name}, Age: {age}, City: {city}
    </p>
  );
}

// Passing function as prop
function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const handleClick = () => alert("Button clicked from Child!");
  return <Child onClick={handleClick} />;
}

// List rendering with props and keys
function User({ name, age }) {
  return <li>{name} - {age} years old</li>;
}

function App() {
  const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
    { name: "Bilal", age: 28 }
  ];

  return (
    <ul>
      {users.map((user, index) => (
        <User key={index} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
  `,
          explanation: `
  - Props allow data to flow from parent components to children, enabling dynamic UI.
  - Destructuring props simplifies code readability.
  - Passing functions as props allows parents to handle events triggered in child components.
  - Rendering lists requires unique 'key' props for efficient updates.
  - Child components must treat props as immutable data.
  `,
          task: `
  Task:
  1. Create a child component that receives a string prop and displays it.
  2. Destructure the props inside the function parameter.
  3. Pass multiple props to a component and render them.
  4. Pass a function prop to handle button clicks from child to parent.
  5. Render a list of items using map and pass data via props with unique keys.
  `
        },
        {
          title: 'State: Managing Internal Data with useState Hook',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is State?</h2>
    <p class="text-gray-700 mb-4">
      State is a built-in React object that allows components to store and manage internal data.
      Unlike props, state is local to the component and can be updated dynamically.
      Updating state triggers a re-render so UI reflects the latest changes.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why use State?</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>To store dynamic data that changes over time.</li>
      <li>Automatically update UI when state changes.</li>
      <li>Enable interactive components like counters, forms, toggles.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">useState Hook</h2>
    <p class="text-gray-700 mb-4">
      <code>useState</code> is a React Hook used in functional components to add and manage state.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const [state, setState] = useState(initialValue);

state - current value
setState - function to update state
initialValue - starting state value
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example 1: Simple Counter</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial count = 0

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(count - 1)}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>
    <p class="text-gray-700 mb-4">
      Explanation: <code>count</code> stores current value; <code>setCount</code> updates the count and triggers re-render.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example 2: Toggle Component</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Toggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    &lt;div&gt;
      &lt;p&gt;The switch is {isOn ? "ON" : "OFF"}&lt;/p&gt;
      &lt;button onClick={() =&gt; setIsOn(!isOn)}&gt;Toggle&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
    <p class="text-gray-700 mb-4">Explanation: <code>isOn</code> boolean state that toggles between true/false on button click; UI updates immediately.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example 3: Input Field with State</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function NameInput() {
  const [name, setName] = useState("");

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Enter your name"
      /&gt;
      &lt;p&gt;Hello, {name}!&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
    <p class="text-gray-700 mb-4">Explanation: <code>name</code> holds input value; updated on every keystroke via <code>onChange</code>; controlled component example.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points about State</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>State is local and mutable.</li>
      <li>Always use the updater function (<code>setState</code>) to update state.</li>
      <li>Updating state re-renders the component automatically.</li>
      <li>Can store any data type: strings, numbers, arrays, objects, booleans.</li>
      <li>In functional components, <code>useState</code> replaces the old <code>this.state</code> in classes.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>State enables dynamic, interactive UIs.</li>
      <li>Managed using <code>useState</code> hook in functional components.</li>
      <li>Changing state triggers automatic UI updates.</li>
      <li>Essential for components like counters, toggles, input forms.</li>
    </ul>
  `,
          code: `
// Simple Counter Component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;

// Toggle Component
function Toggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

// Input Field with State
function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
  `,
          explanation: `
  - useState adds reactive state management inside functional React components.
  - State holds values that change and cause UI to update automatically.
  - setState function schedules updates and re-renders the affected components efficiently.
  - With useState you can manage primitive values, complex objects, and even arrays.
  - Controlled input components maintain form state adding interactivity.
  - useState replaces class-based state management in modern React.
  `,
          task: `
  Task:
  1. Create a functional Counter component using useState managing a count value.
  2. Build a Toggle component that switches text between ON and OFF.
  3. Develop an input field component with state that displays live user text below.
  4. Experiment with updating state based on previous state values.
  5. Observe re-rendering behavior when state changes.
  `
        },
        {
          title: 'Rendering Elements – Rendering to the DOM',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Rendering?</h2>
    <p class="text-gray-700 mb-4">
      Rendering in React means displaying React elements or components on the webpage.
      React uses the <code>ReactDOM</code> library to render these elements into the real DOM.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Basic Rendering</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import ReactDOM from "react-dom/client";

const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
</code></pre>
    <p>
      <strong>Explanation:</strong><br/>
      <code>ReactDOM.createRoot()</code> connects React with a DOM element (with id "root").<br/>
      <code>root.render(element)</code> displays the React element in the actual DOM.<br/>
      The <code>element</code> can be JSX, string, number, or a component.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Rendering a Component</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Welcome() {
  return &lt;h1&gt;Hello, Bilal!&lt;/h1&gt;;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(&lt;Welcome /&gt;);
</code></pre>
    <p>React calls the component function and renders its returned JSX instead of rendering simple JSX directly.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Updating the Rendered UI</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(&lt;Counter /&gt;);
</code></pre>
    <p>React re-renders only parts of the DOM that change when state or props update.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Rendering Multiple Elements</h2>
    <p>JSX requires a single root element. You can use a <code>&lt;div&gt;</code> or React Fragment <code>&lt;&gt;</code> (empty tags) to wrap multiple elements.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  &lt;div&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/div&gt;
);

// Or using Fragment:
root.render(
  &lt;&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/&gt;
);
</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code>ReactDOM.createRoot()</code> to attach React to a DOM node.</li>
      <li>Use <code>root.render()</code> to display JSX or components on the page.</li>
      <li>React updates the UI efficiently on state or prop changes.</li>
      <li>JSX must have a single root element or use fragments.</li>
      <li>Components are rendered like custom JSX tags.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Rendering means displaying React elements or components in the real DOM.</li>
      <li><code>ReactDOM</code> library handles this rendering process.</li>
      <li>React's Virtual DOM enables efficient UI updates.</li>
      <li>Supports rendering JSX, components, and fragments seamlessly.</li>
    </ul>
  `,
          code: `
// Basic React Rendering Example
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello, React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// Component rendering example
function Welcome() {
  return <h1>Hello, Bilal!</h1>;
}

root.render(<Welcome />);

// Updating UI based on state
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

root.render(<Counter />);

// Rendering multiple elements with fragment
root.render(
  <>
    <h1>Heading</h1>
    <p>This is a paragraph</p>
  </>
);
  `,
          explanation: `
  - Rendering is how React elements and components become visible on the webpage.
  - ReactDOM creates a root linked to a real DOM node.
  - The render method outputs JSX or component content inside that DOM node.
  - React updates the rendered UI efficiently using its Virtual DOM diffing algorithm.
  - JSX can only return one root element, so wrap multiple siblings in a div or fragment.
  - Components render like custom JSX tags and call their logic to produce JSX output.
  `,
          task: `
  Task:
  1. Render a simple JSX element into a root DOM node using ReactDOM.
  2. Create and render a functional component returning JSX.
  3. Build a counter component with state and updated UI on button clicks.
  4. Render multiple elements wrapping them inside a React Fragment.
  5. Observe how only the changed parts of UI re-render when state changes.
  `
        },
        {
          title: 'Conditional Rendering in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Conditional Rendering?</h2>
    <p class="text-gray-700 mb-4">
      Conditional rendering lets you display different UI elements based on conditions.
      It’s similar to if-else statements in JavaScript but used inside JSX.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Using if Statements (Outside JSX)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return &lt;h1&gt;Welcome Back!&lt;/h1&gt;;
  } else {
    return &lt;h1&gt;Please Sign In&lt;/h1&gt;;
  }
}

function App() {
  return &lt;Greeting isLoggedIn={true} /&gt;;
}</code></pre>
    <p class="text-gray-700 mb-4">
      React chooses which JSX to render based on the if condition.
      Best practice: keep if-else logic outside JSX for readability.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using Ternary Operator (Inside JSX)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ isLoggedIn }) {
  return (
    &lt;h1&gt;{isLoggedIn ? "Welcome Back!" : "Please Sign In"}&lt;/h1&gt;
  );
}

function App() {
  return &lt;Greeting isLoggedIn={false} /&gt;;
}</code></pre>
    <p>Ternary operator is concise and directly usable inside JSX: <code>condition ? trueValue : falseValue</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Using Logical && Operator</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Notification({ unreadMessages }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, Bilal!&lt;/h1&gt;
      {unreadMessages.length &gt; 0 &amp;&amp; (
        &lt;p&gt;You have {unreadMessages.length} unread messages.&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
}

function App() {
  return &lt;Notification unreadMessages={["Hi", "Hello"]} /&gt;;
}</code></pre>
    <p>
      Logical <code>&amp;&amp;</code> renders the element only if the condition is true.<br/>
      If <code>unreadMessages</code> is empty, no paragraph will be rendered.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Using Conditional Components</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function AdminPanel() {
  return &lt;h2&gt;Admin Access Granted&lt;/h2&gt;;
}

function GuestPanel() {
  return &lt;h2&gt;Guest Access&lt;/h2&gt;;
}

function Dashboard({ isAdmin }) {
  return isAdmin ? &lt;AdminPanel /&gt; : &lt;GuestPanel /&gt;;
}

function App() {
  return &lt;Dashboard isAdmin={true} /&gt;;
}</code></pre>
    <p>Conditional rendering can switch between components to keep code modular and clean.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use conditional rendering to display UI based on conditions.</li>
      <li>Use <code>if-else</code> outside JSX for complex logic.</li>
      <li>Use ternary operator for inline simple conditional rendering.</li>
      <li>Logical <code>&amp;&amp;</code> shows content only if a condition is true.</li>
      <li>Conditionally render entire components for modular code.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React supports multiple ways to render conditionally.</li>
      <li>Helps build dynamic, interactive UIs such as login pages, notifications, and admin dashboards.</li>
      <li>Keep conditional logic clear and maintainable by choosing appropriate constructs.</li>
    </ul>
  `,
          code: `
// 1. Using if statement outside JSX
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Sign In</h1>;
  }
}

// 2. Using ternary operator inside JSX
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;
}

// 3. Using logical && operator
function Notification({ unreadMessages }) {
  return (
    <div>
      <h1>Hello, Bilal!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}

// 4. Conditional components
function AdminPanel() {
  return <h2>Admin Access Granted</h2>;
}

function GuestPanel() {
  return <h2>Guest Access</h2>;
}

function Dashboard({ isAdmin }) {
  return isAdmin ? <AdminPanel /> : <GuestPanel />;
}
  `,
          explanation: `
  - Conditional rendering controls which UI elements or components to show based on state or props.
  - Using if statements outside JSX keeps complex logic clean.
  - Ternary operators allow inline conditional choices inside JSX.
  - Logical && renders content only if the condition is true, handy for optional display.
  - Swapping entire components conditionally keeps UI modular and maintainable.
  `,
          task: `
  Task:
  1. Write a component that uses if statement outside JSX to return different greetings.
  2. Refactor it using ternary operator inside JSX.
  3. Build a notification component that shows messages only if present, using &&.
  4. Create an app that conditionally renders Admin or Guest components based on a prop.
  5. Experiment with nesting multiple conditional renderings.
  `
        },
        {
          title: 'Conditional Rendering in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Conditional Rendering?</h2>
    <p class="text-gray-700 mb-4">
      Conditional rendering lets you display different UI elements based on conditions.
      It’s similar to if-else statements in JavaScript but used inside JSX.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Using if Statements (Outside JSX)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return &lt;h1&gt;Welcome Back!&lt;/h1&gt;;
  } else {
    return &lt;h1&gt;Please Sign In&lt;/h1&gt;;
  }
}

function App() {
  return &lt;Greeting isLoggedIn={true} /&gt;;
}</code></pre>
    <p class="text-gray-700 mb-4">
      React chooses which JSX to render based on the condition.
      Best practice is to keep if-else logic outside JSX for readability.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Using Ternary Operator (Inside JSX)</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ isLoggedIn }) {
  return (
    &lt;h1&gt;{isLoggedIn ? "Welcome Back!" : "Please Sign In"}&lt;/h1&gt;
  );
}

function App() {
  return &lt;Greeting isLoggedIn={false} /&gt;;
}</code></pre>
    <p>Ternary operator is concise and directly usable inside JSX.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Using Logical && Operator</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Notification({ unreadMessages }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, Bilal!&lt;/h1&gt;
      {unreadMessages.length &gt; 0 &amp;&amp; (
        &lt;p&gt;You have {unreadMessages.length} unread messages.&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
}

function App() {
  return &lt;Notification unreadMessages={["Hi", "Hello"]} /&gt;;
}</code></pre>
    <p>
      The logical <code>&amp;&amp;</code> renders the element only if the condition is true.
      If the condition is false, nothing renders.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Using Conditional Components</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function AdminPanel() {
  return &lt;h2&gt;Admin Access Granted&lt;/h2&gt;;
}

function GuestPanel() {
  return &lt;h2&gt;Guest Access&lt;/h2&gt;;
}

function Dashboard({ isAdmin }) {
  return isAdmin ? &lt;AdminPanel /&gt; : &lt;GuestPanel /&gt;;
}

function App() {
  return &lt;Dashboard isAdmin={true} /&gt;;
}</code></pre>
    <p>Conditional rendering can switch between components to keep code modular and clean.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use conditional rendering to control visible UI content.</li>
      <li>Use if-else outside JSX for complex logic.</li>
      <li>Ternary operator works well for simple inline conditions.</li>
      <li>Logical && operator renders content only if condition is true.</li>
      <li>Conditionally render entire components for modularity.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React supports multiple ways to render conditionally.</li>
      <li>This enables dynamic and interactive UIs like login pages and notifications.</li>
      <li>Choose rendering strategies that keep code clean and maintainable.</li>
    </ul>
  `,
          code: `
// 1. if statement outside JSX
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Sign In</h1>;
  }
}

// 2. Ternary operator inside JSX
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;
}

// 3. Logical && operator
function Notification({ unreadMessages }) {
  return (
    <div>
      <h1>Hello, Bilal!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}

// 4. Conditional components
function AdminPanel() {
  return <h2>Admin Access Granted</h2>;
}

function GuestPanel() {
  return <h2>Guest Access</h2>;
}

function Dashboard({ isAdmin }) {
  return isAdmin ? <AdminPanel /> : <GuestPanel />;
}
`,
          explanation: `
  - Conditional Rendering helps you control which UI elements or components appear.
  - Using if-else outside JSX keeps complex logic clear.
  - Ternary operator inside JSX is concise for simple conditionals.
  - Logical && renders content only when a condition is true.
  - Switch rendering entire components for modularity and maintainability.
  `,
          task: `
  Task:
  1. Create a component that uses if statement outside JSX to show greetings based on login status.
  2. Rewrite using ternary operator inside JSX.
  3. Build a notification component that shows messages only if the list is not empty.
  4. Conditionally render Admin and Guest components in a dashboard.
  5. Experiment combining different conditional render methods in an app.
  `
        },
        {
          title: 'Rendering Lists in React using map()',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is List Rendering?</h2>
    <p class="text-gray-700 mb-4">
      List rendering in React allows displaying multiple similar elements dynamically.
      Instead of manually writing elements, you loop over data arrays and render elements using JSX.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Using map() to Render Lists</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    &lt;ul&gt;
      {fruits.map((fruit) =&gt; (
        &lt;li&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default App;
</code></pre>
    <p class="text-gray-700 mb-4">
      Explanation: <code>fruits.map()</code> iterates over the array, rendering each fruit in a <code>&lt;li&gt;</code> element.
      React updates the UI efficiently when data changes.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Importance of the key Prop</h2>
    <p class="text-gray-700 mb-4">
      React uses the <code>key</code> prop to identify which items in the list have changed, added, or removed.
      This helps React optimize DOM updates.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) =&gt; (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    <p>Note: Using <code>index</code> as key is okay for static lists; for dynamic lists, use a unique ID instead.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Rendering Objects in Lists</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function App() {
  const users = [
    { id: 1, name: "Bilal", age: 22 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user.id}&gt;
          {user.name} - {user.age} years old
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    <p>Using unique IDs as keys helps React effectively track individual items in the list.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Rendering Components in Lists</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function User({ name, age }) {
  return &lt;li&gt;{name} - {age} years old&lt;/li&gt;;
}

function App() {
  const users = [
    { id: 1, name: "Bilal", age: 22 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;User key={user.id} name={user.name} age={user.age} /&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    <p>Passing data as props to <code>User</code> components keeps the code modular and manageable.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Use <code>map()</code> to loop through arrays and render JSX elements.</li>
      <li>Always provide a unique <code>key</code> prop to each element/component in lists.</li>
      <li>You can render strings, numbers, objects, or other components.</li>
      <li>Avoid using non-unique keys such as array indices for dynamic lists.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>List rendering dynamically generates UI from data arrays using <code>map()</code>.</li>
      <li>Keys help React optimize re-rendering by uniquely identifying elements.</li>
      <li>Integrating props and components with list rendering improves modularity and reusability.</li>
    </ul>
  `,
          code: `
// Rendering list of strings using map()
function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Rendering list of objects using unique ID keys
function App() {
  const users = [
    { id: 1, name: "Bilal", age: 22 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}

// Rendering components in lists
function User({ name, age }) {
  return <li>{name} - {age} years old</li>;
}

function App() {
  const users = [
    { id: 1, name: "Bilal", age: 22 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ali", age: 25 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
  `,
          explanation: `
  - React list rendering uses the JavaScript map() method to convert arrays into lists of JSX elements or components.
  - Each element needs a unique “key” prop so React can track which items changed, added, or removed.
  - Keys allow React to minimize DOM updates for better performance.
  - You can render simple strings, complex objects, or reusable components in lists.
  - Using unique IDs as keys is the best practice, while indexes should be avoided for dynamic data.
  `,
          task: `
  Task:
  1. Render a list of strings as <li> elements using map().
  2. Render a list of user objects with unique IDs using map() and keys.
  3. Create a User component and render it for each user in a list.
  4. Add keys to each list item or component for performance.
  5. Explain why keys are important in React list rendering.
  `
        },
        {
          title: 'Event Handling in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Event Handling?</h2>
    <p class="text-gray-700 mb-4">
      Event handling allows React components to respond to user interactions like clicks, input changes, form submissions, and more.
      React uses camelCase for event names (e.g., <code>onClick</code>, <code>onChange</code>).
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">1. Handling Click Events</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function ClickExample() {
  const handleClick = () =&gt; {
    alert("Button clicked!");
  };

  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
}

export default ClickExample;</code></pre>
    <p class="text-gray-700 mb-4">
      <code>onClick={handleClick}</code> attaches the function to run only on click.
      Avoid <code>onClick={handleClick()}</code> as it runs immediately on render.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">2. Handling Input Change Events</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  const handleChange = (e) =&gt; {
    setText(e.target.value);
  };

  return (
    &lt;div&gt;
      &lt;input type="text" value={text} onChange={handleChange} /&gt;
      &lt;p&gt;You typed: {text}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
    <p><code>onChange</code> updates state with the current input value <code>e.target.value</code>.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Handling Form Submit</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  const handleSubmit = (e) =&gt; {
    e.preventDefault(); // Prevents page reload
    alert(\`Form submitted! Name: \${name}\`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Enter your name"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default FormExample;</code></pre>
    <p><code>e.preventDefault()</code> stops the default HTML form submission reload.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">4. Passing Arguments to Event Handlers</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Button({ name }) {
  const handleClick = (userName) =&gt; {
    alert(\`Hello, \${userName}!\`);
  };

  return &lt;button onClick={() =&gt; handleClick(name)}&gt;Greet&lt;/button&gt;;
}</code></pre>
    <p>Wrap handler in arrow function to pass custom arguments; avoid calling the function directly.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">5. Common Event Types in React</h2>
    <table class="table-auto border-collapse border border-gray-300 w-full mb-6 text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-4 py-2">Event Type</th>
          <th class="border border-gray-300 px-4 py-2">React Event Handler</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Click</td>
          <td class="border border-gray-300 px-4 py-2">onClick</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Input Change</td>
          <td class="border border-gray-300 px-4 py-2">onChange</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Form Submit</td>
          <td class="border border-gray-300 px-4 py-2">onSubmit</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Mouse Enter/Leave</td>
          <td class="border border-gray-300 px-4 py-2">onMouseEnter, onMouseLeave</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Key Press</td>
          <td class="border border-gray-300 px-4 py-2">onKeyDown, onKeyUp</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Focus/Blur</td>
          <td class="border border-gray-300 px-4 py-2">onFocus, onBlur</td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Event names use camelCase in React.</li>
      <li>Event handlers are functions passed to JSX attributes.</li>
      <li>Use <code>e.preventDefault()</code> in forms to prevent page reloads.</li>
      <li>You can pass arguments to event handlers using arrow functions.</li>
      <li>Event handling works with buttons, inputs, forms, and many other elements.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React event handling enables components to respond to user actions.</li>
      <li>Supports clicks, typing, form submissions, mouse events, keyboard events, and more.</li>
      <li>Functions and state work together to manage user interactions.</li>
      <li>Events are essential for dynamic and interactive UI.</li>
    </ul>
  `,
          code: `
// 1. Click event handler
function ClickExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickExample;

// 2. Input change handler with state
import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

// 3. Form submit handler
import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Form submitted! Name: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;

// 4. Passing arguments
function Button({ name }) {
  const handleClick = (userName) => {
    alert(\`Hello, \${userName}!\`);
  };

  return <button onClick={() => handleClick(name)}>Greet</button>;
}
  `,
          explanation: `
  - React uses camelCase syntax for event handlers.
  - Attach event handlers as functions to JSX elements.
  - Avoid invoking handlers directly unless wrapped in a function.
  - Input and form events update component state and control UI.
  - Passing arguments to handlers requires arrow functions or binding.
  - Event handling supports various DOM events for rich interactivity.
  `,
          task: `
  Task:
  1. Create a button component that shows an alert when clicked.
  2. Build an input field that updates and displays typed text using state.
  3. Create a form that alerts submitted data without reloading the page.
  4. Pass a function with parameters as an event handler to a child component.
  5. Attach different event handlers like onMouseEnter or onKeyDown and observe behavior.
  `
        },
        {
          title: 'Basic Hooks – useState & useEffect',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What are Hooks?</h2>
    <p class="text-gray-700 mb-4">
      Hooks are special React functions introduced in React 16.8 that let you use state and lifecycle features in functional components.
      The most commonly used hooks are <code>useState</code> and <code>useEffect</code>.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. useState Hook</h2>
    <p class="text-gray-700 mb-4">
      Used to manage state in functional components.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const [state, setState] = useState(initialValue);</code></pre>

    <h3 class="text-xl font-semibold mb-2">Example: Counter</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;</code></pre>
    <p>Explanation: <code>count</code> stores the current value, and <code>setCount</code> updates it, triggering re-render.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. useEffect Hook</h2>
    <p class="text-gray-700 mb-4">
      <code>useEffect</code> lets you perform side effects – such as API calls, timers, subscriptions, or manual DOM manipulations – inside functional components.
      It combines the life-cycle behavior of <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> from class components.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>useEffect(() =&gt; {
  // Code to run
}, [dependencies]);</code></pre>
    <p>Dependencies array controls when the effect runs. An empty array <code>[]</code> means it runs once after the first render.</p>

    <h3 class="text-xl font-semibold mb-2">1. useEffect Example – Component Mount</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useEffect } from "react";

function App() {
  useEffect(() =&gt; {
    console.log("Component mounted!");
  }, []); // runs only once

  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}

export default App;</code></pre>

    <h3 class="text-xl font-semibold mb-2">2. useEffect Example – Watching State</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
         console.log(\`Count changed: \${count}\`);
  }, [count]); // runs every time count changes

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;</code></pre>
    <p>The effect runs only when <code>count</code> changes, efficiently managing side effects.</p>

    <h3 class="text-xl font-semibold mb-2">3. useEffect Cleanup</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; {
      setSeconds((prev) =&gt; prev + 1);
    }, 1000);

    // Cleanup function runs before unmount or before next effect call
    return () =&gt; clearInterval(interval);
  }, []);

  return &lt;h1&gt;Seconds: {seconds}&lt;/h1&gt;;
}

export default Timer;</code></pre>
    <p>Cleanup prevents memory leaks by removing subscriptions or timers.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useState</code> manages state and updates UI.</li>
      <li><code>useEffect</code> handles side effects and lifecycle events.</li>
      <li>Dependencies array controls when effects run.</li>
      <li>Cleanup functions prevent memory leaks.</li>
      <li>Hooks are usable only in functional components.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Hooks enable state and lifecycle features in functional components.</li>
      <li><code>useState</code> stores and updates dynamic data.</li>
      <li><code>useEffect</code> manages side effects and mimics lifecycle events.</li>
      <li>Together they enable interactive and responsive React apps.</li>
    </ul>
  `,
          code: `
// useState example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// useEffect example - component mount
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return <h1>Hello, React!</h1>;
}

export default App;

// useEffect example - depend on state
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
          console.log(\`Count changed: \${count}\`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// useEffect cleanup example
import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Seconds: {seconds}</h1>;
}

export default Timer;
  `,
          explanation: `
  - Hooks let functional components have state and lifecycle events.
  - useState manages component data and triggers re-render on updates.
  - useEffect runs side effects: API calls, timers, subscriptions.
  - Dependency array controls when useEffect runs.
  - Cleanup functions allow resource cleanup to prevent leaks.
  - Hooks simplify code by replacing class lifecycle methods.
  `,
          task: `
  Task:
  1. Create a Counter component using useState.
  2. Add useEffect to log a message when component mounts.
  3. Use useEffect to watch count changes and log updates.
  4. Implement a Timer component that increments every second with cleanup.
  5. Experiment with effect dependencies and cleanup scenarios.
  `
        },
        {
          title: 'Forms in React – Controlled vs Uncontrolled Components',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What are Forms in React?</h2>
    <p class="text-gray-700 mb-4">
      Forms collect user input in React. There are two main ways to manage form data:
      <strong>Controlled Components</strong> and <strong>Uncontrolled Components</strong>.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Controlled Components</h2>
    <p class="text-gray-700 mb-4">
      In controlled components, form data is handled by React state.
      The input's <code>value</code> is bound to state, and updates via <code>onChange</code> event handlers.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    alert(\`Submitted Name: \${name}\`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Enter your name"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default ControlledForm;</code></pre>
    <p><strong>Key Points:</strong> <code>value</code> binds input to state; <code>onChange</code> updates state dynamically. Validation and manipulation are easy.</p>

    <h3 class="text-xl font-semibold mb-2">Example: Multiple Inputs</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function ControlledMultiInput() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =&gt; {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(formData);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /&gt;
      &lt;input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      /&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
    <p>State object holds multiple inputs, dynamically updated using spread operator.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Uncontrolled Components</h2>
    <p class="text-gray-700 mb-4">
      In uncontrolled components, form data is handled by the DOM, not React.
      Use refs to access input values directly.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    alert(\`Submitted Name: \${inputRef.current.value}\`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input type="text" ref={inputRef} placeholder="Enter your name" /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default UncontrolledForm;</code></pre>
    <p><strong>Key Points:</strong> <code>ref</code> accesses the DOM element, React does not track input changes. Useful for quick forms or third-party libraries.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Controlled vs Uncontrolled Components</h2>
    <table class="table-auto border border-gray-300 w-full mb-6 text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-4 py-2">Feature</th>
          <th class="border border-gray-300 px-4 py-2">Controlled</th>
          <th class="border border-gray-300 px-4 py-2">Uncontrolled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Data Source</td>
          <td class="border border-gray-300 px-4 py-2">React state</td>
          <td class="border border-gray-300 px-4 py-2">DOM</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Value Tracking</td>
          <td class="border border-gray-300 px-4 py-2">Yes</td>
          <td class="border border-gray-300 px-4 py-2">No</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Update Method</td>
          <td class="border border-gray-300 px-4 py-2">onChange event and setState</td>
          <td class="border border-gray-300 px-4 py-2">ref access</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Validation</td>
          <td class="border border-gray-300 px-4 py-2">Easy</td>
          <td class="border border-gray-300 px-4 py-2">Manual</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">Use Case</td>
          <td class="border border-gray-300 px-4 py-2">Complex forms, dynamic UI</td>
          <td class="border border-gray-300 px-4 py-2">Simple forms, third-party libraries</td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Controlled components are form inputs driven by React state.</li>
      <li>Uncontrolled components manage form data through the DOM and refs.</li>
      <li>Controlled components provide better integration for validation and dynamic updates.</li>
      <li>Uncontrolled components are useful for quick implementations or when using 3rd party UI libraries.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React forms can be controlled or uncontrolled based on how data is managed.</li>
      <li>Controlled components use React state for complete control.</li>
      <li>Uncontrolled components rely on refs pointing to DOM elements.</li>
      <li>Pick the approach based on form complexity and needs.</li>
    </ul>
  `,
          code: `
// Controlled single input form
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted Name: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

// Controlled multiple inputs
function ControlledMultiInput() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Uncontrolled input form with ref
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted Name: \${inputRef.current.value}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
  `,
          explanation: `
  - Controlled components keep form data in React state with value and onChange.
  - This approach offers full control for validation and responsive UI.
  - Uncontrolled components let the DOM manage form data, accessed via refs.
  - Uncontrolled inputs are simpler but harder to validate or manipulate in React.
  - Use controlled components for complex, dynamic forms.
  - Use uncontrolled for simple forms or integration with non-React libraries.
  `,
          task: `
  Task:
  1. Build a controlled form with a single text input storing data in state.
  2. Create a controlled multi-input form managing multiple values in a state object.
  3. Build an uncontrolled form using useRef to access form values.
  4. Compare behaviors and use cases for controlled vs uncontrolled.
  5. Add simple validation to the controlled form inputs.
  `
        },
        {
          title: 'Tools & Setup – Create React App (CRA) & Running Dev Server',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why Setup Tools?</h2>
    <p class="text-gray-700 mb-4">
      React apps require development environments to handle JSX compilation, module bundling, and hot reloading.
      Setup tools simplify these tasks so you can focus on coding.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Using Create React App (CRA)</h2>
    <p class="text-gray-700">
      CRA is an official React CLI that bootstraps a React project with zero config.
      It installs React, ReactDOM, Webpack, Babel, and a dev server automatically.
    </p>
    <ol class="list-decimal list-inside text-gray-800 mb-4">
      <li>Install Node.js (LTS version) which includes npm.</li>
      <li>Create new React app with:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>npx create-react-app my-app</code></pre>
      </li>
      <li>Navigate to folder:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>cd my-app</code></pre>
      </li>
      <li>Start dev server:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>npm start</code></pre>
        Opens <a href="http://localhost:3000" target="_blank">http://localhost:3000/</a> automatically with hot reloading.
      </li>
    </ol>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Folder Structure of CRA</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>my-app/
├── node_modules/          (project dependencies)
├── public/
│   ├── index.html         (main HTML template)
│   └── favicon.ico
├── src/
│   ├── App.js             (root React component)
│   ├── index.js           (entry point that renders App)
│   └── App.css            (styling for App)
├── package.json           (config & dependencies)
└── README.md
</code></pre>
    <p>Write your React components inside <code>src/</code>. The <code>public/index.html</code> is the main HTML file.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Using Vite (Alternative to CRA)</h2>
    <p class="text-gray-700 mb-4">
      Vite is a modern and faster alternative to CRA with instant HMR for React apps.
    </p>
    <ol class="list-decimal list-inside text-gray-800 mb-4">
      <li>Create new app:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>npm create vite@latest my-app</code></pre>
      </li>
      <li>Go to the folder:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>cd my-app</code></pre>
      </li>
      <li>Install dependencies:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>npm install</code></pre>
      </li>
      <li>Run dev server:
        <pre class="bg-gray-100 p-3 my-2 rounded"><code>npm run dev</code></pre>
        Dev server runs at <a href="http://localhost:5173" target="_blank">http://localhost:5173/</a>
      </li>
    </ol>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Running Production Build</h2>
    <p class="text-gray-700 mb-4">
      To deploy a React app, run:
      <pre class="bg-gray-100 p-3 rounded"><code>npm run build</code></pre>
      This creates an optimized <code>build/</code> folder with minified JS, CSS, and HTML ready for production deployment.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Node.js and npm are prerequisites.</li>
      <li>CRA and Vite are popular tools to quickly bootstrap React apps.</li>
      <li>Development servers provide hot reloading for fast iteration.</li>
      <li>Production build bundles and optimizes files for deployment.</li>
      <li>Project structure keeps components, assets, and public files organized.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React apps need tooling for JSX compilation, bundling, and live reload.</li>
      <li>CRA offers zero-config setup with React, Webpack, Babel, and dev server.</li>
      <li>Vite is a modern faster alternative with instant hot module replacement.</li>
      <li>Dev server speeds up development with live updating.</li>
      <li>Production builds generate optimized files ready for hosting.</li>
    </ul>
  `,
          code: `
// Using Create React App (CRA)

// Create a new React app using:
// npx create-react-app my-app

// Navigate into the app folder:
// cd my-app

// Start the development server:
// npm start
// Opens http://localhost:3000 with hot reloading.

// Folder structure overview (inside my-app):
// node_modules/        - npm packages
// public/index.html    - HTML template
// src/App.js           - Main React component
// src/index.js         - Entry point to render App
// package.json         - Project config & dependencies

// Using Vite (alternative)
// Create app:
// npm create vite@latest my-app

// Enter folder, install and run:
// cd my-app
// npm install
// npm run dev
// Runs on http://localhost:5173/

// Production build:
// npm run build
// Generates optimized build/ folder for deployment.
  `,
          explanation: `
  - Setting up a React app requires tools that compile JSX and bundle code.
  - CRA automates this with pre-configured Webpack, Babel, and dev server.
  - Vite offers faster builds and instant hot module replacement.
  - Dev server reloads changes instantly for smoother development.
  - The production build bundles and optimizes the app for deployment.
  - Understanding folder structure helps organize code and assets.
  `,
          task: `
  Task:
  1. Install Node.js (LTS) if not already installed.
  2. Use CRA to create a new React app with npx.
  3. Navigate to the project folder and start the dev server.
  4. Explore the folder structure, identify key files like App.js and index.html.
  5. Try creating a small React component and edit App.js to render it.
  6. Build the app for production using npm run build.
  7. Experiment with Vite as an alternative setup and note differences.
  `
        },
      ]

    },

    intermediate: {
      title: "Intermediate Level React js Notes",
      topics: [
        {
          title: 'Advanced Hook: useContext',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is useContext?</h2>
    <p class="text-gray-700 mb-4">
      The <code>useContext</code> hook enables sharing state globally across components without manual prop passing, avoiding "prop drilling".
      It’s useful when many components need access to the same data or functions.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Creating a Context</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide Context value
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      &lt;Toolbar /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function Toolbar() {
  return (
    &lt;div&gt;
      &lt;ThemedButton /&gt;
    &lt;/div&gt;
  );
}

function ThemedButton() {
  // 3. Consume Context
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    &lt;button
      onClick={() =&gt; setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    &gt;
      Toggle Theme
    &lt;/button&gt;
  );
}

export default App;
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Explanation</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>createContext()</code> creates a context object.</li>
      <li><code>Provider</code> wraps components and provides the context value.</li>
      <li><code>useContext(Context)</code> accesses the context value inside child components.</li>
      <li>Prevents prop drilling—no need to pass props through many component layers.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>useContext</code> works only with a matching <code>Provider</code> higher in the tree.</li>
      <li>Updating the context value automatically triggers re-render in consuming components.</li>
      <li>Can be combined with <code>useState</code> or <code>useReducer</code> for global state management.</li>
      <li>Common uses include theming, authentication, language/localization, and settings.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useContext</code> simplifies passing state or functions globally across components.</li>
      <li>Avoids tedious and error-prone prop drilling.</li>
      <li>Ideal for medium-complexity shared state scenarios.</li>
    </ul>
  `,
          code: `
// Example: Theme toggling with useContext
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default App;
  `,
          explanation: `
  - useContext allows sharing data/state globally across components.
  - createContext creates a context object to hold shared data.
  - Provider component at top level supplies context value.
  - useContext hook reads this value anywhere inside provider subtree.
  - Helps avoid "prop drilling" where props are manually passed through many layers.
  - Changing context value causes all consuming components to re-render.
  - Commonly paired with useState or useReducer for better global state management.
  `,
          task: `
  Task:
  1. Create a context to hold a "theme" state (light/dark).
  2. Provide the context in your app’s root component.
  3. Consume the context in a nested button component.
  4. Implement toggle functionality to switch themes using context.
  5. Style button background and text based on current theme.
  6. Experiment with adding another value (e.g., language) in context.
  `
        },
        {
          title: 'Advanced Hook: useReducer',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is useReducer?</h2>
    <p class="text-gray-700 mb-4">
      <code>useReducer</code> is a React hook for managing complex state logic.
      It is an alternative to <code>useState</code> when state changes depend on previous states or multiple actions.
      Inspired by the Redux reducer pattern.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Syntax</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const [state, dispatch] = useReducer(reducer, initialState);

state     - current state value
dispatch  - function to send actions to reducer
reducer   - function that returns updated state based on action
initialState - initial state value
</code></pre>

    <h3 class="text-xl font-semibold mb-2">Example: Counter with useReducer</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useReducer } from "react";

// 1. Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const initialState = { count: 0 };

  // 2. useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {state.count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; dispatch({ type: "increment" })}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: "decrement" })}&gt;Decrement&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: "reset" })}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>

    <p>Reducer describes how state updates based on action types. Dispatch sends actions. State holds current value. This setup is better for multiple related state updates.</p>

    <h3 class="text-xl font-semibold mb-2">Example: Form with useReducer</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useReducer } from "react";

const initialState = { username: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(state);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) =&gt; dispatch({ type: "SET_USERNAME", payload: e.target.value })}
      /&gt;
      &lt;input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =&gt; dispatch({ type: "SET_EMAIL", payload: e.target.value })}
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
      &lt;button type="button" onClick={() =&gt; dispatch({ type: "RESET" })}&gt;Reset&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default Form;
</code></pre>

    <p>useReducer handles multiple inputs in a single state object, making state management clean and predictable.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>useReducer is best for complex or multi-step state updates.</li>
      <li>Actions describe what should happen; reducer defines how state changes.</li>
      <li>State is immutable; always return a new state object.</li>
      <li>Can integrate with Context API for global state management.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useReducer</code> is an advanced hook for complex state logic.</li>
      <li>Great for managing forms, nested state, or multiple related values.</li>
      <li>Improves readability and maintainability over multiple <code>useState</code> calls.</li>
    </ul>
  `,
          code: `
// Counter with useReducer example
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;

// Form with useReducer example
import React, { useReducer } from 'react';

const initialState = { username: '', email: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={e => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </form>
  );
}
export default Form;
  `,
          explanation: `
  - useReducer provides a scalable way to manage complex state by centralizing state updates.
  - The reducer function handles state transitions based on actions.
  - The dispatch function sends actions to update state.
  - State is treated immutably by returning new state objects.
  - This pattern is especially useful in complex forms and multi-step UI.
  - useReducer works well with Context API to manage global application state.
  `,
          task: `
  Task:
  1. Create a Counter component using useReducer to handle increment, decrement, and reset actions.
  2. Build a form using useReducer that manages multiple inputs in a single state object.
  3. Implement dispatch actions that update individual input fields.
  4. Add a reset action to clear the form inputs.
  5. Compare useReducer implementation with equivalent useState hooks.
  `
        },
        {
          title: 'Advanced Hook: useCallback',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is useCallback?</h2>
    <p class="text-gray-700 mb-4">
      <code>useCallback</code> is a React hook that memoizes functions,
      preventing unnecessary recreation of functions on every render.
      This improves performance, especially with child components or heavy computations.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Syntax</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const memoizedFunction = useCallback(() =&gt; {
  // function logic
}, [dependencies]);</code></pre>
    <p>The function is recreated only if dependencies change.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Basic useCallback</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() =&gt; {
    setCount((prev) =&gt; prev + 1);
  }, []); // function recreated only if dependencies change

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>
    <p>Without <code>useCallback</code>, <code>increment</code> would be recreated every render. Memoizing keeps the function stable.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Preventing Unnecessary Child Re-renders</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) =&gt; {
  console.log("Child rendered");
  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() =&gt; {
    console.log("Button clicked");
  }, []);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment Parent&lt;/button&gt;
      &lt;Child handleClick={handleClick} /&gt;
    &lt;/div&gt;
  );
}

export default Parent;
</code></pre>
    <p>
      <code>React.memo</code> prevents <code>Child</code> from re-rendering unless props change.
      <code>useCallback</code> memoizes <code>handleClick</code> so the function reference does not change on parent render.
      Without <code>useCallback</code>, <code>Child</code> would re-render every time parent state updates.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>useCallback</code> memoizes functions to optimize performance.</li>
      <li>Works best with <code>React.memo</code> to avoid needless child component renders.</li>
      <li>Dependencies array determines when the function is recreated.</li>
      <li>Avoid overusing <code>useCallback</code>; only use when performance issues occur.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useCallback</code> is a performance optimization hook in React.</li>
      <li>Keeps function references stable across renders.</li>
      <li>Commonly combined with memoized components or expensive callbacks.</li>
      <li>Helps reduce unnecessary rendering and computation.</li>
    </ul>
  `,
          code: `
// Basic useCallback example
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

// Preventing unnecessary child re-renders with useCallback and React.memo
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log('Child rendered');
  return <button onClick={handleClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default Parent;
  `,
          explanation: `
  - useCallback caches a function so it doesn't get recreated on every render.
  - This is important when passing functions as props to memoized child components.
  - Stable function references avoid triggering unnecessary child re-renders.
  - Dependencies array controls when the cached function updates.
  - Overuse can add complexity; use it when you identify performance bottlenecks.
  `,
          task: `
  Task:
  1. Create a Counter component using useCallback to memoize increment function.
  2. Build a Parent-Child component setup where child is memoized using React.memo.
  3. Pass a memoized function prop to Child using useCallback.
  4. Observe how useCallback prevents Child from re-rendering unnecessarily.
  5. Experiment by removing useCallback to see the difference in behavior.
  `
        },
        {
          title: 'Advanced Hook: useMemo',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is useMemo?</h2>
    <p class="text-gray-700 mb-4">
      <code>useMemo</code> is a React hook that memoizes the result of a computation.
      It prevents expensive calculations from running on every render, improving performance in large or complex apps.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Syntax</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const memoizedValue = useMemo(() =&gt; {
  // expensive calculation
  return result;
}, [dependencies]);</code></pre>
    <p>The calculation runs only when dependencies change. It returns the memoized value.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Expensive Calculation</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive factorial function
  const factorial = (n) =&gt; {
    console.log("Calculating factorial...");
    return n &lt;= 0 ? 1 : n * factorial(n - 1);
  };

  const fact = useMemo(() =&gt; factorial(count), [count]);

  return (
    &lt;div&gt;
      &lt;h1&gt;Factorial of {count} is {fact}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      &lt;input
        type="text"
        value={text}
        onChange={(e) =&gt; setText(e.target.value)}
        placeholder="Type something"
      /&gt;
    &lt;/div&gt;
  );
}

export default ExpensiveComponent;
</code></pre>
    <p>
      Without <code>useMemo</code>, factorial recalculates every render, including when typing input.
      With <code>useMemo</code>, factorial recalculates only when <code>count</code> changes.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example: Filtering a Large List</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useMemo } from "react";

function UserList({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() =&gt; {
    console.log("Filtering users...");
    return users.filter(user =&gt;
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    &lt;div&gt;
      &lt;input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) =&gt; setSearch(e.target.value)}
      /&gt;
      &lt;ul&gt;
        {filteredUsers.map((user, index) =&gt; (
          &lt;li key={index}&gt;{user}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default UserList;
</code></pre>
    <p>
      <code>useMemo</code> ensures filtering runs only when <code>search</code> or <code>users</code> change,
      optimizing performance for large datasets.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>useMemo</code> memoizes computed values.</li>
      <li>Prevents expensive recalculations on every render.</li>
      <li>Dependencies array controls when recalculation happens.</li>
      <li>Use <code>useMemo</code> only in performance-critical scenarios.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useMemo</code> is a memoization hook for expensive calculations.</li>
      <li>Optimizes CPU-heavy tasks and rendering.</li>
      <li>Commonly used with lists, filters, and computation logic.</li>
      <li>Often paired with <code>useCallback</code> for comprehensive performance optimization.</li>
    </ul>
  `,
          code: `
// useMemo example - factorial calculation
import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const factorial = (n) => {
    console.log('Calculating factorial...');
    return n <= 0 ? 1 : n * factorial(n - 1);
  };

  const fact = useMemo(() => factorial(count), [count]);

  return (
    <div>
      <h1>Factorial of {count} is {fact}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default ExpensiveComponent;

// useMemo example - filtering list
import React, { useState, useMemo } from 'react';

function UserList({ users }) {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
  `,
          explanation: `
  - useMemo caches the result of an expensive function until dependencies change.
  - Avoids recalculations on every render, improving performance.
  - Helps especially with large data filtering and computation-heavy logic.
  - Should be used selectively in components where performance matters.
  - UseMemo works well alongside useCallback for memoizing functions.
  `,
          task: `
  Task:
  1. Create a component that calculates an expensive function (e.g., factorial) using useMemo.
  2. Add an unrelated input field to show that factorial doesn't recalc on every key press.
  3. Build a list filter component that memoizes filtered results.
  4. Experiment with changing dependencies and observe when calculation runs.
  5. Combine useMemo with useCallback for full optimization.
  `
        },
        {
          title: 'Advanced Hook: useRef',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is useRef?</h2>
    <p class="text-gray-700 mb-4">
      <code>useRef</code> is a React hook used to:
      <ul class="list-disc list-inside">
        <li>Access DOM elements directly.</li>
        <li>Store mutable values that persist across renders without triggering re-renders.</li>
      </ul>
      Think of <code>useRef</code> as a box that holds values across component lifecycles.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Syntax</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const refContainer = useRef(initialValue);

refContainer.current // holds the value or DOM element</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Accessing DOM Elements</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} placeholder="Type here..." /&gt;
      &lt;button onClick={handleFocus}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default InputFocus;</code></pre>
    <p>
      <code>ref={inputRef}</code> attaches the input DOM element to <code>inputRef</code>.
      Calling <code>inputRef.current.focus()</code> focuses the input without re-rendering the component.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Storing Mutable Values</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() =&gt; {
    renderCount.current += 1;
  });

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;h2&gt;Renders: {renderCount.current}&lt;/h2&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default RenderCounter;</code></pre>
    <p>
      <code>renderCount.current</code> persists between renders and updates without causing re-renders, unlike state.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Combining with useEffect</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() =&gt; {
    prevCountRef.current = count;
  }, [count]);

  return (
    &lt;div&gt;
      &lt;h1&gt;Current: {count}&lt;/h1&gt;
      &lt;h2&gt;Previous: {prevCountRef.current}&lt;/h2&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default PreviousValue;</code></pre>
    <p>
      Tracks previous state value without causing a re-render.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>useRef</code> stores references to DOM elements or mutable data.</li>
      <li>Updates to <code>.current</code> do NOT trigger renders.</li>
      <li>Common uses:
        <ul class="list-disc list-inside">
          <li>DOM manipulation</li>
          <li>Storing timers</li>
          <li>Keeping previous state</li>
          <li>Tracking render counts</li>
        </ul>
      </li>
      <li>Often combined with <code>useEffect</code> for side-effect management.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li><code>useRef</code> provides a persistent, mutable reference that persists across renders.</li>
      <li>Allows direct DOM access without re-render side-effects.</li>
      <li>Great tool for performance optimizations and managing non-stateful data.</li>
    </ul>
  `,
          code: `
// Accessing DOM element example
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;


// Storing mutable value (render counts)
import React, { useRef, useState, useEffect } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Renders: {renderCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RenderCounter;


// Tracking previous value
import React, { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValue;
  `,
          explanation: `
  - useRef gives you a mutable container whose content persists across renders.
  - It’s ideal to hold references to DOM elements for direct manipulation, bypassing React rendering.
  - Storing mutable values with useRef does NOT cause component re-renders.
  - Tracks values like previous state, timers, or render counts efficiently.
  - When combined with useEffect, it enables effective side-effect management.
  `,
          task: `
  Task:
  1. Create a form input with a ref to a DOM element, and a button to focus the input.
  2. Implement a render counter using useRef to keep track of component renders.
  3. Create a component that shows current and previous state values using useRef and useEffect.
  4. Experiment with changing mutable references and observe that it doesn’t cause re-render.
  5. Use useRef to store a timer ID and clear it properly.
  `
        },
        {
          title: 'Advanced Concept: Custom Hooks',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What are Custom Hooks?</h2>
    <p class="text-gray-700 mb-4">
      Custom Hooks are JavaScript functions that start with <code>use</code>.
      They allow you to reuse stateful logic across multiple components.
      They must follow React’s rules for hooks: not called conditionally and only at the top level.
      The goal is to avoid repeating code inside components.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why Use Custom Hooks?</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Extract logic like data fetching, form handling, timers.</li>
      <li>Keeps components cleaner and more readable.</li>
      <li>Reusable across many components for consistent behavior.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Example: useFetch Custom Hook</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    const fetchData = async () =&gt; {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network Error");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
</code></pre>
    <p>
      <code>useFetch</code> encapsulates fetching data logic with loading and error handling.
      Returns useful state for easy consumption by any component.
      Avoid duplicating fetch logic in every component.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Using the Custom Hook</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import useFetch from "./useFetch";

function Users() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return &lt;h2&gt;Loading...&lt;/h2&gt;;
  if (error) return &lt;h2&gt;Error: {error}&lt;/h2&gt;;

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default Users;
</code></pre>
    <p>
      The component only consumes the hook output.
      No fetching or state logic inside component, making it cleaner and scalable.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Example: useCounter Custom Hook</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () =&gt; setCount(prev =&gt; prev + 1);
  const decrement = () =&gt; setCount(prev =&gt; prev - 1);
  const reset = () =&gt; setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
</code></pre>

    <h3 class="text-xl font-semibold mb-2">Usage:</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import useCounter from "./useCounter";

function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default CounterApp;
</code></pre>
    <p>Completely reusable logic enabling multiple components to use counters with different start values.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Custom Hooks always start with <code>use</code>.</li>
      <li>They allow reusing stateful logic across components.</li>
      <li>Follow React hooks rules: don’t call inside loops or conditions, always at top level.</li>
      <li>Improve code readability, maintainability, and DRY principles.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Custom Hooks encapsulate reusable logic in React.</li>
      <li>Manage state, side effects, and behavior in neat reusable functions.</li>
      <li>Common examples: <code>useFetch</code>, <code>useCounter</code>, <code>useForm</code>.</li>
      <li>Help keep components clean, modular, and scalable.</li>
    </ul>
  `,
          code: `
// useFetch custom hook
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network Error');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// Consuming useFetch in Users component
import React from 'react';
import useFetch from './useFetch';

function Users() {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;

// useCounter custom hook
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;

// Using useCounter in CounterApp component
import React from 'react';
import useCounter from './useCounter';

function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
  `,
          explanation: `
  - Custom Hooks allow sharing stateful logic across components by extracting it into reusable functions.
  - They encapsulate side effects, state, and behavioral logic.
  - This avoids repetition and makes components focused on UI rendering.
  - Custom Hooks must follow React rules: start with 'use', called at top level, no hooks inside loops or conditionals.
  - Examples include data fetching hooks, counters, form management, and more.
  `,
          task: `
  Task:
  1. Create a custom hook useFetch that fetches data from a given URL.
  2. Make a Users component that uses useFetch to display a user list.
  3. Build a useCounter custom hook managing increment, decrement, reset logic.
  4. Use useCounter in a counter UI component, testing different initial values.
  5. Practice creating other custom hooks for reusable stateful logic.
  `
        },
        {
          title: 'State Management in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">State Management Overview</h2>
    <p class="text-gray-700 mb-4">
      State management is essential for sharing and updating data between React components.
      Two popular approaches are:
      <ul class="list-disc list-inside">
        <li><strong>Context API</strong> (built-in React solution)</li>
        <li><strong>Redux Toolkit (RTK)</strong> – modern Redux for scalable state management</li>
      </ul>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Context API (Global State Management)</h2>
    <p>Context API allows sharing state globally without prop drilling (avoiding passing props through many component layers).</p>

    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { createContext, useState, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide Context value
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      &lt;Navbar /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function Navbar() {
  return (
    &lt;div&gt;
      &lt;ThemeSwitcher /&gt;
    &lt;/div&gt;
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    &lt;button
      onClick={() =&gt; setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    &gt;
      Toggle Theme
    &lt;/button&gt;
  );
}

export default App;</code></pre>
    <p>ThemeContext is created and provided at the top level, and any child can access/update state via useContext.</p>

    <h3 class="text-lg font-semibold">When to Use Context API?</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Small to medium projects.</li>
      <li>Global state for theming, user authentication, language.</li>
      <li>Avoids extra dependencies.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Redux Toolkit (RTK)</h2>
    <p>Redux Toolkit is a modern approach simplifying Redux setup and state management.</p>

    <h3 class="font-semibold mb-2">Steps to Setup Redux Toolkit</h3>
    <ol class="list-decimal list-inside mb-4">
      <li>
        <strong>Install dependencies:</strong>
        <pre class="bg-gray-100 p-3 rounded"><code>npm install @reduxjs/toolkit react-redux</code></pre>
      </li>
      <li>
        <strong>Create a slice:</strong>
        <pre class="bg-gray-100 p-3 rounded"><code>// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) =&gt; { state.value += 1 },
    decrement: (state) =&gt; { state.value -= 1 },
    reset: (state) =&gt; { state.value = 0 }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
</code></pre>
      </li>
      <li>
        <strong>Configure store:</strong>
        <pre class="bg-gray-100 p-3 rounded"><code>// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer }
});
</code></pre>
      </li>
      <li>
        <strong>Provide store in app:</strong>
        <pre class="bg-gray-100 p-3 rounded"><code>// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  &lt;Provider store={store}&gt;
    &lt;App /&gt;
  &lt;/Provider&gt;,
  document.getElementById("root")
);
</code></pre>
      </li>
      <li>
        <strong>Use Redux in component:</strong>
        <pre class="bg-gray-100 p-3 rounded"><code>import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) =&gt; state.counter.value);
  const dispatch = useDispatch();

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; dispatch(increment())}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(decrement())}&gt;-&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(reset())}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>
      </li>
    </ol>

    <h3 class="text-lg font-semibold mb-2">Key Points: Redux Toolkit</h3>
    <ul class="list-disc list-inside mb-4">
      <li>Slices combine state, reducers, and actions.</li>
      <li>Store contains all slices.</li>
      <li>Provider supplies store globally.</li>
      <li><code>useSelector</code> reads state, <code>useDispatch</code> dispatches actions.</li>
      <li>Great for large, complex apps.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside">
      <li>Context API is simple, lightweight global state built into React.</li>
      <li>Redux Toolkit offers scalable, structured state management with simplified setup.</li>
      <li>Both prevent prop drilling and promote cleaner architecture.</li>
      <li>RTK reduces boilerplate of classic Redux.</li>
    </ul>
  `,
          code: `
// Context API example (Theme switching)
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  return <ThemeSwitcher />;
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default App;

// Redux Toolkit example setup

// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer }
});

// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Counter.js (Redux connected component)
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
  `,
          explanation: `
  - Context API enables passing global state without deeply nesting props.
  - createContext and Provider form the global shared state.
  - Components access context state with useContext.
  - Redux Toolkit simplifies state structure with slices, store, and actions.
  - Provider passing store globally allows any component to hook into Redux state.
  - useSelector and useDispatch connect components to read and update Redux state.
  `,
          task: `
  Tasks:
  1. Create a theme context with React Context API and toggle theme via a button.
  2. Setup Redux Toolkit with a counter slice and store.
  3. Create a Redux-connected Counter component to update and display state.
  4. Compare usage of Context API vs Redux Toolkit for global state.
  5. Explore combining Context for simple global data and Redux for complex app state.
  `
        },
        {
          title: 'Routing in React – React Router',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is React Router?</h2>
    <p class="text-gray-700 mb-4">
      React Router is a library to add navigation in React apps.
      It enables Single Page Applications (SPAs) to have multiple pages without full page reloads.
      Supports dynamic routes, nested routes, programmatic navigation, and route parameters.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Installation</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install react-router-dom</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Basic Routing</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return &lt;h1&gt;Home Page&lt;/h1&gt;;
}

function About() {
  return &lt;h1&gt;About Page&lt;/h1&gt;;
}

function App() {
  return (
    &lt;Router&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;Home&lt;/Link&gt; | &lt;Link to="/about"&gt;About&lt;/Link&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path="/" element=&lt;Home /&gt; /&gt;
        &lt;Route path="/about" element=&lt;About /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}

export default App;
</code></pre>
    <p>Router wraps the app; Routes contain all routes; Route defines path & component; Link enables navigation without reload.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Dynamic Routes</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return &lt;h1&gt;User ID: {id}&lt;/h1&gt;;
}

function App() {
  return (
    &lt;Router&gt;
      &lt;nav&gt;
        &lt;Link to="/user/1"&gt;User 1&lt;/Link&gt; | &lt;Link to="/user/2"&gt;User 2&lt;/Link&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path="/user/:id" element=&lt;User /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}

export default App;
</code></pre>
    <p><code>:id</code> denotes a dynamic segment; <code>useParams()</code> accesses the parameter.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Nested Routes</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;nav&gt;
        &lt;Link to="stats"&gt;Stats&lt;/Link&gt; | &lt;Link to="settings"&gt;Settings&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Outlet /&gt; {/* nested route renders here */}
    &lt;/div&gt;
  );
}

function Stats() { return &lt;h2&gt;Stats Page&lt;/h2&gt;; }
function Settings() { return &lt;h2&gt;Settings Page&lt;/h2&gt;; }

function App() {
  return (
    &lt;Router&gt;
      &lt;Routes&gt;
        &lt;Route path="dashboard" element=&lt;Dashboard /&gt;&gt;
          &lt;Route path="stats" element=&lt;Stats /&gt; /&gt;
          &lt;Route path="settings" element=&lt;Settings /&gt; /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}

export default App;
</code></pre>
    <p><code>Outlet</code> renders nested routes. Nested routes organize hierarchies.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Programmatic Navigation</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    &lt;div&gt;
      &lt;h1&gt;Home&lt;/h1&gt;
      &lt;button onClick={() =&gt; navigate("/about")}&gt;Go to About&lt;/button&gt;
    &lt;/div&gt;
  );
}

function About() { return &lt;h1&gt;About&lt;/h1&gt;; }

function App() {
  return (
    &lt;Router&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element=&lt;Home /&gt; /&gt;
        &lt;Route path="/about" element=&lt;About /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}

export default App;
</code></pre>
    <p><code>useNavigate()</code> allows navigation programmatically, e.g. for redirects after form submit.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>react-router-dom</code> enables SPA navigation without full reloads.</li>
      <li>Supports dynamic, nested routes and programmatic navigation.</li>
      <li><code>Routes</code> and <code>Route</code> replace older <code>Switch</code> in v6+.</li>
      <li><code>Link</code> navigates efficiently.</li>
      <li>Use <code>useParams</code>, <code>useNavigate</code>, and <code>Outlet</code> for advanced routing.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React Router turns React apps into multi-page SPAs.</li>
      <li>Dynamic routes handle URL params cleanly.</li>
      <li>Nested routes organize page hierarchies.</li>
      <li>Programmatic navigation enables redirects and logic-based routing.</li>
    </ul>
  `,
          code: `
// Basic Routing example
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

// Dynamic Routing example
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link> | <Link to="/user/2">User 2</Link>
      </nav>

      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;

// Nested Routes example
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="stats">Stats</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Stats() {
  return <h2>Stats Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// Programmatic Navigation example
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
  `,
          explanation: `
  - React Router provides SPA navigation without full page reload.
  - <Router> wraps the application for routing context.
  - <Routes> contains individual <Route> definitions mapping paths to components.
  - <Link> allows navigation without refreshing the page.
  - useParams extracts dynamic route parameters.
  - Outlet renders nested child routes within parent components.
  - useNavigate enables programmatic routing navigation.
  - These tools help build clean and scalable navigation in React apps.
  `,
          task: `
  Tasks:
  1. Set up basic routes for Home and About pages with navigation links.
  2. Create a dynamic User route and access URL parameters using useParams.
  3. Implement nested routes under a Dashboard page using Outlet.
  4. Use useNavigate to trigger navigation on button click.
  5. Experiment combining dynamic and nested routes with programmatic navigation.
  `
        },
        {
          title: 'Performance Optimization in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. React.memo</h2>
    <p class="text-gray-700 mb-4">
      <code>React.memo</code> is a Higher-Order Component that memoizes functional components.
      It skips re-rendering if props haven't changed, similar to <code>PureComponent</code> in class components.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return &lt;h2&gt;{name}&lt;/h2&gt;;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment: {count}&lt;/button&gt;
      &lt;Child name="React Memo Child" /&gt;
    &lt;/div&gt;
  );
}

export default Parent;</code></pre>
    <p>Child only re-renders when prop <code>name</code> changes. Without <code>React.memo</code>, Child re-renders every Parent render.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. useCallback for Function Memoization</h2>
    <p>Memoizes functions passed to child components to prevent unnecessary re-rendering.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) =&gt; {
  console.log("Button rendered");
  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() =&gt; {
    console.log("Button clicked");
  }, []);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
      &lt;Button handleClick={handleClick} /&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. useMemo for Expensive Calculations</h2>
    <p>Memoizes computationally heavy values to prevent recalculation on every render.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useMemo } from "react";

function ExpensiveComponent({ num }) {
  const factorial = (n) =&gt; (n &lt;= 0 ? 1 : n * factorial(n - 1));

  const fact = useMemo(() =&gt; factorial(num), [num]);

  return &lt;h2&gt;Factorial: {fact}&lt;/h2&gt;;
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Code Splitting and Lazy Loading</h2>
    <p>Splits app into smaller chunks, improving the initial load time.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { Suspense, lazy } from "react";

const About = lazy(() =&gt; import("./About"));

function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Home&lt;/h1&gt;
      &lt;Suspense fallback=&lt;div&gt;Loading...&lt;/div&gt;&gt;
        &lt;About /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
    <p>
      <code>lazy()</code> dynamically imports the component.
      <code>Suspense</code> renders a fallback UI while loading.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Key Tips for Optimization</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Avoid unnecessary state updates.</li>
      <li>Use <code>React.memo</code> for components with stable props.</li>
      <li>Memoize functions and values using <code>useCallback</code> &amp; <code>useMemo</code>.</li>
      <li>Lazy load components to reduce initial bundle size.</li>
      <li>Use virtualization libraries like <code>react-window</code> for large lists.</li>
      <li>Avoid inline functions in render unless memoized.</li>
      <li>Optimize images and assets for faster loading.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Performance optimization improves UX and efficiency.</li>
      <li>Use <code>React.memo</code>, <code>useCallback</code>, <code>useMemo</code>, and lazy loading strategically.</li>
      <li>Optimize state, props, and heavy computations carefully.</li>
      <li>Use React DevTools Profiler to identify bottlenecks.</li>
    </ul>
  `,
          code: `
// React.memo example
import React, { useState } from 'react';

const Child = React.memo(({ name }) => {
  console.log('Child rendered');
  return <h2>{name}</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child name="React Memo Child" />
    </div>
  );
}

export default Parent;

// useCallback example
import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;

// useMemo example
import React, { useMemo } from "react";

function ExpensiveComponent({ num }) {
  const factorial = (n) => (n <= 0 ? 1 : n * factorial(n - 1));

  const fact = useMemo(() => factorial(num), [num]);

  return <h2>Factorial: {fact}</h2>;
}

// Lazy loading example
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
  `,
          explanation: `
  - React.memo prevents re-renders if props are unchanged, improving performance.
  - useCallback memoizes functions so they have stable references, preventing re-renders of memoized children.
  - useMemo caches expensive calculations to avoid recomputing on every render.
  - Lazy loading chunks the app to reduce initial load time, rendering fallback UI during loading.
  - Profiling tools help detect where optimizations are needed.
  - Careful memoization avoids unnecessary renders and keeps apps fast.
  `,
          task: `
  Task:
  1. Wrap a child component with React.memo and observe re-render behavior.
  2. Use useCallback to memoize functions passed as props to children.
  3. Use useMemo to memoize an expensive calculation and prevent redundant computation.
  4. Implement lazy loading with Suspense for a component.
  5. Profile your React app with React DevTools Profiler to identify slow components.
  `
        },
        {
          title: 'API Interaction – Fetch & Axios in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Using Fetch API</h2>
    <p class="text-gray-700 mb-4">
      React apps fetch data from APIs, managing loading, success, and error states.
      The native Fetch API can be used within <code>useEffect</code> for this purpose.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res =&gt; {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data =&gt; setUsers(data))
      .catch(err =&gt; setError(err.message))
      .finally(() =&gt; setLoading(false));
  }, []);

  if (loading) return &lt;h2&gt;Loading...&lt;/h2&gt;;
  if (error) return &lt;h2&gt;Error: {error}&lt;/h2&gt;;

  return (
    &lt;ul&gt;
      {users.map(user =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default Users;
</code></pre>
    <p><strong>Explanation:</strong> <code>useEffect</code> triggers fetch on mount; <code>loading</code> tracks fetch status; <code>error</code> handles network/API issues.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Using Axios</h2>
    <p>Axios is a promise-based HTTP client with easier syntax and features like interceptors.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install axios</code></pre>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response =&gt; setUsers(response.data))
      .catch(err =&gt; setError(err.message))
      .finally(() =&gt; setLoading(false));
  }, []);

  if (loading) return &lt;h2&gt;Loading...&lt;/h2&gt;;
  if (error) return &lt;h2&gt;Error: {error}&lt;/h2&gt;;

  return (
    &lt;ul&gt;
      {users.map(user =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default Users;
</code></pre>
    <p>Axios automatically parses JSON and has better error handling.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Handling Form Submission & POST Requests</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";
import axios from "axios";

function AddUser() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", { name })
      .then(res =&gt; setMessage("User added successfully!"))
      .catch(err =&gt; setMessage("Error adding user"));
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
        placeholder="Enter name"
      /&gt;
      &lt;button type="submit"&gt;Add User&lt;/button&gt;
      &lt;p&gt;{message}&lt;/p&gt;
    &lt;/form&gt;
  );
}

export default AddUser;
</code></pre>
    <p>This example shows sending a POST request and updating UI accordingly.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Key Points for API Interaction</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Always handle loading, success, and error states.</li>
      <li>Prefer Axios for cleaner syntax and advanced features.</li>
      <li>Use <code>useEffect</code> to fetch data on component mount.</li>
      <li>Combine API logic with custom hooks (e.g., <code>useFetch</code>) for reusability.</li>
      <li>Async/await syntax provides readable asynchronous code.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React interacts with APIs using <code>fetch</code> or <code>axios</code>.</li>
      <li>Manage loading, error, and data states for stability and UX.</li>
      <li>Use proper HTTP methods for CRUD: GET, POST, PUT, DELETE.</li>
      <li>Custom hooks improve code reusability for API interactions.</li>
    </ul>
  `,
          code: `
// Using fetch API example
import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default Users;

// Using Axios example
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default Users;

// POST request example with form
import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then(res => setMessage('User added successfully!'))
      .catch(err => setMessage('Error adding user'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add User</button>
      <p>{message}</p>
    </form>
  );
}

export default AddUser;
  `,
          explanation: `
  - Fetch API and Axios are ways to communicate with backend APIs from React.
  - useEffect is used for fetching data on mount.
  - Managing loading, data, and error states enhances UX and stability.
  - Axios simplifies requests and error handling, supports features like interceptors.
  - Form submissions can be handled with POST requests using controlled inputs.
  - Use async/await or promises for clear asynchronous code.
  - Custom hooks like useFetch can encapsulate fetch logic for reuse.
  `,
          task: `
  Task:
  1. Create a component that fetches user data using fetch API and displays it.
  2. Create a similar component using Axios for data fetching.
  3. Build a form component to POST new user data to API using Axios.
  4. Implement loading and error states in all components.
  5. Refactor fetch logic into a reusable custom hook.
  `
        },
        {
          title: 'Testing in React – Jest & React Testing Library',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Why Test React Components?</h2>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li>Validate UI renders as expected.</li>
      <li>Test component behavior like events, props, and state updates.</li>
      <li>Ensure API data is handled correctly.</li>
      <li>Catch regressions when refactoring or updating code.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Tools</h2>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Jest:</strong> JavaScript testing framework; supports unit tests, mocking, and snapshot testing.</li>
      <li><strong>React Testing Library (RTL):</strong> Tests component behavior from a user perspective.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Setting Up</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install --save-dev jest @testing-library/react @testing-library/jest-dom</code></pre>
    <p>With Create React App, Jest is preinstalled.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Writing a Simple Test</h2>
    <p><strong>Counter Component</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>

    <p><strong>Test File</strong></p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Counter.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count", () =&gt; {
  render(&lt;Counter /&gt;);
  const heading = screen.getByText(/Count: 0/i);
  expect(heading).toBeInTheDocument();
});

test("increments count on button click", () =&gt; {
  render(&lt;Counter /&gt;);
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  const heading = screen.getByText(/Count: 1/i);
  expect(heading).toBeInTheDocument();
});
</code></pre>
    <p><strong>Explanation:</strong></p>
    <ul class="list-disc list-inside mb-4">
      <li><code>render()</code> renders component in a virtual DOM.</li>
      <li><code>screen.getByText()</code> finds elements by displayed text.</li>
      <li><code>fireEvent.click()</code> simulates a user click event.</li>
      <li><code>expect(...).toBeInTheDocument()</code> asserts presence of element.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Testing Props</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Greeting({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}

test("renders greeting with name", () =&gt; {
  render(&lt;Greeting name="Bilal" /&gt;);
  const greeting = screen.getByText("Hello, Bilal!");
  expect(greeting).toBeInTheDocument();
});
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Snapshot Testing</h2>
    <p>Used to detect unintended UI changes.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import renderer from "react-test-renderer";
import Counter from "./Counter";

test("Counter snapshot", () =&gt; {
  const tree = renderer.create(&lt;Counter /&gt;).toJSON();
  expect(tree).toMatchSnapshot();
});
</code></pre>
    <p>Generates a snapshot file to compare future renders against.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Jest is used for unit tests and snapshot testing.</li>
      <li>React Testing Library encourages testing behavior from user perspective.</li>
      <li>Test component rendering, props, state updates, events, and API calls (mocked).</li>
      <li>Avoid testing implementation details, focus on user-visible effects.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Testing improves reliability and maintenance of React apps.</li>
      <li>Jest + React Testing Library is the industry standard for React testing.</li>
      <li>Covers UI, logic, and interaction testing.</li>
      <li>Snapshot testing detects unwanted UI changes automatically.</li>
    </ul>
  `,
          code: `
// Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// Counter.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count", () => {
  render(<Counter />);
  const heading = screen.getByText(/Count: 0/i);
  expect(heading).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<Counter />);
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  const heading = screen.getByText(/Count: 1/i);
  expect(heading).toBeInTheDocument();
});

// Greeting.js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default Greeting;

// Greeting.test.js
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting with name", () => {
  render(<Greeting name="Bilal" />);
  const greeting = screen.getByText("Hello, Bilal!");
  expect(greeting).toBeInTheDocument();
});

// Snapshot test with react-test-renderer
import renderer from "react-test-renderer";
import Counter from "./Counter";

test("Counter snapshot", () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});
  `,
          explanation: `
  - Jest provides a testing environment with assertions, mocks, and snapshots.
  - React Testing Library focuses on testing user interactions and visible UI.
  - Render components, simulate events, and make assertions based on DOM.
  - Snapshot tests catch unexpected UI changes by comparing output trees.
  - Write meaningful tests that reflect user experience, not internal details.
  `,
          task: `
  Task:
  1. Write tests to verify a component renders with initial props.
  2. Simulate user events and verify state updates and UI changes.
  3. Write snapshot tests to monitor UI structure.
  4. Practice mocking API calls to test components depending on data.
  5. Explore RTL queries: getByText, getByRole, getByLabelText for better selectors.
  `
        },
        {
          title: 'Styling in React – CSS Modules, Styled-Components, Tailwind CSS',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. CSS Modules</h2>
    <p class="text-gray-700 mb-4">
      CSS Modules are CSS files scoped locally to components.
      This prevents class name collisions in large projects automatically.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>/* Counter.module.css */
.counter {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}</code></pre>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div className={styles.counter}&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button className={styles.button} onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;</code></pre>
    <p>Benefits:<br/>Scoped class names automatically avoid conflicts in large projects.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Styled-Components (CSS-in-JS)</h2>
    <p>Write CSS inside JavaScript using template literals with dynamically generated unique class names.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install styled-components</code></pre>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div\`
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
\`;

const Button = styled.button\`
  background-color: \${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
\`;

function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;Container&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;Button primary onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/Button&gt;
      &lt;Button onClick={() =&gt; setCount(0)}&gt;Reset&lt;/Button&gt;
    &lt;/Container&gt;
  );
}

export default Counter;</code></pre>
    <p>Benefits:<br/>Dynamic styling with props, scoped styles, great for component-driven design.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Tailwind CSS (Utility-First Framework)</h2>
    <p>
      Tailwind CSS uses utility classes directly in JSX.
      No separate CSS files needed.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
</code></pre>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div className="bg-gray-100 p-6 text-center"&gt;
      &lt;h1 className="text-3xl font-bold mb-4"&gt;Count: {count}&lt;/h1&gt;
      &lt;button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() =&gt; setCount(count + 1)}
      &gt;
        Increment
      &lt;/button&gt;
      &lt;button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() =&gt; setCount(0)}
      &gt;
        Reset
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;</code></pre>
    <p>Benefits:<br/>Rapid development with utility classes, easy responsive design, no CSS conflicts.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>CSS Modules provide scoped CSS per component automatically.</li>
      <li>Styled-Components offer CSS-in-JS with dynamic styling based on props.</li>
      <li>Tailwind CSS provides a utility-first approach with classes for fast styling.</li>
      <li>Choose based on project scale, preferences, and team workflow.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React supports multiple styling approaches.</li>
      <li>CSS Modules are safe, simple, and local to components.</li>
      <li>Styled-Components allow dynamic, reusable styles directly in JS.</li>
      <li>Tailwind enables fast, responsive styling with utility classes.</li>
      <li>Combining them can maximize flexibility and productivity.</li>
    </ul>
  `,
          code: `
// CSS Modules example: Counter.module.css
.counter {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

// Counter.js using CSS Modules
import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>Count: {count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

// Styled-Components example
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div\`
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
\`;

const Button = styled.button\`
  background-color: \${props => (props.primary ? '#007bff' : '#6c757d')};
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
\`;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h1>Count: {count}</h1>
      <Button primary onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </Container>
  );
}

export default Counter;

// Tailwind CSS example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
  `,
          explanation: `
  - CSS Modules scope CSS classes locally to the component preventing collisions.
  - Styled-Components allow writing actual CSS in JS files with dynamic styling capabilities.
  - Tailwind CSS encourages utility-first styling by applying prebuilt CSS classes directly in JSX.
  - Each approach suits different project sizes and team workflows.
  - Mixing approaches can provide scalable, maintainable, and fast development.
  `,
          task: `
  Task:
  1. Create a simple Counter with styling using CSS Modules.
  2. Build the same Counter using Styled-Components with dynamic styles.
  3. Implement the Counter using Tailwind CSS utility classes.
  4. Compare code readability, flexibility, and setup complexity.
  5. Try combining these approaches in a small project for practice.
  `
        },
      ]

    },
    advanced: {
      title: "Advance Level React js Notes",
      topics: [
        {
          title: 'Under the Hood: Reconciliation Algorithm',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is Reconciliation?</h2>
    <p class="text-gray-700 mb-4">
      Reconciliation is React’s process to efficiently update the real DOM when state or props change.
      It compares the new Virtual DOM with the previous Virtual DOM to find what has changed.
      Only necessary changes are applied to the real DOM to improve performance.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">The Diffing Algorithm</h2>
    <p>React’s diffing algorithm follows these rules:</p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>If elements are of different types, React removes the old and creates the new element.</li>
      <li>If elements are the same type, React updates the changed attributes and recursively checks the children.</li>
      <li>For lists, unique <code>key</code> props are essential for efficient updates.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Importance of Keys in Lists</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) =&gt; (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
    <p>
      The <code>key</code> helps React identify which items have changed, added, or removed.
      Using index as key is acceptable for static lists, but for dynamic lists unique IDs should be used.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example of Efficient Update</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([{ id: 1, name: "Apple" }]);

  const addItem = () =&gt; {
    setItems([...items, { id: 2, name: "Banana" }]);
  };

  return (
    &lt;div&gt;
      &lt;ul&gt;
        {items.map((item) =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;button onClick={addItem}&gt;Add Banana&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
    <p>
      React adds only the new &lt;li&gt; for Banana instead of re-rendering the entire list, thanks to <code>key</code> usage.
    </p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Reconciliation enables efficient DOM updates by comparing virtual DOM trees.</li>
      <li>The diffing algorithm updates only what changed.</li>
      <li>Unique keys for list items prevent unnecessary re-renders and bugs.</li>
      <li>This process enhances performance and scalability of React apps.</li>
    </ul>
  `,
          code: `
// Efficient list update example
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([{ id: 1, name: "Apple" }]);

  const addItem = () => {
    setItems([...items, { id: 2, name: "Banana" }]);
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Banana</button>
    </div>
  );
}

export default App;
  `,
          explanation: `
  - Reconciliation is React's process to efficiently sync virtual DOM changes with real DOM.
  - The diffing algorithm compares old and new virtual DOM trees and updates minimal parts of the real DOM.
  - Providing unique keys to list elements helps React track items and optimize rendering.
  - React skips re-rendering unchanged components, improving app performance.
  - Correctly using keys is essential for lists that add, remove, or reorder items.
  `,
          task: `
  Task:
  1. Create a list component that renders items with unique IDs as keys.
  2. Add functionality to add or remove items dynamically.
  3. Observe how React updates only changed list elements.
  4. Experiment replacing keys with indexes and see potential rendering issues.
  5. Understand how reconciliation improves UI performance.
  `
        },
        {
          title: 'React Fiber Architecture',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What is React Fiber?</h2>
    <p class="text-gray-700 mb-4">
      React Fiber is a complete reimplementation of React's core rendering algorithm, introduced in React 16.
      Its main goal is to make rendering more efficient and interruptible, enabling React to prioritize updates.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Features of Fiber</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Incremental Rendering:</strong> Large UI updates are split into smaller chunks that React can pause, resume, or abort.</li>
      <li><strong>Prioritization:</strong> React assigns priority levels to tasks — user interactions like clicks and typing have high priority, whereas background updates (e.g., API data) have lower priority.</li>
      <li><strong>Concurrency Support:</strong> Enables React to work on multiple tasks simultaneously without blocking the UI, enabling smoother experience.</li>
      <li><strong>Backwards Compatibility:</strong> Compatible with existing React components and API.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">How Fiber Works</h2>
    <p>
      React creates a Fiber Node for each element in the Virtual DOM.
      Each fiber node stores:
    </p>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Type of element (e.g., div, button)</li>
      <li>Props</li>
      <li>State</li>
      <li>Effects (side effects to apply to DOM)</li>
    </ul>
    <p>React traverses the Fiber tree, calculates necessary changes, and updates the real DOM incrementally.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Why Fiber Matters</h2>
    <p>
      Before Fiber, React rendered synchronously and blocked the UI during large updates.
      This could cause lag and poor user experience in complex apps.
      Fiber makes updates incremental and interruptible, boosting responsiveness and animation smoothness.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Example Scenario</h2>
    <p>
      Consider a list of 1000 items updating while the user types in a search bar.
      <br />
      Without Fiber: The UI might freeze until all items finish re-rendering.
      <br />
      With Fiber: React prioritizes user typing updates and renders them first,
      then continues updating the list in the background without blocking input.
    </p>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>React Fiber is the new rendering engine since React 16+</li>
      <li>Supports incremental rendering, prioritization, and concurrency</li>
      <li>Improves UI responsiveness and smoothness</li>
      <li>Works seamlessly with existing React APIs and components</li>
    </ul>
  `,
          explanation: `
  - Fiber breaks large rendering work into small units and prioritizes which updates to apply first.
  - Enables React apps to stay interactive and responsive during complex changes.
  - Each element in the Virtual DOM is backed by a Fiber node storing props, state, and side effects.
  - React processes Fiber nodes incrementally, pausing work to handle higher priority tasks.
  - This architecture lays foundation for concurrent features and future React improvements.
  `,
          task: `
  Task:
  1. Understand how React creates Fiber nodes to track each element’s state and props.
  2. Learn how React schedules and prioritizes updates to keep UI responsive.
  3. Observe React behavior during large state changes – notice smoothness due to Fiber.
  4. Explore React concurrent features enabled by Fiber.
  5. Sketch Fiber tree structure and relationship between elements and fibers.
  `
        },
        {
          title: 'Understanding Build Tools: Webpack, Vite, and More',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">What are Build Tools?</h2>
    <p class="text-gray-700 mb-4">
      Build tools are software that transform, bundle, and optimize your code for production use.
      Responsibilities include:
      <ul class="list-disc list-inside">
        <li>Module bundling</li>
        <li>Transpiling modern JavaScript (ES6+)</li>
        <li>CSS preprocessing</li>
        <li>Minification and optimization</li>
        <li>Hot Module Replacement (HMR) for fast development</li>
      </ul>
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Webpack</h2>
    <p class="text-gray-700 mb-4">
      Webpack is a popular module bundler for JavaScript and assets.
      It combines your scripts, styles, images, etc., into optimized bundles for production.
    </p>
    <h3 class="font-semibold mb-2">Key Features</h3>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Entry & Output:</strong> Entry is the main starting JS file; Output defines bundled file location.</li>
      <li><strong>Loaders:</strong> Transform files before bundling, like <code>babel-loader</code> for JS or <code>css-loader</code> for CSS.</li>
      <li><strong>Plugins:</strong> Extend Webpack functionality, e.g. <code>HtmlWebpackPlugin</code>, <code>MiniCssExtractPlugin</code>.</li>
      <li><strong>Dev Server:</strong> Provides hot reloading during development.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
module: {
    rules: [
     { test: /.css$/, use: ["style-loader", "css-loader"] },
      { test: /.js$/, exclude: /node_modules/, use: "babel-loader" } 
    ],
  },
};</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Vite</h2>
    <p class="text-gray-700 mb-4">
      Vite is a modern build tool focused on fast development experience.
      Uses native ES modules in the browser during development and bundles with Rollup for production.
    </p>
    <h3 class="font-semibold mb-2">Key Advantages</h3>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Instant server startup with almost no waiting time.</li>
      <li>Fast HMR: only updated modules are replaced without full reload.</li>
      <li>Supports modern syntax: ES6+, TypeScript out of the box.</li>
      <li>Simple configuration compared to Webpack’s complexity.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Create React app with Vite
npm create vite@latest my-app
cd my-app
npm install
npm run dev
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Why Use Build Tools?</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Bundle multiple source files into fewer files for faster browser loading.</li>
      <li>Transpile modern JavaScript syntax to support older browsers.</li>
      <li>Optimize assets with minification and tree-shaking to reduce bundle size.</li>
      <li>Enable fast development with Hot Module Replacement for instant updates.</li>
      <li>Support code splitting for large applications to load parts on demand.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Build tools are essential in modern React development workflows.</li>
      <li>Webpack is feature-rich, flexible, and widely used.</li>
      <li>Vite is lightweight, blazing fast, and designed for modern applications.</li>
      <li>Both handle bundling, transpiling, optimization, and live development.</li>
    </ul>
  `,
          code: `
// Basic webpack.config.js example
const path = require("path");

module.exports = {
  entry: "./src/index.js", // main file
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    filename: "bundle.js", // bundled file name
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ["style-loader", "css-loader"], // load css files
      },
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // transpile JS
      },
    ],
  },
};

// Using Vite for React app
// Run commands in terminal:
npm create vite@latest my-app
cd my-app
npm install
npm run dev
// Dev server starts instantly with hot reload
  `,
          explanation: `
  - Build tools transform, optimize, and bundle front-end code.
  - Webpack bundles various assets using loaders and plugins with powerful configuration.
  - Vite uses native ES modules in dev for fast startup and Rollup bundling in production.
  - Both tools support hot module reloading (HMR) for quicker development feedback.
  - Proper bundling improves load times and compatibility across browsers.
  `,
          task: `
  Task:
  1. Inspect a webpack.config.js and understand entry, output, loaders, and plugins.
  2. Create a new React app with Vite and explore instant dev server startup.
  3. Experiment with adding CSS and JS files to Webpack/Vite builds.
  4. Measure build sizes and experiment with code splitting.
  5. Learn how hot module replacement improves development workflow.
  `
        },
        {
          title: 'Advanced Patterns in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Higher-Order Components (HOCs)</h2>
    <p class="text-gray-700 mb-4">
      An HOC is a function that takes a component and returns a new component.
      It’s used to share reusable logic across multiple components.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// withLogger.js
import React from "react";

const withLogger = (WrappedComponent) =&gt; {
  return (props) =&gt; {
    console.log("Props:", props);
    return &lt;WrappedComponent {...props} /&gt;;
  };
};

export default withLogger;

// App.js
import React from "react";
import withLogger from "./withLogger";

function Hello({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}

export default withLogger(Hello);
</code></pre>
    <p>withLogger wraps Hello component, logging props on each render. Useful for injecting behaviors without modifying original components.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Render Props Pattern</h2>
    <p>
      A component receives a function as a prop to dynamically render content.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function MouseTracker({ render }) {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const handleMouseMove = (e) =&gt; {
    setX(e.clientX);
    setY(e.clientY);
  };

  return &lt;div onMouseMove={handleMouseMove}&gt;{render({ x, y })}&lt;/div&gt;;
}

// Usage
function App() {
  return (
    &lt;MouseTracker render={({ x, y }) =&gt; &lt;p&gt;Mouse Position: {x}, {y}&lt;/p&gt;} /&gt;
  );
}
</code></pre>
    <p>MouseTracker handles logic; rendering is flexible through the render function prop.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Compound Components Pattern</h2>
    <p>This pattern allows children components to share state managed by their parent.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return React.Children.map(children, (child, index) =&gt;
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () =&gt; setActiveIndex(index),
    })
  );
}

function Tab({ isActive, onSelect, children }) {
  return (
    &lt;button style={{ fontWeight: isActive ? "bold" : "normal" }} onClick={onSelect}&gt;
      {children}
    &lt;/button&gt;
  );
}

// Usage
function App() {
  return (
    &lt;Tabs&gt;
      &lt;Tab&gt;Tab 1&lt;/Tab&gt;
      &lt;Tab&gt;Tab 2&lt;/Tab&gt;
      &lt;Tab&gt;Tab 3&lt;/Tab&gt;
    &lt;/Tabs&gt;
  );
}
</code></pre>
    <p>Tabs manages active state; Tab components receive props to know if active and to change active tab.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Prop Getters and State Reducers (for Custom Hooks)</h2>
    <p>Custom hooks can provide prop getters to let users customize event handlers and state reducers for flexible state management.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);

  const getTogglerProps = ({ onClick, ...props } = {}) =&gt; ({
    "aria-pressed": on,
    onClick: (e) =&gt; {
      setOn(!on);
      if(onClick) onClick(e);
    },
    ...props,
  });

  return { on, toggle: () =&gt; setOn(!on), getTogglerProps };
}

// Usage
function App() {
  const { on, getTogglerProps } = useToggle();

  return &lt;button {...getTogglerProps()}&gt;{on ? "ON" : "OFF"}&lt;/button&gt;;
}
</code></pre>
    <p>getTogglerProps allows consumers to attach extra behaviors like additional onClick handlers while keeping basic toggle logic intact.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>HOCs:</strong> reuse logic by wrapping components.</li>
      <li><strong>Render Props:</strong> share logic via function props for flexible rendering.</li>
      <li><strong>Compound Components:</strong> parent manages and shares state with multiple related children.</li>
      <li><strong>Prop Getters / State Reducers:</strong> enable customizable, reusable hooks with flexible event and state management.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Advanced patterns improve component reusability, scalability, and maintainability.</li>
      <li>Help separate concerns, promote code reuse, and simplify complex behavior.</li>
      <li>Widely applied in popular React libraries and professional applications.</li>
    </ul>
  `,
          code: `
// Higher-Order Component (HOC) example: withLogger
import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;

// Using HOC
import React from "react";
import withLogger from "./withLogger";

function Hello({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default withLogger(Hello);

// Render Props example
function MouseTracker({ render }) {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return <div onMouseMove={handleMouseMove}>{render({ x, y })}</div>;
}

function App() {
  return (
    <MouseTracker render={({ x, y }) => <p>Mouse Position: {x}, {y}</p>} />
  );
}

// Compound Components example
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index),
    })
  );
}

function Tab({ isActive, onSelect, children }) {
  return (
    <button style={{ fontWeight: isActive ? "bold" : "normal" }} onClick={onSelect}>
      {children}
    </button>
  );
}

function CompoundApp() {
  return (
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  );
}

// Prop Getters example
function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);

  const getTogglerProps = ({ onClick, ...props } = {}) => ({
    "aria-pressed": on,
    onClick: (e) => {
      setOn(!on);
      if (onClick) onClick(e);
    },
    ...props,
  });

  return { on, toggle: () => setOn(!on), getTogglerProps };
}

function ToggleButton() {
  const { on, getTogglerProps } = useToggle();

  return <button {...getTogglerProps()}>{on ? "ON" : "OFF"}</button>;
}
  `,
          explanation: `
  - HOCs wrap components to share reusable logic without modifying them.
  - Render props pattern allows passing a function prop to share logic with flexible rendering.
  - Compound components share state via context or props among related children for cohesive behavior.
  - Prop getters in custom hooks provide flexible event handlers and state exposure for consumers.
  - These patterns enhance reusability, separation of concerns, and code maintainability.
  `,
          task: `
  Task:
  1. Create a simple HOC to log props for wrapped components.
  2. Build a component using render props to share internal state and behavior.
  3. Implement compound components that share state through parent and children.
  4. Develop a custom hook exposing prop getter functions enabling flexible event handling.
  5. Explore combining these patterns in complex reusable UI libraries.
  `
        },
        {
          title: 'Advanced Hooks in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. useLayoutEffect vs useEffect</h2>
    <h3 class="text-xl font-semibold mb-2">1. useEffect</h3>
    <p class="text-gray-700 mb-4">
      Runs <strong>after</strong> the render is painted on the screen.<br/>
      Ideal for side effects like API calls, subscriptions, and timers.<br/>
      Non-blocking: it does not block browser painting.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    console.log("useEffect called after render");
  }, [count]);

  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;;
}
</code></pre>

    <h3 class="text-xl font-semibold mb-2">2. useLayoutEffect</h3>
    <p class="text-gray-700 mb-4">
      Runs synchronously <strong>after render but before painting</strong>.<br/>
      Blocks browser painting until it finishes.<br/>
      Useful for reading layout measurements and synchronizing DOM mutations.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState, useLayoutEffect, useRef } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() =&gt; {
    setWidth(divRef.current.offsetWidth);
    console.log("useLayoutEffect called before paint");
  }, []);

  return &lt;div ref={divRef}&gt;Width: {width}px&lt;/div&gt;;
}
</code></pre>

    <p>
      <strong>Key Difference:</strong><br/>
      <code>useEffect</code> runs after paint asynchronously while <code>useLayoutEffect</code> runs synchronously before paint blocking rendering.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. useImperativeHandle</h2>
    <p class="text-gray-700 mb-4">
      Customize the instance value exposed to a parent component via <code>ref</code>.<br/>
      Useful to expose imperative methods of child components safely.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useRef, useImperativeHandle, forwardRef } from "react";

const Input = forwardRef((props, ref) =&gt; {
  const inputRef = useRef();

  useImperativeHandle(ref, () =&gt; ({
    focus: () =&gt; inputRef.current.focus(),
  }));

  return &lt;input ref={inputRef} type="text" /&gt;;
});

function App() {
  const inputRef = useRef();

  return (
    &lt;div&gt;
      &lt;Input ref={inputRef} /&gt;
      &lt;button onClick={() =&gt; inputRef.current.focus()}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    <p>
      Parent can imperatively call <code>focus()</code> on the child input without exposing internal refs directly.
      This provides encapsulation and controlled access.
    </p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><code>useLayoutEffect</code> runs synchronously before paint and is suitable for layout reads.</li>
      <li><code>useEffect</code> runs asynchronously after paint for side effects.</li>
      <li><code>useImperativeHandle</code> customizes what methods/values a parent can access via a child’s <code>ref</code>.</li>
      <li>Advanced hooks give finer control for performance and DOM interactions.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Advanced hooks enable precise control over rendering and DOM manipulation.</li>
      <li><code>useLayoutEffect</code> blocks painting to measure or adjust layout synchronously.</li>
      <li><code>useImperativeHandle</code> exposes specific imperative methods safely to parent components.</li>
    </ul>
  `,
          explanation: `
  - useEffect runs asynchronously after render is painted; perfect for side-effect logic.
  - useLayoutEffect runs synchronously before paint; ideal for DOM measurements and updates.
  - useImperativeHandle provides a controlled API for refs, encapsulating internal details.
  - Use these advanced hooks to improve performance and DOM handling in complex components.
  `,
          task: `
  Task:
  1. Use useLayoutEffect to read DOM element dimensions before paint.
  2. Compare behavior with similar useEffect usage.
  3. Create a child component exposing a focus method using useImperativeHandle.
  4. Trigger that focus method from the parent via ref.
  5. Understand correct use cases to avoid blocking user experience.
  `
        },
        {
          title: 'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. What is SSR?</h2>
    <p class="text-gray-700 mb-4">
      Server-Side Rendering (SSR) means React components are rendered on the server before the HTML is sent to the browser.
      This provides fully rendered HTML on page load, improving SEO and speeding up first paint.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// pages/index.js
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Posts&lt;/h1&gt;
      &lt;ul&gt;
        {posts.map((post) =&gt; (
          &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    <p>Explanation:<br/>getServerSideProps runs on server at request time and returns props before rendering the component.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. What is SSG?</h2>
    <p class="text-gray-700 mb-4">
      Static Site Generation (SSG) pre-renders pages into static HTML at build time.
      Great for pages with static or rarely changing content.
      These static pages load very fast because they can be served from a CDN.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// pages/posts.js
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts }, revalidate: 60 }; // ISR: regenerate page every 60 seconds
}

export default function Posts({ posts }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Posts&lt;/h1&gt;
      &lt;ul&gt;
        {posts.map((post) =&gt; (
          &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    <p>Explanation:<br/>getStaticProps runs at build time. <code>revalidate</code> enables Incremental Static Regeneration (ISR) to update pages periodically.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Benefits of SSR & SSG</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Improved SEO – search engines get fully rendered HTML.</li>
      <li>Faster First Contentful Paint – users see content immediately.</li>
      <li>Better performance – static pages served from CDN.</li>
      <li>Flexible data fetching choices – SSR for dynamic data, SSG for static content.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>SSR:</strong> Dynamic server-rendered pages at request time.</li>
      <li><strong>SSG:</strong> Static generated pages at build time.</li>
      <li><strong>ISR:</strong> Hybrid approach updating static pages periodically.</li>
      <li>Use Next.js data-fetching functions:
        <ul class="list-disc list-inside">
          <li><code>getServerSideProps</code> for SSR</li>
          <li><code>getStaticProps</code> for SSG</li>
          <li><code>getStaticPaths</code> for dynamic routes with SSG</li>
        </ul>
      </li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>SSR & SSG improve performance, SEO, and user experience.</li>
      <li>Next.js provides simple APIs to implement both rendering strategies.</li>
      <li>Choose SSR for highly dynamic data and SSG for mostly static content.</li>
      <li>ISR allows static pages to be automatically and incrementally updated.</li>
    </ul>
  `,
          explanation: `
  - SSR generates HTML on each request, useful for up-to-date dynamic content.
  - SSG generates HTML once at build time, ideal for static or less frequently updated pages.
  - ISR (Incremental Static Regeneration) combines both, allowing periodic page regeneration.
  - Next.js abstract these complexities with getServerSideProps, getStaticProps and getStaticPaths.
  - This leads to faster load, better SEO, and improved user experience.
  `,
          task: `
  Task:
  1. Create a Next.js page rendering data fetched at request time using getServerSideProps.
  2. Create another page using getStaticProps to statically generate content at build.
  3. Experiment with ISR by adding revalidate option to getStaticProps.
  4. Use getStaticPaths for dynamic routes with static pages.
  5. Analyze the difference in loading and SEO between SSR and SSG pages.
  `
        },
        {
          title: 'Type Safety in React with TypeScript',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Why Use TypeScript with React?</h2>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li>Catch bugs early during development.</li>
      <li>Autocomplete and IntelliSense in IDEs.</li>
      <li>Clearer documentation through types.</li>
      <li>Easier collaboration in large teams.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Setting Up TypeScript with React</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Using Create React App
npx create-react-app my-app --template typescript

# Using Vite
npm create vite@latest my-app -- --template react-ts
</code></pre>
    <p>Use <code>.tsx</code> for React components with JSX, and <code>.ts</code> for regular TypeScript files.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Typing Components</h2>
    <h3 class="font-semibold">1. Functional Component</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>type GreetingProps = {
  name: string;
  age?: number; // optional prop
};

const Greeting: React.FC&lt;GreetingProps&gt; = ({ name, age }) =&gt; {
  return &lt;h1&gt;Hello, {name}! {age && \`Age: \${age}\`}&lt;/h1&gt;;
};</code></pre>
    <h3 class="font-semibold">2. Props Interface</h3>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>interface ButtonProps {
  label: string;
  onClick: () =&gt; void;
}

const Button = ({ label, onClick }: ButtonProps) =&gt; (
  &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;
);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Typing State and Hooks</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState&lt;number&gt;(0); // type annotation

  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;;
}
</code></pre>
    <p><code>useState&lt;Type&gt;()</code> specifies the type of the state value explicitly, improving type safety.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Typing Events</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function Input() {
  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    console.log(e.target.value);
  };

  return &lt;input type="text" onChange={handleChange} /&gt;;
}
</code></pre>
    <p>React provides built-in event types like <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code> for type-safe event handling.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Typing Refs</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { useRef } from "react";

function TextInput() {
  const inputRef = useRef&lt;HTMLInputElement | null&gt;(null);

  const focusInput = () =&gt; inputRef.current?.focus();

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} type="text" /&gt;
      &lt;button onClick={focusInput}&gt;Focus&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
    <p><code>useRef&lt;Type&gt;(null)</code> guarantees the <code>ref</code> is type-safe for DOM elements or components.</p>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Use interfaces or type aliases to define prop shapes.</li>
      <li>Type state explicitly with <code>useState&lt;Type&gt;()</code>.</li>
      <li>Utilize React’s built-in event types for safe event handlers.</li>
      <li>Type refs with <code>useRef&lt;Type&gt;()</code> to avoid null errors.</li>
      <li>TypeScript improves code correctness and developer experience in React.</li>
    </ul>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>TypeScript adds static typing to React components, enhancing safety and maintainability.</li>
      <li>Types for props, state, events, and refs prevent runtime bugs.</li>
      <li>Improves IDE autocomplete and collaboration in larger projects.</li>
      <li>Essential for large-scale and professional React applications.</li>
    </ul>
  `,
          code: `
// Functional component with typed props
type GreetingProps = {
  name: string;
  age?: number;
};

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return <h1>Hello, {name}! {age && \`Age: \${age}\`}</h1>;
};

// Typing state in a counter component
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// Typing event handlers
function Input() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}

// Typing refs
import React, { useRef } from "react";

function TextInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => inputRef.current?.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
  `,
          explanation: `
  - Define prop shapes with TypeScript types or interfaces for clarity and validation.
  - Explicit typing of state with useState<Type>() avoids implicit any and wrong assignments.
  - Use React’s predefined event types like React.ChangeEvent<HTMLInputElement> for safer event handling.
  - useRef<Type>() ensures refs correctly reference DOM elements or component instances.
  - These typings increase code quality, prevent bugs, and improve developer tooling.
  `,
          task: `
  Task:
  1. Create a functional React component with typed props (including optional props).
  2. Implement a stateful component and use useState with explicit type annotation.
  3. Write event handlers with proper React event type annotations.
  4. Create a component using useRef typed to a DOM element and trigger methods on it.
  5. Combine typing best practices to build safer and maintainable React components.
  `
        },
        {
          title: 'Production Deployment in React',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Optimizing the Build</h2>

    <h3 class="font-semibold mb-2">1. Build Command</h3>
    <p>
      Generate a production-ready optimized build folder containing minified JS/CSS, optimized images, and hashed filenames for cache busting.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code># Create React App
npm run build

# Vite
npm run build
</code></pre>

    <h3 class="font-semibold mb-2">2. Bundle Analysis</h3>
    <p>Identify large files, unused libraries, and code splitting opportunities using tools like source-map-explorer or Webpack Bundle Analyzer.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install source-map-explorer --save-dev
npx source-map-explorer build/static/js/*.js
</code></pre>

    <h3 class="font-semibold mb-2">3. Code Splitting & Lazy Loading</h3>
    <p>Split large components to reduce initial load and improve performance.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>import React, { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;My App&lt;/h1&gt;
      &lt;Suspense fallback=&lt;p&gt;Loading...&lt;/p&gt;&gt;
        &lt;HeavyComponent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}</code></pre>
    <p><code>React.lazy()</code> with <code>Suspense</code> loads components only when needed.</p>

    <h3 class="font-semibold mb-2">4. Minification & Compression</h3>
    <p>Build tools automatically minify JS/CSS. Serve assets with gzip or Brotli compression for faster downloads.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Deployment Platforms</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Vercel:</strong> Optimized for React/Next.js, GitHub integration, auto deploy on push, supports SSR, SSG, API routes.</li>
      <li><strong>Netlify:</strong> Supports static React apps, drag-and-drop or GitHub integration, auto build & deploy.</li>
      <li><strong>AWS S3 + CloudFront:</strong> Host static React apps on S3 bucket, serve via CloudFront CDN.</li>
      <li><strong>GitHub Pages:</strong> Free hosting for static sites. Use <code>gh-pages</code> package for deployment.</li>
      <li><strong>Others:</strong> Firebase Hosting, Render, Azure Static Web Apps, etc.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Best Practices for Production</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Use environment variables (<code>.env</code>) for API URLs and sensitive data.</li>
      <li>Optimize images, fonts, and other assets for faster load.</li>
      <li>Ensure HTTPS is enabled on production domains.</li>
      <li>Test production build locally with simple servers:</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install -g serve
serve -s build
</code></pre>

    <h2 class="text-xl font-semibold text-green-600 mt-6">✅ Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Optimize builds with minification, code splitting, compression, and bundle analysis.</li>
      <li>Deploy on platforms like Vercel, Netlify, AWS S3, or GitHub Pages as fits your needs.</li>
      <li>Ensure fast loading times, SEO friendliness, and a secure production environment.</li>
    </ul>
  `,
          code: `
// Code splitting & lazy loading example
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;

// Deployment with GitHub Pages example package.json scripts
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
  `,
          explanation: `
  - Use build commands to generate optimized static assets with minification and hashing.
  - Analyze bundles to find large dependencies or optimization opportunities.
  - Implement lazy loading and code splitting to improve initial load speed.
  - Deploy on modern hosting platforms that support React apps and static assets.
  - Use environment variables securely for configuration in production.
  - Always test production builds locally before deploying live.
  `,
          task: `
  Task:
  1. Run production build of React app using npm run build.
  2. Analyze generated bundle with source-map-explorer.
  3. Integrate React.lazy and Suspense for component lazy loading.
  4. Choose a deployment platform (Vercel/Netlify/GitHub Pages) and deploy app.
  5. Configure environment variables and ensure assets are optimized.
  6. Test live deployment and measure loading performance.
  `
        },
      ]

    }
  };

  const finalProject = {
    title: "Final Project: Complete Restaurant Website Styling",
    description: "Style the complete restaurant website using all the CSS concepts you've learned, including responsive design, Flexbox, Grid, transitions, animations, variables, and advanced selectors.",
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
│   ├── variables.css          (CSS Variables for theme colors, fonts)
│   ├── base.css               (Reset and global styles)
│   ├── layout.css             (Flexbox & Grid layouts for header, footer, sections)
│   ├── components.css         (Navigation, cards, buttons, forms)
│   ├── animations.css         (Transitions, keyframe animations)
│   └── responsive.css         (Media queries for different screen sizes)
├── images/
│   └── (logo, hero, food images)
└── index.html (Link all CSS files properly)`,
    bonus: [
      "Create a dark/light theme switch using CSS variables",
      "Add a sticky header that changes style on scroll",
      "Include animated hover effects on menu cards",
      "Add a hero section with animated background or text",
      "Implement CSS Grid for a testimonial or gallery section",
      "Use clip-path or masking for creative shapes in images"
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
          Complete React js Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in React js from Beginner to Advanced Level
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

export default ReactNotesPage;
