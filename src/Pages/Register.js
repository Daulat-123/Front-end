import React from 'react';
import './Register.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
       <h1 className="title">Staff Management System</h1>
      <div className="inner-container">
        <h1>Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
