import './App.css'
import Home from './PortfolioContainer/Home/Home'
import Hf from './PortfolioContainer/Home_following/Hf'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import Sc from './PortfolioContainer/services_component/Sc'

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <Home />
      <Hf />
      <Sc />
    </div>
  )
}

export default App
