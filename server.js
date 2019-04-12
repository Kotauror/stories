// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import Path
const path = require('path');

// Static files
// static files will be in a folder called build, 
// which is where we’ll store the aforementioned style.css and bundle.js files
app.use(express.static('build'));

// API Routes
app.use('/api/stories', require('./routes/story-routes'));

// find index html, this is where the views are
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});