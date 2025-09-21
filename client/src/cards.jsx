import './Cards.css'

export default function Cards() {
  return (
    <div className="cards-page">
      <div className="container">
        <div className="page-header">
          <h1>My Credit Cards</h1>
          <p>Manage and track your credit card portfolio</p>
        </div>
        
        <div className="cards-content">
          <div className="empty-state">
            <div className="empty-icon">💳</div>
            <h3>No cards added yet</h3>
            <p>Start building your credit card portfolio by adding your first card</p>
            <button className="primary-button">Add Your First Card</button>
          </div>
        </div>
      </div>
    </div>
  )
}
