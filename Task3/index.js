const express = require("express");
const books = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

// Routes
app.get('/api/books', (req, res) => {
    return res.json(books)
});


app.route('/api/books/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const book = books.find((book) => book.id === id);
        return res.json(book);
    })
    .patch((req, res) => {
        // tood edit a book with id
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // tood delete a book with id
        return res.json({ status: "pending" });
    });

app.post('/api/books', (req, res) => {
    // tood create a new book
    const body = req.body;  
    return res.json({ status: "pending" });
});




app.listen(PORT, () => console.log(`Server strated at PORT:${PORT} `))