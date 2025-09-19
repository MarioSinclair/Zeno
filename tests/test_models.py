"""
Tests for the Zeno models module.
"""

import unittest
from zeno.models import RewardType, RewardCategory, CreditCard, Transaction, CardRecommendation


class TestRewardCategory(unittest.TestCase):
    """Test RewardCategory functionality."""
    
    def test_calculate_reward(self):
        """Test reward calculation."""
        category = RewardCategory("dining", 0.02, RewardType.CASHBACK)
        reward = category.calculate_reward(100.0)
        self.assertEqual(reward, 2.0)


class TestCreditCard(unittest.TestCase):
    """Test CreditCard functionality."""
    
    def setUp(self):
        """Set up test credit card."""
        self.base_reward = RewardCategory("base", 0.01, RewardType.CASHBACK)
        self.dining_reward = RewardCategory("dining", 0.03, RewardType.CASHBACK)
        
        self.card = CreditCard(
            name="Test Card",
            issuer="Test Bank",
            reward_categories={"dining": self.dining_reward},
            base_reward=self.base_reward,
            annual_fee=95.0
        )
    
    def test_get_reward_for_category_special(self):
        """Test getting special category reward."""
        reward = self.card.get_reward_for_category("dining")
        self.assertEqual(reward, self.dining_reward)
    
    def test_get_reward_for_category_base(self):
        """Test getting base category reward."""
        reward = self.card.get_reward_for_category("groceries")
        self.assertEqual(reward, self.base_reward)
    
    def test_calculate_reward_special_category(self):
        """Test reward calculation for special category."""
        reward = self.card.calculate_reward(100.0, "dining")
        self.assertEqual(reward, 3.0)
    
    def test_calculate_reward_base_category(self):
        """Test reward calculation for base category."""
        reward = self.card.calculate_reward(100.0, "groceries")
        self.assertEqual(reward, 1.0)


if __name__ == "__main__":
    unittest.main()
