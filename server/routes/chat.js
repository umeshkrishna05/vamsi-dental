import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  res.json({
    reply: "AI response for: " + userMessage
  });
});

export default router;