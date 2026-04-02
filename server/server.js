import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// OpenRouter setup
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct", // ✅ FREE MODEL
      messages: [
        {
          role: "system",
          content:
            "You are a professional dental hospital assistant. Give clear, helpful, short medical advice like Apollo hospital.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    const reply = completion.choices[0].message.content;

    res.json({ reply });

  } catch (error) {
    console.error("AI error:", error);
    res.json({ reply: "AI error. Please try again." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});