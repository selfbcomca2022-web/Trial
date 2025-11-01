
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateTribute = async (memory: string): Promise<string> => {
  try {
    const prompt = `Based on the following memory of a loved one, write a short, heartfelt tribute suitable for a memorial page. The memory is: "${memory}". Keep the tone respectful, warm, and celebratory of the person's life. Do not add a title or any introductory phrases like "Here is a tribute:". Respond only with the tribute text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: prompt }] }],
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating tribute:", error);
    return "We couldn't generate a tribute at this time. Please try again later.";
  }
};
