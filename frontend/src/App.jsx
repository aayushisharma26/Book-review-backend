import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </main>
        <Footer/>

        {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
