import React, { useState, useEffect, useCallback, useMemo } from "react";

const NodeQuize = () => {
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
      title: "Beginner Level Node js Quiz",
      topics: [
        {
          "title": "Node.js Introduction & Setup",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Who created Node.js?", "options": ["Ryan Dahl", "Brendan Eich", "Guido van Rossum", "James Gosling"], "correctAnswer": 0 },
            { "question": "Node.js is built on which JavaScript engine?", "options": ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"], "correctAnswer": 0 },
            { "question": "What is required to run Node.js code?", "options": ["Node.js runtime", "Browser", "Java Runtime", "Python interpreter"], "correctAnswer": 0 },
            { "question": "How do you check the installed Node.js version?", "options": ["node -v", "node --version", "npm -v", "node version"], "correctAnswer": 0 },
            { "question": "Which command runs a JavaScript file in Node.js?", "options": ["node filename.js", "run filename.js", "npm start", "js filename.js"], "correctAnswer": 0 },
            { "question": "Node.js uses which programming language?", "options": ["JavaScript", "Java", "Python", "C#"], "correctAnswer": 0 },
            { "question": "Which of these is NOT a feature of Node.js?", "options": ["Multi-threaded by default", "Event-driven", "Non-blocking I/O", "Cross-platform"], "correctAnswer": 0 },
            { "question": "Node.js package manager is known as?", "options": ["npm", "pip", "gem", "composer"], "correctAnswer": 0 },
            { "question": "Which file usually contains Node.js project metadata?", "options": ["package.json", "package.lock", "config.json", "index.js"], "correctAnswer": 0 },
            { "question": "Node.js can be used to build:", "options": ["Server-side applications", "Only front-end apps", "Only mobile apps", "Only desktop apps"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "JavaScript Fundamentals for Node.js",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which keyword declares a variable with block scope in JS?", "options": ["let", "var", "const", "int"], "correctAnswer": 0 },
            { "question": "How do you write a function in JavaScript?", "options": ["function myFunc() {}", "def myFunc():", "func myFunc() {}", "fn myFunc() {}"], "correctAnswer": 0 },
            { "question": "Which of the following is NOT a JavaScript data type?", "options": ["Character", "Number", "String", "Boolean"], "correctAnswer": 0 },
            { "question": "What symbol is used for single line comments in JavaScript?", "options": ["//", "#", "/* */", "<!-- -->"], "correctAnswer": 0 },
            { "question": "How do you check equality without type coercion?", "options": ["===", "==", "!=", "="], "correctAnswer": 0 },
            { "question": "What value does 'undefined' represent?", "options": ["A variable declared but not assigned", "Null value", "Zero", "False"], "correctAnswer": 0 },
            { "question": "Which array method returns a new array with results of calling a function?", "options": ["map()", "forEach()", "reduce()", "filter()"], "correctAnswer": 0 },
            { "question": "What is a promise in JavaScript?", "options": ["An object representing future completion or failure", "An immediate value", "Another function", "Array method"], "correctAnswer": 0 },
            { "question": "Which keyword creates a constant variable?", "options": ["const", "let", "var", "immutable"], "correctAnswer": 0 },
            { "question": "How do you create an object?", "options": ["var obj = {}", "var obj = []", "var obj = ()", "var obj = new Object()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Core Modules",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which module is used for file system operations?", "options": ["fs", "path", "http", "os"], "correctAnswer": 0 },
            { "question": "Which module helps in creating HTTP servers?", "options": ["http", "net", "stream", "crypto"], "correctAnswer": 0 },
            { "question": "Which module is for working with file and directory paths?", "options": ["path", "url", "querystring", "stream"], "correctAnswer": 0 },
            { "question": "Which module provides Operating System-related utility methods?", "options": ["os", "fs", "crypto", "net"], "correctAnswer": 0 },
            { "question": "Which module is used to handle cryptographic functionality?", "options": ["crypto", "tls", "http", "dns"], "correctAnswer": 0 },
            { "question": "Which module allows working with streams of data?", "options": ["stream", "buffer", "fs", "events"], "correctAnswer": 0 },
            { "question": "Which module provides utilities to handle URLs?", "options": ["url", "http", "path", "querystring"], "correctAnswer": 0 },
            { "question": "Which module helps parse and format query strings?", "options": ["querystring", "url", "buffer", "net"], "correctAnswer": 0 },
            { "question": "Which module allows spawning child processes?", "options": ["child_process", "process", "cluster", "worker_threads"], "correctAnswer": 0 },
            { "question": "Which module provides a console for debugging?", "options": ["console", "debug", "util", "events"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "File System Operations",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which fs method reads the contents of a file asynchronously?", "options": ["fs.readFile()", "fs.readFileSync()", "fs.writeFile()", "fs.open()"], "correctAnswer": 0 },
            { "question": "Which method writes data to a file asynchronously?", "options": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.unlink()"], "correctAnswer": 0 },
            { "question": "Which method deletes a file?", "options": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.erase()"], "correctAnswer": 0 },
            { "question": "Which method reads the contents of a directory?", "options": ["fs.readdir()", "fs.readDirSync()", "fs.open()", "fs.readFile()"], "correctAnswer": 0 },
            { "question": "What argument mode is used for appending data to a file?", "options": ["a", "w", "r", "wa"], "correctAnswer": 0 },
            { "question": "Which method checks if a file exists (deprecated)?", "options": ["fs.exists()", "fs.access()", "fs.stat()", "fs.statSync()"], "correctAnswer": 0 },
            { "question": "Which replaces fs.exists()?", "options": ["fs.access()", "fs.stat()", "fs.open()", "fs.existsSync()"], "correctAnswer": 0 },
            { "question": "Which fs method returns file stats?", "options": ["fs.stat()", "fs.access()", "fs.readFile()", "fs.open()"], "correctAnswer": 0 },
            { "question": "Which flag opens a file for reading?", "options": ["r", "w", "a", "rx"], "correctAnswer": 0 },
            { "question": "How do you close a file descriptor after opening a file?", "options": ["fs.close()", "fs.end()", "fs.destroy()", "fs.stop()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "HTTP Module & Basic Server",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What module is used to create an HTTP server in Node.js?", "options": ["http", "https", "net", "url"], "correctAnswer": 0 },
            { "question": "Which method creates a new HTTP server?", "options": ["http.createServer()", "http.newServer()", "http.server()", "net.createServer()"], "correctAnswer": 0 },
            { "question": "How do you send a response header in Node.js?", "options": ["res.writeHead()", "res.setHeader()", "req.writeHead()", "req.setHeader()"], "correctAnswer": 0 },
            { "question": "Which method writes data to the response body?", "options": ["res.write()", "res.end()", "res.send()", "req.write()"], "correctAnswer": 0 },
            { "question": "How to start the server listening on a port?", "options": ["server.listen(port)", "server.start(port)", "server.bind(port)", "server.open(port)"], "correctAnswer": 0 },
            { "question": "What event is emitted when the server receives a request?", "options": ["'request'", "'connect'", "'data'", "'connection'"], "correctAnswer": 0 },
            { "question": "How do you handle incoming request data?", "options": ["Listening to 'data' event on request object", "Immediately reading req.body", "Using res.write()", "Using 'end' event"], "correctAnswer": 0 },
            { "question": "Which module supports HTTPs servers?", "options": ["https", "http", "net", "tls"], "correctAnswer": 0 },
            { "question": "Which status code means 'OK'?", "options": ["200", "404", "500", "301"], "correctAnswer": 0 },
            { "question": "How do you end the response?", "options": ["res.end()", "res.close()", "res.stop()", "res.finish()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "NPM & Package Management",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What does NPM stand for?", "options": ["Node Package Manager", "Node Project Manager", "New Package Manager", "Node Programming Module"], "correctAnswer": 0 },
            { "question": "Which command installs a package locally?", "options": ["npm install package_name", "npm add package_name", "npm get package_name", "npm fetch package_name"], "correctAnswer": 0 },
            { "question": "Where does NPM install packages by default?", "options": ["node_modules folder", "system", "global folder", "root folder"], "correctAnswer": 0 },
            { "question": "Which file tracks the dependencies of a Node.js project?", "options": ["package.json", "package.lock", "npm.json", "manifest.json"], "correctAnswer": 0 },
            { "question": "How do you remove a package using NPM?", "options": ["npm uninstall package_name", "npm delete package_name", "npm remove package_name", "npm erase package_name"], "correctAnswer": 0 },
            { "question": "Which command updates a package to latest version?", "options": ["npm update package_name", "npm upgrade package_name", "npm install package_name", "npm refresh package_name"], "correctAnswer": 0 },
            { "question": "What flag installs package globally?", "options": ["-g", "--global", "-G", "--all"], "correctAnswer": 0 },
            { "question": "What command initializes a new npm project?", "options": ["npm init", "npm start", "npm new", "npm create"], "correctAnswer": 0 },
            { "question": "Which command lists installed packages?", "options": ["npm list", "npm show", "npm packages", "npm all"], "correctAnswer": 0 },
            { "question": "Which file locks package versions?", "options": ["package-lock.json", "package.json", "npm-lock.json", "lock.json"], "correctAnswer": 0 }
          ]
        }
      ],
    },
    intermediate: {
      title: "Intermediate Level Node Quiz",
      topics: [
        {
          "title": "Express.js Framework",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is Express.js?",
              "options": ["A minimal and flexible Node.js web application framework", "A frontend JavaScript framework", "A database", "A CSS framework"],
              "correctAnswer": 0
            },
            {
              "question": "Which command installs Express.js in a Node.js project?",
              "options": ["npm install express", "npm install react", "npm install angular", "npm install vue"],
              "correctAnswer": 0
            },
            {
              "question": "What does the app.get() method do in Express?",
              "options": ["Defines a route handler for GET requests", "Starts the server", "Parses JSON data", "Handles POST requests"],
              "correctAnswer": 0
            },
            {
              "question": "Which Node.js method starts the Express server?",
              "options": ["app.listen()", "app.start()", "express.run()", "server.init()"],
              "correctAnswer": 0
            },
            {
              "question": "Express.js middleware functions have access to which objects?",
              "options": ["Request, Response, next", "Document, Window, Location", "Database, Cache, Session", "AppInstance, Router, Server"],
              "correctAnswer": 0
            },
            {
              "question": "How does Express.js handle routing?",
              "options": ["Using route methods like app.get, app.post", "Using traditional URL mapping", "Via HTML forms only", "It does not handle routing"],
              "correctAnswer": 0
            },
            {
              "question": "Express.js is built on top of which runtime?",
              "options": ["Node.js", "Deno", "Python", "Ruby"],
              "correctAnswer": 0
            },
            {
              "question": "Which method in Express sends the response to the client?",
              "options": ["res.send()", "res.write()", "res.end()", "res.close()"],
              "correctAnswer": 0
            },
            {
              "question": "Which is NOT a feature of Express.js?",
              "options": ["Client-side rendering", "Routing", "Middleware support", "Template engines"],
              "correctAnswer": 0
            },
            {
              "question": "What does Express.js provide to handle HTTP requests easily?",
              "options": ["A thin layer of fundamental web app features", "Monolithic framework", "A full UI framework", "Database abstraction"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Express Router",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is Express Router used for?",
              "options": ["Creating modular route handlers", "Serving static files", "Starting server", "Parsing request bodies"],
              "correctAnswer": 0
            },
            {
              "question": "How do you create a new Router object?",
              "options": ["const router = express.Router();", "const router = new Router();", "const router = new express();", "const router = require('Router')()"],
              "correctAnswer": 0
            },
            {
              "question": "Which method attaches router middleware to an app?",
              "options": ["app.use('/path', router);", "app.route(router);", "app.router(router);", "app.register(router);"],
              "correctAnswer": 0
            },
            {
              "question": "Can routers in Express handle middleware functions?",
              "options": ["Yes", "No", "Only in main app", "Only in templates"],
              "correctAnswer": 0
            },
            {
              "question": "Which method defines route handlers on routers?",
              "options": ["router.get(), router.post(), etc.", "router.route(), router.use()", "router.handle()", "router.next()"],
              "correctAnswer": 0
            },
            {
              "question": "Is it possible to split routes into multiple router files?",
              "options": ["Yes", "No", "Only with Express-generator", "Only for static files"],
              "correctAnswer": 0
            },
            {
              "question": "Which of these methods defines middleware for all HTTP methods on router?",
              "options": ["router.all()", "router.use()", "router.any()", "router.allMethods()"],
              "correctAnswer": 0
            },
            {
              "question": "Do Router instances behave like mini Express apps?",
              "options": ["Yes", "No", "Only in Express 5", "Only with middleware"],
              "correctAnswer": 0
            },
            {
              "question": "How can parameters be extracted in Router middleware?",
              "options": ["Using router.param()", "Using global variables", "Using req.params in app", "Using query strings"],
              "correctAnswer": 0
            },
            {
              "question": "Can routers be used to modularize APIs in Express?",
              "options": ["Yes", "No", "Only for frontend", "Only with third-party libraries"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Express Main App with Router",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "How does the main app use a router module?",
              "options": ["app.use('/path', router);", "app.router('/path', router);", "app.register(router);", "app.attach(router);"],
              "correctAnswer": 0
            },
            {
              "question": "What is the benefit of using routers in Express apps?",
              "options": ["Separation of concerns and modular code", "Faster server", "Single file apps", "No benefits"],
              "correctAnswer": 0
            },
            {
              "question": "Which file usually contains the main Express app setup?",
              "options": ["app.js or index.js", "routes.js", "server.json", "config.yaml"],
              "correctAnswer": 0
            },
            {
              "question": "How do routers handle URL prefixes?",
              "options": ["By mounting routers at specific paths", "By changing request headers", "By changing host", "By modifying response"],
              "correctAnswer": 0
            },
            {
              "question": "Can multiple routers be used in a single Express app?",
              "options": ["Yes", "No", "Only one", "Only in Express 6"],
              "correctAnswer": 0
            },
            {
              "question": "How is middleware applied to routers?",
              "options": ["router.use(middleware)", "app.useMiddleware()", "router.attachMiddleware()", "app.middleware()"],
              "correctAnswer": 0
            },
            {
              "question": "Which method starts the Express main app?",
              "options": ["app.listen()", "app.start()", "server.run()", "app.open()"],
              "correctAnswer": 0
            },
            {
              "question": "In the main app, how to parse JSON request bodies?",
              "options": ["app.use(express.json())", "app.parse.json()", "app.bodyParser()", "router.use(json)"],
              "correctAnswer": 0
            },
            {
              "question": "How does Express handle errors in middleware?",
              "options": ["Using error-handling middleware with 4 arguments", "Throwing exceptions", "Returning false", "Logging to console"],
              "correctAnswer": 0
            },
            {
              "question": "What does app.set() do in Express?",
              "options": ["Sets application settings", "Configures router", "Starts server", "Defines routes"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Express Middleware Concepts",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is middleware in Express.js?",
              "options": ["A function with access to req, res and next", "A route handler", "An HTTP method", "A server"],
              "correctAnswer": 0
            },
            {
              "question": "How does middleware affect a request?",
              "options": ["Can modify req/res or end the request-response cycle", "Only reads headers", "Blocks request permanently", "Ignores the request"],
              "correctAnswer": 0
            },
            {
              "question": "Which method executes the next middleware in the chain?",
              "options": ["next()", "start()", "end()", "run()"],
              "correctAnswer": 0
            },
            {
              "question": "How to add middleware globally to all routes?",
              "options": ["app.use(middleware)", "app.add(middleware)", "app.useMiddleware()", "app.middleware()"],
              "correctAnswer": 0
            },
            {
              "question": "How are built-in middleware used in Express 4+?",
              "options": ["Using express.json(), express.urlencoded(), express.static()", "Installed separately", "Not available", "Changed in Express 5"],
              "correctAnswer": 0
            },
            {
              "question": "Can middleware handle errors?",
              "options": ["Yes, if it has 4 arguments (err, req, res, next)", "No", "Only in routes", "Only with try-catch blocks"],
              "correctAnswer": 0
            },
            {
              "question": "What middleware is used to serve static files?",
              "options": ["express.static()", "app.static()", "http.static()", "res.static()"],
              "correctAnswer": 0
            },
            {
              "question": "What is the order of middleware execution?",
              "options": ["Order of app.use() calls", "Reverse order", "Random order", "Based on routes only"],
              "correctAnswer": 0
            },
            {
              "question": "Can middleware be route-specific?",
              "options": ["Yes", "No", "Only global", "Only error middleware"],
              "correctAnswer": 0
            },
            {
              "question": "Which middleware parses URL-encoded bodies?",
              "options": ["express.urlencoded()", "express.json()", "body-parser()", "urlencoded()"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "MongoDB Connection Setup and Configuration",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "Which Node.js package is commonly used to connect to MongoDB?",
              "options": ["mongoose", "mongodb", "mysql", "express-mongo"],
              "correctAnswer": 0
            },
            {
              "question": "What method connects Mongoose to the MongoDB database?",
              "options": ["mongoose.connect()", "mongoose.open()", "mongoose.init()", "mongoose.dbConnect()"],
              "correctAnswer": 0
            },
            {
              "question": "A MongoDB URI usually starts with which scheme?",
              "options": ["mongodb://", "mongo://", "db://", "mongo-db://"],
              "correctAnswer": 0
            },
            {
              "question": "How to define connection options in Mongoose?",
              "options": ["Using an options object as second argument", "Inside URI", "In environment variables only", "Not needed"],
              "correctAnswer": 0
            },
            {
              "question": "Which Mongoose event is emitted on connection error?",
              "options": ["error", "fail", "disconnect", "close"],
              "correctAnswer": 0
            },
            {
              "question": "What does the 'useNewUrlParser' option do?",
              "options": ["Uses the new MongoDB driver's URL parser", "Enables SSL", "Enables connection pooling", "Disables validation"],
              "correctAnswer": 0
            },
            {
              "question": "Which method disconnects Mongoose from MongoDB?",
              "options": ["mongoose.disconnect()", "mongoose.close()", "mongoose.stop()", "mongoose.end()"],
              "correctAnswer": 0
            },
            {
              "question": "How do environment variables help in connection setup?",
              "options": ["Store credentials securely", "Improve performance", "Enable caching", "Store session data"],
              "correctAnswer": 0
            },
            {
              "question": "MongoDB by default uses which port?",
              "options": ["27017", "3306", "5432", "8080"],
              "correctAnswer": 0
            },
            {
              "question": "Which method allows you to listen for connection open event?",
              "options": ["mongoose.connection.once('open', callback)", "mongoose.connect()", "mongoose.open()", "mongoose.connection.open()"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Data Modeling with Mongoose Schemas",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is a Mongoose Schema?",
              "options": ["A blueprint for MongoDB documents", "A MongoDB collection", "A connection method", "A database"],
              "correctAnswer": 0
            },
            {
              "question": "Which method creates a model from a schema?",
              "options": ["mongoose.model()", "mongoose.schema()", "mongoose.create()", "mongoose.connect()"],
              "correctAnswer": 0
            },
            {
              "question": "How do you define a string field in a Mongoose schema?",
              "options": ["{ type: String }", "{ type: string }", "String()", "stringType()"],
              "correctAnswer": 0
            },
            {
              "question": "Which option makes a schema field required?",
              "options": ["required: true", "mandatory: true", "validate: true", "unique: true"],
              "correctAnswer": 0
            },
            {
              "question": "What does 'unique' option do?",
              "options": ["Ensures field values are unique in DB", "Automatically indexes", "Makes field required", "Validates format"],
              "correctAnswer": 0
            },
            {
              "question": "How to set default values for schema fields?",
              "options": ["default: value", "value: default", "init: value", "defaultValue: value"],
              "correctAnswer": 0
            },
            {
              "question": "Which data type stores arrays in Mongoose?",
              "options": ["[Type]", "ArrayType", "List", "Set"], "correctAnswer": 0
            },
            {
              "question": "How to add instance methods to a schema?",
              "options": ["schema.methods.myMethod = function() {}", "schema.statics.myMethod()", "schema.functions.myMethod()", "model.myMethod()"],
              "correctAnswer": 0
            },
            {
              "question": "Which option enables timestamps for createdAt and updatedAt?",
              "options": ["timestamps: true", "autoTimestamps", "dateFields: true", "time: true"],
              "correctAnswer": 0
            },
            {
              "question": "What is a virtual property in Mongoose?",
              "options": ["Property not persisted in the DB but computed", "Actual field in DB", "Field validation", "Index"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "Service Layer for Business Logic",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What is the purpose of a service layer in software architecture?",
              "options": ["To encapsulate business logic separate from controllers and data access", "To handle HTTP requests", "To interact with the database", "To store configurations"],
              "correctAnswer": 0
            },
            {
              "question": "Which part of an Express app typically calls service layer methods?",
              "options": ["Controllers or route handlers", "Middleware", "Models", "View templates"],
              "correctAnswer": 0
            },
            {
              "question": "What benefit does having a service layer provide?",
              "options": ["Better separation of concerns and testability", "Faster routing", "Direct database access", "Simplified client code"],
              "correctAnswer": 0
            },
            {
              "question": "How does service layer handle transactions or complex logic?",
              "options": ["Manages operations involving multiple data sources", "Avoids complex logic", "Throws errors only", "Used for validation only"],
              "correctAnswer": 0
            },
            {
              "question": "Should service layer depend on the web framework?",
              "options": ["No, it should be independent", "Yes", "Depends on routing", "Only for auth services"],
              "correctAnswer": 0
            },
            {
              "question": "Where are services usually tested?",
              "options": ["Unit tests", "Integration tests", "Manually", "In production"],
              "correctAnswer": 0
            },
            {
              "question": "What is a typical function signature in a service method?",
              "options": ["async function(parameters)", "Middleware function", "Callback", "Listener"],
              "correctAnswer": 0
            },
            {
              "question": "How does service layer interact with data models?",
              "options": ["Calls model methods for CRUD operations", "Replaces models", "Ignores models", "Uses raw queries only"],
              "correctAnswer": 0
            },
            {
              "question": "What pattern best describes service layer role?",
              "options": ["Facade", "Singleton", "Factory", "Observer"],
              "correctAnswer": 0
            },
            {
              "question": "Why is service layer useful for API development?",
              "options": ["To centralize business rules and reuse logic", "To handle only HTTP responses", "Directly query databases", "Handle UI rendering"],
              "correctAnswer": 0
            }
          ]
        },
        {
          "title": "RESTful API Integration with Express",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            {
              "question": "What does REST stand for?",
              "options": ["Representational State Transfer", "Rapid Execution of Server Tasks", "Remote Server Technology", "Resource State Transfer"],
              "correctAnswer": 0
            },
            {
              "question": "Which HTTP method is used to retrieve data?",
              "options": ["GET", "POST", "PUT", "DELETE"],
              "correctAnswer": 0
            },
            {
              "question": "Which HTTP method creates new resources?",
              "options": ["POST", "GET", "PATCH", "DELETE"],
              "correctAnswer": 0
            },
            {
              "question": "Which Express method defines route handling for PUT requests?",
              "options": ["app.put()", "app.post()", "app.get()", "app.delete()"],
              "correctAnswer": 0
            },
            {
              "question": "What status code indicates successful deletion?",
              "options": ["204 No Content", "200 OK", "201 Created", "404 Not Found"],
              "correctAnswer": 0
            },
            {
              "question": "Which middleware is commonly used to parse JSON request bodies?",
              "options": ["express.json()", "bodyParser.urlencoded()", "express.urlencoded()", "multer()"],
              "correctAnswer": 0
            },
            {
              "question": "How do you send a JSON response in Express?",
              "options": ["res.json()", "res.send()", "res.write()", "res.render()"],
              "correctAnswer": 0
            },
            {
              "question": "What is the purpose of status codes in HTTP responses?",
              "options": ["To indicate result of request", "To send data", "To handle middleware", "To define routes"],
              "correctAnswer": 0
            },
            {
              "question": "What does the PATCH method do in REST?",
              "options": ["Partially updates a resource", "Retrieves data", "Deletes a resource", "Creates new resource"],
              "correctAnswer": 0
            },
            {
              "question": "Where do you define RESTful endpoints in Express?",
              "options": ["Router or app route handlers", "Middleware only", "Static files", "Configurations"],
              "correctAnswer": 0
            }
          ]
        }
      ],
    },
    advanced: {
      title: "Advanced Level Node Quiz",
      topics: [
        {
          "title": "Advanced Express Features",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which feature allows Express apps to handle file uploads?", "options": ["multer middleware", "body-parser", "express.static", "cors"], "correctAnswer": 0 },
            { "question": "Which templating engines are commonly used with Express?", "options": ["Pug, EJS, Handlebars", "React, Angular, Vue", "Django Templates, Jinja2", "Thymeleaf, JSF"], "correctAnswer": 0 },
            { "question": "What does the express.Router() function do?", "options": ["Creates a new router object", "Starts the server", "Handles errors", "Connects to database"], "correctAnswer": 0 },
            { "question": "How can you handle errors globally in Express?", "options": ["Using error-handling middleware", "Using try-catch in routes", "Using process.on('error')", "Not possible"], "correctAnswer": 0 },
            { "question": "What middleware parses incoming JSON requests?", "options": ["express.json()", "bodyParser.urlencoded()", "express.static()", "cors()"], "correctAnswer": 0 },
            { "question": "Which method mounts middleware at a path prefix?", "options": ["app.use('/api', router)", "app.mount()", "app.route()", "app.prefix()"], "correctAnswer": 0 },
            { "question": "How do you serve static files in Express?", "options": ["Using express.static middleware", "Using app.static()", "Using serve()", "Serving directories manually"], "correctAnswer": 0 },
            { "question": "How do you enable CORS in Express?", "options": ["Using cors middleware", "Using express.cors()", "Configuring headers manually", "Using helmet"], "correctAnswer": 0 },
            { "question": "What is the default template engine in Express?", "options": ["None, you must specify one", "Pug", "EJS", "Handlebars"], "correctAnswer": 0 },
            { "question": "Which Express function can be used to redirect to another URL?", "options": ["res.redirect()", "res.sendRedirect()", "res.go()", "res.move()"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Real-time Applications with Socket.io",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "What protocol does Socket.io primarily use?", "options": ["WebSocket", "HTTP", "FTP", "TCP"], "correctAnswer": 0 },
            { "question": "Which method listens for events from the client in Socket.io?", "options": ["socket.on()", "socket.emit()", "io.on()", "io.emit()"], "correctAnswer": 0 },
            { "question": "How do you send a message to all connected clients?", "options": ["io.emit()", "socket.emit()", "io.send()", "socket.send()"], "correctAnswer": 0 },
            { "question": "Which event is emitted when a client disconnects?", "options": ["disconnect", "close", "end", "leave"], "correctAnswer": 0 },
            { "question": "Which function initializes the socket instance on the client?", "options": ["io.connect()", "socket.init()", "socket.connect()", "initSocket()"], "correctAnswer": 0 },
            { "question": "How are rooms used in Socket.io?", "options": ["To group clients for targeted messaging", "To store messages", "To manage users", "To serve files"], "correctAnswer": 0 },
            { "question": "Can Socket.io fall back to HTTP long polling?", "options": ["Yes", "No", "Only with WebRTC", "Only in browsers"], "correctAnswer": 0 },
            { "question": "Which method adds a client to a room?", "options": ["socket.join(roomName)", "socket.add(room)", "socket.enter(room)", "socket.include(room)"], "correctAnswer": 0 },
            { "question": "What trigger should be used to send real-time notifications?", "options": ["Server emits events on changes", "Server polls database", "Client polls server", "Client refreshes page"], "correctAnswer": 0 },
            { "question": "Does Socket.io support bidirectional communication?", "options": ["Yes", "No", "Only server to client", "Only client to server"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Testing & Debugging in Node.js/Express",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which testing framework is popular for Node.js?", "options": ["Mocha", "JUnit", "PyTest", "RSpec"], "correctAnswer": 0 },
            { "question": "What does the 'done' callback in Mocha tests do?", "options": ["Signals asynchronous test completion", "Starts the test", "Skips the test", "Throws error"], "correctAnswer": 0 },
            { "question": "How do you run a Node.js application with debugging enabled?", "options": ["node --inspect app.js", "node app.js --debug", "node debug app.js", "npm debug"], "correctAnswer": 0 },
            { "question": "Which tool can be used to debug Node.js apps in Chrome DevTools?", "options": ["Node Inspector", "Visual Studio", "NetBeans", "Xcode"], "correctAnswer": 0 },
            { "question": "Which assertion library is often used with Mocha?", "options": ["Chai", "assert", "should.js", "expect.js"], "correctAnswer": 0 },
            { "question": "What does Sinon.js provide?", "options": ["Spies, stubs, and mocks for tests", "Template engines", "Database connectors", "HTTP clients"], "correctAnswer": 0 },
            { "question": "How can you test Express routes?", "options": ["Using Supertest", "Using Puppeteer", "Using Selenium", "Using Cypress"], "correctAnswer": 0 },
            { "question": "What is a common technique to improve debugging?", "options": ["Logging and breakpoints", "Code obfuscation", "Minifying code", "Ignoring errors"], "correctAnswer": 0 },
            { "question": "Which environment variable is used to signal development mode?", "options": ["NODE_ENV=development", "NODE_DEBUG=true", "DEBUG_MODE=1", "APP_ENV=dev"], "correctAnswer": 0 },
            { "question": "Which command runs all tests using Mocha?", "options": ["mocha", "npm run test", "node test.js", "test"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Performance Optimization in Node.js",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "How can you improve Node.js app performance?", "options": ["Use asynchronous I/O and caching", "Use synchronous calls", "Use global variables", "Disable garbage collection"], "correctAnswer": 0 },
            { "question": "Which tool helps profile Node.js applications?", "options": ["clinic.js", "Puppeteer", "Mongoose", "Express"], "correctAnswer": 0 },
            { "question": "What is event loop in Node.js?", "options": ["Mechanism that handles async callbacks", "Thread pool", "Synchronous process", "Garbage collector"], "correctAnswer": 0 },
            { "question": "How can you offload CPU-intensive tasks in Node.js?", "options": ["Use worker_threads or child processes", "Run in main thread", "Avoid heavy computation", "Use event emitters"], "correctAnswer": 0 },
            { "question": "Which Node.js module helps manage clustering?", "options": ["cluster", "os", "net", "tls"], "correctAnswer": 0 },
            { "question": "What is the benefit of clustering?", "options": ["Utilizes multiple CPU cores", "Reduces memory usage", "Increases package size", "Improves code quality"], "correctAnswer": 0 },
            { "question": "How to prevent memory leaks in Node.js?", "options": ["Avoid global variables and manage event listeners", "Keep large buffers", "Disable garbage collection", "Use synchronous code"], "correctAnswer": 0 },
            { "question": "Which HTTP caching helps in performance?", "options": ["Using appropriate cache-control headers", "Disabling headers", "Caching on client only", "No caching"], "correctAnswer": 0 },
            { "question": "Which of these improves API responsiveness?", "options": ["Using streams and pagination", "Sending large JSON", "Blocking the event loop", "Using synchronous code"], "correctAnswer": 0 },
            { "question": "How does gzip compression affect Node.js server?", "options": ["Reduces response size improving speed", "Increases CPU usage unnecessarily", "Blocks requests", "Decreases performance always"], "correctAnswer": 0 }
          ]
        },
        {
          "title": "Security Best Practices in Node.js/Express",
          "explanation": "<div class='flex justify-center items-center mt-9'><p class='text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg'>Please select the Chapter to start the Quiz</p></div>",
          "quizData": [
            { "question": "Which package helps secure Express apps by setting HTTP headers?", "options": ["helmet", "cors", "express-secure", "express-safety"], "correctAnswer": 0 },
            { "question": "How can you prevent Cross-Site Scripting (XSS) attacks?", "options": ["Validate and sanitize input", "Allow all inputs", "Use eval()", "Disable CSP"], "correctAnswer": 0 },
            { "question": "How to prevent SQL injection in Node.js?", "options": ["Use parameterized queries or ORM", "Use string concatenation", "Disable input validation", "Use GET requests only"], "correctAnswer": 0 },
            { "question": "What does CORS stand for?", "options": ["Cross-Origin Resource Sharing", "Cross-Operation Resource Sharing", "Client-Origin Resource Security", "Cross-Origin Request Sync"], "correctAnswer": 0 },
            { "question": "How do you enable CORS in Express app?", "options": ["Using cors middleware", "Manually setting headers", "Disabling cookies", "Using helmet middleware"], "correctAnswer": 0 },
            { "question": "Which authentication method uses tokens?", "options": ["JWT (JSON Web Tokens)", "Basic Auth", "Sessions", "OAuth 1"], "correctAnswer": 0 },
            { "question": "Which HTTP method is safest for sensitive operations?", "options": ["POST", "GET", "PUT", "DELETE"], "correctAnswer": 0 },
            { "question": "What prevents session hijacking?", "options": ["Using HTTPS and secure cookies", "Using regular HTTP", "Ignoring cookies", "Disabling login"], "correctAnswer": 0 },
            { "question": "How do you protect against CSRF attacks?", "options": ["Use CSRF tokens", "Allow all origins", "Disable cookies", "Use GET requests"], "correctAnswer": 0 },
            { "question": "What is the principle of least privilege?", "options": ["Give only necessary permissions", "Give full admin rights", "Ignore permissions", "Grant permanent access"], "correctAnswer": 0 }
          ]
        }
      ],
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
          Complete Node Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master Node from Beginner to Advanced Level through interactive quizzes,
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

export default NodeQuize;
