import CardComponent from './components/card/cardComponent.jsx'
import './Home.css'
import { Slide } from "react-awesome-reveal";

export default function Home() {
  
  const banksData = [
    {
      name: "Chase",
      cards: [
        {
          name: 'Chase Sapphire Preferred',
          image: '/cards/sapphire_preferred.png',
          description: 'Earn 2x points on travel and dining, plus 60,000 bonus points',
          cashback: '2x Points',
          annualFee: '$95'
        },
        {
          name: 'Chase Sapphire Reserve',
          image: '/cards/sapphire_reserve.png',
          description: 'Premium travel card with airport lounge access and travel credits',
          cashback: '3x Points',
          annualFee: '$550'
        },
        {
          name: 'Chase Freedom Unlimited',
          image: '/cards/freedom_unlimited.png',
          description: 'Earn unlimited 1.5% cash back on all purchases',
          cashback: '1.5% Cash',
          annualFee: '$0'
        },
        {
          name: 'Chase Freedom Flex',
          image: '/cards/freedom_flex.png',
          description: 'Earn 5% cash back on rotating categories',
          cashback: '5% Cash',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "American Express",
      cards: [
        {
          name: 'American Express Gold Card',
          image: '',
          description: '4x points on dining and groceries, plus dining credits',
          cashback: '4x Points',
          annualFee: '$250'
        },
        {
          name: 'American Express Platinum',
          image: '',
          description: 'Premium card with extensive travel benefits and credits',
          cashback: '5x Points',
          annualFee: '$695'
        },
        {
          name: 'Blue Cash Preferred',
          image: '',
          description: '6% cash back on groceries and streaming services',
          cashback: '6% Cash',
          annualFee: '$95'
        }
      ]
    },
    {
      name: "Capital One",
      cards: [
        {
          name: 'Venture X Rewards',
          image: '',
          description: '2x miles on all purchases, plus premium travel benefits',
          cashback: '2x Miles',
          annualFee: '$395'
        },
        {
          name: 'Venture Rewards',
          image: '',
          description: '2x miles on every purchase, every day',
          cashback: '2x Miles',
          annualFee: '$95'
        },
        {
          name: 'SavorOne Cash Rewards',
          image: '',
          description: '3% cash back on dining, entertainment, and groceries',
          cashback: '3% Cash',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "Citi",
      cards: [
        {
          name: 'Citi Double Cash',
          image: '',
          description: 'Earn 2% cash back on all purchases',
          cashback: '2% Cash',
          annualFee: '$0'
        },
        {
          name: 'Citi Premier',
          image: '',
          description: '3x points on travel, gas, restaurants, and supermarkets',
          cashback: '3x Points',
          annualFee: '$95'
        }
      ]
    },
    {
      name: "Wells Fargo",
      cards: [
        {
          name: 'Active Cash',
          image: '',
          description: 'Earn unlimited 2% cash rewards on purchases',
          cashback: '2% Cash',
          annualFee: '$0'
        },
        {
          name: 'Autograph',
          image: '',
          description: '3x points on restaurants, travel, gas, and transit',
          cashback: '3x Points',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "Bank of America",
      cards: [
        {
          name: 'Premium Rewards',
          image: '',
          description: '2x points on travel and dining, 1.5x on all other purchases',
          cashback: '2x Points',
          annualFee: '$95'
        },
        {
          name: 'Cash Rewards',
          image: '',
          description: '3% cash back in your choice category, 2% at grocery stores',
          cashback: '3% Cash',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "Discover",
      cards: [
        {
          name: 'it Cash Back',
          image: '',
          description: '5% cash back on rotating categories, 1% on everything else',
          cashback: '5% Cash',
          annualFee: '$0'
        },
        {
          name: 'it Miles',
          image: '',
          description: 'Unlimited 1.5x miles on every purchase',
          cashback: '1.5x Miles',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "US Bank",
      cards: [
        {
          name: 'Altitude Go',
          image: '',
          description: '4x points on dining, 2x on groceries, gas, and streaming',
          cashback: '4x Points',
          annualFee: '$0'
        },
        {
          name: 'Cash+',
          image: '',
          description: '5% cash back on your first $2,000 in combined purchases',
          cashback: '5% Cash',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "PNC",
      cards: [
        {
          name: 'Cash Rewards',
          image: '',
          description: '4% cash back on gas, 3% on dining, 2% on groceries',
          cashback: '4% Cash',
          annualFee: '$0'
        }
      ]
    },
    {
      name: "TD Bank",
      cards: [
        {
          name: 'Double Up',
          image: '',
          description: '2% cash back on all purchases',
          cashback: '2% Cash',
          annualFee: '$0'
        }
      ]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <Slide cascade damping={0.01} direction='None' triggerOnce>
            <h1 className="hero-title">
              Build your portfolio from a single app, designed for the forward-thinking investor.
            </h1>
          </Slide>
          <div className="hero-actions">
            <button 
            className="hero-button primary-button" 
            onClick={() => {
              document.getElementById('bank-navigation').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            >
            Get Started</button>
            <button className="hero-button secondary-button">Learn More</button>
          </div>
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
            {banksData.map((bank) => (
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
          
          {banksData.map((bank) => {
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
                    />
                  ))}
                </div>
              </div>
            );
          })}
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