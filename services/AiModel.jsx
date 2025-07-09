import OpenAI from "openai";
import axios from 'axios';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

const aiModelName = "google/gemini-2.0-flash-exp:free";

export const calculateCaloriesAI = async (prompt) =>
  await openai.chat.completions.create({
    model: aiModelName,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

export const generateRecipeOptionsAI = async (prompt) =>
  await openai.chat.completions.create({
    model: aiModelName,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

export const generateRecipeAI = async (prompt) =>
  await openai.chat.completions.create({
    model: aiModelName,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

const BASE_URL = "https://aigurulab.tech";

export const generateRecipeImage = async (prompt) =>
  await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input: prompt,
      model: "sdxl", //'flux'
      aspectRatio: "1:1", //Applicable to Flux model only
    },
    {
      headers: {
        "x-api-key": process.env.EXPO_PUBLIC_AIRGURU_LAB_API_KEY, // Your API Key
        "Content-Type": "application/json", // Content Type
      },
    }
  );
