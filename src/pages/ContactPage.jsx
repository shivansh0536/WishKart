"use client"

import { useState } from "react"
import "./ContactPage.css"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    alert("🎉 Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>
            <span>📍</span>
            Contact Information
          </h3>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>support@WishKart.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🏢</div>
            <div className="contact-details">
              <h4>Office</h4>
              <p>
                123 Commerce Street
                <br />
                Tech City, TC 12345
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div className="contact-details">
              <h4>Business Hours</h4>
              <p>
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat - Sun: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>
            <span>💬</span>
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>📤</span>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section">
        <h3>
          <span>🌐</span>
          Follow Us
        </h3>
        <div className="social-links">
          <a href="#" className="social-link twitter" title="Twitter">
            🐦
          </a>
          <a href="#" className="social-link facebook" title="Facebook">
            📘
          </a>
          <a href="#" className="social-link instagram" title="Instagram">
            📷
          </a>
          <a href="#" className="social-link linkedin" title="LinkedIn">
            💼
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
