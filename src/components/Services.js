import React from 'react';
import '../styles/Services.css';
import { servicesData } from '../data/services';

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <p className="section-label">WHAT WE OFFER</p>
          <h2>Strategic Solutions for Complex Careers</h2>
          <p className="services-subtitle">Every service is designed around one outcome: helping you reach the career level you're capable of.</p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Learn more ›</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
