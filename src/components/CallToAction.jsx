import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Dominate the Track?</h2>
        <p>Join the growing number of racers and engineers relying on GPMech for victory.</p>
        <a href="#contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </section>
  );
}

export default CallToAction;