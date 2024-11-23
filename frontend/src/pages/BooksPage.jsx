import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((response) => {
      setBooks(response.data.books);
      setFilteredBooks(response.data.books);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = books.filter((book) =>
      book.bookName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
