import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <main>
      <section className="page-hero shop-hero">
        <div className="container">
          <h1 className="page-title">Fuel Your Performance</h1>
          <p className="page-subtitle">Premium supplements, resources, and products designed to optimize health, performance, and longevity.</p>
          <div className="hero-body-text">
            <p>Every product in the Blueprxnt Shop is carefully selected or formulated to meet the same standards used with NFL athletes, executives, and elite performers. No fillers. No compromises. Just results.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Shop by Category</h2>

          <div className="categories-grid">
            <div className="category-card">
              <h4>Blueprxnt Supplements</h4>
              <p>Precision-formulated supplements designed for South Asian physiology and high performers.</p>
              <Link to="/contact" className="btn btn-primary">Shop Supplements</Link>
            </div>

            <div className="category-card">
              <h4>Digital Products</h4>
              <p>Self-guided protocols, templates, and educational resources for every goal.</p>
              <Link to="/contact" className="btn btn-primary">Shop Digital Products</Link>
            </div>

            <div className="category-card">
              <h4>Blueprxnt Gear</h4>
              <p>Premium apparel and accessories for high performers who value quality and purpose.</p>
              <Link to="/contact" className="btn btn-primary">Shop Gear</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bundles-section">
        <div className="container">
          <h2 className="section-heading">Start with a Bundle</h2>
          <h3 className="section-subheading">Save 15% and get everything you need in one package.</h3>

          <div className="bundles-grid">
            <div className="bundle-card">
              <h4>Blueprxnt Core Bundle</h4>
              <div className="bundle-price">$150</div>
              <p>Foundational health and daily optimization</p>
              <ul>
                <li>Vitamin D3 + K2</li>
                <li>Omega-3 Fish Oil</li>
                <li>Magnesium</li>
                <li>Multivitamin</li>
              </ul>
              <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="bundle-card featured">
              <div className="bundle-badge">Best Seller</div>
              <h4>Blueprxnt Health Bundle</h4>
              <div className="bundle-price">$200</div>
              <p>Metabolic optimization and disease prevention</p>
              <ul>
                <li>Everything in Core Bundle</li>
                <li>Blood Sugar Support</li>
                <li>Cardiovascular Support</li>
                <li>Liver Support</li>
              </ul>
              <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="bundle-card">
              <h4>Blueprxnt Performance Bundle</h4>
              <div className="bundle-price">$180</div>
              <p>Athletic performance and body composition</p>
              <ul>
                <li>Creatine Monohydrate</li>
                <li>Essential Amino Acids</li>
                <li>Whey Protein Isolate</li>
                <li>Electrolytes</li>
              </ul>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Fuel Your Transformation</h2>
          <p className="section-body">Whether you're optimizing foundational health, building performance, or preventing disease—the Blueprxnt Shop has everything you need.</p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Shop All Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
