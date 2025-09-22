import { useWallet } from './hooks/useWallet';
import { useAuth } from './hooks/useAuth';
import CardComponent from './components/card/cardComponent';
import './Wallet.css';

const Wallet = () => {
  const { user } = useAuth();
  const { walletCards, loading, error, removeFromWallet } = useWallet();

  const handleRemoveCard = async (walletCardId) => {
    if (window.confirm('Are you sure you want to remove this card from your wallet?')) {
      const result = await removeFromWallet(walletCardId);
      if (!result.success) {
        alert('Error removing card: ' + result.error);
      }
    }
  };

  if (!user) {
    return (
      <div className="wallet-page">
        <div className="wallet-container">
          <div className="wallet-header">
            <h1>My Wallet</h1>
            <p>Please log in to view your wallet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wallet-page">
      <div className="wallet-container">
        <div className="wallet-header">
          <h1>My Wallet</h1>
          <p>Manage your credit cards and track your rewards</p>
        </div>

        {loading ? (
          <div className="loading-message">
            <p>Loading your wallet...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>Error loading wallet: {error}</p>
          </div>
        ) : walletCards.length === 0 ? (
          <div className="empty-wallet">
            <div className="empty-wallet-content">
              <div className="empty-wallet-icon">💳</div>
              <h3>Your wallet is empty</h3>
              <p>Start by adding credit cards to your wallet to track your rewards and spending.</p>
              <a href="/" className="primary-button">Browse Cards</a>
            </div>
          </div>
        ) : (
          <div className="wallet-cards">
            <div className="wallet-stats">
              <div className="stat-card">
                <h3>{walletCards.length}</h3>
                <p>Cards in Wallet</p>
              </div>
              <div className="stat-card">
                <h3>{new Set(walletCards.map(card => card.bank)).size}</h3>
                <p>Different Banks</p>
              </div>
            </div>

            <div className="cards-grid">
              {walletCards.map((walletCard) => (
                <div key={walletCard.id} className="wallet-card-item">
                  <CardComponent
                    cardName={walletCard.cardName}
                    cardImage={walletCard.image}
                    cardDescription={walletCard.description}
                    cashback={walletCard.cashback}
                    annualFee={walletCard.annualFee}
                    cardId={walletCard.cardId}
                    bank={walletCard.bank}
                  />
                  <div className="wallet-card-actions">
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveCard(walletCard.id)}
                    >
                      Remove from Wallet
                    </button>
                    <div className="added-date">
                      Added: {new Date(walletCard.addedDate?.toDate()).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;