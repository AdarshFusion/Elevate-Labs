const express = require("express");
const fs = require('fs');
const books = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

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
        const id = Number(req.params.id);
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            return res.status(404).json({ error: "Book not found" });
        }

        // Update only the provided fields
        const updatedBook = { ...books[bookIndex], ...req.body };
        books[bookIndex] = updatedBook;

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to update book" });
            }
            return res.json({ status: "success", data: updatedBook });
        });

        // return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // tood delete a book with id
        const id = Number(req.params.id);
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            return res.status(404).json({ error: "Book not found" });
        }

        const deletedBook = books.splice(bookIndex, 1);

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(books, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to delete book" });
            }
            return res.json({ status: "deleted", data: deletedBook[0] });
        });
        // return res.json({ status: "pending" });
    });

app.post('/api/books', (req, res) => {
    // tood create a new book
    const body = req.body;
    books.push({...body, id: books.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(books), (err, data) => {
        return res.json({ status: "success", id: books.length });
    });
    // console.log("Body",body);

});




app.listen(PORT, () => console.log(`Server strated at PORT:${PORT} `))