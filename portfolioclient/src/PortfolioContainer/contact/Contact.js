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
          <a href="https://www.linkedin.com/in/mahdi-kaaniche-web-dev/">
            <div className="linkedin"></div>
          </a>
          <a href="https://www.instagram.com/mahdi_webi/">
            <div className="insta"></div>
          </a>
          <a href="https://www.upwork.com/freelancers/~0142db5643926d7942?viewMode=1">
            <div className="upwork"></div>
          </a>
          <a href="https://www.fiverr.com/mahdikaanich916?up_rollout=true">
            <div className="fiverr"></div>
          </a>
        </div>
        <div className="contact-highlight">
          <span>Do you have any</span>
          <span>project in your mind</span>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahdi.kaaniche1998@gmail.com">
          <button style={{ marginLeft: '350px', marginTop: '120px' }}>
            Contact me
          </button>
        </a>
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
