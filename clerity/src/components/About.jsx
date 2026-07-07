import React from 'react'
import './About.css'
import about1 from '../assets/about1.webp'
import about2 from '../assets/about2.webp'
import about3 from '../assets/about3.png'

const About = () => {
  return (
    
    <div className='about'>
        <div className='aboutchild'>
            <h4 className='discover'>DISCOVER OUT STORY</h4>
            <h2 className='disheading'>Innovative Solutions for a <br/> Digital-First World</h2>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/> enim ad minim veniam, quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p className='tikmark'>&#10004;  Excepteur sint occaecat cupidatat non proident.</p>
            <p className='tikmark'>&#10004;  Nemo enim ipsam voluptatem quia voluptas sit.</p>
            <p className='tikmark'>&#10004;  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <button id='about-btn'>DISCOVER MORE</button>


        </div>
        <div className='image-wrapper'>
            <img src={about1} alt="" height={400} width={600} className='main-image'/>
            <img src={about2} alt=""height={250}width={250} className='child-image'/>
            <img src={about3} alt="" className='child-image2'/>
        </div>

      
    </div>
  )
}

export default About
