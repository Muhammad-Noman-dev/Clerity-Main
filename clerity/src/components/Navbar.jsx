import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:px-6">
        <div className="bg-[#100d4b]/70 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">

          {/* Logo */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#7c6cff] to-[#ff7a59] bg-clip-text text-transparent">
            Clarity
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className="text-gray-300 hover:text-white">
              Home
            </NavLink>

            <NavLink to="/about" className="text-gray-300 hover:text-white">
              About
            </NavLink>

            <NavLink to="/services" className="text-gray-300 hover:text-white">
              Services
            </NavLink>

            <NavLink to="/portfolio" className="text-gray-300 hover:text-white">
              Portfolio
            </NavLink>

            <NavLink to="/team" className="text-gray-300 hover:text-white">
              Team
            </NavLink>

            <NavLink to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </NavLink>

          </div>

          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
            Get Started
          </button>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0b0930] z-40 pt-24 px-8 md:hidden">

          <div className="flex flex-col gap-6 text-xl">

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>

            <NavLink to="/team" onClick={closeMenu}>
              Team
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;