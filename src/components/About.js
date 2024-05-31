import React, { useState } from 'react';
import './about.css';

function About() {
  const [theme, setTheme] = useState('light');
  const [expandedSection, setExpandedSection] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setSubmittedFeedback(feedback);
    setFeedback('');
  };

  return (
    <div className={`about-container ${theme}`}>
      <h1>About Page</h1>
      <button onClick={toggleTheme} className="theme-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <div className="about-sections">
        <div className="about-section">
          <h2 onClick={() => toggleSection('mission')}>
            Our Mission {expandedSection === 'mission' ? '-' : '+'}
          </h2>
          {expandedSection === 'mission' && <p>We aim to provide the best service to our customers.</p>}
        </div>
        <div className="about-section">
          <h2 onClick={() => toggleSection('team')}>
            Our Team {expandedSection === 'team' ? '-' : '+'}
          </h2>
          {expandedSection === 'team' && <p>Our team is made up of experienced professionals dedicated to excellence.</p>}
        </div>
      </div>
      <div className="feedback-section">
        <h2>Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea 
            value={feedback} 
            onChange={handleFeedbackChange} 
            placeholder="Your feedback"
          ></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submittedFeedback && <p className="feedback-message">Thank you for your feedback: "{submittedFeedback}"</p>}
      </div>
    </div>
  );
}

export default About;
