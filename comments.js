// Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//Create a route
app.get('/comments', (req, res) => {
    res.send('This is a comment route');
});

//Create a route
app.get('/comments/:id', (req, res) => {
    res.send(`This is a comment route with id ${req.params.id}`);
});

//Create a route
app.get('/comments/new', (req, res) => {
    res.send('This is a new comment route');
});

//Create a route
app.post('/comments', (req, res) => {
    res.send('This is a comment post route');
});

//Create a route
app.put('/comments/:id', (req, res) => {
    res.send('This is a comment put route');
});

//Create a route
app.delete('/comments/:id', (req, res) => {
    res.send('This is a comment delete route');
});

//Create a route
app.get('/comments/:id/edit', (req, res) => {
    res.send(`This is a comment edit route with id ${req.params.id}`);
});