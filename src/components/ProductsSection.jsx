
import React from 'react';
import '../styles/products.css';
import chicken from '../assets/images/chicken.jpg' 
import mutton from '../assets/images/mutton.jpg' 
import seafood from '../assets/images/seafood.jpg' 
import prawns from '../assets/images/prawns.jpg' 
import { showToast } from '../utils/toastUtils'; // Import the reusable toast function

const ProductsSection = () => {
  const productCategories = [
    {
      name: "Chicken",
      description: "Farm-raised, antibiotic-free chicken cuts",
      image:chicken
    },
    {
      name: "Mutton",
      description: "Premium quality goat meat cuts",
      image: mutton
    },
    {
      name: "Fish & Seafood",
      description: "Fresh-caught fish and seafood varieties",
      image:seafood
    },
    {
      name: "Prawns",
      description: "Ready-to-cook prawns products",
      image:prawns
    }
  ];

  return (
    <section id="products">
      <div className="container">
        <div className="products-header">
          <h2 className="products-title">Our Products</h2>
          <p className="products-description">Discover our wide range of fresh, high-quality meat products to satisfy your culinary needs.</p>
        </div>

        <div className="products-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-card">
              <img src={category.image} alt={category.name} className="product-image" />
              <div className="product-content">
                <h3 className="product-name">{category.name}</h3>
                <p className="product-description">{category.description}</p>
                <button className="explore-button">
                  Explore
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="browse-all-container">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              showToast();
            }}
          >
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;