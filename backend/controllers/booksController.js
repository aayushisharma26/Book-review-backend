import Books from '../schema/bookSchema.js';

export const createBooks = async (req, res) => {
  const { bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = req.body;

  try {
    const newBook = new Books({
      bookName,
      author,
      image,
      review,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing
    });

    const savedBook = await newBook.save();
    res.status(201).json({ message: "Book created successfully", book: savedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const { category, author } = req.query;

    const query = {};
    if (category) query.category = category;
    if (author) query.author = author;

    const books = await Books.find(query);

    res.status(200).json({ message: "Books retrieved successfully", books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBookById = async (req, res) => {
  const { id } = req.params; // Extract the book ID from the route parameters

  try {
    const book = await Books.findById(id); // Find the book by ID
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book); // Send the found book as a response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateBooks = async (req, res) => {
  const { id } = req.params;
  const { bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = req.body;

  try {
    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing },
      { new: true }
    );

    res.status(200).json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBooks = async (req, res) => {
  const { id } = req.params;

  try {
    await Books.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addReview = async (req, res) => {
  const { id } = req.params;
  const { user, review, rating } = req.body; 
  try {
    const book = await Books.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const newReview = { user, review, rating };
    book.reviews.push(newReview); 
    const updatedBook = await book.save();
    res.status(200).json({ message: "Review added successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ reviews: book.reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
