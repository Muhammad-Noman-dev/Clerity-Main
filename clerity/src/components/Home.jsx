import React from 'react'
import './Home.css'
import img1 from '../assets/img1.webp'


const Main = () => {
  return (

    <div className='home'>
        <div>
            <div id="hometext">
                <h1>Transform Your <br/> Digital Presence</h1>
                <p className='para'>We create innovative digital solutions that drive growth and <br/> elevate your brand. From web development to digital   <br/>marketing, we're your partners in digital transformation.</p>
                <button id="btn1">Get Started</button>
                <button id="btn2">Our Work</button>
                <div className='mini'>
                  <div>
                    
                    <p><h2 className='pro'>150</h2><br/>Projects Completed</p>
                  
                  </div>
                  <div>
                    
                  <p><h2 className='cli'>95</h2><br/>Client Satisfaction</p>
                  </div>
                  <div>
                    
                  <p><h2 className='team8888'>24</h2><br/>Team Member</p>
                  </div>

                </div>
            </div>
            
        </div>
        <div>
          <img src={img1} alt="" height={400} width={600} id="img1"/>
        </div>
      
      
    </div>
  )
}

export default Main
