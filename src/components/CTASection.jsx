import React from 'react';
import '../styles/cta.css';

const CTASection = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-left">
            <h2 className="cta-title">Ready to Experience Fresh Meat Delivery?</h2>
            <p className="cta-subtitle">
              Download the ZappCart app now and get 20% off on your first order. Fresh, hygienic meat is just a few taps away!
            </p>
            <div className="app-buttons">
              <img src='/public/images/App_Store.webp' alt="App Store" className="store-badge" />
              <img src='/public/images/play store.webp' alt="Google Play" className="store-badge" />
            </div>
          </div>

          <div className="cta-form-box">
            <h3 className="form-title">Get Updates & Offers</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" />
              </div>
              <button type="submit" className="submit-btn">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
