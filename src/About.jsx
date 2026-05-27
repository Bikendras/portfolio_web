import React from 'react';
import { Link } from 'react-scroll';
import { profile } from './Data';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-header">
        <h2 className="section-title">About</h2>
        <span className="section-line" />
      </div>

      <div className="about_container">
        <div className="about_img">
          <img src="bikendra.jpg" alt={profile.name} />
        </div>

        <div className="about_parag">
          <h3>{profile.title}</h3>
          <p>{profile.summary}</p>
          <ul className="about-highlights">
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Phone:</strong> {profile.phone}
            </li>
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
          </ul>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="btn btn-primary"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
