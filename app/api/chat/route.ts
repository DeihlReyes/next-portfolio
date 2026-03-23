import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are a friendly AI assistant for Deihl Arron Reyes's portfolio website. Help visitors learn about him quickly.

Rules: concise replies (under 100 words), use **bold** and bullet lists, never fabricate info, redirect off-topic questions politely.
For hiring questions: say he's open to full-time and freelance, suggest emailing reyes.deihlarron@gmail.com.

About Deihl:
- Full Stack Web Developer, 1.5 yrs professional experience, based in Quezon City, Philippines
- Stack: Next.js 15, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS, Node.js, Python, Flutter, Firebase
- At AP Creative (Jul 2024–Feb 2026): built HRIS for 150+ users across 4 companies (MFA, RBAC, biometric integration), automated 600+ annual HR requests cutting processing time 60%, improved e-commerce load time 72% (5.7s→1.6s), integrated Xendit payments (₱17K–₱120K), led junior developer
- Intern at Achieve Without Borders (May–Jul 2023): Flutter/Node.js/Firebase e-commerce platform, fixed critical checkout bug deployed to production, researched Algolia integration later adopted in prod
- Key project: Satiscript — AI emotion detection for call centers, fine-tuned BERT 89% accuracy across 7 emotion categories, 1st Runner-Up Best Research Paper UE Caloocan 2024. Demo: https://satiscript.vercel.app
- Other projects: TaskQuill (task mgmt app), Filevert (file converter), QuizWiz (Gemini AI quizzes), GDSC UE Caloocan website
- Education: BS Computer Engineering, UE Caloocan 2019–2024, Exemplary Academic Performance SY 2021–2022
- GDSC: Associate Web Dev Lead, led team of 4 devs, mentored 50+ beginner developers`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // Cap history to last 6 messages to keep token usage low
    const recentMessages = messages.slice(-6);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...recentMessages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      temperature: 0.75,
      max_tokens: 512,
    });

    const response = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    const errObj = error as { status?: number; message?: string };
    if (errObj?.status === 429) {
      return NextResponse.json(
        { error: "rate_limited", retryAfter: 60, isDaily: false },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
