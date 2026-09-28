const express = require("express");
const router = express.Router();

const db = require("../db");

// Get all available menu items
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM menu WHERE available = TRUE ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching menu:", error);

    res.status(500).json({
      message: "Failed to fetch menu",
    });
  }
});

module.exports = router;