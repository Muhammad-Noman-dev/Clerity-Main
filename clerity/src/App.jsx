import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
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
