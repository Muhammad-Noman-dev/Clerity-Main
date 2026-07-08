import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navhome">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h2 className="cla">Clarity</h2>
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={closeMenu} end>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
            <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

            <button className="btn nav-btn-mobile" onClick={closeMenu}>
              Get started
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="nav-actions">
            <button className="btn">Get started</button>
          </div>

          {/* Hamburger — always in DOM, shown only on mobile via CSS */}
          <div
            className={`ham ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navbar;