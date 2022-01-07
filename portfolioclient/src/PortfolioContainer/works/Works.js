import React from 'react'
import './Works.css'

export default function Works() {
  return (
    <div className="works-container">
      <div className="works-parent">
        <div className="row">
          <div className="works-line"></div>
          <div className="works-title">Works</div>
        </div>
        <div className="works-subtitle">THINGS WE'VE MADE</div>
      </div>
      <div className="works-details">
        <div className="projects">
          <div className="first-pic"></div>

          <div className="pic-details">
            <div className="first-pic-title">Showtag.tv</div>
            <div className="underline"></div>
            <div className="pic-description">
              We develop web applications from landing pages to fully E-commerce
              websites We develop web applications from landing pages to fully
              E-commerce websitesWe develop web applications from landing pages
              to fully E-commerce websitesWe develop web applications from
              landing pages to fully E-commerce websites
            </div>
            <a href='https://showtag.tv/'>
            <button style={{ margin: '95px', marginTop: '60px' }}>
              view the website
            </button>
            </a>
          </div>
        </div>

        <div className="projects">
          <div className="second-pic"></div>

          <div className="pic-details">
            <div className="second-pic-title">bombshellsa.com</div>
            <div className="underline"></div>
            <div className="pic-description">
              We develop web applications from landing pages to fully E-commerce
              websites We develop web applications from landing pages to fully
              E-commerce websitesWe develop web applications from landing pages
              to fully E-commerce websitesWe develop web applications from
              landing pages to fully E-commerce websites
            </div>
            <a href='https://www.bombshellsa.com'>
            <button style={{ margin: '95px', marginTop: '60px' }}>
              view the website
            </button>
            </a>
          </div>
        </div>
        <div className="projects">
          <div className="third-pic"></div>

          <div className="pic-details">
            <div className="third-pic-title">agencyone.fr</div>
            <div className="underline"></div>
            <div className="pic-description">
              We develop web applications from landing pages to fully E-commerce
              websites We develop web applications from landing pages to fully
              E-commerce websitesWe develop web applications from landing pages
              to fully E-commerce websitesWe develop web applications from
              landing pages to fully E-commerce websites
            </div>
            <a href='https://agencyone.fr/'>
            <button style={{ margin: '95px', marginTop: '60px' }}>
              view the website
            </button>
            </a>
          </div>
        </div>
        
        <button style={{marginLeft:'450px', marginTop:'1190px'}}>view more works</button>
        
      </div>
      
    </div>
  )
}
