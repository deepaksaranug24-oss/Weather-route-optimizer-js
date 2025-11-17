import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Serve frontend files from /public
app.use(express.static("public"));

// Your API route (working demo)
app.get("/api/route", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  if (!from || !to) {
    return res.status(400).json({ error: "Both 'from' and 'to' locations are required" });
  }

  // Fake route calculation (this can be replaced with real logic)
  res.json({
    path: [from, "Midpoint", to],
    distance: Math.floor(Math.random() * 200) + " km",
    weather: "Clear"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

