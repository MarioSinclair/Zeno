import { useState } from 'react';
import { useCreditCards } from '../hooks/useCreditCards';
import './CreditCardManager.css';

const CreditCardManager = () => {
  const { cards, loading, error, addCard, removeCard } = useCreditCards();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({
    name: '',
    bank: '',
    annualFee: '',
    cashback: '',
    description: '',
    image: ''
  });

  const handleAddCard = async (e) => {
    e.preventDefault();
    const result = await addCard(newCard);
    if (result.success) {
      setNewCard({
        name: '',
        bank: '',
        annualFee: '',
        cashback: '',
        description: '',
        image: ''
      });
      setShowAddForm(false);
    } else {
      alert('Error adding card: ' + result.error);
    }
  };

  const handleRemoveCard = async (cardId) => {
    if (window.confirm('Are you sure you want to remove this card?')) {
      const result = await removeCard(cardId);
      if (!result.success) {
        alert('Error removing card: ' + result.error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading your credit cards...</div>;
  }

  return (
    <div className="credit-card-manager">
      <div className="manager-header">
        <h2>My Credit Cards</h2>
        <button 
          className="add-card-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Card'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {showAddForm && (
        <form onSubmit={handleAddCard} className="add-card-form">
          <h3>Add New Credit Card</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Card Name</label>
              <input
                type="text"
                value={newCard.name}
                onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Bank</label>
              <input
                type="text"
                value={newCard.bank}
                onChange={(e) => setNewCard({...newCard, bank: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Annual Fee</label>
              <input
                type="text"
                value={newCard.annualFee}
                onChange={(e) => setNewCard({...newCard, annualFee: e.target.value})}
                placeholder="$0"
              />
            </div>
            <div className="form-group">
              <label>Cashback/Rewards</label>
              <input
                type="text"
                value={newCard.cashback}
                onChange={(e) => setNewCard({...newCard, cashback: e.target.value})}
                placeholder="2% Cash"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={newCard.description}
              onChange={(e) => setNewCard({...newCard, description: e.target.value})}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              value={newCard.image}
              onChange={(e) => setNewCard({...newCard, image: e.target.value})}
              placeholder="https://example.com/card-image.png"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Add Card</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="cards-grid">
        {cards.length === 0 ? (
          <div className="no-cards">
            <p>You haven't added any credit cards yet.</p>
            <p>Click "Add Card" to get started!</p>
          </div>
        ) : (
          cards.map((card) => (
            <div key={card.id} className="card-item">
              {card.image && (
                <img src={card.image} alt={card.name} className="card-image" />
              )}
              <div className="card-info">
                <h3>{card.name}</h3>
                <p className="bank">{card.bank}</p>
                <p className="cashback">{card.cashback}</p>
                <p className="annual-fee">Annual Fee: {card.annualFee}</p>
                {card.description && (
                  <p className="description">{card.description}</p>
                )}
              </div>
              <button 
                className="remove-btn"
                onClick={() => handleRemoveCard(card.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreditCardManager;
