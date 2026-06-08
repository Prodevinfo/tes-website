import React, { useState } from 'react';
import '../styles/CTA.css';
import axios from 'axios';

const WEB3FORMS_KEY = "1f78d3dd-7ce1-459f-93d8-32a32092f1a3";

function CTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    goal: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: WEB3FORMS_KEY,
        name: formData.fullName,
        email: formData.email,
        role: formData.role,
        goal: formData.goal,
        subject: `New Candidate Sign-up: ${formData.fullName}`,
        from_name: "TES Mentoring Portal"
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (response.data.success) {
        console.log("Success:", response.data);
        setMessage("Thank you! We will contact you soon.");
        setFormData({
          fullName: '',
          email: '',
          role: '',
          goal: ''
        });
      } else {
        console.log("Error response:", response.data);
        setMessage(response.data.message || "Something went wrong. Please try again.");
      }

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="cta-section" id="get-started">
      <div className="cta-container">
        <div className="cta-content">
          <p className="cta-label">GET STARTED TODAY</p>
          <h2 className="cta-title">
            Connect With Our <br />
            <span className="cta-highlight">Mentoring Team</span>
          </h2>

          <ul className="cta-features">
            <li><span className="checkmark">✓</span> Matched with a mentor in 48 hours</li>
            <li><span className="checkmark">✓</span> First 1-on-1 session completely free</li>
            <li><span className="checkmark">✓</span> Cancel anytime, no lock-in contracts</li>
          </ul>
        </div>

        <div className="cta-form-wrapper">
          <h3 className="form-title">Start Your Journey</h3>
          <p className="form-subtitle">
            Fill out the form — we'll connect you with the right mentor.
          </p>

          {message && (
            <div className="form-message">
              {message}
            </div>
          )}

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

            <button type="submit" className="cta-btn">
              Get Started with TES →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;