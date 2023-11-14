import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  autor: {type: String, required: true},
  stock: {type: Number, required: tryue, min: 0}
})

export default mongoose.model('Book', bookSchema)