import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unleash Your Vehicle's Full Potential</h1>
        <p>Advanced Software and Hardware for Race Vehicle Dynamics Optimization.</p>
        <div className="hero-buttons">
          <a href="https://gearing.gpmech.com" className="btn btn-primary">Try Gearing Tool</a>
          <a href="#software" className="btn btn-secondary">Explore Software</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;