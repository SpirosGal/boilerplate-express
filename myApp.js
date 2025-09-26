let express = require('express');
let path = require('path');
let app = express();

console.log("Hello World");

// Serve static files from /public ONLY at /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Root should send index.html (must be inside /public)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
