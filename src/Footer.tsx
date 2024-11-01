import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="actions">
        <a href="https://www.linkedin.com/in/jojysaju/" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/jojy-ul" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="mailto:24070769@studentmail.ul.ie.com" className="social-link">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>
        <div className="footer-logo">
          <span>© 2024 Jojy Saju Joseph</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
