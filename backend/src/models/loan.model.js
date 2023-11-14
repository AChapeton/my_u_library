import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true},
  isCheckedOut: {type: Boolean, default: false},
  returnDate: {type: Date}
})

export default mongoose.model('Loan', loanSchema)