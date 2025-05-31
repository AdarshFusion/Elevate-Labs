# 📚 Task3 – Book Management API

A simple RESTful API built with Express.js to manage a collection of books.

## 🚀 Features

- Retrieve all books  
- Retrieve a book by ID  
- Add a new book  
- Update an existing book  
- Delete a book  
- Data persisted in `MOCK_DATA.json`  

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- File System (fs) module for data persistence  

## 📂 Project Structure

Task3/
├── MOCK_DATA.json # JSON file containing book data
├── index.js # Main server file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation


API Endpoints:

    GET /api/books: Retrieve all books

    GET /api/books/:id: Retrieve a book by ID

    POST /api/books: Add a new book

    PATCH /api/books/:id: Update an existing book

    DELETE /api/books/:id: Delete a book

 Notes

    Ensure that MOCK_DATA.json exists in the root directory. This file is used to store and retrieve book data.

    The server listens on port 3000 by default.    