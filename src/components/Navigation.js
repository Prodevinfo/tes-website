import React, { useEffect, useState } from 'react';
import '../styles/Navigation.css';
import logoBlack from '../assets/tes-logo-black.svg';
import logoWhite from '../assets/tes-logo-white.svg';

function Navigation() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand-block">
          <img className="navbar-brand-logo brand-logo-dark" src={logoWhite} alt="TES Talent Extraction System" />
          <img className="navbar-brand-logo brand-logo-light" src={logoBlack} alt="TES Talent Extraction System" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#mentors" className="nav-link">Mentors</a></li>
          <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#careers" className="nav-link">Careers</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 1.75v2.5M12 19.75v2.5M4.22 4.22l1.77 1.77M17.01 17.01l1.77 1.77M1.75 12h2.5M19.75 12h2.5M4.22 19.78l1.77-1.77M17.01 6.99l1.77-1.77" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <button className="nav-button" onClick={() => {
            const section = document.getElementById('get-started');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
