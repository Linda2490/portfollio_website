import React from 'react'

import './Home.css'
export default function Home() {
  return (
    <div className="Home-container" id="home">
      <div className="Home-parent">
        <div className="Home-details">
          <div className="Home-details-name">
            <span className="secondary-text">
              <h5>Creative mind, creative works</h5>
            </span>
          </div>
          <div className="Home-details-role">
            <div className="primary-text">
              <div className="textt">I'm web</div>
              <ul className="option">
                <li>
                  
                  <span>Developer</span>
                </li>

                <li>
                  <span style={{ marginRight: '30px' }} className='designer'>Designer</span>
                </li>
                <li>
                  
                  <span>Developer</span>
                </li>

                <li>
                  <span style={{ marginRight: '30px' }} className='designer'>Designer</span>
                </li>
              </ul>
              {/* <h1 className='linee typing' >web&nbsp;developer</h1>
              <h1  className='lineee typingg' > Designer</h1> 
            */}
            </div>
          </div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahdi.kaaniche1998@gmail.com">
            <button style={{ marginLeft: '30px' }} className="btn">
              Contact me
            </button>
          </a>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  )
}
