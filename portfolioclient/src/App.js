import React from 'react'
import './App.css'
import Contact from './PortfolioContainer/contact/Contact'
import Footer from './PortfolioContainer/Footer'
import Home from './PortfolioContainer/Home/Home'
import Hf from './PortfolioContainer/Home_following/Hf'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import Sc from './PortfolioContainer/services_component/Sc'
import ScIcons from './PortfolioContainer/services_component/ScIcons'
import Testimonials from './PortfolioContainer/Testimonials/Testimonials'
import TestimonialsFollowing from './PortfolioContainer/Testimonials/TestimonialsFollowing'
import Works from './PortfolioContainer/works/Works'

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <Home />
      <Hf />
      <Sc />
      <ScIcons />
      <Works />
      <Testimonials />
      <TestimonialsFollowing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
