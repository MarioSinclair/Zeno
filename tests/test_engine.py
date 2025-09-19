"""
Tests for the Zeno recommendation engine.
"""

import unittest
from zeno.models import RewardType, RewardCategory, CreditCard, Transaction
from zeno.engine import RecommendationEngine


class TestRecommendationEngine(unittest.TestCase):
    """Test RecommendationEngine functionality."""
    
    def setUp(self):
        """Set up test cards and engine."""
        # Card 1: Good for dining (3% cashback)
        base1 = RewardCategory("base", 0.01, RewardType.CASHBACK)
        dining1 = RewardCategory("dining", 0.03, RewardType.CASHBACK)
        self.card1 = CreditCard(
            "Dining Card", "Bank 1", {"dining": dining1}, base1
        )
        
        # Card 2: Good for groceries (5% cashback)
        base2 = RewardCategory("base", 0.01, RewardType.CASHBACK)
        grocery2 = RewardCategory("groceries", 0.05, RewardType.CASHBACK)
        self.card2 = CreditCard(
            "Grocery Card", "Bank 2", {"groceries": grocery2}, base2
        )
        
        # Card 3: Flat 2% on everything
        base3 = RewardCategory("base", 0.02, RewardType.CASHBACK)
        self.card3 = CreditCard(
            "Flat Rate Card", "Bank 3", {}, base3
        )
        
        self.engine = RecommendationEngine([self.card1, self.card2, self.card3])
    
    def test_recommend_cards_dining(self):
        """Test recommendations for dining transaction."""
        transaction = Transaction(100.0, "dining")
        recommendations = self.engine.recommend_cards(transaction)
        
        # Should recommend dining card first (3% = $3.00)
        self.assertEqual(recommendations[0].card.name, "Dining Card")
        self.assertEqual(recommendations[0].reward_amount, 3.0)
        
        # Flat rate card should be second (2% = $2.00)
        self.assertEqual(recommendations[1].card.name, "Flat Rate Card")
        self.assertEqual(recommendations[1].reward_amount, 2.0)
    
    def test_recommend_cards_groceries(self):
        """Test recommendations for grocery transaction."""
        transaction = Transaction(100.0, "groceries")
        recommendations = self.engine.recommend_cards(transaction)
        
        # Should recommend grocery card first (5% = $5.00)
        self.assertEqual(recommendations[0].card.name, "Grocery Card")
        self.assertEqual(recommendations[0].reward_amount, 5.0)
    
    def test_recommend_cards_limit(self):
        """Test top_n limit functionality."""
        transaction = Transaction(100.0, "dining")
        recommendations = self.engine.recommend_cards(transaction, top_n=2)
        
        self.assertEqual(len(recommendations), 2)
    
    def test_add_card(self):
        """Test adding a card."""
        initial_count = len(self.engine.get_cards())
        
        base = RewardCategory("base", 0.015, RewardType.CASHBACK)
        new_card = CreditCard("New Card", "New Bank", {}, base)
        
        self.engine.add_card(new_card)
        self.assertEqual(len(self.engine.get_cards()), initial_count + 1)
    
    def test_remove_card(self):
        """Test removing a card."""
        initial_count = len(self.engine.get_cards())
        
        success = self.engine.remove_card("Dining Card")
        self.assertTrue(success)
        self.assertEqual(len(self.engine.get_cards()), initial_count - 1)
        
        # Try to remove non-existent card
        success = self.engine.remove_card("Non-existent Card")
        self.assertFalse(success)


if __name__ == "__main__":
    unittest.main()
