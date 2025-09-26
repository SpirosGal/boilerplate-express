let express = require('express');
let path = require('path');  
let app = express();

console.log("Hello World");

// Serve static files from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Root route should serve index.html inside /public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export app
module.exports = app;
