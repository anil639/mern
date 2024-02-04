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
    Question: "What is event-driven programming in Node.js?",
    Answer:
      "Event-driven programming is used to synchronize the occurrence of multiple events and to make the program as simple as possible. The basic components of an Event-Driven Program are:\nA callback function ( called an event handler) is called when an event is triggered.\nAn event loop that listens for event triggers and calls the corresponding event handler for that event.",
  },
  {
    Question: "What is buffer in Node.js?",
    Answer:
      "The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.",
  },
  {
    Question: "What are streams in Node.js?",
    Answer:
      "Streams are a type of data-handling method and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way. The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances.",
  },
  {
    Question: "Explain crypto module in Node.js",
    Answer:
      "The crypto module is used for encrypting, decrypting, or hashing any type of data. This encryption and decryption basically help to secure and add a layer of authentication to the data. The main use case of the crypto module is to convert the plain readable text to an encrypted format and decrypt it when required.",
  },
  {
    Question: "What is callback hell?",
    Answer:
      "Callback hell is an issue caused due to a nested callback. This causes the code to look like a pyramid and makes it unable to read To overcome this situation we use promises.",
  },
  {
    Question: "Explain the use of timers module in Node.js?",
    Answer:
      "The Timers module in Node.js contains various functions that allow us to execute a block of code or a function after a set period of time. The Timers module is global, we do not need to use require() to import it.\nIt has the following methods:\nsetTimeout() method\nsetImmediate() method\nsetInterval() method",
  },
  {
    Question:
      "Difference between setImmediate() and process.nextTick() methods",
    Answer:
      "The process.nextTick() method is used to add a new callback function at the start of the next event queue. it is called before the event is processed. The setImmediate is called at the check phase of the next event queue. It is created in the poll phase and is invoked during the check phase.",
  },
  {
    Question:
      "What is the difference between setTimeout() and setImmediate() method?",
    Answer:
      "The setImmediate function is used to execute a particular script immediately whereas the setTimeout function is used to hold a function and execute it after a specified period of time.",
  },
  {
    Question: "What is the difference between spawn() and fork() method?",
    Answer:
      "Both these methods are used to create new child processes the only difference between them is that spawn() method creates a new function that Node runs from the command line whereas fork() function creates an instance of the existing fork() method and creates multiple workers to perform on the same task.",
  },
  {
    Question: "Explain the use of passport module in Node.js?",
    Answer:
      "The passport module is used for adding authentication features to our website or web app. It implements authentication measure which helps to perform sign-in operations.",
  },
  {
    Question: "What is fork in Node.js?",
    Answer:
      "Fork is a method in Node.js that is used to create child processes. It helps to handle the increasing workload. It creates a new instance of the engine which enables multiple processes to run the code.",
  },
  {
    Question: "What are the three methods to avoid callback hell?",
    Answer:
      "The three methods to avoid callback hell are:\nUsing async/await()\nUsing promises\nUsing generators",
  },
  {
    Question: "What is body-parser in Node.js?",
    Answer:
      "Body-parser is the Node.js body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. It is an NPM module that processes data sent in HTTP requests.",
  },
  {
    Question: "What is CORS in Node.js?",
    Answer:
      "The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application.",
  },
  {
    Question: "Explain the tls module in Node.js?",
    Answer:
      "The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL. It helps to establish a secure connection on the network.",
  },
  {
    Question: "What is the use of url module in Node.js?",
    Answer:
      "In Node.js url module is used to split the URL of the website into parts so that it becomes readable and can be used in the different parts of the application. The parse() method is used with the url module to separate the URL of the website into parts.",
  },
  {
    Question: "What is REST API?",
    Answer:
      "Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing. It works after the request is sent from the client to the server in the form of a web URL as HTTP GET or POST or PUT or DELETE request. After that, a response comes back from the server in the form of a resource which can be anything like HTML, XML, Image, or JSON. But now JSON is the most popular format being used in Web Services.",
  },
  {
    Question: "Explain the engine Google uses for Node.js?",
    Answer:
      "The engine used by Google for Node.js is V8. It is one the fastest engine as it is written in C++. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs. It has a huge community and is highly portable.",
  },
  {
    Question: "Name the tool used for writing consistent code?",
    Answer:
      "ESLint is a tool used in many IDEs to write consistent code styles. ESLint is written using Node.js to provide a fast runtime environment and easy installation via npm.",
  },
  {
    Question: "What are the different kinds of HTTP requests?",
    Answer:
      "The most commonly used HTTP requests are:\nGET: This request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.\nPUT: This request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.\nPOST: This request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.\nDELETE: This request is used to delete the data on the server at a specified location.",
  },
  {
    Question: "What is a cluster in Node.js?",
    Answer:
      "Due to a single thread in node.js, it handles memory more efficiently because there are no multiple threads due to which no thread management is needed. Now, to handle workload efficiently and to take advantage of computer multi-core systems, cluster modules are created that provide us the way to make child processes that run simultaneously with a single parent process.",
  },
  {
    Question: "Explain some of the cluster methods in Node.js?",
    Answer:
      "Fork(): It creates a new child process from the master. The isMaster returns true if the current process is master or else false./nisWorker: It returns true if the current process is a worker or else false.\nprocess: It returns the child process which is global.\nsend(): It sends a message from worker to master or vice versa.\nkill(): It is used to kill the current worker.",
  },
  {
    Question: "How to manage sessions in Node.js?",
    Answer:
      "Session management can be done in node.js by using the express-session module. It helps in saving the data in the key-value form. In this module, the session data is not saved in the cookie itself, just the session ID.",
  },
  {
    Question: "Explain the types of streams in Node.js?",
    Answer:
      "Types of Stream:\nReadable stream: It is the stream from where you can receive and read the data in an ordered fashion. However, you are not allowed to send anything. For example, fs.createReadStream() lets us read the contents of a file.\nWritable stream: It is the stream where you can send data in an ordered fashion but you are not allowed to receive it back. For example, fs.createWriteStream() lets us write data to a file.\nDuplex stream: It is the stream that is both readable and writable. Thus you can send in and receive data together. For example, net.Socket is a TCP socket.\nTransform stream: It is the stream that is used to modify the data or transform it as it is read. The transform stream is basically a duplex in nature. For example, zlib.createGzip stream is used to compress the data using gzip.",
  },
  {
    Question:
      "How can we implement authentication and authorization in Node.js?",
    Answer:
      "Authentication is the process of verifying a user’s identity while authorization is determining what actions can be performed. We use packages like Passport and JWT to implement authentication and authorization.",
  },
  {
    Question: "Explain the packages used for file uploading in Node.js?",
    Answer:
      "The package used for file uploading in Node.js is Multer. The file can be uploaded to the server using this module. There are other modules in the market but Multer is very popular when it comes to file uploading. Multer is a node.js middleware that is used for handling multipart/form-data, which is a mostly used library for uploading files.",
  },
  {
    Question:
      "Explain the difference between Node.js and server-side scripting languages like Python?",
    Answer:
      "Node.js is the best choice for asynchronous programming Python is not the best choice for asynchronous programming. Node.js is best suited for small projects to enable functionality that needs less amount of scripting. Python is the best choice if you’re developing larger projects. Node.js is best suited for memory-intensive activities. Not recommended for memory-intensive activities. Node.js is a better option if your focus is exactly on web applications and website development. But, Python is an all-rounder and can perform multiple tasks like- web applications, integration with back-end applications, numerical computations, machine learning, and network programming. Node.js is an ideal and vibrant platform available right now to deal with real-time web applications. Python isn’t an ideal platform to deal with real-time web applications. The fastest speed and great performance are largely due to Node.js being based on Chrome’s V8 which is a very fast and powerful engine. Python is slower than Node.js, As Node.js is based on fast and powerful Chrome’s V8 engine, Node.js utilizes JavaScript interpreter. Python using PyPy as Interpreter. In case of error handling and debugging Python beats Node.js. Error handling in Python takes significantly very little time and debugging in Python is also very easy compared to Node.js.",
  },
  {
    Question: "How to handle database connection in Node.js?",
    Answer:
      "To handle database connection in Node.js we use the driver for MySQL and libraries like Mongoose for connecting to the MongoDB database. These libraries provide methods to connect to the database and execute queries.",
  },
  {
    Question: "How to read command line arguments in Node.js?",
    Answer:
      "Command-line arguments (CLI) are strings of text used to pass additional information to a program when an application is running through the command line interface of an operating system. We can easily read these arguments by the global object in node i.e. process object. Below is the approach:\nStep 1: Save a file as index.js and paste the below code inside the file.\nlet arguments = process.argv ;\nconsole.log(arguments) ;\nStep 2: Run the index.js file using the below command:\nnode index.js.",
  },
  {
    Question: "Explain the Node.js redis module?",
    Answer:
      "Redis is an Open Source store for storing data structures. It is used in multiple ways. It is used as a database, cache, and message broker. It can store data structures such as strings, hashes, sets, sorted sets, bitmaps, indexes, and streams. Redis is very useful for Node.js developers as it reduces the cache size which makes the application more efficient. However, it is very easy to integrate Redis with Node.js applications.",
  },
  {
    Question: "What is web socket?",
    Answer:
      "Web Socket is a protocol that provides full-duplex (multiway) communication i.e. allows communication in both directions simultaneously. It is a modern web technology in which there is a continuous connection between the user’s browser (client) and the server. In this type of communication, between the web server and the web browser, both of them can send messages to each other at any point in time. Traditionally on the web, we had a request/response format where a user sends an HTTP request and the server responds to that. This is still applicable in most cases, especially those using RESTful API. But a need was felt for the server to also communicate with the client, without getting polled(or requested) by the client. The server in itself should be able to send information to the client or the browser. This is where Web Socket comes into the picture.",
  },
  {
    Question: "Explain the util module in Node.js?",
    Answer:
      "The Util module in node.js provides access to various utility functions. There are various utility modules available in the node.js module library.\nOS Module: Operating System-based utility modules for node.js are provided by the OS module.\nPath Module: The path module in node.js is used for transforming and handling various file paths.\nDNS Module: DNS Module enables us to use the underlying Operating System name resolution functionalities. The actual DNS lookup is also performed by the DNS Module.\nNet Module: Net Module in node.js is used for the creation of both client and server. Similar to DNS Module this module also provides an asynchronous network wrapper.",
  },
  {
    Question: "How to handle environment variables in Node.js?",
    Answer:
      "We use process.env to handle environment variables in Node.js. We can specify environment configurations as well as keys in the .env file. To access the variable in the application, we use the “process.env.VARIABLE_NAME” syntax. To use it we have to install the dotenv package using the below command:\nnpm install dotenv",
  },
  {
    Question: "Explain DNS module in Node.js?",
    Answer:
      "DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup. Its main advantage is that there is no need for memorizing IP addresses – DNS servers provide a nifty solution for converting domain or subdomain names to IP addresses.",
  },
  {
    Question: "What are child processes in Node.js?",
    Answer:
      "Usually, Node.js allows single-threaded, non-blocking performance but running a single thread in a CPU cannot handle increasing workload hence the child_process module can be used to spawn child processes. The child processes communicate with each other using a built-in messaging system.",
  },
  {
    Question: "How to validate data in Node.js?",
    Answer:
      "Validation in node.js can be easily done by using the express-validator module. This module is popular for data validation. There are other modules available in the market like hapi/joi, etc but express-validator is widely used and popular among them.",
  },
  {
    Question: "What is the role of net module in Node.js?",
    Answer:
      "The net module in Node.js is used to create TCP client and serve in Node.js. This module establishes connections, handles incoming requests, and share data over the network.",
  },
  {
    Question: "What is tracing in Node.js?",
    Answer:
      "The Tracing Objects are used for a set of categories to enable and disable the tracing. When tracing events are created then tracing objects is disabled by calling tracing.enable() method and then categories are added to the set of enabled trace and can be accessed by calling tracing.categories.",
  },
  {
    Question: "What is reactor pattern in node.js?",
    Answer:
      "Reactor Pattern is used to avoid the blocking of the Input/Output operations. It provides us with a handler that is associated with I/O operations. When the I/O requests are to be generated, they get submitted to a demultiplexer, which handles concurrency in avoiding the blocking of the I/O mode and collects the requests in the form of an event and queues those events.",
  },
];
export default NodeData;
