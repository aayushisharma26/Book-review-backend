
import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { addReview, getBookReviews, createBooks, updateBooks, deleteBooks,getBooks ,getBookById} from '../controllers/booksController.js';

const router = express.Router();

router.post('/post', authenticate, isAdmin, createBooks);

router.get("/books", getBooks); 

router.get('/books/:id', getBookById);


router.put('/books/:id', authenticate, isAdmin, updateBooks);

router.delete('/books/:id', authenticate, isAdmin, deleteBooks);

router.post('/books/reviews/:id',  addReview);

router.get('/books/:id/reviews', getBookReviews);

export default router;
