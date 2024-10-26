import React, { useState } from 'react';
import { Menu } from 'lucide-react';

import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <h2 className="logoname">Healthcare Access</h2>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Service</a></li>
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Service</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;