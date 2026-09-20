const express = require("express");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Cafe Backend Running");
});

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reservations", reservationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
