const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// REGISTER new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create and save new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: "Error registering user" });
  }
});

// SIGN IN (Login)
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: "User not found" });

    // Check if password matches
    if (!user.authenticate(password))
      return res.status(401).json({ error: "Email and password do not match" });

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, "mySecretKey", { expiresIn: "1h" });

    // Return token and user info
    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error during sign in" });
  }
});

// SIGN OUT (Logout)
router.get("/signout", (req, res) => {
  res.json({ message: "User signed out successfully" });
});

module.exports = router;