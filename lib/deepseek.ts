import OpenAI from "openai";

const apiKey = process.env.DEEPSEEK_API_KEY;

export const deepseek = apiKey
  ? new OpenAI({ baseURL: "https://api.deepseek.com", apiKey })
  : null;
