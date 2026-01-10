const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to check if user is admin
const adminMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: "No token provided" 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user and check if admin
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    if (!user.isAdmin) {
      return res.status(403).json({ 
        success: false, 
        message: "Access denied. Admin privileges required." 
      });
    }

    req.user = decoded;
    req.user.isAdmin = true;
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false, 
      message: "Invalid token" 
    });
  }
};

module.exports = adminMiddleware;