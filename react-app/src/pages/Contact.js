import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    referral: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setFormStatus('error:Please fill in all required fields.');
      return;
    }

    // Simulate form submission
    setFormStatus('success:Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '', referral: '' });

    setTimeout(() => setFormStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">Whether you're ready to transform your health, explore coaching options, or discuss a partnership—we're here to help.</p>
          <div className="hero-body-text">
            <p>Blueprxnt is more than a service—it's a partnership. Reach out to start a conversation about your goals, challenges, and how we can work together.</p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="section contact-options-section">
        <div className="container">
          <h2 className="section-heading">How Can We Help?</h2>
          <h3 className="section-subheading">Choose the option that best fits your needs.</h3>

          <div className="contact-grid">
            <div className="contact-option-card featured">
              <div className="option-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="48" height="40" rx="4" stroke="#3372e3" strokeWidth="3"/>
                  <path d="M8 24h48" stroke="#3372e3" strokeWidth="3"/>
                  <circle cx="20" cy="36" r="4" fill="#3372e3"/>
                  <circle cx="32" cy="36" r="4" fill="#3372e3"/>
                  <circle cx="44" cy="36" r="4" fill="#3372e3"/>
                </svg>
              </div>
              <h4>Ready to Get Started?</h4>
              <p>Book a complimentary 30-minute discovery call with Pratik to discuss your goals, explore coaching options, and determine if Blueprxnt is the right fit.</p>
              <div className="best-for-list">
                <h5>Best for:</h5>
                <ul>
                  <li>Exploring Blueprxnt 1:1 coaching</li>
                  <li>Learning about 12-week programs or session packs</li>
                  <li>Discussing consulting or advising opportunities</li>
                  <li>Asking questions about services and pricing</li>
                </ul>
              </div>
              <a href="#book-call" className="btn btn-primary">Book a Discovery Call</a>
            </div>

            <div className="contact-option-card">
              <div className="option-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="8" width="40" height="32" rx="4" stroke="#3372e3" strokeWidth="3"/>
                  <path d="M20 52h24M32 40v12" stroke="#3372e3" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="32" cy="24" r="8" stroke="#3372e3" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Book Pratik to Speak or Appear</h4>
              <p>Pratik is available for keynotes, workshops, panels, podcast appearances, and media interviews on topics including performance health, elite sports science, South Asian health, and longevity medicine.</p>
              <div className="contact-email">
                <strong>Email:</strong> speaking@blueprxnt.com
              </div>
              <a href="mailto:speaking@blueprxnt.com" className="btn btn-secondary">Email Speaking Inquiries</a>
            </div>

            <div className="contact-option-card">
              <div className="option-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L56 20v24L32 56 8 44V20L32 8z" stroke="#3372e3" strokeWidth="3"/>
                  <path d="M32 32L8 20M32 32v24M32 32l24-12" stroke="#3372e3" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Interested in Partnering with Blueprxnt?</h4>
              <p>Blueprxnt collaborates with health companies, supplement brands, sports teams, VCs, and organizations aligned with our mission of performance health and cultural intelligence.</p>
              <div className="contact-email">
                <strong>Email:</strong> partnerships@blueprxnt.com
              </div>
              <a href="mailto:partnerships@blueprxnt.com" className="btn btn-secondary">Email Partnership Inquiries</a>
            </div>

            <div className="contact-option-card">
              <div className="option-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16h48v32H8z" stroke="#3372e3" strokeWidth="3"/>
                  <path d="M8 16l24 20 24-20" stroke="#3372e3" strokeWidth="3"/>
                </svg>
              </div>
              <h4>Have a General Question?</h4>
              <p>For all other inquiries, including customer support, community questions, or general information. We typically respond within 1-2 business days.</p>
              <div className="contact-email">
                <strong>Email:</strong> hello@blueprxnt.com
              </div>
              <a href="mailto:hello@blueprxnt.com" className="btn btn-secondary">Email General Inquiries</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Have Questions About Our Services?</h2>
              <p>Not sure which service is right for you? Fill out the form below and we'll get back to you within 1-2 business days with personalized recommendations.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">I'm interested in:</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="1:1-coaching">Blueprxnt 1:1 Coaching</option>
                    <option value="12-week-programs">12-Week Programs</option>
                    <option value="collective">Blueprxnt Collective (Group Coaching)</option>
                    <option value="diagnostic">Blueprxnt Diagnostic</option>
                    <option value="session-packs">Session Packs</option>
                    <option value="consulting">Consulting & Advising</option>
                    <option value="speaking">Speaking Engagements</option>
                    <option value="community">Blueprxnt Circle (Community Membership)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Tell us about your goals and challenges: <span className="optional">(optional)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any relevant details about what you're looking to achieve..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="referral">How did you hear about us? <span className="optional">(optional)</span></label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media (Instagram, LinkedIn, X)</option>
                  <option value="podcast">Podcast</option>
                  <option value="referral">Referral</option>
                  <option value="event">Event/Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {formStatus && (
                <div className={`form-message ${formStatus.split(':')[0]}`}>
                  {formStatus.split(':')[1]}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-large">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <div className="location-content">
            <h2>Where We're Based</h2>
            <p className="location-note">Blueprxnt operates virtually, serving clients worldwide. All coaching, consulting, and services are delivered remotely via video calls, apps, and digital platforms.</p>
            <div className="location-details">
              <p><strong>Blueprxnt</strong></p>
              <p>Virtual-First Company</p>
              <p>Serving Clients Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section">
        <div className="container">
          <h2 className="section-heading">Ready to Take the Next Step?</h2>
          <p className="section-body">
            Whether you're ready to book a call, submit an inquiry, or just want to connect—we're here to support your journey. Your transformation starts with a conversation.
          </p>
          <div className="final-cta-buttons triple">
            <a href="#book-call" className="btn btn-primary btn-large">Book a Discovery Call</a>
            <a href="#contactForm" className="btn btn-secondary btn-large">Submit an Inquiry</a>
            <a href="#" className="btn btn-secondary btn-large" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
          </div>
          <p className="cta-closing">We look forward to connecting with you.</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
