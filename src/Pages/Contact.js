import React from 'react';
import './Contact.css';
import { FaPhone, FaGoogle, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    
    <div className="contact-container">
        <h1></h1>
      <h1>Contact Us</h1>
      <div className="contact-methods">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>Phone: +123-456-7890</span>
        </div>
        <div className="contact-item">
          <FaGoogle className="contact-icon" />
          <span>Email: contact@example.com</span>
        </div>
        <div className="contact-item">
          <FaTwitter className="contact-icon" />
          <span>Twitter: @example</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <span>Instagram: @example</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Other Email: info@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
