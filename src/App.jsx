import "./App.css";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  const path = window.location.pathname;

  if (path === "/about") {
    return (
      <>
        <nav className="navbar">
          <div className="logo">☕ Brew & Bean</div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#menu">Menu</a>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
            <a href="/#contact">Contact</a>
          </div>

          <a href="/#contact" className="order-btn">
            Order Now
          </a>
        </nav>

        <About />

        <footer>
          <h3>☕ Brew & Bean</h3>
          <p>Fresh coffee. Good moments.</p>
          <p>© 2026 Brew & Bean. All rights reserved.</p>
        </footer>
      </>
    );
  }

  if (path === "/gallery") {
    return (
      <>
        <nav className="navbar">
          <div className="logo">☕ Brew & Bean</div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#menu">Menu</a>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
            <a href="/#contact">Contact</a>
          </div>

          <a href="/#contact" className="order-btn">
            Order Now
          </a>
        </nav>

        <Gallery />

        <footer>
          <h3>☕ Brew & Bean</h3>
          <p>Fresh coffee. Good moments.</p>
          <p>© 2026 Brew & Bean. All rights reserved.</p>
        </footer>
      </>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">☕ Brew & Bean</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="order-btn">Order Now</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO BREW & BEAN</p>

          <h1>
            Fresh Coffee
            <br />
            Good Moments.
          </h1>

          <p>
            Your cozy corner for handcrafted coffee, delicious food and
            unforgettable moments.
          </p>

          <button className="primary-btn">View Menu</button>
          <button className="secondary-btn">Explore Café</button>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <p className="section-subtitle">OUR FAVORITES</p>
        <h2>Popular Picks</h2>

        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-icon">☕</div>
            <h3>Cappuccino</h3>
            <p>Rich espresso with creamy steamed milk.</p>
            <strong>₹140</strong>
          </div>

          <div className="menu-card">
            <div className="menu-icon">🥐</div>
            <h3>Butter Croissant</h3>
            <p>Freshly baked, crispy and buttery.</p>
            <strong>₹120</strong>
          </div>

          <div className="menu-card">
            <div className="menu-icon">🍰</div>
            <h3>Cheesecake</h3>
            <p>Creamy cheesecake made fresh for you.</p>
            <strong>₹180</strong>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div>
          <p className="section-subtitle">ABOUT US</p>
          <h2>More Than Coffee</h2>

          <p>
            At Brew & Bean, every cup is crafted with care and every dish is
            made with love.
          </p>

          <a href="/about" className="primary-btn">
            Learn More
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-subtitle">COME VISIT US</p>
        <h2>Let's Have Coffee</h2>

        <p>📍 Bengaluru, Karnataka</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ hello@brewandbean.com</p>
        <p>🕘 Mon - Sun: 8:00 AM - 10:00 PM</p>
      </section>

      <footer>
        <h3>☕ Brew & Bean</h3>
        <p>Fresh coffee. Good moments.</p>
        <p>© 2026 Brew & Bean. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;