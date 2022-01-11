import React from 'react'
import './ScIcons.css'



export default function ScIcons() {
    
    return (
        <div  >
        <div id="slider">
        {/* <i className="fas fa-chevron-left" style={{marginTop: '150px'}} ></i> */}
  <input type="radio" name="slider" id="slide1" defaultChecked />
  <input type="radio" name="slider" id="slide2" />
  
  
  <div id="slides">
  
    <div id="overflow">
      <div className="inner">
        <div className="slide slide_1">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_2">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_3">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_4">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_5">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_6">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_7">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_8">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_9">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_10">
          <div className="slide-content">
            
          </div>
        </div>
        <div className="slide slide_11">
          <div className="slide-content">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="controls">
    <label htmlFor="slide1" />
    <label htmlFor="slide2" />
     
  </div>
  <div id="bullets">
    <label htmlFor="slide1" />
     <label htmlFor="slide2" />
    
  </div>
</div>

        </div>
    )
}
