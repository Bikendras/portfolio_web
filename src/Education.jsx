import React from 'react';
import { education } from './Data';

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <span className="section-line" />
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.id}>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <span className="education-period">{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
