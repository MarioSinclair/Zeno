#!/usr/bin/env python3
"""
Demo script for the Zeno credit card recommendation system.
Shows example usage of the recommendation engine.
"""

from zeno.models import Transaction
from zeno.engine import RecommendationEngine
from zeno.sample_cards import create_sample_cards


def print_header(title):
    """Print a formatted header."""
    print("\n" + "="*60)
    print(f"🎯 {title}")
    print("="*60)


def print_recommendations(transaction, recommendations):
    """Print formatted recommendations."""
    print(f"\n🏆 RECOMMENDATIONS FOR ${transaction.amount:.2f} {transaction.category.upper()} PURCHASE")
    print("-" * 60)
    
    for i, rec in enumerate(recommendations, 1):
        reward_symbol = "$" if rec.reward_type.value == "cashback" else "pts" if rec.reward_type.value == "points" else "miles"
        print(f"\n{i}. {rec.card.name}")
        print(f"   Reward: {reward_symbol}{rec.reward_amount:.2f} {rec.reward_type.value}")
        
        # Show why this card was recommended
        reward_cat = rec.card.get_reward_for_category(transaction.category)
        multiplier_percent = reward_cat.multiplier * 100
        print(f"   Rate: {multiplier_percent:.1f}% for {reward_cat.name}")


def main():
    """Run the demo."""
    print_header("ZENO DEMO - One Tap, Maximum Back")
    print("Demonstrating credit card recommendations for different scenarios")
    
    # Initialize the engine with sample cards
    cards = create_sample_cards()
    engine = RecommendationEngine(cards)
    
    print(f"\n📱 Loaded {len(cards)} credit cards:")
    for card in cards:
        print(f"   • {card.name} ({card.issuer})")
    
    # Scenario 1: Grocery shopping
    print_header("SCENARIO 1: Grocery Shopping")
    grocery_transaction = Transaction(150.0, "groceries", "Weekly grocery shopping")
    grocery_recs = engine.recommend_cards(grocery_transaction)
    print_recommendations(grocery_transaction, grocery_recs)
    
    # Scenario 2: Restaurant dining
    print_header("SCENARIO 2: Restaurant Dining")
    dining_transaction = Transaction(75.0, "dining", "Dinner at restaurant")
    dining_recs = engine.recommend_cards(dining_transaction)
    print_recommendations(dining_transaction, dining_recs)
    
    # Scenario 3: Gas station
    print_header("SCENARIO 3: Gas Station")
    gas_transaction = Transaction(50.0, "gas", "Fill up gas tank")
    gas_recs = engine.recommend_cards(gas_transaction)
    print_recommendations(gas_transaction, gas_recs)
    
    # Scenario 4: Online shopping
    print_header("SCENARIO 4: Online Shopping")
    shopping_transaction = Transaction(200.0, "shopping", "Online electronics purchase")
    shopping_recs = engine.recommend_cards(shopping_transaction)
    print_recommendations(shopping_transaction, shopping_recs)
    
    # Summary
    print_header("SUMMARY")
    print("🎯 Zeno automatically analyzes your credit cards and finds the best")
    print("   reward rates for each transaction category.")
    print("\n💡 Key Benefits:")
    print("   • Maximize rewards on every purchase")
    print("   • Never miss out on bonus categories")
    print("   • Compare cashback, points, and miles")
    print("   • Consider annual fees in recommendations")
    
    print("\n🚀 Ready to maximize your rewards? Run: python main.py")
    print("="*60)


if __name__ == "__main__":
    main()
