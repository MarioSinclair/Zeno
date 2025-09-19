import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar/navbar.jsx'
import Home from './home.jsx'
import Cards from './cards.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
