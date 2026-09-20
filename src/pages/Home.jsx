import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <p className="cafe-name">
            BREW & BITES
          </p>

          <h1>
            Fresh Coffee, Happy Moments
          </h1>

          <p className="hero-description">
            Enjoy freshly brewed coffee, delicious food,
            and a cozy atmosphere with your friends and family.
          </p>

          <div className="hero-buttons">
            <button>View Menu</button>
            <button>Order Now</button>
          </div>

        </div>

      </section>


      {/* FEATURED ITEMS */}
      <section className="featured">

        <h2>Our Featured Items</h2>

        <p className="section-description">
          Taste some of our most loved café favorites.
        </p>

        <div className="featured-container">

          <div className="food-card">

            <div className="food-image">
              ☕
            </div>

            <h3>Cappuccino</h3>

            <p>
              Rich espresso topped with creamy milk foam.
            </p>

            <span>₹140</span>

          </div>


          <div className="food-card">

            <div className="food-image">
              🍰
            </div>

            <h3>Cheesecake</h3>

            <p>
              Delicious and creamy cheesecake.
            </p>

            <span>₹180</span>

          </div>


          <div className="food-card">

            <div className="food-image">
              🍔
            </div>

            <h3>Café Burger</h3>

            <p>
              Fresh and tasty café-style burger.
            </p>

            <span>₹200</span>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="why-container">

          <div className="why-card">

            <div className="why-icon">
              ☕
            </div>

            <h3>Freshly Brewed</h3>

            <p>
              Enjoy freshly brewed coffee made with care.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              🌱
            </div>

            <h3>Fresh Ingredients</h3>

            <p>
              We use fresh and quality ingredients.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              🏠
            </div>

            <h3>Cozy Atmosphere</h3>

            <p>
              Relax and enjoy your time in our cozy café.
            </p>

          </div>

        </div>

      </section>


      {/* CUSTOMER REVIEWS */}
      <section className="reviews">

        <h2>What Our Customers Say</h2>

        <div className="review-container">

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The coffee was amazing and the atmosphere
              was very relaxing!"
            </p>

            <h3>— Priya</h3>

          </div>


          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The food was delicious and the service
              was excellent."
            </p>

            <h3>— Rahul</h3>

          </div>


          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "A perfect place to spend time with friends
              and family."
            </p>

            <h3>— Ananya</h3>

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="cta">

        <h2>Visit Us Today</h2>

        <p>
          Come enjoy great coffee, delicious food,
          and wonderful moments.
        </p>

        <button>
          Explore Our Menu
        </button>

      </section>

    </div>
  );
}

export default Home;