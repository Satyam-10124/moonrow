// src/components/ProductSection.jsx
import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section-glow"></div>
      <div className="product-section-container">
        <h2 className="product-heading">
          Accelerate productivity and drive innovation with powerful <span className="gradient-text">AI Solutions</span>
        </h2>
        <p className="product-subheading">
          The future is happening now
        </p>

        <div className="product-stats-grid">
          <div className="product-stat-item">
            <p className="stat-number">400+</p>
            <p className="stat-label">Enterprises Served</p>
          </div>
          <div className="product-stat-item">
            <p className="stat-number">2015</p>
            <p className="stat-label">Established Since</p>
          </div>
          <div className="product-stat-item">
            <p className="stat-number">1000+</p>
            <p className="stat-label">Team Members Globally</p>
          </div>
        </div>

        <div className="product-features-grid">
          <div className="product-feature-item">
            <h3 className="feature-title">All-In-One Capabilities</h3>
            <p className="feature-description">
              Empowers teams across your organisation to use AI
            </p>
          </div>
          <div className="product-feature-item">
            <h3 className="feature-title">Powerful AI Agent Framework</h3>
            <p className="feature-description">
              Without needing coding skills—while still allowing full control
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;