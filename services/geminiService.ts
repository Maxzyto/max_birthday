
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateBirthdayWish = async (name: string): Promise<string> => {
  try {
    const prompt = `Generate a super fun, quirky, and heartfelt one-sentence birthday wish for my friend, ${name}. Make it sound exciting, celebratory, and personal to them.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.9,
        topP: 1,
        maxOutputTokens: 60, // Increased slightly for longer names/wishes
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating birthday wish:", error);
    throw new Error("Could not generate a birthday wish.");
  }
};
