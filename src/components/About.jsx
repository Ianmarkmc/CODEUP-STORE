import React from 'react';
import './About.css';


function About({ navigateTo }) {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1 className="hero-title">Empowering Your Digital Future</h1>
        <p className="hero-subtitle">
          Innovative IT Solutions for Businesses and Visionaries
        </p>
        <div className="hero-buttons">
          <button onClick={() => navigateTo('products')} className="hero-button primary-button">
            Explore Our Services
          </button>
          <button onClick={() => navigateTo('contact')} className="hero-button secondary-button">
            Get in Touch
          </button>
        </div>
      </section>

      <section className="about-main-content-section">
        <h2 className="page-title">About CODE UP</h2>
        <div className="page-content">
          <p>
            Welcome to CODE UP, your trusted partner in digital transformation. We are a dynamic team of passionate software engineers, designers, and strategists dedicated to crafting exceptional technology solutions that drive growth and efficiency for businesses of all sizes.
          </p>
          <p>
            Our journey began with a simple vision: to bridge the gap between complex technological challenges and practical, user-friendly solutions. We believe that technology, when thoughtfully applied, can be a powerful catalyst for innovation and competitive advantage.
          </p>
          <p>
            At CODE UP, we specialize in a wide array of IT services, including custom software development, robust web and mobile application creation, seamless cloud solutions and migration, comprehensive cybersecurity consulting, insightful data analytics, and strategic IT consulting. We pride ourselves on our agile approach, ensuring flexibility, transparency, and timely delivery throughout every project lifecycle.
          </p>
          <p>
            Our commitment extends beyond just delivering code; we aim to build lasting partnerships, providing ongoing support and evolving our solutions to meet your changing needs. We are driven by your success and are always exploring new technologies to keep you ahead in the digital landscape.
          </p>
          <p>
            Join us in building a smarter, more connected future. 
          </p>
          <p>Let's innovate together!</p>
        </div>
      </section>

      <section className="services-preview-section">
        <h2 className="section-title">Our Core Expertise</h2>
        <div className="services-grid-preview">
          <div className="service-preview-card">
            <h3>Custom Software Development</h3>
            <p>Tailored solutions built to spec.</p>
          </div>
          <div className="service-preview-card">
            <h3>Web & Mobile Apps</h3>
            <p>Engaging experiences for all devices.</p>
          </div>
          <div className="service-preview-card">
            <h3>Cloud Solutions</h3>
            <p>Scalable, secure, and efficient infrastructure.</p>
          </div>
        </div>
        <button onClick={() => navigateTo('products')} className="read-more-button">
          View All IT Services
        </button>
      </section>
    </div>
  );
}

export default About;
















