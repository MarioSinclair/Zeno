import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About Zeno</h1>
          <p className="about-subtitle">
            Your personal credit card management companion
          </p>
        </div>
      </div>

      <div className="about-main">
        <div className="about-section">
          <h2>What is Zeno?</h2>
          <p>
            Zeno is a comprehensive credit card management platform designed to help you 
            make informed decisions about your financial future. We understand that choosing 
            the right credit card can be overwhelming with countless options, varying terms, 
            and complex reward structures.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To simplify credit card selection and management by providing clear, 
            personalized recommendations based on your spending habits and financial goals. 
            We believe everyone deserves access to financial tools that help them make 
            smarter money decisions.
          </p>
        </div>

        <div className="about-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Card Discovery</h3>
              <p>Explore credit cards from major banks with detailed comparisons</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Recommendations</h3>
              <p>Get tailored suggestions based on your spending patterns</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Smart Analytics</h3>
              <p>Track your rewards and optimize your card usage</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Wallet</h3>
              <p>Manage your cards safely with our encrypted wallet system</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose Zeno?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Comprehensive card database with real-time information</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>User-friendly interface designed for all experience levels</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Secure authentication and data protection</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Regular updates with new cards and features</span>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Get Started</h2>
          <p>
            Ready to take control of your credit card strategy? Sign up for a free account 
            and start exploring cards that match your lifestyle and financial goals.
          </p>
          <div className="cta-buttons">
            <a href="/signup" className="cta-button primary">Sign Up Free</a>
            <a href="/cards" className="cta-button secondary">Explore Cards</a>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <p>© 2024 Zeno. Empowering smarter financial decisions.</p>
      </div>
    </div>
  )
}
