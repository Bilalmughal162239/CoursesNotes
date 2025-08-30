import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const BootstrapNotes = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level Notes",
      topics: [
        {
          title: '1. Introduction to Bootstrap',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Introduction to Bootstrap</h2>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">What is Bootstrap?</h3>
    <p class="text-gray-600 mb-3">
      <strong>Bootstrap</strong> is a free front-end framework designed for faster and easier web development. 
      It allows developers to create responsive and attractive websites efficiently.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Key Features of Bootstrap</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>Pre-built Templates:</strong> Includes ready-made HTML, CSS, and JavaScript templates for typography, forms, buttons, and more.</li>
      <li><strong>Built-in Classes:</strong> Numerous built-in classes minimize the need for custom CSS, making design faster.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Responsive Web Design</h3>
    <p class="text-gray-600"><strong>What is Responsive Web Design?</strong> Websites automatically adjust layout and appearance based on screen size.</p>
    <p class="text-gray-600 mb-3"><strong>Benefits:</strong> No need to create separate versions for different devices, saving time and resources.</p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Using Media Queries</h3>
    <p class="text-gray-600 mb-3">
      <strong>CSS Media Queries:</strong> Allow responsive design but require more coding. 
      Bootstrap simplifies this process with built-in utilities.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Bootstrap 5 Overview</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>Latest Version:</strong> Bootstrap 5 focuses on responsive, mobile-first websites.</li>
      <li><strong>No jQuery Dependency:</strong> Unlike older versions, Bootstrap 5 does not need jQuery, making integration easier.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Browser Compatibility</h3>
    <p class="text-gray-600 mb-3"><strong>Modern Browser Support:</strong> Works with all modern browsers, ensuring consistent user experience.</p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">Mobile-First Approach</h3>
    <p class="text-gray-600 mb-3">
      <strong>Core Framework Styles:</strong> Mobile-first styles are built into Bootstrap, ensuring smooth adaptation to mobile devices.
    </p>
  `,
          code: ``,
          explanation: 'This section introduces Bootstrap, its key features, benefits of responsive design, and what makes Bootstrap 5 unique.',
          task: 'Write a short note on why Bootstrap is called a "mobile-first framework".'
        },
        {
          title: '2. Download Bootstrap',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Download Bootstrap</h2>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">1. Introduction to Bootstrap 5</h3>
    <p class="text-gray-600 mb-3">
      Bootstrap 5 is a popular free and open-source front-end framework. 
      It is used to create responsive, modern, and mobile-friendly websites quickly and efficiently.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">2. Downloading Bootstrap 5</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Visit the official website: <a href="https://getbootstrap.com" class="text-blue-500 underline">getbootstrap.com</a></li>
      <li>Click the <strong>Download</strong> button to get the latest version.</li>
      <li>You will receive a <strong>.zip file</strong> that contains all required CSS and JavaScript files.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">3. Extracting Files</h3>
    <p class="text-gray-600 mb-3">
      After downloading, extract the <code class="bg-gray-100 px-1 rounded">.zip</code> file. 
      The important files are located inside the <code class="bg-gray-100 px-1 rounded">CSS</code> and 
      <code class="bg-gray-100 px-1 rounded">JS</code> folders.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">4. Using Bootstrap 5 in a Project</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Link <code class="bg-gray-100 px-1 rounded">bootstrap.min.css</code> and <code class="bg-gray-100 px-1 rounded">bootstrap.min.js</code> in your HTML file.</li>
      <li>Always use the <strong>minified</strong> versions in production because they are smaller and load faster.</li>
      <li>You can use any editor (e.g., Dreamweaver, VS Code, Sublime) to build your project.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">5. Using Bootstrap 5 from a CDN</h3>
    <p class="text-gray-600 mb-3">
      Instead of downloading, you can use Bootstrap directly from a <strong>CDN (Content Delivery Network)</strong>.
    </p>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Copy the CDN links from <a href="https://getbootstrap.com" class="text-blue-500 underline">Bootstrap's official website</a>.</li>
      <li>Paste them inside your HTML file’s <code class="bg-gray-100 px-1 rounded">&lt;head&gt;</code> and before the closing <code class="bg-gray-100 px-1 rounded">&lt;/body&gt;</code> tag.</li>
      <li>This method is faster and doesn’t require local downloads.</li>
    </ul>
  `,
          code: ``,
          explanation: 'This section explains different ways to set up Bootstrap: downloading, extracting files, linking them to a project, and using Bootstrap via CDN.',
          task: 'Add Bootstrap 5 to a new HTML file using the CDN method and create a simple webpage with a styled button.'
        },
        {
          title: '3. Containers and Container-Fluid',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Containers and Container-Fluid</h2>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">1. Introduction to Containers</h3>
    <p class="text-gray-600 mb-3">
      Containers are fundamental to <strong>Bootstrap 5</strong>, providing structure for website content. 
      Think of a container as a wrapper, like how a toffee is wrapped — inside it, all elements 
      (headers, footers, navigation, etc.) are placed.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">2. Purpose of Containers</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Gather content inside a defined wrapper area.</li>
      <li>Apply styles uniformly — anything applied to the container affects the content inside.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">3. Types of Container Classes</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><code class="bg-gray-100 px-1 rounded">.container</code> → Fixed-width responsive container with spacing on left and right.</li>
      <li><code class="bg-gray-100 px-1 rounded">.container-fluid</code> → Full-width container spanning the entire viewport.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">4. Practical Example</h3>
    <p class="text-gray-600 mb-3">
      Create an HTML file, link Bootstrap via <strong>CDN</strong> or local files, and use 
      <code class="bg-gray-100 px-1 rounded">&lt;div class="container"&gt;</code> to wrap headers, paragraphs, and content.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">5. Spacing and Margins</h3>
    <p class="text-gray-600 mb-3">
      Containers provide automatic padding/margins.  
      Example: <code class="bg-gray-100 px-1 rounded">m-3</code> adds margin, 
      <code class="bg-gray-100 px-1 rounded">p-5</code> adds padding.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">6. Container vs. Container-Fluid</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>.container:</strong> Fixed-width with side margins, ideal for consistent layouts.</li>
      <li><strong>.container-fluid:</strong> Stretches full width, ideal for fluid/full-width designs.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">7. Spacing & Alignment Utilities</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><code class="bg-gray-100 px-1 rounded">m, mt, mb, ml, mr</code> → Margin classes</li>
      <li><code class="bg-gray-100 px-1 rounded">p, pt, pb, pl, pr</code> → Padding classes</li>
      <li><code class="bg-gray-100 px-1 rounded">bg-dark</code> & <code class="bg-gray-100 px-1 rounded">text-white</code> → Dark background with white text</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">8. Responsive Behavior</h3>
    <p class="text-gray-600 mb-3">
      Containers adjust based on screen size:
      <strong>.container</strong> adapts widths, while <strong>.container-fluid</strong> always spans full width.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">9. Example: Full-Width Dark Container</h3>
    <p class="text-gray-600 mb-3">
      Use <code class="bg-gray-100 px-1 rounded">.container-fluid.bg-dark.text-white</code> to create 
      a full-width dark section with white text.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">10. Types of Containers</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><code>.container-sm</code> → Small devices (tablets)</li>
      <li><code>.container-md</code> → Medium devices (laptops)</li>
      <li><code>.container-lg</code> → Large devices</li>
      <li><code>.container-xl</code> → Extra-large devices</li>
      <li><code>.container-xxl</code> → Very large displays</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">11. Responsive Design Example</h3>
    <p class="text-gray-600 mb-3">
      On screens &lt; 576px → container = 100%.  
      At ≥576px → 540px wide.  
      Larger screens → width increases progressively.
    </p>
  `,
          code: `
    <!-- Example: Container vs Container-Fluid -->
    <div class="container bg-light p-3">
      <h2>Fixed Container</h2>
      <p>This container has fixed side margins.</p>
    </div>

    <div class="container-fluid bg-dark text-white p-3 mt-3">
      <h2>Fluid Container</h2>
      <p>This container spans full width.</p>
    </div>
  `,
          explanation: 'Containers are the base layout structure in Bootstrap. The .container class provides a fixed-width responsive wrapper, while .container-fluid expands to the full width of the viewport. They ensure consistent spacing, responsiveness, and structure across different devices.',
          task: 'Create two sections on a webpage: one using .container with padding and another using .container-fluid with bg-dark and text-white.'
        },
        {
          title: '4. Bootstrap 5 Grid System',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Bootstrap 5 Grid System</h2>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">1. Introduction</h3>
    <p class="text-gray-600 mb-3">
      The <strong>Bootstrap 5 Grid System</strong> is the foundation of responsive layout design.  
      It organizes content into rows and columns, helping developers create flexible, mobile-first websites.
    </p>
    <div class="bg-gray-100 p-3 rounded mb-4">
      <code>&lt;div class="container-sm"&gt;Small Device Content&lt;/div&gt;</code><br>
      <code>&lt;div class="container-md"&gt;Medium Device Content&lt;/div&gt;</code><br>
      <code>&lt;div class="container-lg"&gt;Large Device Content&lt;/div&gt;</code>
    </div>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">2. Framework Overview</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>Framework:</strong> Provides rules & built-in libraries (like Bootstrap).</li>
      <li><strong>Set of Rules:</strong> Defines how layouts should be structured (Grid system).</li>
      <li><strong>Built-in Libraries:</strong> Ready-made classes like <code>.row</code> and <code>.col</code>.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">3. What is a Grid?</h3>
    <p class="text-gray-600 mb-3">
      A grid is a structure made up of <strong>rows</strong> and <strong>columns</strong>, similar to 
      Excel sheets or HTML tables. Bootstrap uses this to organize content responsively.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">4. Components of Grid System</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>Container:</strong> Wraps all content (starting point of layout).</li>
      <li><strong>Row:</strong> Horizontal grouping, created using <code>.row</code>.</li>
      <li><strong>Column:</strong> Vertical sections inside rows. A row can have max <strong>12 columns</strong>.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">5. Maximum Column Limit</h3>
    <p class="text-gray-600 mb-3">
      Each row has <strong>12 columns</strong>.  
      If more than 12 are added, extra columns wrap to the next line.  
      Example: <code>.col-md-4 + .col-md-4 + .col-md-4 = 12</code>.
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">6. Example with Cards</h3>
    <p class="text-gray-600 mb-3">
      To create 3 equal cards in one row:  
      Use <code>.col-md-4</code> for each (4 + 4 + 4 = 12).
    </p>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">7. Responsive Design</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><code>.col-md-4</code> → 4 columns on medium screens.</li>
      <li><code>.col-lg-6</code> → 6 columns on large screens.</li>
      <li>Grid automatically rearranges based on screen size.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">8. Example Layouts</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li><strong>Row 1:</strong> 12 small boxes → <code>.col-1</code> repeated 12 times.</li>
      <li><strong>Row 2:</strong> 3 equal sections → <code>.col-md-4</code> each.</li>
      <li><strong>Row 3:</strong> Mixed → <code>.col-md-4</code> + <code>.col-md-8</code>.</li>
      <li><strong>Row 4:</strong> Two equal halves → <code>.col-md-6</code> + <code>.col-md-6</code>.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-700 mt-4">9. Practical Tips</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>You don’t need to use all 12 columns.</li>
      <li>Add spacing with <code>.mt-2</code>, <code>.mt-5</code>, etc.</li>
      <li>Center columns using <code>.mx-auto</code>.</li>
    </ul>
  `,
          code: `
    <!-- Bootstrap Grid Example -->
    <div class="container">
      <!-- Row 1: 12 small boxes -->
      <div class="row">
        <div class="col-1 bg-primary text-white">1</div>
        <div class="col-1 bg-secondary text-white">2</div>
        <div class="col-1 bg-success text-white">3</div>
        <div class="col-1 bg-danger text-white">4</div>
        <div class="col-1 bg-warning text-dark">5</div>
        <div class="col-1 bg-info text-white">6</div>
        <div class="col-1 bg-dark text-white">7</div>
        <div class="col-1 bg-primary text-white">8</div>
        <div class="col-1 bg-secondary text-white">9</div>
        <div class="col-1 bg-success text-white">10</div>
        <div class="col-1 bg-danger text-white">11</div>
        <div class="col-1 bg-warning text-dark">12</div>
      </div>

      <!-- Row 2: Three equal parts -->
      <div class="row mt-3">
        <div class="col-md-4 bg-info text-white">Column 1</div>
        <div class="col-md-4 bg-dark text-white">Column 2</div>
        <div class="col-md-4 bg-primary text-white">Column 3</div>
      </div>

      <!-- Row 3: Mixed -->
      <div class="row mt-3">
        <div class="col-md-4 bg-warning">Column 1</div>
        <div class="col-md-8 bg-success text-white">Column 2</div>
      </div>

      <!-- Row 4: Two halves -->
      <div class="row mt-3">
        <div class="col-md-6 bg-danger text-white">Left Half</div>
        <div class="col-md-6 bg-secondary text-white">Right Half</div>
      </div>
    </div>
  `,
          explanation: 'The Bootstrap Grid System is based on a 12-column layout. You can divide rows into columns of different sizes (col-*, col-md-*, col-lg-*), which automatically adjust for different screen sizes. This makes layouts responsive and flexible.',
          task: 'Practice by creating a webpage with 4 rows: (1) 12 small boxes, (2) 3 equal columns, (3) 4+8 column layout, and (4) 6+6 column layout. Use Bootstrap classes to ensure responsiveness.'
        },
        {
          title: '5. Bootstrap 5 Grid Classes',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-4">Introduction to Grid Classes</h2>
    <p class="text-gray-700 mb-2">Bootstrap 5 uses a <span class="font-semibold">grid system</span> based on <span class="text-blue-500">rows</span> and <span class="text-blue-500">columns</span> to create responsive layouts.</p>
    
    <h3 class="text-xl font-semibold text-green-600 mt-4 mb-2">Bootstrap 5 Grid Classes</h3>
    <ul class="list-disc list-inside text-gray-700">
      <li><code class="bg-gray-200 px-1 rounded">col</code>: For extra small devices (phones).</li>
      <li><code class="bg-gray-200 px-1 rounded">col-sm</code>: For small devices (tablets ≥576px).</li>
      <li><code class="bg-gray-200 px-1 rounded">col-md</code>: For medium devices (laptops ≥768px).</li>
      <li><code class="bg-gray-200 px-1 rounded">col-lg</code>: For large devices (desktops ≥992px).</li>
      <li><code class="bg-gray-200 px-1 rounded">col-xl</code>: For extra-large devices (≥1200px).</li>
      <li><code class="bg-gray-200 px-1 rounded">col-xxl</code>: For extra-extra-large devices (≥1400px).</li>
    </ul>

    <h3 class="text-xl font-semibold text-green-600 mt-4 mb-2">Responsive Web Design</h3>
    <p class="text-gray-700">These classes ensure that websites <span class="text-blue-500 font-medium">adapt to all screen sizes</span>, from small mobiles to very large screens.</p>
  `,
          code: `
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 bg-light border">Column 1</div>
        <div class="col-sm-6 col-md-4 col-lg-3 bg-light border">Column 2</div>
        <div class="col-sm-6 col-md-4 col-lg-3 bg-light border">Column 3</div>
        <div class="col-sm-6 col-md-4 col-lg-3 bg-light border">Column 4</div>
      </div>
    </div>
  `,
          explanation: 'Bootstrap grid classes help you create layouts that adjust automatically across different screen sizes. For example, using col-md-4 makes 3 equal columns on medium devices, but they can stack on smaller screens when using col-sm or col.',
          task: 'Create a row with 4 columns using col-sm, col-md, and col-lg. Test it by resizing your browser in Chrome DevTools to see how it adapts.'
        },
        {
          title: '6. Typography in Bootstrap 5',
          theory: `
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-blue-600">Overview of Typography</h2>
      <p class="text-gray-700">Typography refers to the <span class="font-semibold">style and appearance of text</span> on a webpage, including font sizes, line heights, and margins.</p>
      <p class="text-gray-700">Bootstrap 5 provides built-in classes to style text effectively.</p>

      <h2 class="text-2xl font-bold text-blue-600">Default Typography Settings</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li>Paragraphs (<code class="bg-gray-100 px-1 rounded">&lt;p&gt;</code>) → Default font size <span class="font-semibold">16px</span>.</li>
        <li>Default line height → <span class="font-semibold">1.5</span>.</li>
        <li>Paragraph margins → top: <span class="font-semibold">0</span>, bottom: <span class="font-semibold">16px</span>.</li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-600">Headings (h1–h6)</h2>
      <p class="text-gray-700">Bootstrap applies <span class="font-semibold">bold weight</span> and <span class="font-semibold">responsive sizes</span>. Headings auto-adjust based on device screen.</p>

      <h2 class="text-2xl font-bold text-blue-600">Display Classes</h2>
      <p class="text-gray-700">For larger headings use <code class="bg-gray-100 px-1 rounded">display-1</code> to <code class="bg-gray-100 px-1 rounded">display-6</code>. Sizes grow, while font-weight becomes lighter.</p>

      <h2 class="text-2xl font-bold text-blue-600">Text Styling</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li><code class="bg-gray-100 px-1 rounded">&lt;small&gt;</code> → Makes text smaller.</li>
        <li><code class="bg-gray-100 px-1 rounded">&lt;mark&gt;</code> → Highlights text with yellow background.</li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-600">Definition List</h2>
      <p class="text-gray-700"><code class="bg-gray-100 px-1 rounded">&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</code> → styled with bold terms and spacing in Bootstrap.</p>

      <h2 class="text-2xl font-bold text-blue-600">Code & Keyboard</h2>
      <p class="text-gray-700"><code class="bg-gray-100 px-1 rounded">&lt;code&gt;</code> → for inline code, styled with monospace font. <br>
      <code class="bg-gray-100 px-1 rounded">&lt;kbd&gt;</code> → represents keyboard shortcuts with distinct style.</p>

      <h2 class="text-2xl font-bold text-blue-600">Typography Classes</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li><code>lead</code> → bigger, more prominent text.</li>
        <li><code>text-start | text-center | text-end</code> → alignment.</li>
        <li><code>text-break</code> → prevents overflow.</li>
        <li><code>text-decoration-none</code> → removes underline.</li>
        <li><code>text-lowercase | text-uppercase | text-capitalize</code> → text case control.</li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-600">List Styling</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li><code>list-unstyled</code> → removes bullets.</li>
        <li><code>list-inline</code> → horizontal lists.</li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-600">Anchor Tags</h2>
      <p class="text-gray-700">Customize <code class="bg-gray-100 px-1 rounded">&lt;a&gt;</code> with Bootstrap classes like <code>text-decoration-none</code> to remove underline.</p>
    </div>
  `,
          code: `
    <h1 class="display-1">Display Heading 1</h1>
    <p class="lead">This is a lead paragraph for emphasis.</p>
    <p>This is normal text with <small>smaller text</small> and <mark>highlighted text</mark>.</p>
    <dl>
      <dt>Bootstrap</dt>
      <dd>A CSS framework for responsive design.</dd>
    </dl>
    <p>Inline code example: <code>console.log("Hello");</code></p>
    <p>Keyboard shortcut: <kbd>Ctrl + C</kbd></p>
    <ul class="list-inline">
      <li class="list-inline-item">Home</li>
      <li class="list-inline-item">About</li>
      <li class="list-inline-item">Contact</li>
    </ul>
    <a href="#" class="text-decoration-none">Custom Link</a>
  `,
          explanation: 'Bootstrap 5 Typography provides prebuilt classes for headings, paragraphs, display text, code snippets, keyboard inputs, lists, and anchor tags. It ensures consistent text styling, responsive headings, and customizable utility classes that make text handling much easier compared to plain HTML.',
          task: 'Create a demo page with: one display heading, a lead paragraph, a highlighted word, a definition list, inline code, a keyboard shortcut, an inline list of 3 items, and an anchor link without underline.'
        },
        {
          title: '7. Bootstrap 5 Colors Classes',
          theory: `
    <h2 class="text-2xl font-bold mb-4 text-primary">🎨 Introduction to Bootstrap 5 Color Classes</h2>
    <p class="mb-2 text-gray-700">Bootstrap 5 provides built-in <span class="font-semibold text-success">color utility classes</span> for styling text, backgrounds, and other UI elements without writing custom CSS. These are used in headings, paragraphs, tables, buttons, and more.</p>

    <h3 class="text-xl font-semibold mt-4 mb-2 text-indigo-600">Background Color Classes:</h3>
    <ul class="list-disc ml-6 space-y-1 text-gray-800">
      <li><span class="bg-primary  px-2 py-1 rounded">bg-primary</span> → Blue background</li>
      <li><span class="bg-success  px-2 py-1 rounded">bg-success</span> → Green (Success)</li>
      <li><span class="bg-info  px-2 py-1 rounded">bg-info</span> → Sky Blue (Info)</li>
      <li><span class="bg-warning  px-2 py-1 rounded">bg-warning</span> → Orange (Warning)</li>
      <li><span class="bg-danger  px-2 py-1 rounded">bg-danger</span> → Red (Danger)</li>
      <li><span class="bg-secondary  px-2 py-1 rounded">bg-secondary</span> → Dark Gray</li>
      <li><span class="bg-dark  px-2 py-1 rounded">bg-dark</span> → Black</li>
      <li><span class="bg-light text-dark px-2 py-1 rounded">bg-light</span> → Light Gray</li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2 text-indigo-600">Text Color Classes:</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li><span class="text-primary font-semibold">text-primary</span></li>
      <li><span class="text-success font-semibold">text-success</span></li>
      <li><span class="text-info font-semibold">text-info</span></li>
      <li><span class="text-warning font-semibold">text-warning</span></li>
      <li><span class="text-danger font-semibold">text-danger</span></li>
      <li><span class="text-secondary font-semibold">text-secondary</span></li>
      <li><span class="text-dark font-semibold">text-dark</span></li>
      <li><span class="text-light bg-dark px-2 rounded">text-light</span></li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2 text-indigo-600">Other Useful Classes:</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li><span class="text-muted">text-muted</span> → Muted / Less intense text</li>
      <li><span class="text-black-50">text-black-50</span> → Black text with 50% opacity</li>
      <li><span class="text-white-50 bg-dark">text-white-50</span> → White text with 50% opacity</li>
    </ul>
  `,
          code: `
    <div class="container mt-4">
      <h2 class="text-primary">This is Primary Text</h2>
      <p class="text-success">This is Success Text</p>
      <p class="text-info">This is Info Text</p>
      <p class="text-warning">This is Warning Text</p>
      <p class="text-danger">This is Danger Text</p>
      <p class="text-secondary">This is Secondary Text</p>
      <p class="text-dark">This is Dark Text</p>
      <p class="text-light bg-dark p-2">This is Light Text</p>
      <p class="text-muted">This is Muted Text</p>
      <p class="text-black-50">Black 50% opacity</p>
      <p class="text-white-50 bg-dark p-2">White 50% opacity</p>

      <div class="p-3 bg-primary text-white">Primary Background</div>
      <div class="p-3 bg-success text-white">Success Background</div>
      <div class="p-3 bg-info text-white">Info Background</div>
      <div class="p-3 bg-warning text-white">Warning Background</div>
      <div class="p-3 bg-danger text-white">Danger Background</div>
      <div class="p-3 bg-secondary text-white">Secondary Background</div>
      <div class="p-3 bg-dark text-white">Dark Background</div>
      <div class="p-3 bg-light text-dark">Light Background</div>
    </div>
  `,
          explanation: 'Bootstrap 5 provides ready-to-use text and background color utility classes. Instead of writing custom CSS, developers can apply these classes directly to elements for quick styling. The text- classes change the font color, while bg- classes change the background color. Special classes like text-muted, text-black-50, and text-white-50 help in applying subtle color variations with reduced opacity.',
          task: 'Create a card with a header having a bg-primary class, body text with text-muted, and footer with bg-dark and text-light classes to practice using Bootstrap color classes.'
        },
        {
          title: '8. Bootstrap 5 Tables',
          theory: `
    <h2 class="text-2xl font-bold mb-3">Introduction to Bootstrap 5 Tables</h2>
    <p class="mb-2">Tables in <b>HTML5</b> are used to display data in <span class="text-blue-600">rows</span> and <span class="text-green-600">columns</span>, providing a structured way to present information. 
    By default, HTML tables have a basic look, but using <b class="text-purple-600">Bootstrap table classes</b> makes them modern, clean, and attractive.</p>

    <h3 class="text-xl font-semibold mt-4 mb-2">Creating Basic Tables in HTML5</h3>
    <ul class="list-disc list-inside space-y-1">
      <li>Use the <code class="bg-gray-100 text-red-600 px-1">&lt;table&gt;</code> tag with <code class="bg-gray-100 px-1">&lt;thead&gt;</code> for table headers and <code class="bg-gray-100 px-1">&lt;tbody&gt;</code> for the table body.</li>
      <li>Table headers use <code class="bg-gray-100 px-1">&lt;th&gt;</code> tags, while table data uses <code class="bg-gray-100 px-1">&lt;td&gt;</code> tags.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2">Styling Tables with Bootstrap 5</h3>
    <ul class="list-disc list-inside space-y-1">
      <li><b class="text-indigo-600">.table</b>: Adds clean styling with padding and row dividers.</li>
      <li><b class="text-indigo-600">.table-bordered</b>: Adds borders to all table cells.</li>
      <li><b class="text-indigo-600">.table-striped</b>: Adds zebra stripes for better readability.</li>
      <li><b class="text-indigo-600">.table-primary, .table-danger, .table-warning, .table-success</b>: Color different rows.</li>
      <li><b class="text-indigo-600">.table-dark</b>: Style table headers with dark background.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2">Responsive Tables</h3>
    <p class="mb-2">Using <b class="text-indigo-600">.table-responsive</b> makes tables scrollable horizontally on smaller screens. 
    Specific breakpoints like <b class="text-indigo-600">.table-responsive-sm, .table-responsive-md, .table-responsive-lg, .table-responsive-xl</b> 
    allow responsiveness at different screen sizes.</p>
  `,
          code: `
    <!-- Basic HTML Table -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>John</td>
          <td>Male</td>
          <td>Developer</td>
          <td>$5000</td>
        </tr>
      </tbody>
    </table>

    <!-- Bootstrap Styled Table -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-primary">
            <td>01</td>
            <td>John</td>
            <td>Male</td>
            <td>Developer</td>
            <td>$5000</td>
          </tr>
          <tr class="table-success">
            <td>02</td>
            <td>Sarah</td>
            <td>Female</td>
            <td>Designer</td>
            <td>$4500</td>
          </tr>
          <tr class="table-warning">
            <td>03</td>
            <td>David</td>
            <td>Male</td>
            <td>Manager</td>
            <td>$6000</td>
          </tr>
          <tr class="table-danger">
            <td>04</td>
            <td>Emma</td>
            <td>Female</td>
            <td>QA Engineer</td>
            <td>$4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
          explanation: 'Bootstrap 5 tables improve the default HTML table look by adding styles like borders, zebra stripes, colors, and responsive scrolling. Classes like `.table`, `.table-bordered`, `.table-striped`, and `.table-responsive` make data more readable and mobile-friendly.',
          task: 'Create a student report table with Bootstrap 5 that includes 5 columns (Roll No, Name, Class, Grade, Percentage). Add striped rows, borders, and make it responsive for small screens.'
        },
        {
          title: '9. Bootstrap 5 Images',
          theory: `
  <h2 class="text-2xl font-bold text-indigo-600 mb-4">1. Introduction to Bootstrap 5 Images</h2>
  <p class="text-gray-700 mb-6">Images in Bootstrap 5 can be enhanced with responsive features, effects, and styles using predefined classes.</p>

  <h2 class="text-xl font-semibold text-indigo-500 mb-3">2. Basic Image Implementation</h2>
  <p class="text-gray-700 mb-4">Use the <code class="bg-gray-100 text-pink-600 px-1 rounded"> &lt;img&gt; </code> tag to insert images in HTML.</p>
  <ul class="list-disc pl-6 text-gray-600">
    <li>Set <code class="bg-gray-100 text-pink-600 px-1 rounded">src</code> for the image source</li>
    <li>Use <code class="bg-gray-100 text-pink-600 px-1 rounded">height</code> and <code class="bg-gray-100 text-pink-600 px-1 rounded">width</code> attributes to adjust size</li>
  </ul>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">3. Rounded Corners for Images</h2>
  <p class="text-gray-700">Class: <span class="text-green-600 font-mono">rounded</span> → Rounds the corners of an image.</p>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">4. Round Top and Bottom Corners</h2>
  <ul class="list-disc pl-6 text-gray-600">
    <li><span class="text-green-600 font-mono">rounded-top</span> → Rounds only the top corners.</li>
    <li><span class="text-green-600 font-mono">rounded-bottom</span> → Rounds only the bottom corners.</li>
  </ul>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">5. Circle Shape for Images</h2>
  <p class="text-gray-700">Class: <span class="text-green-600 font-mono">rounded-circle</span> → Makes an image circular (depending on aspect ratio).</p>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">6. Thumbnail Style for Images</h2>
  <p class="text-gray-700">Class: <span class="text-green-600 font-mono">img-thumbnail</span> → Adds a border and thumbnail effect.</p>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">7. Aligning Images</h2>
  <ul class="list-disc pl-6 text-gray-600">
    <li><span class="text-green-600 font-mono">float-start</span> → Aligns image to left.</li>
    <li><span class="text-green-600 font-mono">float-end</span> → Aligns image to right.</li>
    <li><span class="text-green-600 font-mono">d-block mx-auto</span> → Centers image.</li>
  </ul>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">8. Responsive Images</h2>
  <p class="text-gray-700">Class: <span class="text-green-600 font-mono">img-fluid</span> → Makes the image responsive, auto-scaling with parent container.</p>

  <h2 class="text-xl font-semibold text-indigo-500 mt-6 mb-3">9. Key Bootstrap Image Classes</h2>
  <ul class="list-disc pl-6 text-gray-600">
    <li><span class="text-green-600 font-mono">rounded</span>, <span class="text-green-600 font-mono">rounded-top</span>, <span class="text-green-600 font-mono">rounded-bottom</span>, <span class="text-green-600 font-mono">rounded-circle</span></li>
    <li><span class="text-green-600 font-mono">img-thumbnail</span>, <span class="text-green-600 font-mono">float-start</span>, <span class="text-green-600 font-mono">float-end</span>, <span class="text-green-600 font-mono">d-block mx-auto</span>, <span class="text-green-600 font-mono">img-fluid</span></li>
  </ul>
`,

          code: `
<!-- Basic Image Example -->
<img src="image.jpg" class="img-fluid" alt="Responsive image">

<!-- Rounded Corners -->
<img src="image.jpg" class="rounded" alt="Rounded image">

<!-- Circle Image -->
<img src="image.jpg" class="rounded-circle" alt="Circle image">

<!-- Thumbnail Image -->
<img src="image.jpg" class="img-thumbnail" alt="Thumbnail image">

<!-- Alignments -->
<img src="image.jpg" class="float-start" alt="Left aligned image">
<img src="image.jpg" class="float-end" alt="Right aligned image">
<img src="image.jpg" class="d-block mx-auto" alt="Centered image">
  `,
          explanation: `
- "img-fluid" ensures the image scales with screen size (responsive).  
- "rounded", "rounded-top", "rounded-bottom" apply different rounding effects.  
- "rounded-circle" makes the image perfectly circular.  
- "img-thumbnail" gives the image a bordered thumbnail look.  
- "float-start", "float-end", and "d-block mx-auto" are used to align images left, right, and center respectively.  
  `,
          task: `
Insert 3 images on a page:  
1. First image should be circular using "rounded-circle".  
2. Second image should be responsive using "img-fluid".  
3. Third image should be aligned in the center with "d-block mx-auto".  
  `,
        },
        {
          title: '10. Bootstrap 5 Buttons and Button Groups',
          theory: `
  <h2 class="text-2xl font-bold text-indigo-600">1. Introduction to Buttons in Bootstrap 5</h2>
  <p class="text-gray-700 leading-relaxed">
    <span class="font-semibold">HTML5 buttons</span> are basic and less attractive.<br>
    <span class="font-semibold">Bootstrap 5 buttons</span> provide visually appealing, modern, and customizable designs.
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">2. Key Features of Bootstrap Buttons</h2>
  <ul class="list-disc pl-6 text-gray-700 space-y-1">
    <li>Attractive and unique styles</li>
    <li>Contextual colors (<code>primary</code>, <code>success</code>, <code>danger</code>, etc.)</li>
    <li>Different sizes (small, medium, large)</li>
    <li>Can be applied to <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, and <code>&lt;input&gt;</code> elements</li>
  </ul>

  <h2 class="text-2xl font-bold text-indigo-600">3. Basic Button Class</h2>
  <p class="text-gray-700">
    Use the <code class="bg-gray-200 px-1 rounded">btn</code> class to create buttons.<br>
    Add contextual classes like 
    <code class="bg-gray-200 px-1 rounded">btn-success</code>, 
    <code class="bg-gray-200 px-1 rounded">btn-danger</code>, 
    <code class="bg-gray-200 px-1 rounded">btn-primary</code> to apply colors.
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">4. Outline Buttons</h2>
  <p class="text-gray-700">
    Use <code class="bg-gray-200 px-1 rounded">btn-outline-*</code> classes to create bordered buttons with hover effects.
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">5. Anchor & Input as Buttons</h2>
  <p class="text-gray-700">
    Anchor tags <code>&lt;a&gt;</code> and input elements can also be styled as buttons using the 
    <code class="bg-gray-200 px-1 rounded">btn</code> class.
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">6. Button Sizes</h2>
  <ul class="list-disc pl-6 text-gray-700 space-y-1">
    <li><span class="font-semibold">Default:</span> Medium</li>
    <li><code class="bg-gray-200 px-1 rounded">btn-sm</code> → Small button</li>
    <li><code class="bg-gray-200 px-1 rounded">btn-lg</code> → Large button</li>
  </ul>

  <h2 class="text-2xl font-bold text-indigo-600">7. Block-level Buttons</h2>
  <p class="text-gray-700">
    Use <code class="bg-gray-200 px-1 rounded">btn-block</code> and parent container with 
    <code class="bg-gray-200 px-1 rounded">d-grid</code> to stretch button width.<br>
    Add spacing using Bootstrap’s gap classes (<code>gap-1</code> to <code>gap-5</code>).
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">8. Active & Disabled Buttons</h2>
  <ul class="list-disc pl-6 text-gray-700 space-y-1">
    <li>Add <code class="bg-gray-200 px-1 rounded">active</code> class for pressed effect.</li>
    <li>Add <code class="bg-gray-200 px-1 rounded">disabled</code> class or attribute to make button inactive.</li>
  </ul>

  <h2 class="text-2xl font-bold text-indigo-600">9. Rounded Buttons</h2>
  <p class="text-gray-700">
    Use <code class="bg-gray-200 px-1 rounded">rounded</code> or 
    <code class="bg-gray-200 px-1 rounded">rounded-pill</code> classes to give curved or pill shapes.
  </p>

  <h2 class="text-2xl font-bold text-indigo-600">10. Button Group</h2>
  <p class="text-gray-700 leading-relaxed">
    Wrap buttons inside a 
    <code class="bg-gray-200 px-1 rounded">&lt;div class="btn-group"&gt;</code> 
    to align them in a single line.<br>
    Use <code class="bg-gray-200 px-1 rounded">btn-group-lg</code> or 
    <code class="bg-gray-200 px-1 rounded">btn-group-sm</code> for different group sizes.<br>
    Use <code class="bg-gray-200 px-1 rounded">btn-group-vertical</code> for vertical stacking.<br>
    Button groups can have different button types (<code>button</code>, <code>input</code>, <code>anchor</code>) and colors.
  </p>
  `,
          code: `
<!-- Basic Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

<!-- Outline Buttons -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-warning">Outline Warning</button>

<!-- Anchor as Button -->
<a href="#" class="btn btn-danger">Back</a>

<!-- Input as Button -->
<input type="submit" class="btn btn-info" value="Submit">

<!-- Sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-success">Large</button>

<!-- Block-level Buttons -->
<div class="d-grid gap-2">
  <button class="btn btn-primary btn-block">Block Button 1</button>
  <button class="btn btn-secondary btn-block">Block Button 2</button>
</div>

<!-- Active & Disabled -->
<button class="btn btn-primary active">Active Button</button>
<button class="btn btn-secondary disabled">Disabled Button</button>

<!-- Rounded Buttons -->
<button class="btn btn-outline-success rounded">Rounded</button>
<button class="btn btn-primary rounded-pill">Pill Button</button>

<!-- Button Group -->
<div class="btn-group" role="group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-warning">Middle</button>
  <button class="btn btn-danger">Right</button>
</div>

<!-- Vertical Button Group -->
<div class="btn-group-vertical mt-3" role="group">
  <button class="btn btn-outline-primary">Top</button>
  <button class="btn btn-outline-secondary">Middle</button>
  <button class="btn btn-outline-success">Bottom</button>
</div>
  `,
          explanation: `
- "btn" is the base class for all buttons in Bootstrap 5.  
- Contextual classes like "btn-primary", "btn-success" change the button color.  
- "btn-outline-*" creates bordered buttons with hover effects.  
- Anchor tags and input elements can also be styled like buttons.  
- Button sizes can be adjusted using "btn-sm" and "btn-lg".  
- Use "btn-block" and "d-grid" to create full-width buttons.  
- "active" makes a button look pressed, "disabled" makes it unclickable.  
- "rounded" and "rounded-pill" add curved and pill-shaped styles.  
- Button groups allow grouping multiple buttons horizontally or vertically.  
- Groups can mix different button colors and types.  
  `,
          task: `
1. Create three buttons: one small, one large, and one rounded-pill.  
2. Make two block-level buttons stacked with a gap between them.  
3. Create a button group with three outline buttons: Primary, Warning, and Danger.  
4. Add a vertical button group with Success, Info, and Dark buttons.  
  `,
        },
        {
          title: '11. Bootstrap Badges',
          theory: `
  <h2 class="text-xl font-bold text-blue-600">Introduction to Badges</h2>
  <p class="text-gray-700">Badges are a useful Bootstrap component for displaying <span class="bg-yellow-200 px-2 py-1 rounded">extra information</span> like notifications, discounts, or highlights.</p>
  
  <h3 class="text-lg font-semibold mt-3">What are Badges?</h3>
  <ul class="list-disc pl-6 text-gray-600">
    <li>Provide additional info inside headings, buttons, or text.</li>
    <li>Examples: <span class="bg-green-200 px-2 rounded">20% OFF</span>, <span class="bg-red-200 px-2 rounded">5 New Messages</span></li>
  </ul>
  
  <h3 class="text-lg font-semibold mt-3">Badge Styles & Classes</h3>
  <ul class="list-disc pl-6 text-gray-600">
    <li><code>bg-primary</code>, <code>bg-success</code>, <code>bg-danger</code> for colors.</li>
    <li>Use <code>rounded-pill</code> for rounded badges.</li>
  </ul>
  
  <h3 class="text-lg font-semibold mt-3">Badges Inside Elements</h3>
  <p class="text-gray-700">Badges can be placed inside buttons or headings:</p>
  `,
          code: `
  <!-- Badge Example -->
  <h1>Notifications <span class="badge bg-primary">4</span></h1>
  <button type="button" class="btn btn-success">
    Messages <span class="badge bg-light text-dark">7</span>
  </button>
  <h2>Discount <span class="badge bg-danger rounded-pill">20% OFF</span></h2>
  `,
          explanation: 'Badges are inline Bootstrap components styled with contextual background classes. They can be used inside headings, buttons, or text to show counts, tags, or alerts. Using `rounded-pill` makes them oval-shaped.',
          task: 'Create a button with text "Inbox" and add a badge showing "99+". Use a red background for the badge.',
        },
        {
          title: '12. Bootstrap Spinners',
          theory: `
  <h2 class="text-xl font-bold text-purple-600">Introduction to Spinners</h2>
  <p class="text-gray-700">Spinners indicate <span class="bg-yellow-200 px-2 rounded">loading or ongoing processes</span> like form submission or fetching data.</p>
  
  <h3 class="text-lg font-semibold mt-3">Types of Spinners</h3>
  <ul class="list-disc pl-6 text-gray-600">
    <li><b>Spinner Border:</b> A circular rotating spinner.</li>
    <li><b>Spinner Grow:</b> A pulsing grow animation.</li>
  </ul>
  
  <h3 class="text-lg font-semibold mt-3">Customization</h3>
  <ul class="list-disc pl-6 text-gray-600">
    <li>Colors: Use classes like <code>text-primary</code>, <code>text-success</code>, <code>text-danger</code>.</li>
    <li>Sizes: Default (medium). Add <code>spinner-border-sm</code> or <code>spinner-grow-sm</code> for small.</li>
    <li>Embedding: Place spinners inside buttons with or without text.</li>
  </ul>
  `,
          code: `
  <!-- Spinner Examples -->
  <div class="spinner-border text-primary"></div>
  <div class="spinner-grow text-success"></div>

  <!-- Small Spinners -->
  <div class="spinner-border spinner-border-sm text-danger"></div>

  <!-- Spinner in Button -->
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm"></span>
    Loading...
  </button>
  `,
          explanation: 'Bootstrap spinners are animated indicators used to show background processes. They come in two styles: rotating border and growing pulse. You can change colors, size, and even embed them in buttons.',
          task: 'Create a green spinner inside a button with the text "Submitting...". Disable the button while spinner is active.',
        },
        {
          title: '13. Bootstrap 5 - List Groups',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">Introduction to List Groups in Bootstrap 5</h2>
    <p class="text-gray-700 mb-2">List Groups are used to create <span class="font-semibold">stylized lists</span>, often for displaying grouped or organized items on a website.</p>
    <p class="text-gray-700 mb-4">They enhance the default HTML <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600">&lt;ul&gt;</code> and <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600">&lt;ol&gt;</code> elements with more styling and interactivity.</p>
    
    <h3 class="text-xl font-semibold text-green-600 mt-4 mb-2">Key Features of List Groups</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li><span class="font-semibold">Basic List Groups:</span> Use <code class="bg-gray-100 px-1">&lt;ul class="list-group"&gt;</code> with <code class="bg-gray-100 px-1">&lt;li class="list-group-item"&gt;</code>.</li>
      <li><span class="font-semibold">Responsive Design:</span> Wrap inside <code class="bg-gray-100 px-1">&lt;div class="row"&gt;</code> and <code class="bg-gray-100 px-1">&lt;div class="col-md-6"&gt;</code>.</li>
      <li><span class="font-semibold">List Groups with Links:</span> Replace <code class="bg-gray-100 px-1">&lt;ul&gt;</code> with <code class="bg-gray-100 px-1">&lt;div&gt;</code> and <code class="bg-gray-100 px-1">&lt;a&gt;</code> tags.</li>
      <li><span class="font-semibold">Active & Disabled State:</span> Use <code class="bg-gray-100 px-1">.active</code> for highlighting, and <code class="bg-gray-100 px-1">.disabled</code> for non-clickable items.</li>
      <li><span class="font-semibold">Flush Style:</span> Use <code class="bg-gray-100 px-1">.list-group-flush</code> to remove borders and rounded corners.</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-600 mt-4 mb-2">Use Cases</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li>Navigation Menus with active class</li>
      <li>Sidebar menus with list-group</li>
      <li>Grouped links for better UI</li>
    </ul>

    <h3 class="text-xl font-semibold text-pink-600 mt-4 mb-2">Horizontal List Groups</h3>
    <p class="text-gray-700">Use <code class="bg-gray-100 px-1">.list-group-horizontal</code> to align items side by side. Breakpoint-specific classes like <code class="bg-gray-100 px-1">.list-group-horizontal-md</code> are available.</p>

    <h3 class="text-xl font-semibold text-indigo-600 mt-4 mb-2">Contextual Classes</h3>
    <p class="text-gray-700">Apply background colors with:</p>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li><code class="bg-gray-100 px-1">.list-group-item-primary</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-success</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-danger</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-warning</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-info</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-light</code></li>
      <li><code class="bg-gray-100 px-1">.list-group-item-dark</code></li>
    </ul>

    <h3 class="text-xl font-semibold text-red-600 mt-4 mb-2">Badges with List Groups</h3>
    <p class="text-gray-700">Use <code class="bg-gray-100 px-1">&lt;span class="badge bg-primary"&gt;</code> with utility classes like <code class="bg-gray-100 px-1">d-flex</code> and <code class="bg-gray-100 px-1">justify-content-between</code> to align counts beside items.</p>
  `,
          code: `
    <!-- Basic List Group -->
    <ul class="list-group">
      <li class="list-group-item">Item 1</li>
      <li class="list-group-item active">Active Item</li>
      <li class="list-group-item disabled">Disabled Item</li>
    </ul>

    <!-- List Group with Links -->
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">Dashboard</a>
      <a href="#" class="list-group-item list-group-item-action">Profile</a>
      <a href="#" class="list-group-item list-group-item-action disabled">Settings</a>
    </div>

    <!-- Horizontal List Group -->
    <ul class="list-group list-group-horizontal-md">
      <li class="list-group-item">Left</li>
      <li class="list-group-item">Middle</li>
      <li class="list-group-item">Right</li>
    </ul>

    <!-- Contextual Classes -->
    <ul class="list-group">
      <li class="list-group-item list-group-item-primary">Primary</li>
      <li class="list-group-item list-group-item-success">Success</li>
      <li class="list-group-item list-group-item-danger">Danger</li>
    </ul>

    <!-- List Group with Badges -->
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Messages
        <span class="badge bg-primary rounded-pill">4</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Notifications
        <span class="badge bg-success rounded-pill">10</span>
      </li>
    </ul>
  `,
          explanation: 'Bootstrap List Groups provide a structured and styled way to present lists with features like clickable items, active/disabled states, horizontal alignment, contextual colors, and badges. They improve navigation, sidebars, grouped content, and dynamic info display.',
          task: 'Create a sidebar menu using Bootstrap List Groups with links for Dashboard, Profile, Settings, and include badges for showing notification counts.'
        },
        {
          title: '14. Bootstrap Cards',
          theory: `
  <div class="space-y-4">
    <h2 class="text-2xl font-bold text-blue-600">Introduction to Bootstrap Cards</h2>
    <p class="text-gray-700">Cards are essential components used on websites, often seen on landing and home pages.</p>
    <ul class="list-disc pl-6 text-gray-700">
      <li><span class="font-semibold">Definition:</span> Cards are containers with borders, padding, and flexible content areas.</li>
      <li><span class="font-semibold">Structure:</span> A card typically contains an <span class="text-blue-500">image</span>, a <span class="text-green-600">title</span>, some <span class="text-purple-600">text</span>, and a <span class="text-red-600">button</span>.</li>
      <li><span class="font-semibold">Usage:</span> Commonly used to display products (e.g., top 3 products) or services (e.g., top 3-4 services).</li>
    </ul>

    <h3 class="text-xl font-semibold text-indigo-600">Key Features of Cards</h3>
    <ol class="list-decimal pl-6 text-gray-700">
      <li><span class="font-semibold">Borders and Padding:</span> Maintain spacing between content and edges.</li>
      <li><span class="font-semibold">Content Sections:</span> Cards are divided into:
        <ul class="list-disc pl-6">
          <li><span class="text-blue-500">Header:</span> Top section for titles/highlights.</li>
          <li><span class="text-green-600">Body:</span> Main content area.</li>
          <li><span class="text-red-600">Footer:</span> Bottom section for links/info.</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-xl font-semibold text-indigo-600">Additional Concepts</h3>
    <ul class="list-disc pl-6 text-gray-700">
      <li><span class="font-semibold">Row and Column Placement:</span> Use <code class="bg-gray-100 text-red-600 px-1">.row</code> and <code class="bg-gray-100 text-red-600 px-1">.col-md-4</code> for layout.</li>
      <li><span class="font-semibold">Contextual Cards:</span> Use <code class="bg-gray-100 text-red-600 px-1">.bg-primary</code>, <code class="bg-gray-100 text-red-600 px-1">.bg-success</code> etc. with <code class="bg-gray-100 text-red-600 px-1">.text-white</code>.</li>
      <li><span class="font-semibold">Titles, Text & Links:</span> Use <code class="bg-gray-100 text-red-600 px-1">.card-title</code>, <code class="bg-gray-100 text-red-600 px-1">.card-text</code>, and <code class="bg-gray-100 text-red-600 px-1">.card-link</code>.</li>
      <li><span class="font-semibold">Images:</span> Use <code class="bg-gray-100 text-red-600 px-1">.card-img-top</code> or <code class="bg-gray-100 text-red-600 px-1">.card-img-bottom</code>.</li>
      <li><span class="font-semibold">Buttons:</span> Place inside <code class="bg-gray-100 text-red-600 px-1">.card-footer</code> with <code class="bg-gray-100 text-red-600 px-1">.btn</code> and <code class="bg-gray-100 text-red-600 px-1">.btn-primary</code>.</li>
      <li><span class="font-semibold">Card Overlay:</span> Use <code class="bg-gray-100 text-red-600 px-1">.card-img-overlay</code> with <code class="bg-gray-100 text-red-600 px-1">.text-white</code> for overlay text.</li>
    </ul>
  </div>
  `,
          code: `
  <!-- Basic Bootstrap Card -->
  <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Sample Image">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">This is a basic Bootstrap card with text, image and button.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `,
          explanation: 'Bootstrap Cards are flexible containers with a header, body, and footer. They are widely used to showcase products, services, or any content block. They support contextual colors, images, overlays, and grid-based arrangements for responsive design.',
          task: 'Create a row of 3 cards using Bootstrap. Each card should contain an image, a title, a paragraph, and a button inside the footer. Apply different contextual background colors (primary, success, warning).'
        },
        {
          title: '15. Dropdown Menu in Bootstrap 5',
          theory: `
  <div class="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-blue-600 mb-4">What is a Dropdown Menu?</h2>
    <p class="text-gray-700 mb-4">
      A <span class="font-semibold text-blue-500">dropdown menu</span> is a UI element that displays a list of items when you click a button or link. 
      It allows users to select one item. Dropdowns are commonly used in navigation bars where categories or options are listed under a button.
    </p>

    <h3 class="text-xl font-semibold text-green-600 mb-2">Basic Structure of a Dropdown:</h3>
    <ul class="list-disc pl-6 text-gray-700 mb-4">
      <li>Use <code class="bg-gray-200 px-1 rounded">dropdown</code> class for the wrapper.</li>
      <li>Use <code class="bg-gray-200 px-1 rounded">dropdown-toggle</code> class for the button.</li>
      <li>Add <code class="bg-gray-200 px-1 rounded">data-bs-toggle="dropdown"</code> to activate dropdown.</li>
    </ul>

    <h3 class="text-xl font-semibold text-green-600 mb-2">Dropdown Items:</h3>
    <p class="mb-2">Use <code class="bg-gray-200 px-1 rounded">dropdown-item</code> class for links or buttons inside the menu.</p>

    <h3 class="text-xl font-semibold text-green-600 mb-2">Custom Features:</h3>
    <ul class="list-disc pl-6 text-gray-700 mb-4">
      <li><span class="font-semibold">Dividers:</span> Add <code class="bg-gray-200 px-1 rounded">dropdown-divider</code> using <code>&lt;hr&gt;</code>.</li>
      <li><span class="font-semibold">Headers:</span> Add <code class="bg-gray-200 px-1 rounded">dropdown-header</code> to categorize items.</li>
      <li><span class="font-semibold">Position:</span> Use <code class="bg-gray-200 px-1 rounded">drop-end</code> for right side, <code class="bg-gray-200 px-1 rounded">drop-up</code> for upwards dropdown.</li>
      <li><span class="font-semibold">Text Items:</span> Use <code class="bg-gray-200 px-1 rounded">dropdown-item-text</code> for plain text.</li>
      <li><span class="font-semibold">Button Groups:</span> Use <code class="bg-gray-200 px-1 rounded">btn-group</code> or <code class="bg-gray-200 px-1 rounded">btn-group-vertical</code> for grouping.</li>
    </ul>
  </div>
  `,
          code: `
  <!-- Basic Dropdown Example -->
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
      Dropdown Menu
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another Action</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Something Else</a></li>
    </ul>
  </div>

  <!-- Right Side Dropdown -->
  <div class="btn-group dropend mt-3">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
      Dropend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Right Option 1</a></li>
      <li><a class="dropdown-item" href="#">Right Option 2</a></li>
    </ul>
  </div>

  <!-- Dropup Example -->
  <div class="btn-group dropup mt-3">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Up Option 1</a></li>
      <li><a class="dropdown-item" href="#">Up Option 2</a></li>
    </ul>
  </div>
  `,
          explanation: 'A dropdown menu in Bootstrap 5 is created using the `.dropdown` and `.dropdown-toggle` classes along with the `data-bs-toggle="dropdown"` attribute. Items inside the menu use the `.dropdown-item` class. You can add dividers, headers, and control the position (down, up, or right). Dropdowns can also be integrated with button groups for flexible layouts.',
          task: 'Create a dropdown menu with 3 items. Add a divider, a header, and a right-side dropdown. Also, create a vertical button group with a dropdown inside it.'
        },
        {
          title: '16. Collapsible and Accordion in Bootstrap',
          theory: `
  <h2 class="text-2xl font-bold mb-4">Collapsible and Accordion</h2>
  <p class="mb-2">In Bootstrap, <span class="font-semibold">Collapsible</span> and <span class="font-semibold">Accordion</span> components are used to show or hide large amounts of content effectively. Let’s first discuss <span class="text-blue-600 font-semibold">Collapsible</span>, then move to <span class="text-green-600 font-semibold">Accordion</span>.</p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Collapsible</h3>
  <p class="mb-2">A <span class="font-semibold">collapsible element</span> allows you to hide and show content with a button or a link. For example, you can create a button that says <code class="bg-gray-200 px-1 rounded">Click Me</code> and when pressed, extra content appears or disappears.</p>

  <ul class="list-disc list-inside mb-4">
    <li>Create a <code class="bg-gray-200 px-1 rounded">&lt;div&gt;</code> with the content.</li>
    <li>Add the class <code class="bg-gray-200 px-1 rounded">collapse</code> to it.</li>
    <li>Create a <code class="bg-gray-200 px-1 rounded">&lt;button&gt;</code> or link with <code class="bg-gray-200 px-1 rounded">data-bs-toggle="collapse"</code> and <code class="bg-gray-200 px-1 rounded">data-bs-target="#id"</code>.</li>
  </ul>

  <p class="mb-2">You can also add <code class="bg-gray-200 px-1 rounded">show</code> class to make the collapsible visible by default.</p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Accordion</h3>
  <p class="mb-2">An <span class="font-semibold">accordion</span> is a collection of multiple collapsible items where only one can stay open at a time. This is very useful for <span class="italic">FAQs</span> or sections where you want users to expand one part at a time.</p>

  <ul class="list-disc list-inside mb-4">
    <li>Each accordion item has a header (a button or link) and a collapsible body.</li>
    <li>Use <code class="bg-gray-200 px-1 rounded">data-bs-parent="#accordion"</code> to ensure only one item is open at a time.</li>
    <li>IDs like <code class="bg-gray-200 px-1 rounded">collapseOne</code>, <code class="bg-gray-200 px-1 rounded">collapseTwo</code> must be unique.</li>
  </ul>
  `,
          code: `
  <!-- Collapsible Example -->
  <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          data-bs-toggle="collapse" data-bs-target="#demo">
    Click Me
  </button>
  <div id="demo" class="collapse mt-4">
    <div class="p-4 border rounded-md bg-gray-100 text-gray-700">
      <p>This is line 1 of collapsible content.</p>
      <p>This is line 2 of collapsible content.</p>
      <p>This is line 3 of collapsible content.</p>
    </div>
  </div>

  <!-- Accordion Example -->
  <div class="accordion mt-6" id="accordionExample">
    <div class="accordion-item border rounded-md mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button bg-blue-600 text-white px-4 py-2 w-full text-left rounded-t-md"
                type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body p-4 bg-gray-100 text-gray-700 rounded-b-md">
          This is the content of accordion item #1.
        </div>
      </div>
    </div>

    <div class="accordion-item border rounded-md mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed bg-green-600 text-white px-4 py-2 w-full text-left rounded-t-md"
                type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body p-4 bg-gray-100 text-gray-700 rounded-b-md">
          This is the content of accordion item #2.
        </div>
      </div>
    </div>
  </div>
  `,
          explanation: 'Collapsible is used to hide or show large content using a button or link, while Accordion is a group of collapsible items that ensures only one section is open at a time. Both components improve user experience by saving space and organizing content neatly.',
          task: 'Create a collapsible section with a button that reveals some text. Then, implement an accordion with three items where only one can stay open at a time.'
        },
        {
          title: '17. Progress Bar in Bootstrap',
          theory: `
  <h2 class="text-2xl font-bold mb-4">Progress Bar</h2>
  <p class="mb-2">A <span class="font-semibold">progress bar</span> is used to visualize the progress of a task, such as downloading a file, uploading, or completing a process. In Bootstrap, it is created using the <code class="bg-gray-200 px-1 rounded">progress</code> and <code class="bg-gray-200 px-1 rounded">progress-bar</code> classes.</p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Features of Progress Bar</h3>
  <ul class="list-disc list-inside space-y-1">
    <li><span class="font-semibold">Basic Progress Bar:</span> Shows progress starting from 0% and increasing as the process continues.</li>
    <li><span class="font-semibold">Adjusting Width:</span> Controlled using <code class="bg-gray-200 px-1 rounded">style="width: 60%"</code> property.</li>
    <li><span class="font-semibold">Multiple Progress Bars:</span> You can display more than one progress bar on the same page with different percentages.</li>
    <li><span class="font-semibold">Labels:</span> Show the percentage inside the bar (e.g., "60%").</li>
    <li><span class="font-semibold">Height Adjustment:</span> Use CSS to adjust height of the bar.</li>
    <li><span class="font-semibold">Color Customization:</span> Bootstrap offers classes like <code class="bg-green-200 px-1 rounded">bg-success</code>, <code class="bg-red-200 px-1 rounded">bg-danger</code>, <code class="bg-yellow-200 px-1 rounded">bg-warning</code> etc.</li>
    <li><span class="font-semibold">Striped Progress Bar:</span> Use <code class="bg-gray-200 px-1 rounded">progress-bar-striped</code> class to add zebra stripes.</li>
    <li><span class="font-semibold">Animated Progress Bar:</span> Add <code class="bg-gray-200 px-1 rounded">progress-bar-animated</code> class for continuous animation effect.</li>
  </ul>
  `,
          code: `
  <style>
    .progress-bar {
      height: 30px; /* Adjust height */
    }
  </style>

  <div class="container mt-5">
    <h3 class="text-xl font-bold mb-4">Bootstrap 5 Progress Bar Examples</h3>

    <!-- Basic Progress Bar -->
    <div class="progress mb-3">
      <div class="progress-bar" style="width: 60%;" role="progressbar">60%</div>
    </div>

    <!-- Different Colors -->
    <div class="progress mb-3">
      <div class="progress-bar bg-primary" style="width: 60%;">60%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar bg-success" style="width: 90%;">90%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar bg-warning" style="width: 30%;">30%</div>
    </div>

    <!-- Striped Bars -->
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped" style="width: 60%;">60%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped bg-success" style="width: 90%;">90%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped bg-warning" style="width: 30%;">30%</div>
    </div>

    <!-- Animated Progress Bars -->
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%;">60%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 90%;">90%</div>
    </div>
    <div class="progress mb-3">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 30%;">30%</div>
    </div>
  </div>
  `,
          explanation: 'The progress bar component in Bootstrap provides an easy way to represent task completion visually. You can adjust its width, color, height, and add effects like stripes or animations. Labels can also be displayed inside the bar to indicate completion percentage.',
          task: 'Create a progress bar with 3 different colors showing 25%, 50%, and 75% completion. Add one striped and one animated progress bar as well.'
        },
        {
          title: '18. Bootstrap 5 Forms',
          theory: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold mb-3">Introduction to Bootstrap 5 Forms</h2>
      <p class="mb-2">Bootstrap 5 provides a unique and attractive look for <span class="font-semibold">&lt;form&gt;</span> elements. Using Bootstrap classes makes forms more visually appealing and functional.</p>
      
      <h3 class="text-lg font-semibold mt-4">Form-Control Class</h3>
      <p class="mb-2">The <span class="bg-gray-200 px-1 rounded">form-control</span> class is key for styling input fields (text, email, number, textarea). It ensures consistency and a clean design.</p>

      <h3 class="text-lg font-semibold mt-4">Form Label & Input Types</h3>
      <p class="mb-2">Labels use <span class="bg-gray-200 px-1 rounded">form-label</span> for alignment. Input types like <span class="italic">text</span>, <span class="italic">email</span>, <span class="italic">number</span> look professional when styled with Bootstrap classes.</p>

      <h3 class="text-lg font-semibold mt-4">Creating Forms</h3>
      <ul class="list-disc list-inside mb-2">
        <li>Use <span class="bg-gray-200 px-1 rounded">form-control</span> for each field</li>
        <li>Include placeholders</li>
        <li>Add validation</li>
        <li>Use <span class="bg-gray-200 px-1 rounded">btn btn-primary</span> for buttons</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4">Responsive Layouts</h3>
      <p class="mb-2">Use grid classes (<span class="bg-gray-200 px-1 rounded">row</span>, <span class="bg-gray-200 px-1 rounded">col</span>) for flexible inline forms.</p>

      <h3 class="text-lg font-semibold mt-4">Form Control Sizes</h3>
      <p class="mb-2">Use <span class="bg-gray-200 px-1 rounded">form-control-lg</span> for large, <span class="bg-gray-200 px-1 rounded">form-control-sm</span> for small fields.</p>

      <h3 class="text-lg font-semibold mt-4">Customization with Margins</h3>
      <p class="mb-2">Apply margin classes (<span class="bg-gray-200 px-1 rounded">mt-1</span>, <span class="bg-gray-200 px-1 rounded">mt-2</span>) for spacing between elements.</p>
    </div>
  `,
          code: `
    <form class="p-4 bg-white shadow rounded">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" placeholder="Enter your name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Enter your email">
      </div>
      <div class="mb-3">
        <label class="form-label">Number</label>
        <input type="number" class="form-control" placeholder="Enter your number">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  `,
          explanation: 'Bootstrap 5 forms use the form-control class for inputs and form-label for labels. Responsive layouts are created with the grid system. Sizes and margins can be customized with utility classes.',
          task: 'Create a form with Name, Email, and Number fields. Apply Bootstrap classes to make it styled, responsive, and neat.'
        },

        {
          title: '19. Bootstrap 5 Select Menu & Data List',
          theory: `
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <h2 class="text-xl font-bold mb-3">Select Menu</h2>
      <p class="mb-2">A <span class="font-semibold">&lt;select&gt;</span> menu lets users choose from predefined options. Bootstrap styles it with <span class="bg-gray-200 px-1 rounded">form-select</span>.</p>
      <ul class="list-disc list-inside mb-2">
        <li>Basic dropdown using <span class="bg-gray-200 px-1 rounded">&lt;option&gt;</span> tags</li>
        <li>Use <span class="bg-gray-200 px-1 rounded">multiple</span> attribute for multiple selections</li>
        <li>Size options: <span class="bg-gray-200 px-1 rounded">form-select-lg</span>, <span class="bg-gray-200 px-1 rounded">form-select-sm</span></li>
        <li>Disable menu with <span class="bg-gray-200 px-1 rounded">disabled</span></li>
      </ul>

      <h2 class="text-xl font-bold mb-3">Data List</h2>
      <p class="mb-2">A <span class="font-semibold">&lt;datalist&gt;</span> gives auto-complete options in an input field.</p>
      <ul class="list-disc list-inside">
        <li>Use <span class="bg-gray-200 px-1 rounded">&lt;input list=""&gt;</span> with <span class="bg-gray-200 px-1 rounded">&lt;datalist&gt;</span></li>
        <li>Bootstrap <span class="bg-gray-200 px-1 rounded">form-control</span> makes it polished</li>
      </ul>
    </div>
  `,
          code: `
    <div class="p-4 bg-white shadow rounded">
      <!-- Select Menu -->
      <label class="form-label">Choose a Game</label>
      <select class="form-select mb-3">
        <option>PUBG</option>
        <option>GTA</option>
        <option>Need for Speed</option>
      </select>

      <!-- Multi Select -->
      <label class="form-label">Choose Multiple Games</label>
      <select class="form-select mb-3" multiple>
        <option>PUBG</option>
        <option>GTA</option>
        <option>Need for Speed</option>
      </select>

      <!-- Data List -->
      <label class="form-label">Search Game</label>
      <input class="form-control mb-3" list="games" placeholder="Type to search...">
      <datalist id="games">
        <option value="PUBG">
        <option value="GTA">
        <option value="Need for Speed">
      </datalist>
    </div>
  `,
          explanation: 'The select menu provides predefined dropdown choices while the datalist gives auto-complete suggestions. Bootstrap classes like form-select and form-control style both neatly.',
          task: 'Create a form with one select menu, one multi-select menu, and one input with a datalist for games.'
        },
        {
          title: '20. Radio Buttons, Checkboxes & Toggle Switches',
          theory: `
    <h2 class="text-xl font-bold text-gray-800 mb-2">Checkboxes</h2>
    <p class="text-gray-700">Checkboxes allow users to select <span class="font-semibold">multiple options</span> from a list.</p>
    <ul class="list-disc list-inside text-gray-600">
      <li><strong>Usage:</strong> Multiple selections possible.</li>
      <li><strong>Styling:</strong> Use <code class="bg-gray-100 px-1 rounded">form-check</code>, <code class="bg-gray-100 px-1 rounded">form-check-input</code>, and <code class="bg-gray-100 px-1 rounded">form-check-label</code>.</li>
      <li><strong>Example:</strong> Hobbies like Swimming, Dancing, Singing (with one checked by default).</li>
    </ul>

    <h2 class="text-xl font-bold text-gray-800 mt-4 mb-2">Radio Buttons</h2>
    <p class="text-gray-700">Radio buttons allow users to select <span class="font-semibold">only one option</span> from a group.</p>
    <ul class="list-disc list-inside text-gray-600">
      <li><strong>Usage:</strong> One selection at a time.</li>
      <li><strong>Implementation:</strong> Use <code class="bg-gray-100 px-1 rounded">type="radio"</code> and ensure all belong to the same <code class="bg-gray-100 px-1 rounded">name</code>.</li>
      <li><strong>Example:</strong> Gender selection: Male / Female.</li>
    </ul>

    <h2 class="text-xl font-bold text-gray-800 mt-4 mb-2">Toggle Switches</h2>
    <p class="text-gray-700">Toggles are styled checkboxes that look like switches (e.g., for Dark Mode).</p>
    <ul class="list-disc list-inside text-gray-600">
      <li><strong>Usage:</strong> Modern ON/OFF control.</li>
      <li><strong>Styling:</strong> Use <code class="bg-gray-100 px-1 rounded">form-check form-switch</code>.</li>
      <li><strong>Example:</strong> Dark mode toggle (default ON with <code class="bg-gray-100 px-1 rounded">checked</code>).</li>
    </ul>
  `,
          code: `
    <!-- Checkboxes Example -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="swimming" checked>
      <label class="form-check-label" for="swimming">Swimming</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="dancing">
      <label class="form-check-label" for="dancing">Dancing</label>
    </div>

    <!-- Radio Buttons Example -->
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gender" id="male" checked>
      <label class="form-check-label" for="male">Male</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gender" id="female">
      <label class="form-check-label" for="female">Female</label>
    </div>

    <!-- Toggle Switch Example -->
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="darkMode" checked>
      <label class="form-check-label" for="darkMode">Enable Dark Mode</label>
    </div>
  `,
          explanation: 'Checkboxes allow multiple selections, radio buttons allow only one selection per group, and toggle switches are styled checkboxes for ON/OFF states.',
          task: 'Create a form where users can select their hobbies (multiple checkboxes), choose their gender (radio buttons), and toggle newsletter subscription (switch).'
        },
        {
          title: '21. Floating Labels',
          theory: `
    <h2 class="text-xl font-bold text-gray-800 mb-2">Concept</h2>
    <p class="text-gray-700">Floating labels move <span class="font-semibold">inside input fields</span> and float to the top when typing or focusing.</p>

    <h2 class="text-xl font-bold text-gray-800 mt-4 mb-2">Structure</h2>
    <p class="text-gray-700">Implemented with <code class="bg-gray-100 px-1 rounded">form-floating</code>. The label comes after the input element.</p>

    <h2 class="text-xl font-bold text-gray-800 mt-4 mb-2">Key Points</h2>
    <ul class="list-disc list-inside text-gray-600">
      <li>Requires a <code class="bg-gray-100 px-1 rounded">placeholder</code> for proper floating.</li>
      <li>Works with <code class="bg-gray-100 px-1 rounded">&lt;input&gt;</code>, <code class="bg-gray-100 px-1 rounded">&lt;textarea&gt;</code>, and <code class="bg-gray-100 px-1 rounded">&lt;select&gt;</code>.</li>
      <li>Select menus don’t animate; label stays at top left.</li>
    </ul>

    <h2 class="text-xl font-bold text-gray-800 mt-4 mb-2">Example</h2>
    <p class="text-gray-700">Text inputs and textareas with labels that float when typing.</p>
  `,
          code: `
    <!-- Floating Label Input -->
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="username" placeholder="Enter Name">
      <label for="username">Username</label>
    </div>

    <!-- Floating Label Textarea -->
    <div class="form-floating mb-3">
      <textarea class="form-control" placeholder="Enter message" id="message"></textarea>
      <label for="message">Message</label>
    </div>

    <!-- Floating Label Select -->
    <div class="form-floating mb-3">
      <select class="form-select" id="country">
        <option selected>Choose...</option>
        <option value="1">USA</option>
        <option value="2">UK</option>
        <option value="3">Pakistan</option>
      </select>
      <label for="country">Country</label>
    </div>
  `,
          explanation: 'Floating labels improve user experience by saving space and keeping forms clean. Labels float up when users type or focus inside fields.',
          task: 'Build a registration form with floating labels for name, email, password, and a country select dropdown.'
        },

        {
          title: '22. Carousel',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Carousel</h2>
<p class="text-gray-700 leading-relaxed">A <code>&lt;div&gt;</code> carousel is used to create sliding image galleries or content sliders. In Tailwind, you can manage layout and spacing using <span class="bg-yellow-100 text-pink-700 px-1 rounded">flex</span>, <span class="bg-yellow-100 text-pink-700 px-1 rounded">overflow-hidden</span>, <span class="bg-yellow-100 text-pink-700 px-1 rounded">w-full</span>, and <span class="bg-yellow-100 text-pink-700 px-1 rounded">h-screen</span> classes. Transitions like <span class="bg-yellow-100 text-pink-700 px-1 rounded">transition-transform</span> and <span class="bg-yellow-100 text-pink-700 px-1 rounded">duration-700</span> can make animations smooth.</p>
  `,
          code: `
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  `,
          explanation: 'This code creates a Bootstrap carousel with three slides. The "active" class defines the first visible slide. Navigation arrows help switch between slides.',
          task: 'Create a carousel with at least 4 images and add captions for each slide.'
        },
        {
          title: '23. Validation',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Form Validation</h2>
<p class="text-gray-700">Validation ensures user inputs are correct. Tailwind can style inputs using <span class="bg-yellow-100 text-pink-700 px-1 rounded">border</span>, <span class="bg-yellow-100 text-pink-700 px-1 rounded">focus:ring</span>, and <span class="bg-yellow-100 text-pink-700 px-1 rounded">text-red-500</span> for error states.</p>
  `,
          code: `
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" required>
    <div class="invalid-feedback">Please enter a username.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
  `,
          explanation: 'Bootstrap validation works with custom "invalid-feedback" messages. The "required" attribute ensures inputs must be filled.',
          task: 'Build a form with email and password fields, add validation, and show error messages when empty.'
        },
        {
          title: '24. Modal',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Modal</h2>
<p class="text-gray-700">A <code>&lt;div&gt;</code> modal overlays content on the page. Tailwind provides classes like <span class="bg-yellow-100 text-pink-700 px-1 rounded">fixed</span>, <span class="bg-yellow-100 text-pink-700 px-1 rounded">inset-0</span>, <span class="bg-yellow-100 text-pink-700 px-1 rounded">bg-black/50</span> for background overlay, and <span class="bg-yellow-100 text-pink-700 px-1 rounded">rounded-lg</span> for modal box styling.</p>
  `,
          code: `
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Modal</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Example Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">This is a modal body.</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
  `,
          explanation: 'This modal pops up when clicking the button. It has header, body, and footer sections with actions.',
          task: 'Create a modal that shows a form to collect user name and email.'
        },
        {
          title: '25. Popover',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Popover</h2>
<p class="text-gray-700 leading-relaxed">A <strong class="text-indigo-700">popover</strong> displays small contextual info when a user clicks or hovers on a trigger. With Tailwind, you can visually explain placement using <span class="px-1 rounded bg-yellow-100 text-pink-700">inline-flex</span>, arrows with <span class="px-1 rounded bg-yellow-100 text-pink-700">before:content-['']</span>, and spacing utilities like <span class="px-1 rounded bg-yellow-100 text-pink-700">mt-2</span>. Combine <span class="px-1 rounded bg-yellow-100 text-pink-700">shadow-lg</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">rounded-md</span>, and <span class="px-1 rounded bg-yellow-100 text-pink-700">bg-white</span> for a floating card look.</p>
<p class="text-gray-700">UX tips: keep popover content short, set clear <em class="italic text-indigo-600">title</em>, and ensure accessible triggers (keyboard focusable).</p>
  `,
          code: `
<!-- Popover trigger + init -->
<button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="This is the popover body.">Click for popover</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (el) { return new bootstrap.Popover(el) })
  });
</script>
  `,
          explanation: 'Bootstrap popovers require JavaScript initialization. The data attributes define title/content; the script upgrades triggers into interactive popovers.',
          task: 'Create four buttons with popovers placed top, right, bottom, and left, each with different content.'
        },
        {
          title: '26. ScrollSpy',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">ScrollSpy</h2>
<p class="text-gray-700">ScrollSpy automatically highlights nav links based on scroll position. Tailwind can style demo sections with <span class="px-1 rounded bg-yellow-100 text-pink-700">h-screen</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">snap-y snap-mandatory</span>, and vertical nav using <span class="px-1 rounded bg-yellow-100 text-pink-700">sticky top-0</span> to stay visible.</p>
<p class="text-gray-700">Keep section IDs unique, ensure the container has <span class="px-1 rounded bg-yellow-100 text-pink-700">relative</span> and a set height to allow scrolling.</p>
  `,
          code: `
<div class="row">
  <div class="col-3">
    <nav id="spyNav" class="nav flex-column nav-pills">
      <a class="nav-link" href="#sec-1">Section 1</a>
      <a class="nav-link" href="#sec-2">Section 2</a>
      <a class="nav-link" href="#sec-3">Section 3</a>
    </nav>
  </div>
  <div class="col-9">
    <div data-bs-spy="scroll" data-bs-target="#spyNav" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0" style="position:relative; height: 300px; overflow:auto;">
      <h4 id="sec-1">Section 1</h4>
      <p>...</p>
      <h4 id="sec-2">Section 2</h4>
      <p>...</p>
      <h4 id="sec-3">Section 3</h4>
      <p>...</p>
    </div>
  </div>
</div>
  `,
          explanation: 'The scrollable container watches headings and updates the nav links. data-bs-target must point to the nav wrapper.',
          task: 'Build a ScrollSpy with 5 sections and smooth scrolling; add a “Back to top” link at the bottom.'
        },
        {
          title: '27. Sidebar Navbar',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Sidebar Navbar</h2>
<p class="text-gray-700">A sidebar is a vertical navigation panel. With Tailwind, structure a sidebar using <span class="px-1 rounded bg-yellow-100 text-pink-700">w-64</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">h-screen</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">fixed</span>, and <span class="px-1 rounded bg-yellow-100 text-pink-700">bg-slate-800 text-slate-100</span>. Nest links with <span class="px-1 rounded bg-yellow-100 text-pink-700">space-y-1</span> and highlight active using <span class="px-1 rounded bg-yellow-100 text-pink-700">bg-slate-700</span>.</p>
<p class="text-gray-700">For mobile, pair with an overlay using <span class="px-1 rounded bg-yellow-100 text-pink-700">md:hidden</span> and transitions <span class="px-1 rounded bg-yellow-100 text-pink-700">transition-transform</span>.</p>
  `,
          code: `
<!-- Static vertical sidebar using Bootstrap utilities -->
<div class="d-flex">
  <nav class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style="width: 260px; min-height: 100vh;">
    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item"><a href="#" class="nav-link active">Dashboard</a></li>
      <li><a href="#" class="nav-link text-white">Orders</a></li>
      <li><a href="#" class="nav-link text-white">Products</a></li>
      <li><a href="#" class="nav-link text-white">Customers</a></li>
    </ul>
  </nav>
  <main class="p-4 flex-fill">Main content here...</main>
</div>
  `,
          explanation: 'A simple sidebar built with Bootstrap flex utilities and nav pills. On small screens, you could swap this for an offcanvas to make it collapsible.',
          task: 'Convert the static sidebar to an offcanvas that opens with a navbar toggler on mobile.'
        },
        {
          title: '28. Border Classes',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Border Utilities</h2>
<p class="text-gray-700">Use Tailwind borders to visually separate content: <span class="px-1 rounded bg-yellow-100 text-pink-700">border</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">border-2</span>, sides like <span class="px-1 rounded bg-yellow-100 text-pink-700">border-t</span>, colors such as <span class="px-1 rounded bg-yellow-100 text-pink-700">border-indigo-500</span>, and radius like <span class="px-1 rounded bg-yellow-100 text-pink-700">rounded-lg</span>. For dashed or dotted, use <span class="px-1 rounded bg-yellow-100 text-pink-700">border-dashed</span> or <span class="px-1 rounded bg-yellow-100 text-pink-700">border-dotted</span>.</p>
  `,
          code: `
<div class="mb-3 p-3 border">.border</div>
<div class="mb-3 p-3 border-top border-3">.border-top .border-3</div>
<div class="mb-3 p-3 border rounded-3">.border .rounded-3</div>
<div class="mb-3 p-3 border border-primary">.border .border-primary</div>
<div class="mb-3 p-3 border-start border-danger border-5 rounded-start">Left thick red border</div>
  `,
          explanation: 'Bootstrap provides border width, side-specific borders, colors, and radii to shape containers.',
          task: 'Create a pricing card that uses a thick left border for the “Most Popular” plan.'
        },
        {
          title: '29. Alignment Classes',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Alignment Utilities</h2>
<p class="text-gray-700">Tailwind simplifies alignment with <span class="px-1 rounded bg-yellow-100 text-pink-700">text-left/center/right</span>, and flex alignment via <span class="px-1 rounded bg-yellow-100 text-pink-700">flex</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">items-center</span>, and <span class="px-1 rounded bg-yellow-100 text-pink-700">justify-between</span>. For block alignment, use <span class="px-1 rounded bg-yellow-100 text-pink-700">mx-auto</span> to center fixed-width content.</p>
  `,
          code: `
<p class="text-start">Left</p>
<p class="text-center">Center</p>
<p class="text-end">Right</p>

<div class="d-flex justify-content-between align-items-center bg-light p-3">
  <span>Left</span>
  <span>Center</span>
  <span>Right</span>
</div>

<img src="https://via.placeholder.com/200x80" class="d-block mx-auto my-3" alt="centered">
  `,
          explanation: 'Use text alignment utilities for inline content and flex alignment utilities for distributing and centering items in a flex row.',
          task: 'Build a header bar with a logo on the left, nav in the center, and a CTA button on the right.'
        },
        {
          title: '30. Padding & Margin',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Spacing: Padding & Margin</h2>
<p class="text-gray-700">Tailwind spacing is scale-based: <span class="px-1 rounded bg-yellow-100 text-pink-700">p-4</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">px-6</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">py-3</span>, and margins like <span class="px-1 rounded bg-yellow-100 text-pink-700">mt-8</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">mx-auto</span>. Use responsive prefixes: <span class="px-1 rounded bg-yellow-100 text-pink-700">md:py-8</span>.</p>
  `,
          code: `
<div class="p-3 mb-2 bg-light">.p-3 .mb-2</div>
<div class="px-5 py-2 my-3 bg-light">.px-5 .py-2 .my-3</div>
<div class="m-4 p-4 border">.m-4 .p-4</div>
<div class="mt-5 mb-1 ps-4 pe-1 border">.mt-5 .mb-1 .ps-4 .pe-1</div>
  `,
          explanation: 'Bootstrap spacing utilities (m/p + sides + scale) let you quickly tune layout gaps without custom CSS.',
          task: 'Rebuild a card grid and fine-tune spacing using only Bootstrap spacing utilities.'
        },
        {
          title: '31. Offset Classes',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Grid Offsets</h2>
<p class="text-gray-700">Offsets add empty space to the left of a column. For Tailwind layouts, simulate with <span class="px-1 rounded bg-yellow-100 text-pink-700">ml-</span> spacing or grid columns (e.g., <span class="px-1 rounded bg-yellow-100 text-pink-700">col-span-*</span>). Keep content visually balanced on wide viewports.</p>
  `,
          code: `
<div class="container">
  <div class="row mb-3">
    <div class="col-md-4 offset-md-2 bg-light p-3">.col-md-4 .offset-md-2</div>
  </div>
  <div class="row">
    <div class="col-lg-3 offset-lg-3 bg-light p-3">.col-lg-3 .offset-lg-3</div>
    <div class="col-lg-3 bg-light p-3 ms-lg-3">.col-lg-3</div>
  </div>
</div>
  `,
          explanation: 'Offsets shift columns to the right within a 12-col grid. Useful for centering or staggering sections.',
          task: 'Center a 6-column form on desktop using offsets and make it full-width on mobile.'
        },
        {
          title: '32. Order Classes',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Grid Order</h2>
<p class="text-gray-700">Tailwind reorders flex/grid items via <span class="px-1 rounded bg-yellow-100 text-pink-700">order-*</span> (e.g., <span class="px-1 rounded bg-yellow-100 text-pink-700">order-1</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">md:order-3</span>). This supports content-first markup with different visual ordering at breakpoints.</p>
  `,
          code: `
<div class="row text-center">
  <div class="col-md-4 order-2 order-md-1 p-3 bg-light">A (order-2 md:order-1)</div>
  <div class="col-md-4 order-1 order-md-2 p-3 bg-light">B (order-1 md:order-2)</div>
  <div class="col-md-4 order-3 p-3 bg-light">C (order-3)</div>
</div>
  `,
          explanation: 'On mobile, B appears first; on md and up, A returns to the first position. Order utilities only affect visual order, not DOM order.',
          task: 'Create a two-column hero where image shows above text on mobile but to the right on desktop using order classes.'
        },
        {
          title: '33. Floating Image',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Floating Images</h2>
<p class="text-gray-700">Float images within text to wrap content around them. With Tailwind, use <span class="px-1 rounded bg-yellow-100 text-pink-700">float-right</span> or <span class="px-1 rounded bg-yellow-100 text-pink-700">float-left</span>, and clear with <span class="px-1 rounded bg-yellow-100 text-pink-700">clear-both</span>. Control size using <span class="px-1 rounded bg-yellow-100 text-pink-700">w-48</span> and add spacing like <span class="px-1 rounded bg-yellow-100 text-pink-700">ml-4</span>, <span class="px-1 rounded bg-yellow-100 text-pink-700">mb-2</span>.</p>
  `,
          code: `
<p>
  <img src="https://via.placeholder.com/180x120" class="img-fluid float-start me-3 mb-2 rounded" alt="">
  This paragraph wraps around the floated image. Lorem ipsum dolor sit amet, consectetur adipisicing elit...
</p>
<div class="clearfix"></div>
<p>
  <img src="https://via.placeholder.com/180x120" class="img-fluid float-end ms-3 mb-2 rounded" alt="">
  Another paragraph to demonstrate float-end. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
</p>
  `,
          explanation: 'Bootstrap float utilities move images left/right; .clearfix helps avoid layout overlap for subsequent content.',
          task: 'Build an article with an image floated on the first paragraph and a pull-quote floated on another.'
        },
        {
          title: '34. Project Build (Mini Landing Page)',
          theory: `
<h2 class="text-2xl font-bold text-indigo-600">Project: Mini Landing Page</h2>
<p class="text-gray-700">Combine components into a cohesive UI. Use Tailwind thinking to plan structure: a sticky header (<span class="px-1 rounded bg-yellow-100 text-pink-700">sticky top-0</span>), hero area (<span class="px-1 rounded bg-yellow-100 text-pink-700">grid md:grid-cols-2 gap-8</span>), feature cards (<span class="px-1 rounded bg-yellow-100 text-pink-700">shadow-lg rounded-xl</span>), testimonial carousel, and a contact form. Leverage <span class="px-1 rounded bg-yellow-100 text-pink-700">container mx-auto px-4</span> for content width and <span class="px-1 rounded bg-yellow-100 text-pink-700">space-y-12</span> for vertical rhythm.</p>
<p class="text-gray-700">Accessibility: ensure proper heading hierarchy, alt text for images, focusable nav, and form labels.</p>
  `,
          code: `
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">Brand</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMain">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navMain" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#carousel">Showcase</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        <li class="nav-item ms-lg-3"><a class="btn btn-primary" href="#contact">Get Started</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero -->
<header class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center gy-4">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold">Design Faster with Bootstrap</h1>
        <p class="lead text-muted">Build responsive, accessible websites with production-ready components.</p>
        <a href="#features" class="btn btn-primary btn-lg me-2">Explore</a>
        <a href="#contact" class="btn btn-outline-secondary btn-lg">Contact Us</a>
      </div>
      <div class="col-lg-6 text-center">
        <img src="https://via.placeholder.com/600x360" class="img-fluid rounded-3 shadow-sm" alt="">
      </div>
    </div>
  </div>
</header>

<!-- Features -->
<section id="features" class="py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Utility-first</h5>
            <p class="card-text">Compose UIs quickly using Bootstrap utilities and components.</p>
            <a href="#" class="card-link">Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Responsive</h5>
            <p class="card-text">Grid and helpers that adapt to any screen size.</p>
            <a href="#" class="card-link">Breakpoints</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Accessible</h5>
            <p class="card-text">ARIA-friendly components and sensible defaults.</p>
            <a href="#" class="card-link">Accessibility</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Showcase Carousel -->
<section id="carousel" class="py-5 bg-light">
  <div class="container">
    <div id="lpCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner rounded-3 shadow-sm">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1200x400?text=Slide+1" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>Beautiful layouts</h5><p>Craft stunning pages in minutes.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1200x400?text=Slide+2" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>Responsive by default</h5><p>Looks great on any device.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1200x400?text=Slide+3" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>Accessible components</h5><p>Inclusive experiences for all users.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#lpCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lpCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h3 class="mb-3">Contact Us</h3>
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-6">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" required>
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" required>
                <div class="invalid-feedback">Please provide a valid email.</div>
              </div>
              <div class="col-12">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="4" required></textarea>
                <div class="invalid-feedback">Please write a message.</div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary btn-lg" type="submit">Send</button>
              </div>
            </form>
            <script>
              (() => {
                'use strict';
                const forms = document.querySelectorAll('.needs-validation');
                Array.from(forms).forEach(form => {
                  form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
                });
              })();
            </script>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-4 border-top text-center text-muted">
  <div class="container">&copy; 2025 Brand — All rights reserved.</div>
</footer>
  `,
          explanation: 'The mini landing page stitches together a navbar, hero, features, carousel, validated form, and footer. It demonstrates practical composition of Bootstrap components.',
          task: 'Extend the project: add a ScrollSpy side nav, a modal CTA, and a pricing section with border accents and button groups.'
        }
      ]
    },

    intermediate: {
      title: "Intermediate Level Notes",
      topics: [
        {
          title: 'Responsive Utilities & Flexbox',
          theory: `
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Responsive Utilities & Flexbox</h2>
    <p class="mb-2">Bootstrap's flexbox utilities are built on CSS Flexbox and provide a complete system for creating flexible, responsive layouts. The flex utilities work with Bootstrap's breakpoint system to create layouts that adapt seamlessly across devices.</p>
    
    <ul class="list-disc pl-5 mb-2">
      <li><strong>Flexbox Container:</strong> The parent element that establishes flex context</li>
      <li><strong>Flex Items:</strong> Child elements that can be manipulated with flex properties</li>
      <li><strong>Main Axis:</strong> Primary direction of flex layout (horizontal by default)</li>
      <li><strong>Cross Axis:</strong> Perpendicular to main axis (vertical by default)</li>
      <li><strong>Responsive Breakpoints:</strong> xs (&lt;576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px)</li>
    </ul>

    <p class="mb-2 text-blue-500 font-bold">Flex Direction Classes:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>flex-row: Horizontal layout (default)</li>
      <li>flex-column: Vertical layout</li>
      <li>flex-row-reverse: Horizontal reversed</li>
      <li>flex-column-reverse: Vertical reversed</li>
      <li>Breakpoints: flex-sm-row, flex-md-column, etc.</li>
    </ul>

    <p class="mb-2 text-blue-500 font-bold">Justify Content (Main Axis):</p>
    <ul class="list-disc pl-5 mb-2">
      <li>justify-content-start: Items at start</li>
      <li>justify-content-end: Items at end</li>
      <li>justify-content-center: Items centered</li>
      <li>justify-content-between: Space between items</li>
      <li>justify-content-around: Space around items</li>
      <li>justify-content-evenly: Equal space distribution</li>
    </ul>

    <p class="mb-2 text-blue-500 font-bold">Align Items (Cross Axis):</p>
    <ul class="list-disc pl-5 mb-2">
      <li>align-items-start: Items at start</li>
      <li>align-items-end: Items at end</li>
      <li>align-items-center: Items centered</li>
      <li>align-items-baseline: Items aligned to baseline</li>
      <li>align-items-stretch: Items stretch to fill</li>
    </ul>

    <p class="mb-2 text-blue-500 font-bold">Flex Properties:</p>
    <ul class="list-disc pl-5">
      <li>flex-fill: Equal width/height</li>
      <li>flex-grow-1: Grow to fill space</li>
      <li>flex-shrink-1: Shrink when needed</li>
      <li>flex-wrap: Allow wrapping</li>
      <li>flex-nowrap: Prevent wrapping</li>
    </ul>
  </div>
  `,
          code: `
  <!-- Basic Flex Container -->
  <div class="d-flex justify-content-between align-items-center bg-light p-3 mb-3 border">
    <div class="bg-primary text-white p-2 rounded">Logo</div>
    <div class="bg-secondary text-white p-2 rounded">Navigation</div>
  </div>

  <!-- Responsive Flex Direction -->
  <div class="d-flex flex-column flex-md-row justify-content-around align-items-center bg-info p-3 mb-3">
    <div class="bg-warning p-3 m-2 rounded">Item 1</div>
    <div class="bg-success p-3 m-2 rounded text-white">Item 2</div>
    <div class="bg-danger p-3 m-2 rounded text-white">Item 3</div>
  </div>

  <!-- Flex Wrap Example -->
  <div class="d-flex flex-wrap justify-content-center bg-light p-3 mb-3">
    <div class="bg-primary text-white p-2 m-1 rounded" style="min-width: 150px;">Card 1</div>
    <div class="bg-secondary text-white p-2 m-1 rounded" style="min-width: 150px;">Card 2</div>
    <div class="bg-success text-white p-2 m-1 rounded" style="min-width: 150px;">Card 3</div>
    <div class="bg-warning p-2 m-1 rounded" style="min-width: 150px;">Card 4</div>
  </div>

  <!-- Advanced Flex Properties -->
  <div class="d-flex bg-light p-3 mb-3" style="height: 200px;">
    <div class="flex-fill bg-primary text-white p-2 m-1 rounded d-flex align-items-center justify-content-center">Flex Fill</div>
    <div class="flex-grow-1 bg-secondary text-white p-2 m-1 rounded d-flex align-items-center justify-content-center">Flex Grow</div>
    <div class="flex-shrink-1 bg-success text-white p-2 m-1 rounded d-flex align-items-center justify-content-center">Flex Shrink</div>
  </div>

  <!-- Complete Responsive Header -->
  <header class="bg-dark text-white">
    <div class="container-fluid">
      <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center py-3">
        <!-- Logo Section -->
        <div class="d-flex align-items-center mb-2 mb-lg-0">
          <img src="https://via.placeholder.com/40" alt="Logo" class="rounded me-2">
          <h4 class="mb-0">Brand Name</h4>
        </div>
        
        <!-- Navigation Links -->
        <nav class="d-flex flex-column flex-lg-row align-items-center">
          <a href="#" class="text-white text-decoration-none mx-2 my-1 my-lg-0">Home</a>
          <a href="#" class="text-white text-decoration-none mx-2 my-1 my-lg-0">About</a>
          <a href="#" class="text-white text-decoration-none mx-2 my-1 my-lg-0">Services</a>
          <a href="#" class="text-white text-decoration-none mx-2 my-1 my-lg-0">Contact</a>
        </nav>
        
        <!-- Action Buttons -->
        <div class="d-flex align-items-center mt-2 mt-lg-0">
          <button class="btn btn-outline-light btn-sm me-2">Login</button>
          <button class="btn btn-primary btn-sm">Sign Up</button>
        </div>
      </div>
    </div>
  </header>
  `,
          explanation: "These examples demonstrate how to create responsive layouts using Bootstrap's flex utilities. By using properties like flex-direction, justify-content, align-items, flex-wrap, flex-fill, flex-grow, and flex-shrink, you can control the alignment and sizing of items. In the header, the logo, navigation, and buttons are aligned responsively.",
          task: 'Ek responsive card layout create karein jisme multiple cards flex-wrap ke saath wrap ho aur har card me image, title aur description ho.'
        },
        {
          title: 'Advanced Grid Layouts',
          theory: `
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Advanced Grid Layouts</h2>
    <p class="mb-2">Bootstrap's grid system is a 12-column flexible layout system built with CSS Flexbox. It's mobile-first and responsive, allowing complex layouts with minimal code.</p>
    
    <ul class="list-disc pl-5 mb-2">
      <li><strong>Container:</strong> .container (fixed-width) or .container-fluid (full-width)</li>
      <li><strong>Row:</strong> .row creates horizontal groups of columns</li>
      <li><strong>Columns:</strong> .col-* classes define column width and behavior</li>
      <li><strong>Gutters:</strong> Spacing between columns using .g-* classes</li>
    </ul>

    <p class="mb-2">Column Sizing:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Auto-layout: .col (equal width)</li>
      <li>Specific width: .col-6 (6/12 columns = 50%)</li>
      <li>Responsive: .col-md-4 (4/12 on medium screens and up)</li>
      <li>Mixed: .col-12 col-md-6 col-lg-4 (responsive sizing)</li>
    </ul>

    <p class="mb-2">Grid Breakpoints:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>xs: &lt;576px (default, no infix)</li>
      <li>sm: ≥576px</li>
      <li>md: ≥768px</li>
      <li>lg: ≥992px</li>
      <li>xl: ≥1200px</li>
      <li>xxl: ≥1400px</li>
    </ul>

    <p class="mb-2">Gutter Classes:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.g-0: No gutters</li>
      <li>.g-1 to .g-5: Increasing gutter sizes</li>
      <li>.gx-*: Horizontal gutters only</li>
      <li>.gy-*: Vertical gutters only</li>
    </ul>

    <p class="mb-2">Offset & Order Classes:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.offset-{number}: Move column right</li>
      <li>.offset-{breakpoint}-{number}: Responsive offset</li>
      <li>.order-{number}: Change visual order</li>
      <li>.order-first: Move to beginning</li>
      <li>.order-last: Move to end</li>
    </ul>
  </div>
  `,
          code: `
  <div class="container-fluid">
    <!-- Equal Width Columns -->
    <h3>Equal Width Columns</h3>
    <div class="row g-3 mb-4">
      <div class="col">
        <div class="demo-col p-3 bg-blue-500 text-white rounded">Auto Column 1</div>
      </div>
      <div class="col">
        <div class="demo-col p-3 bg-blue-600 text-white rounded">Auto Column 2</div>
      </div>
      <div class="col">
        <div class="demo-col p-3 bg-blue-700 text-white rounded">Auto Column 3</div>
      </div>
    </div>

    <!-- Responsive Columns -->
    <h3>Responsive Columns</h3>
    <div class="row g-3 mb-4">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="demo-col p-3 bg-green-500 text-white rounded">Responsive 1</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="demo-col p-3 bg-green-600 text-white rounded">Responsive 2</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="demo-col p-3 bg-green-700 text-white rounded">Responsive 3</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="demo-col p-3 bg-green-800 text-white rounded">Responsive 4</div>
      </div>
    </div>

    <!-- Mixed Column Sizes -->
    <h3>Mixed Column Sizes</h3>
    <div class="row g-3 mb-4">
      <div class="col-md-8">
        <div class="demo-col p-3 bg-yellow-500 rounded">Main Content (8/12)</div>
      </div>
      <div class="col-md-4">
        <div class="demo-col p-3 bg-yellow-600 rounded">Sidebar (4/12)</div>
      </div>
    </div>

    <!-- Nested Grids -->
    <h3>Nested Grids</h3>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <div class="demo-col p-3 bg-gray-200 rounded">
          <h5>Parent Column 1</h5>
          <div class="row g-2">
            <div class="col-6">
              <div class="bg-blue-500 text-white p-2 rounded">Nested 1</div>
            </div>
            <div class="col-6">
              <div class="bg-blue-600 text-white p-2 rounded">Nested 2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="demo-col p-3 bg-gray-200 rounded">
          <h5>Parent Column 2</h5>
          <div class="row g-2">
            <div class="col-4">
              <div class="bg-green-500 text-white p-2 rounded">Nested 1</div>
            </div>
            <div class="col-4">
              <div class="bg-yellow-400 p-2 rounded">Nested 2</div>
            </div>
            <div class="col-4">
              <div class="bg-teal-500 text-white p-2 rounded">Nested 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
          explanation: "These examples demonstrate how to create equal-width, responsive, mixed, and nested columns using Bootstrap's grid system. Gutter, offset, and order classes are used to control spacing and visual order. The grid system is mobile-first and responsive, making it easy to implement complex layouts.",
          task: "Create a dashboard layout that includes multiple sections: a header, a sidebar, a main content area, and a cards grid. Make the columns and gutters responsive."
        },
        {
          title: 'Cards Advanced',
          theory: `
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Cards Advanced</h2>
    <p class="mb-2">Bootstrap cards are flexible content containers that can include headers, footers, images, and various content types. They're perfect for displaying structured information in a visually appealing way.</p>
    
    <ul class="list-disc pl-5 mb-2">
      <li><strong>Card Container:</strong> .card - Main wrapper</li>
      <li><strong>Card Header:</strong> .card-header - Top section</li>
      <li><strong>Card Body:</strong> .card-body - Main content area</li>
      <li><strong>Card Footer:</strong> .card-footer - Bottom section</li>
      <li><strong>Card Image:</strong> .card-img-top, .card-img-bottom - Images</li>
      <li><strong>Card Title:</strong> .card-title - Headings</li>
      <li><strong>Card Text:</strong> .card-text - Paragraphs</li>
    </ul>

    <p class="mb-2">Card Styling Options:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Background Colors: .bg-primary, .bg-secondary, .bg-success, etc.</li>
      <li>Text Colors: .text-white, .text-muted, .text-primary</li>
      <li>Borders: .border-0, .border-primary, .border-success</li>
      <li>Shadows: .shadow-sm, .shadow, .shadow-lg</li>
      <li>Rounded Corners: .rounded, .rounded-top, .rounded-bottom</li>
    </ul>

    <p class="mb-2">Card Layout Variations:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Horizontal Cards: Use .row and .col inside card with .g-0</li>
      <li>Card Groups: .card-group for connected cards</li>
      <li>Card Decks: Equal height cards in a row</li>
      <li>Card Columns: Masonry-like layout (deprecated in Bootstrap 5)</li>
    </ul>
  </div>
  `,
          code: `
  <div class="container my-5">
    <div class="row g-4">
      <!-- Basic Card -->
      <div class="col-md-4">
        <div class="card">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">Basic Card</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <!-- Card with Header and Footer -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h6 class="mb-0">Card Header</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special Title Treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-outline-primary">Learn More</a>
          </div>
          <div class="card-footer text-muted">
            <small>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      <!-- Card with List Group -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Features</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Feature 1
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Feature 2
              <span class="badge bg-success rounded-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Feature 3
              <span class="badge bg-warning rounded-pill">1</span>
            </li>
          </ul>
          <div class="card-body">
            <a href="#" class="btn btn-primary w-100">View All Features</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
          explanation: "These examples demonstrate how to create visually appealing content blocks using different Bootstrap card components (header, body, footer, images) and layout variations (basic, with header/footer, list group). Card styling options include using background, text color, borders, shadows, and rounded corners.",
          task: "Create an e-commerce product card that includes an image, product title, description, price, and an add-to-cart button. Arrange the cards in a responsive grid."
        },
        {
          title: 'Navbar Advanced',
          theory: `
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Navbar Advanced</h2>
    <p class="mb-2">Bootstrap navbars are responsive navigation headers that include support for branding, navigation links, forms, and other components. They collapse on smaller screens and can be customized extensively.</p>

    <ul class="list-disc pl-5 mb-2">
      <li><strong>Navbar Container:</strong> .navbar - Main wrapper</li>
      <li><strong>Navbar Brand:</strong> .navbar-brand - Logo or brand name</li>
      <li><strong>Navbar Toggler:</strong> .navbar-toggler - Mobile menu button</li>
      <li><strong>Navbar Collapse:</strong> .navbar-collapse - Collapsible content</li>
      <li><strong>Navbar Nav:</strong> .navbar-nav - Navigation links container</li>
      <li><strong>Nav Items:</strong> .nav-item and .nav-link - Individual links</li>
    </ul>

    <p class="mb-2">Navbar Positioning:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.fixed-top: Fixed to top of viewport</li>
      <li>.fixed-bottom: Fixed to bottom of viewport</li>
      <li>.sticky-top: Sticky positioning (stays at top when scrolling)</li>
    </ul>

    <p class="mb-2">Navbar Color Schemes:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.navbar-light: Light background with dark text</li>
      <li>.navbar-dark: Dark background with light text</li>
      <li>Background colors: .bg-primary, .bg-dark, .bg-light, etc.</li>
    </ul>

    <p class="mb-2">Responsive Behavior:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.navbar-expand-{breakpoint}: When to expand navbar</li>
      <li>.navbar-toggler: Mobile menu button</li>
      <li>.collapse .navbar-collapse: Collapsible content area</li>
    </ul>

    <p class="mb-2">Navigation Components:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.navbar-nav: Main navigation container</li>
      <li>.nav-item: Individual navigation items</li>
      <li>.nav-link: Navigation links with proper styling</li>
      <li>.active: Highlights current page</li>
    </ul>
  </div>
  `,
          code: `
  <!-- Basic Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand fw-bold" href="#">
        <i class="fas fa-rocket me-2"></i>TechCorp
      </a>

      <!-- Mobile Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Content -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Main Navigation -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Web Development</a></li>
              <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Consulting</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>

        <!-- Right Side Items -->
        <div class="d-flex align-items-center">
          <!-- Search Form -->
          <form class="d-flex me-3" role="search">
            <div class="input-group">
              <input class="form-control" type="search" placeholder="Search..." style="width: 200px;">
              <button class="btn btn-outline-light" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>

          <!-- User Actions -->
          <div class="d-flex align-items-center">
            <button class="btn btn-outline-light me-2">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge bg-danger ms-1">3</span>
            </button>
            <div class="dropdown">
              <button class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
                <i class="fas fa-user me-1"></i>Account
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `,
          explanation: "These examples demonstrate how to create responsive and functional navigation headers using Bootstrap navbar components (brand, toggler, collapsible nav, nav items, search forms, user actions). Navbar color schemes, positioning, and responsive expansion breakpoints can be customized.",
          task: "Create a complete e-commerce navbar that includes a brand logo, navigation links, search bar, shopping cart, and user account dropdown. The navbar should be responsive and collapse on mobile devices."
        },
        {
          title: 'Forms Advanced',
          theory: `
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Forms Advanced</h2>
    <p class="mb-2">Bootstrap forms provide a comprehensive system for creating accessible, responsive, and visually appealing forms. Includes validation states, input groups, custom controls, and layout options.</p>

    <ul class="list-disc pl-5 mb-2">
      <li><strong>Form Controls:</strong> .form-control for inputs, textareas, selects</li>
      <li><strong>Form Labels:</strong> .form-label for proper labeling</li>
      <li><strong>Form Text:</strong> .form-text for help text</li>
      <li><strong>Input Groups:</strong> .input-group for combined inputs with icons or buttons</li>
      <li><strong>Validation States:</strong> .is-valid, .is-invalid with feedback messages</li>
      <li><strong>Custom Controls:</strong> Checkboxes, radios, switches, ranges</li>
    </ul>

    <p class="mb-2">Form Validation:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.was-validated: Applied on form after submission to trigger validation</li>
      <li>.valid-feedback / .invalid-feedback: Shows messages based on input validity</li>
    </ul>

    <p class="mb-2">Input Groups:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.input-group: Wrap inputs with addon text/icons</li>
      <li>.input-group-text: For icons or text inside input group</li>
    </ul>

    <p class="mb-2">Custom Form Controls:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.form-check: Checkboxes and radios container</li>
      <li>.form-switch: Toggle switches</li>
      <li>.form-range: Range sliders</li>
      <li>.form-select: Styled select dropdowns</li>
    </ul>

    <p class="mb-2">Form Sizing:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>.form-control-sm / .form-control-lg: Small or large inputs</li>
      <li>.input-group-sm / .input-group-lg: Input group sizing</li>
      <li>.form-select-sm / .form-select-lg: Select dropdown sizing</li>
    </ul>
  </div>
  `,
          code: `
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0"><i class="fas fa-user-plus me-2"></i>User Registration</h4>
          </div>
          <div class="card-body">
            <form class="needs-validation" novalidate>
              <!-- Personal Information -->
              <div class="row mb-4">
                <div class="col-12">
                  <h5 class="text-primary border-bottom pb-2 mb-3">
                    <i class="fas fa-user me-2"></i>Personal Information
                  </h5>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input type="text" class="form-control" id="firstName" required>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a valid first name.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName" class="form-label">Last Name *</label>
                  <input type="text" class="form-control" id="lastName" required>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a valid last name.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email *</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                    <input type="email" class="form-control" id="email" required>
                    <div class="valid-feedback">Email is valid!</div>
                    <div class="invalid-feedback">Please provide a valid email.</div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                    <input type="tel" class="form-control" id="phone" placeholder="+1 (555) 123-4567">
                  </div>
                  <div class="form-text">Optional: For account security.</div>
                </div>
              </div>

              <!-- Account Security -->
              <div class="row mb-4">
                <div class="col-12">
                  <h5 class="text-primary border-bottom pb-2 mb-3">
                    <i class="fas fa-lock me-2"></i>Account Security
                  </h5>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="username" class="form-label">Username *</label>
                  <div class="input-group">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" required>
                    <div class="valid-feedback">Username is available!</div>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="password" class="form-label">Password *</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="password" required>
                    <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                      <i class="fas fa-eye"></i>
                    </button>
                    <div class="invalid-feedback">Password must be at least 8 characters.</div>
                  </div>
                  <div class="progress mt-2" style="height: 5px;">
                    <div class="progress-bar" id="passwordStrength" style="width: 0%"></div>
                  </div>
                  <div class="form-text">
                    Password must contain uppercase, lowercase, and numbers.
                  </div>
                </div>
              </div>

              <!-- Preferences -->
              <div class="row mb-4">
                <div class="col-md-6 mb-3">
                  <label for="country" class="form-label">Country *</label>
                  <select class="form-select" id="country" required>
                    <option value="">Choose your country...</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                  </select>
                  <div class="invalid-feedback">Please select your country.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="language" class="form-label">Preferred Language</label>
                  <select class="form-select" id="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
              </div>

              <!-- Submit -->
              <div class="row">
                <div class="col-12 d-flex justify-content-end gap-2">
                  <button type="reset" class="btn btn-outline-danger">Reset</button>
                  <button type="submit" class="btn btn-primary">Create Account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
          explanation: "This form example demonstrates how to create advanced, accessible, and visually appealing forms using Bootstrap form controls, validation states, input groups, custom checkboxes/radios, switches, and a responsive layout.",
          task: "Create a contact form that includes user information fields, a message textarea, preference checkboxes, and validation feedback. The form should be responsive and interactive."
        },
      ]

    },
    advanced: {
      title: "Advance Level Notes",
      topics: [
        {
          title: 'Custom Bootstrap Theme (SCSS variables, colors)',
          theory: `<div class="bg-gray-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Custom Theme Concept</h2>
                <p class="text-gray-700 mb-2">
                  Customize the look of your website by overriding default styles. You can change:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Primary & secondary colors</li>
                  <li>Font family & size</li>
                  <li>Spacing & borders</li>
                  <li>Buttons, cards, navbars, and forms</li>
                </ul>
                <p class="text-gray-700 mt-2">
                  Tailwind classes can also be used to apply colors, padding, and typography without modifying SCSS.
                </p>
              </div>`,
          code: `// SCSS example
$primary: #1abc9c;
$secondary: #34495e;
$font-family-base: 'Roboto', sans-serif;
$body-bg: #f8f9fa;
@import "bootstrap";`,
          explanation: 'Custom Bootstrap themes let you control global design elements via SCSS variables. This reduces repetitive CSS and enforces design consistency.',
          task: 'Create a custom theme by changing primary and secondary colors and apply it to a small webpage with navbar, buttons, and cards.'
        },
        {
          title: 'Offcanvas Sidebar & Sticky Components',
          theory: `<div class="bg-blue-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Offcanvas & Sticky Concept</h2>
                <p class="text-gray-700 mb-2">
                  Offcanvas sidebars provide hidden navigation or content panels. Sticky elements remain fixed on scroll.
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Use <code>sticky top-0</code> for headers</li>
                  <li>Use <code>absolute / fixed</code> with positioning utilities</li>
                  <li>Tailwind's <code>translate-x-full / -translate-x-full</code> can animate offcanvas slides</li>
                </ul>
              </div>`,
          code: `<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
  Open Sidebar
</button>
<div class="offcanvas offcanvas-start" id="sidebar">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="list-group">
      <li class="list-group-item">Dashboard</li>
      <li class="list-group-item">Profile</li>
      <li class="list-group-item">Settings</li>
    </ul>
  </div>
</div>
<div class="sticky-top bg-light p-3">Sticky Header</div>`,
          explanation: 'Offcanvas sidebars enhance UX by hiding extra navigation. Sticky elements improve usability for persistent menus or toolbars.',
          task: 'Build a sticky header with an offcanvas sidebar containing navigation links.'
        },
        {
          title: 'Advanced Carousel (multi-item, custom controls)',
          theory: `<div class="bg-yellow-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Carousel Concept</h2>
                <p class="text-gray-700 mb-2">
                  Carousels allow multiple items to slide horizontally. You can:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Display multiple items per slide</li>
                  <li>Use custom arrows and indicators</li>
                  <li>Apply Tailwind classes for spacing and borders</li>
                  <li>Make them responsive for all screens</li>
                </ul>
              </div>`,
          code: `<div id="multiItemCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row g-3">
        <div class="col-md-4"><img src="1.jpg" class="d-block w-100"></div>
        <div class="col-md-4"><img src="2.jpg" class="d-block w-100"></div>
        <div class="col-md-4"><img src="3.jpg" class="d-block w-100"></div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row g-3">
        <div class="col-md-4"><img src="4.jpg" class="d-block w-100"></div>
        <div class="col-md-4"><img src="5.jpg" class="d-block w-100"></div>
        <div class="col-md-4"><img src="6.jpg" class="d-block w-100"></div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`,
          explanation: 'Multi-item carousels display more content per slide. Custom controls and indicators enhance user interaction.',
          task: 'Create a 3-items-per-slide product carousel with custom previous/next buttons.'
        },
        {
          title: 'ScrollSpy Advanced & Smooth Scrolling',
          theory: `<div class="bg-green-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">ScrollSpy Concept</h2>
                <p class="text-gray-700 mb-2">
                  Highlight menu links based on scroll position with smooth scrolling:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Use anchor links with IDs</li>
                  <li>Tailwind's <code>scroll-smooth</code> class for smooth scrolling</li>
                  <li>Combine with fixed navbars for better UX</li>
                </ul>
              </div>`,
          code: `<nav class="navbar fixed-top bg-light p-3">
  <ul class="nav">
    <li class="nav-item"><a class="nav-link" href="#section1">Section 1</a></li>
    <li class="nav-item"><a class="nav-link" href="#section2">Section 2</a></li>
  </ul>
</nav>
<section id="section1" class="h-screen bg-gray-200 scroll-smooth"></section>
<section id="section2" class="h-screen bg-gray-300 scroll-smooth"></section>`,
          explanation: 'ScrollSpy automatically highlights sections in navigation. Smooth scrolling improves UX for one-page websites.',
          task: 'Implement a smooth scrolling single-page layout with scrollspy highlighting active menu items.'
        },
        {
          title: 'Bootstrap + JS Frameworks (React, Vue, Angular)',
          theory: `<div class="bg-purple-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Framework Integration Concept</h2>
                <p class="text-gray-700 mb-2">
                  Bootstrap CSS works with JS frameworks by:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Using wrapper components like react-bootstrap</li>
                  <li>Applying Tailwind for utility-first styling</li>
                  <li>Combining dynamic JS behavior with static Bootstrap styling</li>
                </ul>
              </div>`,
          code: `import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function App() {
  return (
    <>
      <Button variant="primary">Open Modal</Button>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Example Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal content goes here</Modal.Body>
      </Modal>
    </>
  );
}`,
          explanation: 'JS frameworks handle dynamic UI updates. Bootstrap provides consistent styling for components like buttons, modals, and forms.',
          task: 'Build a React app with react-bootstrap buttons, modals, and forms integrated.'
        },
        {
          title: 'Accessibility (A11y) & Keyboard Navigation',
          theory: `<div class="bg-pink-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Accessibility Concept</h2>
                <p class="text-gray-700 mb-2">
                  Make components accessible by:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Adding <code>aria-label</code> to interactive elements</li>
                  <li>Using semantic HTML elements</li>
                  <li>Ensuring keyboard focus and navigation</li>
                  <li>Providing screen reader text for icons</li>
                </ul>
              </div>`,
          code: `<button class="btn btn-danger" aria-label="Close alert">
  <span aria-hidden="true">&times;</span>
</button>
<a href="#content" class="sr-only focus:not-sr-only">Skip to content</a>`,
          explanation: 'Accessibility ensures all users, including those with disabilities, can navigate and interact with the interface using keyboard and assistive technologies.',
          task: 'Add ARIA attributes and keyboard navigation support to all buttons, links, and form inputs.'
        },
        {
          title: 'Performance Optimization',
          theory: `<div class="bg-gray-200 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Performance Optimization Concept</h2>
                <p class="text-gray-700 mb-2">
                  Optimize website performance by:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Importing only required Bootstrap components</li>
                  <li>Using Tailwind purge to remove unused classes</li>
                  <li>Minifying CSS and JS</li>
                  <li>Lazy loading images and scripts</li>
                </ul>
              </div>`,
          code: `// SCSS partial import
@import "bootstrap/functions";
@import "bootstrap/variables";
@import "bootstrap/grid";
@import "bootstrap/buttons";`,
          explanation: 'Performance optimization reduces page load time and bandwidth by including only necessary CSS/JS.',
          task: 'Optimize a webpage to load only grid and button components instead of full Bootstrap CSS.'
        },
        {
          title: 'Complex Forms & Dynamic Validation',
          theory: `<div class="bg-blue-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Complex Forms Concept</h2>
                <p class="text-gray-700 mb-2">
                  Forms can include:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Input groups with icons</li>
                  <li>Checkboxes, radios, switches</li>
                  <li>Select menus with multiple options</li>
                  <li>Live validation with JavaScript</li>
                  <li>Responsive layouts</li>
                </ul>
              </div>`,
          code: `<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <div class="input-group">
      <span class="input-group-text">@</span>
      <input type="email" class="form-control" id="email" required>
      <div class="invalid-feedback">Enter a valid email</div>
    </div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required>
    <div class="invalid-feedback">Enter a valid password</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`,
          explanation: 'Complex forms enhance UX with clear input grouping, validation feedback, and optional dynamic checks.',
          task: 'Create a multi-section registration form with live validation, password strength meter, and input groups.'
        },
        {
          title: 'Progress Bars Advanced (animated, stacked)',
          theory: `<div class="bg-yellow-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Progress Bars Concept</h2>
                <p class="text-gray-700 mb-2">
                  Display progress visually using:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Single progress bars</li>
                  <li>Stacked progress bars for multiple tasks</li>
                  <li>Animated bars for dynamic updates</li>
                  <li>Tailwind classes for color and width</li>
                </ul>
              </div>`,
          code: `<div class="progress" style="height: 20px;">
  <div class="progress-bar bg-success" role="progressbar" style="width: 50%"></div>
  <div class="progress-bar bg-warning" role="progressbar" style="width: 25%"></div>
</div>`,
          explanation: 'Stacked and animated progress bars provide visual feedback for task completion, uploads, or skill tracking.',
          task: 'Build an animated stacked progress bar showing multiple task completion percentages.'
        },
        {
          title: 'Real-World Layouts (dashboards, e-commerce grids)',
          theory: `<div class="bg-green-100 p-6 rounded-lg shadow">
                <h2 class="text-2xl font-bold mb-4">Dashboard & Grid Layouts</h2>
                <p class="text-gray-700 mb-2">
                  Real-world layouts combine multiple components:
                </p>
                <ul class="list-disc list-inside text-gray-700">
                  <li>Grid system for cards and products</li>
                  <li>Sticky navbars and offcanvas sidebars</li>
                  <li>Responsive design for desktop & mobile</li>
                  <li>Interactive components like modals, tabs, and carousels</li>
                </ul>
              </div>`,
          code: `<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card p-3 mb-3">Card 1</div>
    </div>
    <div class="col-md-4">
      <div class="card p-3 mb-3">Card 2</div>
    </div>
    <div class="col-md-4">
      <div class="card p-3 mb-3">Card 3</div>
    </div>
  </div>
</div>`,
          explanation: 'Combine grids, cards, navbars, and offcanvas menus to create professional dashboards or e-commerce layouts.',
          task: 'Design a responsive dashboard with 3-column cards, sticky navbar, and offcanvas sidebar.'
        }
      ]
    }
  };

  const finalProject = {
  title: "Final Project: Complete Restaurant Website with Bootstrap",
  description: "Style the complete restaurant website using Bootstrap components, utilities, responsive grid, cards, forms, navigation, modals, and interactive elements.",
  requirements: [
    "Use Bootstrap grid system (row, col) and containers for layout",
    "Create a responsive navbar with dropdowns, collapse, and active states",
    "Design the food menu with Bootstrap cards and hover effects",
    "Style forms (contact & reservation) using Bootstrap form controls, validation, and floating labels",
    "Use Bootstrap typography classes for headings, paragraphs, and lists",
    "Apply pseudo-classes using Bootstrap utilities (hover, focus, active states)",
    "Add background images, gradients, and overlay effects using Bootstrap utilities",
    "Include responsive behavior with Bootstrap breakpoints (sm, md, lg, xl)",
    "Implement transitions and animations using Bootstrap classes or utilities",
    "Use Bootstrap buttons, badges, spinners, modals, and other interactive components",
    "Ensure accessibility-friendly design using ARIA attributes and focus outlines",
    "Optimize HTML and Bootstrap usage using container classes, spacing, and utilities"
  ],
  structure: `restaurant-website-bootstrap/
├── index.html                 (Main HTML file linking Bootstrap CSS & JS)
├── css/
│   └── custom.css             (Optional: extra custom CSS for minor adjustments)
├── js/
│   └── custom.js              (Optional: Bootstrap JS customization or extra scripts)
├── images/
│   └── (logo, hero, food images)
└── vendor/
    ├── bootstrap.min.css
    └── bootstrap.bundle.min.js`,
  bonus: [
    "Create a dark/light theme switch using Bootstrap utilities and custom classes",
    "Add a sticky navbar that changes style on scroll using `sticky-top` and JS",
    "Include animated hover effects on cards using Bootstrap `hover` classes and transitions",
    "Add a hero section with carousel or animated text using Bootstrap Carousel",
    "Implement a testimonial or gallery section using Bootstrap Grid and Cards",
    "Use Bootstrap utilities like `rounded`, `shadow`, and `clip-path` (with custom CSS) for creative card and image shapes"
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
          Complete Bootstrap Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master in Bootstrap from Beginner to Advanced Level
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

export default BootstrapNotes;
