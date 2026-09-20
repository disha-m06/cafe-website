const express = require("express");

const router = express.Router();

let orders = [];

router.post("/", (req, res) => {
    const order = {
        id: orders.length + 1,
        customerName: req.body.customerName,
        phone: req.body.phone,
        items: req.body.items,
        totalAmount: req.body.totalAmount,
        status: "Pending"
    };

    orders.push(order);

    res.status(201).json({
        message: "Order placed successfully",
        order: order
    });
});

router.get("/", (req, res) => {
    res.json(orders);
});

module.exports = router;