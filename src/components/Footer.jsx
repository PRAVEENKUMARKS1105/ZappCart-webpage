

import React from 'react';
import { Link } from 'react-router-dom'; // Already imported, no change needed
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-brand-title">ZAPPCART</h2>
            <p className="footer-brand-description">
              Your trusted partner for premium quality meat delivered fresh to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.542 2.001H4.458C3.1 2.001 2 3.101 2 4.458v15.084c0 1.358 1.1 2.458 2.458 2.458h15.084c1.358 0 2.458-1.1 2.458-2.458V4.458c0-1.357-1.1-2.457-2.458-2.457zM8.917 18.001h-3v-9h3v9zM7.417 7.584c-.964 0-1.75-.786-1.75-1.75s.786-1.75 1.75-1.75 1.75.786 1.75 1.75-.786 1.75-1.75 1.75zm10.584 10.417h-3v-4.813c0-1.219-.026-2.782-1.688-2.782-1.688 0-1.938 1.325-1.938 2.688v4.907h-3v-9h2.875v1.313h.063c.438-.825 1.5-1.688 3-1.688 3.25 0 3.688 2.125 3.688 4.875v4.5z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" href="#" className="footer-link">Home</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/about" href="#about" className="footer-link">About Us</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/products" href="#products" className="footer-link">Products</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/how-it-works" href="#how-it-works" className="footer-link">How It Works</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/faq" href="#" className="footer-link">FAQ</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/contact" href="#contact" className="footer-link">Contact</Link></li> {/* Replaced <a> with <Link> */}
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-links-title">Categories</h3>
            <ul className="footer-links-list">
              <li><Link to="/products/chicken" href="#" className="footer-link">Chicken</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/products/mutton" href="#" className="footer-link">Mutton</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/products/fish-seafood" href="#" className="footer-link">Fish & Seafood</Link></li> {/* Replaced <a> with <Link> */}
              <li><Link to="/products/prawns" href="#" className="footer-link">prawns</Link></li> {/* Replaced <a> with <Link> */}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contact Info</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="footer-contact-text">
                  123 Tech Park, Silicon Valley<br />
                  Bangalore, 560001
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="footer-contact-text">+91 98765 43210</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="footer-contact-text">support@zappcart.com</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="footer-contact-text">Mon-Sat: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-grid">
            <p className="footer-copyright">
              © {new Date().getFullYear()} ZappCart. All rights reserved.
            </p>
            <div className="footer-policies">
              <Link to="/privacy-policy" className="footer-policy-link">Privacy Policy</Link> {/* Already a Link, no change needed */}
              <Link to="/terms-of-service" className="footer-policy-link">Terms of Service</Link> {/* Already a Link, no change needed */}
              <Link to="/refund-policy" className="footer-policy-link">Refund Policy</Link> {/* Already a Link, no change needed */}
              <Link to="/standardPolicy" className="footer-policy-link">Quality & Standards Policy</Link> {/* Already a Link, no change needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;