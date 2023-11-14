import Book from "../models/book.model.js";

//Obtain all books
export const getAllBooks = async (req, res) => {
  try{
    const books = await Book.find()
    if (!userFound)
      return res.status(400).json({ message: "Invalid credentials" });
    res.status(200).json(books)
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

// Obtain an specficic book
export const getBookById = async (req, res) => {
  const {id} = req.params
  try{
    const book = await Book.findById(id)
    if(!book) return res.status(400).json({ message: "Invalid credentials" });
    res.status(200).json(book)
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

// Add a new book
export const addBook = async (req, res) => {
  const bookData = req.body

  try{
    const newBook = await Book.create(bookData)
    return res.sendStatus(201).json(newBook);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

