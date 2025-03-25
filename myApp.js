let express = require('express');
let path = require('path');  // Import path module
let app = express();

// Log to the console when the app starts
console.log("Hello World");

// Serve static files from the /public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));  // Serve the index.html file
});

// Export the app for use in the server
module.exports = app;
