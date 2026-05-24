import React from 'react'
import {Link} from "react-router-dom";

export default function About() {
  return (
    <section className='about'  id='about'>
      <div className='skill_Tech'>
          <h1>About</h1>
        </div>
      <div className='about_container'>
        <div className='about_img'>
          <img src="bikendra.jpg" alt="" />
        </div>
        <div className='about_parag'>
          <h1>I am friendly Front-End Developer..</h1>
          <p>My name is Bikendra singh, it's a begning of my carrer in IT field .During my training session learn many languages to grow my self and also gain more Knowledge . With this i can create new more effective projects.</p>
          <Link to='/contact' className='btn'>CONTACT</Link>
        </div>
      </div>
    </section>
  )
}
