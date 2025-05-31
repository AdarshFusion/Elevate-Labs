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
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // tood delete a book with id
        return res.json({ status: "pending" });
    });

app.post('/api/books', (req, res) => {
    // tood create a new book
    const body = req.body;
    books.push({ ...body, id: books.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(books), (err, data) => {
        return res.json({ status: "success", });
    });
    // console.log("Body",body);

});




app.listen(PORT, () => console.log(`Server strated at PORT:${PORT} `))