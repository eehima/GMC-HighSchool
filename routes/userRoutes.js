const express = require("express");
const router = express.Router();
const User = require("../models/User");

// create new user endpoint
router.post("/create-user", async (req, res) => {
  try {
    // Extract data from request body
    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      fullAddress,
      gender,
      phoneNo,
      class: userClass,
    } = req.body;

    // Validation to ensure required fields are provided
    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !email ||
      !fullAddress ||
      !gender ||
      !phoneNo ||
      !userClass
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      dateOfBirth,
      email,
      fullAddress,
      gender,
      phoneNo,
      class: userClass, 
      
    });

    // Save user to the database
    const savedUser = await newUser.save();

    // Send success response
    res.status(200).json({ success: true, data: savedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users endpoint
router.get("/fetch-user", async (req, res) => {
  try {
    const users = await User.find(); 
    // Fetch all users

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Fetch a single student by ID endpoint
router.get("/fetch-user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

module.exports = router;
