import "./App.css"; 
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">☕ Brew & Bean</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="order-btn">Order Now</button>
      </nav>

      {/* HOME / HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO BREW & BEAN</p>

          <h1>
            Fresh Coffee.
            <br />
            Good Moments.
          </h1>

          <p>
            Your cozy corner for handcrafted coffee, delicious food
            and unforgettable moments.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("menu")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Menu
            </button>

            <button className="secondary-btn">
              Explore Café
            </button>
          </div>
        </div>
      </section>

      {/* MENU */}
      <Menu />

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div>
          <p className="section-subtitle">OUR STORY</p>

          <h2>More Than Just Coffee</h2>

          <p>
            Brew & Bean is a cozy café created for people who love good
            coffee, delicious food and great conversations.
          </p>

          <p>
            Every cup is carefully prepared using freshly roasted beans
            and every dish is made with care.
          </p>

          <button className="primary-btn">
            Learn More
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <p className="section-subtitle">OUR SPACE</p>

        <h2>Relax. Sip. Enjoy.</h2>

        <p>
          A warm and cozy space made for coffee, conversations and
          memorable moments.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <p className="section-subtitle">COME VISIT US</p>

        <h2>Let's Have Coffee</h2>

        <p>📍 Bengaluru, Karnataka</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ hello@brewandbean.com</p>
        <p>🕐 Mon - Sun: 8:00 AM - 10:00 PM</p>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>☕ Brew & Bean</h3>

        <p>Fresh coffee. Good moments.</p>

        <p>© 2026 Brew & Bean. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;