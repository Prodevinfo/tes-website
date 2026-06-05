import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">TES</span>
              </div>

              <div className="logo-text">Talent Extraction System</div>
            </div>
            <p className="footer-description">
              Talent Extraction System — premium career mentorship and job placement for ambitious professionals.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>PLATFORM</h4>
            <ul>
              <li><a href="#find-mentor">Find a Mentor</a></li>
              <li><a href="#search-jobs">Search Jobs</a></li>
              <li><a href="#skill-assessment">Skill Assessment</a></li>
              <li><a href="#career-roadmap">Career Roadmap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About TES</a></li>
              <li><a href="#our-mentors">Our Mentors</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
              <li><a href="#careers">Careers at TES</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#career-guides">Career Guides</a></li>
              <li><a href="#interview-prep">Interview Prep</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 TES - Talent Extraction System. All rights reserved</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
