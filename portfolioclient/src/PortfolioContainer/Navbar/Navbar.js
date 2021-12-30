import React from 'react'
import './Navbar.css'
var mw = require("../../assets/Asset 1.png")
export default function Navbar() {
  return (
      
      
    <div className="navbar-container">
     <img src={mw} style={{height:'60px', position:'relative'}} alt='no-internet'/>
      
        <nav>
      
          <ul>
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Works</li>
            <li className="items">Testimonials</li>
            <li className="items">Contact</li>
          </ul>
        </nav>
        
      
    </div>
    
  )
}
