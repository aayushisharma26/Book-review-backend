import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img
        src={book.image}
        alt={book.bookName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{book.bookName}</h3>
        <p className="text-gray-600">by {book.author}</p>
        <Link
          to={`/books/${book._id}`}
          className="text-blue-600 hover:underline mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
