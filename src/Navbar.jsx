import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { links, social } from './Data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height || 0;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="Flipkart brand-link"
            onClick={closeMenu}
          >
            Port
            <span className="brand-accent">folio</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            onClick={toggleLinks}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <Link
                    to={url}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    activeClass="active-link"
                    className={`nav-link ${activeSection === url ? 'active-link' : ''}`}
                    onSetActive={() => setActiveSection(url)}
                    onClick={closeMenu}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon, label } = socialIcon;

            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-link"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
