import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "LearnguagesHub API running" });
});

// Lessons
app.get("/lessons", (req, res) => {
  res.json([
    {
      id: "A1",
      title: "German A1 Video Course",
      locked: true,
      price: 20
    }
  ]);
});

// Word of the Day
app.get("/word-of-the-day", (req, res) => {
  res.json({
    german: "Haus",
    english: "House",
    level: "A1"
  });
});

// Games (auto-generated placeholder)
app.get("/games/word-match", (req, res) => {
  res.json({
    words: [
      { de: "Haus", en: "House" },
      { de: "Brot", en: "Bread" }
    ]
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});