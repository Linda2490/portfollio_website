import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-parent">
        <div className="row">
          <div className="works-line"></div>
          <div className="works-title">Contact</div>
        </div>
        <div className="works-subtitle">OUR SERVICES FOR CLIENTS</div>
      </div>
      <div className="highlights">
        <div className="social-icons">
          <div className="linkedin"></div>
          <div className="insta"></div>
          <div className="upwork"></div>
          <div className="fiverr"></div>
        </div>
        <div className="contact-highlight">
          <span>Do you have any</span>
          <span>project in your mind</span>
        </div>
        <button style={{ marginLeft: '350px', marginTop:'300px' }}>
          Contact me
        </button>
        <div className="contact-details">
          <div className="tel"></div>
          <h4>+216 26 194 035</h4>
          <div className="email"></div>
          <h4>mahdi.kaaniche1998@gmail.com</h4>
          <div className="position"></div>
          <h4>Tunisia</h4>
        </div>
      </div>
    </div>
  )
}
