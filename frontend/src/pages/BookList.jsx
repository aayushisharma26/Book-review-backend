// src/components/BookList.jsx
import React, { useState } from "react";

const BookList = ({ books }) => {
  const [filterName, setFilterName] = useState(""); // Filter by book name
  const [filterRating, setFilterRating] = useState(""); // Filter by rating

  const handleNameFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setFilterRating(e.target.value);
  };

  // Filter books based on name and rating
  const filteredBooks = books.filter((book) => {
    const matchesName = book.bookName.toLowerCase().includes(filterName.toLowerCase());
    const matchesRating = filterRating ? book.rating >= filterRating : true;
    return matchesName && matchesRating;
  });

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={filterName}
          onChange={handleNameFilterChange}
          placeholder="Filter by book name"
          className="p-2 border rounded"
        />
        <input
          type="number"
          value={filterRating}
          onChange={handleRatingFilterChange}
          placeholder="Filter by rating"
          className="p-2 border rounded ml-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book._id} className="bg-white p-4 rounded shadow-md">
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

export default BookList;
