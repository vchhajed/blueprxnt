import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="40" height="40" rx="8" fill="none" stroke="#ffffff" strokeWidth="3"/>
            <circle cx="25" cy="25" r="10" fill="none" stroke="#ffffff" strokeWidth="3"/>
          </svg>
          <span>Blueprxnt</span>
        </div>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/coaching">Coaching</Link>
          <Link to="/services">Services</Link>
          <Link to="/community">Community</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-tagline">Where elite systems meet everyday life.</p>
        <p className="footer-copyright">&copy; 2025 Blueprxnt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
