import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <Link to="/">
            <svg className="logo" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="40" height="40" rx="8" fill="none" stroke="#3372e3" strokeWidth="3"/>
              <circle cx="25" cy="25" r="10" fill="none" stroke="#3372e3" strokeWidth="3"/>
            </svg>
            <span className="brand-name">Blueprxnt</span>
          </Link>
        </div>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/coaching" className={isActive('/coaching')}>Coaching</Link></li>
          <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
          <li><Link to="/community" className={isActive('/community')}>Community</Link></li>
          <li><Link to="/shop" className={isActive('/shop')}>Shop</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
