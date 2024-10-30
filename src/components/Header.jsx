import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import {useNavigate } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {

  const navigate = useNavigate();

  const backToHome = (event) => {
    event.preventDefault(); // Prevents form submission from reloading the page
    navigate('/'); // Takes back to home page
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <a href="home" className="logoname" onClick={backToHome} >Healthcare Access</a>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home" onClick={backToHome}>Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Our Service</a></li>
          </ul>
        </nav>
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Our Service</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
