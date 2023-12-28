const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'HomePage.html'));
});

// Showing login form
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// Handling user registration (you can remove this if not needed)
app.post("/register", async (req, res) => {
  // Your registration logic here
});

// Handling user login
app.post("/login", async (req, res) => {
  // Your login logic here
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
});
