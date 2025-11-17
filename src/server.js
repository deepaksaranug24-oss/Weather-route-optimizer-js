import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Fix for ES Modules (__dirname not available)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==============================================
//  Serve frontend (public folder)
// ==============================================
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// ==============================================
//  API Route
// ==============================================
app.get("/api/route", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  if (!from || !to) {
    return res.status(400).json({ error: "Both 'from' and 'to' locations are required" });
  }

  // Fake route calculation (replace with your logic later)
  res.json({
    path: [from, "Midpoint", to],
    distance: Math.floor(Math.random() * 200) + " km",
    weather: "Clear"
  });
});

// ==============================================
//  Start Server
// ==============================================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
