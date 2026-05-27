import './Footer.css';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import React from 'react';
import { profile, social } from './Data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={24} />
            <div>
              <p>{profile.location}</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} />
            <span>{profile.phone}</span>
          </div>
          <div className="email">
            <FaMailBulk size={20} />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <div className="right">
          <h4>About Myself</h4>
          <p>
            I am constantly learning and exploring new technologies to stay at the forefront of
            web development. Let&apos;s build something exceptional together.
          </p>
          <div className="social">
            <a href={social[3].url} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href={social[1].url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href={social[0].url} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="resume-float"
        title="Download Resume"
      >
        PDF
      </a>
    </footer>
  );
}
