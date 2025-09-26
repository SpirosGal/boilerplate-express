let express = require('express');
let path = require('path');
let app = express();

// 1. Log to console
console.log("Hello World");

// 2. Serve static assets from /public, mapped at /public URL path
app.use('/public', express.static(path.join(__dirname, 'public')));

// 3. Serve the index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Export app (the test runner uses this)
module.exports = app;
