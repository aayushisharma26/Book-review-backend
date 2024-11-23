import mongoose from 'mongoose';

import  reviewSchema  from './reviewSchema.js'; 

const booksSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  yearOfPublishing: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema], 
}, { timestamps: true }); 

const Books = mongoose.model("Books", booksSchema);
export default Books;
