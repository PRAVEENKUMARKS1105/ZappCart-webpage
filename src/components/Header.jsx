

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/header.css';
import applogo from '../assets/images/applogo.jpg'
import { showToast } from '../utils/toastUtils'; // Import the reusable toast function

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logo click: scroll to top if on homepage, otherwise navigate to homepage
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    // If not on homepage, Link will navigate to "/"
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={handleLogoClick}>
            <img src={applogo} alt="ZappCart Mobile App" className="app-promo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); window.location.href = '/#home'; }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; }}>About</a>
          <a href="#products" onClick={(e) => { e.preventDefault(); window.location.href = '/#products'; }}>Products</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); window.location.href = '/#how-it-works'; }}>How It Works</a>
          <Link
            to="/download"
            href="#contact"
            className="download-btn"
            onClick={(e) => {
              e.preventDefault();
              showToast();
            }}
          >
            Download App
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); window.location.href = '/#home'; }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; }}>About</a>
          <a href="#products" onClick={(e) => { e.preventDefault(); window.location.href = '/#products'; }}>Products</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); window.location.href = '/#how-it-works'; }}>How It Works</a>
          <Link
            to="/download"
            href="#contact"
            className="download-btn"
            onClick={(e) => {
              e.preventDefault();
              showToast();
            }}
          >
            Download App
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;