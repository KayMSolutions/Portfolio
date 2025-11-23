const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { requireSignin } = require("../middleware/auth");

// ✅ Protected route (must come before /:id)
router.get("/protected", requireSignin, (req, res) => {
  res.json({ message: "Access granted to protected route!" });
});

// ✅ GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ POST new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, created, updated } = req.body;
    const user = await User.create({ name, email, password, created, updated });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
});

// ✅ GET user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ PUT update user by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, email, password, created, updated } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password, created, updated },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

// ✅ DELETE user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ DELETE all users
router.delete("/", async (req, res) => {
  try {
    await User.deleteMany();
    res.json({ message: "All users deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;