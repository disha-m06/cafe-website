import "./About.css";

const features = [
  {
    icon: "☕",
    title: "Fresh Coffee",
    text: "Carefully prepared coffee made to bring out the best in every cup.",
  },
  {
    icon: "🥐",
    title: "Fresh Food",
    text: "Comforting food and freshly prepared treats made with care.",
  },
  {
    icon: "♡",
    title: "Cozy Atmosphere",
    text: "A warm space to relax, work, meet friends, or simply slow down.",
  },
  {
    icon: "✦",
    title: "Friendly Service",
    text: "Good hospitality and a welcoming experience from the moment you arrive.",
  },
];

const stats = [
  {
    number: "XX+",
    label: "Years of Experience",
  },
  {
    number: "XX+",
    label: "Menu Items",
  },
  {
    number: "X,XXX+",
    label: "Happy Customers",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="about-label">OUR STORY</p>

          <h1>
            More than coffee.
            <br />
            <span>A place to connect.</span>
          </h1>

          <p className="about-hero-description">
            A cozy corner built around freshly prepared coffee, comforting
            food, and meaningful moments.
          </p>

          <a href="#about-story" className="about-button">
            Discover Our Story
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story" id="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
            alt="Warm and welcoming café interior"
            loading="lazy"
          />

          <div className="about-story-badge">
            <span>EST.</span>
            <strong>20XX</strong>
          </div>
        </div>

        <div className="about-story-content">
          <p className="about-label">A LITTLE ABOUT US</p>

          <h2>More than just a coffee shop.</h2>

          <p>
            Brew & Bean is a cozy café created for people who appreciate good
            coffee, delicious food, and great conversations.
          </p>

          <p>
            We believe the best café experiences are found in the little
            things — the aroma of freshly brewed coffee, a comfortable seat,
            a familiar face, and conversations that last a little longer.
          </p>

          <p>
            Every part of our space is designed to make you feel welcome,
            whether you're starting your morning, meeting friends, or taking
            a quiet break from the day.
          </p>

          <div className="about-signature">
            Made with care
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="about-mission-content">
          <p className="about-label">OUR MISSION</p>

          <h2>
            Good coffee.
            <br />
            Good food.
            <br />
            Good moments.
          </h2>

          <p>
            Our mission is simple: create a welcoming place where quality,
            comfort, and community come together over a great cup of coffee.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-features">
        <div className="about-section-heading">
          <div>
            <p className="about-label">THE EXPERIENCE</p>

            <h2>Why choose us?</h2>
          </div>

          <p>
            It's the little details that turn an ordinary café visit into a
            moment worth remembering.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature) => (
            <article
              className="about-feature-card"
              key={feature.title}
            >
              <div className="about-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <span className="about-feature-arrow">
                →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="about-stats-heading">
          <p className="about-label">BY THE NUMBERS</p>

          <h2>A few numbers about us</h2>

          <p>
            These are demo values. Replace them with your café's actual
            information before the final submission.
          </p>
        </div>

        <div className="about-stat-grid">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.number}</strong>

              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section className="about-visit">
        <div className="about-section-heading">
          <div>
            <p className="about-label">COME SAY HELLO</p>

            <h2>Visit us</h2>
          </div>

          <p>
            Demo information is shown below. Replace it with the actual café
            details later.
          </p>
        </div>

        <div className="about-visit-grid">

          <article className="about-info-card">
            <div className="about-info-icon">
              ⌖
            </div>

            <div>
              <span>LOCATION</span>

              <h3>Demo Café Address</h3>

              <p>
                Replace this with your actual café address and location
                information.
              </p>
            </div>
          </article>

          <article className="about-info-card">
            <div className="about-info-icon">
              ◷
            </div>

            <div>
              <span>OPENING HOURS</span>

              <h3>Demo Opening Hours</h3>

              <p>
                Monday – Sunday
                <br />
                08:00 AM – 09:00 PM
              </p>

              <small>
                Replace with actual timings.
              </small>
            </div>
          </article>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-cta">
  <div>
    <p className="about-label">CONTINUE THE EXPERIENCE</p>

    <h2>Take a look around.</h2>

    <p>
      Discover the coffee, food, people, and spaces that make
      Brew & Bean special.
    </p>

    <a href="/gallery" className="about-button">
      Explore Our Gallery
      <span>→</span>
    </a>
  </div>
</section>

    </main>
  );
}

export default About;