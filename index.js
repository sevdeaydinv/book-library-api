const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let books = [];

// Kitapları listeleme
app.get("/books", (req, res) => {
    res.json(books);
});

// Yeni kitap ekleme
app.post("/books", (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ message: "Lütfen tüm alanları doldurun" });
    }

    const newBook = { id: books.length + 1, title, author, year };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Kitap güncelleme
app.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;
    const bookIndex = books.findIndex(book => book.id == id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Kitap bulunamadı" });
    }

    books[bookIndex] = { ...books[bookIndex], title, author, year };
    res.json(books[bookIndex]);
});

// Kitap silme
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id != id);
    res.json({ message: "Kitap silindi" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
