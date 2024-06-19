// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // You can implement your login logic here
    alert(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <div className="containerrr">
      <h1>Login</h1>
      <div className="input-containerrr">
        <input
          type="email"
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
        <button onClick={handleSubmit}>Login</button>
      </div>
      <p>Don't have an account? <button onClick={handleLogin}>Register now</button></p>
    </div>
  );
};

export default Login;
