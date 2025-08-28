import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Milk Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
