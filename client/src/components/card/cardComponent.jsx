import { useState } from 'react'
import './cardComponent.css'

export default function CardComponent({ cardName, cardImage, cardDescription, cashback, annualFee }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card-component ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                {/* Card Front */}
                <div className="card-front">
                    <div className="card-header">
                        <div className="card-image-container">
                            {cardImage ? (
                                <img className="card-image" src={cardImage} alt={cardName} />
                            ) : (
                                <div className="card-image-placeholder">
                                    <div className="placeholder-icon">💳</div>
                                    <div className="placeholder-text">{cardName}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card-lower">
                        <div className="card-content">
                            <h3 className="card-name">{cardName}</h3>
                            <p className="card-description">{cardDescription}</p>
                            <button className="card-button primary-button">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Back */}
                <div className="card-back">
                    <div className="card-back-content">
                        <h3 className="card-back-name">{cardName}</h3>

                        <div className="detail-section">
                            <h4>Rewards Structure</h4>
                            <p className="rewards-text">{cashback}</p>
                            <p className="rewards-description">{cardDescription}</p>
                        </div>

                        <div className="detail-section">
                            <h4>Annual Fee</h4>
                            <p className="fee-text">{annualFee}</p>
                        </div>
                        
                        <div className="detail-section">
                            <h4>Key Benefits</h4>
                            <ul className="benefits-list">
                                <li>No foreign transaction fees</li>
                                <li>Travel insurance included</li>
                                <li>24/7 customer support</li>
                                <li>Mobile app access</li>
                            </ul>
                        </div>
                        
                        <button className="card-button">
                            Add to Wallet
                        </button> 
                    </div>  
                </div>
            </div>
        </div>
    )
}
