import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import Features from './components/Features';
import Results from './components/Results';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Mentors />
      <Features />
      <Results />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
