import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  publishedYear: {type: Number, required: true},
  genre: {type: String, required: true},
  stock: {type: Number, required: true, min: 0}
}, {timestamps: true})

export default mongoose.model('Book', bookSchema)