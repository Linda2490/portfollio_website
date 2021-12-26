import React from 'react'
import Typical from 'react-typical'
import './Home.css'
export default function Home() {
  return (
    <div className="Home-container">
      <div className="Home-parent">
        <div className="Home-details">
          <div className="Home-details-name">
            <span className="secondary-text">
              Creative mind, creative works
            </span>
          </div>
          <div className="Home-details-role">
            <span className="primary-text">
              <h1>
                <Typical loop={Infinity} steps={['Welcome', 1000]} />
              </h1>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={['Web developer', 1000, 'Designer', 1000]}
                />
              </h1>
            </span>
          </div>

          <button>Contact Me</button>
        </div>
      </div>
      <div className="profile-picture"></div>
    </div>
  )
}
