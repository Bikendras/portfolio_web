import React from 'react';
import { experience } from './Data';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-line" />
        <p className="section-subtitle">My professional journey building real-world products.</p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={item.id}>
            <div className="timeline-header">
              <h3>{item.role}</h3>
              <span className="timeline-period">{item.period}</span>
            </div>
            <p className="timeline-company">
              {item.company} · {item.location}
            </p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
