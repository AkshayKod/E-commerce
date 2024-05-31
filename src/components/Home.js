import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  // const [count, setCount] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleButtonClick = () => {
    alert('Button was clicked!');
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };

  const toggleSection = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`home-container ${theme}`}>
      <header className="header">
        <h1 className="logo">Business Class</h1>
        <nav>
          {/* <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> */}
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to Our Shopify</h1>
          <p>Partnering for your success with tailored solutions and exceptional services.</p>
          <button onClick={handleButtonClick} className="cta-button">Get Started</button>
        </section>
        <section className="interactive-section">
          <form onSubmit={handleFormSubmit} className="greeting-form">
            <input 
              type="text" 
              value={name} 
              onChange={handleInputChange} 
              placeholder="Enter your name" 
              className="input-field"
            />
            <button type="submit" className="interactive-button">Greet Me</button>
          </form>
          {greeting && <p className="greeting-message">{greeting}</p>}
        </section>
        {/* <section className="counter-section">
          <h2>Interactive Counter</h2>
          <div className="counter">
            <button onClick={handleDecrement} className="counter-button">-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} className="counter-button">+</button>
          </div>
        </section> */}
        <section className="toggle-section-container">
          <button onClick={toggleSection} className="interactive-button">
            {isSectionVisible ? 'Hide' : 'Show'} Business Details
          </button>
          {isSectionVisible && 
            <div className="toggle-section">
              <h2>About Our Business</h2>
              <p>We are committed to delivering high-quality services that drive success and value for our clients.</p>
              {/* <ul>
                <li><strong>Consulting:</strong> Expert advice to help you achieve your business goals.</li>
                <li><strong>Strategy:</strong> Tailored strategies to enhance your market position.</li>
                <li><strong>Technology:</strong> Cutting-edge solutions to streamline your operations.</li>
              </ul> */}
              <h3>Contact Us</h3>
              <p>Email: akshay@businessclass.com</p>
              <p>Phone:9141030375 -</p>
              <p></p>
            </div>
          }
        </section>
      </main>
      <footer>
        {/* <button onClick={toggleTheme} className="theme-button">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button> */}
        <p>&copy; 2024 Business Class. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
