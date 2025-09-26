let express = require('express');
let path = require('path');  // Import path module
let app = express();

// Log to the console when the app starts
console.log("Hello World");

// Serve static files from the /public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.sendFile('/workspace/boilerplate-express/views/index.html');
  res.sendFile(path.join(__dirname, '/views/index.html'));  // Serve the index.html file
});
app.use(path, express.static(/workspace/boilerplate-express/views/index.html))

// Export the app for use in the server
module.exports = app;
