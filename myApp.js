let express = require('express');
let path = require('path');
let app = express();

console.log("Hello World");

// Step 4: Serve static assets only from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Step 3: Serve index.html at /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
