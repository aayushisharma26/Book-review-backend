// src/pages/LogoutPage.jsx (or wherever you decide to place it)
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Example: remove user data from localStorage
    onLogout(); // Notify the parent component to update the state
    navigate("/login"); // Redirect to login page
  };

  return (
    <button onClick={handleLogout} className="text-white hover:text-gray-300">
      Logout
    </button>
  );
};

export default LogoutPage;
