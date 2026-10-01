
import Groq from "groq-sdk";
 
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
 
// Configurable via env var so future model deprecations don't require a code change
const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
 
export const getAIResponse = async (userPrompt) => {
  try {
    const response = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "user", content: userPrompt },
      ],
    });
 
    return response.choices[0]?.message?.content ?? "";
  } catch (error) {
    console.error("Error fetching Groq response:", error);
    throw error;
  }
};