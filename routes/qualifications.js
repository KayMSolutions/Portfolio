const express = require("express");
const router = express.Router();
const Qualification = require("../models/Qualification");

// GET all qualifications
router.get("/", async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST new qualification
router.post("/", async (req, res) => {
  try {
    const { title, firstname, lastname, email, completion, description } = req.body;
    const qualification = await Qualification.create({ title, firstname, lastname, email, completion, description });
    res.status(201).json(qualification);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
});

// GET qualification by ID
router.get("/:id", async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PUT update qualification by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, firstname, lastname, email, completion, description } = req.body;
    const updatedQualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      { title, firstname, lastname, email, completion, description },
      { new: true }
    );
    if (!updatedQualification) return res.status(404).json({ message: "Qualification not found" });
    res.json(updatedQualification);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

module.exports = router;