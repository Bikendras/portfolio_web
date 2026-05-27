import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile, social } from './Data';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-overlay" />
      <div className="content">
        <div className="contaent-text hero-text">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1>
            <span className="hero-name">{profile.name.split(' ')[0]}</span>{' '}
            {profile.name.split(' ').slice(1).join(' ')}
          </h1>
          <p className="developer">{profile.title}</p>
          <p className="Turning_ideas">{profile.tagline}</p>

          <div className="hero-actions">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="btn btn-primary"
            >
              Hire Me
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Resume
            </a>
          </div>

          <div className="Icons">
            <a href={social[0].url} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={social[1].url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="contaent-text hero-image">
          <img src="hero-01dff752.svg" alt="Developer illustration" />
        </div>
      </div>
    </section>
  );
};

export default Home;
