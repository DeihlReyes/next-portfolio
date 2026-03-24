"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Loader2,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "./markdown-components";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Deihl's AI assistant. Ask me anything about his skills, projects, or experience — or if you're looking to hire, I can help with that too.",
};

const SUGGESTED_PROMPTS = [
  "What's your tech stack?",
  "Tell me about your HRIS project",
  "Are you available for hire?",
  "What's your most impressive achievement?",
];

const ease = [0.16, 1, 0.3, 1];

function isHiringResponse(content: string) {
  const keywords = [
    "available",
    "hire",
    "freelance",
    "full-time",
    "open to",
    "contact",
    "reach out",
    "opportunity",
  ];
  return keywords.some((kw) => content.toLowerCase().includes(kw));
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    const savedHasOpened = localStorage.getItem("hasOpenedBefore");
    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedHasOpened) setHasOpenedBefore(JSON.parse(savedHasOpened));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    localStorage.setItem("hasOpenedBefore", JSON.stringify(hasOpenedBefore));
  }, [messages, hasOpenedBefore]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasOpenedBefore) {
      setMessages([INITIAL_GREETING]);
      setHasOpenedBefore(true);
    }
  };

  const handleClear = () => {
    setMessages([INITIAL_GREETING]);
    localStorage.removeItem("chatMessages");
  };

  const handleSend = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const userMsg: Message = { role: "user", content };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();

      if (res.status === 429) {
        const msg = data.isDaily
          ? "I've hit the daily API limit. I'll be back online after midnight (Pacific Time). In the meantime, feel free to reach out directly at **reyes.deihlarron@gmail.com**."
          : `I'm being rate limited. Please try again in **${data.retryAfter}s**.`;
        setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
        return;
      }

      if (!res.ok) throw new Error();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 md:right-8 w-[22rem] md:w-[26rem] z-40 flex flex-col overflow-hidden"
            style={{
              height: showSuggestions ? "auto" : "32rem",
              maxHeight: "calc(100dvh - 7rem)",
              background: "var(--bg-card)",
              border: "1px solid var(--accent-border)",
              borderRadius: "1.25rem",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 24px 64px -12px rgba(0,0,0,0.3), 0 0 0 1px var(--accent-border)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  <Sparkles size={14} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Portfolio Assistant
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Powered by Gemini
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    onClick={handleClear}
                    title="Clear conversation"
                    className="p-1.5 rounded-lg transition-colors"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "#f87171")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--text-tertiary)")
                    }
                  >
                    <Trash2 size={14} />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-tertiary)")
                  }
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-4 py-3">
              <div className="space-y-3">
                {messages.map((msg, i) => {
                  const showCTA =
                    msg.role === "assistant" && isHiringResponse(msg.content);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} gap-2`}
                    >
                      <div
                        className="max-w-[85%] px-3.5 py-2.5 rounded-2xl"
                        style={
                          msg.role === "user"
                            ? {
                                background: "var(--accent)",
                                color: "#fff",
                                borderBottomRightRadius: "4px",
                              }
                            : {
                                background: "var(--bg-elevated)",
                                border: "1px solid var(--border)",
                                color: "var(--text-secondary)",
                                borderBottomLeftRadius: "4px",
                              }
                        }
                      >
                        {msg.role === "user" ? (
                          <p className="text-sm leading-relaxed">
                            {msg.content}
                          </p>
                        ) : (
                          <ReactMarkdown
                            className="tracking-wide"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            components={markdownComponents as any}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        )}
                      </div>

                      {/* Inline CTA for hiring responses */}
                      {showCTA && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                            style={{
                              background: "var(--accent-dim)",
                              border: "1px solid var(--accent-border)",
                              color: "var(--accent)",
                            }}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.background = "rgba(59,130,246,0.18)";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.background = "var(--accent-dim)";
                            }}
                          >
                            Get in Touch
                            <ArrowRight size={11} />
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}

                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-2"
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Loader2
                        size={12}
                        className="animate-spin"
                        style={{ color: "var(--accent)" }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        Thinking...
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Suggested prompts — shown when chat is fresh */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-2 flex flex-wrap gap-1.5"
                >
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                        color: "var(--accent)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                          "var(--accent-border)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor =
                          "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                          "var(--accent-dim)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor =
                          "var(--accent-border)";
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div
              className="px-4 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 text-sm px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 disabled:opacity-50"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(59,130,246,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--border)")
                  }
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40"
                  style={{ background: "var(--accent)", color: "#fff" }}
                  onMouseEnter={(e) => {
                    if (!isLoading && input.trim())
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#2563eb";
                  }}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "var(--accent)")
                  }
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        className="fixed bottom-8 right-5 md:right-8 z-50 rounded-2xl flex items-center justify-center transition-all duration-200"
        style={{
          width: "3.25rem",
          height: "3.25rem",
          background: isOpen ? "var(--bg-elevated)" : "var(--accent)",
          border: isOpen
            ? "1px solid var(--border)"
            : "1px solid rgba(59,130,246,0.4)",
          color: isOpen ? "var(--text-primary)" : "#fff",
          boxShadow: isOpen
            ? "0 4px 16px rgba(0,0,0,0.3)"
            : "0 4px 24px rgba(59,130,246,0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
