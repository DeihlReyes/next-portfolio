import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextResponse } from "next/server";
import { portfolioDetails } from "@/constants";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant for a portfolio website. Always answer shortly and precisely but be able to attend the question properly. Use the following information to answer questions: ${portfolioDetails}`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I'm an AI assistant for your portfolio website, and I'll use the provided information to answer questions about Deihl Arron Reyes, his skills, projects, education, experience, and contact information. How can I help you today?",
            },
          ],
        },
      ],
    });

    const result = await chat.sendMessage([{ text: message }]);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
