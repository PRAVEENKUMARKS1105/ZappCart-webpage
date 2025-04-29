import React from 'react';
import '../styles/products.css'; // Import the CSS file

const ProductsSection = () => {
  const productCategories = [
    {
      name: "Chicken",
      description: "Farm-raised, antibiotic-free chicken cuts",
      image: "/public/images/chicken.jpg"
    },
    {
      name: "Mutton",
      description: "Premium quality goat meat cuts",
      image: "/public/images/mutton.jpg"
    },
    {
      name: "Fish & Seafood",
      description: "Fresh-caught fish and seafood varieties",
      image: '/public/images/seafood.jpg'
    },
    {
      name: "Prawns",
      description: "Ready-to-cook prawns products",
      image: '/public/images/prones.jpg'
    }
  ];

  return (
    <section id="products"> {/* Use ID */}
      <div className="container"> {/* Assumes .container is defined */}
        <div className="products-header"> {/* Use specific header class */}
          <h2 className="products-title">Our Products</h2>
          <p className="products-description">Discover our wide range of fresh, high-quality meat products to satisfy your culinary needs.</p>
        </div>

        <div className="products-grid"> {/* Use grid class */}
          {productCategories.map((category, index) => (
            // Use product card class
            <div key={index} className="product-card">
              <img src={category.image} alt={category.name} className="product-image" />
              <div className="product-content">
                <h3 className="product-name">{category.name}</h3>
                <p className="product-description">{category.description}</p>
                <button className="explore-button"> {/* Use button class */}
                  Explore
                  {/* SVG requires no specific class here, styled via parent */}
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="browse-all-container"> {/* Use container class */}
          {/* Keep using btn btn-primary, styled by the CSS */}
          <button className="btn btn-primary">Browse All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;