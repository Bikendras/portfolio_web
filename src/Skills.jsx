import React from 'react'

export default function Skills() {
  return (
    <section className='skill' id='skills'>
      <div className='skill_1'>
        <div className='skill_Tech'>
          <h1>Skills</h1>
        </div>
        <div className='All_skills'>
          <article className='artic'>
            <span><img width="150" height="150" src="html.png" alt="html-5--v1" /></span>
            <h4>HTML&CSS</h4>
            <p>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
          </article>

          <article className='artic'>
            <span><img width="100" height="150" src="javascript1.png" alt="js" /></span>
            <h4>Javascript</h4>
            <p>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>
          </article>

          <article className='artic'>
            <span><img width="100" height="150" src="logo192.png" /></span>
            <h4>React</h4>
            <p>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
          </article>
        </div>
      </div>
    </section>

  )
}
