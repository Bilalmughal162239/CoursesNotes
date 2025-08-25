import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const CssNotesPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level CSS Notes",
      topics: [
        {
          title: "Introduction to CSS",
          theory: `
<h2>Introduction to CSS</h2>
<p>CSS (Cascading Style Sheets) is used to style HTML elements and control the appearance of web pages. 
It allows you to change colors, fonts, spacing, layout, and overall design without altering the HTML content itself.</p>

<h3>1. What is CSS?</h3>
<ul>
  <li>CSS styles the appearance of web pages.</li>
  <li>It controls layout, colors, fonts, spacing, and more.</li>
</ul>

<h3>2. CSS Syntax</h3>
<p>A CSS rule consists of a selector, a property, and a value.</p>
<p><strong>Syntax:</strong> <code>selector { property: value; }</code></p>
<p><strong>Example:</strong> <code>p { color: blue; font-size: 18px; }</code></p>

<h3>3. Types of CSS</h3>
<p>There are three main types of CSS:</p>

<h4>a) Inline CSS</h4>
<ul>
  <li>Applied directly to an HTML element using the <code>style</code> attribute.</li>
  <li>Example: <code>&lt;p style="color: red;"&gt;Text&lt;/p&gt;</code></li>
</ul>

<h4>b) Internal CSS</h4>
<ul>
  <li>Placed inside a <code>&lt;style&gt;</code> tag within the HTML <code>&lt;head&gt;</code> section.</li>
  <li>Example:
    <pre>
&lt;style&gt;
  p { color: green; }
&lt;/style&gt;
    </pre>
  </li>
</ul>

<h4>c) External CSS</h4>
<ul>
  <li>Placed in a separate <code>.css</code> file and linked to HTML using <code>&lt;link&gt;</code> tag.</li>
  <li>Example:
    <pre>
&lt;link rel="stylesheet" href="styles.css"&gt;
    </pre>
  </li>
</ul>
`,

          code: `
<!-- Inline CSS -->
<p style="color: blue; font-size: 18px;">This paragraph uses inline CSS.</p>

<!-- Internal CSS -->
<style>
  .internal-example {
    color: green;
    font-size: 20px;
  }
</style>
<p class="internal-example">This paragraph uses internal CSS.</p>

<!-- External CSS -->
<!-- Assume 'styles.css' contains:
p.external-example { color: red; font-size: 22px; }
-->
<link rel="stylesheet" href="styles.css">
<p class="external-example">This paragraph uses external CSS.</p>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li><strong>Inline CSS:</strong> Quick for small, single changes but not recommended for large projects.</li>
  <li><strong>Internal CSS:</strong> Useful for styling a single page; keeps all styles in one place.</li>
  <li><strong>External CSS:</strong> Ideal for multiple pages sharing the same style; keeps HTML clean and consistent.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page with three paragraphs:</p>
<ol>
  <li>Apply inline CSS to the first paragraph to make the text blue and font size 18px.</li>
  <li>Apply internal CSS to the second paragraph to make the text green and font size 20px.</li>
  <li>Apply external CSS to the third paragraph to make the text red and font size 22px.</li>
</ol>
<p>Observe how each method affects the paragraph.</p>
`
        },
        {
          title: "CSS Selectors",
          theory: `
<h2>CSS Selectors</h2>
<p>CSS selectors are patterns used to select HTML elements that you want to style. They allow you to target elements in many different ways.</p>

<h3>1. Basic Selectors</h3>
<ul>
  <li><strong>Universal selector:</strong> <code>*</code> selects all elements.</li>
  <li><strong>Type selector:</strong> Selects elements by their tag name, e.g., <code>p</code>, <code>h1</code>.</li>
  <li><strong>Class selector:</strong> Selects elements with a specific class, e.g., <code>.className</code>.</li>
  <li><strong>ID selector:</strong> Selects element by ID, e.g., <code>#idName</code>.</li>
  <li><strong>Descendant selector:</strong> Selects elements inside another element, e.g., <code>div p</code>.</li>
  <li><strong>Child selector:</strong> Selects direct children only, e.g., <code>div > p</code>.</li>
  <li><strong>Adjacent sibling selector:</strong> Selects element immediately after another, e.g., <code>h1 + p</code>.</li>
  <li><strong>General sibling selector:</strong> Selects all siblings after an element, e.g., <code>h1 ~ p</code>.</li>
</ul>

<h3>2. Group Selector</h3>
<p>Select multiple elements at once, e.g., <code>p, h1, h2</code>.</p>

<h3>3. Attribute Selectors</h3>
<p>Select elements with a specific attribute or value, e.g., <code>input[type="text"]</code>.</p>

<h3>4. Pseudo-classes</h3>
<p>Select elements in a special state, e.g., <code>:hover</code>, <code>:focus</code>, <code>:first-child</code>.</p>

<h3>5. Pseudo-elements</h3>
<p>Select and style parts of elements, e.g., <code>::before</code>, <code>::after</code>.</p>
`,

          code: `
<!-- Universal selector -->
<style>
  * {
    margin: 0;
    padding: 0;
  }

  /* Type selector */
  p {
    color: blue;
  }

  /* Class selector */
  .highlight {
    background-color: yellow;
  }

  /* ID selector */
  #main-title {
    font-size: 24px;
    color: green;
  }

  /* Descendant selector */
  div p {
    font-style: italic;
  }

  /* Child selector */
  div > p {
    font-weight: bold;
  }

  /* Adjacent sibling selector */
  h1 + p {
    color: red;
  }

  /* General sibling selector */
  h1 ~ p {
    color: purple;
  }

  /* Group selector */
  h1, h2, p {
    font-family: Arial, sans-serif;
  }

  /* Attribute selector */
  input[type="text"] {
    border: 2px solid blue;
  }

  /* Pseudo-classes */
  a:hover {
    color: orange;
  }

  input:focus {
    border-color: green;
  }

  p:first-child {
    font-size: 20px;
  }

  /* Pseudo-elements */
  p::before {
    content: "🔥 ";
  }

  p::after {
    content: " ✅";
  }
</style>

<h1 id="main-title">CSS Selectors Example</h1>
<p class="highlight">This paragraph demonstrates class selector and pseudo-elements.</p>
<div>
  <p>Descendant and child selector example inside div.</p>
</div>
<p>General sibling example after h1.</p>
<input type="text" placeholder="Attribute selector example">
<a href="#">Hover over me</a>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Selectors are used to target HTML elements in different ways.</li>
  <li>Basic selectors help select elements by type, class, ID, or relationship.</li>
  <li>Group selectors apply the same style to multiple elements.</li>
  <li>Attribute selectors target elements based on attributes and values.</li>
  <li>Pseudo-classes allow styling based on state, e.g., hover or focus.</li>
  <li>Pseudo-elements let you style part of an element like content before or after.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page with:</p>
<ol>
  <li>At least one element using universal selector styling.</li>
  <li>One paragraph using class selector and pseudo-elements.</li>
  <li>An input field styled using attribute selector.</li>
  <li>Hover effect on a link using pseudo-class.</li>
  <li>Use descendant and child selectors in a div container.</li>
</ol>
<p>Observe how each selector affects the elements differently.</p>
`
        },
        {
          title: "CSS Properties",
          theory: `
<h2>CSS Properties</h2>
<p>CSS properties are used to style HTML elements. They control text, layout, colors, spacing, positioning, and more.</p>

<h3>1. Text and Font Properties</h3>
<ul>
  <li><code>font-family</code>: Sets the font of the text.</li>
  <li><code>font-size</code>: Sets the size of the text.</li>
  <li><code>font-weight</code>: Sets the boldness of text (normal, bold, 100–900).</li>
  <li><code>line-height</code>: Controls spacing between lines.</li>
  <li><code>text-align</code>: Aligns text (left, center, right, justify).</li>
  <li><code>text-transform</code>: Changes text case (uppercase, lowercase, capitalize).</li>
  <li><code>letter-spacing</code>: Controls spacing between letters.</li>
  <li><code>word-spacing</code>: Controls spacing between words.</li>
</ul>

<h3>2. Box Model</h3>
<p>Every HTML element is a box. Box model consists of:</p>
<ul>
  <li><strong>Content:</strong> The actual content inside the box.</li>
  <li><strong>Padding:</strong> Space between content and border.</li>
  <li><strong>Border:</strong> Surrounds the padding and content.</li>
  <li><strong>Margin:</strong> Space outside the border.</li>
  <li><strong>Box-sizing:</strong> Defines how width and height are calculated: <code>border-box</code>, <code>content-box</code>.</li>
</ul>

<h3>3. Backgrounds and Colors</h3>
<ul>
  <li><code>background-color</code>: Sets background color.</li>
  <li><code>background-image</code>: Sets background image.</li>
  <li><code>color</code>: Sets text color.</li>
  <li><code>opacity</code>: Controls transparency of element.</li>
</ul>

<h3>4. Display and Visibility</h3>
<ul>
  <li><code>display</code>: Controls element type: <code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>, <code>none</code>.</li>
  <li><code>visibility</code>: Shows or hides element (<code>visible</code>, <code>hidden</code>).</li>
  <li><code>z-index</code>: Controls stacking order of elements.</li>
</ul>

<h3>5. Positioning</h3>
<ul>
  <li><code>position</code>: Defines how an element is positioned: <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>.</li>
  <li><code>top, right, bottom, left</code>: Set offset values when position is not static.</li>
</ul>
`,

          code: `
<style>
  /* Text and Font Properties */
  p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 5px;
    color: darkblue;
  }

  /* Box Model */
  .box {
    width: 200px;
    padding: 10px;
    margin: 20px;
    border: 2px solid black;
    box-sizing: border-box;
    background-color: lightgray;
  }

  /* Backgrounds and Colors */
  .background {
    background-color: lightyellow;
    background-image: url('https://via.placeholder.com/150');
    opacity: 0.9;
  }

  /* Display and Visibility */
  .flex-container {
    display: flex;
    gap: 10px;
  }

  .hidden {
    visibility: hidden;
  }

  /* Positioning */
  .relative-box {
    position: relative;
    top: 10px;
    left: 20px;
    background-color: lightgreen;
    padding: 10px;
  }

  .absolute-box {
    position: absolute;
    top: 50px;
    right: 30px;
    background-color: lightcoral;
    padding: 10px;
  }
</style>

<p>This paragraph demonstrates text and font properties.</p>

<div class="box">This is a box demonstrating box model properties.</div>

<div class="background">Background and color properties example.</div>

<div class="flex-container">
  <div>Flex Item 1</div>
  <div>Flex Item 2</div>
  <div>Flex Item 3</div>
</div>

<div class="relative-box">Relative Position Example</div>
<div class="absolute-box">Absolute Position Example</div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Text and font properties control how your text looks.</li>
  <li>Box model defines spacing and size of elements.</li>
  <li>Backgrounds and colors enhance visual design.</li>
  <li>Display and visibility control element type and whether it is visible.</li>
  <li>Positioning allows precise placement of elements using offsets.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page using the following:</p>
<ol>
  <li>A paragraph styled with font-family, font-size, font-weight, and text-transform.</li>
  <li>A box demonstrating padding, margin, border, and box-sizing.</li>
  <li>A div with background color and image.</li>
  <li>A flex container with three items.</li>
  <li>Two boxes demonstrating relative and absolute positioning.</li>
</ol>
<p>Observe how each property changes the layout and appearance of elements.</p>
`
        },
        {
          title: "CSS Layouts",
          theory: `
<h2>CSS Layouts</h2>
<p>CSS layouts define how elements are arranged on a web page. There are several techniques, including floats, flexbox, grid, and positioning.</p>

<h3>1. CSS Floats</h3>
<p>Floats were used in the past to create layouts by floating elements left or right. They are less common today but still exist for legacy support.</p>

<h3>2. Flexbox</h3>
<p>Flexbox is a modern layout system that provides easy alignment and spacing of elements.</p>
<ul>
  <li><strong>Container:</strong> Use <code>display: flex;</code> on the parent.</li>
  <li><strong>Items:</strong> Control behavior with <code>flex-grow</code>, <code>flex-shrink</code>, <code>justify-content</code>, <code>align-items</code>.</li>
</ul>

<h3>3. Grid Layout</h3>
<p>CSS Grid allows creating complex layouts with rows and columns.</p>
<ul>
  <li><strong>Container:</strong> Use <code>display: grid;</code> on the parent.</li>
  <li><strong>Items:</strong> Control size and position using <code>grid-template-columns</code>, <code>grid-template-rows</code>.</li>
  <li><strong>Positioning:</strong> Place items using <code>grid-column</code> and <code>grid-row</code>.</li>
</ul>

<h3>4. Layouts with display and position</h3>
<p>You can center content using different methods:</p>
<ul>
  <li><strong>Margin auto:</strong> <code>margin: auto;</code> centers block elements.</li>
  <li><strong>Flex:</strong> <code>justify-content: center; align-items: center;</code> centers items in a flex container.</li>
  <li><strong>Grid:</strong> <code>place-items: center;</code> centers content in a grid container.</li>
</ul>
`,

          code: `
<style>
  /* Floats */
  .float-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    float: left;
    margin: 10px;
  }

  /* Flexbox */
  .flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    background-color: lightgray;
  }
  .flex-item {
    background-color: coral;
    padding: 20px;
  }

  /* Grid Layout */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px;
    gap: 10px;
    background-color: #f2f2f2;
  }
  .grid-item {
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Centering with margin auto */
  .center-auto {
    width: 200px;
    margin: auto;
    background-color: lightpink;
    padding: 20px;
  }

  /* Centering with Flex */
  .center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: lightyellow;
  }

  /* Centering with Grid */
  .center-grid {
    display: grid;
    place-items: center;
    height: 150px;
    background-color: lightcoral;
  }
</style>

<!-- Float Example -->
<div class="float-box"></div>
<div class="float-box"></div>
<div class="float-box"></div>

<!-- Flexbox Example -->
<div class="flex-container">
  <div class="flex-item">Flex 1</div>
  <div class="flex-item">Flex 2</div>
  <div class="flex-item">Flex 3</div>
</div>

<!-- Grid Example -->
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

<!-- Centering Examples -->
<div class="center-auto">Centered with margin auto</div>
<div class="center-flex">Centered with flex</div>
<div class="center-grid">Centered with grid</div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Floats were used for layout but are now mostly replaced by flexbox and grid.</li>
  <li>Flexbox makes it easy to align and distribute space among items in a container.</li>
  <li>Grid allows precise control over rows and columns, useful for complex layouts.</li>
  <li>Content can be centered using margin auto, flex, or grid depending on layout requirements.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page demonstrating:</p>
<ol>
  <li>Three floated boxes side by side.</li>
  <li>A flex container with three items aligned horizontally and centered vertically.</li>
  <li>A grid container with six items arranged in two rows and three columns.</li>
  <li>Three methods of centering content: margin auto, flex, and grid.</li>
</ol>
<p>Observe how each layout technique behaves differently.</p>
`
        },
        {
          title: "CSS Transitions & Animations",
          theory: `
<h2>CSS Transitions & Animations</h2>
<p>CSS transitions and animations allow you to create smooth changes and animated effects on HTML elements.</p>

<h3>1. Transitions</h3>
<p>Transitions allow properties to change gradually over time when an element's state changes.</p>
<ul>
  <li><code>transition-property</code>: Specifies the CSS property to animate.</li>
  <li><code>transition-duration</code>: Duration of the transition (e.g., 0.5s, 2s).</li>
  <li><code>transition-timing-function</code>: Defines the speed curve (e.g., linear, ease, ease-in, ease-out).</li>
  <li><code>transition-delay</code>: Delay before the transition starts.</li>
</ul>

<h3>2. Keyframe Animations</h3>
<p>Keyframe animations allow defining multiple stages of an animation for smooth effects.</p>
<ul>
  <li><code>@keyframes</code>: Define the animation sequence using percentages or from/to.</li>
  <li><code>animation-name</code>: Name of the keyframe animation.</li>
  <li><code>animation-duration</code>: How long the animation lasts.</li>
  <li><code>animation-timing-function</code>: Speed curve of the animation.</li>
</ul>
`,

          code: `
<style>
  /* Transitions Example */
  .transition-box {
    width: 150px;
    height: 150px;
    background-color: lightblue;
    transition-property: background-color, transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    margin: 20px;
  }
  .transition-box:hover {
    background-color: coral;
    transform: scale(1.2);
  }

  /* Keyframe Animation Example */
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
    100% { transform: translateY(0); }
  }

  .animated-box {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    animation-name: bounce;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    margin: 20px;
  }
</style>

<div class="transition-box">Hover me</div>
<div class="animated-box"></div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Transitions provide a smooth way to change property values when an element changes state, like on hover.</li>
  <li>Keyframe animations allow more complex animations by defining multiple stages.</li>
  <li>Using <code>transition-duration</code> and <code>animation-duration</code>, you control the speed of changes.</li>
  <li>Tweaking <code>transition-timing-function</code> or <code>animation-timing-function</code> gives realistic motion effects.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page demonstrating:</p>
<ol>
  <li>A box that changes background color and grows in size on hover using transitions.</li>
  <li>A box that moves up and down continuously using a keyframe animation.</li>
  <li>Experiment with different <code>transition-timing-function</code> and <code>animation-timing-function</code> values.</li>
</ol>
`
        },
        {
          title: "Responsive Design",
          theory: `
<h2>Responsive Design</h2>
<p>Responsive design ensures that web pages look good on all devices, including desktops, tablets, and mobile phones.</p>

<h3>1. Media Queries</h3>
<p>Media queries allow applying CSS rules based on screen size or device characteristics.</p>
<ul>
  <li><code>@media</code> rules are used to define conditions for different styles.</li>
  <li><code>min-width</code>: Apply styles when screen width is greater than or equal to a value.</li>
  <li><code>max-width</code>: Apply styles when screen width is less than or equal to a value.</li>
</ul>

<h3>2. Mobile-First Design</h3>
<p>Start designing for small screens first, then adjust for larger screens using media queries.</p>

<h3>3. Viewport Units</h3>
<p>Viewport units help create responsive sizing based on the screen size:</p>
<ul>
  <li><code>vw</code>: 1% of viewport width</li>
  <li><code>vh</code>: 1% of viewport height</li>
  <li><code>vmin</code>: Minimum of <code>vw</code> and <code>vh</code></li>
  <li><code>vmax</code>: Maximum of <code>vw</code> and <code>vh</code></li>
</ul>
`,

          code: `
<style>
  /* Mobile-First default styles */
  body {
    font-family: Arial, sans-serif;
  }
  .container {
    width: 90vw;
    margin: 10px auto;
    background-color: lightblue;
    padding: 20px;
    text-align: center;
  }

  /* Media Queries for larger screens */
  @media (min-width: 600px) {
    .container {
      width: 80vw;
      background-color: lightgreen;
    }
  }

  @media (min-width: 900px) {
    .container {
      width: 70vw;
      background-color: lightcoral;
    }
  }

  /* Responsive font size using viewport units */
  h1 {
    font-size: 5vw;
  }
</style>

<div class="container">
  <h1>Responsive Container</h1>
  <p>Resize the browser window to see changes.</p>
</div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Media queries allow applying different styles for different screen sizes.</li>
  <li>Mobile-first design ensures good experience on small devices before adapting to larger screens.</li>
  <li>Viewport units (<code>vw</code>, <code>vh</code>) help make text and elements scale proportionally with screen size.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create a responsive HTML page:</p>
<ol>
  <li>Use a container div that changes width and background color at different screen sizes using media queries.</li>
  <li>Make headings scale using viewport units.</li>
  <li>Test on different screen sizes to see the responsive behavior.</li>
</ol>
`
        },
        {
          title: "CSS Variables",
          theory: `
<h2>CSS Variables (Custom Properties)</h2>
<p>CSS Variables, also called custom properties, allow you to store values that can be reused throughout your stylesheet. They make it easier to maintain and update styles.</p>

<h3>1. Custom Properties</h3>
<ul>
  <li>Defined using a name that starts with <code>--</code>, e.g., <code>--main-color</code>.</li>
  <li>Declared inside a selector, often <code>:root</code> for global scope.</li>
</ul>

<h3>2. Usage</h3>
<ul>
  <li>Access a variable using <code>var(--var-name)</code>.</li>
  <li>Variables can be used for colors, fonts, spacing, or any CSS property.</li>
</ul>
`,

          code: `
<style>
  /* Define CSS variables */
  :root {
    --main-color: #4CAF50;
    --secondary-color: #FFC107;
    --font-size: 18px;
  }

  /* Use CSS variables */
  body {
    font-family: Arial, sans-serif;
    font-size: var(--font-size);
    background-color: var(--secondary-color);
    color: white;
    padding: 20px;
  }

  h1 {
    color: var(--main-color);
  }

  p {
    color: white;
  }
</style>

<h1>CSS Variables Example</h1>
<p>This paragraph uses the background and font size defined by CSS variables.</p>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>CSS variables are reusable values that simplify maintenance.</li>
  <li>Defining variables in <code>:root</code> makes them global across the page.</li>
  <li>Variables are accessed with <code>var(--var-name)</code> for colors, fonts, spacing, etc.</li>
  <li>Changing the variable value updates all elements using it, making style changes efficient.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create a page that uses CSS variables to define:</p>
<ol>
  <li>Primary and secondary colors.</li>
  <li>Font size for body text.</li>
  <li>Apply the variables to headings, paragraphs, and background colors.</li>
  <li>Then change the variable values and observe how all elements update automatically.</li>
</ol>
`
        }
      ]
    },

    intermediate: {
      title: "Intermediate Level CSS",
      topics: [
        {
          title: "CSS Pseudo-classes & Pseudo-elements",
          theory: `
<h2>CSS Pseudo-classes & Pseudo-elements</h2>
<p>Pseudo-classes and pseudo-elements allow targeting elements based on their state or parts of an element.</p>

<h3>1. Pseudo-classes</h3>
<ul>
  <li><code>:hover</code> – Styles when the user hovers over an element.</li>
  <li><code>:focus</code> – Styles when an element is focused.</li>
  <li><code>:nth-child(n)</code> – Styles the nth child of a parent element.</li>
  <li><code>:first-child / :last-child</code> – Styles the first or last child.</li>
</ul>

<h3>2. Pseudo-elements</h3>
<ul>
  <li><code>::before</code> – Inserts content before an element’s content.</li>
  <li><code>::after</code> – Inserts content after an element’s content.</li>
  <li><code>::first-letter / ::first-line</code> – Styles the first letter or first line of a text block.</li>
</ul>
`,
          code: `
<style>
  a:hover {
    color: red;
  }
  input:focus {
    border: 2px solid blue;
  }
  li:nth-child(odd) {
    background-color: #f0f0f0;
  }
  p::first-letter {
    font-size: 2em;
    color: green;
  }
  p::after {
    content: " ✔";
    color: orange;
  }
</style>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<p>This paragraph shows pseudo-elements and pseudo-classes.</p>
<input placeholder="Focus me">
<a href="#">Hover me</a>
`,
          explanation: `
<ul>
  <li>Pseudo-classes target elements based on interaction or position.</li>
  <li>Pseudo-elements let you style specific parts of elements or insert content.</li>
</ul>
`,
          task: `
<p>Task: Create a list and paragraph using pseudo-classes and pseudo-elements to:</p>
<ol>
  <li>Alternate background colors for list items.</li>
  <li>Change link color on hover.</li>
  <li>Add a decorative symbol after each paragraph.</li>
</ol>
`
        },
        {
          title: "CSS Transforms",
          theory: `
<h2>CSS Transforms</h2>
<p>CSS transforms allow you to modify the coordinate space of elements, enabling rotation, scaling, translation, and skewing.</p>
<ul>
  <li><code>translate(x, y)</code> – Moves an element horizontally and vertically.</li>
  <li><code>rotate(angle)</code> – Rotates an element.</li>
  <li><code>scale(x, y)</code> – Resizes an element.</li>
  <li><code>skew(x, y)</code> – Skews an element along X and Y axes.</li>
</ul>
`,
          code: `
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 20px;
    transition: transform 0.5s ease;
  }
  .box:hover {
    transform: translate(50px, 20px) rotate(20deg) scale(1.2);
  }
</style>

<div class="box"></div>
`,
          explanation: `
<ul>
  <li>Transforms allow dynamic visual changes without altering layout flow.</li>
  <li>Combining transforms like rotate, scale, and translate creates interactive effects.</li>
  <li>Use transitions for smooth animation when transform changes.</li>
</ul>
`,
          task: `
<p>Task: Create a div that transforms on hover using translate, rotate, and scale.</p>
`
        },
        {
          title: "CSS Variables & Theming",
          theory: `
<h2>CSS Variables & Theming</h2>
<p>Variables make styling reusable and easy to maintain. They are useful for creating themes.</p>
<ul>
  <li>Define: <code>--primary-color: #3498db;</code></li>
  <li>Use: <code>color: var(--primary-color);</code></li>
  <li>Change variable values dynamically to switch themes.</li>
</ul>
`,
          code: `
<style>
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
  }
  body {
    background-color: var(--secondary-color);
    color: white;
  }
  h1 {
    color: var(--primary-color);
  }
</style>

<h1>Theme Example</h1>
<p>Background and text colors use CSS variables.</p>
`,
          explanation: `
<ul>
  <li>Variables simplify updates: changing the variable changes all references.</li>
  <li>Ideal for dark/light themes or branding colors.</li>
</ul>
`,
          task: `
<p>Task: Create a page with CSS variables for primary and secondary colors and apply them to background and headings.</p>
`
        },
        {
          title: "CSS Clipping & Masking",
          theory: `
<h2>CSS Clipping & Masking</h2>
<p>Clipping and masking hide or reveal parts of elements for advanced design effects.</p>
<ul>
  <li><code>clip-path</code> – Clips an element into a shape (circle, polygon, ellipse).</li>
  <li><code>mask-image</code> – Hides parts of an element based on an image mask.</li>
</ul>
`,
          code: `
<style>
  .clip-box {
    width: 200px;
    height: 200px;
    background-color: coral;
    clip-path: circle(50% at 50% 50%);
    margin: 20px;
  }
</style>

<div class="clip-box"></div>
`,
          explanation: `
<ul>
  <li>Clipping changes the visible portion of an element.</li>
  <li>Masking uses images to control visibility, allowing creative effects.</li>
</ul>
`,
          task: `
<p>Task: Create a div clipped into a circle and experiment with polygon or ellipse shapes.</p>
`
        },
        {
          title: "CSS Scroll & Sticky",
          theory: `
<h2>CSS Scroll & Sticky</h2>
<p>These properties control scrolling behavior and element positioning.</p>
<ul>
  <li><code>overflow: auto | scroll | hidden</code> – Controls scrollbars.</li>
  <li><code>position: sticky</code> – Keeps an element fixed within its container until it scrolls past a point.</li>
  <li><code>scroll-behavior: smooth</code> – Smooth scrolling effect.</li>
</ul>
`,
          code: `
<style>
  .sticky-header {
    position: sticky;
    top: 0;
    background-color: lightgreen;
    padding: 10px;
    font-weight: bold;
  }
  .scroll-container {
    height: 150px;
    overflow-y: scroll;
    border: 1px solid #ccc;
  }
  .content {
    height: 400px;
    background: linear-gradient(lightblue, lightpink);
  }
</style>

<div class="sticky-header">I stick on top!</div>
<div class="scroll-container">
  <div class="content">Scroll this container</div>
</div>
`,
          explanation: `
<ul>
  <li>Sticky elements remain visible while scrolling within a parent container.</li>
  <li>Scroll containers with overflow allow scrolling content while keeping layout fixed.</li>
  <li>Smooth scroll enhances user experience when navigating to anchors.</li>
</ul>
`,
          task: `
<p>Task: Create a sticky header and a scrollable content box, then add smooth scrolling behavior.</p>
`
        },

      ]
    },
    advanced: {
      title: "Advance Level CSS",
      topics: [
        {
          title: "Advanced CSS Topics",
          theory: `
<h2>Advanced CSS Topics</h2>
<p>Once you are comfortable with basic CSS, these advanced topics help you write more maintainable, scalable, and efficient styles.</p>

<h3>1. CSS Grid vs Flexbox</h3>
<ul>
  <li><strong>Flexbox:</strong> Best for 1-dimensional layouts (row or column). Great for aligning items and distributing space in a single direction.</li>
  <li><strong>Grid:</strong> Best for 2-dimensional layouts (rows and columns). Useful for complex layouts where both rows and columns need control.</li>
  <li>Choose Flexbox for simpler layouts and Grid for complex page layouts.</li>
</ul>

<h3>2. CSS Preprocessors</h3>
<ul>
  <li><strong>SASS, LESS, Stylus:</strong> Extend CSS with variables, nesting, mixins, and functions for cleaner and reusable code.</li>
  <li>They need to be compiled into regular CSS before using in browsers.</li>
</ul>

<h3>3. CSS Frameworks</h3>
<ul>
  <li><strong>Bootstrap:</strong> Popular framework with ready-to-use components, grid system, and utilities.</li>
  <li><strong>Tailwind:</strong> Utility-first framework for fast styling with classes.</li>
  <li><strong>Foundation:</strong> Responsive front-end framework with grids, components, and accessibility features.</li>
</ul>

<h3>4. CSS Architecture</h3>
<ul>
  <li><strong>BEM (Block-Element-Modifier):</strong> Naming convention to organize CSS for readability and maintainability.</li>
  <li><strong>OOCSS (Object-Oriented CSS):</strong> Encourages separation of structure and skin to reuse styles.</li>
  <li><strong>SMACSS (Scalable and Modular Architecture for CSS):</strong> Methodology for categorizing CSS rules into base, layout, module, state, and theme.</li>
</ul>
`,

          code: `
<!-- This topic is mostly conceptual; small illustrative examples -->

<!-- Flexbox vs Grid -->
<style>
  /* Flexbox Example */
  .flex-container {
    display: flex;
    justify-content: space-between;
  }
  .flex-item {
    background-color: lightblue;
    padding: 10px;
    margin: 5px;
  }

  /* Grid Example */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
  }
  .grid-item {
    background-color: lightgreen;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="flex-container">
  <div class="flex-item">Flex 1</div>
  <div class="flex-item">Flex 2</div>
  <div class="flex-item">Flex 3</div>
</div>

<div class="grid-container">
  <div class="grid-item">Grid 1</div>
  <div class="grid-item">Grid 2</div>
  <div class="grid-item">Grid 3</div>
</div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Flexbox is ideal for aligning items in a single direction (row or column).</li>
  <li>Grid is ideal for complex layouts with rows and columns.</li>
  <li>Preprocessors like SASS and LESS add variables, nesting, and functions to CSS for maintainability.</li>
  <li>Frameworks like Bootstrap and Tailwind speed up development with reusable components and utility classes.</li>
  <li>CSS architecture methodologies (BEM, OOCSS, SMACSS) help organize code for scalability and readability.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create an HTML page that:</p>
<ol>
  <li>Includes a simple Flexbox container with 3 items aligned horizontally.</li>
  <li>Includes a simple Grid container with 3 items arranged in columns.</li>
  <li>Think about how you would use CSS variables or BEM naming in a real project.</li>
</ol>
<p>Note: This task is conceptual to understand which tool or methodology is suitable for different situations.</p>
`
        },
        {
          title: "CSS Optimization & Best Practices",
          theory: `
<h2>CSS Optimization & Best Practices</h2>
<p>Optimizing CSS ensures faster page load times, better maintainability, and consistent behavior across browsers.</p>

<h3>1. Performance Tips</h3>
<ul>
  <li><strong>Minify and compress CSS:</strong> Remove spaces, comments, and unnecessary code to reduce file size.</li>
  <li><strong>Reduce the number of CSS selectors:</strong> Avoid overly complex selectors to improve performance.</li>
  <li><strong>Use shorthand properties:</strong> Combine properties like <code>margin</code> and <code>padding</code> to reduce code.</li>
</ul>

<h3>2. Cross-Browser Compatibility</h3>
<ul>
  <li><strong>Prefixing:</strong> Use vendor prefixes like <code>-webkit-</code>, <code>-moz-</code>, <code>-ms-</code> for compatibility with older browsers.</li>
  <li><strong>Testing:</strong> Always test your site in multiple browsers to ensure consistent appearance.</li>
</ul>

<h3>3. Maintainable CSS</h3>
<ul>
  <li><strong>Naming conventions:</strong> Use methodologies like BEM (Block-Element-Modifier) to organize your CSS.</li>
  <li><strong>Modular CSS files:</strong> Split CSS into multiple files based on components or sections to keep it maintainable.</li>
</ul>
`,

          code: `
<!-- Example of optimized, maintainable CSS -->
<style>
  /* Using shorthand and BEM naming */
  .card {
    margin: 10px; /* shorthand for margin */
    padding: 15px; /* shorthand for padding */
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }

  .card__title {
    font-size: 1.5rem;
    color: #333;
  }

  .card__content {
    font-size: 1rem;
    color: #666;
  }

  /* Cross-browser compatible gradient with prefixes */
  .button {
    background: -webkit-linear-gradient(left, #4CAF50, #2E7D32);
    background: -moz-linear-gradient(left, #4CAF50, #2E7D32);
    background: linear-gradient(to right, #4CAF50, #2E7D32);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
</style>

<div class="card">
  <h2 class="card__title">Card Title</h2>
  <p class="card__content">This is an example of maintainable and optimized CSS.</p>
  <button class="button">Click Me</button>
</div>
`,

          explanation: `
<p><strong>Explanation:</strong></p>
<ul>
  <li>Minifying CSS reduces file size and improves page load speed.</li>
  <li>Shorthand properties and simpler selectors make CSS more efficient.</li>
  <li>Vendor prefixes ensure older browsers render styles correctly.</li>
  <li>Maintaining modular CSS and using naming conventions like BEM keeps code organized and scalable.</li>
</ul>
`,

          task: `
<p><strong>Task:</strong></p>
<p>Create a simple HTML page demonstrating:</p>
<ol>
  <li>A card component using BEM naming conventions.</li>
  <li>Shorthand CSS properties for margin and padding.</li>
  <li>A button with a cross-browser gradient using vendor prefixes.</li>
  <li>Consider splitting CSS into separate modular files if the page had multiple components.</li>
</ol>
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
          Complete Node js Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master Node js from Beginner to Advanced Level
        </p>
      </header>

      {/* Level Navigation */}
      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto container">
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

export default CssNotesPage;
