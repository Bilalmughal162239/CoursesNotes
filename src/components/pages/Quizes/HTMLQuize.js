import React, { useState, useEffect, useCallback, useMemo } from "react";

const HTMLQuize = () => {
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
      title: "Beginner Level HTML Quiz",
      topics: [
        {
          title: "HTML, CSS, JS, + DOM Basics",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "HTML ka mukhya uddeshy kya hai?",
              options: [
                "Website ko stylish banana",
                "Web page ka structure aur content define karna",
                "Web page mein interactive features add karna",
                "Web server ko manage karna"
              ],
              correctAnswer: 2
            },
            {
              question: "CSS ka upyog kiske liye kiya jata hai?",
              options: [
                "Web page ki layout aur appearance (styles) ko control karne ke liye",
                "Web page ke mathematical calculations karne ke liye",
                "Database se data lene ke liye",
                "Web page ka basic structure banane ke liye"
              ],
              correctAnswer: 1
            },
            {
              question: "JavaScript (JS) kya karti hai?",
              options: [
                "Web page ke static elements banati hai",
                "Web page ko dynamic aur interactive banati hai (jaise buttons, forms)",
                "Web page ke liye colors aur fonts set karti hai",
                "Web page ka title define karti hai"
              ],
              correctAnswer: 2
            },
            {
              question: "HTML, CSS, aur JavaScript mein se kaun si language 'programming language' hai?",
              options: [
                "HTML",
                "CSS",
                "JavaScript",
                "Teeno"
              ],
              correctAnswer: 3
            },
            {
              question: "DOM (Document Object Model) kya hai?",
              options: [
                "Ek type ka web server",
                "Ek programming language",
                "Web browser ka representation of a web page, jise JavaScript change kar sakti hai",
                "Ek special type ka CSS framework"
              ],
              correctAnswer: 3
            },
            {
              question: "Web page par kisi element ki color, font, ya size badalne ke liye aap kaun si technology use karenge?",
              options: [
                "HTML",
                "CSS",
                "JavaScript",
                "DOM"
              ],
              correctAnswer: 2
            },
            {
              question: "Web page par ek button banaya gaya hai HTML se. Us par click karne par kuch action karne (jaise alert dikhana) ke liye kaun si technology use hogi?",
              options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SVG"
              ],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "HTML Structure & Basic Tags",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is the root element that wraps all content on an entire HTML page?",
              options: ["<head>", "<body>", "<html>", "<!DOCTYPE>"],
              correctAnswer: 3
            },
            {
              question: "Which section of an HTML document typically contains metadata, the title, and links to CSS files?",
              options: ["<header>", "<body>", "<html>", "<head>"],
              correctAnswer: 4
            },
            {
              question: "Which tag is used to create the main heading, or the largest heading, on a page?",
              options: ["<head>", "<h6>", "<heading>", "<h1>"],
              correctAnswer: 4
            },
            {
              question: "What is the correct tag for creating a paragraph in HTML?",
              options: ["<para>", "<p>", "<text>", "<pg>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to create a line break without starting a new paragraph?",
              options: ["<break>", "<lb>", "<br>", "<newline>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to define an important piece of text, usually displayed in bold by browsers?",
              options: ["<bold>", "<important>", "<strong>", "<b>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to create an unordered (bulleted) list?",
              options: ["<ol>", "<list>", "<ul>", "<li>"],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "Text & Headings in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to define the most important heading?",
              options: ["<head>", "<h6>", "<h1>", "<heading>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to create the smallest heading?",
              options: ["<h1>", "<small>", "<h6>", "<tiny>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to make text bold?",
              options: ["<bold>", "<b>", "<strong>", "<em>"],
              correctAnswer: [2, 3],
              note: "Both <b> and <strong> are correct, but <strong> is semantically better."
            },
            {
              question: "Which tag is used to make text italic?",
              options: ["<i>", "<italic>", "<em>", "<cite>"],
              correctAnswer: [1, 3],
              note: "Both <i> and <em> are correct, but <em> adds semantic emphasis."
            },
            {
              question: "Which tag is used to create a paragraph?",
              options: ["<para>", "<p>", "<text>", "<paragraph>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to create a horizontal line?",
              options: ["<line>", "<hr>", "<hl>", "<divider>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to display text exactly as it is written, including spaces and line breaks?",
              options: ["<pre>", "<code>", "<text>", "<format>"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Inline Text Semantics in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag should be used to give strong importance to text, typically displayed as bold?",
              options: ["<bold>", "<b>", "<strong>", "<important>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used for emphasizing text, typically displayed as italic?",
              options: ["<i>", "<em>", "<italic>", "<stress>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to mark or highlight text for reference purposes?",
              options: ["<highlight>", "<mark>", "<bold>", "<color>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to represent a span of inline code?",
              options: ["<code>", "<programming>", "<inlinecode>", "<c>"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to create a hyperlink?",
              options: ["<link>", "<a>", "<href>", "<url>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used for shorter quotations that don't require paragraph breaks?",
              options: ["<quote>", "<q>", "<blockquote>", "<cite>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define subscript text (e.g., H₂O)?",
              options: ["<sub>", "<subscript>", "<low>", "<below>"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Lists in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to create an unordered (bulleted) list?",
              options: ["<ol>", "<list>", "<ul>", "<li>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to create an ordered (numbered) list?",
              options: ["<ul>", "<list>", "<ol>", "<li>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to define each item in a list?",
              options: ["<item>", "<listitem>", "<li>", "<point>"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used to change the numbering type in an ordered list (e.g., to letters)?",
              options: ["type", "style", "number", "list-style"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to create a description list?",
              options: ["<dl>", "<description>", "<desc>", "<dlist>"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to define a term in a description list?",
              options: ["<term>", "<dt>", "<td>", "<dd>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to provide the description/definition of a term in a description list?",
              options: ["<describe>", "<dd>", "<dfn>", "<desc>"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Links in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which HTML tag is used to create a hyperlink?",
              options: ["<link>", "<a>", "<href>", "<hyperlink>"],
              correctAnswer: 2
            },
            {
              question: "Which attribute specifies the URL of the page the link goes to?",
              options: ["src", "link", "href", "url"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used to open a link in a new browser tab?",
              options: ["target=\"_blank\"", "newtab=\"true\"", "open=\"new\"", "target=\"_new\""],
              correctAnswer: 1
            },
            {
              question: "Which attribute is used to provide additional information about the link (shown as a tooltip)?",
              options: ["title", "info", "tooltip", "description"],
              correctAnswer: 1
            },
            {
              question: "How do you create a link that allows users to send an email?",
              options: [
                "<a href=\"mailto:example@email.com\">",
                "<a href=\"email:example@email.com\">",
                "<a href=\"sendmail:example@email.com\">",
                "<a href=\"message@example@email.com\">"
              ],
              correctAnswer: 1
            },
            {
              question: "How do you create a link to a specific part of the same page?",
              options: ["<a href=\"#section1\">", "<a href=\".section1\">", "<a href=\"*section1\">", "<a href=\"@section1\">"],
              correctAnswer: 1
            },
            {
              question: "Which attribute is used to specify the relationship between the current document and the linked document?",
              options: ["rel", "type", "relationship", "link-type"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Images in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which HTML tag is used to embed an image?",
              options: ["<img>", "<image>", "<picture>", "<src>"],
              correctAnswer: 1
            },
            {
              question: "Which attribute is required in the <img> tag to specify the image source?",
              options: ["link", "src", "source", "url"],
              correctAnswer: 2
            },
            {
              question: "Which attribute provides alternative text for an image if it cannot be displayed?",
              options: ["title", "alt", "description", "text"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to specify the width of an image in pixels?",
              options: ["width", "size", "w", "px"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Tables in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to create an HTML table?",
              options: ["<tab>", "<table>", "<grid>", "<tb>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to create a row in a table?",
              options: ["<row>", "<tr>", "<td>", "<th>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to create a standard data cell in a table?",
              options: ["<data>", "<cell>", "<td>", "<dc>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to create a header cell in a table (bold and centered by default)?",
              options: ["<header>", "<hd>", "<th>", "<thead>"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used to specify how many columns a cell should span?",
              options: ["colspan", "rowspan", "span", "columns"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Block vs Inline Elements in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which of the following is a block-level element?",
              options: ["<span>", "<a>", "<div>", "<img>"],
              correctAnswer: 3
            },
            {
              question: "Which of the following is an inline element?",
              options: ["<p>", "<h1>", "<span>", "<ul>"],
              correctAnswer: 3
            },
            {
              question: "What is the default behavior of a block-level element?",
              options: [
                "It does not start on a new line",
                "It only takes up as much width as necessary",
                "It starts on a new line and takes up the full width available",
                "It cannot have margins or padding"
              ],
              correctAnswer: 3
            },
            {
              question: "What is the default behavior of an inline element?",
              options: [
                "It starts on a new line",
                "It takes up the full width available",
                "It does not start on a new line and only takes up as much width as necessary",
                "It cannot contain other elements"
              ],
              correctAnswer: 3
            },
            {
              question: "Which element is commonly used as a generic block-level container?",
              options: ["<span>", "<container>", "<div>", "<box>"],
              correctAnswer: 3
            },
            {
              question: "Which element is commonly used as a generic inline container?",
              options: ["<div>", "<container>", "<inline>", "<span>"],
              correctAnswer: 4
            },
            {
              question: "Which of the following elements is block-level by default?",
              options: ["<strong>", "<em>", "<a>", "<li>"],
              correctAnswer: 4
            }
          ]
        },
        {
          title: "Semantic Layout in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to define the main content of a document?",
              options: ["<main>", "<content>", "<body>", "<section>"],
              correctAnswer: 1
            },
            {
              question: "Which tag is typically used for the top section of a page, containing logos and navigation?",
              options: ["<top>", "<header>", "<nav>", "<section>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define a section of navigation links?",
              options: ["<links>", "<navbar>", "<nav>", "<navigation>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to define an independent, self-contained piece of content?",
              options: ["<section>", "<article>", "<div>", "<independent>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define a footer for a document or section?",
              options: ["<bottom>", "<foot>", "<footer>", "<end>"],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "Attributes & Global Attributes in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which attribute is used to provide a unique name for an HTML element?",
              options: ["name", "id", "class", "type"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to specify one or more CSS classes for an element?",
              options: ["css", "style", "class", "type"],
              correctAnswer: 3
            },
            {
              question: "Which global attribute is used to add extra information about an element (shown as a tooltip)?",
              options: ["info", "tooltip", "title", "data"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used to define inline CSS styles for an element?",
              options: ["css", "style", "design", "look"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to make an element not focusable and exclude it from accessibility trees?",
              options: ["ignore", "hidden", "invisible", "aria-hidden"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Comments & Whitespace in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "How do you write a comment in HTML?",
              options: [
                "// This is a comment",
                "/* This is a comment */",
                "<!-- This is a comment -->",
                "# This is a comment"
              ],
              correctAnswer: 3
            },
            {
              question: "What is the purpose of comments in HTML?",
              options: [
                "To style the webpage",
                "To add hidden content for users",
                "To add notes or explanations that are not displayed in the browser",
                "To create invisible elements"
              ],
              correctAnswer: 3
            },
            {
              question: "How does HTML treat multiple consecutive whitespace characters (like spaces or line breaks) in the code?",
              options: [
                "It displays them exactly as written",
                "It collapses them into a single space",
                "It ignores them completely",
                "It converts them into tabs"
              ],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to preserve whitespace and line breaks exactly as written in the code?",
              options: [
                "<pre>",
                "<code>",
                "<whitespace>",
                "<text>"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Accessibility in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which attribute is used to provide a text alternative for an image for screen readers?",
              options: ["title", "src", "alt", "description"],
              correctAnswer: 3
            },
            {
              question: "Which semantic HTML tag is used to define the main content of a page, helping screen readers identify it?",
              options: ["<div id=\"main\">", "<main>", "<content>", "<body>"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to associate a label with a form input element for better accessibility?",
              options: ["for", "id", "name", "label"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to provide a caption for a table, making it more accessible?",
              options: ["<caption>", "<title>", "<summary>", "<description>"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Basic SEO in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to define the title of a webpage that appears in search engine results?",
              options: ["<title>", "<head>", "<meta>", "<header>"],
              correctAnswer: 1
            },
            {
              question: "Which meta tag is used to provide a brief description of the webpage for search engines?",
              options: [
                "<meta name=\"description\" content=\"...\">",
                "<meta name=\"keywords\" content=\"...\">",
                "<meta name=\"author\" content=\"...\">",
                "<meta name=\"summary\" content=\"...\">"
              ],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to define the main heading of a page, which is important for SEO?",
              options: ["<head>", "<header>", "<h1>", "<title>"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used in the <a> tag to indicate the relationship of the linked document?",
              options: ["rel", "href", "type", "target"],
              correctAnswer: 1
            }
          ]
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level HTML Quiz",
      topics: [
        {
          title: "Document Metadata in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "In which section of an HTML document are metadata tags typically placed?",
              options: ["<body>", "<footer>", "<header>", "<head>"],
              correctAnswer: 4
            },
            {
              question: "Which tag is used to define the character encoding for an HTML document?",
              options: ["<charset>", "<meta charset=\"UTF-8\">", "<encoding>", "<font>"],
              correctAnswer: 2
            },
            {
              question: "Which tag sets the title of the document, shown in the browser's title bar or tab?",
              options: ["<tab>", "<title>", "<head>", "<name>"],
              correctAnswer: 2
            },
            {
              question: "Which meta tag is used to specify the author of the webpage?",
              options: [
                "<meta name=\"author\" content=\"Author Name\">",
                "<meta author=\"Author Name\">",
                "<author>Author Name</author>",
                "<meta type=\"author\" value=\"Author Name\">"
              ],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to link an external CSS file to an HTML document?",
              options: ["<style>", "<css>", "<link>", "<attach>"],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "Semantic HTML Deep Dive",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to define a self-contained composition in a document (e.g., blog post, news article)?",
              options: ["<section>", "<article>", "<div>", "<content>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define content that is tangentially related to the main content (e.g., sidebar)?",
              options: ["<sidebar>", "<aside>", "<div class=\"sidebar\">", "<extra>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define a section with navigation links?",
              options: ["<navbar>", "<links>", "<nav>", "<menu>"],
              correctAnswer: 3
            },
            {
              question: "Which tag is used to specify the main or most important content of the document?",
              options: ["<content>", "<main>", "<body>", "<primary>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define a footer for a document or a section?",
              options: ["<bottom>", "<footer>", "<end>", "<close>"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Forms II (HTML5 Inputs & Validation)",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which input type is used for email addresses and provides basic validation?",
              options: [
                "<input type=\"text\">",
                "<input type=\"email\">",
                "<input type=\"mail\">",
                "<input type=\"address\">"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to make an input field required?",
              options: ["necessary", "required", "mustfill", "mandatory"],
              correctAnswer: 2
            },
            {
              question: "Which input type is used for URLs and provides validation for web addresses?",
              options: [
                "<input type=\"url\">",
                "<input type=\"website\">",
                "<input type=\"link\">",
                "<input type=\"http\">"
              ],
              correctAnswer: 1
            },
            {
              question: "Which input type allows users to select a date from a calendar widget?",
              options: [
                "<input type=\"calendar\">",
                "<input type=\"date\">",
                "<input type=\"day\">",
                "<input type=\"time\">"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to set a regular expression pattern for input validation?",
              options: ["regex", "pattern", "validate", "format"],
              correctAnswer: 2
            },
            {
              question: "Which input type is used for a range of numbers (e.g., a slider)?",
              options: [
                "<input type=\"number\">",
                "<input type=\"range\">",
                "<input type=\"slider\">",
                "<input type=\"scale\">"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to provide a hint or example of what to enter in an input field?",
              options: ["hint", "example", "placeholder", "suggestion"],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "Media in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to embed a video in an HTML document?",
              options: ["<movie>", "<video>", "<media>", "<embed>"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to embed an audio file in an HTML document?",
              options: ["<sound>", "<audio>", "<music>", "<mp3>"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to specify that a video should play automatically when the page loads?",
              options: ["play", "auto", "autoplay", "start"],
              correctAnswer: 3
            },
            {
              question: "Which attribute is used to add controls (like play, pause, volume) to a video or audio player?",
              options: ["controller", "controls", "player", "adjust"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to define multiple media resources for `<video>` or `<audio>` elements?",
              options: ["<source>", "<src>", "<media>", "<file>"],
              correctAnswer: 1
            },
            {
              question: "Which attribute is used to specify that a video or audio should loop repeatedly?",
              options: ["repeat", "loop", "cyclic", "again"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Tables II: Scope, Headers, Caption",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which attribute is used to associate a header cell with its related rows or columns for accessibility?",
              options: ["headers", "scope", "axis", "group"],
              correctAnswer: 2
            },
            {
              question: "Which value for the scope attribute indicates that a header cell is for a row?",
              options: ["row", "col", "rowgroup", "colgroup"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to add a title or caption to a table?",
              options: ["<title>", "<caption>", "<summary>", "<tabletitle>"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to link a data cell to specific header cells (using their id values)?",
              options: ["head", "header", "headers", "scope"],
              correctAnswer: 3
            },
            {
              question: "Which value for the scope attribute indicates that a header cell is for a column?",
              options: ["row", "col", "rowgroup", "colgroup"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to group header content in a table?",
              options: ["<thead>", "<header>", "<thgroup>", "<hgroup>"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to group body content in a table?",
              options: ["<tbody>", "<body>", "<bgroup>", "<content>"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Accessibility Patterns",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the purpose of a \"skip navigation\" link?",
              options: [
                "To hide the navigation from sighted users",
                "To allow keyboard users to skip directly to the main content",
                "To remove navigation for screen reader users",
                "To style the navigation differently"
              ],
              correctAnswer: 2
            },
            {
              question: "Which ARIA attribute should be used to indicate that a button opens a modal dialog?",
              options: [
                "aria-modal=\"true\"",
                "aria-role=\"dialog\"",
                "aria-haspopup=\"dialog\"",
                "aria-expanded=\"true\""
              ],
              correctAnswer: 1
            },
            {
              question: "What is the recommended way to provide accessible error messages for form inputs?",
              options: [
                "Use color alone to indicate errors",
                "Use aria-invalid and associate error text with aria-describedby",
                "Only show errors when the form is submitted",
                "Use JavaScript alerts for errors"
              ],
              correctAnswer: 2
            },
            {
              question: "Which pattern ensures custom checkboxes/radio buttons are accessible?",
              options: [
                "Hide the native input and style a adjacent element",
                "Use div elements with click events",
                "Rely solely on CSS for styling",
                "Use images instead of inputs"
              ],
              correctAnswer: 1,
              note: "Hide the native input and style a adjacent element (while keeping the native input functional)"
            },
            {
              question: "How should a screen reader announce a loading state (e.g., after submitting a form)?",
              options: [
                "Use aria-live=\"polite\" to announce the status",
                "Show a spinner GIF",
                "Use JavaScript console.log",
                "Change the page title"
              ],
              correctAnswer: 1
            },
            {
              question: "What is the key benefit of using a \"landmark\" roles (e.g., role=\"banner\", role=\"main\")?",
              options: [
                "They improve page styling",
                "They help screen reader users navigate to important sections",
                "They make the page load faster",
                "They enhance SEO"
              ],
              correctAnswer: 2
            },
            {
              question: "How should you handle focus when closing a modal dialog?",
              options: [
                "Return focus to the element that opened the modal",
                "Move focus to the top of the page",
                "Let the browser handle focus automatically",
                "Remove focus from all elements"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Structured Data Basics (JSON-LD)",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What does JSON-LD stand for?",
              options: [
                "JavaScript Object Notation for Linked Data",
                "JSON Linked Database",
                "JavaScript Online Linked Data",
                "JSON Light Data"
              ],
              correctAnswer: 1
            },
            {
              question: "Where is JSON-LD typically placed in an HTML document?",
              options: [
                "In the <body> section",
                "In the <head> section",
                "In a separate .json file",
                "In a <script> tag with type=\"application/ld+json\""
              ],
              correctAnswer: 4
            },
            {
              question: "Which of these is a primary benefit of using structured data?",
              options: [
                "It makes websites load faster",
                "It improves search engine understanding of content",
                "It enhances CSS styling",
                "It reduces JavaScript usage"
              ],
              correctAnswer: 2
            },
            {
              question: "What is the purpose of the `@context` property in JSON-LD?",
              options: [
                "To define the visual style of the data",
                "To specify the vocabulary used (e.g., schema.org)",
                "To set the character encoding",
                "To declare the programming language"
              ],
              correctAnswer: 2
            },
            {
              question: "Which property is used to specify the type of item being described (e.g., Article, Person)?",
              options: ["@type", "@class", "@item", "@category"],
              correctAnswer: 1
            },
            {
              question: "How does JSON-LD help with rich snippets in search results?",
              options: [
                "By hiding content from users",
                "By providing explicit clues about content meaning to search engines",
                "By encrypting website data",
                "By reducing HTML file size"
              ],
              correctAnswer: 2
            },
            {
              question: "Which tool can you use to test your JSON-LD implementation?",
              options: [
                "Google Rich Results Test",
                "CSS Validator",
                "JavaScript Debugger",
                "HTML Linter"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Performance & Loading",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which attribute is used to defer the loading of a JavaScript file until after the HTML is parsed?",
              options: ["async", "defer", "lazy", "delay"],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to asynchronously load a JavaScript file without blocking HTML parsing?",
              options: ["async", "defer", "lazy", "non-blocking"],
              correctAnswer: 1
            },
            {
              question: "Which attribute is used to lazy-load images (load only when they enter the viewport)?",
              options: ["loading=\"lazy\"", "lazy=\"true\"", "load=\"defer\"", "delay-load=\"true\""],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to preload critical resources (like fonts or CSS) early in the page load?",
              options: ["<preload>", "<link rel=\"preload\">", "<resource>", "<load-early>"],
              correctAnswer: 2
            },
            {
              question: "Which technique helps reduce the number of HTTP requests for small images?",
              options: ["Lazy loading", "CSS sprites", "JavaScript bundling", "Gzip compression"],
              correctAnswer: 2
            },
            {
              question: "Which tag is used to specify multiple versions of an image for different screen sizes?",
              options: ["<picture>", "<responsive>", "<srcset>", "<media>"],
              correctAnswer: 1
            },
            {
              question: "What is the main benefit of minifying CSS and JavaScript files?",
              options: ["Improved security", "Reduced file size", "Better SEO", "Enhanced styling"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Favicons & Web App Manifest",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which tag is used to link a favicon to a web page?",
              options: [
                "<img src=\"favicon.ico\">",
                "<link rel=\"icon\" href=\"favicon.ico\">",
                "<icon href=\"favicon.ico\">",
                "<favicon src=\"favicon.ico\">"
              ],
              correctAnswer: 2
            },
            {
              question: "What is the purpose of a Web App Manifest file?",
              options: [
                "To store database credentials",
                "To define how a web app should behave when installed on a device",
                "To manage CSS styles",
                "To track user analytics"
              ],
              correctAnswer: 2
            },
            {
              question: "Which file format is commonly used for the Web App Manifest?",
              options: [
                "manifest.xml",
                "manifest.json",
                "manifest.html",
                "manifest.js"
              ],
              correctAnswer: 2
            },
            {
              question: "Which property in the Web App Manifest defines the name of the application?",
              options: ["short_name", "name", "title", "app_name"],
              correctAnswer: 2
            },
            {
              question: "Which property in the Web App Manifest specifies the start URL when the app is launched?",
              options: ["start_url", "launch_url", "home_url", "url"],
              correctAnswer: 1
            },
            {
              question: "Which tag is used to link the Web App Manifest to an HTML document?",
              options: [
                "<link rel=\"manifest\" href=\"manifest.json\">",
                "<script src=\"manifest.json\"></script>",
                "<meta name=\"manifest\" content=\"manifest.json\">",
                "<app-manifest href=\"manifest.json\">"
              ],
              correctAnswer: 1
            },
            {
              question: "Which property in the Web App Manifest controls the display mode (e.g., fullscreen, standalone)?",
              options: ["display_mode", "display", "view", "app_display"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Iframes & Sandboxing",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the primary purpose of an iframe in HTML?",
              options: [
                "To style content",
                "To embed another HTML document within the current page",
                "To create a sandboxed environment for CSS",
                "To load external JavaScript files"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute is used to specify the URL of the document to embed in an iframe?",
              options: ["url", "link", "src", "href"],
              correctAnswer: 3
            },
            {
              question: "What is the main security benefit of using the sandbox attribute in an iframe?",
              options: [
                "It improves loading speed",
                "It restricts the actions of the embedded content (e.g., scripts, forms)",
                "It enhances SEO",
                "It automatically resizes the iframe"
              ],
              correctAnswer: 2
            },
            {
              question: "Which sandbox value allows the embedded content to submit forms?",
              options: ["allow-forms", "allow-submissions", "allow-post", "enable-forms"],
              correctAnswer: 1
            },
            {
              question: "Which sandbox value allows the embedded content to run scripts?",
              options: ["allow-scripts", "enable-js", "run-scripts", "scripting"],
              correctAnswer: 1
            },
            {
              question: "Which attribute allows an iframe to access the parent document’s DOM (if same-origin)?",
              options: ["allow-dom", "allow-same-origin", "enable-access", "permit-dom"],
              correctAnswer: 2
            },
            {
              question: "How does the srcdoc attribute in an iframe differ from src?",
              options: [
                "srcdoc embeds inline HTML content instead of loading an external URL",
                "srcdoc loads content from a sandboxed domain",
                "srcdoc is used for video embedding only",
                "srcdoc requires a JSON source"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Forms III: File Uploads & Attributes",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which input type is used to create a file upload button?",
              options: [
                "<input type=\"upload\">",
                "<input type=\"file\">",
                "<input type=\"document\">",
                "<input type=\"attachment\">"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute allows multiple files to be selected in a file input?",
              options: ["multiple", "many", "several", "allow-multiple"],
              correctAnswer: 1
            },
            {
              question: "Which attribute specifies the types of files that the server accepts?",
              options: ["filetypes", "accept", "types", "filter"],
              correctAnswer: 2
            },
            {
              question: "How would you restrict a file input to only accept PDF files?",
              options: [
                "<input type=\"file\" accept=\".pdf\">",
                "<input type=\"file\" filter=\"pdf\">",
                "<input type=\"file\" only=\"pdf\">",
                "<input type=\"file\" type=\"pdf\">"
              ],
              correctAnswer: 1
            },
            {
              question: "Which attribute sets a maximum file size for uploads (enforced by the server, not HTML)?",
              options: [
                "max-size",
                "maxlength",
                "size-limit",
                "data-max-size (Note: HTML doesn’t enforce this; it’s typically done server-side)"
              ],
              correctAnswer: 4,
              note: "Though HTML doesn’t natively enforce max size, developers often use data-* attributes for JavaScript validation. Server-side validation is mandatory."
            },
            {
              question: "Which attribute in a form tag specifies how form data should be encoded when submitted?",
              options: ["method", "enctype", "encoding", "action"],
              correctAnswer: 2
            },
            {
              question: "Which enctype value is required for forms that include file uploads?",
              options: [
                "application/x-www-form-urlencoded",
                "multipart/form-data",
                "text/plain",
                "application/json"
              ],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Progressive Enhancement Mindset",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the core principle of Progressive Enhancement?",
              options: [
                "Build for modern browsers first, then add fallbacks for older ones",
                "Start with a basic, functional experience for all users, then enhance for advanced browsers",
                "Use only the latest web technologies without backward compatibility",
                "Focus solely on mobile-first design"
              ],
              correctAnswer: 2
            },
            {
              question: "Which of these is a key technique in Progressive Enhancement?",
              options: [
                "Using <noscript> to hide content from users without JavaScript",
                "Relying on JavaScript for all core functionality",
                "Providing semantic HTML as a foundation, then layering CSS and JavaScript",
                "Blocking users with older browsers"
              ],
              correctAnswer: 3
            },
            {
              question: "How does Progressive Enhancement improve accessibility?",
              options: [
                "By forcing all users to use the same advanced features",
                "By ensuring core content and functionality are available without relying on CSS or JavaScript",
                "By using complex animations to engage users",
                "By excluding users with slow internet connections"
              ],
              correctAnswer: 2
            },
            {
              question: "Which example demonstrates Progressive Enhancement?",
              options: [
                "A website that only works in Chrome",
                "A form that requires JavaScript to submit",
                "A navigation menu that works with HTML links, then enhanced with JavaScript for smooth scrolling",
                "Using only divs without semantic HTML tags"
              ],
              correctAnswer: 3
            },
            {
              question: "What is a benefit of Progressive Enhancement for SEO?",
              options: [
                "Search engines ignore websites using Progressive Enhancement",
                "Core content is always accessible to search engine crawlers, even without JavaScript",
                "It requires less server resources",
                "It automatically generates meta tags"
              ],
              correctAnswer: 2
            },
            {
              question: "Which technology layer is typically the foundation in Progressive Enhancement?",
              options: ["JavaScript", "CSS", "Semantic HTML", "WebAssembly"],
              correctAnswer: 3
            },
            {
              question: "How does Progressive Enhancement handle network issues?",
              options: [
                "It assumes users always have fast internet",
                "It allows users to access basic content even if JavaScript or CSS fails to load",
                "It requires all resources to load completely before showing anything",
                "It prioritizes animations over content"
              ],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Semantic Outlines & Heading Levels",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the purpose of using heading levels (<h1> to <h6>)?",
              options: [
                "To control font sizes",
                "To create a semantic document outline and hierarchy",
                "To add emphasis to text",
                "To improve page loading speed"
              ],
              correctAnswer: 2
            },
            {
              question: "Which heading level should represent the main title of the page?",
              options: ["<h1>", "<h2>", "<h3>", "<h6>"],
              correctAnswer: 1
            },
            {
              question: "Why should you avoid skipping heading levels (e.g., going from <h1> to <h3>)?",
              options: [
                "It breaks CSS styling",
                "It confuses assistive technologies and disrupts the document structure",
                "It slows down page rendering",
                "It causes JavaScript errors"
              ],
              correctAnswer: 2
            },
            {
              question: "Which element can be used to create a section with its own heading hierarchy without affecting the main outline?",
              options: ["<div>", "<section>", "<article>", "<aside>"],
              correctAnswer: 2,
              note: "<section> defines a section in a document with its own heading flow"
            },
            {
              question: "How does the <main> element contribute to the document outline?",
              options: [
                "It defines the primary content and should contain the main <h1>",
                "It hides content from screen readers",
                "It replaces the need for headings",
                "It automatically generates a table of contents"
              ],
              correctAnswer: 1
            },
            {
              question: "What is the role of the <header> element in the document outline?",
              options: [
                "It groups introductory content and often contains a heading",
                "It creates a new heading level",
                "It replaces the <h1> tag",
                "It is only for logos and navigation"
              ],
              correctAnswer: 1
            },
            {
              question: "Why is a logical heading structure important for accessibility?",
              options: [
                "It makes the page look more professional",
                "It helps screen reader users navigate and understand the page organization",
                "It reduces HTTP requests",
                "It improves JavaScript performance"
              ],
              correctAnswer: 2
            }
          ]
        },
      ],
    },
    advanced: {
      title: "Advanced Level HTML Quiz",
      topics: [
        {
          title: "Accessibility Advanced: ARIA Patterns",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which ARIA role is used to indicate a button element when using non-semantic HTML?",
              option: [
                "role=\"form\"",
                "role=\"button\"",
                "role=\"input\"",
                "role=\"link\""
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute provides an accessible label for elements that have no visible label?",
              option: [
                "aria-live",
                "aria-label",
                "aria-hidden",
                "aria-controls"
              ],
              correctAnswer: 2
            },
            {
              question: "The aria-expanded attribute is primarily used with:",
              option: [
                "Modal dialogs",
                "Collapsible sections or dropdowns",
                "Progress bars",
                "Tables"
              ],
              correctAnswer: 2
            },
            {
              question: "Which ARIA attribute should be avoided if a semantic HTML element already provides the same meaning?",
              option: [
                "aria-hidden",
                "aria-label",
                "redundant ARIA role",
                "aria-controls"
              ],
              correctAnswer: 3
            }
          ]
        },
        {
          title: "Forms IV: Advanced Form APIs",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which input type allows selecting a date in modern browsers?",
              option: [
                "input type=\"calendar\"",
                "input type=\"datetime\"",
                "input type=\"date\"",
                "input type=\"time\""
              ],
              correctAnswer: 3
            },
            {
              question: "The setCustomValidity() method is used to:",
              option: [
                "Reset form values",
                "Add custom error messages",
                "Submit the form",
                "Autofill form fields"
              ],
              correctAnswer: 2
            },
            {
              question: "Which property can check whether a form element meets validation constraints?",
              option: [
                "checkValidity()",
                "verifyInput()",
                "validateNow()",
                "confirmValidity()"
              ],
              correctAnswer: 1
            },
            {
              question: "The Constraint Validation API includes which event to handle invalid inputs?",
              option: [
                "onerror",
                "oninvalid",
                "onchange",
                "onvalidate"
              ],
              correctAnswer: 2
            },
            {
              question: "Which input attribute suggests a pre-defined option to users while typing?",
              option: [
                "datalist",
                "autocomplete=\"off\"",
                "placeholder",
                "aria-suggest"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "HTML5 APIs in HTML",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which API allows storing data in the browser that persists after refresh?",
              option: [
                "Session Storage",
                "Local Storage",
                "Cookies only",
                "Web SQL"
              ],
              correctAnswer: 2
            },
            {
              question: "The navigator.geolocation object is used to:",
              option: [
                "Detect browser version",
                "Access device location",
                "Store temporary files",
                "Read user’s clipboard"
              ],
              correctAnswer: 2
            },
            {
              question: "The Canvas API is used for:",
              option: [
                "3D printing",
                "Drawing graphics via JavaScript",
                "Audio streaming",
                "Form validation"
              ],
              correctAnswer: 2
            },
            {
              question: "The Web Workers API is mainly used for:",
              option: [
                "Running scripts in the background",
                "Validating forms",
                "Accessing camera",
                "Handling cookies"
              ],
              correctAnswer: 1
            },
            {
              question: "Which HTML5 API allows accessing files locally from user input?",
              option: [
                "File API",
                "WebRTC",
                "Fetch API",
                "IndexedDB"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Media Advanced",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which attribute ensures media content starts playing automatically?",
              option: ["loop", "autoplay", "controls", "preload"],
              correctAnswer: 2
            },
            {
              question: "The track element in video/audio is mainly used for:",
              option: [
                "Buffering",
                "Subtitles and captions",
                "Video compression",
                "File preloading"
              ],
              correctAnswer: 2
            },
            {
              question: "Which API allows programmatic control of media playback?",
              option: [
                "Media Source Extensions (MSE)",
                "Web Workers",
                "WebSockets",
                "Service Workers"
              ],
              correctAnswer: 1
            },
            {
              question: "Which attribute helps browsers decide how much media to preload?",
              option: ["preload", "buffer", "stream", "cache"],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Web Components & Templates",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which API is used to create custom reusable elements in HTML?",
              option: [
                "Shadow DOM",
                "Custom Elements API",
                "Templates API",
                "WebSockets"
              ],
              correctAnswer: 2
            },
            {
              question: "The shadowRoot is associated with:",
              option: [
                "Isolated styling and DOM encapsulation",
                "Browser caching",
                "Form validation",
                "Media control"
              ],
              correctAnswer: 1
            },
            {
              question: "The <template> tag in HTML is used for:",
              option: [
                "Lazy loading scripts",
                "Defining reusable HTML fragments",
                "Styling components",
                "SEO metadata"
              ],
              correctAnswer: 2
            },
            {
              question: "Which method attaches a shadow DOM to an element?",
              option: [
                "element.attachShadow({mode:\"open\"})",
                "element.createShadow()",
                "element.addShadowDOM()",
                "element.shadow(true)"
              ],
              correctAnswer: 1
            },
            {
              question: "Which of the following is NOT a feature of Web Components?",
              option: ["Shadow DOM", "Templates", "Custom Elements", "CSS Grid"],
              correctAnswer: 4
            }
          ]
        },
        {
          title: "Security in Markup",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which attribute prevents a hyperlink from passing referrer information?",
              option: [
                "target=\"_blank\"",
                "rel=\"noreferrer\"",
                "rel=\"nofollow\"",
                "data-safe"
              ],
              correctAnswer: 2
            },
            {
              question: "To mitigate XSS, which attribute is commonly used with iframes?",
              option: ["srcdoc", "sandbox", "aria-safe", "allow"],
              correctAnswer: 2
            },
            {
              question: "What does the Content-Security-Policy (CSP) header do?",
              option: [
                "Validates forms",
                "Restricts resources a page can load",
                "Improves SEO",
                "Disables caching"
              ],
              correctAnswer: 2
            },
            {
              question: "Which attribute helps protect against clickjacking?",
              option: ["hidden", "frameborder", "X-Frame-Options", "rel=\"noopener\""],
              correctAnswer: 3
            },
            {
              question: "Which of the following is the safest way to handle untrusted HTML?",
              option: ["innerHTML", "textContent", "document.write()", "eval()"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "SEO Advanced & Internationalization",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "The hreflang attribute is used for:",
              option: [
                "Language detection of browser",
                "Specifying language/region for URLs",
                "Translating text automatically",
                "Adding alt text"
              ],
              correctAnswer: 2
            },
            {
              question: "Canonical tags are used to:",
              option: [
                "Improve CSS performance",
                "Avoid duplicate content issues",
                "Generate XML sitemaps",
                "Add metadata for images"
              ],
              correctAnswer: 2
            },
            {
              question: "Structured data in HTML is typically added using:",
              option: ["JSON-LD", "JavaScript Workers", "CSS Variables", "SVG"],
              correctAnswer: 1
            },
            {
              question: "Which meta tag sets the default language and character encoding?",
              option: [
                "<meta charset=\"UTF-8\">",
                "<meta lang=\"en\">",
                "<meta i18n=\"true\">",
                "<meta encoding=\"utf8\">"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          title: "Performance & Progressive Web Features",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Service Workers are mainly used for:",
              option: [
                "SEO improvements",
                "Offline caching & background sync",
                "Video streaming",
                "Database management"
              ],
              correctAnswer: 2
            },
            {
              question: "Which API helps optimize loading of large images for performance?",
              option: [
                "Lazy Loading (loading=\"lazy\")",
                "LocalStorage",
                "Fetch API",
                "Cookies"
              ],
              correctAnswer: 1
            },
            {
              question: "Which tool measures Core Web Vitals performance in browsers?",
              option: [
                "Lighthouse",
                "Service Worker Inspector",
                "DevTools Memory Tab",
                "WebRTC Monitor"
              ],
              correctAnswer: 1
            },
            {
              question: "Progressive Web Apps (PWAs) can be installed because of:",
              option: [
                "Local Storage",
                "Web App Manifest",
                "Cookies",
                "Shadow DOM"
              ],
              correctAnswer: 2
            },
            {
              question: "Which HTTP header helps with performance by telling browser what resources to load early?",
              option: [
                "Cache-Control",
                "Link: rel=preload",
                "Strict-Transport-Security",
                "X-Frame-Options"
              ],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Head Strategy & Advanced Embeds",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizeData: [
            {
              question: "Which tag defines metadata for responsive design?",
              option: [
                "<meta responsive>",
                "<meta name=\"viewport\">",
                "<meta charset=\"UTF-8\">",
                "<meta screen=\"true\">"
              ],
              correctAnswer: 2
            },
            {
              question: "Open Graph meta tags are mainly used for:",
              option: [
                "SEO crawling",
                "Social media sharing previews",
                "Security headers",
                "Form validation"
              ],
              correctAnswer: 2
            },
            {
              question: "Which embed method allows including another website inside a page?",
              option: [
                "<script>",
                "<iframe>",
                "<embed>",
                "<link>"
              ],
              correctAnswer: 2
            },
            {
              question: "Which HTML tag is best for embedding scalable vector images?",
              option: ["<svg>", "<img>", "<object>", "<icon>"],
              correctAnswer: 1
            },
            {
              question: "The async attribute in a script tag ensures:",
              option: [
                "Script loads after HTML",
                "Script executes without blocking HTML parsing",
                "Script always loads first",
                "Script is disabled"
              ],
              correctAnswer: 2
            }
          ]
        }
      ]
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
          Complete HTML Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master HTML from Beginner to Advanced Level through interactive quizzes,
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

export default HTMLQuize;
