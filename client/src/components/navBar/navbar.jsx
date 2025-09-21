import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="brand-link">
                        <div className="brand-icon">Z</div>
                        <span className="brand-text">ZENO</span>
                    </Link>
                </div>
                
                <div className="navbar-menu">
                    <Link to="/" className="nav-link">Personal</Link>
                    <Link to="/cards" className="nav-link">Business</Link>
                    <Link to="/wallet" className="nav-link">Markets</Link>
                    <Link to="/wallet" className="nav-link">Company</Link>
                </div>
                
                <div className="navbar-actions">
                    <button className="nav-button secondary-button">Log in</button>
                    <button className="nav-button primary-button">Sign up</button>
                    
                </div>
            </div>
        </nav>
    )
}
