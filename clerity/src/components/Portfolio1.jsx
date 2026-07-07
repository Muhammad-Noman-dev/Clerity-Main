import React from 'react'
import './Portfolio1.css'
import po1 from '../assets/po1.webp'
import rat1 from '../assets/rat1.png'
import po2 from '../assets/po2.webp'
import po3 from '../assets/po3.webp'
import po4 from '../assets/po4.webp'
import po5 from '../assets/po5.webp'
import po6 from '../assets/po6.webp'




const Portfolio1 = ({props}) => {
  return (
    <div>
      <div className='port-grid'>
            <div className="port-box">
                <img src={po1} alt="" height={250} width={350} className='po-pic'/><br/>
                <div className='bt1-ra1'>
                    <button id="bt1"><b>WEB DESIGN</b></button>
                    <h6 className='star'>⭐ 4.8</h6>
                </div>
                <div className='gri-text '>
                    <h3 className='digi'>Digital Innovation Platform</h3>
                    <p className='para-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                    <button className="grid-btn111">React</button>
                    <button className="grid-btn111">Node.Js</button>
                    <button className="grid-btn111">AWS</button>
                </div>
            </div>
            
              <div className="port-box">
                <img src={po2} alt="" height={250} width={350} className='po-pic'/><br/>
                <div className='bt1-ra1'>
                    <button id="bt1"><b>MOBILE APP</b></button>
                    {/* <img src={rat1} alt="" id="ra1"/> */}
                    <h6 className='star'>⭐ 4.9</h6>
                </div>
                <div className='gri-text'>
                    <h3 className='digi'>Smart Productivity App</h3>
                    <p className='para-lorem'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <button className="grid-btn111">Flutter</button>
                    <button className="grid-btn111">Firebase</button>
                    <button className="grid-btn111">AI</button>
                </div>
              </div>
               
              
            
            <div className="port-box">
              <img src={po3} alt="" height={250} width={350} className='po-pic'/><br/>
              <div className='bt1-ra1'>
                <button id="bt1"><b>WEB DESIGN</b></button>
                <h6 className='star'>⭐ 5.0</h6>
                </div>
                <div className='gri-text'>
                  <h3 className='digi'>Digital Innovation Platform</h3>
                  <p className='para-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <button className="grid-btn111">React</button>
                  <button className="grid-btn111">Node.Js</button>
                  <button className="grid-btn111">AWS</button>
                </div>
              
            </div>
            <div className="port-box">
              <img src={po4} alt="" height={250} width={350} className='po-pic'/><br/>
              <div className='bt1-ra1'>
                <button id="bt1"><b>WEB DESIGN</b></button>
                <h6 className='star'>⭐ 4.8</h6>
                </div>
                <div className='gri-text'>
                  <h3 className='digi'>Digital Innovation Platform</h3>
                  <p className='para-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <button className="grid-btn111">React</button>
                  <button className="grid-btn111">Node.Js</button>
                  <button className="grid-btn111">AWS</button>
                </div>
            </div>
            <div className="port-box">
              <img src={po5} alt="" height={250} width={350} className='po-pic'/><br/>
              <div className='bt1-ra1'>
                <button id="bt1"><b>WEB DESIGN</b></button>
                <h6 className='star'>⭐ 4.7</h6>
                </div>
                <div className='gri-text'>
                  <h3 className='digi'>Digital Innovation Platform</h3>
                  <p className='para-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <button className="grid-btn111">React</button>
                  <button className="grid-btn111">Node.Js</button>
                  <button className="grid-btn111">AWS</button>
                </div>
            </div>
            <div className="port-box">
              <img src={po6} alt="" height={250} width={350} className='po-pic'/><br/>
              <div className='bt1-ra1'>
                <button id="bt1"><b>WEB DESIGN</b></button>
                <h6 className='star'>⭐ 4.6</h6>
                </div>
                <div className='gri-text'>
                  <h3 className='digi'>Digital Innovation Platform</h3>
                  <p className='para-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <button className="grid-btn111">React</button>
                  <button className="grid-btn111">Node.Js</button>
                  <button className="grid-btn111">AWS</button>
                </div>
            </div>

        </div>
        <div className='services-flex'>
                <div>
                    <h3 className='ready'>Ready to start your next project?</h3>
                </div>
                <div>
                    <p className='nulla'>Let's work together to bring your digital vision to life</p>
                </div>
                <div>
                    <button className='ser-btn'>Start A Project</button>
                    <button className="ser-btn1">View All Work</button>
                </div>

            </div>
    </div>
  )
}

export default Portfolio1
