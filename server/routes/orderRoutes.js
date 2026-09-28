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


// Update order status
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Preparing",
      "Completed",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }

    const result = await db.query(
      `UPDATE orders
       SET status = $1
       WHERE id = $2
       RETURNING *`,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order status updated successfully",
      order: result.rows[0],
    });

  } catch (error) {
    console.error("Error updating order status:", error);

    res.status(500).json({
      message: "Failed to update order status",
    });
  }
});


module.exports = router;