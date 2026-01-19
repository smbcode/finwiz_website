const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  speaker: {
    type: String,
    trim: true,
    default: ""
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  registrationLink: {
    type: String,
    trim: true,
    default: ""
  },
  status: {
    type: String,
    enum: ['upcoming', 'past'],
    default: 'upcoming'
  },
  imageUrl: {
    type: String,
    default: ""
  }
}, { 
  timestamps: true 
});

// Automatically update status based on date
eventSchema.pre('save', function(next) {
  const now = new Date();
  if (this.date < now && this.status === 'upcoming') {
    this.status = 'past';
  }
  next();
});

// Method to check if event is upcoming
eventSchema.methods.isUpcoming = function() {
  return this.date >= new Date() && this.status === 'upcoming';
};

module.exports = mongoose.model("Event", eventSchema);