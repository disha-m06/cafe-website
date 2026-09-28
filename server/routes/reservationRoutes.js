const express = require("express");
const router = express.Router();

const db = require("../db");

// Create a reservation
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      date,
      time,
      guests,
      specialRequest,
    } = req.body;

    const result = await db.query(
      `INSERT INTO reservations
       (name, phone, date, time, guests, special_request)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        name,
        phone,
        date,
        time,
        guests,
        specialRequest || null,
      ]
    );

    res.status(201).json({
      message: "Reservation created successfully",
      reservation: result.rows[0],
    });

  } catch (error) {
    console.error("Error creating reservation:", error);

    res.status(500).json({
      message: "Failed to create reservation",
    });
  }
});

module.exports = router;