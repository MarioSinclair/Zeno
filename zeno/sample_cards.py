"""
Sample credit card data for the Zeno system.
"""

from .models import CreditCard, RewardCategory, RewardType


def create_sample_cards():
    """Create a set of sample credit cards with realistic reward structures."""
    
    # Chase Freedom Unlimited
    chase_freedom_base = RewardCategory("base", 0.015, RewardType.CASHBACK)  # 1.5% cashback
    chase_freedom = CreditCard(
        name="Chase Freedom Unlimited",
        issuer="Chase",
        reward_categories={},  # Flat rate card
        base_reward=chase_freedom_base,
        annual_fee=0.0
    )
    
    # Chase Sapphire Preferred
    sapphire_base = RewardCategory("base", 0.01, RewardType.POINTS)  # 1x points
    sapphire_travel = RewardCategory("travel", 0.02, RewardType.POINTS)  # 2x points
    sapphire_dining = RewardCategory("dining", 0.02, RewardType.POINTS)  # 2x points
    sapphire_preferred = CreditCard(
        name="Chase Sapphire Preferred",
        issuer="Chase",
        reward_categories={
            "travel": sapphire_travel,
            "dining": sapphire_dining,
        },
        base_reward=sapphire_base,
        annual_fee=95.0
    )
    
    # American Express Blue Cash Preferred
    amex_base = RewardCategory("base", 0.01, RewardType.CASHBACK)  # 1% cashback
    amex_grocery = RewardCategory("groceries", 0.06, RewardType.CASHBACK)  # 6% cashback
    amex_streaming = RewardCategory("streaming", 0.06, RewardType.CASHBACK)  # 6% cashback
    amex_gas = RewardCategory("gas", 0.03, RewardType.CASHBACK)  # 3% cashback
    amex_bcp = CreditCard(
        name="American Express Blue Cash Preferred",
        issuer="American Express",
        reward_categories={
            "groceries": amex_grocery,
            "streaming": amex_streaming,
            "gas": amex_gas,
        },
        base_reward=amex_base,
        annual_fee=95.0
    )
    
    # Capital One Venture Rewards
    venture_base = RewardCategory("base", 0.02, RewardType.MILES)  # 2x miles
    venture_card = CreditCard(
        name="Capital One Venture Rewards",
        issuer="Capital One",
        reward_categories={},  # Flat rate card
        base_reward=venture_base,
        annual_fee=95.0
    )
    
    # Citi Double Cash
    citi_base = RewardCategory("base", 0.02, RewardType.CASHBACK)  # 2% cashback
    citi_double = CreditCard(
        name="Citi Double Cash",
        issuer="Citi",
        reward_categories={},  # Flat rate card
        base_reward=citi_base,
        annual_fee=0.0
    )
    
    return [chase_freedom, sapphire_preferred, amex_bcp, venture_card, citi_double]


def get_common_categories():
    """Get list of common transaction categories."""
    return [
        "groceries",
        "dining",
        "gas",
        "travel",
        "streaming",
        "shopping",
        "utilities",
        "other"
    ]
