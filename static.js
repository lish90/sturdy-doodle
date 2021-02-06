// Import the node-static library
const static = require("node-static");
// Import the http server library
const http = require("http");

// This creates a static file server for on the directory __dirname
// __dirname is the directory the Node application is working in.
// Similar to cwd (Current Working Directory)
var file = new(static.Server)(__dirname);

// The hostname and port the server will listen on.
var hostname = "127.0.0.1";
var port = 3000;

// Create the HTTP server with the function used to service requests.
const server = http.createServer(function(req, res) {
    // Delegate request to the static file server.
    file.serve(req, res);
});

// Start the server.
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// node satic.js = access URL 

// ERROR MESSAGE 

// Error: Cannot find module '/Users/lish90/code/roehampton/Software_developer2/lab_2/sturdy-doodle/satic.js'
//     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:980:15)
//     at Function.Module._load (internal/modules/cjs/loader.js:862:27)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
//     at internal/main/run_main_module.js:18:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []