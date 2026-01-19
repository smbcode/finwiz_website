const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");

// GET all events (public route)
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    
    const now = new Date();
    
    // Separate upcoming and past events
    const upcomingEvents = events.filter(event => 
      event.date >= now && event.status === 'upcoming'
    );
    
    const pastEvents = events.filter(event => 
      event.date < now || event.status === 'past'
    );

    res.json({
      success: true,
      upcoming: upcomingEvents,
      past: pastEvents
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ 
        success: false, 
        message: "Event not found" 
      });
    }

    res.json({
      success: true,
      event
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;