import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeAudience, setActiveAudience] = useState('south-asian');

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-landing">
        <div className="hero-container">
          <div className="hero-content-landing">
            <h1 className="hero-headline">Transform Health Into Performance</h1>
            <h2 className="hero-subheadline">Elite sports science, precision testing, and cultural intelligence—proven in the NFL, now available to you.</h2>
            <p className="hero-body">
              Most health advice is generic, outdated, or built for someone else's body. Blueprxnt is different. We integrate the systems used by world-class athletes with cutting-edge longevity medicine and cultural intelligence to deliver personalized performance health that actually works—for your genetics, your goals, and your life.
            </p>
            <div className="hero-cta-group">
              <Link to="/community" className="btn btn-primary btn-large">Join the Blueprxnt Community</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Book a Discovery Call</Link>
            </div>

            {/* Social Proof */}
            <div className="social-proof-hero">
              <div className="testimonial-highlight">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">Every coach needs a coach. Pratik is one of the best at what he does. If you're a leader in a high-pressure situation and need somebody that can tailor something to your unique needs, Pratik is definitely the person for you.</p>
                <div className="testimonial-author">
                  <strong>Erik Korem</strong>
                  <span>Founder of AIM7, Former NFL Performance Director (16+ years)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="section problem-section">
        <div className="container">
          <h2 className="section-heading">You've Tried Everything. Nothing Sticks.</h2>
          <p className="section-intro">
            You're educated. You're disciplined. You've read the books, listened to the podcasts, tried the programs. But you're still stuck.
          </p>
          <div className="problem-grid grid-5-items">
            <div className="problem-card">
              <div className="problem-icon">⚡</div>
              <h4>Low energy, poor recovery, stubborn body fat</h4>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧬</div>
              <h4>Generic advice that doesn't account for your genetics or lifestyle</h4>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h4>Conflicting information from "experts" who've never worked with elite athletes</h4>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h4>Quick fixes that work for 30 days, then fail</h4>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🌍</div>
              <h4>No one who understands your cultural background, your schedule, or your real goals</h4>
            </div>
          </div>
          <p className="problem-conclusion">You don't need more information. <strong>You need a system.</strong></p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section solution-section">
        <div className="container">
          <h2 className="section-heading">Introducing Blueprxnt: Performance Health</h2>
          <h3 className="section-subheading">Not longevity medicine. Not extreme biohacking. Not bro science.</h3>
          <p className="section-body">
            Blueprxnt is <strong>Performance Health</strong>—the integration of Medicine 3.0, elite sports science, and cultural intelligence into a personalized system designed for sustainable results.
          </p>

          <div className="differentiators-grid grid-5-items">
            <div className="differentiator-card">
              <div className="diff-icon">🏆</div>
              <h4>Proven at Elite Levels</h4>
              <p>Methods battle-tested with NFL athletes, NCAA champions, and Fortune 500 executives</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">📊</div>
              <h4>Data-Informed, Not Data-Obsessed</h4>
              <p>We use testing (DEXA, bloodwork, genetics, HRV, VO2max) to guide decisions—not replace them</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">🌏</div>
              <h4>Cultural Intelligence</h4>
              <p>Deep expertise in South Asian physiology, Middle Eastern genetics, and cultural health challenges</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">🔄</div>
              <h4>Holistic Integration</h4>
              <p>Internal + external health. Neck up + neck down. Performance + longevity.</p>
            </div>
            <div className="differentiator-card">
              <div className="diff-icon">⚙️</div>
              <h4>Sustainable Systems</h4>
              <p>No quick fixes. No extremes. Just proven frameworks that adapt to your life.</p>
            </div>
          </div>

          <div className="framework-callout">
            <div className="formula">
              <div className="formula-item">
                <strong>Performance</strong> = Capacity – Fatigue
              </div>
              <div className="formula-item">
                <strong>Growth</strong> = Stress + Recovery
              </div>
            </div>
            <p className="formula-tagline">These aren't slogans. They're the foundation of every protocol we build.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <div className="container">
          <h2 className="section-heading">The Blueprxnt Method™</h2>
          <h3 className="section-subheading">Four pillars. One integrated system.</h3>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-number">1</div>
              <h4>Assess</h4>
              <p>Comprehensive testing and data collection (DEXA, bloodwork, genetics, HRV, VO2max, movement screening) to establish your baseline and identify bottlenecks.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">2</div>
              <h4>Design</h4>
              <p>Custom protocols for training, nutrition, supplementation, sleep, recovery, and mindset—tailored to your genetics, goals, and lifestyle.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">3</div>
              <h4>Execute</h4>
              <p>Weekly check-ins, monthly coaching calls, unlimited support, and real-time adjustments as your body adapts and progresses.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-number">4</div>
              <h4>Evolve</h4>
              <p>Continuous refinement based on data, feedback, and results. Your plan evolves as you do—no cookie-cutter templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section who-section">
        <div className="container">
          <h2 className="section-heading">Built for High Performers Who Refuse to Settle</h2>
          <h3 className="section-subheading">Blueprxnt serves four distinct audiences—each with unique challenges, each with proven results.</h3>

          <div className="audience-tabs">
            <button
              className={`audience-tab ${activeAudience === 'south-asian' ? 'active' : ''}`}
              onClick={() => setActiveAudience('south-asian')}
            >
              South Asians & Middle Eastern
            </button>
            <button
              className={`audience-tab ${activeAudience === 'executives' ? 'active' : ''}`}
              onClick={() => setActiveAudience('executives')}
            >
              Executives & High Performers
            </button>
            <button
              className={`audience-tab ${activeAudience === 'athletes' ? 'active' : ''}`}
              onClick={() => setActiveAudience('athletes')}
            >
              Athletes
            </button>
            <button
              className={`audience-tab ${activeAudience === 'coaches' ? 'active' : ''}`}
              onClick={() => setActiveAudience('coaches')}
            >
              Coaches & Practitioners
            </button>
          </div>

          <div className="audience-content">
            {/* South Asian Audience */}
            <div className={`audience-panel ${activeAudience === 'south-asian' ? 'active' : ''}`}>
              <div className="audience-layout">
                <div className="audience-info">
                  <h4>South Asians & Middle Eastern Professionals</h4>
                  <div className="pain-points">
                    <h5>Pain Points:</h5>
                    <ul>
                      <li>Skinny-fat body type</li>
                      <li>High diabetes/CVD risk</li>
                      <li>Cultural food challenges</li>
                      <li>Genetic predispositions ignored by mainstream health advice</li>
                    </ul>
                  </div>
                  <div className="what-you-get">
                    <h5>What You Get:</h5>
                    <p>Culturally intelligent protocols that address your unique physiology, family dynamics, and food traditions—without sacrificing your heritage.</p>
                  </div>
                  <div className="results-highlight">
                    <h5>Results:</h5>
                    <ul>
                      <li><strong>22 lbs of muscle gained</strong> in 4 weeks</li>
                      <li><strong>Reversed diabetes</strong></li>
                      <li><strong>LDL cholesterol under 100</strong> without medication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Executives Audience */}
            <div className={`audience-panel ${activeAudience === 'executives' ? 'active' : ''}`}>
              <div className="audience-layout">
                <div className="audience-info">
                  <h4>Executives & High Performers</h4>
                  <div className="pain-points">
                    <h5>Pain Points:</h5>
                    <ul>
                      <li>Low energy, poor sleep</li>
                      <li>Stress-induced weight gain</li>
                      <li>No time for complicated protocols</li>
                      <li>Generic corporate wellness programs</li>
                    </ul>
                  </div>
                  <div className="what-you-get">
                    <h5>What You Get:</h5>
                    <p>Time-efficient systems that optimize energy, focus, and longevity—designed for high-pressure schedules and real-world demands.</p>
                  </div>
                  <div className="results-highlight">
                    <h5>Results:</h5>
                    <ul>
                      <li><strong>Best shape at 43</strong></li>
                      <li><strong>Increased lean mass</strong>, decreased body fat</li>
                      <li><strong>More energy than ever</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Athletes Audience */}
            <div className={`audience-panel ${activeAudience === 'athletes' ? 'active' : ''}`}>
              <div className="audience-layout">
                <div className="audience-info">
                  <h4>Athletes (Youth, Collegiate, Pro)</h4>
                  <div className="pain-points">
                    <h5>Pain Points:</h5>
                    <ul>
                      <li>Overtraining, poor recovery</li>
                      <li>Fragmented support</li>
                      <li>Lack of individualized data</li>
                      <li>Nutrition confusion</li>
                    </ul>
                  </div>
                  <div className="what-you-get">
                    <h5>What You Get:</h5>
                    <p>Elite sports science systems used in the NFL and NCAA—personalized for your sport, position, and goals.</p>
                  </div>
                  <div className="results-highlight">
                    <h5>Results:</h5>
                    <ul>
                      <li><strong>14 lbs of clean muscle gained</strong></li>
                      <li><strong>22.5 mph sprinting speed</strong></li>
                      <li><strong>Velocity PRs</strong></li>
                      <li><strong>Career-best performance</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Coaches Audience */}
            <div className={`audience-panel ${activeAudience === 'coaches' ? 'active' : ''}`}>
              <div className="audience-layout">
                <div className="audience-info">
                  <h4>Coaches & Practitioners</h4>
                  <div className="pain-points">
                    <h5>Pain Points:</h5>
                    <ul>
                      <li>Siloed education</li>
                      <li>Burnout</li>
                      <li>Difficulty translating science into application</li>
                      <li>Lack of elite mentorship</li>
                    </ul>
                  </div>
                  <div className="what-you-get">
                    <h5>What You Get:</h5>
                    <p>Systems thinking, practical frameworks, and mentorship from someone who's done it at the highest level.</p>
                  </div>
                  <div className="results-highlight">
                    <h5>Results:</h5>
                    <ul>
                      <li><strong>Career advancement</strong></li>
                      <li><strong>Confidence in complex cases</strong></li>
                      <li><strong>Ability to serve clients at an elite level</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Results Section */}
      <section id="results" className="section results-section">
        <div className="container">
          <h2 className="section-heading">Proven Results. Real Transformations.</h2>
          <h3 className="section-subheading">From NFL locker rooms to executive boardrooms—Blueprxnt delivers measurable, sustainable outcomes.</h3>

          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">+22 lbs</div>
              <div className="result-desc">of muscle in first month</div>
              <div className="result-client">Sunil Patel, Entrepreneur</div>
            </div>
            <div className="result-card">
              <div className="result-number">Reversed</div>
              <div className="result-desc">diabetes, off all medication</div>
              <div className="result-client">Robert Shahidi, 60, Business Owner</div>
            </div>
            <div className="result-card">
              <div className="result-number">&lt;100</div>
              <div className="result-desc">LDL cholesterol without meds</div>
              <div className="result-client">Dr. Hirsh Kaveeshvar, Neurologist</div>
            </div>
            <div className="result-card">
              <div className="result-number">14 lbs</div>
              <div className="result-desc">clean muscle, -4% body fat</div>
              <div className="result-client">George Fulton, D1 Lacrosse</div>
            </div>
            <div className="result-card">
              <div className="result-number">22.5 mph</div>
              <div className="result-desc">sprinting speed, velocity PRs</div>
              <div className="result-client">Nima Movassaghi, D1 Tennis</div>
            </div>
            <div className="result-card">
              <div className="result-number">12-14%</div>
              <div className="result-desc">body fat at age 43, best shape</div>
              <div className="result-client">Erik Korem, Entrepreneur</div>
            </div>
          </div>

          {/* NFL Testimonials */}
          <div className="nfl-testimonials">
            <h3 className="testimonials-heading">Trusted by NFL Champions</h3>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>"Pratik's support through my injury and rookie year was unmatched. His knowledge and dedication are second to none."</p>
                <div className="testimonial-author">
                  <strong>Saquon Barkley</strong>
                  <span>NFL Running Back</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>"Pratik improved my strength, speed, and game preparation. His influence and dedication are invaluable."</p>
                <div className="testimonial-author">
                  <strong>Daniel Jones</strong>
                  <span>NFL Quarterback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Media Features */}
          <div className="media-features">
            <h4>As Featured In:</h4>
            <div className="media-logos">
              <span className="media-badge">ESPN</span>
              <span className="media-badge">Sports Illustrated</span>
              <span className="media-badge">Outside Magazine</span>
              <span className="media-badge">USA Today</span>
            </div>
            <p className="media-stat"><strong>75+ Podcast Appearances</strong> including The Blueprint with Dr. Erik Korem, Art of Coaching, Power Athlete HQ, and more.</p>
          </div>

          {/* Trusted Institutions */}
          <div className="institutions">
            <h4>Trusted by Elite Institutions:</h4>
            <div className="institutions-list">
              <span>New York Giants</span>
              <span>University of Oregon</span>
              <span>Michigan State University</span>
              <span>Kansas State University</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="section offers-section">
        <div className="container">
          <h2 className="section-heading">How to Work With Blueprxnt</h2>
          <h3 className="section-subheading">Whether you're ready for elite-level 1:1 coaching or just starting your journey, we have a path for you.</h3>

          <div className="offers-grid grid-5-items">
            {/* Offer 1 */}
            <div className="offer-card featured">
              <div className="offer-badge">Elite</div>
              <h4>Blueprxnt 1:1</h4>
              <div className="offer-for">For: High performers ready to invest in elite-level care</div>
              <div className="offer-details">
                <p><strong>What You Get:</strong> Full testing suite (DEXA, bloodwork, genetics, VO2max), custom protocols, weekly check-ins, monthly coaching calls, unlimited support</p>
                <div className="offer-investment">Starting at $30,000/year</div>
                <p className="offer-capacity">Capacity: 10-20 clients max. Waitlist until 2026.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
            </div>

            {/* Offer 2 */}
            <div className="offer-card">
              <h4>12-Week Programs</h4>
              <div className="offer-for">For: Athletes, executives, and South Asians seeking structured transformation</div>
              <div className="offer-details">
                <p><strong>Options:</strong> Blueprxnt Performance | Blueprxnt Integrate | Blueprxnt Reset</p>
                <div className="offer-investment">$1,000</div>
              </div>
              <Link to="/coaching" className="btn btn-secondary">Join the Next Cohort (Q1 2026)</Link>
            </div>

            {/* Offer 3 */}
            <div className="offer-card">
              <h4>Blueprxnt Diagnostic</h4>
              <div className="offer-for">For: Anyone seeking expert analysis and a personalized action plan</div>
              <div className="offer-details">
                <p><strong>What You Get:</strong> 90-min strategy session, comprehensive review, Loom summary + written report</p>
                <div className="offer-investment">$500</div>
              </div>
              <Link to="/services" className="btn btn-secondary">Book Your Diagnostic</Link>
            </div>

            {/* Offer 4 */}
            <div className="offer-card">
              <h4>Blueprxnt Circle (Community)</h4>
              <div className="offer-for">For: Anyone ready to learn, connect, and grow with like-minded high performers</div>
              <div className="offer-details">
                <p><strong>Options:</strong> Free tier | South Asian Health Collective | Performance & Sport Collective</p>
                <div className="offer-investment">Free to $149/month</div>
              </div>
              <Link to="/community" className="btn btn-primary">Join the Community</Link>
            </div>

            {/* Offer 5 */}
            <div className="offer-card">
              <h4>Speaking & Consulting</h4>
              <div className="offer-for">For: Organizations, teams, and companies seeking expert guidance</div>
              <div className="offer-details">
                <p><strong>Services:</strong> Keynotes, workshops, corporate wellness, strategic advisory</p>
                <div className="offer-investment">Starting at $5,000</div>
              </div>
              <Link to="/services#speaking" className="btn btn-secondary">Inquire About Availability</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Transform Your Health Into Performance?</h2>
          <p className="section-body">
            Join the movement. Whether you're a South Asian professional tired of generic advice, an executive seeking sustainable energy, an athlete chasing peak performance, or a coach ready to level up—Blueprxnt has a path for you.
          </p>
          <div className="final-cta-buttons">
            <Link to="/community" className="btn btn-primary btn-large">Join the Blueprxnt Community</Link>
            <Link to="/contact" className="btn btn-secondary btn-large">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
