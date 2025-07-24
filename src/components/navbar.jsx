"use client"

import { useState, useEffect } from "react"
import "./nav.css"

function Navbar({ onNavigate, onLogout }) {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Load user data from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    if (userData) setUser(userData)
  }, [])

  // Apply theme class to <body>
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light")
  }, [isDark])

  const handleNavigate = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => handleNavigate("home")}>
          WishKart
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => handleNavigate("home")}>Home</button>
          <button onClick={() => handleNavigate("recommendations")}>Recommendations</button>
          <button onClick={() => handleNavigate("wishlist")}>Wishlist</button>
          <button onClick={() => handleNavigate("about")}>About</button>
          <button onClick={() => handleNavigate("contact")}>Contact</button>
          {user?.role === "admin" && <button onClick={() => alert("Admin Panel Coming Soon!")}>Admin Panel</button>}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? "🌙" : "☀️"}
          </button>

          {user && (
            <div className="profile-section">
              <img
                src={user.avatar || "https://i.pravatar.cc/150?u=default"}
                alt="avatar"
                className="avatar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="profile-dropdown">
                  <p>{user.name}</p>
                  <p className="role-tag">({user.role})</p>
                  <button onClick={onLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
