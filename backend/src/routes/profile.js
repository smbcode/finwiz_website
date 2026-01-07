const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
