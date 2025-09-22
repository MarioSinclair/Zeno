import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './navbar.css'

export default function Navbar() {
    const { user, logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

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
                    <Link to="/wallet" className="nav-link">Wallet</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>
                
                <div className="navbar-actions">
                    {user ? (
                        // User is logged in - show user menu
                        <div className="user-menu">
                            <div className="user-info">
                                <span className="user-email">{user.email}</span>
                            </div>
                            <button onClick={handleLogout} className="nav-button logout-button">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="nav-button secondary-button">Log in</Link>
                            <Link to="/signup" className="nav-button primary-button">Sign up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
