import React from 'react';
import './Services.css';

const ServicesPage = () => {
  return (
    <div className="app">
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Clarity That Drives Results</h1>
          <p>Expert consulting, strategic solutions, and transformative services designed to bring clarity to your business challenges.</p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We deliver tailored solutions across strategy, technology, and operations to help your organization achieve sustainable growth.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📊</div>
            <div className="service-content">
              <h3>Business Strategy</h3>
              <p>Transform your vision into actionable strategies with data-driven insights.</p>
              <ul className="service-features">
                <li>Market Analysis & Research</li>
                <li>Strategic Planning</li>
                <li>Growth Roadmaps</li>
                <li>Competitive Intelligence</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">💻</div>
            <div className="service-content">
              <h3>Digital Transformation</h3>
              <p>Modernize your operations with cutting-edge technology.</p>
              <ul className="service-features">
                <li>Cloud Migration</li>
                <li>Custom Software Development</li>
                <li>AI & Automation</li>
                <li>Systems Integration</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">📈</div>
            <div className="service-content">
              <h3>Operational Excellence</h3>
              <p>Streamline processes and build resilient operations.</p>
              <ul className="service-features">
                <li>Process Optimization</li>
                <li>Performance Management</li>
                <li>Change Management</li>
                <li>Team Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="section-header">
          <h2>Our Approach</h2>
          <p>A proven 5-step methodology that ensures clarity and measurable success.</p>
        </div>

        <div className="process-grid">
          {['Discovery', 'Analysis', 'Strategy', 'Implementation', 'Optimization'].map((step, i) => (
            <div className="process-step" key={i}>
              <div className="step-number">{i + 1}</div>
              <h3>{step}</h3>
              <p>Phase {i + 1} description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Clerity brought complete clarity to our operations. Efficiency increased by 45% in just six months."</p>
            <strong>— Sarah Chen, CEO at Nexlify</strong>
          </div>
          <div className="testimonial-card">
            <p>"Outstanding digital transformation strategy and execution. Best consulting partner we've worked with."</p>
            <strong>— Michael Rodriguez, CTO at Vertex Solutions</strong>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Bring Clarity to Your Business?</h2>
        <p>Let's discuss how we can help you achieve your goals.</p>
        <a href="#contact" className="cta-button">Schedule Free Consultation</a>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h3>Clerity</h3>
            <p>Delivering clarity. Driving success.</p>
          </div>
          <div>
            <h4>Services</h4>
            <p>Strategy<br />Digital Transformation<br />Operations</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About<br />Process<br />Careers</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>hello@clerity.co</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Clerity. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;