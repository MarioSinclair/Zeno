"""
Core data models for the Zeno credit card recommendation system.
"""

from dataclasses import dataclass
from typing import Dict, List, Optional
from enum import Enum


class RewardType(Enum):
    """Types of rewards offered by credit cards."""
    CASHBACK = "cashback"
    POINTS = "points"
    MILES = "miles"


@dataclass
class RewardCategory:
    """Represents a reward category with its multiplier."""
    name: str
    multiplier: float
    reward_type: RewardType
    
    def calculate_reward(self, amount: float) -> float:
        """Calculate reward for a given transaction amount."""
        return amount * self.multiplier


@dataclass
class CreditCard:
    """Represents a credit card with its reward structure."""
    name: str
    issuer: str
    reward_categories: Dict[str, RewardCategory]
    base_reward: RewardCategory
    annual_fee: float = 0.0
    
    def get_reward_for_category(self, category: str) -> RewardCategory:
        """Get the reward category for a specific transaction category."""
        return self.reward_categories.get(category, self.base_reward)
    
    def calculate_reward(self, amount: float, category: str) -> float:
        """Calculate reward for a transaction."""
        reward_category = self.get_reward_for_category(category)
        return reward_category.calculate_reward(amount)


@dataclass
class Transaction:
    """Represents a transaction for which we need to recommend a card."""
    amount: float
    category: str
    description: Optional[str] = None


@dataclass
class CardRecommendation:
    """Represents a card recommendation with calculated reward."""
    card: CreditCard
    reward_amount: float
    reward_type: RewardType
    
    def __lt__(self, other):
        """Compare recommendations by reward amount (for sorting)."""
        return self.reward_amount < other.reward_amount
