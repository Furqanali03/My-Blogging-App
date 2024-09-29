// src/components/Login.jsx
import React, { useState } from 'react';
import { loginUser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Get setUser from Auth context

  const handleLogin = async () => {
    try {
      const userData = await loginUser({ email, password });
      setUser({ name: userData.name }); // Set user's name after login
      alert('Login successful');
      navigate('/blogs'); // Redirect to the main page
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">Login</h2>
        <input
          type="email"
          className="w-full p-2 border rounded mt-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 border rounded mt-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full p-2 bg-blue-500 text-white rounded mt-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
