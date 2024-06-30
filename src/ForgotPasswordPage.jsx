import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email === '') {
      setMessage('Email is required');
      return;
    }
    // Perform forgot password logic here
    setMessage('A password reset link has been sent to your email');
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Forgot Password</h2>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <button type="submit">Reset Password</button>
        </form>
        <div className="links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
      <div className="animated-bg"></div>
    </div>
  );
};

export default ForgotPasswordPage;
