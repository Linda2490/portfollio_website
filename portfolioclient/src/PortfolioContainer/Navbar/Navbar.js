import React from 'react'
import './Navbar.css'
var mw = require('../../assets/Asset 1.png')
export default function Navbar() {
  return (
    <div className="navbar-container" id="navbar">
      <img
        src={mw}
        style={{ height: '60px', position: 'relative' }}
        alt="no-internet"
      />

      <nav>
        <ul>
          <a href="#home">
            <li className="items">Home</li>
          </a>
          <a href="#sc">
            <li className="items"> Services</li>
          </a>
          <a href="#works">
            <li className="items" href="#works">
              Works
            </li>
          </a>
          <a href="#testimonials">
            <li className="items">Testimonials</li>
          </a>
          <a href="#contact">
            <li className="items">Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  )
}
