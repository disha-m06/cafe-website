const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Cappuccino",
            price: 140,
            category: "Coffee"
        },
        {
            id: 2,
            name: "Masala Tea",
            price: 80,
            category: "Tea"
        },
        {
            id: 3,
            name: "Cheesecake",
            price: 180,
            category: "Dessert"
        }
    ]);
});

module.exports = router;