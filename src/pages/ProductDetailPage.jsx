import React from 'react';
import './ProductDetailPage.css';

function ProductDetailPage({ product, goBack }) {
  if (!product) {
    return (
      <div className="detail-container">
        <button className="back-btn" onClick={goBack}>
          ← Back
        </button>
        <p className="note">No product selected.</p>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>
      <div className="detail-card">
        <img className="detail-image" src={product.image} alt={product.title} />
        <div className="detail-info">
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-meta">Category: <span>{product.category}</span></p>
          <p className="detail-meta">Rating: <span>{product.rating?.rate} ⭐</span></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
