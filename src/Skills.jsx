import React from 'react';
import { skills } from './Data';

export default function Skills() {
  return (
    <section className="skill section" id="skills">
      <div className="skill_1">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <span className="section-line" />
          <p className="section-subtitle">
            Technologies and tools I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="All_skills">
          {skills.map((skill) => (
            <article className="artic skill-card" key={skill.id}>
              <span className="skill-icon">
                <img width="80" height="80" src={skill.icon} alt={skill.title} />
              </span>
              <h4>{skill.title}</h4>
              <p className="skill-items">{skill.items}</p>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
