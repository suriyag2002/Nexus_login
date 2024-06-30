import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required');
      return;
    }
    // Perform login logic here
    navigate('/');
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      <div className="animated-bg"></div>
    </div>
  );
};

export default LoginPage;
