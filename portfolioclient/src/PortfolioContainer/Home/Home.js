import React from 'react'

import './Home.css'
export default function Home() {
  return (
    <div className="Home-container">
      <div className="Home-parent">
        <div className="Home-details">
          <div className="Home-details-name">
            <span className="secondary-text">
              <h5>Creative mind, creative works</h5>
            </span>
          </div>
          <div className="Home-details-role">
            <span className="primary-text">
              <h1>web&nbsp;developer</h1>
              <h1 style={{ marginLeft: '140px' }}>Designer</h1>
            </span>
          </div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahdi.kaaniche1998@gmail.com">
          <button>Contact me</button>
          </a>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  )
}
