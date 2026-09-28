import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequest: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Submitting reservation...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: Number(formData.guests),
            specialRequest: formData.specialRequest,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Reservation failed");
      }

      setMessage(
        `Reservation confirmed! Your reservation ID is ${data.reservation.id}.`
      );

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        specialRequest: "",
      });
    } catch (error) {
      console.error("Reservation error:", error);

      setMessage(
        "Unable to create reservation. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-container">

        <div className="contact-info">

          <p className="section-subtitle">
            COME VISIT US
          </p>

          <h1>
            Contact & Reservation
          </h1>

          <p>
            We'd love to have you at Brew & Bean.
            Reserve your table and enjoy a relaxing
            coffee experience.
          </p>

          <div className="contact-details">

            <p>📍 Bengaluru, Karnataka</p>

            <p>📞 +91 98765 43210</p>

            <p>✉️ hello@brewandbean.com</p>

            <p>🕐 Mon - Sun: 8:00 AM - 10:00 PM</p>

          </div>

        </div>


        {/* RESERVATION FORM */}

        <div className="reservation-card">

          <h2>
            Reserve Your Table
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />

            <textarea
              name="specialRequest"
              placeholder="Special Request (optional)"
              value={formData.specialRequest}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Reserve Table
            </button>

          </form>

          {message && (
            <p className="reservation-message">
              {message}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Contact;