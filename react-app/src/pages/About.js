import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="container">
          <h1 className="page-title">The Story Behind Blueprxnt</h1>
          <p className="page-subtitle">Performance health built on 16 years of NFL experience, cultural intelligence, and a personal transformation at 40.</p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">From NFL Performance Director to Performance Health Pioneer</h2>
          <div className="story-content">
            <p className="section-body">
              Blueprxnt was born from a simple realization: <strong>The same systems that help NFL athletes perform at the highest level can transform anyone's health—when tailored to their unique genetics, goals, and lifestyle.</strong>
            </p>
            <p className="section-body">
              After 16+ years as an NFL Performance Director working with teams like the New York Giants, I've seen what's possible when you combine elite sports science with precision testing and cultural intelligence. I've worked alongside Saquon Barkley, Daniel Jones, and countless other elite athletes—helping them optimize recovery, prevent injuries, and perform at their peak.
            </p>
            <p className="section-body">
              But the breakthrough came at 40, when I applied these same systems to my own health. As a South Asian dealing with genetic predispositions to metabolic dysfunction, I knew generic health advice wouldn't cut it. So I built my own blueprint—integrating comprehensive testing, culturally adapted nutrition, and sustainable training protocols.
            </p>
            <p className="section-body">
              <strong>The results were undeniable.</strong> Better body composition, higher energy, improved biomarkers, and a system that actually worked with my life—not against it.
            </p>
            <p className="section-body">
              That's when Blueprxnt was born: <strong>To bring world-class performance health to everyone—from NFL athletes to South Asian professionals to executives seeking longevity.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-heading">The Blueprxnt Philosophy</h2>
          <h3 className="section-subheading">Three Core Principles Guide Everything We Do</h3>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-number">01</div>
              <h4>Performance = Capacity – Fatigue</h4>
              <p>True performance isn't about pushing harder—it's about building capacity (through training, nutrition, recovery) while managing fatigue (stress, sleep debt, inflammation). This formula drives every protocol we design.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-number">02</div>
              <h4>Growth = Stress + Recovery</h4>
              <p>Adaptation happens during recovery, not training. Whether you're building muscle, improving VO2max, or reversing metabolic dysfunction—progress requires both strategic stress and adequate recovery.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-number">03</div>
              <h4>Data-Informed, Not Data-Obsessed</h4>
              <p>We use comprehensive testing (DEXA, bloodwork, genetics, HRV, VO2max) to guide decisions—but numbers don't replace coaching. Context, culture, and real-world application matter more than perfect data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">What Makes Blueprxnt Different</h2>
          <div className="differentiators-grid grid-5-items">
            <div className="differentiator-card">
              <div className="diff-icon">🏈</div>
              <h4>NFL-Proven Systems</h4>
              <p>Methods tested with world-class athletes, now accessible to you</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">🌏</div>
              <h4>Cultural Intelligence</h4>
              <p>Deep expertise in South Asian, Middle Eastern, and diverse genetic backgrounds</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">🔬</div>
              <h4>Precision Testing</h4>
              <p>Comprehensive diagnostics to understand YOUR unique physiology</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">🎯</div>
              <h4>Personalized Protocols</h4>
              <p>No templates. No cookie-cutter plans. Just systems built for you.</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">⚡</div>
              <h4>Sustainable Results</h4>
              <p>Long-term transformation over short-term quick fixes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-heading">Blueprxnt By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">16+</div>
              <div className="stat-label">Years in Elite Sports</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Clients Transformed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">NFL Teams Worked With</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Build Your Blueprint?</h2>
          <p className="section-body">Whether you're seeking elite coaching, diagnostic testing, or access to proven systems—Blueprxnt has a path for you.</p>
          <div className="cta-buttons">
            <Link to="/coaching" className="btn btn-primary btn-large">Explore Coaching</Link>
            <Link to="/contact" className="btn btn-secondary btn-large">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
