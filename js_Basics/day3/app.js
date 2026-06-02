const express = require('express');
const app = express();
const PORT = 3000;

// 1. Logger middleware - logs every request
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// 2. Built-in middleware - parse JSON in request body
app.use(express.json());

// 3. Built-in middleware - parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Now you can receive JSON data in POST requests
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Get data from request body
  console.log('Received user:', newUser);
  res.json({
    message: 'User created successfully',
    user: newUser
  });
});

// Custom middleware - check if user is admin
const checkAdmin = (req, res, next) => {
  const isAdmin = req.query.admin === 'true';
  if (isAdmin) {
    next(); // Continue to route
  } else {
    res.status(403).json({ error: 'Access denied. Admin only.' });
  }
};

// Use middleware on specific route
app.get('/admin', checkAdmin, (req, res) => {
  res.send('<h1>Admin Dashboard</h1>');
});

// 404 handler - MUST be at the end!
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});