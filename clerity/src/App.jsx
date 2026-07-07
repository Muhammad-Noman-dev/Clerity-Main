import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    
      <div className="navhome">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <h2 className="cla">Clarity</h2>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
              <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>

            {/* Actions */}
            <div className="nav-actions">
              <button className="btn">Get Started</button>
              <div className="ham" onClick={toggleMenu}>
                &#9776;
              </div>
            </div>
          </nav>
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    
  );
};

export default App;