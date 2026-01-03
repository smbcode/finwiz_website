const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth");
const profileRoutes = require("./src/routes/profile");
const eventsRoutes = require("./src/routes/events");
const adminRoutes = require("./src/routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

// Public routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/events", eventsRoutes);

// Admin routes (protected)
app.use("/admin", adminRoutes);

module.exports = app;