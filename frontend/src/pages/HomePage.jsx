import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://book-review-project-six.vercel.app/books/books");
        setBooks(response.data.books);
        setFilteredBooks(response.data.books);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) =>
          book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, books]);

  const handleSearch = () => {
    setSearchQuery(searchText);
  };

  const handleBookClick = (id) => {
    navigate(`/books/${id}`); // Navigate to the BookDetail page with the book's ID
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by book name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border rounded w-64 text-sm"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white p-4 rounded shadow-md cursor-pointer"
              onClick={() => handleBookClick(book._id)} // Navigate on click
            >
              <img
                src={book.image}
                alt={book.bookName}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{book.bookName}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
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
