import React from 'react';
import './FeaturesSection.css';
import { FaLaptopCode, FaCogs, FaMicrochip } from 'react-icons/fa'; // Example icons

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="section-header">
        <h2>What We Offer</h2>
        <p>Unlock precision and performance with our cutting-edge solutions.</p>
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <FaLaptopCode className="feature-icon" />
          <h3>Powerful Software Tools</h3>
          <p>Analyze, simulate, and optimize your vehicle setup with intuitive and powerful software. Starting with our Gearing Calculator.</p>
          <a href="https://gearing.gpmech.com" className="feature-link">Learn More &rarr;</a>
        </div>
        <div className="feature-item">
          <FaMicrochip className="feature-icon" />
          <h3>Innovative Hardware</h3>
          <p>Capture real-time data and gain insights with our robust and reliable hardware solutions designed for the track.</p>
          <a href="#hardware" className="feature-link">Coming Soon &rarr;</a>
        </div>
        <div className="feature-item">
          <FaCogs className="feature-icon" />
          <h3>Dynamics Expertise</h3>
          <p>Leverage our deep understanding of vehicle dynamics to achieve optimal performance and consistency.</p>
          <a href="#about" className="feature-link">About Us &rarr;</a>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;