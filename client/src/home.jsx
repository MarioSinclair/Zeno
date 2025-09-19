import { useState } from 'react'
import CardComponent from './components/card/cardComponent.jsx'
import './Home.css'

export default function Home() {

  const cardData = [
    {
      name: 'Card 1',
      image: 'https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/b954a46c-caec-11eb-abf1-efb90fc6e740/403a0deae03eaff0d1ca2c7ab1175fcc45ebc9a9551d0c8104e758b3d82771d1.jpg',
      description: 'Description 1'
    },
    {
      name: 'Card 2',
      image: 'https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/b954a46c-caec-11eb-abf1-efb90fc6e740/403a0deae03eaff0d1ca2c7ab1175fcc45ebc9a9551d0c8104e758b3d82771d1.jpg',
      description: 'Description 2'
    },
    {
      name: 'Card 3',
      image: 'https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/b954a46c-caec-11eb-abf1-efb90fc6e740/403a0deae03eaff0d1ca2c7ab1175fcc45ebc9a9551d0c8104e758b3d82771d1.jpg',
      description: 'Description 3'
    },
  ]

  const handleSubmit = (e) => {
    // handle submit shell
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            One Tap, <span className="highlight">Maximum Back</span>
          </h1>
          <p className="hero-subtitle">
            Get smart credit card recommendations to maximize your rewards for every transaction
          </p>
        </div>
      </section>

      {/* Quick Transaction Form */}
      <section className="transaction-section">
        <div className="container">
          <h2>Find Your Best Card</h2>
          <div className="card-list-container">
            {cardData.map((card) => {
              return <CardComponent cardName={card.name} cardImage={card.image} cardDescription={card.description} />
            })}
          </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Zeno?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Smart Recommendations</h3>
              <p>Get ranked suggestions based on your actual reward structures</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Find the best card for any transaction in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized</h3>
              <p>Add your cards for tailored recommendations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


