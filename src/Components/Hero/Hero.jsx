import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'



const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Ensuring better education for a better world</h1>
            <p>We offer a cutting-edge curriculum that is designed to empower students
                with te knowledge, skills, and experiences needed to excel in 
                the dynamic field of education</p>

            <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
        </div>
    </div>
  )
}

export default Hero