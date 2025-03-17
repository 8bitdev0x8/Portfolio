import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../public/jojy_logo_vr.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="about-image img">
        <img src={logo} alt="Profile" />
      </div>
      <div className="logo">JOJY SAJU JOSEPH</div>
      <div className="logo">
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/Portfolio/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/CS6042">CS6042</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/VideoGallery">VideoGallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          

        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
