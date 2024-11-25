import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">BookStore</Link>
        </h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/books" className="hover:text-gray-300">Books</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <Link to="/signup" className="hover:text-gray-300">Signup</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          
          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

