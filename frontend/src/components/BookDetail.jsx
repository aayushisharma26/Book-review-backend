import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://book-review-project-six.vercel.app/books/books/${id}`);
        setBook(response.data); // Set the book details
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details. Please try again later.");
      }
    };

    fetchBookDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white p-6 rounded shadow-md">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{book.bookName}</h1>
        <p className="text-gray-600 mb-2">Author: {book.author}</p>
        <p className="text-gray-600 mb-2">Category: {book.category}</p>
        <p className="text-gray-600 mb-2">Rating: {book.rating}</p>
        <p className="text-gray-600 mb-2">Year of Publishing: {book.yearOfPublishing}</p>
        <p className="text-gray-600 mb-2">Review: {book.review}</p>
        <p className="text-gray-600 mb-2">Publisher: {book.publisher}</p>
        <p className="text-gray-600 mb-2">Tags: {book.tags?.join(", ")}</p>
      </div>
    </div>
  );
};

export default BookDetail;

