import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Reservation request received!\n\nThank you, ${formData.name}. We will contact you shortly to confirm your table.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <p>COME VISIT US</p>

          <h1>
            Let's Have
            <br />
            <span>Coffee.</span>
          </h1>

          <p className="contact-hero-text">
            Good coffee, delicious food and meaningful moments
            are waiting for you at Brew & Bean.
          </p>
        </div>
      </section>


      {/* CONTACT + RESERVATION */}
      <section className="contact-main">

        <div className="contact-info">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            We'd Love to
            <br />
            Hear From You.
          </h2>

          <p className="contact-description">
            Whether you have a question, want to reserve a table,
            or simply want to say hello, we'd be happy to hear from you.
          </p>


          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  123 Coffee Street
                  <br />
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Call Us</h3>
                <p>
                  +91 98765 43210
                </p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email Us</h3>
                <p>
                  hello@brewandbean.com
                </p>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Opening Hours</h3>
                <p>
                  Monday - Sunday
                  <br />
                  8:00 AM - 10:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* RESERVATION FORM */}
        <div className="reservation-card">

          <p className="contact-label">
            RESERVE YOUR TABLE
          </p>

          <h2>
            Book a Table
          </h2>

          <p className="reservation-description">
            Planning a coffee date or a special gathering?
            Reserve your table in advance.
          </p>


          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="guests">
                  Guests
                </label>

                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10 Guests</option>
                </select>
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="date">
                  Date
                </label>

                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="time">
                  Time
                </label>

                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Special Request
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Any special requests or notes?"
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            <button
              type="submit"
              className="reservation-btn"
            >
              Reserve Table →
            </button>

          </form>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="contact-cta">

        <p>
          FRESH COFFEE. GOOD MOMENTS.
        </p>

        <h2>
          See You at Brew & Bean ☕
        </h2>

      </section>

    </main>
  );
}

export default Contact;