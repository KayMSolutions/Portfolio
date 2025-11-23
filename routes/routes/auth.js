const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// REGISTER new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Decide role (default = "user")
    const userRole = role === "admin" ? "admin" : "user";

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password,  // this uses the virtual password setter to hash
      role: userRole,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(400).json({ error: "Error registering user" });
  }
});

// SIGN IN (Login)
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Check if password matches
    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Email and password do not match" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, "mySecretKey", {
      expiresIn: "1h",
    });

    // Return token and user info (including role)
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ error: "Server error during sign in" });
  }
});

// SIGN OUT (Logout)
router.get("/signout", (req, res) => {
  res.json({ message: "User signed out successfully" });
});

module.exports = router;