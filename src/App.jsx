import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminDashboard from "./Pages/AdminDashboard";

import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

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

          <a href="#home">
            Home
          </a>

          <a href="#menu">
            Menu
          </a>

          <Link to="/about">
            About
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        <Link
          to="/cart"
          className="order-btn"
        >
          🛒 Cart ({getCartCount()})
        </Link>

      </nav>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
      >

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

            <Link to="/about">
              <button className="secondary-btn">
                Explore Café
              </button>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= MENU ================= */}

      <section
        className="menu-section"
        id="menu"
      >

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
                  image: "☕",
                })
              }
            >
              Add to Cart
            </button>

          </div>


          {/* BUTTER CROISSANT */}

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
                  image: "🥐",
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
                  image: "🍰",
                })
              }
            >
              Add to Cart
            </button>

          </div>

        </div>

      </section>


      {/* ================= ABOUT PREVIEW ================= */}

      <section
        className="about-section"
        id="about"
      >

        <div>

          <p className="section-subtitle">
            OUR STORY
          </p>

          <h2>
            More Than Just Coffee
          </h2>

          <p>
            Brew & Bean is a cozy café created for people
            who love good coffee, delicious food and
            great conversations.
          </p>

          <p>
            Every cup is carefully prepared using freshly
            roasted beans and every dish is made with care.
          </p>

          <Link to="/about">
            <button className="primary-btn">
              Learn More
            </button>
          </Link>

        </div>

      </section>


      {/* ================= CONTACT PREVIEW ================= */}

      <section
        className="contact-section"
        id="contact"
      >

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

        <Link to="/contact">
          <button className="primary-btn">
            Contact & Reserve
          </button>
        </Link>

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

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* GALLERY */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />


        {/* CONTACT + RESERVATION */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* CART */}

        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={<Checkout />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ADMIN */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;