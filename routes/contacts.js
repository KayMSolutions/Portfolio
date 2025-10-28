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
    const { firstname, lastname, email } = req.body;
    const doc = await Contact.create({ firstname, lastname, email });
    res.status(201).json(doc);
  } catch (err) {
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
    const { firstname, lastname, email } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, email },
      { new: true } // returns the updated document
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

module.exports = router;