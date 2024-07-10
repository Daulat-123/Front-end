import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="title">Staff Management System</h1>
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="/register" className="register-link">Don't have an account? Register here</a>
      </div>
    </div>
  );
}

export default Login;
