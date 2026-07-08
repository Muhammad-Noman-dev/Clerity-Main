import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import './index.css'
const App = () => {
  return (
    <div>
        <Routes>
            <Route to="/" element={<Home/>}/>
            <Route to="/about" element={<About/>}/>
            <Route to="/services" element={<Services/>}/>
            <Route to="/portfolio" element={<Portfolio/>}/>
            <Route to="/team" element={<Team/>}/>
            <Route to="/contact" element={<Contact/>}/>

          </Routes>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default App
