import React from 'react';
import '../styles/Results.css';

function Results() {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-image">
          <div className="image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=700&fit=crop" 
              alt="Professional mentorship and career growth" 
              className="results-img"
            />
            <div className="success-badge">20+ Successful placements this quarter</div>
          </div>
        </div>

        <div className="results-content">
          <p className="results-label">OUR IMPACT</p>
          <h2 className="results-title">Results That Speak for Themselves</h2>
          <p className="results-description">
            Our mentors don't just advise — they actively advocate. From referrals to insider interview prep, TES members enter every opportunity with an edge.
          </p>

          <div className="results-stats">
            <div className="results-stat">
              <div className="stat-value">30+</div>
              <div className="stat-name">Professionals Mentored</div>
            </div>
            <div className="results-stat">
              <div className="stat-value">10+</div>
              <div className="stat-name">Verified Mentors</div>
            </div>
            <div className="results-stat">
              <div className="stat-value">50%</div>
              <div className="stat-name">Career Advancement Rate</div>
            </div>
            <div className="results-stat">
              <div className="stat-value">20+</div>
              <div className="stat-name">Jobs Placed</div>
            </div>
          </div>

          <button className="btn btn-dark">Start Your Journey ›</button>
        </div>
      </div>
    </section>
  );
}

export default Results;
