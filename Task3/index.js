const express = require("express");
const book = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

// Routes
app.get('/api/book', (req, res) => {
    return res.json(book)
})

app.listen(PORT,()=> console.log(`Server strated at PORT:${PORT} `))