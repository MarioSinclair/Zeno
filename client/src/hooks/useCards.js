import { useState, useEffect } from 'react';
import { getAllCards } from '../services/GetCards';

export const useCards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const cards = await getAllCards();
                setCards(cards);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, []);

    return { cards, loading, error };
};