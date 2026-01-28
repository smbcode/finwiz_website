const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const adminMiddleware = require("../middleware/adminMiddleware");

// All routes require admin authentication
router.use(adminMiddleware);

// CREATE new event
router.post("/events", async (req, res) => {
  try {
    const { title, date, speaker, description, registrationLink, imageUrl } = req.body;

    // Validation
    if (!title || !date || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, date, and description are required"
      });
    }

    const event = await Event.create({
      title,
      date: new Date(date),
      speaker: speaker || "",
      description,
      registrationLink: registrationLink || "",
      imageUrl: imageUrl || ""
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// UPDATE event
router.put("/events/:id", async (req, res) => {
  try {
    const { title, date, speaker, description, registrationLink, status, imageUrl } = req.body;

    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    // Update fields
    if (title) event.title = title;
    if (date) event.date = new Date(date);
    if (speaker !== undefined) event.speaker = speaker;
    if (description) event.description = description;
    if (registrationLink !== undefined) event.registrationLink = registrationLink;
    if (status) event.status = status;
    if (imageUrl !== undefined) event.imageUrl = imageUrl;

    await event.save();

    res.json({
      success: true,
      message: "Event updated successfully",
      event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE event
router.delete("/events/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      message: "Event deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET all events (admin view - includes all statuses)
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    
    res.json({
      success: true,
      events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Toggle event status (upcoming <-> past)
router.patch("/events/:id/toggle-status", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    event.status = event.status === 'upcoming' ? 'past' : 'upcoming';
    await event.save();

    res.json({
      success: true,
      message: "Event status updated",
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