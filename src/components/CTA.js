import React, { useState } from 'react';
import '../styles/CTA.css';

function CTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    goal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      role: '',
      goal: ''
    });
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section className="cta-section" id="get-started">
      <div className="cta-container">
        <div className="cta-content">
          <p className="cta-label">GET STARTED TODAY</p>
          <h2 className="cta-title">Connect With Our <br /> <span className="cta-highlight">Mentoring Team</span></h2>
          <ul className="cta-features">
            <li><span className="checkmark">✓</span> Matched with a mentor in 48 hours</li>
            <li><span className="checkmark">✓</span> First 1-on-1 session completely free</li>
            <li><span className="checkmark">✓</span> Cancel anytime, no lock-in contracts</li>
          </ul>
        </div>

        <div className="cta-form-wrapper">
          <h3 className="form-title">Start Your Journey</h3>
          <p className="form-subtitle">Fill out the form — we'll connect you with the right mentor.</p>
          
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="role"
                placeholder="Current Role / Industry"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Your Primary Goal</option>
                <option value="career-change">Career Change</option>
                <option value="advancement">Career Advancement</option>
                <option value="skill-development">Skill Development</option>
                <option value="job-search">Job Search</option>
                <option value="startup">Starting a Business</option>
                <option value="leadership">Leadership Development</option>
              </select>
            </div>

            <button type="submit" className="cta-btn">Get Started with TES  →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;