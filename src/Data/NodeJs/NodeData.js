const NodeData = [
  {
    Question: "What is Node.js?",
    Answer:
      "Node.js is a JavaScript engine used for executing JavaScript code outside the browser. It is normally used to build the backend of the application and is highly scalable.",
  },
  {
    Question: "What is the difference between Node.js and JavaScript?",
    Answer:
      "JavaScript is a scripting language whereas Node.js is an engine that provides the runtime environment to run JavaScript code.\nJavaScript:\nIt is a light-weighted programming language (“scripting language”) used to develop interactive web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.\nNode.js:\nIt is used to run JavaScript programs outside the browser and it mostly runs server-side code. It cannot be used to run HTML tags.",
  },
  {
    Question: "Is Node.js single-threaded?",
    Answer:
      "Yes, Node.js is a single-threaded application as it is built using the single-threaded event loop model architecture.",
  },
  {
    Question: "What kind of API function is supported by Node.js?",
    Answer:
      "There are two types of API functions supported by Node.js:\nSynchronous: \nThese API functions are used for blocking code.\nAsynchronous: \nThese API functions are used for non-blocking code.",
  },
  {
    Question:
      "What is the difference between Synchronous and Asynchronous functions?",
    Answer:
      "Synchronous function:\nThese are the function that block the execution of the program whenever an operation is performed. Hence these are also called blocking operations. We use these functions to perform lightweight tasks\nAsynchronous function:\nThese are the operations that do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. We use these functions to perform heavy tasks.",
  },
  {
    Question: "What is a module in Node.js?",
    Answer:
      "In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders. Modules are useful because of their reusability and ability to reduce the complexity of code into smaller pieces. Some examples of modules are. http, fs, os, path, etc.",
  },
  {
    Question: "What is npm and its advantages?",
    Answer:
      "NPM stands for Node Package Manager. It is an online repository for Node.js packages. We can install these packages in our projects/applications using the command line.",
  },
  {
    Question: "What is middleware?",
    Answer:
      "Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.",
  },
  {
    Question:
      "How does Node.js handle concurrency even after being single-threaded?",
    Answer:
      "Node.js internally uses libuv library for handling all async call. This library creates multiple thread pools to handle async operations.",
  },
  {
    Question: "What is control flow in Node.js?",
    Answer:
      "Control Flow functions are executed whenever there is an async call made in the program. These functions define the order in which these asynchronous functions will be executed.",
  },
  {
    Question: "What do you mean by event loop in Node.js?",
    Answer:
      "Event Loop in Node.js is used to handle callbacks. It is helpful in performing non-blocking I/O operations. An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.",
  },
  {
    Question:
      "What is the order in which control flow statements get executed?",
    Answer:
      "The order in which the statements are executed is as follows:\nExecution and queue handling\nCollection of data and storing it\nHandling concurrency\nExecuting the next lines of code",
  },
  {
    Question: "What are the main disadvantages of Node.js?",
    Answer:
      "Since Node.js is single-threaded so multi-threaded engines are better and can handle tasks more efficiently. Also, we do not use relational databases with Node.js like MySQL mostly non-relational databases like MongoDB is used.",
  },
  {
    Question: "What is REPL in Node.js?",
    Answer:
      "REPL in Node.js stands for Read, Evaluate, Print, and Loop. It is a computer environment similar to the shell which is useful for writing and debugging code as it executes the code in on go.",
  },
  {
    Question: "How to import a module in Node.js?",
    Answer:
      "We use the require module to import the External libraries in Node.js. The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.",
  },
  {
    Question: "What is the difference between Node.js and AJAX?",
    Answer:
      "Node.js is a JavaScript runtime environment that runs on the server side whereas AJAX is a client-side programming language that runs on the browser.",
  },
  {
    Question: "What is package.json in Node.js?",
    Answer:
      "package.json is a file that is used to store the metadata of all the contents of the project. It is used to describe the module used, run commands, and other useful information about the project.",
  },
  {
    Question: "What is the most popular Node.js framework used these days?",
    Answer:
      "The most famous Node.js framework used is Express.js as it is highly scalable, efficient, and requires very few lines of code to create an application.",
  },
  {
    Question: "What are promises in Node.js?",
    Answer:
      "A promise is basically an advancement of callbacks in NodeJS. In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations. While developing an application you may encounter that you are using a lot of nested callback functions which causes a problem of callback hell. Promises solve this problem of callback hell.",
  },
  {
    Question: "",
    Answer: "",
  },
];
export default NodeData;
