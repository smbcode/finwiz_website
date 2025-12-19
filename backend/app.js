const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth");
const profileRoutes = require("./src/routes/profile");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

module.exports = app;
