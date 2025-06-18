import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookBuddy from './pages/BookBuddy';
import BecomeBuddy from './pages/BecomeBuddy';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book-buddy" element={<BookBuddy />} />
            <Route path="/become-buddy" element={<BecomeBuddy />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;