"use client"

import { useEffect, useState } from "react"
import "./WishlistPage.css"

function WishlistPage({ onViewProduct }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || []
    setWishlist(stored)
  }, [])

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id)
    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  return (
    <div className="wishlist-page">
      {/* Hero Section */}
      <div className="wishlist-hero">
        <h1 className="wishlist-title">My Wishlist</h1>
        <p className="wishlist-subtitle">Your favorite products saved for later</p>
      </div>

      <div className="wishlist-content">
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h3>💖 Your wishlist is empty</h3>
            <p>Start exploring and add some favorites to see them here!</p>
            <button className="browse-btn" onClick={() => window.location.reload()}>
              <span>🛍️</span>
              Browse Products
            </button>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-card" onClick={() => onViewProduct && onViewProduct(product)}>
                <img src={product.image || "/placeholder.svg"} alt={product.title} className="wishlist-image" />
                <div className="wishlist-info">
                  <h4 className="wishlist-product-title">{product.title}</h4>
                  <p className="wishlist-price">${product.price}</p>
                  <div className="wishlist-actions">
                    <button
                      className="btn-remove"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFromWishlist(product.id)
                      }}
                    >
                      <span>❌</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistPage
