
import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { addReview, getBookReviews, createBooks, updateBooks, deleteBooks } from '../controllers/booksController.js';

const router = express.Router();

router.post('/post', authenticate, isAdmin, createBooks);

router.put('/books/:id', authenticate, isAdmin, updateBooks);

router.delete('/books/:id', authenticate, isAdmin, deleteBooks);

router.post('/books/:id/reviews', authenticate, addReview);

router.get('/books/:id/reviews', getBookReviews);

export default router;
