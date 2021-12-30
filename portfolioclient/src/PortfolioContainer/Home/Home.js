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

          <button>Contact me</button>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  )
}
