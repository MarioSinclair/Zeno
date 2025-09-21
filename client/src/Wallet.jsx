import { useState } from 'react'
import './Wallet.css'

export default function Wallet() {
    return (
        <div className="wallet-page">
            <div className="container">
                <div className="page-header">
                    <h1>Wallet</h1>
                    <p>Track your spending and maximize your rewards</p>
                </div>
                
                <div className="wallet-content">
                    <div className="empty-state">
                        <div className="empty-icon">💰</div>
                        <h3>Wallet is empty</h3>
                        <p>Add your credit cards to start tracking your spending and earning rewards</p>
                        <button className="primary-button">Connect Your Cards</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
