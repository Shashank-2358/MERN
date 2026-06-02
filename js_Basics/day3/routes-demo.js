const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><p>Welcome to Express!</p>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>Learning MERN Stack</p>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Email: shashank@example.com</p>');
});

// API route - sending JSON data
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Shashank', role: 'Developer' },
        { id: 2, name: 'John', role: 'Designer' },
        { id: 3, name: 'Jane', role: 'Manager' }
    ];
    res.json(users); // res.json() sends JSON response
});
// Route with parameter
// :id is a parameter (can be any value)
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Get the id from URL
    res.send(`<h1>User ID: ${userId}</h1>`);
});

// Multiple parameters
app.get('/posts/:year/:month', (req, res) => {
    const { year, month } = req.params;
    res.send(`<h1>Posts from ${month}/${year}</h1>`);
});

// With query parameters
// URL: /search?q=express&sort=new
app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    const sortBy = req.query.sort;
    res.send(`<h1>Search: ${searchQuery}</h1><p>Sort by: ${sortBy}</p>`);
});

app.get('/you/:name', (req, res) => {
    res.send(`Hello your name is ${req.params.name}`)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
