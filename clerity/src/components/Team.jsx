import React from 'react'
import './Team.css'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import rocket from '../assets/rocket.png'


const Team = () => {
  return (
    <div>
      <h3 className='team'>Team</h3>
      <p className='team-para'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    
    <div className='team-grid'>
        <div className='team-data'>
            <h4 className='team'>Meet Our Exceptional Team</h4>
            <p className='team-para'>Temporibus autem quibusdam et aut officiis debitis aut rerum <br/>necessitatibus saepe eveniet ut et voluptates repudiandae sint et <br/> molestiae non recusandae.</p>
            <div className='team-flex'>
                <div className='grid-75'>
                    <h5 className='team-75'>50+</h5>
                    <p className='para-75'>TEAM MEMBERS</p>
                </div>
                <div className='grid-75'>
                    <h5 className='team-75'>8</h5>
                    <p className='para-75'>DEPARTMENTS</p>
                </div>
                <div className='grid-75'>
                    <h5 className='team-75'>15+</h5>
                    <p className='para-75'>COUNTRIES</p>
                </div>


            </div>
        </div>
        <div className='team-pic'>
            <div className='grid-photo'>
                <div className="photo-1234">
                    <img src={photo1} alt="" height={200} width={200} />
                </div>
                <div className="photo-1234"><img src={photo2} alt=""height={200} width={200} /></div>
                <div className="photo-1234"><img src={photo3} alt=""height={200} width={200} /></div>
                <div className="photo-1234"><img src={photo4} alt=""height={200} width={200} /></div>

            </div>
        </div>

    </div>
    
    <div className='flex-team'>

        <img src={rocket} alt="" height={80}width={80} className='rc-pico'/>
        <h4 className='rc'>Ready to Join Our Mission?</h4>
        <p className='re-para000'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br/> praesentium voluptatum deleniti atque corrupti quos dolores.</p>
        <div className='b22'>
            <button className='rc-btn'>View Open Roles</button>
        <button className='rc-btn1'>Learn Out Culture</button>
        </div>


    </div>
    
    </div>
    
  )
}

export default Team
