// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLoginSuccess }) => { // Add onLoginSuccess as a prop
  const nav = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    // Prepare the data to be sent in the request body
    const formData = {
      email: email,
      password: password,
    };

    // Make the POST request to the Flask backend
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        onLoginSuccess(responseData); // Call the onLoginSuccess function

        // Store the login state in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(responseData));

        nav('/');
      } else {
        alert('wrong username or password');
      }
    } catch (error) {
      // Handle errors if needed
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
