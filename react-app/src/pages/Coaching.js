import React from 'react';
import { Link } from 'react-router-dom';

const Coaching = () => {
  return (
    <main>
      <section className="page-hero coaching-hero">
        <div className="container">
          <h1 className="page-title">Elite Coaching. Personalized Systems. Proven Results.</h1>
          <p className="page-subtitle">From NFL locker rooms to your inbox—the same performance health systems used by world-class athletes, tailored for your genetics, goals, and lifestyle.</p>
          <div className="hero-body-text">
            <p>Whether you're a South Asian professional battling genetic predispositions, an executive optimizing energy and longevity, or an athlete chasing peak performance—Blueprxnt coaching delivers data-informed, culturally intelligent systems that work.</p>
            <p><strong>No cookie-cutter templates. No generic advice. Just personalized protocols built on elite sports science.</strong></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Choose Your Path</h2>
          <h3 className="section-subheading">Three coaching options designed for different goals, budgets, and levels of support.</h3>

          <div className="offers-grid grid-3-items">
            <div className="offer-card featured">
              <div className="offer-badge">Elite</div>
              <h4>Blueprxnt 1:1</h4>
              <div className="offer-for">For: High performers ready to invest in elite-level care</div>
              <div className="offer-details">
                <p><strong>What You Get:</strong> Full testing suite (DEXA, bloodwork, genetics, VO2max), custom protocols, weekly check-ins, monthly coaching calls, unlimited support</p>
                <div className="offer-investment">Starting at $18,000</div>
                <p className="offer-capacity">Capacity: 10-20 clients max. Waitlist until 2026.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
            </div>

            <div className="offer-card">
              <h4>12-Week Programs</h4>
              <div className="offer-for">For: Athletes, executives, and South Asians seeking structured transformation</div>
              <div className="offer-details">
                <p><strong>Options:</strong> Blueprxnt Performance | Blueprxnt Integrate | Blueprxnt Reset</p>
                <div className="offer-investment">$2,500</div>
              </div>
              <Link to="/contact" className="btn btn-secondary">Join the Next Cohort (Q1 2026)</Link>
            </div>

            <div className="offer-card">
              <h4>Blueprxnt Collective</h4>
              <div className="offer-for">For: Budget-conscious learners seeking community support</div>
              <div className="offer-details">
                <p><strong>What You Get:</strong> Templated programs, group coaching, community support</p>
                <div className="offer-investment">$500</div>
              </div>
              <Link to="/contact" className="btn btn-secondary">Join Blueprxnt Collective</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-heading">Real Clients. Real Results.</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"I gained 22 lbs of muscle in the first month. Life-changing. There's no muscle-building culture in the Indian community, and Pratik changed that for me."</p>
              <div className="testimonial-author">
                <strong>Sunil Patel</strong>
                <span>Entrepreneur</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"I'm in the best shape of my life at 43. Lost fat, gained muscle. Pratik's attention to detail and professionalism are second to none."</p>
              <div className="testimonial-author">
                <strong>Erik Korem</strong>
                <span>Founder of AIM7, Former NFL Performance Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Get Started?</h2>
          <p className="section-body">Whether you're ready for elite-level 1:1 coaching, structured 12-week transformation, or community-driven group coaching—Blueprxnt has a path for you.</p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
