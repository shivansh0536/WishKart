"use client"

// src/App.jsx
import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import HomePage from "./components/homepage"
import WishlistPage from "./pages/WishlistPage"
import RecommendationsPage from "./pages/RecommendationsPage"
import AboutPage from "./pages/AboutPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import LoginPage from "./LoginPage" // ✅ correct path
import ContactPage from "./pages/ContactPage"

function App() {
  const [page, setPage] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [previousPage, setPreviousPage] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)

  // On initial load: check if user is logged in
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn")
    const user = localStorage.getItem("userData")
    if (storedLogin === "true" && user) {
      setIsLoggedIn(true)
      setUserData(JSON.parse(user))
    }
    document.body.classList.add("light") // Default theme
  }, [])

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("userData"))
    setIsLoggedIn(true)
    setUserData(user)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userData")
    setIsLoggedIn(false)
    setUserData(null)
  }

  const handleViewProduct = (product, fromPage) => {
    setSelectedProduct(product)
    setPreviousPage(fromPage)
    setPage("product")
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onProductClick={(product) => handleViewProduct(product, "home")} />
      case "recommendations":
        return <RecommendationsPage onViewProduct={(product) => handleViewProduct(product, "recommendations")} />
      case "wishlist":
        return <WishlistPage onViewProduct={(product) => handleViewProduct(product, "wishlist")} />
      case "about":
        return <AboutPage />
      case "product":
        return <ProductDetailPage product={selectedProduct} goBack={() => setPage(previousPage || "home")} />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage onProductClick={(product) => handleViewProduct(product, "home")} />
    }
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <>
      <Navbar onNavigate={setPage} onLogout={handleLogout} user={userData} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
