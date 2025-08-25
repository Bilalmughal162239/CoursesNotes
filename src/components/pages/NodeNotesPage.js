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
          theory: `<p><strong>File System (fs) module</strong> is a core Node.js module used to work with files and directories. It provides synchronous, asynchronous(callback),       and promises-based methods.</p>
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
      title: "Intermediate Level Node Js",
      topics: [
        {
          title: "Express.js Framework",
          theory: `
Express.js is a fast, unopinionated, and minimalist web framework for Node.js. 
It provides a robust set of features for building web and mobile applications, including:
- Routing
- Middleware support
- Template engines
- Static file serving
- Error handling
It allows developers to create RESTful APIs and web servers efficiently with minimal code.
`,
          code: `
// Basic Express Setup:
// express-basic.js
const express = require('express');
const path = require('path');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Express.js!',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

app.get('/about', (req, res) => {
    res.json({
        app: 'Node.js Learning App',
        description: 'Complete Express.js tutorial',
        author: 'Your Name',
        features: [
            'RESTful API',
            'Middleware support',
            'Static file serving',
            'Error handling'
        ]
    });
});

// Route with parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = {
        id: userId,
        name: \`User \${userId}\`,
        email: \`user\${userId}@example.com\`,
        createdAt: new Date().toISOString()
    };
    
    res.json({
        success: true,
        data: user
    });
});

// Route with query parameters
app.get('/search', (req, res) => {
    const { q, category, limit = 10, page = 1 } = req.query;
    
    res.json({
        query: q,
        category: category,
        pagination: {
            limit: parseInt(limit),
            page: parseInt(page),
            offset: (page - 1) * limit
        },
        results: [
            { id: 1, title: \`Result for "\${q}"\`, category },
            { id: 2, title: \`Another result for "\${q}"\`, category }
        ]
    });
});

// POST route
app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required',
            received: req.body
        });
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        age: age || null,
        createdAt: new Date().toISOString()
    };
    
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
});

// PUT route (update)
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    
    const updatedUser = {
        id: userId,
        ...updateData,
        updatedAt: new Date().toISOString()
    };
    
    res.json({
        success: true,
        message: 'User updated successfully',
        data: updatedUser
    });
});

// DELETE route
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    
    res.json({
        success: true,
        message: \`User \${userId} deleted successfully\`,
        deletedAt: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        method: req.method,
        url: req.originalUrl,
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Error:', error);
    
    res.status(error.status || 500).json({
        error: 'Internal Server Error',
        message: error.message,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(\`🚀 Express server running on http://localhost:\${PORT}\`);
    console.log(\`📝 Available routes:\`);
    console.log(\`   GET  /\`);
    console.log(\`   GET  /about\`);
    console.log(\`   GET  /users/:id\`);
    console.log(\`   GET  /search?q=term&category=type\`);
    console.log(\`   POST /users\`);
    console.log(\`   PUT  /users/:id\`);
    console.log(\`   DELETE /users/:id\`);
});

module.exports = app;
`,
          explanation: `
1. Import express and path modules to create the server and serve static files.
2. Create an Express application instance with express().
3. Use middleware for parsing JSON and URL-encoded payloads with express.json() and express.urlencoded().
4. Serve static files from a public folder using express.static().
5. Define basic GET routes for '/', '/about', and dynamic routes like '/users/:id'.
6. Use query parameters in the '/search' route to filter results and paginate.
7. Handle POST, PUT, and DELETE requests to create, update, and delete users.
8. Add a 404 handler for undefined routes.
9. Add an error-handling middleware for catching and responding to server errors.
10. Start the server on a specified PORT and log available routes.
`,
          task: `
Mini Task:
1. Create a new Express route '/contact' that accepts GET requests and returns your contact info (name, email, phone) in JSON.
2. Extend the '/users' POST route to include a 'role' field (e.g., 'admin', 'user') and return it in the response.
3. Test all routes using Postman or curl to ensure proper request handling.
`

        },
        {
          title: "Express Router",
          theory: `
Express Router is a powerful feature of Express.js that allows you to organize your routes into modular, mountable route handlers. 
It helps in keeping your codebase clean and maintainable, especially in large applications. Key points:
- Each router can have its own middleware.
- Routers can be mounted on paths (e.g., '/api/users').
- Supports all HTTP methods (GET, POST, PUT, DELETE, etc.).
- Can handle route parameters and query parameters.
- Facilitates separation of concerns by grouping related routes together.
`,
          code: `
// Express Router Example:
// routes/users.js
const express = require('express');
const router = express.Router();

// Sample data
let users = [
    { id: 1, name: 'Ahmad Ali', email: 'ahmad@example.com', age: 25, city: 'Karachi' },
    { id: 2, name: 'Fatima Khan', email: 'fatima@example.com', age: 28, city: 'Lahore' },
    { id: 3, name: 'Hassan Ahmed', email: 'hassan@example.com', age: 30, city: 'Islamabad' }
];

// Middleware for this router
router.use((req, res, next) => {
    console.log(\`Users Route: \${req.method} \${req.path}\`);
    next();
});

// GET /api/users - Get all users with pagination and filters
router.get('/', (req, res) => {
    const { page = 1, limit = 10, city, age } = req.query;
    let filteredUsers = users;

    if (city) filteredUsers = filteredUsers.filter(u => u.city.toLowerCase().includes(city.toLowerCase()));
    if (age) filteredUsers = filteredUsers.filter(u => u.age >= parseInt(age));

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    res.json({
        success: true,
        data: paginatedUsers,
        pagination: {
            current: parseInt(page),
            limit: parseInt(limit),
            total: filteredUsers.length,
            pages: Math.ceil(filteredUsers.length / limit)
        },
        filters: { city, age }
    });
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ success: false, error: 'User not found', id: req.params.id });
    res.json({ success: true, data: user });
});

// POST /api/users - Create new user
router.post('/', (req, res) => {
    const { name, email, age, city } = req.body;
    const errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
   // eslint-disable-next-line no-useless-escape
    if (age && (age < 0 || age > 120)) errors.push('Age must be between 0 and 120');
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    if (users.find(u => u.email === email)) return res.status(409).json({ success: false, error: 'Email already exists' });

    const newUser = { id: Math.max(...users.map(u => u.id)) + 1, name, email, age: age || null, city: city || null, createdAt: new Date().toISOString() };
    users.push(newUser);
    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return res.status(404).json({ success: false, error: 'User not found' });

    const { name, email, age, city } = req.body;
    const errors = [];
const emailRegex = new RegExp('\\S+@\\S+\\.\\S+');
if (email && !emailRegex.test(email)) {
  errors.push('Invalid email format');
}
    if (age && (age < 0 || age > 120)) errors.push('Age must be between 0 and 120');
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    if (email && users.find(u => u.email === email && u.id !== userId)) return res.status(409).json({ success: false, error: 'Email already exists' });

    users[index] = { ...users[index], ...(name && { name }), ...(email && { email }), ...(age !== undefined && { age }), ...(city && { city }), updatedAt: new Date().toISOString() };
    res.json({ success: true, message: 'User updated successfully', data: users[index] });
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ success: false, error: 'User not found' });
    const deletedUser = users.splice(index, 1)[0];
    res.json({ success: true, message: 'User deleted successfully', data: deletedUser });
});

// GET /api/users/:id/profile - Extended user profile
router.get('/:id/profile', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    const profile = {
        ...user,
        profileViews: Math.floor(Math.random() * 1000),
        lastLogin: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        isOnline: Math.random() > 0.5,
        preferences: { theme: 'light', language: 'en', notifications: true }
    };

    res.json({ success: true, data: profile });
});

module.exports = router;
`,
          explanation: `
1. Create an Express Router instance with express.Router().
2. Define routes for CRUD operations (GET, POST, PUT, DELETE) for 'users'.
3. Add middleware specific to this router to log requests.
4. Implement query filtering (city, age) and pagination in GET routes.
5. Validate POST and PUT requests for required fields and correct formats.
6. Handle conflicts such as duplicate emails and return proper HTTP status codes (400, 404, 409).
7. Include extended routes like '/:id/profile' for enriched user data.
8. Export the router and mount it in the main app (e.g., app.use('/api/users', usersRouter)).
`,
          task: `
Mini Task:
1. Create a new router 'routes/products.js' for product management with GET, POST, PUT, DELETE routes.
2. Implement filtering products by category and price range in the GET route.
3. Mount the products router in the main app at '/api/products' and test with Postman.
`

        },
        {
          title: "Express Main App with Router",
          theory: `
In a large Express.js application, it is best practice to organize routes using Express Routers and a main application file. 
The main app handles:
- Middleware (security, logging, CORS, parsing)
- Mounting routers for modular route management
- Global error handling
- Health checks and API documentation
- Graceful shutdown of the server
This approach improves maintainability, scalability, and separation of concerns.
`,
          code: `
// Main App with Router Example:
// app-with-router.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import routes
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Custom middleware for request timing
app.use((req, res, next) => {
    req.startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - req.startTime;
        console.log(\`\${req.method} \${req.path} - \${res.statusCode} - \${duration}ms\`);
    });
    next();
});

// API routes
app.use('/api/users', usersRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.version
    });
});

// API documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'Node.js Learning API',
        version: '1.0.0',
        endpoints: {
            users: {
                'GET /api/users': 'Get all users with pagination and filters',
                'GET /api/users/:id': 'Get user by ID',
                'POST /api/users': 'Create new user',
                'PUT /api/users/:id': 'Update user',
                'DELETE /api/users/:id': 'Delete user',
                'GET /api/users/:id/profile': 'Get user profile'
            },
            system: {
                'GET /health': 'Health check',
                'GET /api': 'API documentation'
            }
        },
        examples: {
            createUser: {
                method: 'POST',
                url: '/api/users',
                body: {
                    name: 'John Doe',
                    email: 'john@example.com',
                    age: 25,
                    city: 'Karachi'
                }
            },
            getUsers: {
                method: 'GET',
                url: '/api/users?page=1&limit=5&city=Lahore&age=25'
            }
        }
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        method: req.method,
        path: req.originalUrl,
        availableEndpoints: [
            'GET /api',
            'GET /health',
            'GET /api/users',
            'POST /api/users'
        ]
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global Error Handler:', error);

    if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(e => e.message);
        return res.status(400).json({ success: false, error: 'Validation Error', details: errors });
    }

    if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ success: false, error: 'Invalid token' });
    }

    res.status(error.status || 500).json({
        success: false,
        error: error.message || 'Internal Server Error',
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown
process.on('SIGTERM', () => { console.log('SIGTERM received. Shutting down gracefully...'); process.exit(0); });
process.on('SIGINT', () => { console.log('SIGINT received. Shutting down gracefully...'); process.exit(0); });

// Start server
app.listen(PORT, () => {
    console.log(\`🚀 Express server running on http://localhost:\${PORT}\`);
    console.log(\`📚 API documentation: http://localhost:\${PORT}/api\`);
    console.log(\`💚 Health check: http://localhost:\${PORT}/health\`);
    console.log(\`👥 Users API: http://localhost:\${PORT}/api/users\`);
});

module.exports = app;
`,
          explanation: `
1. Import necessary modules (express, cors, helmet, morgan) for server setup, security, logging, and CORS.
2. Mount the users router to '/api/users'.
3. Use global middlewares: security (helmet), CORS, body parsing, logging (morgan), and custom request timing.
4. Provide system routes: '/health' for server health, '/api' for API documentation.
5. Implement a 404 handler for undefined endpoints.
6. Global error handler manages validation errors, JWT errors, and defaults to 500 Internal Server Error.
7. Graceful shutdown ensures proper cleanup on SIGTERM or SIGINT signals.
8. Start the Express server and log important endpoints for reference.
`,
          task: `
Mini Task:
1. Add a new router for 'products' (routes/products.js) and mount it at '/api/products'.
2. Implement filtering and pagination for products similar to users.
3. Add a new endpoint '/metrics' to return server metrics like request count, average response time, and uptime.
`
        },
        {
          title: "Express Middleware Concepts",
          theory: `
Middleware in Express.js are functions that have access to the request (req), response (res), and next middleware in the request-response cycle. 
They are used for:
- Logging requests
- Authentication and authorization
- Validation of input data
- Rate limiting
- Caching responses
- Adding request IDs
- Custom CORS handling
- Error handling
- Measuring response time
Middleware can be global (applied to all routes) or route-specific.
`,
          code: `
// middleware/index.js

// 1. Logging Middleware
const requestLogger = (req, res, next) => { ... };

// 2. Authentication Middleware
const authenticate = (req, res, next) => { ... };

// 3. Authorization Middleware (Role-based)
const authorize = (...roles) => { return (req, res, next) => { ... }; };

// 4. Rate Limiting Middleware
const rateLimit = (windowMs = 15 * 60 * 1000, max = 100) => { return (req, res, next) => { ... }; };

// 5. Validation Middleware
const validate = (schema) => { return (req, res, next) => { ... }; };

// 6. Cache Middleware
const cache = (duration = 300) => { return (req, res, next) => { ... }; };

// 7. Request ID Middleware
const requestId = (req, res, next) => { ... };

// 8. Custom CORS Middleware
const customCors = (options = {}) => { return (req, res, next) => { ... }; };

// 9. Error Handling Middleware
const errorHandler = (req, res, next) => { return (error) => { ... }; };

// 10. Response Time Middleware
const responseTime = (req, res, next) => { ... };

module.exports = {
    requestLogger,
    authenticate,
    authorize,
    rateLimit,
    validate,
    cache,
    requestId,
    customCors,
    errorHandler,
    responseTime
};
`,
          explanation: `
1. requestLogger: Logs method, URL, IP, and body of POST/PUT/PATCH requests.
2. authenticate: Checks for a token (e.g., JWT) and attaches user info to req.user.
3. authorize: Ensures the user has one of the allowed roles.
4. rateLimit: Limits the number of requests from a single IP within a time window.
5. validate: Validates request body against a schema (e.g., Joi) and passes validatedData.
6. cache: Caches GET responses for specified duration; sets X-Cache header.
7. requestId: Generates a unique ID for each request and sets it in the response header.
8. customCors: Handles CORS headers and preflight OPTIONS requests with customizable options.
9. errorHandler: Logs errors with requestId, stack trace, and sends structured error response.
10. responseTime: Measures request duration, sets X-Response-Time header, and logs slow requests.
`,
          task: `
Mini Tasks:
1. Apply requestLogger, requestId, and responseTime middleware globally in your Express app.
2. Protect routes using authenticate and authorize middleware (e.g., only 'admin' can delete users).
3. Implement rate limiting for sensitive endpoints like '/api/login'.
4. Add caching for GET '/api/users' route using cache middleware.
5. Create a Joi schema for user creation and use validate middleware on POST '/api/users'.
6. Test customCors middleware by sending requests from different origins.
7. Simulate an error in a route and test errorHandler middleware.
`
        },
        {
          title: "MongoDB Connection Setup and Configuration",
          theory: "MongoDB connection setup is crucial for any Node.js application. The Database class provides a singleton pattern for managing MongoDB connections with Mongoose. It includes connection options for performance optimization, event listeners for monitoring connection status, and methods for graceful connection management.",
          code: `// config/database.js
const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }
    
    async connect(uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeapp') {
        try {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
                bufferCommands: false
            };
            
            this.connection = await mongoose.connect(uri, options);
            
            console.log('✅ MongoDB connected successfully');
            console.log(\`📊 Database: \${this.connection.connection.name}\`);
            
            // Connection event listeners
            mongoose.connection.on('error', (error) => {
                console.error('❌ MongoDB connection error:', error);
            });
            
            mongoose.connection.on('disconnected', () => {
                console.warn('⚠️ MongoDB disconnected');
            });
            
            return this.connection;
        } catch (error) {
            console.error('❌ MongoDB connection failed:', error.message);
            process.exit(1);
        }
    }
    
    async disconnect() {
        try {
            await mongoose.connection.close();
            console.log('👋 MongoDB disconnected');
        } catch (error) {
            console.error('❌ Error disconnecting from MongoDB:', error);
        }
    }
    
    getConnectionStatus() {
        const states = {
            0: 'disconnected',
            1: 'connected',
            2: 'connecting',
            3: 'disconnecting'
        };
        
        return {
            status: states[mongoose.connection.readyState],
            host: mongoose.connection.host,
            port: mongoose.connection.port,
            name: mongoose.connection.name
        };
    }
}

module.exports = new Database();`,
          explanation: "This Database class provides a centralized way to manage MongoDB connections. It includes connection options for performance tuning, error handling, and connection status monitoring. The singleton pattern ensures only one connection instance exists throughout the application.",
          task: "Create a MongoDB connection class with connection pooling, timeout settings, and connection status monitoring."
        },
        {
          title: "Data Modeling with Mongoose Schemas",
          theory: "Mongoose schemas define the structure of documents in MongoDB collections. The User and Product models demonstrate comprehensive schema design with validation, indexes, virtuals, and custom methods. These schemas include data validation, relationships, and business logic encapsulation.",
          code: `// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\\S+@\\S+\\.\\S+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [120, 'Age cannot exceed 120']
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for better performance
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Instance method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);`,
          explanation: "Mongoose schemas provide structure, validation, and business logic for MongoDB documents. The User model includes field validation, indexes for performance, virtual properties, pre-save middleware for password hashing, and custom instance methods for authentication.",
          task: "Design a Mongoose schema with validation, indexes, virtual properties, and custom methods."
        },
        {
          title: "Service Layer for Business Logic",
          theory: "The service layer separates business logic from route handlers, promoting cleaner code organization and reusability. UserService and ProductService classes encapsulate all database operations, providing a clean API for controllers to interact with data models.",
          code: `// services/userService.js
const User = require('../models/User');

class UserService {
    // Create new user
    async createUser(userData) {
        try {
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                throw new Error('User with this email already exists');
            }
            
            const user = new User(userData);
            await user.save();
            
            const userObject = user.toObject();
            delete userObject.password;
            
            return userObject;
        } catch (error) {
            throw error;
        }
    }
    
    // Get user by ID
    async getUserById(userId) {
        try {
            const user = await User.findById(userId).select('-password');
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
    
    // Get all users with pagination
    async getUsers(options = {}) {
        try {
            const { page = 1, limit = 10 } = options;
            
            const skip = (page - 1) * limit;
            const users = await User.find()
                .select('-password')
                .skip(skip)
                .limit(parseInt(limit));
            
            const total = await User.countDocuments();
            
            return {
                users,
                pagination: {
                    current: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw error;
        }
    }
    
    // Authenticate user
    async authenticateUser(email, password) {
        try {
            const user = await User.findOne({ email }).select('+password');
            
            if (!user) {
                throw new Error('Invalid email or password');
            }
            
            const isPasswordValid = await user.comparePassword(password);
            
            if (!isPasswordValid) {
                throw new Error('Invalid email or password');
            }
            
            const userObject = user.toObject();
            delete userObject.password;
            
            return userObject;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();`,
          explanation: "The service layer encapsulates all business logic and database operations. It provides methods for CRUD operations, authentication, and complex queries. This separation of concerns makes the code more maintainable and testable.",
          task: "Implement a service layer that handles database operations and business logic for a data model."
        },
        {
          title: "RESTful API Integration with Express",
          theory: "The Express application integrates all components to create a fully functional RESTful API. It includes middleware for security, logging, and error handling, along with route handlers that use the service layer to process requests and return responses.",
          code: `// app.js
const express = require('express');
const database = require('./config/database');
const userService = require('./services/userService');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
database.connect();

// Middleware
app.use(express.json());

// User Routes
app.get('/api/users', async (req, res) => {
    try {
        const result = await userService.getUsers(req.query);
        res.json({
            success: true,
            data: result.users,
            pagination: result.pagination
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message
        });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Authentication Routes
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.authenticateUser(email, password);
        
        res.json({
            success: true,
            message: 'Login successful',
            data: user
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            error: error.message
        });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (error.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: 'Validation Error'
        });
    }
    
    res.status(500).json({
        success: false,
        error: 'Internal Server Error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
});

module.exports = app;`,
          explanation: "The Express app brings together all components: database connection, models, and services. It defines RESTful endpoints that use the service layer to handle requests. Error handling middleware catches and processes different types of errors appropriately.",
          task: "Create an Express application with RESTful endpoints that use a service layer for database operations."
        }
      ]
    },
  };

  const finalProject = {
  title: "Final Project: Restaurant Website (Node.js + Express)",
  description:
    "Back-end for the restaurant website using Node.js and Express. Includes server-side rendering/APIs, form handling, validation, and deployment readiness.",

  requirements: [
    "Use Express with MVC structure (routes, controllers, models, views)",
    "ENV-based config with dotenv",
    "Templating (EJS/Handlebars) OR pure REST APIs with a frontend",
    "Static files for CSS/Images served efficiently",
    "Forms: Contact & Reservation with server-side validation",
    "Email notifications (e.g., Nodemailer) for contact/reservations",
    "Basic authentication for admin (login/logout, protected routes)",
    "Menu data from DB (MongoDB/Mongoose) or JSON fallback",
    "Error handling middleware + 404/500 pages",
    "Logging (morgan) and security headers (helmet)",
    "SEO-friendly server-side rendered pages (if using EJS)"
  ],

  structure: `restaurant-node/
├── package.json
├── .env                         (PORT=, MONGODB_URI=, SMTP creds)
├── server.js                    (app bootstrap)
├── src/
│   ├── config/
│   │   └── db.js                (mongoose connect)
│   ├── models/
│   │   ├── MenuItem.js
│   │   └── Reservation.js
│   ├── controllers/
│   │   ├── page.controller.js   (home, menu, about, contact)
│   │   ├── reservation.controller.js
│   │   └── auth.controller.js
│   ├── routes/
│   │   ├── page.routes.js
│   │   ├── reservation.routes.js
│   │   └── auth.routes.js
│   ├── middleware/
│   │   ├── auth.js              (protect routes)
│   │   └── errorHandler.js
│   ├── services/
│   │   └── mail.service.js      (Nodemailer)
│   ├── utils/
│   │   └── validators.js        (express-validator schemas)
│   └── views/                   (if SSR)
│       ├── layouts/
│       │   └── main.ejs
│       ├── pages/
│       │   ├── index.ejs
│       │   ├── menu.ejs
│       │   ├── about.ejs
│       │   ├── contact.ejs
│       │   ├── reservation.ejs
│       │   ├── 404.ejs
│       │   └── 500.ejs
│       └── partials/
│           ├── header.ejs
│           └── footer.ejs
├── public/
│   ├── css/                     (styles.css or build output)
│   ├── js/                      (client scripts)
│   └── images/                  (logo, hero, dishes)
└── README.md`,

  api_endpoints: [
    "GET /                -> Home page (SSR) or API status",
    "GET /menu            -> Menu page (SSR) or GET /api/menu",
    "GET /about           -> About page",
    "GET /contact         -> Contact page",
    "GET /reservation     -> Reservation page",
    "POST /api/contact    -> Send message (Nodemailer)",
    "POST /api/reservations -> Create reservation (validation + save)",
    "GET /api/reservations (admin) -> List reservations (protected)",
    "POST /api/auth/login -> Admin login (session/JWT)",
    "POST /api/auth/logout -> Logout"
  ],

  tech_stack: [
    "Node.js, Express",
    "EJS (or Handlebars/Pug) for SSR OR pure REST + frontend",
    "MongoDB + Mongoose (or JSON for demo)",
    "Nodemailer for emails",
    "express-validator, helmet, morgan, cookie-session/JWT"
  ],

  scripts_example: {
    dev: "nodemon server.js",
    start: "node server.js",
    lint: "eslint .",
    "seed:menu": "node scripts/seedMenu.js"
  },

  validation_examples: [
    "Name: required, 2–50 chars",
    "Email: valid email",
    "Phone: optional but normalized",
    "Date/Time: required, future time",
    "Guests: integer 1–12",
    "Message: max 500 chars"
  ],

  bonus: [
    "Admin dashboard to manage menu & reservations (CRUD)",
    "Image upload for dishes (multer + cloud storage)",
    "Rate limiting for POST routes",
    "Global i18n (e.g., i18next)",
    "Dockerfile + docker-compose for dev",
    "CI workflow (lint/test) and one-click deploy (Railway/Render/Vercel serverless)"
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
