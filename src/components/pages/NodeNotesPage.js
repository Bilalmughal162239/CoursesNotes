import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const NodeNotesPage = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const htmlContent = {
    beginner: {
      title: "Beginner Level Node Js",
      topics: [
        {
          title: "1. Node.js Introduction & Setup",
          theory: `<h1>What is Node.js?</h1> 
                   <p>Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It is used for building server-side applications.</p>
                   <h3>Key Features:</h3> 
                   <ul>
                     <li>Asynchronous & Event-driven: Non-blocking I/O operations</li>
                     <li>Single-threaded: Event loop mechanism</li>
                     <li>Cross-platform: Windows, Mac, Linux</li>
                     <li>NPM: Largest package ecosystem</li>
                   </ul>
                   <h3>Installation Steps:</h3>
                   <pre>
                   # Step 1: Download Node.js from <a href="https://nodejs.org" target="_blank">nodejs.org</a>
                   # Step 2: After installation verify
                   node --version
                   npm --version
                   
                   # Step 3: Create your first project
                   mkdir my-node-app
                   cd my-node-app
                   </pre>
                   <h3>Your First Node.js Program:</h3>
                   <pre>
                   // app.js
                   console.log("Hello World from Node.js!");
                   console.log("Node.js version:", process.version);
                   console.log("Platform:", process.platform);
                   
                   // To run in terminal:
                   // node app.js
                   </pre>
                   <h3>Output:</h3>
                   <pre>
                   Hello World from Node.js!
                   Node.js version: v18.17.0
                   Platform: win32
                   </pre>`,
          code: `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>HTML vs CSS vs JS</title>
                    <style>
                      body { font-family: system-ui; }
                      .btn { padding: .5rem 1rem; border: 1px solid #ccc; cursor: pointer; }
                    </style>
                  </head>
                  <body>
                    <h1 id="title">Hello, DOM!</h1>
                    <p>The <strong>DOM</strong> lets JS change this page.</p>
                    <button class="btn" id="changer">Change Title</button>
                  
                    <script>
                      const btn = document.getElementById('changer');
                      const title = document.getElementById('title');
                      btn.addEventListener('click', () => {
                        title.textContent = 'Title changed via JavaScript!';
                      });
                    </script>
                  </body>
                  </html>`,
          explanation:
            "• Node.js = JavaScript runtime for server-side apps.\n• Key features: asynchronous, single-threaded, cross-platform, huge package ecosystem (NPM).\n• Installation verified by checking node --version & npm --version.\n• First Node program: console.log outputs system info.\n• HTML example: DOM manipulation shows how JS changes UI.",
          task:
            "1. Install Node.js and verify using 'node --version'.\n2. Create 'app.js' and write a simple console.log program.\n3. Run it with 'node app.js'.\n4. Also, make a web page with a paragraph and button. On click, append a new sentence to the paragraph using the DOM."
        },

        {
          title: "2. JavaScript Fundamentals for Node.js",
          theory: `
                <h3>Variables & Data Types</h3>
                <p>In JavaScript, there are three types of variables: <code>var</code>, <code>let</code>, and <code>const</code>. Data types include primitive types (string, number, boolean, null, undefined, symbol, bigint) and non-primitive types (objects, arrays, functions).</p>
                
                <h3>Functions in Node.js</h3>
                <p>Functions are used for code reuse. In Node.js, regular functions, arrow functions, and async functions are commonly used.</p>
                
                <h3>Promises & Async/Await</h3>
                <p>Promises and Async/Await are used to handle asynchronous operations. They allow non-blocking behavior, which is a core feature of Node.js.</p>
                  `,
          code: `// variables.js
                 // ES6 Variables
                 const name = "Ahmad";           // Constant
                 let age = 25;                   // Block scope
                 var city = "Karachi";           // Function scope
                 
                 // Data Types
                 const student = {
                     name: "Ali",
                     age: 22,
                     subjects: ["Math", "Physics", "Chemistry"],
                     isActive: true,
                     address: {
                         city: "Lahore",
                         country: "Pakistan"
                     }
                 };
                 console.log("Student Info:", student);
                 console.log("Type of student:", typeof student);
                 
                 // functions.js
                 // 1. Regular Function
                 function greetUser(name) {
                     return \`Assalam-o-Alaikum \${name}!\`;
                 }
                 
                 // 2. Arrow Function
                 const calculateAge = (birthYear) => {
                     return new Date().getFullYear() - birthYear;
                 };
                 
                 // 3. Async Function
                 const fetchUserData = async (userId) => {
                     try {
                         // Simulate API call
                         return new Promise((resolve) => {
                             setTimeout(() => {
                                 resolve({ id: userId, name: "Hassan" });
                             }, 1000);
                         });
                     } catch (error) {
                         console.error("Error:", error);
                     }
                 };
                 
                 // Usage
                 console.log(greetUser("Ahmed"));
                 console.log("Age:", calculateAge(1998));
                 fetchUserData(123).then(user => {
                     console.log("User Data:", user);
                 });
                 
                 // async-example.js
                 // Promise Example
                 const readFilePromise = (filename) => {
                     return new Promise((resolve, reject) => {
                         setTimeout(() => {
                             if (filename) {
                                 resolve(\`File \${filename} read successfully\`);
                             } else {
                                 reject("Filename is required");
                             }
                         }, 1000);
                     });
                 };
                 
                 // Using Promises
                 readFilePromise("data.txt")
                     .then(result => console.log(result))
                     .catch(error => console.error(error));
                 
                 // Using Async/Await
                 const readFileAsync = async () => {
                     try {
                         const result = await readFilePromise("config.json");
                         console.log(result);
                     } catch (error) {
                         console.error("Error:", error);
                     }
                 };
                 readFileAsync();`,
          explanation:
            "• Variables: var (function scope), let (block scope), const (constant).\n" +
            "• Data Types: Objects allow nested properties, arrays, and booleans.\n" +
            "• Functions: Regular for normal tasks, Arrow for concise syntax, Async for promises.\n" +
            "• Promises: Manage async tasks with .then()/.catch().\n" +
            "• Async/Await: Cleaner syntax for asynchronous code with try/catch error handling.",
          task:
            "1. Ek 'user.js' file banao jisme ek user object ho with name, email, aur hobbies.\n" +
            "2. Ek function likho jo user ka naam greet kare.\n" +
            "3. Ek arrow function likho jo dob se age calculate kare.\n" +
            "4. Ek async function banao jo fake API call karke user data return kare.\n" +
            "5. Dono Promises aur Async/Await ka use karke API result ko console par print karo."
        },

        {
          title: "3. Core Modules",
          theory: `
                  <p>Node.js has several <strong>built-in core modules</strong> that can be used directly without installation. These modules are used for system-level tasks such as file handling, path management, operating system info, URL parsing, and more.</p>
                  <h3>1. Path Module</h3>
                  <p>The Path module is used to work with file and directory paths.</p>
                  <h3>2. OS Module</h3>
                  <p>The OS module is used to retrieve information about the operating system (CPU, memory, platform, uptime, etc.).</p>
                  <h3>3. URL Module</h3>
                  <p>The URL module is used to parse, manipulate, and construct URL strings.</p>`
          ,
          code: `// path-example.js
                  const path = require('path');
                  // Current file ka path
                  console.log("Current file:", __filename);
                  console.log("Current directory:", __dirname);

                  // Path operations
                  const filePath = "/users/ahmad/documents/project/app.js";
                  console.log("Directory name:", path.dirname(filePath));
                  console.log("Base name:", path.basename(filePath));
                  console.log("Extension:", path.extname(filePath));
                  console.log("Parse:", path.parse(filePath));
                  
                  // Path join karna
                  const newPath = path.join(__dirname, 'uploads', 'images', 'photo.jpg');
                  console.log("Joined path:", newPath);
                  
                  // Resolve path
                  const absolutePath = path.resolve('data', 'users.json');
                  console.log("Absolute path:", absolutePath);
                  
                  
                  // os-example.js
                  const os = require('os');
                  console.log("Platform:", os.platform());
                  console.log("Architecture:", os.arch());
                  console.log("CPU Info:", os.cpus().length, "cores");
                  console.log("Total Memory:", Math.round(os.totalmem() / 1024 / 1024 / 1024), "GB");
                  console.log("Free Memory:", Math.round(os.freemem() / 1024 / 1024 / 1024), "GB");
                  console.log("Home Directory:", os.homedir());
                  console.log("Hostname:", os.hostname());
                  console.log("Uptime:", Math.round(os.uptime() / 3600), "hours");
                  // Network interfaces
                  console.log("Network Interfaces:", os.networkInterfaces());
                  
                  
                  // url-example.js
                  const url = require('url');
                  const myUrl = "https://www.example.com:8080/users/profile?id=123&name=ahmad#section1";
                  
                  // Parse URL (old way)
                  const parsedUrl = url.parse(myUrl, true);
                  console.log("Parsed URL:", parsedUrl);
                  console.log("Protocol:", parsedUrl.protocol);
                  console.log("Host:", parsedUrl.host);
                  console.log("Pathname:", parsedUrl.pathname);
                  console.log("Query:", parsedUrl.query);
                  
                  // URL Constructor (modern way)
                  const myURL = new URL(myUrl);
                  console.log("Hostname:", myURL.hostname);
                  console.log("Port:", myURL.port);
                  console.log("Search Params:", myURL.searchParams.get('id'));
                  
                  // Create URL dynamically
                  const newUrl = new URL('/api/users', 'https://api.example.com');
                  newUrl.searchParams.append('page', '1');
                  newUrl.searchParams.append('limit', '10');
                  console.log("New URL:", newUrl.toString());`,
          explanation:
            "• Path module: dirname, basename, extname, parse, join, resolve.\n" +
            "• OS module: system information (platform, CPU, memory, network interfaces).\n" +
            "• URL module: parsing, constructing, and manipulating URLs.\n" +
            "• url.parse() purana tareeqa hai; new URL() preferred hai modern Node.js mein.",
          task:
            "1. Ek file 'core-modules-task.js' banao.\n" +
            "2. Path module ka use karke apne project ka ek 'logs/app.log' ka absolute path generate karo.\n" +
            "3. OS module ka use karke system ka free memory aur uptime print karo.\n" +
            "4. URL module ka use karke ek 'https://shop.example.com/products' URL banao jisme query parameters 'category=books' aur 'sort=asc' add ho."
        },

        {
          title: "4. File System Operations",
          theory: `<p><strong>File System (fs) module</strong> is a core Node.js module used to work with files and directories. It provides synchronous, asynchronous        (callback),       and promises-based methods.</p>
                   <h3>1. Reading Files</h3>
                   <ul>
                     <li><strong>Synchronous:</strong> Blocking, execution waits until reading is complete.</li>
                     <li><strong>Asynchronous (Callback):</strong> Non-blocking, result received via callback.</li>
                     <li><strong>Promises/Async-Await:</strong> Modern and clean way to handle asynchronous file operations.</li>
                     <li><strong>Check if file exists:</strong> Use <code>fs.existsSync</code>.</li>
                   </ul>
                   <h3>2. Writing Files</h3>
                   <ul>
                     <li><strong>writeFile:</strong> Writes new data to a file (overwrites existing content).</li>
                     <li><strong>appendFile:</strong> Adds data to an existing file.</li>
                     <li><strong>writeFileSync:</strong> Synchronous file writing.</li>
                   </ul>
                   <h3>3. Directory Operations</h3>
                   <ul>
                     <li><strong>mkdirSync:</strong> Create a new directory.</li>
                     <li><strong>readdirSync:</strong> Read contents of a directory.</li>
                     <li><strong>rmSync:</strong> Delete a directory.</li>
                     <li><strong>watchFile:</strong> Monitor file changes.</li>
                   </ul>`,
          code: `// file-read.js
                   const fs = require('fs');
                   const path = require('path');
                   
                   // 1. Synchronous File Reading
                   try {
                       const data = fs.readFileSync('data.txt', 'utf8');
                       console.log("Sync Data:", data);
                   } catch (error) {
                       console.error("Sync Error:", error.message);
                   }
                   
                   // 2. Asynchronous File Reading (Callback)
                   fs.readFile('data.txt', 'utf8', (err, data) => {
                       if (err) {
                           console.error("Async Error:", err.message);
                           return;
                       }
                       console.log("Async Data:", data);
                   });
                   
                   // 3. Promise-based File Reading
                   const fsPromises = require('fs').promises;
                   const readFileAsync = async () => {
                       try {
                           const data = await fsPromises.readFile('data.txt', 'utf8');
                           console.log("Promise Data:", data);
                       } catch (error) {
                           console.error("Promise Error:", error.message);
                       }
                   };
                   readFileAsync();
                   
                   // 4. Check if file exists
                   if (fs.existsSync('data.txt')) {
                       console.log("File exists!");
                   } else {
                       console.log("File does not exist!");
                   }
                   
                   
                   // file-write.js
                   const fs = require('fs');
                   // Sample data
                   const userData = {
                       name: "Muhammad Ali",
                       email: "ali@example.com",
                       age: 28,
                       city: "Islamabad"
                   };
                   
                   // 1. Write JSON file
                   const jsonData = JSON.stringify(userData, null, 2);
                   fs.writeFile('user.json', jsonData, (err) => {
                       if (err) {
                           console.error("Write Error:", err);
                           return;
                       }
                       console.log("User data saved successfully!");
                   });
                   
                   // 2. Append to file
                   const logMessage = \`\${new Date().toISOString()} - User logged in\\n\`;
                   fs.appendFile('app.log', logMessage, (err) => {
                       if (err) {
                           console.error("Append Error:", err);
                           return;
                       }
                       console.log("Log entry added!");
                   });
                   
                   // 3. Write multiple files
                   const files = [
                       { name: 'config.json', content: JSON.stringify({ port: 3000, env: 'development' }) },
                       { name: 'readme.txt', content: 'This is a Node.js application' },
                       { name: 'version.txt', content: '1.0.0' }
                   ];
                   files.forEach(file => {
                       fs.writeFileSync(file.name, file.content);
                       console.log(\`\${file.name} created successfully!\`);
                   });
                   
                   
                   // directory-ops.js
                   const fs = require('fs');
                   const path = require('path');
                   
                   // 1. Create directory
                   const createDirectory = (dirName) => {
                       if (!fs.existsSync(dirName)) {
                           fs.mkdirSync(dirName, { recursive: true });
                           console.log(\`Directory \${dirName} created!\`);
                       } else {
                           console.log(\`Directory \${dirName} already exists!\`);
                       }
                   };
                   
                   // 2. Read directory contents
                   const readDirectory = (dirPath) => {
                       try {
                           const files = fs.readdirSync(dirPath);
                           console.log(\`Contents of \${dirPath}:\`);
                           files.forEach(file => {
                               const filePath = path.join(dirPath, file);
                               const stats = fs.statSync(filePath);
                               if (stats.isDirectory()) {
                                   console.log(\`📁 \${file}/\`);
                               } else {
                                   console.log(\`📄 \${file} (\${stats.size} bytes)\`);
                               }
                           });
                       } catch (error) {
                           console.error("Error reading directory:", error.message);
                       }
                   };
                   
                   // 3. Delete directory
                   const deleteDirectory = (dirPath) => {
                       try {
                           fs.rmSync(dirPath, { recursive: true, force: true });
                           console.log(\`Directory \${dirPath} deleted!\`);
                       } catch (error) {
                           console.error("Error deleting directory:", error.message);
                       }
                   };
                   
                   // Usage
                   createDirectory('uploads/images');
                   createDirectory('logs');
                   readDirectory('./');
                   
                   // File watcher
                   fs.watchFile('data.txt', (curr, prev) => {
                       console.log('File changed!');
                       console.log(\`Previous size: \${prev.size}\`);
                       console.log(\`Current size: \${curr.size}\`);
                   });`,
          explanation:
            "• File read: sync blocks execution, async uses callback, promises use async/await.\n" +
            "• File write: writeFile for new data, appendFile for logs, writeFileSync for quick sync tasks.\n" +
            "• Directories: mkdirSync to create, readdirSync to list contents, rmSync to delete.\n" +
            "• fs.watchFile se file changes monitor kiye ja sakte hain.",
          task:
            "1. 'notes.txt' file create karke apna naam likho.\n" +
            "2. Ek function likho jo file ko async read karke console mein print kare.\n" +
            "3. Ek function likho jo har login par 'logs/activity.log' mein entry append kare.\n" +
            "4. Ek directory 'backup' banao aur uske andar 'notes.txt' ka copy likhne ki functionality implement karo."
        },

        {
          title: "5. HTTP Module & Basic Server",
          theory: `
                 <p><strong>HTTP module</strong> is a built-in Node.js module used to create servers and handle HTTP requests.</p>
                 <h3>1. Basic HTTP Server</h3>
                 <ul>
                   <li><strong>http.createServer:</strong> Creates a server that handles requests.</li>
                   <li><strong>req.url:</strong> The requested path from the client.</li>
                   <li><strong>req.method:</strong> Request method (GET, POST, PUT, DELETE).</li>
                   <li><strong>res.setHeader:</strong> Set response headers.</li>
                   <li><strong>res.end:</strong> Send response back to the client.</li>
                 </ul>
                 <h3>2. Routing</h3>
                 <p>You can create routes by writing conditions for different <strong>paths and methods</strong> (e.g., '/', '/about', '/users').</p>
                 <h3>3. HTTP Client</h3>
                 <ul>
                   <li><strong>http/https modules:</strong> Used to make GET and POST requests.</li>
                   <li><strong>http.get:</strong> Simple GET request.</li>
                   <li><strong>http.request:</strong> Advanced requests (e.g., POST with body data).</li>
                 </ul>
                 `,
          code: `// basic-server.js
                 const http = require('http');
                 const url = require('url');
                 
                 // Server create karna
                 const server = http.createServer((req, res) => {
                     const parsedUrl = url.parse(req.url, true);
                     const pathname = parsedUrl.pathname;
                     const method = req.method;
                 
                     res.setHeader('Content-Type', 'application/json');
                     res.setHeader('Access-Control-Allow-Origin', '*');
                     console.log(\`\${method} \${pathname}\`);
                 
                     if (pathname === '/' && method === 'GET') {
                         res.statusCode = 200;
                         res.end(JSON.stringify({
                             message: "Welcome to Node.js Server!",
                             timestamp: new Date().toISOString()
                         }));
                     } else if (pathname === '/about' && method === 'GET') {
                         res.statusCode = 200;
                         res.end(JSON.stringify({
                             message: "About Page",
                             version: "1.0.0",
                             author: "Your Name"
                         }));
                     } else if (pathname === '/users' && method === 'GET') {
                         const users = [
                             { id: 1, name: "Ahmad Ali", email: "ahmad@example.com" },
                             { id: 2, name: "Fatima Khan", email: "fatima@example.com" },
                             { id: 3, name: "Hassan Ahmed", email: "hassan@example.com" }
                         ];
                         res.statusCode = 200;
                         res.end(JSON.stringify({
                             success: true,
                             data: users,
                             count: users.length
                         }));
                     } else {
                         res.statusCode = 404;
                         res.end(JSON.stringify({
                             error: "Page not found",
                             message: \`Cannot \${method} \${pathname}\`
                         }));
                     }
                 });
                 
                 // Server start karna
                 const PORT = process.env.PORT || 3000;
                 server.listen(PORT, () => {
                     console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
                     console.log("📝 Available routes:");
                     console.log("   GET /");
                     console.log("   GET /about");
                     console.log("   GET /users");
                 });
                 
                 // Error handling
                 server.on('error', (error) => {
                     console.error('Server Error:', error);
                 });
                 
                 
                 // http-client.js
                 const http = require('http');
                 const https = require('https');
                 
                 // 1. Simple GET request
                 const makeGetRequest = (url) => {
                     return new Promise((resolve, reject) => {
                         const protocol = url.startsWith('https') ? https : http;
                         protocol.get(url, (res) => {
                             let data = '';
                             res.on('data', (chunk) => { data += chunk; });
                             res.on('end', () => {
                                 try {
                                     const jsonData = JSON.parse(data);
                                     resolve(jsonData);
                                 } catch {
                                     resolve(data);
                                 }
                             });
                         }).on('error', reject);
                     });
                 };
                 
                 // 2. POST request with data
                 const makePostRequest = (hostname, port, path, postData) => {
                     return new Promise((resolve, reject) => {
                         const options = {
                             hostname,
                             port,
                             path,
                             method: 'POST',
                             headers: {
                                 'Content-Type': 'application/json',
                                 'Content-Length': Buffer.byteLength(postData)
                             }
                         };
                         const req = http.request(options, (res) => {
                             let data = '';
                             res.on('data', (chunk) => { data += chunk; });
                             res.on('end', () => {
                                 resolve({
                                     statusCode: res.statusCode,
                                     data
                                 });
                             });
                         });
                         req.on('error', reject);
                         req.write(postData);
                         req.end();
                     });
                 };
                 
                 // Usage examples
                 const testRequests = async () => {
                     try {
                         console.log("Making GET request...");
                         const getData = await makeGetRequest('http://localhost:3000/users');
                         console.log("GET Response:", getData);
                 
                         console.log("\\nMaking POST request...");
                         const postData = JSON.stringify({ name: "New User", email: "newuser@example.com" });
                         const postResponse = await makePostRequest('localhost', 3000, '/users', postData);
                         console.log("POST Response:", postResponse);
                     } catch (error) {
                         console.error("Request Error:", error.message);
                     }
                 };
                 testRequests();`,
          explanation:
            "• http.createServer se server banaya jaata hai jo incoming requests handle karta hai.\n" +
            "• Simple routes banane ke liye if-else conditions use ki jaati hain.\n" +
            "• http.get aur http.request se external ya local server requests bheje ja sakte hain.\n" +
            "• GET mein query data hota hai, POST mein body data bhejna padta hai.\n",
          task:
            "1. Ek new route '/time' banao jo current server time JSON format mein return kare.\n" +
            "2. Client se GET request bhej kar '/time' ka response print karo.\n" +
            "3. Ek POST route '/feedback' banao jo JSON body (name, feedback) accept kare aur usko response mein wapas bheje."
        },

        {
          title: "6. NPM & Package Management",
          theory: `
                 <p><strong>NPM (Node Package Manager)</strong> is the default package manager for Node.js, used to install, update, and manage dependencies.</p>
                 <h3>1. Project Initialization</h3>
                 <pre><code>npm init -y</code></pre>
                 <p>This command creates a <strong>package.json</strong> file that tracks project metadata and dependencies.</p>
                 <h3>2. Package Installation</h3>
                 <ul>
                   <li><code>npm install express</code> → Adds an application dependency.</li>
                   <li><code>npm install --save-dev nodemon</code> → Adds a development dependency.</li>
                   <li><code>npm install -g pm2</code> → Installs a package globally (system-wide).</li>
                   <li><code>npm install express@4.18.0</code> → Installs a specific version of a package.</li>
                 </ul>
                 <h3>3. Package Management</h3>
                 <ul>
                   <li><code>npm update</code> → Updates packages to the latest compatible version.</li>
                   <li><code>npm uninstall express</code> → Removes a dependency.</li>
                 </ul>
                 <h3>4. package.json Example</h3>
                 <p>This file defines dependencies, scripts, and project information.</p>
                 <h3>5. Environment Variables</h3>
                 <ul>
                   <li>The <code>dotenv</code> package is used to store sensitive information (DB URL, API keys, JWT secrets) in a separate <code>.env</code> file.</li>
                   <li>For central configuration, a <code>config.js</code> file is used.</li>
                 </ul>
                   `,
          code: `# Commands
                  npm init -y
                  npm install express
                  npm install --save-dev nodemon
                  npm install -g pm2
                  npm install express@4.18.0
                  npm update
                  npm uninstall express
                  
                  
                  // package.json (Example)
                  {
                    "name": "my-node-app",
                    "version": "1.0.0",
                    "description": "Complete Node.js learning application",
                    "main": "app.js",
                    "scripts": {
                      "start": "node app.js",
                      "dev": "nodemon app.js",
                      "test": "jest",
                      "build": "webpack --mode production"
                    },
                    "keywords": ["nodejs", "express", "api"],
                    "author": "Your Name <your.email@example.com>",
                    "license": "MIT",
                    "dependencies": {
                      "express": "^4.18.2",
                      "mongoose": "^7.0.0",
                      "bcryptjs": "^2.4.3",
                      "jsonwebtoken": "^9.0.0",
                      "cors": "^2.8.5",
                      "helmet": "^6.0.1",
                      "dotenv": "^16.0.3"
                    },
                    "devDependencies": {
                      "nodemon": "^2.0.20",
                      "jest": "^29.0.0",
                      "supertest": "^6.3.0"
                    },
                    "engines": {
                      "node": ">=16.0.0",
                      "npm": ">=8.0.0"
                    }
                  }
                  
                  
                  // config.js
                  require('dotenv').config();
                  
                  const config = {
                      PORT: process.env.PORT || 3000,
                      NODE_ENV: process.env.NODE_ENV || 'development',
                      DB_HOST: process.env.DB_HOST || 'localhost',
                      DB_PORT: process.env.DB_PORT || 27017,
                      DB_NAME: process.env.DB_NAME || 'myapp',
                      DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/myapp',
                      JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
                      JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',
                      EMAIL_HOST: process.env.EMAIL_HOST,
                      EMAIL_PORT: process.env.EMAIL_PORT,
                      EMAIL_USER: process.env.EMAIL_USER,
                      EMAIL_PASS: process.env.EMAIL_PASS,
                      API_KEY: process.env.API_KEY,
                      MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || '5mb',
                      UPLOAD_PATH: process.env.UPLOAD_PATH || './uploads'
                  };
                  
                  module.exports = config;
                  
                  
                  // .env (Example)
                  PORT=3000
                  NODE_ENV=development
                  
                  DB_HOST=localhost
                  DB_PORT=27017
                  DB_NAME=myapp_dev
                  DB_URL=mongodb://localhost:27017/myapp_dev
                  
                  JWT_SECRET=your-super-secret-jwt-key-here
                  JWT_EXPIRE=7d
                  
                  EMAIL_HOST=smtp.gmail.com
                  EMAIL_PORT=587
                  EMAIL_USER=your-email@gmail.com
                  EMAIL_PASS=your-app-password
                  
                  API_KEY=your-api-key-here
                  
                  MAX_FILE_SIZE=10mb
                  UPLOAD_PATH=./uploads`,
          explanation:
            "• NPM se dependencies manage hoti hain aur package.json unko track karta hai.\n" +
            "• 'scripts' section mein common commands automate ki ja sakti hain (e.g. start, dev).\n" +
            "• dotenv sensitive information ko environment file se load karta hai.\n" +
            "• config.js ek centralized config object provide karta hai jo har jagah import ho sakta hai.\n",
          task:
            "1. Ek new project init karo aur 'express' + 'nodemon' install karo.\n" +
            "2. package.json mein ek script 'dev' banao jo 'nodemon index.js' run kare.\n" +
            "3. .env file mein PORT aur DB_URL set karo.\n" +
            "4. config.js banakar environment variables ko read aur console.log() karo."
        },
        {
          title: "Beginner Mini Task 1: File Manager CLI",
          theory:
            "This task introduces basic Node.js file system operations with a command-line interface (CLI). It covers creating, reading, deleting files, and navigating directories using Node.js core modules like fs, path, and readline.",
          code: `// file-manager.js
                  const fs = require('fs');
                  const path = require('path');
                  const readline = require('readline');
                  
                  class FileManager {
                    constructor() {
                      this.currentDir = process.cwd();
                      this.rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                      });
                    }
                  
                    showMenu() {
                      console.log('\\n📁 File Manager Menu:');
                      console.log('1. List files (ls)');
                      console.log('2. Create file (touch)');
                      console.log('3. Create directory (mkdir)');
                      console.log('4. Read file (cat)');
                      console.log('5. Delete file (rm)');
                      console.log('6. Change directory (cd)');
                      console.log('7. Current directory (pwd)');
                      console.log('8. Exit');
                      console.log('─'.repeat(30));
                    }
                  
                    listFiles() {
                      try {
                        const files = fs.readdirSync(this.currentDir);
                        console.log(\`\\n📂 Contents of \${this.currentDir}:\`);
                        files.forEach(file => {
                          const filePath = path.join(this.currentDir, file);
                          const stats = fs.statSync(filePath);
                          const size = stats.isFile() ? \`(\${stats.size} bytes)\` : '';
                          const icon = stats.isDirectory() ? '📁' : '📄';
                          console.log(\`\${icon} \${file} \${size}\`);
                        });
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    createFile(filename) {
                      try {
                        const filePath = path.join(this.currentDir, filename);
                        fs.writeFileSync(filePath, '');
                        console.log(\`✅ File '\${filename}' created successfully!\`);
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    createDirectory(dirname) {
                      try {
                        const dirPath = path.join(this.currentDir, dirname);
                        fs.mkdirSync(dirPath);
                        console.log(\`✅ Directory '\${dirname}' created successfully!\`);
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    readFile(filename) {
                      try {
                        const filePath = path.join(this.currentDir, filename);
                        const content = fs.readFileSync(filePath, 'utf8');
                        console.log(\`\\n📄 Content of \${filename}:\`);
                        console.log('─'.repeat(40));
                        console.log(content);
                        console.log('─'.repeat(40));
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    deleteFile(filename) {
                      try {
                        const filePath = path.join(this.currentDir, filename);
                        fs.unlinkSync(filePath);
                        console.log(\`✅ File '\${filename}' deleted successfully!\`);
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    changeDirectory(dirname) {
                      try {
                        const newPath = path.resolve(this.currentDir, dirname);
                        if (fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()) {
                          this.currentDir = newPath;
                          console.log(\`✅ Changed to directory: \${this.currentDir}\`);
                        } else {
                          console.log('❌ Directory not found!');
                        }
                      } catch (error) {
                        console.error('❌ Error:', error.message);
                      }
                    }
                  
                    start() {
                      console.log('🚀 Welcome to File Manager!');
                      this.showMenu();
                      this.promptUser();
                    }
                  
                    promptUser() {
                      this.rl.question('\\nEnter command (or number): ', (input) => {
                        const [command, ...args] = input.trim().split(' ');
                        switch (command) {
                          case '1':
                          case 'ls':
                            this.listFiles();
                            break;
                          case '2':
                          case 'touch':
                            if (args[0]) this.createFile(args[0]);
                            else console.log('❌ Please provide filename');
                            break;
                          case '3':
                          case 'mkdir':
                            if (args[0]) this.createDirectory(args[0]);
                            else console.log('❌ Please provide directory name');
                            break;
                          case '4':
                          case 'cat':
                            if (args[0]) this.readFile(args[0]);
                            else console.log('❌ Please provide filename');
                            break;
                          case '5':
                          case 'rm':
                            if (args[0]) this.deleteFile(args[0]);
                            else console.log('❌ Please provide filename');
                            break;
                          case '6':
                          case 'cd':
                            if (args[0]) this.changeDirectory(args[0]);
                            else console.log('❌ Please provide directory name');
                            break;
                          case '7':
                          case 'pwd':
                            console.log(\`📍 Current directory: \${this.currentDir}\`);
                            break;
                          case '8':
                          case 'exit':
                            console.log('👋 Goodbye!');
                            this.rl.close();
                            return;
                          default:
                            console.log('❌ Invalid command!');
                            this.showMenu();
                        }
                        this.promptUser();
                      });
                    }
                  }
                  
                  const fileManager = new FileManager();
                  fileManager.start();`,
          explanation:
            "• Uses Node.js core modules (fs, path, readline).\n• Provides menu-driven CLI for file system operations.\n• Supports commands: ls, touch, mkdir, cat, rm, cd, pwd, exit.\n• Demonstrates synchronous file system operations for simplicity.",
          task:
            "Run the File Manager CLI, create a directory named 'test', inside it create a file 'hello.txt', write some text, then read it using 'cat'."
        },
        {
          title: "Beginner Mini Task 2: Simple Web Server with File Serving",
          theory:
            "This task introduces creating a basic web server in Node.js. The server can serve static files (HTML, CSS, JS, images, etc.) and handle simple API routes. It uses Node.js core modules like http, fs, path, and url.",
          code: `// web-server.js
                 const http = require('http');
                 const fs = require('fs');
                 const path = require('path');
                 const url = require('url');
                 
                 class WebServer {
                   constructor(port = 3000) {
                     this.port = port;
                     this.publicDir = path.join(__dirname, 'public');
                     this.createPublicDir();
                   }
                 
                   createPublicDir() {
                     if (!fs.existsSync(this.publicDir)) {
                       fs.mkdirSync(this.publicDir);
                       this.createSampleFiles();
                     }
                   }
                 
                   createSampleFiles() {
                     const htmlContent = \`<!DOCTYPE html>
                 <html lang="en">
                 <head>
                   <meta charset="UTF-8">
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>Node.js Web Server</title>
                   <link rel="stylesheet" href="/style.css">
                 </head>
                 <body>
                   <div class="container">
                     <h1>🚀 Welcome to Node.js Web Server!</h1>
                     <p>This is a simple web server built with Node.js</p>
                     <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="/about">About</a></li>
                       <li><a href="/contact">Contact</a></li>
                       <li><a href="/api/users">API Users</a></li>
                     </ul>
                     <div class="info">
                       <h3>Server Information:</h3>
                       <p>Port: \${this.port}</p>
                       <p>Time: <span id="time"></span></p>
                     </div>
                   </div>
                   <script src="/script.js"></script>
                 </body>
                 </html>\`;
                 
                     const cssContent = \`body {
                   font-family: Arial, sans-serif;
                   margin: 0;
                   padding: 20px;
                   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                   color: white;
                   min-height: 100vh;
                 }
                 .container {
                   max-width: 800px;
                   margin: 0 auto;
                   background: rgba(255, 255, 255, 0.1);
                   padding: 30px;
                   border-radius: 10px;
                   backdrop-filter: blur(10px);
                 }
                 h1 {
                   text-align: center;
                   margin-bottom: 30px;
                 }
                 ul {
                   list-style: none;
                   padding: 0;
                 }
                 li {
                   margin: 10px 0;
                 }
                 a {
                   color: #fff;
                   text-decoration: none;
                   padding: 10px 15px;
                   background: rgba(255, 255, 255, 0.2);
                   border-radius: 5px;
                   display: inline-block;
                   transition: all 0.3s;
                 }
                 a:hover {
                   background: rgba(255, 255, 255, 0.3);
                   transform: translateY(-2px);
                 }
                 .info {
                   margin-top: 30px;
                   padding: 20px;
                   background: rgba(0, 0, 0, 0.2);
                   border-radius: 5px;
                 }\`;
                 
                     const jsContent = \`function updateTime() {
                   const now = new Date();
                   document.getElementById('time').textContent = now.toLocaleString();
                 }
                 updateTime();
                 setInterval(updateTime, 1000);
                 console.log('🚀 Client-side JavaScript loaded!');\`;
                 
                     fs.writeFileSync(path.join(this.publicDir, 'index.html'), htmlContent);
                     fs.writeFileSync(path.join(this.publicDir, 'style.css'), cssContent);
                     fs.writeFileSync(path.join(this.publicDir, 'script.js'), jsContent);
                 
                     console.log('📁 Sample files created in public directory');
                   }
                 
                   getMimeType(filePath) {
                     const ext = path.extname(filePath).toLowerCase();
                     const mimeTypes = {
                       '.html': 'text/html',
                       '.css': 'text/css',
                       '.js': 'text/javascript',
                       '.json': 'application/json',
                       '.png': 'image/png',
                       '.jpg': 'image/jpeg',
                       '.gif': 'image/gif',
                       '.svg': 'image/svg+xml',
                       '.ico': 'image/x-icon',
                       '.txt': 'text/plain',
                       '.pdf': 'application/pdf',
                       '.zip': 'application/zip'
                     };
                     return mimeTypes[ext] || 'application/octet-stream';
                   }
                 
                   serveStaticFile(filePath, res) {
                     fs.readFile(filePath, (err, data) => {
                       if (err) {
                         res.writeHead(404, { 'Content-Type': 'text/html' });
                         res.end('<h1>404 - File Not Found</h1>');
                         return;
                       }
                       const mimeType = this.getMimeType(filePath);
                       res.writeHead(200, { 'Content-Type': mimeType });
                       res.end(data);
                     });
                   }
                 
                   handleApiRequest(pathname, res) {
                     const apiRoutes = {
                       '/api/users': {
                         users: [
                           { id: 1, name: 'Ahmad Ali', email: 'ahmad@example.com', city: 'Karachi' },
                           { id: 2, name: 'Fatima Khan', email: 'fatima@example.com', city: 'Lahore' },
                           { id: 3, name: 'Hassan Ahmed', email: 'hassan@example.com', city: 'Islamabad' }
                         ],
                         total: 3,
                         timestamp: new Date().toISOString()
                       },
                       '/api/status': {
                         status: 'OK',
                         uptime: process.uptime(),
                         memory: process.memoryUsage(),
                         version: process.version
                       }
                     };
                 
                     if (apiRoutes[pathname]) {
                       res.writeHead(200, {
                         'Content-Type': 'application/json',
                         'Access-Control-Allow-Origin': '*'
                       });
                       res.end(JSON.stringify(apiRoutes[pathname], null, 2));
                     } else {
                       res.writeHead(404, { 'Content-Type': 'application/json' });
                       res.end(JSON.stringify({ error: 'API endpoint not found' }));
                     }
                   }
                 
                   start() {
                     const server = http.createServer((req, res) => {
                       const parsedUrl = url.parse(req.url);
                       let pathname = parsedUrl.pathname;
                       console.log(\`\${req.method} \${pathname}\`);
                 
                       if (pathname.startsWith('/api/')) {
                         this.handleApiRequest(pathname, res);
                         return;
                       }
                 
                       if (pathname === '/') {
                         pathname = '/index.html';
                       }
                 
                       const filePath = path.join(this.publicDir, pathname);
                 
                       if (!filePath.startsWith(this.publicDir)) {
                         res.writeHead(403, { 'Content-Type': 'text/html' });
                         res.end('<h1>403 - Forbidden</h1>');
                         return;
                       }
                 
                       fs.access(filePath, fs.constants.F_OK, (err) => {
                         if (err) {
                           res.writeHead(404, { 'Content-Type': 'text/html' });
                           res.end(\`<h1>404 - Page Not Found</h1><p>The requested file <code>\${pathname}</code> was not found.</p><a href="/">Go back to home</a>\`);
                         } else {
                           this.serveStaticFile(filePath, res);
                         }
                       });
                     });
                 
                     server.listen(this.port, () => {
                       console.log(\`🌐 Web Server running on http://localhost:\${this.port}\`);
                       console.log(\`📁 Serving files from: \${this.publicDir}\`);
                       console.log(\`🔗 Available endpoints:\`);
                       console.log(\`   http://localhost:\${this.port}/\`);
                       console.log(\`   http://localhost:\${this.port}/api/users\`);
                       console.log(\`   http://localhost:\${this.port}/api/status\`);
                     });
                 
                     server.on('error', (error) => {
                       if (error.code === 'EADDRINUSE') {
                         console.error(\`❌ Port \${this.port} is already in use\`);
                       } else {
                         console.error('❌ Server Error:', error);
                       }
                     });
                   }
                 }
                 
                 const webServer = new WebServer(3000);
                 webServer.start();`,
          explanation:
            "• Uses Node.js core modules (http, fs, path, url).\n• Serves static files from a 'public' directory.\n• Automatically creates sample HTML, CSS, and JS files if missing.\n• Includes simple API endpoints (/api/users, /api/status).\n• Handles errors such as 404 and 403 with clear responses.",
          task:
            "Run the server and open http://localhost:3000 in your browser. Check the sample page, then test API endpoints like /api/users and /api/status."
        },
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

  // Function to safely render HTML
  const createMarkup = () => {
    return { __html: htmlContent[activeLevel].topics[activeTopicIndex].theory };
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

export default NodeNotesPage;
