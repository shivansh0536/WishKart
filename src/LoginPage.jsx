"use client"

// src/pages/LoginPage.jsx
import { useState } from "react"
import "./LoginPage.css"

const users = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    avatar: "https://i.pravatar.cc/100?u=admin",
    name: "Admin User",
  },
  {
    email: "user@example.com",
    password: "user123",
    role: "user",
    avatar: "https://i.pravatar.cc/100?u=user",
    name: "Regular User",
  },
]

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [error, setError] = useState("")

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userData", JSON.stringify(user))
      setSelectedUser(user)
      setError("")
      setTimeout(() => onLogin(), 1000) // slight delay for user to see avatar
    } else {
      setError("Invalid email or password.")
      setSelectedUser(null)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to WishKart</h2>

        {selectedUser && (
          <div className="user-preview">
            <img src={selectedUser.avatar || "/placeholder.svg"} alt="avatar" className="avatar" />
            <p>
              <strong>{selectedUser.name}</strong> ({selectedUser.role})
            </p>
          </div>
        )}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>Sign In</button>

        <div className="demo-info">
          <p>
            <strong>Demo Accounts:</strong>
          </p>
          <p>
            Admin: <strong>admin@example.com</strong> / <strong>admin123</strong>
          </p>
          <p>
            User: <strong>user@example.com</strong> / <strong>user123</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
