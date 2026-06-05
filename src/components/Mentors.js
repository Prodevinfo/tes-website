import React from 'react';
import '../styles/Mentors.css';
import { mentorsData, partnersData } from '../data/mentors';

function Mentors() {
  return (
    <section className="mentors-section" id="mentors">
      <div className="mentors-container">
        <div className="section-header">
          <p className="section-label">OUR NETWORK</p>
          <h2>Our Mentors</h2>
          <a href="#" className="view-all">View All ›</a>
        </div>

        <div className="mentors-grid">
          {mentorsData.map(mentor => (
            <div key={mentor.id} className="mentor-card">
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-title">{mentor.title}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default Mentors;
