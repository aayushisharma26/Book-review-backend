import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]); 
  const [error, setError] = useState(null); 

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://book-review-project-six.vercel.app/books/books");
        setBooks(response.data.books); 
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id} 
              className="bg-white p-4 rounded shadow-md"
            >
              <img
                src={book.image}
                alt={book.bookName}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{book.bookName}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className="text-gray-600">Rating: {book.rating}</p>
              <p className="text-gray-600">Year: {book.yearOfPublishing}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No books available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

















