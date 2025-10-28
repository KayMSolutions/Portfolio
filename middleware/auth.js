const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
exports.requireSignin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    // Token format: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "mySecretKey");

    req.auth = decoded; // Save decoded info (like _id)
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};