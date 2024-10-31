// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* <div className="about-image">
        <img src="./JOJY.jpg" alt="Profile" />
      </div> */}
      <div className="logo">JOJY SAJU JOSEPH</div>
      <nav>
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
            <Link to="/gallery">Gallery</Link>
          </li> 
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
