import React, { useState, useEffect, useCallback, useMemo } from "react";

const ReactQuize = () => {
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
      title: "Beginner Level React Quiz",
      topics: [
        {
          title: "What is React? (Library vs Framework)",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is React?",
              options: ["A JavaScript library", "A JavaScript framework", "A programming language", "A database"],
              correctAnswer: 0,
            },
            {
              question: "Who developed React?",
              options: ["Google", "Facebook", "Microsoft", "Apple"],
              correctAnswer: 1,
            },
            {
              question: "What is the main difference between a library and a framework?",
              options: ["No difference", "Library provides tools, framework controls flow", "Framework is smaller", "Library is newer"],
              correctAnswer: 1,
            },
            {
              question: "What is React primarily used for?",
              options: ["Backend development", "Building user interfaces", "Database management", "Server configuration"],
              correctAnswer: 1,
            },
            {
              question: "Which of the following is a React characteristic?",
              options: ["Component-based", "Declarative", "Virtual DOM", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Is React a framework or library?",
              options: ["Framework", "Library", "Both", "Neither"],
              correctAnswer: 1,
            },
            {
              question: "What does React help developers build?",
              options: ["Single Page Applications", "Mobile apps", "Desktop apps", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "React follows which programming paradigm?",
              options: ["Object-oriented", "Functional", "Procedural", "Both A and B"],
              correctAnswer: 3,
            },
            {
              question: "What is the current stable version type of React?",
              options: ["React 15", "React 16", "React 17+", "React 20"],
              correctAnswer: 2,
            },
            {
              question: "React is maintained by which organization?",
              options: ["Meta (Facebook)", "Google", "Netflix", "Airbnb"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Understanding the Virtual DOM",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the Virtual DOM?",
              options: ["Real DOM copy", "JavaScript representation of DOM", "HTML structure", "CSS styling"],
              correctAnswer: 1,
            },
            {
              question: "Why does React use Virtual DOM?",
              options: ["Better performance", "Easier debugging", "Smaller bundle size", "Better SEO"],
              correctAnswer: 0,
            },
            {
              question: "What is the process of comparing Virtual DOM called?",
              options: ["Rendering", "Diffing", "Mounting", "Updating"],
              correctAnswer: 1,
            },
            {
              question: "Virtual DOM is faster than Real DOM because:",
              options: ["It's written in C++", "It minimizes direct DOM manipulation", "It uses less memory", "It's cached"],
              correctAnswer: 1,
            },
            {
              question: "What happens after Virtual DOM diffing?",
              options: ["Nothing", "Reconciliation", "Re-rendering", "Remounting"],
              correctAnswer: 1,
            },
            {
              question: "Virtual DOM is a concept implemented by:",
              options: ["Browser", "React", "JavaScript", "HTML"],
              correctAnswer: 1,
            },
            {
              question: "The Virtual DOM helps React to:",
              options: ["Batch updates", "Optimize re-renders", "Improve performance", "All of the above"],
              correctAnswer: 3,
            },
          ],
        },
        {
          title: "JSX (JavaScript XML) Syntax and Rules",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What does JSX stand for?",
              options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
              correctAnswer: 0,
            },
            {
              question: "JSX is:",
              options: ["Required in React", "Optional in React", "A separate language", "Part of JavaScript standard"],
              correctAnswer: 1,
            },
            {
              question: "How do you write JavaScript expressions in JSX?",
              options: ["{{ }}", "{ }", "( )", "[ ]"],
              correctAnswer: 1,
            },
            {
              question: "Which attribute is used instead of 'class' in JSX?",
              options: ["class", "className", "cls", "classname"],
              correctAnswer: 1,
            },
            {
              question: "JSX elements must be:",
              options: ["Lowercase", "Uppercase", "Wrapped in a parent element", "Separated by commas"],
              correctAnswer: 2,
            },
            {
              question: "What is the JSX equivalent of 'for' attribute?",
              options: ["for", "htmlFor", "forHtml", "labelFor"],
              correctAnswer: 1,
            },
            {
              question: "JSX gets compiled to:",
              options: ["HTML", "React.createElement() calls", "JavaScript objects", "DOM elements"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Components: Functional vs Class Components",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a React component?",
              options: ["A function", "A class", "A reusable piece of UI", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "How do you define a functional component?",
              options: ["function Component()", "const Component = () => {}", "Both A and B", "class Component"],
              correctAnswer: 2,
            },
            {
              question: "How do you define a class component?",
              options: ["class Component extends React.Component", "function Component", "const Component", "new Component()"],
              correctAnswer: 0,
            },
            {
              question: "Which method is required in class components?",
              options: ["constructor()", "render()", "componentDidMount()", "setState()"],
              correctAnswer: 1,
            },
            {
              question: "Functional components can use state with:",
              options: ["this.state", "useState hook", "setState", "state property"],
              correctAnswer: 1,
            },
            {
              question: "Which is the modern way to write React components?",
              options: ["Class components", "Functional components with hooks", "Both are equal", "Depends on use case"],
              correctAnswer: 1,
            },
            {
              question: "Component names must start with:",
              options: ["Lowercase letter", "Uppercase letter", "Underscore", "Number"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Props: Passing Data from Parent to Child Components",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What are props in React?",
              options: ["Properties passed to components", "Component state", "Event handlers", "CSS styles"],
              correctAnswer: 0,
            },
            {
              question: "Props are:",
              options: ["Mutable", "Immutable", "Sometimes mutable", "Depends on component type"],
              correctAnswer: 1,
            },
            {
              question: "How do you access props in functional components?",
              options: ["this.props", "props parameter", "getProps()", "props()"],
              correctAnswer: 1,
            },
            {
              question: "How do you access props in class components?",
              options: ["this.props", "props parameter", "getProps()", "props()"],
              correctAnswer: 0,
            },
            {
              question: "Can you modify props inside a component?",
              options: ["Yes", "No", "Only in class components", "Only in functional components"],
              correctAnswer: 1,
            },
            {
              question: "What is prop drilling?",
              options: ["Creating props", "Passing props through multiple levels", "Deleting props", "Modifying props"],
              correctAnswer: 1,
            },
            {
              question: "How do you set default props?",
              options: ["defaultProps", "props.default", "setDefault()", "props = {}"],
              correctAnswer: 0,
            },
            {
              question: "Props flow in which direction?",
              options: ["Child to parent", "Parent to child", "Both ways", "Sideways"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "State: Managing Internal Data with useState Hook",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is state in React?",
              options: ["Component's internal data", "Props from parent", "Global data", "CSS properties"],
              correctAnswer: 0,
            },
            {
              question: "Which hook is used to manage state in functional components?",
              options: ["useEffect", "useState", "useContext", "useReducer"],
              correctAnswer: 1,
            },
            {
              question: "useState returns:",
              options: ["State value only", "Setter function only", "Array with state and setter", "Object with state"],
              correctAnswer: 2,
            },
            {
              question: "How do you initialize state with useState?",
              options: ["useState()", "useState(initialValue)", "useState = value", "new useState()"],
              correctAnswer: 1,
            },
            {
              question: "State updates are:",
              options: ["Synchronous", "Asynchronous", "Immediate", "Blocking"],
              correctAnswer: 1,
            },
            {
              question: "What happens when state changes?",
              options: ["Nothing", "Component re-renders", "Page refreshes", "App crashes"],
              correctAnswer: 1,
            },
            {
              question: "Can you directly modify state?",
              options: ["Yes", "No, use setter function", "Only arrays", "Only objects"],
              correctAnswer: 1,
            },
            {
              question: "useState can hold:",
              options: ["Only strings", "Only numbers", "Any data type", "Only objects"],
              correctAnswer: 2,
            },
          ],
        },
        {
          title: "Rendering Elements – Rendering to the DOM",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which method is used to render React elements to DOM?",
              options: ["ReactDOM.render()", "React.render()", "render()", "DOM.render()"],
              correctAnswer: 0,
            },
            {
              question: "What is the root element in React?",
              options: ["<html>", "<body>", "DOM element where React app mounts", "<app>"],
              correctAnswer: 2,
            },
            {
              question: "React elements are:",
              options: ["Mutable", "Immutable", "Sometimes mutable", "Depends on type"],
              correctAnswer: 1,
            },
            {
              question: "When does React re-render?",
              options: ["Every second", "When state or props change", "On user click", "Never"],
              correctAnswer: 1,
            },
            {
              question: "What is the typical root element ID?",
              options: ["app", "root", "react", "main"],
              correctAnswer: 1,
            },
            {
              question: "ReactDOM.render() takes how many arguments?",
              options: ["1", "2", "3", "4"],
              correctAnswer: 1,
            },
            {
              question: "What happens if you render the same element twice?",
              options: ["Error", "Duplicate elements", "React updates efficiently", "Page crashes"],
              correctAnswer: 2,
            },
            {
              question: "React elements describe:",
              options: ["What you see on screen", "Component logic", "Event handlers", "CSS styles"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Conditional Rendering in React",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is conditional rendering?",
              options: ["Rendering based on conditions", "Rendering multiple components", "Rendering with CSS", "Rendering with animations"],
              correctAnswer: 0,
            },
            {
              question: "Which operator is commonly used for conditional rendering?",
              options: ["&&", "||", "?:", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What does {condition && <Component />} do?",
              options: ["Always renders Component", "Renders Component if condition is true", "Renders Component if condition is false", "Causes error"],
              correctAnswer: 1,
            },
            {
              question: "Ternary operator syntax is:",
              options: ["condition ? true : false", "condition && true || false", "if condition then true else false", "condition true false"],
              correctAnswer: 0,
            },
            {
              question: "What renders when condition is false in {condition && <div>Hello</div>}?",
              options: ["Empty div", "Nothing", "Error", "Hello"],
              correctAnswer: 1,
            },
            {
              question: "Can you use if-else statements directly in JSX?",
              options: ["Yes", "No", "Only if statements", "Only else statements"],
              correctAnswer: 1,
            },
            {
              question: "Which is NOT a way to do conditional rendering?",
              options: ["Ternary operator", "Logical && operator", "if-else in JSX", "Function returning JSX"],
              correctAnswer: 2,
            },
            {
              question: "What is the result of {false && <div>Test</div>}?",
              options: ["<div>Test</div>", "false", "Nothing renders", "Error"],
              correctAnswer: 2,
            },
          ],
        },
        {
          title: "Event Handling in React",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "How do you handle events in React?",
              options: ["addEventListener", "Event handlers as props", "jQuery events", "DOM events"],
              correctAnswer: 1,
            },
            {
              question: "React events are called:",
              options: ["Native events", "SyntheticEvents", "Custom events", "DOM events"],
              correctAnswer: 1,
            },
            {
              question: "Event handler naming convention:",
              options: ["onclick", "onClick", "on-click", "ONCLICK"],
              correctAnswer: 1,
            },
            {
              question: "How do you prevent default behavior?",
              options: ["return false", "event.preventDefault()", "event.stop()", "preventDefault()"],
              correctAnswer: 1,
            },
            {
              question: "Event object in React is:",
              options: ["Native event", "SyntheticEvent wrapper", "Custom object", "Undefined"],
              correctAnswer: 1,
            },
            {
              question: "How do you pass parameters to event handlers?",
              options: ["Arrow functions", "bind method", "Wrapper functions", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "What is event bubbling?",
              options: ["Event moving up DOM tree", "Event moving down DOM tree", "Event duplication", "Event cancellation"],
              correctAnswer: 0,
            },
            {
              question: "How do you stop event propagation?",
              options: ["event.stopPropagation()", "event.stop()", "return false", "event.cancel()"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "Basic Hooks – useState & useEffect",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What are React Hooks?",
              options: ["Class methods", "Functions that let you use React features", "Event handlers", "CSS properties"],
              correctAnswer: 1,
            },
            {
              question: "Hooks can be used in:",
              options: ["Class components only", "Functional components only", "Both", "Neither"],
              correctAnswer: 1,
            },
            {
              question: "What does useEffect do?",
              options: ["Manages state", "Handles side effects", "Creates components", "Handles events"],
              correctAnswer: 1,
            },
            {
              question: "When does useEffect run by default?",
              options: ["Once", "After every render", "On mount only", "Never"],
              correctAnswer: 1,
            },
            {
              question: "How do you run useEffect only once?",
              options: ["useEffect(fn)", "useEffect(fn, [])", "useEffect(fn, [state])", "useOnce(fn)"],
              correctAnswer: 1,
            },
            {
              question: "What is the cleanup function in useEffect?",
              options: ["Function to clean state", "Function returned from useEffect", "Function to remove component", "Function to clear props"],
              correctAnswer: 1,
            },
            {
              question: "Dependency array in useEffect controls:",
              options: ["When effect runs", "What effect does", "How effect runs", "Where effect runs"],
              correctAnswer: 0,
            },
            {
              question: "Rules of Hooks state:",
              options: ["Call hooks anywhere", "Only call hooks at top level", "Call hooks in loops", "Call hooks conditionally"],
              correctAnswer: 1,
            },
            {
              question: "useState initial value is evaluated:",
              options: ["Every render", "Only on first render", "When state changes", "Never"],
              correctAnswer: 1,
            },
            {
              question: "Multiple useState hooks in one component:",
              options: ["Not allowed", "Allowed", "Only 2 allowed", "Only with different names"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Forms in React – Controlled vs Uncontrolled Components",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is a controlled component?",
              options: ["Component controlled by parent", "Form element controlled by React state", "Component with props", "Component with events"],
              correctAnswer: 1,
            },
            {
              question: "What is an uncontrolled component?",
              options: ["Component without props", "Form element that maintains its own state", "Component without state", "Broken component"],
              correctAnswer: 1,
            },
            {
              question: "In controlled components, form data is handled by:",
              options: ["DOM", "React state", "Browser", "Server"],
              correctAnswer: 1,
            },
            {
              question: "How do you get value from uncontrolled component?",
              options: ["state", "props", "refs", "events"],
              correctAnswer: 2,
            },
            {
              question: "Which is recommended by React?",
              options: ["Controlled components", "Uncontrolled components", "Both are equal", "Neither"],
              correctAnswer: 0,
            },
            {
              question: "Controlled input requires:",
              options: ["value prop only", "onChange handler only", "Both value and onChange", "Neither"],
              correctAnswer: 2,
            },
            {
              question: "What happens if you provide value without onChange?",
              options: ["Works fine", "Read-only input", "Error", "Undefined behavior"],
              correctAnswer: 1,
            },
            {
              question: "useRef is commonly used for:",
              options: ["State management", "Uncontrolled components", "Event handling", "Styling"],
              correctAnswer: 1,
            },
            {
              question: "Form submission in React is handled by:",
              options: ["onSubmit event", "action attribute", "method attribute", "Automatically"],
              correctAnswer: 0,
            },
            {
              question: "To prevent form default submission:",
              options: ["return false", "event.preventDefault()", "event.stop()", "Don't use form tag"],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "Tools & Setup – Create React App (CRA) & Running Dev Server",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is Create React App?",
              options: ["React framework", "Build tool for React", "React library", "React component"],
              correctAnswer: 1,
            },
            {
              question: "Command to create new React app:",
              options: ["npm create react-app", "npx create-react-app", "npm install react-app", "react new app"],
              correctAnswer: 1,
            },
            {
              question: "What does CRA provide out of the box?",
              options: ["Build configuration", "Development server", "Testing setup", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "Command to start development server:",
              options: ["npm start", "npm run dev", "npm serve", "npm begin"],
              correctAnswer: 0,
            },
            {
              question: "Default port for React dev server:",
              options: ["3000", "8000", "5000", "4000"],
              correctAnswer: 0,
            },
            {
              question: "What is hot reloading?",
              options: ["Server restart", "Automatic page refresh on code changes", "Fast compilation", "Error handling"],
              correctAnswer: 1,
            },
            {
              question: "Command to build for production:",
              options: ["npm build", "npm run build", "npm compile", "npm production"],
              correctAnswer: 1,
            },
            {
              question: "What is ejecting in CRA?",
              options: ["Removing app", "Exposing build configuration", "Updating dependencies", "Creating backup"],
              correctAnswer: 1,
            },
            {
              question: "CRA uses which bundler?",
              options: ["Webpack", "Rollup", "Parcel", "Vite"],
              correctAnswer: 0,
            },
            {
              question: "Main entry point file in React app:",
              options: ["App.js", "index.js", "main.js", "start.js"],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level React Quiz",
      topics: [
        {
          "title": "Advanced Hook: useContext",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is the purpose of the useContext hook in React?",
              "options": ["To manage local state", "To access context values", "To perform side effects", "To create refs"],
              "correctAnswer": 1
            },
            {
              "question": "Which React feature does useContext replace in class components?",
              "options": ["State", "Refs", "Context.Consumer", "Lifecycle methods"],
              "correctAnswer": 2
            },
            {
              "question": "How do you provide a context value for useContext hook?",
              "options": ["Using Context.Provider", "Using useState", "Using useEffect", "Using ReactDOM.render"],
              "correctAnswer": 0
            },
            {
              "question": "Can useContext be used with multiple contexts in one component?",
              "options": ["No", "Yes, by nesting", "Only with arrays", "Only in class components"],
              "correctAnswer": 1
            },
            {
              "question": "Which import is needed to use the useContext hook?",
              "options": ["import { useState }", "import { useContext }", "import ReactDOM", "import Component"],
              "correctAnswer": 1
            },
            {
              "question": "What argument does useContext accept?",
              "options": ["A state variable", "A context object", "A DOM element", "A component"],
              "correctAnswer": 1
            },
            {
              "question": "Does useContext subscribe to context changes?",
              "options": ["Yes", "No", "Only in strict mode", "Only in development"],
              "correctAnswer": 0
            },
            {
              "question": "What does useContext return?",
              "options": ["Current context value", "A function", "A component", "A hook"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Advanced Hook: useReducer",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What does useReducer hook manage in React?",
              "options": ["Side effects", "Complex state logic", "DOM elements", "CSS styles"],
              "correctAnswer": 1
            },
            {
              "question": "Which two arguments does useReducer accept?",
              "options": ["State and action", "Reducer and initial state", "Context and value", "Effect and dependency"],
              "correctAnswer": 1
            },
            {
              "question": "What is returned by the useReducer hook?",
              "options": ["State and dispatch function", "Only state", "Only dispatch", "A reducer function"],
              "correctAnswer": 0
            },
            {
              "question": "What does the reducer function receive as arguments?",
              "options": ["State and action", "State and dispatch", "Action and type", "Effect and cleanup"],
              "correctAnswer": 0
            },
            {
              "question": "Can useReducer replace useState for complex state?",
              "options": ["Yes", "No", "Only in class components", "Only with middleware"],
              "correctAnswer": 0
            },
            {
              "question": "What does the dispatch function do?",
              "options": ["Triggers state update", "Reads state value", "Accesses DOM", "Runs effects"],
              "correctAnswer": 0
            },
            {
              "question": "Is useReducer synchronous or asynchronous?",
              "options": ["Asynchronous", "Synchronous", "Both", "Depends on state"],
              "correctAnswer": 1
            }
          ]
        },
        {
          "title": "Advanced Hook: useCallback",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is the primary use of the useCallback hook?",
              "options": ["Memoizing functions", "Managing state", "Modifying DOM", "Handling side effects"],
              "correctAnswer": 0
            },
            {
              "question": "When does useCallback update the returned callback?",
              "options": ["When dependencies change", "Every render", "Never", "On mount only"],
              "correctAnswer": 0
            },
            {
              "question": "What arguments does useCallback accept?",
              "options": ["Function and dependency array", "State and action", "Context and value", "Effect and cleanup"],
              "correctAnswer": 0
            },
            {
              "question": "Why use useCallback in React?",
              "options": ["To prevent unnecessary renders", "To fetch data", "To style components", "To create refs"],
              "correctAnswer": 0
            },
            {
              "question": "Does useCallback cache the function itself or its result?",
              "options": ["Caches the function", "Caches the result", "Caches both", "Caches neither"],
              "correctAnswer": 0
            },
            {
              "question": "Is useCallback useful for passing callbacks to child components?",
              "options": ["Yes", "No", "Only with hooks", "Only without context"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Advanced Hook: useMemo",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What does useMemo do in React?",
              "options": ["Memoizes a computed value", "Manages state", "Triggers side effects", "Re-renders components"],
              "correctAnswer": 0
            },
            {
              "question": "When is the memoized value recomputed?",
              "options": ["When dependencies change", "Every render", "Never", "On mount only"],
              "correctAnswer": 0
            },
            {
              "question": "What arguments does useMemo accept?",
              "options": ["Function and dependency array", "State and action", "Effect and cleanup", "Function only"],
              "correctAnswer": 0
            },
            {
              "question": "Is useMemo used to optimize performance?",
              "options": ["Yes", "No", "Sometimes", "Only in class components"],
              "correctAnswer": 0
            },
            {
              "question": "Can useMemo replace useCallback?",
              "options": ["No", "Yes", "Depends on use case", "Only in hooks"],
              "correctAnswer": 2
            },
            {
              "question": "Does useMemo cache the function or the result?",
              "options": ["Caches the result", "Caches the function", "Caches both", "Caches neither"],
              "correctAnswer": 0
            },
            {
              "question": "Is useMemo helpful for expensive calculations?",
              "options": ["Yes", "No", "Only for effects", "Only for state"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Advanced Hook: useRef",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is the useRef hook used for?",
              "options": ["Accessing DOM nodes", "Managing state", "Creating context", "Triggering effects"],
              "correctAnswer": 0
            },
            {
              "question": "Does updating a ref cause a re-render?",
              "options": ["No", "Yes", "Sometimes", "Only in class components"],
              "correctAnswer": 0
            },
            {
              "question": "What is stored in the .current property of a ref?",
              "options": ["The reference value", "A callback", "State value", "Effect cleanup"],
              "correctAnswer": 0
            },
            {
              "question": "Can useRef hold mutable values?",
              "options": ["Yes", "No", "Only strings", "Only DOM nodes"],
              "correctAnswer": 0
            },
            {
              "question": "Is useRef suitable for persisting values between renders?",
              "options": ["Yes", "No", "Only with state", "Only with context"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Advanced Concept: Custom Hooks",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What defines a custom hook in React?",
              "options": ["A function using other hooks", "A class component", "A context provider", "A style object"],
              "correctAnswer": 0
            },
            {
              "question": "Custom hooks must start with which prefix?",
              "options": ["use", "get", "fetch", "set"],
              "correctAnswer": 0
            },
            {
              "question": "Can custom hooks return values?",
              "options": ["Yes", "No", "Only functions", "Only state"],
              "correctAnswer": 0
            },
            {
              "question": "Why use custom hooks?",
              "options": ["To reuse logic", "To override props", "To style components", "To manage lifecycle"],
              "correctAnswer": 0
            },
            {
              "question": "Can custom hooks call other hooks?",
              "options": ["Yes", "No", "Only useState", "Only useEffect"],
              "correctAnswer": 0
            },
            {
              "question": "Are custom hooks a built-in React feature?",
              "options": ["No, but supported", "Yes", "Only in early versions", "Deprecated"],
              "correctAnswer": 0
            },
            {
              "question": "Do custom hooks have side effects?",
              "options": ["They can", "Never", "Only in class components", "Only in production"],
              "correctAnswer": 0
            },
            {
              "question": "Can custom hooks be used with TypeScript?",
              "options": ["Yes", "No", "Only with PropTypes", "Only with classes"],
              "correctAnswer": 0
            },
            {
              "question": "Are custom hooks used for UI rendering?",
              "options": ["No, for logic only", "Yes", "Only for styles", "Only for routing"],
              "correctAnswer": 0
            },
            {
              "question": "What is a benefit of custom hooks?",
              "options": ["Improved code reuse", "Increased bundle size", "Complex UI", "Manual DOM manipulation"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "State Management in React",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Which hook is primarily used for local state management?",
              "options": ["useState", "useEffect", "useContext", "useReducer"],
              "correctAnswer": 0
            },
            {
              "question": "What is Redux used for?",
              "options": ["Global state management", "Managing refs", "Displaying UI", "Styling components"],
              "correctAnswer": 0
            },
            {
              "question": "Context API provides what feature?",
              "options": ["Global state", "Local state", "Side effects", "Routing"],
              "correctAnswer": 0
            },
            {
              "question": "Which is a disadvantage of prop drilling?",
              "options": ["Complexity", "Performance boost", "Simpler code", "Easier debugging"],
              "correctAnswer": 0
            },
            {
              "question": "What does useReducer help with?",
              "options": ["Complex state logic", "Simple state", "Styling", "Fetch requests"],
              "correctAnswer": 0
            },
            {
              "question": "Which outside library is popular for state management?",
              "options": ["MobX", "Jest", "Axios", "Lodash"],
              "correctAnswer": 0
            },
            {
              "question": "How is state lifted in React?",
              "options": ["Moved to common ancestor", "Moved to child", "Deleted", "Duplicated"],
              "correctAnswer": 0
            },
            {
              "question": "What does immutable state mean?",
              "options": ["State cannot be changed directly", "State is mutable", "State is deleted", "State is uninitialized"],
              "correctAnswer": 0
            },
            {
              "question": "Which hook is used for side effects, not state?",
              "options": ["useEffect", "useState", "useCallback", "useMemo"],
              "correctAnswer": 0
            },
            {
              "question": "Which approach helps avoid unnecessary renders?",
              "options": ["Memoization", "Mutation", "Frequent updates", "Heavy computations"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Routing in React – React Router",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Which package provides routing in React?",
              "options": ["react-router-dom", "redux", "axios", "jest"],
              "correctAnswer": 0
            },
            {
              "question": "What does the <Route> component do?",
              "options": ["Defines a route", "Manages state", "Performs fetch", "Creates refs"],
              "correctAnswer": 0
            },
            {
              "question": "What component renders nested routes?",
              "options": ["<Outlet>", "<Switch>", "<Link>", "<Router>"],
              "correctAnswer": 0
            },
            {
              "question": "Which component is used for navigation links?",
              "options": ["<Link>", "<Route>", "<Switch>", "<Nav>"],
              "correctAnswer": 0
            },
            {
              "question": "How do you pass parameters in routes?",
              "options": ["Using :paramName", "Using query strings", "Using props", "Using state"],
              "correctAnswer": 0
            },
            {
              "question": "What does BrowserRouter use under the hood?",
              "options": ["HTML5 history API", "Hash fragments", "Cookies", "LocalStorage"],
              "correctAnswer": 0
            },
            {
              "question": "Can you have multiple routers in an app?",
              "options": ["Yes", "No", "Only one", "Only in class components"],
              "correctAnswer": 0
            },
            {
              "question": "What replaced <Switch> in React Router v6?",
              "options": ["<Routes>", "<Switch>", "<Router>", "<Outlet>"],
              "correctAnswer": 0
            },
            {
              "question": "How do you redirect in React Router?",
              "options": ["Using <Navigate>", "Using <Redirect>", "Using window.location", "Using useFetch"],
              "correctAnswer": 0
            },
            {
              "question": "What hook is used to access route params?",
              "options": ["useParams", "useState", "useEffect", "useRouteMatch"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Performance Optimization in React",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What hook helps avoid unnecessary renders by memoizing functions?",
              "options": ["useCallback", "useEffect", "useState", "useMemo"],
              "correctAnswer": 0
            },
            {
              "question": "What hook memoizes expensive computed values?",
              "options": ["useMemo", "useState", "useReducer", "useContext"],
              "correctAnswer": 0
            },
            {
              "question": "What is React.memo used for?",
              "options": ["Memoizing components", "Managing state", "Fetching data", "Styling components"],
              "correctAnswer": 0
            },
            {
              "question": "Which can cause unnecessary re-renders?",
              "options": ["New function instances", "Static props", "Memoized values", "Pure components"],
              "correctAnswer": 0
            },
            {
              "question": "What is code splitting?",
              "options": ["Loading parts of code on demand", "Combining files", "Minifying code", "Refactoring"],
              "correctAnswer": 0
            },
            {
              "question": "Which tool analyzes bundle size?",
              "options": ["Webpack Bundle Analyzer", "Jest", "Axios", "ESLint"],
              "correctAnswer": 0
            },
            {
              "question": "Why avoid inline functions in props?",
              "options": ["They create new references each render", "They enhance performance", "They prevent state updates", "They are cached automatically"],
              "correctAnswer": 0
            },
            {
              "question": "What is virtualization in React?",
              "options": ["Rendering only visible items", "Rendering all items", "Using refs", "Managing state updates"],
              "correctAnswer": 0
            },
            {
              "question": "Should heavy computations happen inside render?",
              "options": ["No", "Yes", "Only in useEffect", "Only in useRef"],
              "correctAnswer": 0
            },
            {
              "question": "What does lazy loading components improve?",
              "options": ["Initial load time", "Memory usage", "API calls", "State management"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "API Interaction – Fetch & Axios in React",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What does fetch API return?",
              "options": ["A promise", "A callback", "A synchronous result", "A component"],
              "correctAnswer": 0
            },
            {
              "question": "Which method is used to parse JSON in fetch?",
              "options": ["response.json()", "JSON.parse()", "response.text()", "response.data()"],
              "correctAnswer": 0
            },
            {
              "question": "What is Axios?",
              "options": ["A promise-based HTTP client", "A state manager", "A router", "A testing library"],
              "correctAnswer": 0
            },
            {
              "question": "Which Axios method sends POST requests?",
              "options": ["axios.post()", "axios.get()", "axios.put()", "axios.delete()"],
              "correctAnswer": 0
            },
            {
              "question": "How do you handle errors in fetch?",
              "options": ["Using catch()", "Using then()", "Using finally()", "Using map()"],
              "correctAnswer": 0
            },
            {
              "question": "Does Axios automatically transform JSON data?",
              "options": ["Yes", "No", "Only in older versions", "Only with config"],
              "correctAnswer": 0
            },
            {
              "question": "How do you cancel an Axios request?",
              "options": ["Using CancelToken", "Using abortController", "Using clearTimeout", "Using unsubscribe"],
              "correctAnswer": 0
            },
            {
              "question": "Which hook is often used to fetch data in React?",
              "options": ["useEffect", "useState", "useMemo", "useCallback"],
              "correctAnswer": 0
            },
            {
              "question": "Can fetch send headers with requests?",
              "options": ["Yes", "No", "Only GET", "Only POST"],
              "correctAnswer": 0
            },
            {
              "question": "What method aborts fetch requests?",
              "options": ["AbortController", "CancelToken", "stopFetch()", "clearTimeout()"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Testing in React – Jest & React Testing Library",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is Jest primarily used for?",
              "options": ["Unit testing", "Styling", "Routing", "Fetching data"],
              "correctAnswer": 0
            },
            {
              "question": "Which library assists in testing React components?",
              "options": ["React Testing Library", "Redux", "Axios", "React Router"],
              "correctAnswer": 0
            },
            {
              "question": "What does a test suite contain?",
              "options": ["Multiple tests", "One function", "One component", "One hook"],
              "correctAnswer": 0
            },
            {
              "question": "Which function describes a test in Jest?",
              "options": ["test()", "render()", "dispatch()", "connect()"],
              "correctAnswer": 0
            },
            {
              "question": "Which query finds elements by text?",
              "options": ["getByText", "getByRole", "getByTestId", "getByLabelText"],
              "correctAnswer": 0
            },
            {
              "question": "How do you simulate user events?",
              "options": ["fireEvent", "dispatchEvent", "trigger", "simulate"],
              "correctAnswer": 0
            },
            {
              "question": "Which Jest feature auto-mocks modules?",
              "options": ["jest.mock()", "jest.spyOn()", "jest.fn()", "jest.clearMocks()"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Styling in React – CSS Modules, Styled-Components, Tailwind CSS",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What are CSS Modules?",
              "options": ["Scoped CSS files", "Global styles", "JavaScript objects", "Inline styles"],
              "correctAnswer": 0
            },
            {
              "question": "How are styles applied in Styled-Components?",
              "options": ["Via tagged template literals", "Via CSS files", "Via JS objects", "Via inline styles"],
              "correctAnswer": 0
            },
            {
              "question": "What utility-based CSS framework is Tailwind?",
              "options": ["A utility-first CSS framework", "A component library", "A testing library", "A router"],
              "correctAnswer": 0
            },
            {
              "question": "How do CSS Modules avoid naming conflicts?",
              "options": ["By local scoping", "By global styling", "By inline styles", "By JS objects"],
              "correctAnswer": 0
            },
            {
              "question": "Which syntax is used in styled-components?",
              "options": ["Tagged template literals", "Object notation", "Inline styles", "CSS files"],
              "correctAnswer": 0
            },
            {
              "question": "Can TailwindCSS be customized?",
              "options": ["Yes, via configuration", "No", "Only in production", "Only in dev mode"],
              "correctAnswer": 0
            },
            {
              "question": "What does PostCSS do in Tailwind?",
              "options": ["Processes CSS with plugins", "Manages state", "Fetches data", "Tests components"],
              "correctAnswer": 0
            },
            {
              "question": "Can styled-components use props for styling?",
              "options": ["Yes", "No", "Only classes", "Only state"],
              "correctAnswer": 0
            },
            {
              "question": "Are CSS Modules compatible with React?",
              "options": ["Yes", "No", "Only with class components", "Only in production"],
              "correctAnswer": 0
            },
            {
              "question": "Which is a benefit of utility-first CSS?",
              "options": ["Faster styling", "Slower styling", "More CSS files", "More JavaScript code"],
              "correctAnswer": 0
            }
          ]
        }
      ]
    },
    advanced: {
      title: "Advanced Level CSS Quiz",
      topics: [
        {
          "title": "Under the Hood: Reconciliation Algorithm",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is React's reconciliation algorithm responsible for?", "options": ["Efficient DOM updates", "Handling events", "Routing", "Fetching data"], "correctAnswer": 0 },
            { "question": "What data structure does React use internally for reconciliation?", "options": ["Fiber tree", "Binary tree", "Array", "Linked list"], "correctAnswer": 0 },
            { "question": "What does React compare to optimize updates?", "options": ["Virtual DOM trees", "Real DOM nodes", "CSS styles", "Props only"], "correctAnswer": 0 },
            { "question": "What is a key used for in lists during reconciliation?", "options": ["Identifying elements uniquely", "Styling components", "Managing effects", "Handling events"], "correctAnswer": 0 },
            { "question": "What is the default behavior if keys are not provided?", "options": ["React uses index", "React throws error", "React ignores changes", "React reloads page"], "correctAnswer": 0 },
            { "question": "Does reconciliation happen synchronously or asynchronously?", "options": ["Asynchronously", "Synchronously", "Depends on props", "Depends on state"], "correctAnswer": 0 },
            { "question": "What happens if component type changes during reconciliation?", "options": ["React unmounts and remounts", "React updates in place", "React skips update", "React errors out"], "correctAnswer": 0 },
            { "question": "Which operation is cheapest in reconciliation?", "options": ["Reusing DOM nodes", "Creating new nodes", "Removing nodes", "Re-rendering components"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "React Fiber Architecture",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is React Fiber?", "options": ["Reimplementation of React’s core algorithm", "A component", "A hook", "A CSS framework"], "correctAnswer": 0 },
            { "question": "What problem does Fiber solve?", "options": ["Incremental rendering and interruption", "State management", "Routing", "Styling"], "correctAnswer": 0 },
            { "question": "How does Fiber enable prioritization?", "options": ["By breaking rendering work into units", "By batching effects", "By memoization", "By caching"], "correctAnswer": 0 },
            { "question": "Which React feature uses Fiber internally?", "options": ["Concurrent Mode", "Hooks", "Context", "Redux"], "correctAnswer": 0 },
            { "question": "Does Fiber improve app responsiveness?", "options": ["Yes", "No", "Depends on state", "Depends on props"], "correctAnswer": 0 },
            { "question": "What are 'fibers' in React?", "options": ["Units of work", "CSS styles", "DOM nodes", "State slices"], "correctAnswer": 0 },
            { "question": "How does Fiber handle updates?", "options": ["In interruptible chunks", "All at once", "Synchronously only", "Asynchronously only"], "correctAnswer": 0 },
            { "question": "What is a key benefit of Fiber architecture?", "options": ["Smooth user experience", "Faster animations", "Simplified coding", "Easier debugging"], "correctAnswer": 0 },
            { "question": "What enables Fiber to pause work and come back later?", "options": ["Scheduling", "Refs", "Reducers", "Effects"], "correctAnswer": 0 },
            { "question": "Which version of React introduced Fiber?", "options": ["React 16", "React 15", "React 17", "React 18"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Understanding Build Tools: Webpack, Vite, and More",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is Webpack primarily used for?", "options": ["Module bundling", "Component rendering", "Testing", "State management"], "correctAnswer": 0 },
            { "question": "Which build tool is known for faster development builds?", "options": ["Vite", "Webpack", "Parcel", "Rollup"], "correctAnswer": 0 },
            { "question": "What does 'hot module replacement' do?", "options": ["Updates modules without full reload", "Bundles code", "Runs tests", "Manages state"], "correctAnswer": 0 },
            { "question": "Which build tool uses native ES modules in development?", "options": ["Vite", "Webpack", "Parcel", "Gulp"], "correctAnswer": 0 },
            { "question": "What role does a loader have in Webpack?", "options": ["Transforms files", "Runs server", "Tests code", "Manages routing"], "correctAnswer": 0 },
            { "question": "What does a plugin do in Webpack?", "options": ["Extends functionality", "Bundles files", "Creates components", "Updates state"], "correctAnswer": 0 },
            { "question": "Which is a benefit of Vite over traditional bundlers?", "options": ["Instant server start", "Better testing", "Smaller bundles", "Easier state management"], "correctAnswer": 0 },
            { "question": "What configuration file does Webpack use?", "options": ["webpack.config.js", "package.json", "vite.config.js", "babel.config.js"], "correctAnswer": 0 },
            { "question": "Which build tool focuses on simplicity and zero-config?", "options": ["Parcel", "Webpack", "Vite", "Rollup"], "correctAnswer": 0 },
            { "question": "Does Vite use Rollup for production builds?", "options": ["Yes", "No", "Only in dev", "Only with plugins"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Patterns in React",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is a Higher-Order Component (HOC)?", "options": ["A function that returns a component", "A component with state", "A hook", "A context provider"], "correctAnswer": 0 },
            { "question": "What pattern involves sharing logic via hooks?", "options": ["Custom hooks", "Render props", "HOCs", "Provider pattern"], "correctAnswer": 0 },
            { "question": "What pattern uses functions as a child?", "options": ["Render props", "Context API", "HOCs", "Hooks"], "correctAnswer": 0 },
            { "question": "Why use controlled components?", "options": ["To manage form state", "To style inputs", "To fetch data", "To optimize rendering"], "correctAnswer": 0 },
            { "question": "What is the purpose of the Provider pattern?", "options": ["Share data globally", "Optimize props", "Manage refs", "Handle side effects"], "correctAnswer": 0 },
            { "question": "Which pattern helps avoid prop drilling?", "options": ["Context API", "HOC", "Render props", "Refs"], "correctAnswer": 0 },
            { "question": "What do you call a component that only renders children?", "options": ["Wrapper component", "HOC", "Hook", "Route component"], "correctAnswer": 0 },
            { "question": "What is memoization used for in React patterns?", "options": ["Avoiding unnecessary renders", "Managing forms", "Fetching data", "Routing"], "correctAnswer": 0 },
            { "question": "Which pattern is best for logic reuse without component hierarchy changes?", "options": ["Custom hooks", "HOCs", "Render props", "Context API"], "correctAnswer": 0 },
            { "question": "What pattern is React.Fragment an example of?", "options": ["Wrapper", "HOC", "Render prop", "Hook"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Advanced Hooks in React",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which hook is used to manage mutable refs?", "options": ["useRef", "useState", "useEffect", "useReducer"], "correctAnswer": 0 },
            { "question": "What hook helps optimize expensive calculations?", "options": ["useMemo", "useCallback", "useEffect", "useState"], "correctAnswer": 0 },
            { "question": "Which hook lets you access context?", "options": ["useContext", "useReducer", "useState", "useMemo"], "correctAnswer": 0 },
            { "question": "What hook schedules side effects?", "options": ["useEffect", "useMemo", "useCallback", "useRef"], "correctAnswer": 0 },
            { "question": "What hook manages complex local state?", "options": ["useReducer", "useState", "useContext", "useMemo"], "correctAnswer": 0 },
            { "question": "Which hook returns a memoized callback?", "options": ["useCallback", "useMemo", "useReducer", "useRef"], "correctAnswer": 0 },
            { "question": "Can hooks be used inside loops or conditions?", "options": ["No", "Yes", "Only useState", "Only useEffect"], "correctAnswer": 0 },
            { "question": "What hook helps defer updates to improve responsiveness?", "options": ["useDeferredValue", "useMemo", "useCallback", "useState"], "correctAnswer": 0 },
            { "question": "Which hook lets you synchronize a value with a mutable ref?", "options": ["useImperativeHandle", "useRef", "useMemo", "useState"], "correctAnswer": 0 },
            { "question": "What hook can trigger a layout effect?", "options": ["useLayoutEffect", "useEffect", "useMemo", "useCallback"], "correctAnswer": 0 },
            { "question": "Which hook is designed for subscription management?", "options": ["useEffect", "useState", "useReducer", "useContext"], "correctAnswer": 0 },
            { "question": "What hook allows batching multiple state updates?", "options": ["useTransition", "useState", "useMemo", "useReducer"], "correctAnswer": 0 },
            { "question": "Which hook delays a transition for better UX?", "options": ["useTransition", "useEffect", "useMemo", "useCallback"], "correctAnswer": 0 },
            { "question": "Which hook is used to customize refs handling?", "options": ["useImperativeHandle", "useRef", "useEffect", "useCallback"], "correctAnswer": 0 },
            { "question": "What hook can prevent flashing UI during updates?", "options": ["useTransition", "useState", "useEffect", "useCallback"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is Server-Side Rendering (SSR)?", "options": ["Rendering HTML on the server", "Rendering on the client", "Static file serving", "Lazy loading"], "correctAnswer": 0 },
            { "question": "What is Static Site Generation (SSG)?", "options": ["Pre-rendering pages at build time", "Rendering pages on request", "Dynamic routing", "Client-side rendering"], "correctAnswer": 0 },
            { "question": "Which React framework supports SSR and SSG?", "options": ["Next.js", "Create React App", "Gatsby", "Vite"], "correctAnswer": 0 },
            { "question": "Which method generates pages at runtime in SSR?", "options": ["getServerSideProps", "getStaticProps", "useEffect", "useMemo"], "correctAnswer": 0 },
            { "question": "Which method generates pages at build time in SSG?", "options": ["getStaticProps", "getServerSideProps", "useEffect", "useCallback"], "correctAnswer": 0 },
            { "question": "Does SSR improve SEO?", "options": ["Yes", "No", "Depends on props", "Depends on state"], "correctAnswer": 0 },
            { "question": "Which approach typically has faster initial load time?", "options": ["SSG", "SSR", "CSR", "None"], "correctAnswer": 0 },
            { "question": "Is hydration required after SSR or SSG?", "options": ["Yes", "No", "Only SSR", "Only SSG"], "correctAnswer": 0 },
            { "question": "Does SSR require a Node.js server?", "options": ["Yes", "No", "Depends on static hosting", "Only for APIs"], "correctAnswer": 0 },
            { "question": "Which approach allows dynamic data fetching on each request?", "options": ["SSR", "SSG", "CSR", "Pre-rendering"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Type Safety in React with TypeScript",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What is TypeScript?", "options": ["A typed superset of JavaScript", "A CSS preprocessor", "A testing framework", "A bundler"], "correctAnswer": 0 },
            { "question": "How can you type component props?", "options": ["Using interfaces or types", "Using classes", "Using modules", "Using JSX"], "correctAnswer": 0 },
            { "question": "What type is used for React state in TypeScript?", "options": ["Generic type with useState", "Any", "Void", "Never"], "correctAnswer": 0 },
            { "question": "How do you type event handlers in React with TypeScript?", "options": ["Using React types like React.MouseEvent", "Using any", "Using string", "Using void"], "correctAnswer": 0 },
            { "question": "What does 'strict' mode do in TypeScript?", "options": ["Enforces stronger typing rules", "Disables types", "Allows implicit any", "Enables JSX"], "correctAnswer": 0 },
            { "question": "Can you use TypeScript with functional components?", "options": ["Yes", "No", "Only with classes", "Only with hooks"], "correctAnswer": 0 },
            { "question": "Which file extension is used for TypeScript React files?", "options": [".tsx", ".ts", ".js", ".jsx"], "correctAnswer": 0 },
            { "question": "How does TypeScript help with React props?", "options": ["Provides static type checking", "Changes runtime behavior", "Generates CSS", "Manages state"], "correctAnswer": 0 },
            { "question": "What tool integrates TypeScript support in editors?", "options": ["Language Server Protocol", "Babel", "Webpack", "ESLint"], "correctAnswer": 0 },
            { "question": "Can TypeScript infer types in React components?", "options": ["Yes", "No", "Only with hooks", "Only with manual annotations"], "correctAnswer": 0 }
          ]
        }
      ]
    }
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
          Complete React Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master React from Beginner to Advanced Level through interactive quizzes,
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

export default ReactQuize;
