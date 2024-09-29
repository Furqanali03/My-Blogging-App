import React from 'react';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, setUser } = useAuth(); // Get user from context

  const handleLogout = () => {
    // Handle logout logic here
    setUser(null); // Clear user state
    // Add Firebase logout logic if necessary
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">My Blogging App</h1>
      <div>
        {user ? (
          <div className="flex items-center">
            <span className="text-white mr-4">{user.name}</span>
            <Link to="/create-blog" className="text-white mr-4">Create Blog</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="text-white mr-4">Login</Link>
            <Link to="/register" className="text-white">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
