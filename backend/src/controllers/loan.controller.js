import Loan from '../models/loan.model.js'
import Book from '../models/book.model.js'

//Get loans for a specific user
export const getUserLoans = async (req, res) => {
  const {userId} = req.params
  
  try{
    const loans = await Loan.find({user: userId}).populate('book')

    res.status(200).json({loans})
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

//Request a book
export const requestLoan = async (req, res) => {
  const {userId, bookId} = req.params;

  try{
    const book = await Book.findById(bookId)

    if(book.stock > 0){
      //Update book stock
      book.stock--

      const loan = await Loan.create({user: userId, book: bookId, isCheckedOut: true})

      //Save changes
      await book.save()

      res.status(200).json({message: 'Loan successfully applied for.', loan})
    }else{
      res.status(400).json({message: 'The book is not available at this moment.', loan})
    }
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

//Check if a book was returned
export const returnLoan = async (req, res) => {
  const {loanId} = req.params

  try{
    const loan = await Loan.findByIdAndUpdate(loanId, {isCheckedOut: false, returnDate: new Date()}, {new: true})
    const book = await Book.findByIdAndUpdate(loan.book, {$inc: {stock: 1}}, {new: true})
    res.status(200).json({ message: 'The book was returned successfully', loan, updatedBook: book });
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}