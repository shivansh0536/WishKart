import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">WishKart</div>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} WishKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
