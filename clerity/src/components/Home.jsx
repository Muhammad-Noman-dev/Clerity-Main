import React from 'react'
import './Home.css'
import img1 from '../assets/img1.webp'

const stats = [
  { value: '150+', label: 'Projects completed' },
  { value: '95%', label: 'Client satisfaction' },
  { value: '24', label: 'Team members' },
]

const Home = () => {
  return (
    <section className="home">
      <div id="hometext">
        <span className="eyebrow">Web development · Branding · Growth</span>

        <h1>
          Transform your <span className="highlight">digital presence</span>
        </h1>

        <p className="para">
          We create innovative digital solutions that drive growth and elevate
          your brand. From web development to digital marketing, we're your
          partners in digital transformation.
        </p>

        <div className="btn-container">
          <button id="btn1">Get started</button>
          <button id="btn2">Our work</button>
        </div>

        <div className="mini">
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className="mini-item">
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </div>
              {i < stats.length - 1 && <span className="divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="visual">
        <div className="glow" aria-hidden="true" />
        <img src={img1} alt="Team collaborating on a digital project" id="img1" />
        <div className="floating-card">
          <span className="dot" aria-hidden="true" />
          <div>
            <strong>150+ projects</strong>
            <p>Delivered on time, every time</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home