import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { 
  getUserWalletCards, 
  addCardToWallet, 
  removeCardFromWallet,
  checkCardInWallet 
} from '../services/walletService';

export const useWallet = () => {
  const { user } = useAuth();
  const [walletCards, setWalletCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user's wallet cards
  const loadWalletCards = async () => {
    if (!user) {
      setWalletCards([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const result = await getUserWalletCards(user.uid);
      if (result.success) {
        setWalletCards(result.cards);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add card to wallet
  const addToWallet = async (cardData) => {
    if (!user) {
      return { success: false, error: 'User not authenticated' };
    }

    try {
      // Check if card is already in wallet
      const alreadyExists = await checkCardInWallet(user.uid, cardData.id);
      if (alreadyExists) {
        return { success: false, error: 'Card already in wallet' };
      }

      const result = await addCardToWallet(user.uid, cardData);
      if (result.success) {
        // Reload wallet cards
        await loadWalletCards();
      }
      return result;
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Remove card from wallet
  const removeFromWallet = async (walletCardId) => {
    try {
      const result = await removeCardFromWallet(walletCardId);
      if (result.success) {
        // Update local state
        setWalletCards(prevCards => 
          prevCards.filter(card => card.id !== walletCardId)
        );
      }
      return result;
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Check if card is in wallet
  const isCardInWallet = async (cardId) => {
    if (!user) return false;
    return await checkCardInWallet(user.uid, cardId);
  };

  // Load wallet when user changes
  useEffect(() => {
    loadWalletCards();
  }, [user]);

  return {
    walletCards,
    loading,
    error,
    addToWallet,
    removeFromWallet,
    isCardInWallet,
    loadWalletCards
  };
};
