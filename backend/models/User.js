const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  
  // Admin flag
  isAdmin: { 
    type: Boolean, 
    default: false 
  },

  // OTP fields for password reset
  otp: String,
  otpExpiry: Date
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);