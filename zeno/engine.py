"""
Recommendation engine for the Zeno credit card system.
"""

from typing import List
from .models import CreditCard, Transaction, CardRecommendation


class RecommendationEngine:
    """Engine to recommend the best credit cards for transactions."""
    
    def __init__(self, user_cards: List[CreditCard]):
        """Initialize with user's credit cards."""
        self.user_cards = user_cards
    
    def recommend_cards(self, transaction: Transaction, top_n: int = 3) -> List[CardRecommendation]:
        """
        Recommend the best credit cards for a transaction.
        
        Args:
            transaction: The transaction to optimize for
            top_n: Number of top recommendations to return
            
        Returns:
            List of card recommendations sorted by reward amount (highest first)
        """
        recommendations = []
        
        for card in self.user_cards:
            reward_amount = card.calculate_reward(transaction.amount, transaction.category)
            reward_category = card.get_reward_for_category(transaction.category)
            
            recommendation = CardRecommendation(
                card=card,
                reward_amount=reward_amount,
                reward_type=reward_category.reward_type
            )
            recommendations.append(recommendation)
        
        # Sort by reward amount (highest first)
        recommendations.sort(reverse=True)
        
        return recommendations[:top_n]
    
    def add_card(self, card: CreditCard):
        """Add a new card to the user's wallet."""
        self.user_cards.append(card)
    
    def remove_card(self, card_name: str) -> bool:
        """Remove a card from the user's wallet."""
        for i, card in enumerate(self.user_cards):
            if card.name == card_name:
                del self.user_cards[i]
                return True
        return False
    
    def get_cards(self) -> List[CreditCard]:
        """Get all user cards."""
        return self.user_cards.copy()
