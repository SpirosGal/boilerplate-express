let express = require('express');
let app = express();

// Log to the console when the app starts
console.log("Hello Express");

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Express');
});

// Export the app for use in the server
module.exports = app;
