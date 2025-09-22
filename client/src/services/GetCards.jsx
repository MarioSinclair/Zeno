import { db } from '../firebase/config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const getAllCards = async () => {
    try {
        // Get all banks from allCards collection
        const banksCollection = collection(db, 'allCards');
        const banksSnapshot = await getDocs(banksCollection);
        
        const allCards = [];
        
        // Loop through each bank
        for (const bankDoc of banksSnapshot.docs) {
            const bankName = bankDoc.id;
            
            // Get cards subcollection for this bank
            const cardsCollection = collection(db, 'allCards', bankName, 'Cards');
            const cardsSnapshot = await getDocs(cardsCollection);
            
            // Process each card
            cardsSnapshot.docs.forEach(cardDoc => {
                const cardData = cardDoc.data();
                allCards.push({
                    id: cardDoc.id,
                    bank: bankName,
                    ...cardData
                });
            });
        }
        return allCards;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

// Get cards by specific bank
export const getCardsByBank = async (bankName) => {
    try {
        const cardsCollection = collection(db, 'allCards', bankName, 'Cards');
        const cardsSnapshot = await getDocs(cardsCollection);
        
        const cards = cardsSnapshot.docs.map(cardDoc => ({
            id: cardDoc.id,
            bank: bankName,
            ...cardDoc.data()
        }));
        
        return cards;
    } catch (error) {
        console.error(`Error fetching cards for ${bankName}:`, error);
        throw error;
    }
};

// Get specific card by bank and card ID
export const getCardById = async (bankName, cardId) => {
    try {
        const cardDoc = doc(db, 'allCards', bankName, 'Cards', cardId);
        const cardSnapshot = await getDoc(cardDoc);
        
        if (cardSnapshot.exists()) {
            return {
                id: cardSnapshot.id,
                bank: bankName,
                ...cardSnapshot.data()
            };
        } else {
            throw new Error('Card not found');
        }
    } catch (error) {
        console.error(`Error fetching card ${cardId} from ${bankName}:`, error);
        throw error;
    }
};