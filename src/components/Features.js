import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      id: 1,
      icon: '',
      title: 'Precision Matching',
      description: 'Paired with mentors who are held your exact target role'
    },
    {
      id: 2,
      icon: '',
      title: 'Fast Placement',
      description: 'Average 60 days from onboarding to job offer'
    },
    {
      id: 3,
      icon: '',
      title: 'Global Network',
      description: 'Mentors and employers across 40+ countries'
    },
    {
      id: 4,
      icon: '',
      title: 'Verified Experts',
      description: 'Every mentor is vetted for credentials and communication'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <h2 className="features-title">
            Smart Mentorship Meets <br /> Human Insight —<br />
            <span className="features-highlight">That's How We Help You Grow</span>
          </h2>
          <p className="features-description">
            We don't believe in generic advice. Every mentor in our network has walked the path you're on — and reached the destination you're aiming for. Our matching system surfaces the right person at the right time.
          </p>
          <a href="#" className="features-link">Explore Services ›</a>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
