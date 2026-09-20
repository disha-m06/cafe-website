const express = require("express");

const router = express.Router();

let reservations = [];

router.post("/", (req, res) => {
    const reservation = {
        id: reservations.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        guests: req.body.guests,
        specialRequest: req.body.specialRequest
    };

    reservations.push(reservation);

    res.status(201).json({
        message: "Reservation created successfully",
        reservation: reservation
    });
});

module.exports = router;