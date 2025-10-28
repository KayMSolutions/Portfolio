// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://MoskalK:WQb1aMtxqdwzGpCp@cluster0.pcxyaoz.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/qualifications", require("./routes/qualifications"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});