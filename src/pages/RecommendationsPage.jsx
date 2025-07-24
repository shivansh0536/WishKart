"use client"

import { useEffect, useState } from "react"
import "./RecommendationsPage.css"

function RecommendationsPage({ onViewProduct }) {
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => a.price - b.price)
        setRecommended(sorted.slice(0, 6))
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching recommendations:", err)
        setLoading(false)
      })
  }, [])

  const handleView = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product))
    onViewProduct(product)
  }

  return (
    <div className="recommendations-page">
      {/* Hero Section */}
      <div className="recommendations-hero">
        <h1 className="recommendations-title">Recommended for You</h1>
        <p className="recommendations-subtitle">Handpicked products based on your preferences</p>
      </div>

      <div className="recommendations-content">
        {loading ? (
          <div className="loading-recommendations">
            <h3>✨ Finding perfect matches...</h3>
            <p>We're curating the best recommendations just for you!</p>
          </div>
        ) : (
          <div className="recommendations-grid">
            {recommended.map((product) => (
              <div key={product.id} className="recommendation-card" onClick={() => handleView(product)}>
                <img src={product.image || "/placeholder.svg"} alt={product.title} className="recommendation-image" />
                <div className="recommendation-info">
                  <div className="recommendation-badge">Recommended</div>
                  <h4 className="recommendation-product-title">{product.title}</h4>
                  <p className="recommendation-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecommendationsPage
