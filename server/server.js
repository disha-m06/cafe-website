const express = require("express");

const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Cafe Backend Running");
});

// API routes
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reservations", reservationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Cafe Backend running on http://localhost:${PORT}`);
});