import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Experience Driven Mentorship <br /> &
            <span className="hero-highlight"> Career Growth</span>
          </h1>
          <p className="hero-tagline">LEARN. BUILD. DELIVER. GROW.</p>
          <p className="hero-description">
            TES connects ambitious professionals with elite mentors, curated career paths, and real job opportunities — everything you need to reach your next level.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('mentors')}>Meet Our Mentors</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('services')}>Explore Services</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Professionals Mentored</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Verified Mentors</div>
            </div>
            <div className="stat">
              <div className="stat-number">50%</div>
              <div className="stat-label">Career Advancement Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Jobs Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
