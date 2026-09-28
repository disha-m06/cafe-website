const express = require("express");
const router = express.Router();

const db = require("../db");

// Create an order
router.post("/", async (req, res) => {
  try {
    const {
      customerName,
      phone,
      items,
      totalAmount,
    } = req.body;

    const result = await db.query(
      `INSERT INTO orders
       (customer_name, phone, items, total_amount)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        customerName,
        phone,
        JSON.stringify(items),
        totalAmount,
      ]
    );

    res.status(201).json({
      message: "Order placed successfully",
      order: result.rows[0],
    });

  } catch (error) {
    console.error("Error creating order:", error);

    res.status(500).json({
      message: "Failed to place order",
    });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM orders ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {
    console.error("Error fetching orders:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

module.exports = router;