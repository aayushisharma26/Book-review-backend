import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true,
  },
  review: {
    type: String, 
    required: true,
  },
  rating: {
    type: Number, 
    required: true,
    min: 1,
    max: 5, 
  },
}, { timestamps: true }); 

export default reviewSchema; 
