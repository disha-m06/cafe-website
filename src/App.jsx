import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminDashboard from "./Pages/AdminDashboard";

import { useCart } from "./context/CartContext";


function Home() {
  const { addToCart, getCartCount } = useCart();

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          ☕ Brew & Bean
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/admin">Admin</Link>
        </div>

        <Link to="/cart" className="order-btn">
          🛒 Cart ({getCartCount()})
        </Link>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            WELCOME TO BREW & BEAN
          </p>

          <h1>
            Fresh Coffee.
            <br />
            Good Moments.
          </h1>

          <p>
            Your cozy corner for handcrafted coffee,
            delicious food and unforgettable moments.
          </p>

          <div className="hero-buttons">

            <a href="#menu">
              <button className="primary-btn">
                View Menu
              </button>
            </a>

            <a href="#about">
              <button className="secondary-btn">
                Explore Café
              </button>
            </a>

          </div>

        </div>

      </section>


      {/* ================= MENU ================= */}

      <section className="menu-section" id="menu">

        <p className="section-subtitle">
          OUR FAVORITES
        </p>

        <h2>
          Popular Picks
        </h2>

        <div className="menu-container">

          {/* CAPPUCCINO */}

          <div className="menu-card">

            <div className="food-icon">
              ☕
            </div>

            <h3>
              Cappuccino
            </h3>

            <p>
              Rich espresso with creamy steamed milk.
            </p>

            <strong>
              ₹140
            </strong>

            <button
              className="add-cart-btn"
              onClick={() =>
                addToCart({
                  id: 1,
                  name: "Cappuccino",
                  price: 140,
                  image: "☕"
                })
              }
            >
              Add to Cart
            </button>

          </div>


          {/* CROISSANT */}

          <div className="menu-card">

            <div className="food-icon">
              🥐
            </div>

            <h3>
              Butter Croissant
            </h3>

            <p>
              Freshly baked, crispy and buttery.
            </p>

            <strong>
              ₹120
            </strong>

            <button
              className="add-cart-btn"
              onClick={() =>
                addToCart({
                  id: 2,
                  name: "Butter Croissant",
                  price: 120,
                  image: "🥐"
                })
              }
            >
              Add to Cart
            </button>

          </div>


          {/* CHEESECAKE */}

          <div className="menu-card">

            <div className="food-icon">
              🍰
            </div>

            <h3>
              Cheesecake
            </h3>

            <p>
              Classic creamy cheesecake with a soft crust.
            </p>

            <strong>
              ₹180
            </strong>

            <button
              className="add-cart-btn"
              onClick={() =>
                addToCart({
                  id: 3,
                  name: "Cheesecake",
                  price: 180,
                  image: "🍰"
                })
              }
            >
              Add to Cart
            </button>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div>

          <p className="section-subtitle">
            OUR STORY
          </p>

          <h2>
            More Than Just Coffee
          </h2>

          <p>
            Brew & Bean is a cozy café created for people who love
            good coffee, delicious food and great conversations.
          </p>

          <p>
            Every cup is carefully prepared using freshly roasted
            beans and every dish is made with care.
          </p>

          <button className="primary-btn">
            Learn More
          </button>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section className="gallery-section" id="gallery">

        <p className="section-subtitle">
          OUR CAFE
        </p>

        <h2>
          Beautiful Moments
        </h2>

        <div className="gallery-container">

          <div className="gallery-card">
            ☕
          </div>

          <div className="gallery-card">
            🍰
          </div>

          <div className="gallery-card">
            🥐
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <p className="section-subtitle">
          COME VISIT US
        </p>

        <h2>
          Let's Have Coffee
        </h2>

        <p>
          📍 Bengaluru, Karnataka
        </p>

        <p>
          📞 +91 98765 43210
        </p>

        <p>
          ✉️ hello@brewandbean.com
        </p>

        <p>
          🕐 Mon - Sun: 8:00 AM - 10:00 PM
        </p>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <h3>
          ☕ Brew & Bean
        </h3>

        <p>
          Fresh coffee. Good moments.
        </p>

        <p>
          © 2026 Brew & Bean. All rights reserved.
        </p>

      </footer>

    </div>
  );
}


/* ================= MAIN APP ================= */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;