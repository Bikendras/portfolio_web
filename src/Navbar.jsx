import React, { useState, useRef, useEffect } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <div>
      <div>
        <nav>
          <div className='nav-center'>
            <div className='nav-header'>
              <span className='Flipkart'>Port<span style={{ color: "#059669" }}>folio</span></span>
              <button className='nav-toggle' onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
              <ul className='links' ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className='social-icons'>
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
