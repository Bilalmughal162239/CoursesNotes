import React, { useState, useEffect, useCallback, useMemo } from "react";

const CSSQuiz = () => {
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
      title: "Beginner Level CSS Quiz",
      topics: [
        {
          title: "Introduction to CSS",
          explanation: "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          quizData: [
            { question: "CSS stands for:", "options": ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Syntax"], correctAnswer: 1 },
            { question: "Which symbol is used to apply CSS to all elements?", "options": ["#", ".", "*", "%"], correctAnswer: 3 },
            { question: "Which of the following is NOT a valid way to include CSS?", "options": ["Inline CSS", "Internal CSS", "External CSS", "Embedded JavaScript"], correctAnswer: 4 },
            { question: "Which HTML tag is used to link an external CSS file?", "options": ["<script>", "<style>", "<link>", "<css>"], correctAnswer: 3 },
            { question: "Which property is used to change text color?", "options": ["text-style", "color", "font-color", "background-color"], correctAnswer: 2 },
            { question: "Which property is used to set a background image?", "options": ["background-url", "image", "background-image", "img"], correctAnswer: 3 },
            { question: "Inline CSS is written inside:", "options": ["<link>", "style=\"\" attribute", "<style> tag in head", "external .css file"], correctAnswer: 2 },
            { question: "The default position of CSS is:", "options": ["inline > internal > external", "external > inline > internal", "inline > external > internal", "external > internal > inline"], correctAnswer: 1 },
            { question: "Which CSS property controls text size?", "options": ["text-size", "font-size", "size", "text-style"], correctAnswer: 2 },
            { question: "Which CSS unit is relative to root element’s font size?", "options": ["em", "%", "px", "rem"], correctAnswer: 4 }
          ]
        },
        {
          title: "CSS Selectors",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which selector targets an element with a specific ID?", "options": [".classname", "#idname", "elementname", "*"], correctAnswer: 2 },
            { question: "Which selector selects all <p> elements inside <div>?", "options": ["div p", "div+p", "div>p", "div~p"], correctAnswer: 1 },
            { question: "Which selector selects direct children only?", "options": ["div p", "div+p", "div>p", "div~p"], correctAnswer: 3 },
            { question: "Which selector applies styles to multiple elements at once?", "options": ["p, h1, h2", "p h1 h2", "p+h1+h2", "p>h1>h2"], correctAnswer: 1 },
            { question: "Which pseudo-class is used for hovering over a link?", "options": [":focus", ":visited", ":hover", ":active"], correctAnswer: 3 }
          ]
        },
        {
          title: "CSS Properties",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property controls element spacing outside the border?", "options": ["margin", "padding", "spacing", "border-spacing"], correctAnswer: 1 },
            { question: "Which property adds space inside the border of an element?", "options": ["margin", "padding", "spacing", "indent"], correctAnswer: 2 },
            { question: "Which property sets an element’s width?", "options": ["height", "width", "size", "length"], correctAnswer: 2 },
            { question: "Which property changes text alignment?", "options": ["align", "text-align", "font-align", "content-align"], correctAnswer: 2 },
            { question: "Which property makes text bold?", "options": ["font-style", "font-weight", "text-bold", "strong"], correctAnswer: 2 },
            { question: "Which property makes text italic?", "options": ["font-style", "font-weight", "font-variant", "text-style"], correctAnswer: 1 },
            { question: "Which property sets background color?", "options": ["color", "bg-color", "background", "background-color"], correctAnswer: 4 },
            { question: "Which property sets the border thickness?", "options": ["border-color", "border-width", "border-size", "border-thickness"], correctAnswer: 2 },
            { question: "Which property sets border style?", "options": ["border-type", "border-style", "border-line", "border-shape"], correctAnswer: 2 },
            { question: "Which property hides an element but keeps space reserved?", "options": ["display:none", "visibility:hidden", "opacity:0", "position:absolute"], correctAnswer: 2 },
            { question: "Which property changes the cursor when hovering?", "options": ["cursor", "pointer", "hover-cursor", "style"], correctAnswer: 1 },
            { question: "Which property sets letter spacing?", "options": ["text-spacing", "word-spacing", "letter-spacing", "font-spacing"], correctAnswer: 3 },
            { question: "Which property controls line height?", "options": ["line-height", "text-spacing", "font-height", "paragraph-height"], correctAnswer: 1 },
            { question: "Which property controls list bullets?", "options": ["list-style", "bullet-style", "list-type", "marker"], correctAnswer: 1 },
            { question: "Which property changes element transparency?", "options": ["opacity", "transparency", "alpha", "filter"], correctAnswer: 1 }
          ]
        },
        {
          title: "CSS Layouts",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property is used for flexible layouts?", "options": ["float", "grid", "flex", "position"], correctAnswer: 3 },
            { question: "Which property enables CSS Grid layout?", "options": ["display:grid", "grid:enabled", "layout:grid", "grid-template"], correctAnswer: 1 },
            { question: "Which property controls flexbox direction?", "options": ["flex-direction", "flex-flow", "align-items", "flex-order"], correctAnswer: 1 },
            { question: "Which property aligns flex items along cross-axis?", "options": ["align-items", "justify-content", "align-content", "text-align"], correctAnswer: 1 },
            { question: "Which property aligns flex items along main-axis?", "options": ["align-items", "justify-content", "flex-flow", "content-align"], correctAnswer: 2 },
            { question: "Which property makes an element float left or right?", "options": ["float", "position", "align", "display"], correctAnswer: 1 },
            { question: "Which property clears floated elements?", "options": ["clear", "float:none", "overflow", "block"], correctAnswer: 1 },
            { question: "Which property allows elements to overlap in layers?", "options": ["z-index", "layer", "index", "position"], correctAnswer: 1 },
            { question: "Which property sets grid columns?", "options": ["grid-template-columns", "grid-columns", "grid-width", "column-count"], correctAnswer: 1 },
            { question: "Which property sets grid rows?", "options": ["grid-template-rows", "grid-rows", "row-count", "row-size"], correctAnswer: 1 }
          ]
        },
        {
          title: "CSS Transitions & Animations",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property defines transition duration?", "options": ["transition-time", "transition-duration", "duration", "animation-time"], correctAnswer: 2 },
            { question: "Which property defines transition effect type?", "options": ["transition-type", "transition-timing-function", "ease-function", "transition-effect"], correctAnswer: 2 },
            { question: "Which property defines the name of animation?", "options": ["animation-name", "keyframes", "anim-name", "transition-name"], correctAnswer: 1 },
            { question: "Which property sets number of times animation runs?", "options": ["animation-loop", "animation-repeat", "animation-iteration-count", "animation-times"], correctAnswer: 3 },
            { question: "Which property sets delay before animation starts?", "options": ["animation-delay", "transition-delay", "delay", "anim-delay"], correctAnswer: 1 },
            { question: "Which keyword makes animation run infinitely?", "options": ["always", "forever", "infinite", "loop"], correctAnswer: 3 },
            { question: "Which property defines keyframes in CSS?", "options": ["@frames", "@keyframes", "keyframes{}", "animation-frames"], correctAnswer: 2 },
            { question: "Which property pauses/resumes animation?", "options": ["animation-status", "animation-play-state", "animation-stop", "animation-hold"], correctAnswer: 2 },
            { question: "Which transition function starts fast and slows down?", "options": ["linear", "ease-in", "ease-out", "ease-in-out"], correctAnswer: 3 },
            { question: "Which property defines animation speed curve?", "options": ["animation-function", "animation-timing-function", "transition-speed", "anim-curve"], correctAnswer: 2 }
          ]
        },
        {
          title: "Responsive Design",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which unit is most commonly used for responsive typography?", "options": ["px", "pt", "em/rem", "%"], correctAnswer: 3 },
            { question: "Which tag defines responsive design in HTML head?", "options": ["<meta responsive>", "<meta charset=\"UTF-8\">", "<meta name=\"viewport\">", "<meta layout=\"fluid\">"], correctAnswer: 3 },
            { question: "Which property hides content on small screens only?", "options": ["@media screen", "display:none inside media query", "visibility:hidden", "opacity:0"], correctAnswer: 2 },
            { question: "Which CSS feature allows different styles for different devices?", "options": ["selectors", "variables", "media queries", "transitions"], correctAnswer: 3 },
            { question: "Which unit scales with screen width?", "options": ["vw", "vh", "%", "em"], correctAnswer: 1 },
            { question: "Which Bootstrap class makes images responsive?", "options": [".img-resp", ".responsive-img", ".img-fluid", ".img-auto"], correctAnswer: 3 },
            { question: "Which CSS property allows grid/flex to adjust automatically?", "options": ["auto-fit / auto-fill", "grid-auto", "flex-auto", "responsive:true"], correctAnswer: 1 },
            { question: "Which relative unit is based on viewport height?", "options": ["vh", "vw", "%", "em"], correctAnswer: 1 },
            { question: "Which responsive technique serves different image sizes?", "options": ["<picture> element", "background-size:cover", "max-width:100%", "flex-shrink"], correctAnswer: 1 },
            { question: "Which CSS property makes font scale with screen width?", "options": ["clamp()", "minmax()", "font-size:calc()", "all of the above"], correctAnswer: 4 },
            { question: "Which property prevents layout shift on responsive design?", "options": ["aspect-ratio", "max-height", "min-width", "overflow:hidden"], correctAnswer: 1 },
            { question: "Which keyword is used for targeting print styles?", "options": ["@print", "@media print", "@media paper", "@media doc"], correctAnswer: 2 },
            { question: "Which property ensures grid items don’t overflow in small screens?", "options": ["minmax()", "overflow:hidden", "grid-auto-flow", "justify-self"], correctAnswer: 1 },
            { question: "Which CSS function helps create fluid typography?", "options": ["calc()", "clamp()", "min()", "max()"], correctAnswer: 2 },
            { question: "Which CSS technique adapts layout for accessibility preferences?", "options": ["prefers-color-scheme", "prefers-reduced-motion", "prefers-contrast", "all of the above"], correctAnswer: 4 }
          ]
        },
        {
          title: "CSS Variables",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which keyword is used to declare CSS variables?", "options": ["var", "-- (double hyphen)", "$", "css-var"], correctAnswer: 2 },
            { question: "Which function is used to apply a CSS variable?", "options": ["variable()", "get()", "var()", "use()"], correctAnswer: 3 },
            { question: "CSS variables can be declared in:", "options": [":root selector", "body only", "head only", "external file only"], correctAnswer: 1 },
            { question: "Which of the following is an advantage of CSS variables?", "options": ["Easy theme changes", "Reusability", "Maintainability", "All of the above"], correctAnswer: 4 },
            { question: "CSS variables follow:", "options": ["Inline scope only", "Global & local scope", "No scope", "Function scope only"], correctAnswer: 2 }
          ]
        }
      ]

    },
    intermediate: {
      title: "Intermediate Level CSS Quiz",
      topics: [
        {
          title: "CSS Pseudo-classes & Pseudo-elements",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which pseudo-class is used to style an element when a user hovers the mouse pointer over it?", "options": [":hover", ":active", ":focus", ":visited"], correctAnswer: 1 },
            { question: "Which pseudo-element is used to insert content before an element’s content?", "options": ["::before", ":first-child", "::after", ":marker"], correctAnswer: 1 },
            { question: "The :nth-child(2n) selector selects:", "options": ["Odd elements", "Even elements", "First element only", "Last element only"], correctAnswer: 2 },
            { question: "Which pseudo-class selects elements that do not match a given selector?", "options": [":empty", ":not()", ":only-child", ":checked"], correctAnswer: 2 },
            { question: "The ::first-line pseudo-element can be applied to:", "options": ["Inline elements only", "Block-level elements only", "Both inline and block elements", "Replaced elements only"], correctAnswer: 2 }
          ]
        },
        {
          title: "CSS Transforms",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property is used to apply 2D or 3D transformations to an element?", "options": ["animation", "transform", "transition", "perspective"], correctAnswer: 2 },
            { question: "What does transform: rotate(45deg); do?", "options": ["Skews the element by 45 degrees", "Rotates the element 45 degrees clockwise", "Rotates the element 45 degrees counter-clockwise", "Moves the element 45px"], correctAnswer: 2 },
            { question: "Which function scales an element on the X-axis only?", "options": ["scale()", "scaleY()", "scaleX()", "skewX()"], correctAnswer: 3 },
            { question: "The CSS property transform-origin controls:", "options": ["The speed of transformation", "The pivot point of transformation", "The perspective depth", "The z-index of transformed elements"], correctAnswer: 2 },
            { question: "Which transform value flips an element horizontally?", "options": ["rotateY(180deg)", "scale(1, -1)", "translateX(-100%)", "skewX(90deg)"], correctAnswer: 1 }
          ]
        },
        {
          title: "CSS Variables & Theming",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "How do you declare a CSS variable?", "options": ["$main-color: #333;", "--main-color: #333;", "var(main-color: #333);", "color-var: #333;"], correctAnswer: 2 },
            { question: "Which function is used to access a CSS variable?", "options": ["variable()", "get()", "var()", "fetch()"], correctAnswer: 3 },
            { question: "CSS variables have which scope by default?", "options": ["Global", "Local to the selector where defined", "Inherited only by child selectors", "Root only"], correctAnswer: 2 },
            { question: "The :root selector is commonly used for defining CSS variables because:", "options": ["It selects only body", "It represents the highest-level parent in the DOM", "It overrides inline styles", "It is required by browsers"], correctAnswer: 2 },
            { question: "Which of these is NOT true about CSS variables?", "options": ["They can be updated dynamically with JavaScript", "They support fallback values", "They are preprocessed at compile time", "They are inherited"], correctAnswer: 3 }
          ]
        },
        {
          title: "CSS Clipping & Masking",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property is used to define a clipping region for an element?", "options": ["clip-path", "mask-image", "overflow", "filter"], correctAnswer: 1 },
            { question: "Which of the following can be used with clip-path?", "options": ["circle(), ellipse(), polygon()", "linear(), radial(), conic()", "rect(), skew(), rotate()", "alpha(), beta(), gamma()"], correctAnswer: 1 },
            { question: "What does the mask-image property do?", "options": ["Defines how an image is clipped", "Defines an image used as a mask to control element visibility", "Resizes an image inside a container", "Applies grayscale to an image"], correctAnswer: 2 },
            { question: "Which CSS property defines how the mask is repeated?", "options": ["mask-repeat", "clip-repeat", "background-repeat", "mask-mode"], correctAnswer: 1 },
            { question: "Which one is NOT true about CSS masking?", "options": ["Masks can use gradients", "Masks are inherited by default", "Masks affect element visibility", "Masks can use SVG as a source"], correctAnswer: 2 }
          ]
        },
        {
          title: "CSS Scroll & Sticky",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which property enables smooth scrolling when using anchor links?", "options": ["scroll-behavior: smooth;", "overflow-y: auto;", "scroll-snap-type: smooth;", "transition: scroll;"], correctAnswer: 1 },
            { question: "Which property is used to lock elements during scrolling at certain positions?", "options": ["position: fixed;", "position: sticky;", "position: absolute;", "position: relative;"], correctAnswer: 2 },
            { question: "The scroll-snap-type property is used for:", "options": ["Defining scroll speed", "Enabling scroll snapping to child elements", "Locking background scroll", "Scrolling inside an iframe"], correctAnswer: 2 },
            { question: "Which unit can be useful in scroll snapping?", "options": ["px", "%", "vw/vh", "All of the above"], correctAnswer: 4 },
            { question: "Which property specifies the position at which an element should snap inside a scroll container?", "options": ["scroll-margin", "scroll-padding", "scroll-snap-align", "scroll-behavior"], correctAnswer: 3 }
          ]
        }
      ]

    },
    advanced: {
      title: "Advanced Level CSS Quiz",
      topics: [
        {
          title: "Advanced CSS Topics",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "Which CSS feature allows you to define styles based on element state without extra JavaScript?", "options": ["CSS Grid", "Pseudo-classes", "Media Queries", "Variables"], correctAnswer: 2 },
            { question: "The @supports rule in CSS is used for:", "options": ["Checking browser compatibility", "Conditional CSS based on feature support", "Importing CSS files", "Defining animations"], correctAnswer: 2 },
            { question: "What does the will-change property do?", "options": ["Immediately apply transitions", "Optimize rendering for expected changes", "Lock element position", "Hide overflow content"], correctAnswer: 2 },
            { question: "Which CSS property enables 3D rendering and perspective?", "options": ["perspective", "transform-style", "backface-visibility", "All of the above"], correctAnswer: 4 },
            { question: "What is the purpose of contain in CSS?", "options": ["To create sticky elements", "To restrict element’s rendering and layout scope", "To define overflow rules", "To set CSS variables"], correctAnswer: 2 },
            { question: "Which units are relative to the viewport size?", "options": ["em, rem", "%, vw, vh", "px, cm", "in, pt"], correctAnswer: 2 },
            { question: "CSS shape-outside is used for:", "options": ["Text wrapping around custom shapes", "Cropping images", "Applying gradients", "Clipping background"], correctAnswer: 1 },
            { question: "Which function is used to apply complex filter effects?", "options": ["filter()", "drop-shadow()", "grayscale()", "All of the above"], correctAnswer: 4 },
            { question: "What is the default value of z-index?", "options": ["auto", "0", "1", "-1"], correctAnswer: 1 },
            { question: "Which CSS property helps improve accessibility by defining reading order in grid/flex layouts?", "options": ["order", "z-index", "flex-direction", "tab-index"], correctAnswer: 1 },
            { question: "Which CSS feature allows creating reusable style functions?", "options": ["Variables", "Mixins (in preprocessors)", "Animations", "Custom properties only"], correctAnswer: 2 },
            { question: "What is a CSS Houdini API?", "options": ["Tool for debugging CSS", "Low-level APIs to extend CSS", "A CSS framework", "JavaScript animation library"], correctAnswer: 2 },
            { question: "Which property controls how 3D child elements are displayed?", "options": ["perspective", "backface-visibility", "transform-style", "will-change"], correctAnswer: 3 },
            { question: "The @property rule in CSS is used for:", "options": ["Declaring new custom properties with inheritance and syntax control", "Animating existing properties only", "Creating variables in Sass", "Adding comments in CSS"], correctAnswer: 1 },
            { question: "Which CSS property enables blending between elements?", "options": ["mix-blend-mode", "background-blend-mode", "opacity", "Both a and b"], correctAnswer: 4 }
          ]
        },
        {
          title: "CSS Optimization & Best Practices",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            { question: "What is the best practice for organizing CSS files in large projects?", "options": ["Inline CSS", "Single huge file", "Modular and component-based CSS", "Avoid CSS"], correctAnswer: 3 },
            { question: "Which method reduces CSS file size before deployment?", "options": ["Pretty-printing", "Minification", "Extra comments", "More whitespace"], correctAnswer: 2 },
            { question: "Why should you avoid using !important excessively?", "options": ["It makes CSS harder to maintain", "It reduces performance", "It increases specificity conflicts", "All of the above"], correctAnswer: 4 },
            { question: "Which CSS loading strategy is best for performance?", "options": ["Blocking CSS in <head>", "Inline all CSS", "Critical CSS inline + rest deferred", "Load all CSS via JS"], correctAnswer: 3 },
            { question: "CSS variables are more efficient than preprocessor variables because:", "options": ["They work at runtime and cascade", "They require compilation", "They cannot be changed dynamically", "They are only for colors"], correctAnswer: 1 },
            { question: "What is the benefit of using shorthand properties?", "options": ["Reduce CSS size and improve readability", "Make debugging harder", "Break accessibility", "None"], correctAnswer: 1 },
            { question: "Which tool is commonly used for detecting unused CSS?", "options": ["Sass", "PostCSS", "PurgeCSS", "Gulp"], correctAnswer: 3 },
            { question: "Why is avoiding deep selectors (div ul li a) recommended?", "options": ["They improve performance", "They slow rendering and hurt maintainability", "They increase reusability", "They are required for accessibility"], correctAnswer: 2 },
            { question: "Which is better for responsive design performance?", "options": ["Fixed pixel values", "Relative units (em, rem, %)", "Large images", "Inline styles"], correctAnswer: 2 },
            { question: "What is the advantage of using CSS logical properties (like margin-inline-start)?", "options": ["Better cross-browser support", "Automatic adaptation for different writing modes/languages", "Faster rendering", "None"], correctAnswer: 2 },
            { question: "Which CSS method reduces repaints/reflows?", "options": ["Using hardware-accelerated properties like transform", "Using float everywhere", "Using inline CSS", "Avoiding flexbox"], correctAnswer: 1 },
            { question: "Why is grouping CSS selectors recommended?", "options": ["To reduce redundancy and CSS size", "To slow performance", "To create conflicts", "To remove cascade"], correctAnswer: 1 },
            { question: "Which approach is best for long-term CSS scaling in teams?", "options": ["BEM methodology", "Inline styles", "Random class names", "Global CSS only"], correctAnswer: 1 },
            { question: "What should be done with vendor prefixes today?", "options": ["Always manually write them", "Use autoprefixer tool in build process", "Avoid them", "They are unnecessary"], correctAnswer: 2 },
            { question: "Why should external CSS files be placed in <head>?", "options": ["To block rendering for style consistency", "To allow progressive enhancement", "To avoid FOUC (Flash of Unstyled Content)", "All of the above"], correctAnswer: 4 }
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
          Complete CSS Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master CSS from Beginner to Advanced Level through interactive quizzes,
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

export default CSSQuiz;
