import CardComponent from './components/card/cardComponent.jsx'
import { useCards } from './hooks/useCards';
import { useAuth } from './hooks/useAuth';
import './Home.css'
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function Home() {
  const { cards, loading, error } = useCards();
  const { user } = useAuth();
  
  // Group cards by bank for display
  const banksData = cards.reduce((acc, card) => {
    const bankName = card.bank;
    if (!acc[bankName]) {
      acc[bankName] = {
        name: bankName,
        cards: []
      };
    }
    acc[bankName].cards.push({
      id: card.id,
      name: card.name,
      image: card.image,
      description: card.description,
      cashback: card.cashback,
      annualFee: card.annualFee,
      bank: bankName
    });
    return acc;
  }, {});
  
  const banksArray = Object.values(banksData);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          {user ? (
            // Logged-in user dashboard
            <div className="dashboard-welcome">
              <Slide cascade damping={0.01} direction='None' triggerOnce>
                <h1 className="hero-title">
                  Welcome back, {user.displayName || user.email?.split('@')[0]}! 👋
                </h1>
                <p className="hero-subtitle">
                  Ready to maximize your rewards? Let's find your best card for today's purchases.
                </p>
              </Slide>
              <div className="hero-actions">
                <Link to="/wallet" className="hero-button primary-button">
                  Go to Wallet
                </Link>
                <Link to="/cards" className="hero-button secondary-button">
                  Browse Cards
                </Link>
              </div>
            </div>
          ) : (
            // Marketing page for non-logged-in users
            <div className="marketing-welcome">
              <Slide cascade damping={0.01} direction='None' triggerOnce>
                <h1 className="hero-title">
                  One tap, maximum back! Instantly see which card gives you the most cashback or points.
                </h1>
              </Slide>
              <div className="hero-actions">
                <Link to="/signup" className="hero-button primary-button">
                  Get Started
                </Link>
                <button className="hero-button secondary-button">Learn More</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bank Navigation */}
      <section className="bank-navigation" id="bank-navigation">
        <div className="container">
          <div className="navigation-header">
            <h2>Browse by Bank</h2>
            <p>Click on any bank to jump directly to their credit cards</p>
          </div>
          <div className="bank-links">
            {(loading ? [] : banksArray).map((bank) => (
              <button 
                key={bank.name}
                className="bank-link"
                onClick={() => {
                  const element = document.getElementById(`bank-${bank.name.toLowerCase().replace(/\s+/g, '-')}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {bank.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="featured-cards">
        <div className="container">
          <div className="section-header">
            <h2>Featured Credit Cards</h2>
            <p>Discover the best credit cards from top US banks</p>
          </div>
          
          {loading ? (
            <div className="loading-message">
              <p>Loading credit cards...</p>
            </div>
          ) : error ? (
            <div className="error-message">
              <p>Error loading cards: {error.message}</p>
            </div>
          ) : banksArray.length === 0 ? (
            <div className="no-cards-message">
              <p>No credit cards found. Please add some cards to Firestore.</p>
      </div>
          ) : (
            banksArray.map((bank) => {
            const bankId = `bank-${bank.name.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div key={bank.name} id={bankId} className="bank-section">
                <div className="bank-header">
                  <h3 className="bank-name">{bank.name}</h3>
      </div>
      
                <div className="card-grid">
                  {bank.cards.map((card, index) => (
                    <CardComponent 
                      key={`${bank.name}-${index}`}
                      cardName={card.name} 
                      cardImage={card.image} 
                      cardDescription={card.description}
                      cashback={card.cashback}
                      annualFee={card.annualFee}
                      cardId={card.id}
                      bank={card.bank}
                    />
                  ))}
                </div>
              </div>
            );
          })
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Zeno?</h2>
            <p>Experience the future of financial management</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Smart Card Management</h3>
              <p>Organize and track all your credit cards in one place with intelligent insights and recommendations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Portfolio Analytics</h3>
              <p>Get detailed analytics on your spending patterns, rewards earned, and optimization opportunities.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Bank-level security with end-to-end encryption to keep your financial data safe and private.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}