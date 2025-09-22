import { db } from '../firebase/config';
import { 
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';

// Add card to user's wallet
export const addCardToWallet = async (userId, cardData) => {
  try {
    const walletRef = await addDoc(collection(db, 'userWallet'), {
      userId,
      cardId: cardData.id,
      cardName: cardData.name,
      bank: cardData.bank,
      annualFee: cardData.annualFee,
      cashback: cardData.cashback,
      description: cardData.description,
      image: cardData.image,
      addedDate: serverTimestamp(),
      isActive: true
    });
    
    return { success: true, id: walletRef.id };
  } catch (error) {
    console.error('Error adding card to wallet:', error);
    return { success: false, error: error.message };
  }
};

// Get user's wallet cards
export const getUserWalletCards = async (userId) => {
  try {
    const q = query(
      collection(db, 'userWallet'),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const walletCards = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Only include active cards
      if (data.isActive !== false) {
        walletCards.push({
          id: doc.id,
          ...data
        });
      }
    });
    
    // Sort by addedDate in descending order (newest first)
    walletCards.sort((a, b) => {
      const dateA = a.addedDate?.toDate ? a.addedDate.toDate() : new Date(a.addedDate);
      const dateB = b.addedDate?.toDate ? b.addedDate.toDate() : new Date(b.addedDate);
      return dateB - dateA;
    });
    
    return { success: true, cards: walletCards };
  } catch (error) {
    console.error('Error fetching wallet cards:', error);
    return { success: false, error: error.message };
  }
};

// Remove card from wallet
export const removeCardFromWallet = async (walletCardId) => {
  try {
    await deleteDoc(doc(db, 'userWallet', walletCardId));
    return { success: true };
  } catch (error) {
    console.error('Error removing card from wallet:', error);
    return { success: false, error: error.message };
  }
};

// Check if user already has this card in wallet
export const checkCardInWallet = async (userId, cardId) => {
  try {
    const q = query(
      collection(db, 'userWallet'),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    
    // Check if any active card exists with this cardId
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      if (data.cardId === cardId && data.isActive !== false) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error('Error checking card in wallet:', error);
    return false;
  }
};
