let express = require('express');
let app = express();

// Log to the console when the app starts
console.log("Hello World");

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.sendFile('/workspace/boilerplate-express/views/index.html');
});

// Export the app for use in the server
module.exports = app;
