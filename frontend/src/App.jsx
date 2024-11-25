// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";  // Correct import
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import Footer from "./components/Footer";
// import SignupPage from "./pages/SignupPage";
// import LoginPage from "./pages/LoginPage";


// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar at the top */}
//         <Navbar />

//         {/* Main content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/login" element={<LoginPage />} />
            

//           </Routes>
//         </main>
//         <Footer/>

//         {/* Footer at the bottom */}
//       </div>
//     </Router>
//   );
// };

// export default App;













import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Correct import
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import BookDetail from "./components/BookDetail";



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
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/books/:id" element={<BookDetail />} />

          </Routes>
        </main>
        <Footer/>

        {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;





















