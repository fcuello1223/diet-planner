import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

export const calculateCalories = async (prompt) =>
  await openai.chat.completions.create({
    model: "google/gemini-2.0-flash-exp:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

// console.log(calculateCalories.choices[0].message);
