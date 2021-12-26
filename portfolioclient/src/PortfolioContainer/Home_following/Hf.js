import React from 'react'
import './Hf.css'
export default function Hf() {
  return (
    <div className="Hf-container">
      <div className="Hf-parent">
        <div class="Hf-icon">
          <span>
            <i class="far fa-paper-plane"></i>
          </span>
        </div>
        <div className="title">
          <span>Future concept</span>
          <div className="Hf-line"></div>
        </div>

        <div className="line"></div>
        <div className="description">
          <span>
            We develop web applications from landing pages to fully E-commerce
            websites
          </span>
        </div>
      </div>

      <div className="Hf-parent">
        <div class="Hf-icon">
          <span>
            <i class="far fa-lightbulb"></i>
          </span>
        </div>
        <div className="title">
          <span>Creative solutions</span>
          <div className="Hf-line"></div>
        </div>
        <div className="line"></div>
        <div className="description">
          <span>
            We design spoken modern websites and dashboards and deliver a
            complete bluprint from PSD to XD files
          </span>
        </div>
      </div>
    </div>
  )
}
