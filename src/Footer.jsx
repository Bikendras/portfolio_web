import "./Footer.css";
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa";
import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={30} style={{marginRight:"2rem"}}/>
            <div>
                <p>Gram Post Bihta Dist</p>
                <p>Satna</p>
            </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{marginRight:"2rem"}}/>
                8878685813</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{marginRight:"2rem"}}/>
            bikendra7848@gmail.com</h4>
            
            </div>
        </div>
        


        <div className="right">
          <h4>About Myself</h4>
          <p>I am constantly learning and exploring new technologies to stay at the front of web development. </p>
          <div className="social">
          <FaFacebook size={30} style={{marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{marginRight:"1rem"}}/>
          <FaInstagram size={30} style={{marginRight:"1rem"}}/>
          </div>
        </div>
    </div>
    </div>
  )
}
