import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <main>
      <section className="page-hero community-hero">
        <div className="container">
          <h1 className="page-title">Join the Blueprxnt Movement</h1>
          <p className="page-subtitle">A global community of high performers, athletes, and health seekers transforming their lives through elite performance science and cultural intelligence.</p>
          <div className="hero-body-text">
            <p>The Blueprxnt Circle is more than a membership—it's a movement. Whether you're a South Asian professional seeking culturally intelligent health strategies, an athlete optimizing performance, or a practitioner building your expertise—you belong here.</p>
            <p className="hero-tagline"><strong>Learn. Connect. Transform.</strong></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Choose Your Path</h2>
          <h3 className="section-subheading">From free foundational content to elite mastermind access—there's a tier for every stage of your journey.</h3>

          <div className="tier-grid">
            <div className="tier-card">
              <h3>The Blueprxnt Base</h3>
              <div className="tier-price">FREE</div>
              <p>Start your journey with foundational content and community access—completely free.</p>
              <ul>
                <li>Monthly newsletter</li>
                <li>Free community discussions</li>
                <li>Foundational content library</li>
                <li>Exclusive discounts (10-15%)</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Join the Base (Coming Soon)</Link>
            </div>

            <div className="tier-card featured">
              <h3>Blueprxnt Collective</h3>
              <div className="tier-price">$49/month</div>
              <p>Choose your track: South Asian Health or Performance & Sport.</p>
              <ul>
                <li>Private community channels</li>
                <li>Monthly group coaching calls</li>
                <li>Monthly workshops</li>
                <li>Resource library</li>
                <li>Exclusive discounts (20%)</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Join Collective (Coming Soon)</Link>
            </div>

            <div className="tier-card">
              <h3>Blueprxnt Lab</h3>
              <div className="tier-price">$149/month</div>
              <p>Small-group coaching, direct feedback, and advanced education for serious performers.</p>
              <ul>
                <li>Small-group coaching (max 15)</li>
                <li>Direct feedback on data</li>
                <li>Advanced workshops</li>
                <li>Case study reviews</li>
                <li>Exclusive discounts (20%)</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Join Lab (Coming Soon)</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Join the Movement?</h2>
          <p className="section-body">Whether you're just starting or ready to go all in—there's a place for you in the Blueprxnt Circle.</p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Join the Circle (Coming Soon)</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Community;
