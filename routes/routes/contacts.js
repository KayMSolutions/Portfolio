const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET
router.get("/", async (req, res) => {
  try {
    const items = await Contact.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST 
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, reason, message } = req.body;

    const doc = await Contact.create({
      firstname,
      lastname,
      email,
      reason,
      message,
    });

    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Bad request" });
  }
});

//GET by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    const { name, email, reason, message } = req.body;

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, reason, message },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

module.exports = router;