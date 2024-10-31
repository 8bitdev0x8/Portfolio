import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://github.com/jojy-ul" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="footer-logo">
          <span>© 2024 Jojy Saju Joseph</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
