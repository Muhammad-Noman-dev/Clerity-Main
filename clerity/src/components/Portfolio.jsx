import React from 'react'
import './Portfolio.css'
import Portfolio1 from './Portfolio1'


const Portfolio = () => {
  return (
    <div className='port-cont'>
        <div>
            <h3 className='port'>Portfolio</h3>
        </div>
        <div >
            <p className='mece'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        </div>
        <br/><br/>

        <div>
            <button className="port-btn1">All Projects</button>
            <button className="port-btn">Web Design</button>
            <button className="port-btn">Mobile Apps</button>
            <button className="port-btn">Branding</button>
            <button className="port-btn">UI/UX</button>
        </div>

        
      <Portfolio1/>
    </div>
  )
}

export default Portfolio
