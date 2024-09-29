// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path
import Login from './components/Login';
import Register from './components/Register';
import CreateBlog from './components/CreateBlog';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
