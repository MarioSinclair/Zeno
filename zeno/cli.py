"""
Command-line interface for the Zeno credit card recommendation system.
"""

import sys
from typing import List, Optional
from .models import Transaction, CreditCard
from .engine import RecommendationEngine
from .sample_cards import create_sample_cards, get_common_categories


class ZenoCLI:
    """Command-line interface for Zeno."""
    
    def __init__(self):
        """Initialize CLI with sample cards."""
        sample_cards = create_sample_cards()
        self.engine = RecommendationEngine(sample_cards)
        self.categories = get_common_categories()
    
    def display_welcome(self):
        """Display welcome message."""
        print("\n" + "="*60)
        print("🎯 ZENO - One Tap, Maximum Back")
        print("Credit Card Recommendation System")
        print("="*60)
        print("Maximize your rewards with personalized card recommendations!")
        print()
    
    def display_menu(self):
        """Display main menu options."""
        print("\n📋 MAIN MENU")
        print("-" * 20)
        print("1. Get card recommendation for transaction")
        print("2. View my credit cards")
        print("3. Add credit card")
        print("4. Remove credit card")
        print("5. View transaction categories")
        print("6. Exit")
        print()
    
    def get_transaction_input(self) -> Optional[Transaction]:
        """Get transaction details from user."""
        try:
            print("\n💳 TRANSACTION DETAILS")
            print("-" * 25)
            
            amount_str = input("Enter transaction amount ($): $").strip()
            if not amount_str:
                return None
            amount = float(amount_str)
            
            print("\nAvailable categories:")
            for i, category in enumerate(self.categories, 1):
                print(f"{i}. {category}")
            
            category_input = input("\nSelect category (number or name): ").strip()
            
            # Handle numeric selection
            if category_input.isdigit():
                category_num = int(category_input)
                if 1 <= category_num <= len(self.categories):
                    category = self.categories[category_num - 1]
                else:
                    print("Invalid category number!")
                    return None
            else:
                # Handle text input
                category = category_input.lower()
                if category not in self.categories:
                    print(f"Category '{category}' not found. Using 'other'.")
                    category = "other"
            
            description = input("Transaction description (optional): ").strip()
            
            return Transaction(
                amount=amount,
                category=category,
                description=description if description else None
            )
            
        except ValueError:
            print("Invalid amount entered!")
            return None
    
    def display_recommendations(self, transaction: Transaction):
        """Display card recommendations for a transaction."""
        recommendations = self.engine.recommend_cards(transaction, top_n=3)
        
        print(f"\n🏆 TOP RECOMMENDATIONS FOR ${transaction.amount:.2f} {transaction.category.upper()} PURCHASE")
        print("-" * 70)
        
        if not recommendations:
            print("No cards available for recommendations.")
            return
        
        for i, rec in enumerate(recommendations, 1):
            reward_symbol = "$" if rec.reward_type.value == "cashback" else "pts" if rec.reward_type.value == "points" else "miles"
            print(f"\n{i}. {rec.card.name}")
            print(f"   Issuer: {rec.card.issuer}")
            print(f"   Reward: {reward_symbol}{rec.reward_amount:.2f} {rec.reward_type.value}")
            print(f"   Annual Fee: ${rec.card.annual_fee:.0f}")
            
            # Show why this card was recommended
            reward_cat = rec.card.get_reward_for_category(transaction.category)
            multiplier_percent = reward_cat.multiplier * 100
            print(f"   Rate: {multiplier_percent:.1f}% for {reward_cat.name}")
    
    def display_user_cards(self):
        """Display user's credit cards."""
        cards = self.engine.get_cards()
        
        print(f"\n�� YOUR CREDIT CARDS ({len(cards)} cards)")
        print("-" * 40)
        
        if not cards:
            print("No cards in your wallet. Add some cards to get started!")
            return
        
        for i, card in enumerate(cards, 1):
            print(f"\n{i}. {card.name}")
            print(f"   Issuer: {card.issuer}")
            print(f"   Annual Fee: ${card.annual_fee:.0f}")
            print(f"   Base Rate: {card.base_reward.multiplier*100:.1f}% {card.base_reward.reward_type.value}")
            
            if card.reward_categories:
                print("   Special Categories:")
                for cat_name, cat_reward in card.reward_categories.items():
                    print(f"     • {cat_name}: {cat_reward.multiplier*100:.1f}% {cat_reward.reward_type.value}")
    
    def display_categories(self):
        """Display available transaction categories."""
        print(f"\n📂 TRANSACTION CATEGORIES")
        print("-" * 30)
        for i, category in enumerate(self.categories, 1):
            print(f"{i}. {category}")
    
    def run(self):
        """Run the CLI interface."""
        self.display_welcome()
        
        while True:
            self.display_menu()
            choice = input("Select an option (1-6): ").strip()
            
            if choice == "1":
                transaction = self.get_transaction_input()
                if transaction:
                    self.display_recommendations(transaction)
                    
            elif choice == "2":
                self.display_user_cards()
                
            elif choice == "3":
                print("\n🔧 ADD CARD")
                print("This feature allows you to add custom cards.")
                print("For this demo, we're using pre-loaded sample cards.")
                
            elif choice == "4":
                print("\n🔧 REMOVE CARD")
                print("This feature allows you to remove cards from your wallet.")
                print("For this demo, we're using pre-loaded sample cards.")
                
            elif choice == "5":
                self.display_categories()
                
            elif choice == "6":
                print("\n👋 Thank you for using Zeno!")
                print("Maximize your rewards, one transaction at a time!")
                break
                
            else:
                print("Invalid option. Please select 1-6.")
            
            input("\nPress Enter to continue...")


def main():
    """Main entry point for the CLI."""
    try:
        cli = ZenoCLI()
        cli.run()
    except KeyboardInterrupt:
        print("\n\n👋 Thank you for using Zeno!")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ An error occurred: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
