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
                    
                    <div className="navbar-icons">
                        <svg className="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <svg className="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7"/>
                            <rect x="14" y="3" width="7" height="7"/>
                            <rect x="14" y="14" width="7" height="7"/>
                            <rect x="3" y="14" width="7" height="7"/>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}
