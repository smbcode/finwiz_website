const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test_admin:12345_textpassword@cluster0.5dsfz86.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("DB error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
