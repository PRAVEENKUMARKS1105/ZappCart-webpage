import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'; // Added missing import for Footer
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProductsSection from './components/ProductsSection.jsx';
import HowItWorksSection from './components/HowItWorksSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import CTASection from './components/CTASection.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import RefundPolicy from './components/RefundPolicy.jsx';
import StandardPolicy from './components/standardpolicy.jsx'; // Updated to match actual file name (lowercase)
import './styles/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    const toastContainer = document.getElementById('zappcart-toast');
    if (toastContainer) {
      console.log('ToastContainer found:', toastContainer);
      console.log('ToastContainer parent:', toastContainer.parentElement);
      console.log('ToastContainer parent styles:', window.getComputedStyle(toastContainer.parentElement));
      // Check the DOM hierarchy up to the body
      let parent = toastContainer.parentElement;
      while (parent && parent !== document.body) {
        console.log('Parent element:', parent, 'Styles:', window.getComputedStyle(parent));
        parent = parent.parentElement;
      }
    } else {
      console.log('ToastContainer not found');
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main homepage with all sections visible */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <main>
                <section id="home"><Hero /></section>
                <section id="about"><AboutSection /></section>
                <section id="products"><ProductsSection /></section>
                <section id="how-it-works"><HowItWorksSection /></section>
                
                <TestimonialsSection />
                <CTASection />
              </main>
              <Footer />
            </>
          } 
        />

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
        <Route path="/terms-of-service" element={<><Header /><TermsOfService /><Footer /></>} />
        <Route path="/refund-policy" element={<><Header /><RefundPolicy /><Footer /></>} />
        <Route path="/standardpolicy" element={<><Header /><StandardPolicy /><Footer /></>} /> {/* Route remains unchanged */}

        {/* Redirect section links to homepage with anchor */}
        <Route path="/about" element={<><Header /><a href="/#about" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; }}>Go to About</a><Footer /></>} />
        <Route path="/products" element={<><Header /><a href="/#products" onClick={(e) => { e.preventDefault(); window.location.href = '/#products'; }}>Go to Products</a><Footer /></>} />
        <Route path="/how-it-works" element={<><Header /><a href="/#how-it-works" onClick={(e) => { e.preventDefault(); window.location.href = '/#how-it-works'; }}>Go to How It Works</a><Footer /></>} />
        <Route path="/contact" element={<><Header /><a href="/#contact" onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}>Go to Contact</a><Footer /></>} />
        <Route path="/download" element={<><Header /><div>Download App Page</div><Footer /></>} />
        <Route path="/help" element={<><Header /><div>Help Page</div><Footer /></>} />
        <Route path="/products/chicken" element={<><Header /><div>Chicken Products</div><Footer /></>} />
        <Route path="/products/mutton" element={<><Header /><div>Mutton Products</div><Footer /></>} />
        <Route path="/products/fish-seafood" element={<><Header /><div>Fish & Seafood Products</div><Footer /></>} />
        <Route path="/products/prawns" element={<><Header /><div>Prawns Products</div><Footer /></>} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        containerId="zappcart-toast"
        theme="dark"
        style={{ zIndex: 1000 }}
      />
    </>
  );
}

export default App;