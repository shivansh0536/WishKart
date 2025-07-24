"use client"
import "./AboutPage.css"

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">About WishKart</h1>
        <p className="about-subtitle">Your modern shopping companion for the digital age</p>
      </div>

      <div className="about-content">
        {/* Mission Section */}
        <div className="about-section">
          <h2 className="section-title">
            <span className="section-icon">🎯</span>
            Our Mission
          </h2>
          <p className="section-description">
            At WishKart, we believe shopping should be simple, enjoyable, and accessible to everyone. Our mission is to
            create a seamless e-commerce experience that connects you with the products you love, while providing
            intelligent recommendations and a personalized shopping journey.
          </p>
        </div>

        {/* Features Section */}
        <div className="about-section">
          <h2 className="section-title">
            <span className="section-icon">✨</span>
            Key Features
          </h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">Optimized performance for quick browsing and instant results</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <h3 className="feature-title">Beautiful Design</h3>
              <p className="feature-description">Modern, clean interface with dark mode support</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <h3 className="feature-title">Mobile First</h3>
              <p className="feature-description">Fully responsive design that works on all devices</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <h3 className="feature-title">Smart Recommendations</h3>
              <p className="feature-description">AI-powered suggestions based on your preferences</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💖</span>
              <h3 className="feature-title">Wishlist Management</h3>
              <p className="feature-description">Save and organize your favorite products easily</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <h3 className="feature-title">Advanced Search</h3>
              <p className="feature-description">Find exactly what you're looking for with smart filters</p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="about-section">
          <h2 className="section-title">
            <span className="section-icon">🛠️</span>
            Technology Stack
          </h2>
          <p className="section-description">
            Built with modern web technologies to ensure the best performance and user experience.
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <span>⚛️</span>
              React.js
            </div>
            <div className="tech-item">
              <span>🎨</span>
              Modern CSS
            </div>
            <div className="tech-item">
              <span>📱</span>
              Responsive Design
            </div>
            <div className="tech-item">
              <span>🌐</span>
              FAKE APIs
            </div>
            <div className="tech-item">
              <span>💾</span>
              Local Storage
            </div>
            <div className="tech-item">
              <span>🔄</span>
              State Management
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-section">
          <h2 className="section-title">
            <span className="section-icon">📊</span>
            Why Choose WishKart?
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Secure</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2 className="cta-title">Ready to Start Shopping?</h2>
          <p className="cta-description">
            Join thousands of happy customers and discover your next favorite product today!
          </p>
          <button className="cta-button" onClick={() => window.scrollTo(0, 0)}>
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
