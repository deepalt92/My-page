const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your website pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/publications', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'publications.html'));
});

app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'experience.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
