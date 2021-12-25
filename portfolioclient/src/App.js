import './App.css'
import Home from './PortfolioContainer/Home/Home'
import Navbar from './PortfolioContainer/Navbar/Navbar'

function App() {
  return (
    <div>
      <div className="main-container">
      <Navbar />
      
      </div>
      <div className="horizontal-line-navbar"></div>
      <div className="main-container">
        <div className="inner-container">
          <Home/>
        </div>
      </div>
      <div className="horizontal-line-home"></div>
    </div>
  )
}

export default App
