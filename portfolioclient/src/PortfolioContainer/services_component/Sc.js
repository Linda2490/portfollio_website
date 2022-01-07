import React from 'react'
import './Sc.css'

export default function Sc() {
  return (
    <div className="Sc-container" id='sc'>
      <div className="Sc-parent">
        <div className="row">
          <div className="Sc-line"></div>
          <div className="Sc-title">Services</div>
        </div>
        <div className="Sc-subtitle">OUR SERVICES FOR CLIENTS</div>
        
      </div>
      <div className="Sc-details">
          <div className="Sc-box">
            <div className="title">
              <span>UI design</span>
              <div className="line"></div>
            </div>
            <div className="description">
              <span>
                We develop web applications from landing pages to fully
                E-commerce websites
              </span>
            </div>
          </div>
          <div className="Sc-box">
            <div className="title">
              <span>Front-end development</span>
              <div className="line"></div>
            </div>
            <div className="description">
              <span>
                We develop web applications from landing pages to fully
                E-commerce websites
              </span>
            </div>
          </div>
          <div className="Sc-box">
            <div className="title">
              <span>UI design</span>
              <div className="line"></div>
            </div>
            <div className="description">
              <span>
                We develop web applications from landing pages to fully
                E-commerce websites
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}
