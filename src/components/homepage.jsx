"use client"

import { useEffect, useState } from "react"
import "./HomePage.css"

function HomePage({ onProductClick }) {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching products:", err)
        setLoading(false)
      })
  }, [])

  const addToWishlist = (product) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || []
    const exists = stored.find((item) => item.id === product.id)
    if (!exists) {
      stored.push(product)
      localStorage.setItem("wishlist", JSON.stringify(stored))
      alert("✨ Added to wishlist!")
    } else {
      alert("💖 Already in wishlist!")
    }
  }

  // Filter products by search text
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="homepage-hero">
        <h1 className="hero-title">Welcome to WishKart</h1>
        <p className="hero-subtitle">Discover amazing products at unbeatable prices</p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div style={{ position: "relative" }}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="section-header">
          <h2 className="section-title">
            <span>🛍️</span>
            Featured Products
          </h2>
          <span style={{ color: "var(--text-secondary)" }}>{filteredProducts.length} products found</span>
        </div>

        {loading ? (
          <div className="loading">
            <p>Loading amazing products... ⏳</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>🔍 No products match your search. Try different keywords!</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card" onClick={() => onProductClick(product)}>
                <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-price">${product.price}</p>
                  <div className="product-actions">
                    <button
                      className="wishlist-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        addToWishlist(product)
                      }}
                    >
                      💖 Add to Wishlist
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

export default HomePage
