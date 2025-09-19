# 🎯 Zeno - One Tap, Maximum Back

Zeno helps users choose the best credit card for any transaction based on reward categories. Users can maintain a personalized list of their credit cards, and Zeno will recommend the top options that maximize cashback, points, or miles.

## ✨ Features

- **Smart Recommendations**: Get personalized credit card recommendations for any transaction
- **Multi-Reward Support**: Compare cashback, points, and miles across different cards
- **Category Optimization**: Automatically find the best rewards for dining, groceries, gas, travel, and more  
- **Interactive CLI**: Easy-to-use command-line interface for quick recommendations
- **Comprehensive Analysis**: Consider annual fees and reward rates in recommendations

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher

### Installation
1. Clone the repository:
```bash
git clone https://github.com/MarioSinclair/Zeno.git
cd Zeno
```

2. Install dependencies (optional):
```bash
pip install -r requirements.txt
```

### Usage

#### Run the Interactive CLI
```bash
python main.py
```

#### Run the Demo
```bash
python demo.py
```

## 📱 How It Works

1. **Add Your Cards**: Zeno comes with popular credit cards pre-loaded
2. **Enter Transaction**: Specify amount and category (groceries, dining, gas, etc.)
3. **Get Recommendations**: Zeno analyzes all your cards and shows the best options
4. **Maximize Rewards**: Use the recommended card to get the highest rewards

## 🏆 Example Recommendations

For a $150 grocery purchase:
- **American Express Blue Cash Preferred**: $9.00 cashback (6% rate)
- **Capital One Venture Rewards**: 3.00 miles (2% rate)  
- **Citi Double Cash**: $3.00 cashback (2% rate)

## 🔧 Architecture

- **`zeno/models.py`**: Core data models for cards, transactions, and recommendations
- **`zeno/engine.py`**: Recommendation engine with ranking algorithms
- **`zeno/sample_cards.py`**: Pre-loaded credit cards with realistic reward structures
- **`zeno/cli.py`**: Interactive command-line interface
- **`main.py`**: Application entry point
- **`demo.py`**: Demonstration script with example scenarios

## 🧪 Testing

Run the test suite:
```bash
python -m unittest discover tests/ -v
```

## 📊 Supported Cards

Zeno comes pre-loaded with popular credit cards:
- Chase Freedom Unlimited (1.5% cashback)
- Chase Sapphire Preferred (2x points on travel/dining)
- American Express Blue Cash Preferred (6% groceries, 3% gas)
- Capital One Venture Rewards (2x miles on everything)
- Citi Double Cash (2% cashback on everything)

## 🎯 Transaction Categories

- Groceries
- Dining  
- Gas
- Travel
- Streaming
- Shopping
- Utilities
- Other

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.
