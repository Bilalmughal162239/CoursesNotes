import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const HTMLNotesPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level HTML",
      topics: [
        {
          title: "What is HTML? HTML vs CSS vs JS + DOM Basics",
          theory:
            "HTML (HyperText Markup Language) structures the content of a web page using tags. CSS (Cascading Style Sheets) controls the presentation (colors, layout, typography). JavaScript handles behavior (interactivity, logic). The DOM (Document Object Model) is a tree representation of your HTML that JavaScript can read and modify at runtime.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML vs CSS vs JS</title>
  <style>
    /* CSS controls presentation */
    body { font-family: system-ui; }
    .btn { padding: .5rem 1rem; border: 1px solid #ccc; cursor: pointer; }
  </style>
</head>
<body>
  <!-- HTML provides structure/content -->
  <h1 id="title">Hello, DOM!</h1>
  <p>The <strong>DOM</strong> lets JS change this page.</p>
  <button class="btn" id="changer">Change Title</button>

  <script>
    // JavaScript adds behavior using the DOM API
    const btn = document.getElementById('changer');
    const title = document.getElementById('title');
    btn.addEventListener('click', () => {
      title.textContent = 'Title changed via JavaScript!';
    });
  </script>
</body>
</html>`,
          explanation:
            "• HTML = structure, CSS = style, JS = behavior.\n• DOM exposes elements as nodes (document.getElementById, querySelector).\n• JS can read/change textContent, attributes, classes, styles.",
          task:
            "Make a page with a paragraph and a button. When clicked, the button should append a new sentence to the paragraph using the DOM."
        },

        {
          title: "HTML Structure & Basic Tags",
          theory:
            "Every HTML5 document starts with a <!DOCTYPE html>. The <html> element wraps the whole page, <head> holds metadata (not shown), and <body> holds visible content.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a paragraph.</p>
</body>
</html>`,
          explanation:
            "• <!DOCTYPE html> declares HTML5.\n• <html> is the root element.\n• <head> contains metadata (title, meta tags, links, scripts).\n• <body> contains the visible content.\n• <h1> heading, <p> paragraph.",
          task:
            "Create a simple page with your name in the title, a main heading, and a short bio paragraph."
        },

        {
          title: "Project File Structure (HTML, CSS, JS)",
          theory:
            "Organize files so browsers can load assets correctly. Keep HTML, CSS, JS, and images in clear folders. Use relative paths to link them.",
          code: `project-folder/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── images/
    └── avatar.jpg

<!-- index.html (snippet) -->
<link rel="stylesheet" href="./css/styles.css" />
<script src="./js/app.js" defer></script>`,
          explanation:
            "• Use folders like css/, js/, images/.\n• Use relative paths (./css/styles.css).\n• defer loads JS after HTML parsing, improving performance.",
          task:
            "Create a small two-page site (index.html and about.html) sharing one CSS file and one JS file."
        },

        {
          title: "Text & Headings: <h1>–<h6>, <p>, <br>, <hr>",
          theory:
            "Headings create hierarchy for both readers and search engines. <p> wraps paragraphs. <br> makes a line break. <hr> draws a thematic break.",
          code: `<h1>Article Title</h1>
<h2>Section</h2>
<p>This is a paragraph explaining the topic.</p>
<p>Address:<br>Street 123<br>City</p>
<hr>
<h6>Fine print heading</h6>`,
          explanation:
            "• Use one logical <h1> per page, then descend (<h2>, <h3>...).\n• <br> is for line breaks inside addresses/poetry (use sparingly).\n• <hr> indicates a topic shift.",
          task:
            "Write a short article with an <h1>, two <h2> sections, and at least three paragraphs separated by an <hr>."
        },

        {
          title: "Inline Text Semantics: <strong>, <em>, <b>, <i>, <u>, <small>, <mark>, <sup>, <sub>",
          theory:
            "Prefer semantic tags (<strong>, <em>) because they carry meaning (important, emphasized). Presentational tags (<b>, <i>, <u>) only style without meaning.",
          code: `<p>Use <strong>strong</strong> for importance and <em>emphasis</em> for stress.</p>
<p><b>Bold</b> and <i>italic</i> are visual only.</p>
<p>Water is H<sub>2</sub>O. 10<sup>2</sup> = 100.</p>
<p><mark>Highlighted</mark> text and <small>fine print</small>.</p>
<p><u>Underlined</u> words may look like links—use cautiously.</p>`,
          explanation:
            "• <strong>/<em> aid accessibility and SEO.\n• <sup>/<sub> for math/chemistry.\n• <mark> draws attention.\n• Avoid misusing <u> as it may confuse users.",
          task:
            "Create a paragraph using at least five of these inline tags to convey meaning (not just style)."
        },

        {
          title: "Lists: <ul>, <ol>, <li> and Nested Lists",
          theory:
            "Use unordered lists for items without order and ordered lists when sequence matters. Nest lists to represent sub-items.",
          code: `<!-- Unordered list -->
<ul>
  <li>Milk</li>
  <li>Bread
    <ul>
      <li>Whole wheat</li>
      <li>Sourdough</li>
    </ul>
  </li>
  <li>Eggs</li>
</ul>

<!-- Ordered steps -->
<ol>
  <li>Preheat oven</li>
  <li>Mix ingredients</li>
  <li>Bake</li>
</ol>`,
          explanation:
            "• <ul> bullets, <ol> numbers, <li> list item.\n• Nest lists by placing a new <ul>/<ol> inside an <li>.",
          task:
            "Build a course outline with modules (top-level <ol>) and lessons (nested <ul>)."
        },

        {
          title: "Links: <a>, Relative vs Absolute URLs, target, download, Anchors (#id)",
          theory:
            "<a> creates hyperlinks. Relative URLs link within your site; absolute URLs include protocol + domain. target controls where to open, and download suggests saving a file.",
          code: `<a href="/about.html">Relative link</a>
<a href="https://example.com" target="_blank" rel="noopener">Absolute link in new tab</a>
<a href="#faq">Jump to FAQ section</a>
<a href="/files/cv.pdf" download>Download my CV</a>

<h2 id="faq">FAQ</h2>`,
          explanation:
            "• target=\"_blank\" opens a new tab; add rel=\"noopener\" for security.\n• Use ids on sections to link with #id anchors.\n• download prompts saving the linked resource.",
          task:
            "Create a nav menu linking to three sections on the same page using #ids, plus one external link opening in a new tab."
        },

        {
          title: "Images: <img>, alt, title, Responsive Images Basics",
          theory:
            "<img> embeds images. Always include meaningful alt text for accessibility/SEO. Use width/height to reserve space. For responsiveness, use max-width:100% or srcset/sizes.",
          code: `<img src="./images/avatar.jpg" alt="Portrait of Ali Khan smiling" title="Ali Khan" width="300" height="300" style="max-width:100%;height:auto;" />

<!-- Simple responsive choice -->
<img 
  src="./images/hero-800.jpg" 
  srcset="./images/hero-400.jpg 400w, ./images/hero-800.jpg 800w, ./images/hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Scenic mountain landscape at sunrise" />`,
          explanation:
            "• alt describes the image purpose (leave empty alt=\"\" for decorative images).\n• title shows a tooltip (optional).\n• srcset/sizes lets the browser pick the best image for the viewport.",
          task:
            "Place two images: one portrait with meaningful alt, and one hero image using srcset/sizes to be responsive."
        },

        {
          title: "Tables: <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>",
          theory:
            "Tables display tabular data. Use thead/tbody/tfoot for structure and accessibility. th defines header cells, td defines data cells.",
          code: `<table>
  <caption>Monthly Expenses</caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rent</td>
      <td>$800</td>
    </tr>
    <tr>
      <td>Groceries</td>
      <td>$200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$1000</td>
    </tr>
  </tfoot>
</table>`,
          explanation:
            "• <caption> labels the table.\n• <th> conveys headers (assistive tech reads them).\n• Separate head/body/foot for clarity and styling.",
          task:
            "Create a 3x4 table of student names and scores with a footer row showing the average score."
        },

        {
          title: "Basic Forms I: <form>, <input>, <label>, name, value, placeholder, required, type",
          theory:
            "Forms collect user input. Each input should have a <label> for accessibility. name identifies the field when submitting. Use appropriate type and validation attributes.",
          code: `<form action="/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" placeholder="you@example.com" required>

  <label for="age">Age</label>
  <input id="age" name="age" type="number" min="1" max="120" placeholder="18" />

  <input type="submit" value="Subscribe">
</form>`,
          explanation:
            "• for on <label> must match input id.\n• name is the key on submit (e.g., email=you@example.com).\n• required triggers browser validation.\n• Use correct types: email, number, password, date, etc.",
          task:
            "Build a contact form with name, email, and message (textarea). Make name and email required."
        },

        {
          title: "Block vs Inline Elements, <div> vs <span>",
          theory:
            "Block elements start on a new line and expand full width (<div>, <p>, <section>). Inline elements flow within text (<span>, <a>, <strong>). Use <div> for block-level grouping, <span> for small inline hooks.",
          code: `<div>
  <p>This is a block paragraph with an <span class="highlight">inline span</span> inside.</p>
</div>`,
          explanation:
            "• Block-level = layout sections; inline = within text.\n• Use classes on <div>/<span> to style via CSS.",
          task:
            "Create a paragraph and highlight a single word using a <span> with a CSS class to change its background."
        },

        {
          title: "Semantic Layout Intro: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>",
          theory:
            "Semantic tags describe purpose, improving accessibility and SEO. Screen readers and search engines understand these regions better than plain <div>s.",
          code: `<header>
  <h1>My Blog</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/articles">Articles</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <section>
    <article>
      <h2>Post Title</h2>
      <p>Post content...</p>
    </article>
  </section>
  <aside>
    <h3>About the author</h3>
    <p>Short bio...</p>
  </aside>
</main>
<footer>
  <small>&copy; 2025 My Blog</small>
</footer>`,
          explanation:
            "• Use one <main> per page for primary content.\n• <header>/<footer> can appear inside sections too.\n• <article> should be standalone content (e.g., a blog post).",
          task:
            "Convert a layout built with only <div>s into semantic elements that describe each region."
        },

        {
          title: "Attributes & Global Attributes (id, class, title, hidden, tabindex)",
          theory:
            "Attributes configure elements. Global attributes work on most elements: id (unique identifier), class (styling hooks), title (tooltips), hidden (hide but keep in DOM), tabindex (keyboard order).",
          code: `<p id="intro" class="lead" title="Introduction">Intro text</p>
<p hidden>This is visually hidden but present in the DOM.</p>
<button tabindex="0">First</button>
<button tabindex="-1">Skipped by tab</button>`,
          explanation:
            "• id must be unique.\n• class can repeat across elements.\n• hidden removes from visual flow; avoid for important content.\n• tabindex controls keyboard navigation (use sparingly; prefer natural order).",
          task:
            "Give unique ids to your main sections and style two of them using shared classes in CSS."
        },

        {
          title: "Comments <!-- --> and Whitespace",
          theory:
            "Comments help you annotate code; browsers ignore them. Extra whitespace generally collapses in HTML (except in <pre> and some inline contexts).",
          code: `<!-- This is a developer note -->
<p>Multiple     spaces collapse to one.</p>
<pre>Spaces     are     preserved here.</pre>`,
          explanation:
            "• Use comments to mark sections or TODOs.\n• Whitespace collapses in normal flow; use CSS for spacing instead of many &nbsp;.",
          task:
            "Add comments above each major section in your page describing its purpose. Try <pre> to display formatted code or poetry."
        },

        {
          title: "Accessibility Intro: alt text, label–input pairing",
          theory:
            "Accessible HTML benefits everyone. Provide alt text for images that convey meaning. Always pair labels with form controls so screen readers announce them properly.",
          code: `<img src="chart.png" alt="Bar chart showing sales rising from January to March" />

<form>
  <label for="username">Username</label>
  <input id="username" name="username" type="text" required />
</form>`,
          explanation:
            "• alt should state the image's purpose or info. Use empty alt (alt=\"\") for decorative images.\n• for/id ties labels to inputs so the name is read and clickable.",
          task:
            "Find two images on your page: give one descriptive alt and mark one decorative image with alt=\"\". Confirm label clicks focus the input."
        },

        {
          title: "Basic SEO: Headings, <title>, Meta Description",
          theory:
            "Use a clear <title> for each page and a concise meta description. Structure content with proper heading levels. Avoid keyword stuffing—focus on clarity and relevance.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Best Biryani Recipes – Home</title>
  <meta name="description" content="Discover simple, authentic biryani recipes with step-by-step guides for beginners." />
</head>
<body>
  <h1>Biryani Recipes</h1>
  <h2>Chicken Biryani</h2>
  <p>...</p>
</body>
</html>`,
          explanation:
            "• <title> appears in tabs/search results.\n• meta description can be shown in search snippets.\n• Proper heading hierarchy helps crawlers and users.",
          task:
            "Write unique titles and meta descriptions for your two-page site. Ensure each page has exactly one <h1> and logical subheadings."
        }
      ]
    },

    intermediate: {
      title: "Intermediate Level HTML",
      topics: [
        {
          title: "Document Metadata: <meta>, charset, viewport, lang",
          theory:
            "Metadata helps browsers and search engines understand your page. Always declare charset (UTF-8), set viewport for responsive design, and specify the document language with lang.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Intermediate HTML lesson">
<title>Metadata Example</title>
</head>
<body>
<h1>Hello Metadata</h1>
</body>
</html>`,
          explanation:
            "• lang helps screen readers and SEO.\n• charset defines character encoding.\n• viewport makes designs responsive on mobile.\n• description summarizes the page for search engines.",
          task: "Add charset, viewport, and description meta tags to your site."
        },

        {
          title: "Semantic HTML Deep Dive",
          theory:
            "Choose the right tag for meaning, not looks. Use <article> for standalone content, <section> for thematic grouping, <aside> for tangential content, and <main> for the central content.",
          code: `<main>
<article>
<h2>Blog Post</h2>
<p>Content of post...</p>
</article>
<aside>
<h3>Related Links</h3>
</aside>
</main>`,
          explanation:
            "• Semantic tags improve accessibility and SEO.\n• Replace non-descriptive <div> with meaningful tags.",
          task: "Refactor a previous layout to replace <div>s with semantic tags."
        },

        {
          title: "Forms II (HTML5 Inputs & Validation)",
          theory:
            "Modern HTML5 forms support many input types and built-in validation attributes.",
          code: `<form>
<label>Email <input type="email" required></label>
<label>Website <input type="url"></label>
<label>Phone <input type="tel" pattern="[0-9]{10}"></label>
<label>Age <input type="number" min="18" max="99"></label>
<label>Color <input type="color"></label>
<label>Range <input type="range" min="1" max="10" step="1"></label>
<label>Birthday <input type="date"></label>
<label>Meeting <input type="datetime-local"></label>
<textarea name="message"></textarea>
<select>
<optgroup label="Fruits">
<option>Apple</option>
<option>Banana</option>
</optgroup>
</select>
<datalist id="browsers">
<option value="Chrome">
<option value="Firefox">
</datalist>
<input list="browsers" />
<input type="submit">
</form>`,
          explanation:
            "• Input types trigger device-specific keyboards.\n• required, min, max, step, and pattern control validation.\n• novalidate disables browser validation if needed.",
          task: "Build a signup form using at least 5 HTML5 input types with validation."
        },

        {
          title: "Media: <picture>, <figure>, <audio>, <video>, <track>",
          theory:
            "Modern HTML supports responsive and accessible media embedding.",
          code: `<picture>
<source srcset="hero-large.jpg" media="(min-width: 800px)">
<source srcset="hero-small.jpg" media="(max-width: 799px)">
<img src="hero-small.jpg" alt="Hero image">
</picture>

<figure>
<img src="diagram.png" alt="Flowchart">
<figcaption>Process flow diagram</figcaption>
</figure>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`,
          explanation:
            "• <picture> allows responsive images with different sources.\n• <figure>/<figcaption> describe visual content.\n• <audio> and <video> embed media with controls.\n• <track> adds captions or subtitles.",
          task:
            "Create a hero section using <picture> for responsiveness and embed a video with captions."
        },

        {
          title: "Tables II: Scope, Headers, Caption",
          theory: "Tables can be made more accessible with scope attributes, captions, and header associations.",
          code: `<table>
<caption>Monthly Sales Report</caption>
<thead>
<tr>
  <th scope="col">Month</th>
  <th scope="col">Sales</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">January</th>
  <td>$1000</td>
</tr>
<tr>
  <th scope="row">February</th>
  <td>$1200</td>
</tr>
</tbody>
</table>`,
          explanation:
            "• <caption> describes the table.\n• scope=\"col\" and scope=\"row\" improve accessibility.\n• headers attribute can associate cells explicitly.",
          task: "Create an accessible table with caption and proper header scopes."
        },

        {
          title: "ARIA Basics",
          theory:
            "ARIA roles, states, and properties enhance accessibility when native HTML cannot. Use sparingly and prefer semantic HTML first.",
          code: `<div role="navigation" aria-label="Main menu">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</div>`,
          explanation:
            "• role provides landmarks or widget roles.\n• aria-label, aria-expanded, etc., convey state.\n• Use only when semantic HTML cannot express meaning.",
          task: "Add ARIA labels to a custom navigation component."
        },

        {
          title: "Accessibility Patterns",
          theory:
            "Ensure content is navigable by keyboard and screen readers. Provide skip links and maintain logical focus order.",
          code: `<a href="#main" class="skip-link">Skip to content</a>
<header>Header</header>
<main id="main" tabindex="-1">Main Content</main>`,
          explanation:
            "• Skip links let users bypass repetitive content.\n• tabindex=\"-1\" allows programmatic focus.\n• Use landmarks (<header>, <main>, <footer>) for navigation.",
          task: "Add a skip link to your site and test keyboard navigation."
        },

        {
          title: "Structured Data Basics (JSON-LD)",
          theory:
            "Structured data helps search engines understand content. JSON-LD is placed in a <script> tag.",
          code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intermediate HTML Lesson",
  "author": "John Doe",
  "datePublished": "2023-06-01"
}
</script>`,
          explanation:
            "• JSON-LD is recommended for SEO.\n• Helps generate rich snippets in search results.",
          task: "Add JSON-LD metadata to describe an article on your page."
        },

        {
          title: "Performance & Loading",
          theory:
            "Control script loading and resource hints for better performance.",
          code: `<script src="script.js" defer></script>
<script src="analytics.js" async></script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="preload" href="hero.jpg" as="image">`,
          explanation:
            "• defer loads scripts after parsing.\n• async loads independently.\n• preconnect reduces latency.\n• preload ensures early fetch.",
          task: "Add defer or async to scripts in your project."
        },

        {
          title: "Favicons & Web App Manifest",
          theory:
            "Favicons represent your site in browser tabs. Manifests enable installable web apps.",
          code: `<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="manifest" href="manifest.json">`,
          explanation:
            "• favicon shows in browser tab.\n• manifest.json defines app icons, name, and theme.",
          task: "Add a favicon and a manifest.json file to your project."
        },

        {
          title: "Iframes & Sandboxing",
          theory:
            "Iframes embed external pages. Use sandbox and allow attributes for security and control.",
          code: `<iframe src="https://example.com"
  width="400" height="300"
  sandbox="allow-scripts allow-same-origin"
  allow="fullscreen"></iframe>`,
          explanation:
            "• sandbox restricts iframe behavior.\n• allow controls features (e.g., fullscreen, camera).\n• Always limit iframe permissions.",
          task: "Embed a YouTube video securely using iframe with allowfullscreen."
        },

        {
          title: "Forms III: File Uploads & Attributes",
          theory:
            "HTML forms support file uploads and enhanced attributes for usability.",
          code: `<form>
  <input type="file" name="resume" accept=".pdf" multiple>
  <input type="text" name="name" autocomplete="name">
  <input type="submit">
</form>`,
          explanation:
            "• accept limits file types.\n• multiple allows multiple file selection.\n• autocomplete suggests user data.\n• form attribute can link controls outside <form>.",
          task: "Create a form with file upload, text input, and autocomplete."
        },

        {
          title: "Progressive Enhancement Mindset",
          theory:
            "Build sites to work with basic HTML first, then layer styles and scripts for richer experiences.",
          code: `<form action="/submit">
  <label>Name: <input name="name" required></label>
  <input type="submit" value="Submit">
</form>`,
          explanation:
            "• Ensure core functionality works without CSS/JS.\n• Add enhancements only if supported.",
          task: "Build a form that works without JavaScript, then enhance with JS."
        },

        {
          title: "Semantic Outlines & Heading Levels",
          theory:
            "Use headings (<h1>–<h6>) to reflect document structure. Only one <h1> per page is recommended.",
          code: `<main>
<h1>Article Title</h1>
<section>
  <h2>Introduction</h2>
  <p>...</p>
</section>
<section>
  <h2>Details</h2>
  <h3>Subtopic</h3>
  <p>...</p>
</section>
</main>`,
          explanation:
            "• Headings create a logical outline.\n• Use in order without skipping levels.\n• Assistive tech relies on correct heading structure.",
          task: "Outline a multi-section article with correct heading levels."
        }
      ]
    },
    advanced: {
      title: "Advanced Level HTML",
      topics: [
        {
          title: "Accessibility Advanced: ARIA Patterns",
          theory: "Advanced accessibility includes ARIA live regions, dialogs, disclosure widgets, and avoiding keyboard traps. These help dynamic content remain usable for screen readers and keyboard-only users.",
          code: `<!-- Live region -->
<div aria-live="polite">New notifications will appear here</div>

<!-- Disclosure pattern -->
<button aria-expanded="false" aria-controls="details" onclick="toggleDetails()">Show details</button>
<div id="details" hidden>Extra information...</div>

<!-- Modal dialog -->
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Subscribe</h2>
  <button onclick="closeDialog()">Close</button>
</div>`,
          explanation: "• aria-live announces changes automatically.\n• aria-expanded and aria-controls manage disclosure widgets.\n• role='dialog' with aria-modal ensures proper modal semantics.\n• Avoid keyboard traps by ensuring ESC and Tab cycles work.",
          task: "Build a modal dialog with aria attributes, keyboard escape support, and proper focus management."
        },

        {
          title: "Forms IV: Advanced Form APIs",
          theory: "The Constraint Validation API and ARIA allow custom validation flows. Use fieldset, legend, and aria-describedby to improve usability.",
          code: `<form id="signup">
  <fieldset>
    <legend>Signup</legend>
    <label>Email <input type="email" id="email" required aria-describedby="emailHelp"></label>
    <small id="emailHelp">We'll never share your email</small>
    <button>Submit</button>
  </fieldset>
</form>
<script>
const email = document.getElementById('email');
document.getElementById('signup').addEventListener('submit', e => {
  if (!email.validity.valid) {
    email.setCustomValidity("Please enter a valid email");
    e.preventDefault();
  }
});
</script>`,
          explanation: "• Constraint Validation API enables custom error messages.\n• fieldset/legend group related inputs.\n• aria-describedby links inputs to help text.\n• Autocomplete tokens (e.g., autocomplete='email') guide browsers and password managers.",
          task: "Create a form that uses the Constraint Validation API to show custom error messages."
        },

        {
          title: "HTML5 APIs in HTML",
          theory: "Modern HTML integrates platform APIs like Drag & Drop, Clipboard, and spellcheck/autocapitalize.",
          code: `<div id="drag" draggable="true">Drag me</div>
<div id="drop">Drop here</div>
<script>
drag.ondragstart = e => e.dataTransfer.setData('text/plain', 'Dragged content');
drop.ondrop = e => {
  e.preventDefault();
  drop.textContent = e.dataTransfer.getData('text/plain');
};
drop.ondragover = e => e.preventDefault();
</script>

<!-- Clipboard -->
<div contenteditable="true" spellcheck="true">Editable text</div>
<input type="text" inputmode="numeric" autocapitalize="words">`,
          explanation: "• draggable + DataTransfer enables drag-and-drop.\n• contenteditable + execCommand/Clipboard API allows copy/paste.\n• spellcheck and autocapitalize improve text input.\n• inputmode controls mobile keyboard type.",
          task: "Build a simple drag-and-drop interface with a drop zone."
        },

        {
          title: "Media Advanced",
          theory: "Enhance media with multiple captions and accessibility strategies.",
          code: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track src="subs_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subs_es.vtt" kind="subtitles" srclang="es" label="Español">
</video>`,
          explanation: "• Multiple <track> elements provide subtitles in different languages.\n• Always include captions for accessibility.\n• Offer transcripts for audio content.",
          task: "Embed a video with at least two subtitle tracks and a transcript."
        },

        {
          title: "Web Components & Templates",
          theory: "Web Components allow custom reusable HTML elements with <template>, <slot>, and shadow DOM.",
          code: `<template id="card">
  <div class="card"><slot></slot></div>
</template>

<script>
class MyCard extends HTMLElement {
  constructor() {
    super();
    const tmpl = document.getElementById('card').content;
    this.attachShadow({ mode: 'open' }).appendChild(tmpl.cloneNode(true));
  }
}
customElements.define('my-card', MyCard);
</script>

<my-card>Hello from a custom element</my-card>`,
          explanation: "• <template> defines markup for reuse.\n• customElements.define registers new tags.\n• <slot> inserts light DOM content.\n• Shadow DOM encapsulates styles and structure.",
          task: "Create a reusable card component with <template> and custom element."
        },

        {
          title: "Security in Markup",
          theory: "Markup can introduce vulnerabilities if misused. Use safe attributes and sandboxing.",
          code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Safe link</a>
<iframe src="page.html" sandbox allow="fullscreen"></iframe>`,
          explanation: "• rel='noopener noreferrer' prevents tab hijacking.\n• iframe sandbox restricts embedded content.\n• Avoid inline event handlers for XSS safety.",
          task: "Audit a page for unsafe <a> and <iframe> usage and fix them."
        },

        {
          title: "SEO Advanced & Internationalization",
          theory: "SEO enhancements include canonical URLs, robots meta, and structured metadata. Internationalization uses lang, dir, bdi, bdo.",
          code: `<link rel="canonical" href="https://example.com/article">
<meta name="robots" content="index, follow">
<span lang="ar" dir="rtl">مرحبا</span>
<bdi>User123</bdi> commented`,
          explanation: "• canonical prevents duplicate content issues.\n• robots meta controls indexing.\n• lang/dir define language and direction.\n• bdi/bdo handle bidirectional text.",
          task: "Add canonical and robots meta to a sample page and include multilingual text."
        },

        {
          title: "Performance & Progressive Web Features",
          theory: "Use modern attributes and hints for performance. HTML also provides hooks for PWAs.",
          code: `<img src="large.jpg" loading="lazy" decoding="async" fetchpriority="low" alt="...">
<link rel="manifest" href="/manifest.json">
<link rel="preload" as="style" href="styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">`,
          explanation: "• loading='lazy' defers offscreen images.\n• fetchpriority and importance hint resource priority.\n• Web App Manifest enables installability.\n• Preload and preconnect optimize performance.",
          task: "Add lazy loading, preload fonts, and a manifest to a demo page."
        },

        {
          title: "Head Strategy & Advanced Embeds",
          theory: "Manage the <head> for security and cross-platform integration.",
          code: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<link rel="stylesheet" href="print.css" media="print">
<iframe src="video.html" referrerpolicy="no-referrer"></iframe>`,
          explanation: "• CSP meta controls allowed resources.\n• media attribute creates print-friendly layouts.\n• referrerpolicy reduces privacy leakage in embeds.",
          task: "Configure CSP in the head and add a print stylesheet."
        }
      ]
    },
    HTMLtages: {
      title: "All HTML Tages List",
      topics: [
        {
          title: "HTMT Text Tages",
          theory: "Basic tags like <p>, <br>, <h1>–<h6>, <blockquote>, and <pre> handle paragraphs, headings, and quotes, while inline tags like <b>, <i>, <strong>, <em>, <mark>, <abbr>, <cite>, and <code> add emphasis, meaning, or formatting. Specialized tags such as <del>, <ins>, <dfn>, <kbd>, <var>, <samp>, <time>, <data>, <bdi>, <bdo>, and <address> give semantic value, accessibility, and machine-readability to text content.",
          code: ` <!-- Headings -->
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <!-- Paragraph -->
  <p>This is a paragraph.</p>

  <!-- Basic formatting -->
  <b>Bold Text</b><br>
  <i>Italic Text</i><br>
  <u>Underlined Text</u><br>
  <strong>Strong Text</strong><br>
  <em>Emphasized Text</em><br>
  <small>Small Text</small><br>
  <s>Strikethrough Text</s><br>
  <sub>Subscript</sub> and <sup>Superscript</sup><br>
  <mark>Highlighted Text</mark><br>
  <del>Deleted Text</del> <ins>Inserted Text</ins><br>
  
  <!-- Code-related -->
  <code>console.log("Hello");</code><br>
  <kbd>Ctrl + C</kbd><br>
  <var>x</var> = variable<br>
  <samp>Sample output</samp><br>
  <pre>
Preformatted text
   keeps spaces & line breaks
  </pre>

  <!-- Quotes -->
  <blockquote>This is a blockquote.</blockquote>
  <q>This is a short inline quote.</q>
  <cite>— Author Name</cite><br>

  <!-- Abbreviations and definitions -->
  <abbr title="World Health Organization">WHO</abbr><br>
  <dfn>Definition term</dfn><br>

  <!-- Address -->
  <address>
    Written by John Doe<br>
    Visit us at Example.com
  </address>

  <!-- Ruby annotation -->
  <ruby>
    漢 <rt>hàn</rt>
  </ruby><br>
  <rp>(</rp>Ruby Parenthesis<rp>)</rp><br>

  <!-- Text direction -->
  <bdi>User: إيمان</bdi><br>
  <bdo dir="rtl">This text is right-to-left</bdo><br>

  <!-- Data and time -->
  <data value="101">Product #101</data><br>
  <time datetime="2025-08-24">Today</time><br>

  <!-- Details and summary -->
  <details>
    <summary>More Info</summary>
    This text is hidden until expanded.
  </details><br>

  <!-- Line break and horizontal line -->
  First Line<br>Second Line
  <hr>

  <!-- Word break opportunity -->
  Supercalifragilistic<wbr>expialidocious`,
          explanation: `<abbr>	Defines an abbreviaion or acronym for a phrase or longer word.
<address>	Defines contact information for a person or people, or for an organization.
<b>	Make a text bold.
<bdi> (N)	Isolate a small section of text which may be formatted to run in the opposite direction than the text
around it (such as right-to-left in a left-to-right context).
<bdo>	It is used to overrides the default text direction.
<blockquote>	Defines a block of text which is quoted from another source.
<br>	Defines a single line break.
<cite>	Defines the title of the work, book, website, etc.
<code>	Displays a part of programming code in an HTML document.
<data> (N)	Adds value to a given content with a machine-readable translator.
<del>	Identifies text that has been deleted from a document. Pair a <del> element with an <ins> element to
identify the inserted text that replaced the deleted text.
<details> (N)	It is used to specify the additional details on the web page that the user can view or hide on demand.
It is used together with a <summary> tag.
<dfn>	It is used to indicate a term that is going to be defined within the content.
<em>	It is used to emphasize the text.
<h1> to <h6>	Defines headings from level 1 to level 6.
<hr>	Applies thematic break between paragraph-level elements.
<i>	Displays the content in italic style. It is generally used to display the technical term, phrase, the
important word in a different language.
<ins>	Identifies text that has been inserted in a document.
<kbd>	Identifies text that represents user keyboard input.
<mark> (N)	Represents a marked/highlighted text.
<p>	Defines a paragraph.
<pre>	It is used to define the block of preformatted text which preserves the text spaces, line breaks, tabs,
and other formatting characters which are ignored by web browsers.
<q>	Defines short inline quotation.
<rp> (N)	Defines an alternative content if browser does not supports ruby annotations.
<rt>	Defines explanations and pronunciations in ruby annotations.
<ruby>	Represents ruby annotations.
<s>	Defines text which is no longer correct or relevant.
<samp>	Identifies text as sample output from a computer program.
<small>	Defines text to display one size smaller than the document's base font size.
<strong>	Defines important text.
<sub>	Displays as a subscript text. A subscript is a character that is set slightly below the normal line of text.
It is usually smaller than the rest of the text.
<summary> (N)	It is used as a child of <details> element to provide a summary of the contents of the <details>
element.
<sup>	Displays as a superscript text. A superscript is a character that is set slightly above the normal line of
text. It is usually smaller than the rest of the text.

<time> (N)	Defines time within an HTML document. The content of a time element is typically a human-readable date and time, and the same date and time for machine-readable is placed in the datetime attribute.
<u>	Represent the text that is stylistically different with normal text. Displays with an underline. One
proper use of the <u> element is to identify misspelled terms.
<var>	Identifies a variable in a mathematical expression or programming context.
<wbr> (N)	The <wbr> (Word Break Opportunity) tag is used to define a position within text where break line is
possible.
`,
          task: "One HTML file that contains a mini profile webpage where every tag from your list is used at least once in a meaningful way."
        },
        {
          title: "Links and  Lists",
          theory: "Lists in HTML are used to group related items. The <ul> tag creates unordered lists with bullets, while <ol> creates ordered lists with numbers, and both use <li> for list items. For definitions, <dl> is used along with <dt> for terms and <dd> for their descriptions.",
          code: `<!-- <a>: anchor tag for hyperlinks -->
  <h2>Anchor Example</h2>
  <a href="page.html">Go to Example Page</a>

  <!-- <dl>, <dt>, <dd>: description list -->
  <h2>Description List Example</h2>
  <dl>
    <dt>HTML</dt>  <!-- definition term -->
    <dd>HyperText Markup Language</dd> <!-- definition description -->

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>

  <!-- <ul>, <li>: unordered list -->
  <h2>Unordered List Example</h2>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
  </ul>

  <!-- <ol>, <li>: ordered list -->
  <h2>Ordered List Example</h2>
  <ol>
    <li>Step One</li>
    <li>Step Two</li>
    <li>Step Three</li>
  </ol>`,
          explanation: `<a>	The anchor tag, it creates a hyperlink.
<base>	Defines the base URL for all relative URLs within the document.
<dd>	Defines a data definition (description) of a data term <dt> in a description list <dl>.
<dl>	Defines a description list.
<dd>	Defines a data definition (description) of a data term <dt> in a description list <dl>.
<li>	It is used to represent an item in a list.
<ol>	Creates an ordered list.
<ul>	Creates an unordered list.
`,
          task: `Create an unordered list <ul> with three fruits (e.g., Apple, Mango, Banana).
Create an ordered list <ol> with three daily tasks (e.g., Wake up, Study, Sleep).
Create a description list <dl> with two terms: “HTML” and “CSS” and their short definitions.`
        },
        {
          title: 'Images & Media',
          theory: `AI Overview
HTML provides elements for embedding images and various media types into web pages. The theory behind these tags focuses on accessibility, responsiveness, and efficient resource loading.`,
          code: ` <!-- Image Map with <img>, <map>, and <area> -->
  <h2>Image with Clickable Areas</h2>
  <img src="example.jpg" alt="Example Map" usemap="#workmap" width="400">
  <map name="workmap">
    <area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example Link">
    <area shape="circle" coords="337,300,44" href="https://openai.com" alt="OpenAI">
  </map>

  <!-- Audio with <source> and <track> -->
  <h2>Audio Example</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <track src="subtitles.vtt" kind="captions" srclang="en" label="English">
    Your browser does not support the audio tag.
  </audio>

  <!-- Video with <source> and <track> -->
  <h2>Video Example</h2>
  <video width="400" controls>
    <source src="video.mp4" type="video/mp4">
    <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
    Your browser does not support the video tag.
  </video>

  <!-- Figure and Figcaption -->
  <h2>Figure Example</h2>
  <figure>
    <img src="image.jpg" alt="Nature" width="300">
    <figcaption>A beautiful view of nature</figcaption>
  </figure>

  <!-- Picture tag with multiple sources -->
  <h2>Picture Example</h2>
  <picture>
    <source srcset="image-large.jpg" media="(min-width: 800px)">
    <source srcset="image-small.jpg" media="(max-width: 799px)">
    <img src="image-default.jpg" alt="Responsive Image">
  </picture>

  <!-- SVG Example -->
  <h2>SVG Example</h2>
  <svg width="200" height="100">
    <rect width="200" height="100" style="fill:blue" />
    <text x="50" y="55" fill="white" font-size="20">Hello SVG</text>
  </svg>`,
          explanation: `<area>	It is used as a child of a <map> element to define clickable a region on an image map.
<audio> (N)	It is used to embed sound content in HTML document.
<figcaption> (N)	Adds a caption or explanation for the <figure> element.
<figure> (N)	It is used to add self-contained content like illustrations, diagrams, photos, or codes listing in a
document.
<img>	It is used to insert an image.
<map>	It is used with <area> element to define an image map with clickable areas.

<picture> (N)	It is used in responsive web designing where we need to load the different images based on their viewport, height, width, orientation, and pixel density. Contains one or more <source> elements and
one <img> elements.
<source> (N)	It is used as a child of a <picture>, <audio>, or <video> element, and identifies the URL of one or
more media resources.
<svg>	Defines container of SVG (Scalable Vector Graphics).
<track>	This tag is used to define time-based text tracks for a media file such as <audio> and <video>
elements.
<video> (N)	Embeds a video content in a document.
`,
          task: `Create an image map using <img>, <map>, and <area> where clicking different parts of the image opens different links.
Add a video with <video> and <track> (subtitles).
Add an audio file with <audio> and <source> elements.
Use <figure> and <figcaption> to display an image with a caption.
Draw a simple SVG shape (like a circle or rectangle).`,
        },
        {
          title: 'Tables in html',
          theory: `The theory behind HTML table tags revolves around structuring and presenting tabular data on web pages. Tables are designed to display information in a grid-like format, organized into rows and columns, facilitating the clear and efficient presentation of related data.`,
          code: `<table border="1">
  <caption>Student Information</caption>

  <colgroup>
    <col style="background-color: #f2f2f2;">
    <col style="background-color: #e6ffe6;">
    <col style="background-color: #e6f7ff;">
  </colgroup>

  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Ali</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bilal</td>
      <td>B+</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">End of Student Records</td>
    </tr>
  </tfoot>

</table>`,
          explanation: `<caption>	Defines a caption for a table.
<col>	Defines a column within a table which represent common properties of columns and used with the
<colgroup> element.
<colgroup>	Defines a group of columns within a table.
<table>	Represents data in tabular form or to creates a table within a document.
<tbody>	Represents the body content of an HTML table.
<td>	Defines a cell of an HTML table which contains table data.
<tfoot>	Represents the footer content of an HTML table.
<th>	Defines a cell of an HTML table which contains table heading.
<thead>	Represents the header content of an HTML table.
<tr>	Defines a row cell of an HTML table which can contain table heading or table data.
`,
          task: `Complete the table with your own data.`,
        },
        {
          title: 'Forms tags',
          theory: `IN HTML, the <form> tag serves as a container for various input elements, enabling the collection of user data for submission to a server or processing via client-side scripts. `,
          code: `<form>
  <fieldset>
    <legend>Student Registration Form</legend>

    <!-- Label + Input -->
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <!-- Datalist -->
    <label for="city">Choose City:</label>
    <input list="cities" id="city" name="city">
    <datalist id="cities">
      <option value="Lahore">
      <option value="Karachi">
      <option value="Islamabad">
    </datalist><br><br>

    <!-- Select with Optgroup and Option -->
    <label for="course">Select Course:</label>
    <select id="course" name="course">
      <optgroup label="Science">
        <option value="math">Mathematics</option>
        <option value="physics">Physics</option>
      </optgroup>
      <optgroup label="Arts">
        <option value="english">English</option>
        <option value="history">History</option>
      </optgroup>
    </select><br><br>

    <!-- Textarea -->
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

    <!-- Output -->
    <label for="marks">Marks:</label>
    <input type="number" id="marks" name="marks" oninput="result.value=marks.value">
    <output name="result" for="marks"></output><br><br>

    <!-- Button -->
    <button type="submit">Submit</button>
  </fieldset>
</form>`,
          explanation: `<button>	Creates a clickable button.
<datalist> (N)	Provides a predefined list for input option.
<fieldset>	It is used to group related elements/labels in a form.
<form>	Defines a form for getting information from users.
<input>	Defines an input control for forms to accept data from the users.
<label>	Defines a text label for the input field of form.
<legend>	Defines a caption for content of <fieldset>.
<optgroup>	It is used to group the related options in a drop-down list.
<option>	It is used to create options or items in a drop-down list.
<output> (N)	Displays the result of a calculation. The <output> element is typically used in conjunction with a
parent <form> and sibling <input> elements to perform a calculation.
<select>	Creates a drop-down list of options for a web form, used along with one or more <option> elements.
<textarea>	It is used to create a text input area of unlimited length, such as comment, feedback, and review, etc.
`,
          task: `Make a Admission from to get the student information`,
        },
        {
          title: 'Basic Structure Tags',
          theory: `Within a web page, some HTML tags are required for the page to be displayed correctly. These tags are <html> , <head> , <title> and <body> . The <html> tags must begin and end the document and the <head> tags must appear before the <body> tags. Also, the <title> tags must be within the <head> tags.`,
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Layout Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    header, footer { background: #333; color: white; padding: 10px; text-align: center; }
    nav { background: #555; padding: 10px; }
    nav a { color: white; margin: 0 10px; text-decoration: none; }
    main { padding: 20px; }
    aside { background: #f4f4f4; padding: 10px; margin: 10px 0; }
    section { margin: 20px 0; }
    article { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
    span { color: blue; font-weight: bold; }
  </style>
</head>
<body>

  <!-- Header Section -->
  <header>
    <h1>My Website</h1>
    <p>Welcome to my HTML structure demo</p>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Main Content -->
  <main>
    <section>
      <h2>Articles Section</h2>
      <article>
        <h3>Article One</h3>
        <p>This is the first article with a <span>highlighted text</span>.</p>
      </article>
      <article>
        <h3>Article Two</h3>
        <p>This is the second article about HTML tags.</p>
      </article>
    </section>

    <aside>
      <h4>Related Info</h4>
      <p>This is some extra content in the sidebar.</p>
    </aside>
  </main>

  <!-- Footer -->
  <footer>
    <p>© 2025 My Website | All rights reserved</p>
  </footer>

</body>
</html>
`,
          explanation: `<!-- -->	Defines a comment.
<!DOCTYPE>	Defines the document type.
<article> (N)	Defines the self-contained content.
<aside> (N)	Defines content aside from main content. Mainly represented as sidebar or call-out boxes.
<body>	Defines the body section of an HTML document.
<div>	Known as Division tag. Defines a division or section of content in the web page.
<footer> (N)	Defines the footer section in a webpage.
<header> (N)	Defines a header of a section or document. It may contain some heading elements but also a logo, a
search form and other elements.
<html>	Represents root (top-level) of an HTML document.
<main> (N)	Represents the main content of the <body> tag.
<nav>	Represents a group of navigation links.
<section> (N)	Defines a section in a document.
<span>	Defines an inline container of content in the web page.
<style>	It is used to add CSS rules to an HTML document. The element is expected to appear in the document
<head> element.
`,
          task: ` Make a Page about your self include tables heading form etc.`,
        },
        {
          title: 'Extra Markup',
          theory: `HTML uses "markup" to annotate content for display in a web browser. This markup consists of tags, which are special components of HTML syntax that define how elements of a document should be structured and displayed. `,
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Canvas, Dialog, Embed, Iframe, Meter Example</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>

  <!-- Canvas Example -->
  <h2>Canvas Example</h2>
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 150, 60);
  </script>

  <!-- Dialog Example -->
  <h2>Dialog Example</h2>
  <button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
  <dialog id="myDialog">
    <p>This is a dialog box.</p>
    <button onclick="this.parentElement.close()">Close</button>
  </dialog>

  <!-- Embed Example -->
  <h2>Embed Example</h2>
  <embed src="https://www.w3.org/TR/PNG/iso_8859-1.txt" width="400" height="100">

  <!-- Iframe Example -->
  <h2>Iframe Example</h2>
  <iframe src="https://example.com" width="400" height="150" title="Example Website"></iframe>

  <!-- Meter Example -->
  <h2>Meter Example</h2>
  <label for="progress">Storage Usage:</label>
  <meter id="progress" value="0.6" min="0" max="1">60%</meter>

</body>
</html>
`,
          explanation: `<canvas> (N)	It is used to draw graphics on a web page using JavaScript. It can be used to draw paths, boxes, texts,
gradients, and adding images.
<dialog> (N)	Creates a popup dialog and models on a web page. Normally it is used with JavaScript.
<embed> (N)	It is used as embedded container for external file/application/media, etc.
<iframe>	Creates an inline frame, which embeds an independent HTML document into the current document.
<meter> (N)	It is used to measure data within a given range. It defines a scalar measurement within a known
range, or a fractional value.. It is also known as a gauge.
`,
          task: `Draw a shape using <canvas>.
Show a popup with <dialog>.
Embed a PDF via <embed>.
Load YouTube in an <iframe>.
Display progress using <meter>.`,
        },
      ]
    }
  };

  const finalProject = {
    title: "Final Project: Complete Restaurant Website",
    description: "Create a comprehensive restaurant website that incorporates all the HTML concepts you've learned.",
    requirements: [
      "Use semantic HTML5 structure (header, nav, main, sections, footer)",
      "Include a responsive navigation menu",
      "Create an accessible menu with proper table structure",
      "Add a contact form with HTML5 input types and validation",
      "Include multimedia content (images, possibly video)",
      "Implement proper SEO meta tags",
      "Ensure accessibility with ARIA attributes",
      "Add a reservation form with date/time pickers",
      "Include social media meta tags for sharing"
    ],
    structure: `restaurant-website/
├── index.html (Homepage)
├── menu.html (Food Menu)
├── about.html (About Us)
├── contact.html (Contact & Reservation)
├── images/
│   ├── logo.png
│   ├── hero-image.jpg
│   └── food-images/
├── css/
│   └── styles.css
└── js/
    └── script.js`,
    bonus: [
      "Add a photo gallery using figure and figcaption elements",
      "Create a testimonials section with blockquote elements",
      "Implement a newsletter signup form",
      "Add location map using iframe",
      "Include structured data for SEO (JSON-LD)"
    ]
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
          Complete HTML Learning Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master HTML from Beginner to Advanced Level
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
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {htmlContent[activeLevel].topics[activeTopicIndex].theory}
                </p>
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
                  <pre className="text-xs sm:text-sm font-mono text-gray-700 whitespace-pre-line leading-relaxed">
                    {htmlContent[activeLevel].topics[activeTopicIndex].explanation}
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

export default HTMLNotesPage;
