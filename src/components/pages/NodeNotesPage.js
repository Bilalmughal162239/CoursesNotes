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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <h1 class="text-3xl font-bold text-indigo-600">What is Node.js?</h1>
  <p class="text-gray-700 leading-relaxed">
    Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It is used for building server-side applications.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">Key Features:</h3>
  <ul class="list-disc pl-6 text-gray-700 space-y-2">
    <li>Asynchronous & Event-driven: Non-blocking I/O operations</li>
    <li>Single-threaded: Event loop mechanism</li>
    <li>Cross-platform: Windows, Mac, Linux</li>
    <li>NPM: Largest package ecosystem</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">Installation Steps:</h3>
  <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
# Step 1: Download Node.js from 
<a href="https://nodejs.org" target="_blank" class="text-blue-600 underline">nodejs.org</a>
# Step 2: After installation verify
node --version
npm --version

# Step 3: Create your first project
mkdir my-node-app
cd my-node-app
  </pre>

  <h3 class="text-2xl font-semibold text-indigo-500">Your First Node.js Program:</h3>
  <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
// app.js
console.log("Hello World from Node.js!");
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);

// To run in terminal:
// node app.js
  </pre>

  <h3 class="text-2xl font-semibold text-indigo-500">Output:</h3>
  <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
Hello World from Node.js!
Node.js version: v18.17.0
Platform: win32
  </pre>

</div>
`,
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <h3 class="text-2xl font-semibold text-indigo-500">Variables & Data Types</h3>
  <p class="text-gray-700 leading-relaxed">
    In JavaScript, there are three types of variables: 
    <code class="bg-gray-100 px-1 rounded text-sm text-red-600">var</code>, 
    <code class="bg-gray-100 px-1 rounded text-sm text-red-600">let</code>, and 
    <code class="bg-gray-100 px-1 rounded text-sm text-red-600">const</code>. 
    Data types include primitive types (string, number, boolean, null, undefined, symbol, bigint) and non-primitive types (objects, arrays, functions).
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">Functions in Node.js</h3>
  <p class="text-gray-700 leading-relaxed">
    Functions are used for code reuse. In Node.js, regular functions, arrow functions, and async functions are commonly used.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">Promises & Async/Await</h3>
  <p class="text-gray-700 leading-relaxed">
    Promises and Async/Await are used to handle asynchronous operations. 
    They allow non-blocking behavior, which is a core feature of Node.js.
  </p>

</div>
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <p class="text-gray-700 leading-relaxed">
    Node.js has several <strong class="text-indigo-600 font-semibold">built-in core modules</strong> 
    that can be used directly without installation. These modules are used for system-level tasks 
    such as file handling, path management, operating system info, URL parsing, and more.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">1. Path Module</h3>
  <p class="text-gray-700 leading-relaxed">
    The Path module is used to work with file and directory paths.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">2. OS Module</h3>
  <p class="text-gray-700 leading-relaxed">
    The OS module is used to retrieve information about the operating system (CPU, memory, platform, uptime, etc.).
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">3. URL Module</h3>
  <p class="text-gray-700 leading-relaxed">
    The URL module is used to parse, manipulate, and construct URL strings.
  </p>

</div>
`,
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">File System (fs) module</strong> is a core Node.js module 
    used to work with files and directories. It provides synchronous, asynchronous (callback), 
    and promises-based methods.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">1. Reading Files</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><strong>Synchronous:</strong> Blocking, execution waits until reading is complete.</li>
    <li><strong>Asynchronous (Callback):</strong> Non-blocking, result received via callback.</li>
    <li><strong>Promises/Async-Await:</strong> Modern and clean way to handle asynchronous file operations.</li>
    <li><strong>Check if file exists:</strong> Use <code class="bg-gray-200 px-1 rounded">fs.existsSync</code>.</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">2. Writing Files</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><strong>writeFile:</strong> Writes new data to a file (overwrites existing content).</li>
    <li><strong>appendFile:</strong> Adds data to an existing file.</li>
    <li><strong>writeFileSync:</strong> Synchronous file writing.</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">3. Directory Operations</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><strong>mkdirSync:</strong> Create a new directory.</li>
    <li><strong>readdirSync:</strong> Read contents of a directory.</li>
    <li><strong>rmSync:</strong> Delete a directory.</li>
    <li><strong>watchFile:</strong> Monitor file changes.</li>
  </ul>

</div>
`,
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">HTTP module</strong> is a built-in Node.js module used 
    to create servers and handle HTTP requests.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">1. Basic HTTP Server</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><strong>http.createServer:</strong> Creates a server that handles requests.</li>
    <li><strong>req.url:</strong> The requested path from the client.</li>
    <li><strong>req.method:</strong> Request method (GET, POST, PUT, DELETE).</li>
    <li><strong>res.setHeader:</strong> Set response headers.</li>
    <li><strong>res.end:</strong> Send response back to the client.</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">2. Routing</h3>
  <p class="text-gray-700 leading-relaxed">
    You can create routes by writing conditions for different 
    <strong class="text-indigo-600">paths and methods</strong> (e.g., '/', '/about', '/users').
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">3. HTTP Client</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><strong>http/https modules:</strong> Used to make GET and POST requests.</li>
    <li><strong>http.get:</strong> Simple GET request.</li>
    <li><strong>http.request:</strong> Advanced requests (e.g., POST with body data).</li>
  </ul>

</div>
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">NPM (Node Package Manager)</strong> is the default package manager for Node.js, 
    used to install, update, and manage dependencies.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">1. Project Initialization</h3>
  <pre class="bg-gray-200 p-4 rounded-md overflow-x-auto"><code>npm init -y</code></pre>
  <p class="text-gray-700 leading-relaxed">
    This command creates a <strong class="text-indigo-600 font-semibold">package.json</strong> file that tracks project metadata and dependencies.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">2. Package Installation</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><code>npm install express</code> → Adds an application dependency.</li>
    <li><code>npm install --save-dev nodemon</code> → Adds a development dependency.</li>
    <li><code>npm install -g pm2</code> → Installs a package globally (system-wide).</li>
    <li><code>npm install express@4.18.0</code> → Installs a specific version of a package.</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">3. Package Management</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li><code>npm update</code> → Updates packages to the latest compatible version.</li>
    <li><code>npm uninstall express</code> → Removes a dependency.</li>
  </ul>

  <h3 class="text-2xl font-semibold text-indigo-500">4. package.json Example</h3>
  <p class="text-gray-700 leading-relaxed">
    This file defines dependencies, scripts, and project information.
  </p>

  <h3 class="text-2xl font-semibold text-indigo-500">5. Environment Variables</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>The <code>dotenv</code> package is used to store sensitive information (DB URL, API keys, JWT secrets) in a separate <code>.env</code> file.</li>
    <li>For central configuration, a <code>config.js</code> file is used.</li>
  </ul>

</div>
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    This task introduces basic <strong class="text-indigo-600 font-semibold">Node.js file system operations</strong> with a <strong class="text-indigo-600 font-semibold">command-line interface (CLI)</strong>.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It covers <strong class="text-indigo-600 font-semibold">creating, reading, deleting files</strong>, and <strong class="text-indigo-600 font-semibold">navigating directories</strong> using Node.js core modules like <code class="bg-gray-100 text-indigo-600 px-1 rounded">fs</code>, <code class="bg-gray-100 text-indigo-600 px-1 rounded">path</code>, and <code class="bg-gray-100 text-indigo-600 px-1 rounded">readline</code>.
  </p>

</div>
`,
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    This task introduces <strong class="text-indigo-600 font-semibold">creating a basic web server</strong> in Node.js.
  </p>

  <p class="text-gray-700 leading-relaxed">
    The server can serve <strong class="text-indigo-600 font-semibold">static files</strong> like HTML, CSS, JS, images, etc., and handle simple <strong class="text-indigo-600 font-semibold">API routes</strong>.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It uses Node.js core modules such as <code class="bg-gray-100 text-indigo-600 px-1 rounded">http</code>, <code class="bg-gray-100 text-indigo-600 px-1 rounded">fs</code>, <code class="bg-gray-100 text-indigo-600 px-1 rounded">path</code>, and <code class="bg-gray-100 text-indigo-600 px-1 rounded">url</code>.
  </p>

</div>
`,
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">Express.js</strong> is a fast, unopinionated, and minimalist web framework for Node.js.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It provides a robust set of features for building web and mobile applications, including:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Routing</li>
    <li>Middleware support</li>
    <li>Template engines</li>
    <li>Static file serving</li>
    <li>Error handling</li>
  </ul>

  <p class="text-gray-700 leading-relaxed">
    It allows developers to create RESTful APIs and web servers efficiently with minimal code.
  </p>

</div>
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">Express Router</strong> is a powerful feature of Express.js that allows you to organize your routes into modular, mountable route handlers.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It helps in keeping your codebase clean and maintainable, especially in large applications. Key points:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Each router can have its own middleware.</li>
    <li>Routers can be mounted on paths (e.g., '/api/users').</li>
    <li>Supports all HTTP methods (GET, POST, PUT, DELETE, etc.).</li>
    <li>Can handle route parameters and query parameters.</li>
    <li>Facilitates separation of concerns by grouping related routes together.</li>
  </ul>

</div>
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    In a large <strong class="text-indigo-600 font-semibold">Express.js</strong> application, it is best practice to organize routes using Express Routers and a main application file.
  </p>

  <p class="text-gray-700 leading-relaxed">
    The main app handles:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Middleware (security, logging, CORS, parsing)</li>
    <li>Mounting routers for modular route management</li>
    <li>Global error handling</li>
    <li>Health checks and API documentation</li>
    <li>Graceful shutdown of the server</li>
  </ul>

  <p class="text-gray-700 leading-relaxed">
    This approach improves maintainability, scalability, and separation of concerns.
  </p>

</div>
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
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">Middleware</strong> in Express.js are functions that have access to the <code class="bg-gray-200 px-1 rounded">request (req)</code>, <code class="bg-gray-200 px-1 rounded">response (res)</code>, and next middleware in the request-response cycle.
  </p>

  <p class="text-gray-700 leading-relaxed">
    They are used for:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Logging requests</li>
    <li>Authentication and authorization</li>
    <li>Validation of input data</li>
    <li>Rate limiting</li>
    <li>Caching responses</li>
    <li>Adding request IDs</li>
    <li>Custom CORS handling</li>
    <li>Error handling</li>
    <li>Measuring response time</li>
  </ul>

  <p class="text-gray-700 leading-relaxed">
    Middleware can be <span class="font-semibold">global</span> (applied to all routes) or <span class="font-semibold">route-specific</span>.
  </p>

</div>
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">MongoDB connection setup</strong> is crucial for any Node.js application.
  </p>

  <p class="text-gray-700 leading-relaxed">
    The <code class="bg-gray-200 px-1 rounded">Database</code> class provides a <span class="font-semibold text-indigo-600">singleton pattern</span> for managing MongoDB connections with <code class="bg-gray-200 px-1 rounded">Mongoose</code>.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It includes:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Connection options for performance optimization</li>
    <li>Event listeners for monitoring connection status</li>
    <li>Methods for graceful connection management</li>
  </ul>

</div>
`,
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    <strong class="text-indigo-600 font-semibold">Mongoose schemas</strong> define the structure of documents in MongoDB collections.
  </p>

  <p class="text-gray-700 leading-relaxed">
    The <code class="bg-gray-200 px-1 rounded">User</code> and <code class="bg-gray-200 px-1 rounded">Product</code> models demonstrate comprehensive schema design with validation, indexes, virtuals, and custom methods.
  </p>

  <p class="text-gray-700 leading-relaxed">
    These schemas include:
  </p>

  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Data validation</li>
    <li>Relationships between collections</li>
    <li>Business logic encapsulation</li>
  </ul>

</div>
`,
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    The <strong class="text-indigo-600 font-semibold">service layer</strong> separates business logic from route handlers, promoting cleaner code organization and reusability.
  </p>

  <p class="text-gray-700 leading-relaxed">
    <code class="bg-gray-200 px-1 rounded">UserService</code> and <code class="bg-gray-200 px-1 rounded">ProductService</code> classes encapsulate all database operations, providing a clean API for controllers to interact with data models.
  </p>

</div>
`,
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
          theory: `
<div class="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">

  <p class="text-gray-700 leading-relaxed">
    The <strong class="text-indigo-600 font-semibold">Express application</strong> integrates all components to create a fully functional <strong class="text-indigo-600 font-semibold">RESTful API</strong>.
  </p>

  <p class="text-gray-700 leading-relaxed">
    It includes <strong class="text-indigo-600 font-semibold">middleware</strong> for security, logging, and error handling, along with <strong class="text-indigo-600 font-semibold">route handlers</strong> that use the service layer to process requests and return responses.
  </p>

</div>
`,
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
    advanced: {
      title: "Advance Level Node js",
      topics: [
        {
          title: 'Advanced Express Features',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Router-Level Middleware</h2>
    <p class="text-gray-700 mb-4">
      Middleware that runs only for specific routes or routers. Useful for tasks like authentication, logging, or validation on a particular route group.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const express = require('express');
const app = express();
const router = express.Router();

// Middleware runs for all /admin routes
router.use((req, res, next) => {
  console.log('Admin route accessed');
  next();
});

// Routes
router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

app.use('/admin', router);

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Error-Handling Middleware</h2>
    <p class="text-gray-700 mb-4">
      Centralized error handling middleware catches and manages application errors gracefully.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>app.get('/error', (req, res, next) => {
  try {
    throw new Error('Something went wrong!');
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Advanced Routing Techniques</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Route Parameters:</strong> dynamic parts of URL, accessed via <code>req.params</code>.</li>
      <li><strong>Optional Parameters:</strong> parameters that may or may not be present in the route.</li>
      <li><strong>Regex Routes:</strong> routes matching pattern via regular expressions.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Route parameter
app.get('/user/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

// Optional parameter
app.get('/order/:id?', (req, res) => {
  res.send(req.params.id ? \`Order: \${req.params.id}\` : 'All Orders');
});

// Regex route
app.get(/a/, (req, res) => {
  res.send('Route contains letter "a"');
});</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Modular App Structure</h2>
    <p class="text-gray-700 mb-4">
      Organize routes, middleware, and controllers in separate files for maintainability.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>project/
├── app.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
└── middleware/
    └── auth.js
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Third-Party Middleware</h2>
    <p class="text-gray-700 mb-4">
      Common middleware to add functionality easily.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Example: Complete Advanced Express App</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());

// Route-level middleware for '/api' routes
app.use('/api', (req, res, next) => {
  console.log('API route accessed');
  next();
});

// Modular user router
const userRouter = express.Router();
userRouter.get('/:id', (req, res) => {
  res.json({ userId: req.params.id });
});
app.use('/users', userRouter);

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log('Server running on 3000'));</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">✅ Summary</h2>
    <p class="text-gray-700">
      Advanced Express features include router-level middleware, centralized error handling, modular app design, advanced routing, and integration of third-party middleware. These enable writing scalable, maintainable, and robust Express applications.
    </p>
  `,
          code: `
// Router-level middleware example
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware for /admin routes');
  next();
});

router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});
app.use('/admin', router);

// Error handling middleware example
app.get('/error', (req, res, next) => {
  try {
    throw new Error('Oops!');
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Advanced routing examples
app.get('/user/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

app.get('/order/:id?', (req, res) => {
  res.send(req.params.id ? \`Order \${req.params.id}\` : 'All Orders');
});

app.get(/a/, (req, res) => {
  res.send('Contains letter "a"');
});

// Third-party middleware usage
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
  `,
          explanation: `
  - Router-level middleware applies logic to specific route groups, improving modularity and reusability.
  - Error-handling middleware centralizes error processing, enabling consistent responses.
  - Advanced routing supports dynamic parameters, optional parameters, and regex-based routes.
  - Modular app structures separate concerns into routes, controllers, and middleware for maintainability.
  - Third-party middleware like body-parser, cookie-parser, morgan, and cors extend app functionality easily.
  - These techniques help build scalable, organized, and secure Express.js applications.
  `,
          task: `
  Task:
  1. Create a router with middleware that logs requests on all routes under /admin.
  2. Setup a global error handler that catches errors and returns JSON responses.
  3. Implement routes with required and optional parameters.
  4. Use body-parser and cors middleware in your app.
  5. Organize routes and controllers into separate files following modular structure.
  `
        },
        {
          title: 'Real-time Applications with Socket.io',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Installing Socket.io</h2>
    <p class="text-gray-700 mb-4">
      Use npm to install Socket.io and Express for real-time app development.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install socket.io
npm install express</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Setting up a Basic Server</h2>
    <p class="text-gray-700 mb-4">
      Create an Express server integrated with Socket.io to handle real-time communication.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);  // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Client Side (index.html)</h2>
    <p class="text-gray-700 mb-4">
      Basic client listens and emits socket events to the server.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Socket.io Chat&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;ul id="messages"&gt;&lt;/ul&gt;
    &lt;form id="form"&gt;
      &lt;input id="input" autocomplete="off" /&gt;
      &lt;button&gt;Send&lt;/button&gt;
    &lt;/form&gt;

    &lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
    &lt;script&gt;
      const socket = io();

      const form = document.getElementById('form');
      const input = document.getElementById('input');
      const messages = document.getElementById('messages');

      form.addEventListener('submit', (e) =&gt; {
        e.preventDefault();
        if (input.value) {
          socket.emit('chat message', input.value);
          input.value = '';
        }
      });

      socket.on('chat message', (msg) =&gt; {
        const li = document.createElement('li');
        li.textContent = msg;
        messages.appendChild(li);
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Key Features of Socket.io</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Event-based bi-directional communication between client and server.</li>
      <li>Rooms and namespaces to organize clients and messages.</li>
      <li>Broadcasting messages to all or selected clients.</li>
      <li>Automatic reconnection on disconnection.</li>
      <li>Supports sending binary data like images and files.</li>
      <li>Ideal for chat apps, live notifications, collaborative tools, and multiplayer games.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Example: Room-based Chat</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>io.on('connection', (socket) =&gt; {
  socket.on('join room', (room) =&gt; {
    socket.join(room);
    socket.to(room).emit('message', 'A new user joined ' + room);
  });

  socket.on('room message', ({ room, msg }) =&gt; {
    io.to(room).emit('message', msg);
  });
});</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">F. Summary</h2>
    <p class="text-gray-700">
      Socket.io enables real-time capabilities for Node.js applications by providing low-latency, bidirectional communication with powerful features like rooms, automatic reconnection, and support for binary data. It is perfect for chat apps, live updates, notifications, and collaborative environments.
    </p>
  `,
          code: `
// Basic Socket.io server setup
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));


// Example: Room-based chat
io.on('connection', (socket) => {
  socket.on('join room', (room) => {
    socket.join(room);
    socket.to(room).emit('message', 'A new user joined ' + room);
  });

  socket.on('room message', ({ room, msg }) => {
    io.to(room).emit('message', msg);
  });
});
  `,
          explanation: `
  - Socket.io facilitates real-time, event-driven communication between client and server.
  - Apps can send and receive messages instantly enabling live chat, notifications, or collaborative features.
  - Rooms and namespaces let you group clients logically for targeted message broadcasting.
  - Built-in features include automatic reconnection and binary data support.
  - Works seamlessly with Express.js to create scalable real-time applications.
  `,
          task: `
  Task:
  1. Setup a Socket.io server with Express and broadcast messages received from clients to all connected clients.
  2. Build a client side page that can send and display chat messages in real-time.
  3. Extend the server to support room-based chat where clients join rooms and only communicate within them.
  4. Experiment with broadcasting messages excluding the sender.
  5. Explore sending binary data like images using Socket.io.
  `
        },
        {
          title: 'Testing & Debugging in Node.js/Express',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Types of Testing</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Unit Testing:</strong> Test individual functions or modules in isolation.</li>
      <li><strong>Integration Testing:</strong> Test interactions between multiple modules or APIs.</li>
      <li><strong>End-to-End (E2E) Testing:</strong> Test the full application flow from start to finish.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Popular Testing Frameworks</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Mocha:</strong> Flexible test framework for Node.js.</li>
      <li><strong>Chai:</strong> Assertion library that complements Mocha for readable assertions.</li>
      <li><strong>Jest:</strong> All-in-one testing framework with mocking capabilities.</li>
      <li><strong>Supertest:</strong> Library for testing Express APIs.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Setting Up Mocha & Chai</h2>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install --save-dev mocha chai supertest

// Add to package.json scripts
"scripts": {
  "test": "mocha"
}</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Example: Unit Testing a Function</h2>
    <p class="text-gray-700 mb-4">math.js</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>function sum(a, b) {
  return a + b;
}
module.exports = sum;
</code></pre>

    <p class="text-gray-700 mb-4">test/math.test.js</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const sum = require('../math');
const { expect } = require('chai');

describe('Sum Function', () => {
  it('should return 5 for 2+3', () => {
    expect(sum(2, 3)).to.equal(5);
  });

  it('should return a number', () => {
    expect(sum(2, 3)).to.be.a('number');
  });
});
</code></pre>
    <p class="text-gray-700 mb-4">Run tests via <code>npm test</code></p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Example: Testing Express APIs</h2>
    <p class="text-gray-700 mb-4">app.js</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => res.json({ message: 'Hello World' }));

module.exports = app;
</code></pre>

    <p class="text-gray-700 mb-4">test/app.test.js</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /hello', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Hello World');
  });
});
</code></pre>
    <p class="text-gray-700 mb-4">Run tests via <code>npm test</code></p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Debugging in Node.js</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li><strong>Built-in Debugger:</strong> Use <code>node inspect app.js</code>, commands <code>n</code> (next), <code>c</code> (continue).</li>
      <li><strong>Chrome DevTools:</strong> Run <code>node --inspect-brk app.js</code>, open <code>chrome://inspect</code> in Chrome browser.</li>
      <li><strong>Logging:</strong> Use <code>console.log()</code>, <code>console.error()</code>, and libraries like winston, debug, morgan for HTTP logs.</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">G. Tips for Advanced Debugging</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Carefully check async code and await promises to catch errors.</li>
      <li>Use breakpoints on key functions or suspected buggy code.</li>
      <li>Test error handling with edge cases.</li>
      <li>Use mock data and mocks for APIs and database during testing.</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">H. Summary</h2>
    <p class="text-gray-700">
      Testing improves code reliability, while debugging improves maintainability. Use frameworks like Mocha, Chai, Jest, and Supertest for thorough testing. Leverage Node.js built-in debugger, Chrome DevTools, and logging for effective debugging.
    </p>
  `,
          code: `
// math.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// test/math.test.js
const sum = require('../math');
const { expect } = require('chai');

describe('Sum Function', () => {
  it('should return 5 for 2+3', () => {
    expect(sum(2, 3)).to.equal(5);
  });

  it('should return a number', () => {
    expect(sum(2, 3)).to.be.a('number');
  });
});

// app.js (Express app)
const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => res.json({ message: 'Hello World' }));

module.exports = app;

// test/app.test.js
const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /hello', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Hello World');
  });
});
  `,
          explanation: `
  - Testing types include unit, integration, and end-to-end tests.
  - Mocha is a flexible testing framework, Chai adds assertions.
  - Jest is an all-in-one tester with mocking support.
  - Supertest helps test Express HTTP endpoints.
  - Debugging uses Node.js inspector, inline logging, and Chrome DevTools.
  - Effective debugging includes breakpoint usage, logging, and handling async errors.
  - Writing tests and debugging help ensure stable and maintainable Node.js apps.
  `,
          task: `
  Task:
  1. Create a simple function like sum and write Mocha/Chai tests for it.
  2. Create a minimal Express app and test an endpoint with Supertest.
  3. Use Node.js built-in debugger to step through your code.
  4. Add error handling routes and test error responses.
  5. Log errors consistently using a logging library or console.error().
  `
        },
        {
          title: 'Performance Optimization in Node.js',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Non-Blocking I/O</h2>
    <p class="text-gray-700 mb-4">
      Node.js operates on a single-threaded event loop; blocking operations freeze the server.
      Prefer asynchronous APIs to keep the server responsive.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const fs = require('fs');

// Blocking - avoid this
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Non-blocking - preferred
fs.readFile('file.txt', 'utf8', (err, data) =&gt; {
  if (err) throw err;
  console.log(data);
});
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Use Streams for Large Data</h2>
    <p class="text-gray-700 mb-4">
      Streams process data piece-by-piece, reducing memory usage, great for files, video streaming, uploads/downloads.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const fs = require('fs');

const readStream = fs.createReadStream('largefile.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Caching</h2>
    <p class="text-gray-700 mb-4">
      Reduce repeated expensive calls to DB or APIs using cache.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>let cache = {};

function getUser(id) {
  if (cache[id]) return Promise.resolve(cache[id]);
  return db.getUser(id).then(user =&gt; {
    cache[id] = user;
    return user;
  });
}
// For distributed caching, consider Redis or similar.
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Cluster Module</h2>
    <p class="text-gray-700 mb-4">
      Take advantage of multi-core CPUs by creating worker processes.
      Cluster mode allows handling more requests concurrently.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) =&gt; res.end('Hello')).listen(3000);
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Load Balancing</h2>
    <p class="text-gray-700 mb-4">
      Distribute traffic efficiently using NGINX or PM2 cluster mode.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Optimize Middleware</h2>
    <p class="text-gray-700 mb-4">
      Use middleware selectively and avoid heavy computations inside request handlers to reduce latency.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">G. Memory Leak Prevention</h2>
    <p class="text-gray-700 mb-4">
      Monitor and fix unreleased objects in long-running Node apps.
      Tools include <code>node --inspect</code>, Chrome DevTools, heapdump, and <code>clinic.js</code>.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">H. Profiling & Monitoring</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Node.js built-in Profiler</li>
      <li>Clinic.js (doctor, flame graphs)</li>
      <li>PM2 Monitoring (<code>pm2 monit</code>)</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">I. Database Optimization</h2>
    <p class="text-gray-700 mb-4">
      Use indexes, connection pooling, efficient queries, and avoid N+1 query problems.
      Fetch only necessary fields to reduce latency.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">J. Code Optimization</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Avoid blocking loops and heavy synchronous code.</li>
      <li>Use async/await to simplify asynchronous logic and avoid callback hell.</li>
      <li>Apply efficient algorithms and data structures.</li>
      <li>Compress HTTP responses with gzip using <code>compression</code> middleware.</li>
    </ul>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const compression = require('compression');
app.use(compression());
</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">K. Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Prefer non-blocking I/O and use streams for big data.</li>
      <li>Implement caching to reduce expensive operations.</li>
      <li>Use clustering and load balancing to scale across CPU cores.</li>
      <li>Profile and monitor apps for memory leaks and CPU bottlenecks.</li>
      <li>Optimize middleware, DB queries, and code logic.</li>
    </ul>
  `,
          code: `
// Non-blocking I/O example
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Using streams for file copy
const readStream = fs.createReadStream('largefile.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);

// Simple caching example
let cache = {};
function getUser(id) {
  if (cache[id]) return Promise.resolve(cache[id]);
  return db.getUser(id).then(user => {
    cache[id] = user;
    return user;
  });
}

// Cluster example
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for(let i=0; i<numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end('Hello')).listen(3000);
}

// Compression middleware usage
const compression = require('compression');
app.use(compression());
  `,
          explanation: `
  - Non-blocking asynchronous calls prevent server from freezing during long tasks.
  - Streams efficiently handle large data without hogging memory.
  - Caching stores frequently requested data to speed up responses.
  - Clustering uses all CPU cores to handle higher concurrency.
  - Middleware optimization reduces unnecessary processing.
  - Detecting and fixing memory leaks prevents server crashes.
  - Profiling tools help identify CPU-heavy code and memory issues.
  - Database query optimization saves time and resources.
  - Compressing HTTP responses reduces data transfer size.
  `,
          task: `
  Task:
  1. Convert a blocking fs.readFileSync call to non-blocking fs.readFile.
  2. Use streams to copy a large file from source to destination.
  3. Implement a memory cache for user data wrapped in a function.
  4. Setup a simple cluster to run your server on all available CPU cores.
  5. Add compression middleware to an Express app.
  6. Profile the application using built-in Node tools and observe CPU usage.
  `
        },
        {
          title: 'Security Best Practices in Node.js/Express',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Input Validation & Sanitization</h2>
    <p class="text-gray-700 mb-4">
      Never trust user input. Always validate and sanitize data using libraries like <code>express-validator</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install express-validator

const { body, validationResult } = require('express-validator');

app.post('/register', 
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User registered');
  }
);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Protect Against XSS (Cross-Site Scripting)</h2>
    <p class="text-gray-700 mb-4">
      Escape HTML output in templates and use security headers to prevent XSS attacks.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install helmet

const helmet = require('helmet');
app.use(helmet());
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Prevent CSRF (Cross-Site Request Forgery)</h2>
    <p class="text-gray-700 mb-4">
      Use <code>csurf</code> middleware to protect against CSRF attacks.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install csurf cookie-parser

const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) =&gt; {
  res.send(\`&lt;form&gt;&lt;input type="hidden" name="_csrf" value="\${req.csrfToken()}"&gt;&lt;/form&gt;\`);
});
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Secure Passwords</h2>
    <p class="text-gray-700 mb-4">
      Never store passwords in plain text. Hash passwords securely using <code>bcrypt</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install bcrypt

const bcrypt = require('bcrypt');

async function registerUser(password) {
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);
}
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Use HTTPS</h2>
    <p class="text-gray-700 mb-4">
      Always serve your app over HTTPS in production using SSL certificates or Let's Encrypt.
    </p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">F. Limit Request Rate</h2>
    <p class="text-gray-700 mb-4">
      Prevent DDoS attacks by limiting request rates using <code>express-rate-limit</code>.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install express-rate-limit

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per window
});

app.use(limiter);
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">G. Avoid Sensitive Data Exposure</h2>
    <p class="text-gray-700 mb-4">
      Store API keys, passwords, and DB credentials in environment variables.
      Never commit .env files publicly.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>npm install dotenv

require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">H. Security Headers</h2>
    <p class="text-gray-700 mb-4">
      Use Helmet to set HTTP headers that prevent MIME sniffing, clickjacking, and XSS.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const helmet = require('helmet');
app.use(helmet());
</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">I. Prevent SQL/NoSQL Injection</h2>
    <p class="text-gray-700 mb-4">
      Use parameterized queries instead of string concatenation to prevent injection.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>// Example with MongoDB
db.collection('users').findOne({ username: userInput }); // safe</code></pre>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">J. Session Security</h2>
    <p class="text-gray-700 mb-4">
      Use secure, HTTP-only cookies for sessions.
    </p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: true, secure: true }
}));
</code></pre>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">K. Summary</h2>
    <ul class="list-disc list-inside text-gray-800">
      <li>Validate and sanitize all user input.</li>
      <li>Always serve over HTTPS.</li>
      <li>Hash passwords securely with bcrypt.</li>
      <li>Implement rate limiting to prevent abuse.</li>
      <li>Use secure cookies and manage sessions carefully.</li>
      <li>Set strict security HTTP headers using Helmet.</li>
      <li>Protect your app from XSS, CSRF, injection, and sensitive data leaks.</li>
    </ul>
  `,
          code: `
// Input validation with express-validator
const { body, validationResult } = require('express-validator');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/register', 
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    res.send('User registered');
  }
);

// Helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// CSRF protection middleware
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.send(\`<form>
    <input type="hidden" name="_csrf" value="\${req.csrfToken()}">
  </form>\`);
});

// Password hashing with bcrypt
const bcrypt = require('bcrypt');

async function registerUser(password) {
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashed Password:', hashed);
}

// Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use(limiter);

// Environment variables for secrets
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

// Secure session cookies
const session = require('express-session');
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: true, secure: true }
}));
`,
          explanation: `
  - Input validation prevents malicious or malformed data from being processed.
  - Using Helmet adds protective HTTP headers for common attack vectors like XSS.
  - CSRF tokens prevent unauthorized actions performed by third-party sites.
  - Hashing passwords with bcrypt ensures stored credentials are secure.
  - HTTPS guarantees encrypted communication preventing data theft.
  - Rate limiting helps mitigate denial-of-service (DoS) and brute force attacks.
  - Storing sensitive info in environment variables avoids accidental leaks.
  - Secure cookies and sessions prevent session hijacking.
  - Protecting against injections reduces risk of data breaches.
  `,
          task: `
  Task:
  1. Add input validation and sanitization to a registration route.
  2. Configure Helmet to enhance HTTP security headers for your Express app.
  3. Implement CSRF protection with csurf in a form submission.
  4. Hash user passwords using bcrypt before storing them.
  5. Set up rate limiting limiting requests per IP.
  6. Manage environment variables securely for sensitive secrets.
  7. Configure express-session with secure cookie options.
  `
        },
        {
          title: 'Advanced Node.js Projects',
          theory: `
    <h2 class="text-2xl font-bold text-blue-600 mb-3">A. Project Idea 1: Real-Time Chat Application</h2>
    <p class="text-gray-700 mb-4">Features include user registration and authentication, real-time messaging with Socket.io, private messages, chat rooms, message history stored in MongoDB, typing indicators, and online status.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>chat-app/
├── server/
│   ├── index.js             // Entry point
│   ├── routes/
│   │   └── auth.js
│   ├── controllers/
│   │   └── chatController.js
│   ├── models/
│   │   └── message.js
│   └── middleware/
│       └── authMiddleware.js
├── client/
│   ├── index.html
│   └── app.js
├── package.json
└── .env
</code></pre>
    <p><strong>Key Concepts Used:</strong> Express routes & middleware, Socket.io real-time messaging, MongoDB with Mongoose, JWT authentication, frontend dynamic UI.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">B. Project Idea 2: E-commerce Backend API</h2>
    <p class="text-gray-700 mb-4">Features include CRUD for products, categories, users, JWT authentication with role-based access, file uploads for product images, cart & order management, and payment integrations.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>ecommerce-api/
├── app.js                   // Express app
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
├── models/
│   ├── user.js
│   ├── product.js
│   └── order.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
└── package.json
</code></pre>
    <p><strong>Key Concepts Used:</strong> REST API design, JWT authentication & authorization, Express middleware, DB relationships (MongoDB/SQL), error & validation handling, query optimization.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">C. Project Idea 3: Real-Time Collaboration Tool</h2>
    <p class="text-gray-700 mb-4">Features include multiple users editing documents simultaneously, real-time updates via WebSocket/Socket.io, user presence and cursor tracking, document history/version control, file attachments, notifications.</p>
    <pre class="bg-gray-100 p-3 rounded mb-4"><code>collab-app/
├── server/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   └── models/
├── client/
│   ├── index.html
│   └── app.js
├── package.json
└── .env
</code></pre>
    <p><strong>Key Concepts Used:</strong> Real-time WebSocket communication, Express APIs for persistence, MongoDB/PostgreSQL storage, authentication/authorization, frontend dynamic UI with collaboration.</p>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">D. Advanced Features in All Projects</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Real-time updates with Socket.io</li>
      <li>Authentication & authorization with JWT</li>
      <li>Input validation & security (XSS, CSRF)</li>
      <li>Error handling via centralized middleware</li>
      <li>Performance optimization with caching, streaming</li>
      <li>Testing & debugging using Mocha, Chai, Supertest</li>
      <li>Scalable modular project structure (routes, controllers, middleware)</li>
    </ul>

    <h2 class="text-2xl font-bold text-blue-600 mb-3">E. Bonus Enhancements</h2>
    <ul class="list-disc list-inside text-gray-800 mb-4">
      <li>Dark/light mode toggle using JS and CSS</li>
      <li>Notifications using WebSockets or Push API</li>
      <li>File uploads & cloud storage (AWS S3, Cloudinary)</li>
      <li>Admin dashboards for analytics and monitoring</li>
      <li>Unit, integration, and end-to-end tests for reliability</li>
    </ul>

    <h2 class="text-xl font-semibold text-blue-500 mb-2">F. Summary</h2>
    <p class="text-gray-700">
      Advanced Node.js projects combine backend APIs, real-time capabilities, robust security, and performance tuning. A proper modular folder structure promotes maintainability. Projects such as chat apps, e-commerce APIs, and collaboration tools demonstrate full-stack mastery, while bonus features improve UX and reliability.
    </p>
  `,
          code: `
// Example snippet: Basic setup for chat-app server/index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect to MongoDB (replace MONGO_URI in .env)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Authentication routes (in routes/auth.js)
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('User connected: ' + socket.id);

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
  `,
          explanation: `
  - Real-time chat apps use Express for API, Socket.io for two-way communication, and MongoDB to store message history.
  - E-commerce backends feature RESTful endpoints with secured access, file uploads, and payment integration.
  - Collaboration tools rely heavily on WebSocket updates and data consistency with DB versioning.
  - All projects benefit from modular structure with separated routing, controllers, and middleware.
  - Real-time updates, authentication, validation, and testing are cornerstones of advanced Node.js apps.
  - Bonus features enhance user experience and application robustness.
  `,
          task: `
  Task:
  1. Create the folder structure for a chat app with separate folders for routes, controllers, middleware, models.
  2. Setup Socket.io to broadcast messages between clients.
  3. Implement JWT-based authentication route in the chat app.
  4. Design product CRUD APIs with role-based access in an e-commerce backend.
  5. Build a collaborative document editor with real-time cursor updates using Socket.io.
  6. Add input validation and error handling middleware in your projects.
  7. Add caching mechanism to optimize repeated DB calls.
  8. Write unit & integration tests covering key features.
  `
        },
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
