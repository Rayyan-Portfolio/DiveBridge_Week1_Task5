import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // Theme toggle state
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("movieMartCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("movieMartCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add movie to cart
  const addToCart = (movie) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === movie.id);
      if (exists) {
        return prev.map((item) =>
          item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...movie, quantity: 1, price: 9.99 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Router>
      <Navbar
        cartCount={totalCartCount}
        toggleTheme={toggleTheme}
        theme={theme}
        onSearch={(query) => console.log("Searching for:", query)}
      />
      <div className="pt-5 mt-4">
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} theme={theme} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                theme={theme}
              />
            }
          />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          /> */}
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems} // ✅ pass setter too
              />
            }
          />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="/search"
            element={<SearchResults addToCart={addToCart} />}
          />

          <Route
            path="/movie/:id"
            element={<MovieDetails addToCart={addToCart} />}
          />
        </Routes>
      </div>
      <ScrollToTopButton theme={theme} />
    </Router>
  );
}

export default App;
