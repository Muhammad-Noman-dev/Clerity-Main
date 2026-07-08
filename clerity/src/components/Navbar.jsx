import React, { useState } from 'react';
import { NavLink , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:px-6">
        <div className="bg-[#100d4b]/70 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
          
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#7c6cff] to-[#ff7a59] bg-clip-text text-transparent tracking-tighter">
              Clarity
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              Home
              <span className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#7c6cff] to-[#ff7a59] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </NavLink>

            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              About
            </NavLink>

            <NavLink 
              to="/services"
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              Services
            </NavLink>

            <NavLink 
              to="/portfolio"
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              Portfolio
            </NavLink>

            <NavLink 
              to="/team"
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              Team
            </NavLink>

            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#7c6cff] to-[#6a5af0] text-white px-7 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center z-50"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0b0930] z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex flex-col gap-8 text-2xl font-medium">
            <NavLink to="/" end onClick={closeMenu} className="text-gray-200 hover:text-white py-2">Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} className="text-gray-200 hover:text-white py-2">About</NavLink>
            <NavLink to="/services" onClick={closeMenu} className="text-gray-200 hover:text-white py-2">Services</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu} className="text-gray-200 hover:text-white py-2">Portfolio</NavLink>
            <NavLink to="/team" onClick={closeMenu} className="text-gray-200 hover:text-white py-2">Team</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className="text-gray-200 hover:text-white py-2">Contact</NavLink>
          </div>

          <Routes>
            <Route to="/" element={<Home/>}/>
            <Route to="/about" element={<About/>}/>
            <Route to="/services" element={<Services/>}/>
            <Route to="/portfolio" element={<Portfolio/>}/>
            <Route to="/team" element={<Team/>}/>
            <Route to="/contact" element={<Contact/>}/>

          </Routes>

          <div className="mt-auto pb-12">
            <button 
              onClick={closeMenu}
              className="w-full bg-gradient-to-r from-[#7c6cff] to-[#6a5af0] text-white py-5 rounded-2xl font-semibold text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden" 
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;