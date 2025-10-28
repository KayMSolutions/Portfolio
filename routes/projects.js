const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST new project
router.post("/", async (req, res) => {
  try {
    const { title, firstname, lastname, email, completion, description } = req.body;
    const project = await Project.create({ title, firstname, lastname, email, completion, description });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
});

// GET project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PUT update project by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, firstname, lastname, email, completion, description } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, firstname, lastname, email, completion, description },
      { new: true }
    );
    if (!updatedProject) return res.status(404).json({ message: "Project not found" });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

module.exports = router;