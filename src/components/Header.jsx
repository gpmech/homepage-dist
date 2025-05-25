import React from 'react';
import './Header.css'; // Component-specific styles

function Header({ logo }) {
  // You'll pass your logo as a prop, or import it directly if it's static
  // For now, let's assume you have a path or a React component for the logo
  const GpMechLogo = () => (
    // Replace with your actual logo component or <img> tag
    <img src="/path/to/your/logo.png" alt="GPMech Logo" className="header-logo" />
  );

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <GpMechLogo />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://gearing.gpmech.com">Gearing Tool</a></li>
            <li><a href="#software">Software</a></li>
            <li><a href="#hardware">Hardware</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;