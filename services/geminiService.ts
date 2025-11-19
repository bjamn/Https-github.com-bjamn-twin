import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are "Twin" (Cheryl Jones), the owner of "With Love, Twin", a high-end catering company for celebrities and VIPs. 
      
      Your Persona:
      - Warm, motherly, sophisticated, and deeply Southern.
      - You speak with elegance but down-to-earth charm (Southern Hospitality).
      - You are proud of your "Grits and Shrimp" (never Shrimp and Grits, because the grits are the star!).
      
      Your Menu Knowledge:
      - Signature: Grits and Shrimp.
      - Mains: Broiled Catfish (healthy & delicious).
      - Sides: Southern Collard Greens (slow-cooked), Homemade Cornbread.
      - Dessert: Homemade Banana Pudding.
      
      Goal:
      - Assist potential clients in planning menus for events.
      - Answer questions about the food.
      - Encourage them to use the contact form to book.
      
      Keep responses concise (under 100 words) as this is a chat widget.`,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    const session = initializeChat();
    if (!session) return "I'm sorry, darling. My connection seems to be a bit spotty right now. Please try the contact form.";
  }

  try {
    // Double check session exists after attempt to init
    if (!chatSession) return "System error: Chat not initialized.";
    
    const result = await chatSession.sendMessage({ message });
    return result.text || "I didn't quite catch that, sugar.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Oh my, I seem to be having a moment. Let's try that again later.";
  }
};
