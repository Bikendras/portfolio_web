import React from 'react'
import { FaGithubSquare, FaWordpressSimple } from 'react-icons/fa';
export default function Projects() {
  return (
    <section className='project' id='project'>
      <div className='project_1'>
        <div className='project_web'>
          <h2>PROJECTS</h2>
        </div>
        <div className='all_project'>
          <article className='project_artic'>
            <img src="pexels-photo-326503.webp" alt="" />
            <div className='project_data'>
              <h2>E-Commerce Shopping Websit</h2>
              <p>Built a dynamic e-commerce website using React.js, integrated with MongoDB and Node.js for seamless shopping, user authentication, and payment processing. This concise description highlights your role as a front-end developer and your key contributions to the e-commerce website, emphasizing the technologies used and the core features you implemented.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
          <article className='project_artic'>
            <img src="pexels-photo-2148222.webp" alt="" />
            <div className='project_data'>
              <h2>Turist Website</h2>
              <p>Built a dynamic responsive website using HTML,CSS,React JS. This concise description highlights of my role as a front-end developer and our key contributions to the website, emphasizing the technologies used and the core features you implemented.I highly recommend using responsive web design. It is the best way to ensure that your website looks good and works well on all devices.A single website can replace the need for separate desktop and mobile websites.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
          <article className='project_artic'>
            <img src="pexels-photo-12883026.webp" alt="" />
            <div className='project_data'>
              <h2>Portfolio Website</h2>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
              <div className='Project_icons'><FaGithubSquare /><FaWordpressSimple /></div>
            </div>
          </article>
        </div>
      </div>
    </section>

  )
}
