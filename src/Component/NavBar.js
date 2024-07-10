// src/NavBar.js
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo"></div>
            <div className={`menu ${isOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="/about" className="about-link">About</a>
                <a href="/contact" className="contact-link">Contact </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default NavBar;
