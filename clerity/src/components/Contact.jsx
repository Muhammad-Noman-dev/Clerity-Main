import React from 'react'
import './Contact.css'
import msg from '../assets/msg.png'
import rig1 from '../assets/rig1.png'
import rig2 from '../assets/rig2.png'
import rig3 from '../assets/rig3.png'
import iconlist from '../assets/iconlist.png'


const Contact = () => {
  
  return (
    <div>
      <h4 className='con'>Contacts</h4>
      <p className='con-para'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <div className='con-grid'>
        <div className="left">
            <img src={msg} alt="" className='msg77' />
            <h3 className='ms'>Let's Start a Conversation</h3>
            <p className='ms-para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>

            <div className="form-1">
            <input type="text" name="" id="inp1" placeholder='Your Name' />
            <input type="text" name="" id="inp2" placeholder='Email Address' />
            <input type="text" name="" id="inp3" placeholder='Whats This About' />
            <textarea type="text" name="" id="inp4" className='inp41' placeholder='Tell us more about your project...' > </textarea>

             <button className='con-btn'>Send Message</button>
        </div>

        </div>
        
        <div className="right">
            <h2>Ready to Transform Your Ideas?</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.</p>

            <div className="rig-grid">
                <div className="rigbox">
                    <img src={rig1} alt="" className='rig1-bt' />
                    <h4 className='email'>Email Us</h4>
                    <h5 className='hello-email'>hello@productdemo.com</h5>
                    <p className='email-para'>Response in 2-4 hours</p>
                </div>
                <div className="rigbox">
                    
                    <img src={rig2} alt="" className='rig1-bt' />
                    <h4 className='email'>Call Us</h4>
                    <h5 className='hello-email'>+1 (555) 987-6543</h5>
                    <p className='email-para'>Available 9AM - 6PM EST</p>
                </div>
                
                <div className="rigbox">
                    
                    <img src={rig3} alt="" className='rig1-bt' />
                    <h4 className='email'>Visit Our Office</h4>
                    <h5 className='hello-email'>4821 Broadway Street, New York, NY 10013</h5>
                    <p className='email-para'>Open Monday - Friday</p>
                </div>
                
                <div className="rigbox13">
                  <div className="box1100">
                    <h4 className='abcd'>24h</h4>
                    <p className='efgh'>Average Response</p>
                  </div>
                  <div className="box1100">
                    <h4 className='abcd'>98%</h4>
                    <p className='efgh'>Client Satisfaction</p>
                  </div>
                  <div className="box1100">
                    <h4 className='abcd'>150+</h4>
                    <p className='efgh'>Projects Delivered</p>
                  </div>
                </div>
                
            </div>

        </div>

      </div>
      <div>
        <h4 className='connect'>Connect With Us</h4>
        <img src={iconlist} alt="" className='iconlist1' />
      </div>
    </div>
  )
}

export default Contact
