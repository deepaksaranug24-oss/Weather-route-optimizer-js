import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, "..", "public")));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// API route
app.get("/api/route", (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  if (!from || !to) {
    return res.status(400).json({
      error: "Both 'from' and 'to' locations are required",
    });
  }

  res.json({
    path: [from, "Midpoint", to],
    distance: Math.floor(Math.random() * 200) + " km",
    weather: "Clear",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
