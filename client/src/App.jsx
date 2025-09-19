import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar/navbar.jsx'
import Home from './home.jsx'
import Cards from './cards.jsx'
import Wallet from './wallet.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
