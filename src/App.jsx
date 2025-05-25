import React from 'react';
import './App.css'; // Component-specific styles
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;