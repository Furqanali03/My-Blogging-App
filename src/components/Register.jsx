import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../config/firebase/firebasemethods';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await signUpUser({ username, email, password });
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed. Please try again.'); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">Register</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button onClick={handleRegister} className="w-full p-2 bg-blue-500 text-white rounded mt-4">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
