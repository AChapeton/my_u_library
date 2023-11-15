import Book from "../models/book.model.js";

//Obtain all books
export const getAllBooks = async (req, res) => {
  try{
    const books = await Book.find()
    if (!books)
      return res.status(400).json({ message: "No books were found." });
    res.status(200).json(books)
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

// Obtain an specficic book
export const getBookById = async (req, res) => {
  const {id} = req.params
  try{
    console.log(`Searching for book with ID: ${id}`)
    const book = await Book.findById(id)
    if(!book) return res.status(400).json({ message: "This id is not related to any book." });
    res.status(200).json(book)
  }catch(error){
    console.error(`Error fetching book by ID: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
}

// Add a new book
export const addBook = async (req, res) => {
  const bookData = req.body

  try{
    const newBook = await Book.create(bookData)
    res.status(201).json(newBook);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

