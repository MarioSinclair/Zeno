import './cardComponent.css'

export default function CardComponent({ cardName, cardImage, cardDescription }) {
    return (
        <div className="card-component">
            <div className="card-content">
            <img className="card-image" src={cardImage} alt={cardName} />
            <h2 className="card-name">{cardName}</h2>
            <p className="card-description">{cardDescription}</p>
            </div>
            <button className="card-button">Add to Wallet</button>
        </div>
    )
}
