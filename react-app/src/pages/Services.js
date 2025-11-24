import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main>
      <section className="page-hero services-hero">
        <div className="container">
          <h1 className="page-title">Beyond Coaching: Strategic Services for Teams, Companies & High Performers</h1>
          <p className="page-subtitle">From diagnostic assessments to executive consulting—Blueprxnt offers specialized services designed for organizations, practitioners, and individuals seeking targeted expertise.</p>
        </div>
      </section>

      <section className="section services-overview-section">
        <div className="container">
          <h2 className="section-heading">Four Strategic Services</h2>

          <div className="services-overview-grid">
            <div className="service-preview-card">
              <h4>Blueprxnt Diagnostic</h4>
              <p>Comprehensive testing and analysis. Get the data, insights, and roadmap you need.</p>
              <div className="service-price">Starting at $5,000</div>
              <Link to="/contact" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-preview-card">
              <h4>Session Packs</h4>
              <p>Targeted support when you need it. One-time or multi-session packages.</p>
              <div className="service-price">Starting at $500</div>
              <Link to="/contact" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-preview-card">
              <h4>Consulting & Advising</h4>
              <p>Strategic partnerships for health companies, sports teams, and startups.</p>
              <div className="service-price">Starting at $5,000</div>
              <Link to="/contact" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-preview-card">
              <h4>Speaking Engagements</h4>
              <p>Keynotes, workshops, and panels on performance health and elite sports science.</p>
              <div className="service-price">Starting at $5,000</div>
              <Link to="/contact" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Work Together?</h2>
          <p className="section-body">Whether you need a comprehensive diagnostic, targeted session support, strategic consulting, or a keynote speaker—Blueprxnt delivers elite-level expertise tailored to your needs.</p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
