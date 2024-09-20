"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, BotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "./markdown-components";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING: Message = {
  role: "assistant",
  content:
    "Hello! I'm Deihl's portfolio assistant. Need details on his skills, projects, or experience? Feel free to ask, and I'll help you explore his work as a Full Stack Developer!",
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    const savedHasOpenedBefore = localStorage.getItem("hasOpenedBefore");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
    if (savedHasOpenedBefore) {
      setHasOpenedBefore(JSON.parse(savedHasOpenedBefore));
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    localStorage.setItem("hasOpenedBefore", JSON.stringify(hasOpenedBefore));
  }, [messages, hasOpenedBefore]);

  const handleOpenChat = () => {
    setIsOpen(true);
    if (!hasOpenedBefore) {
      setMessages([INITIAL_GREETING]);
      setHasOpenedBefore(true);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      console.log(data.response);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-8 right-5 md:right-8 z-50"
      >
        <Button
          onClick={isOpen ? () => setIsOpen(false) : handleOpenChat}
          className="rounded-full w-14 h-14 bg-secondary hover:bg-secondary/70 text-secondary-foreground shadow-lg"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-5 md:right-8 w-[22rem] md:w-[27rem] h-[32rem] bg-white rounded-lg shadow-2xl overflow-hidden z-40"
          >
            <div className="flex flex-col h-full">
              <div className="bg-[#333232] text-white p-4 flex justify-between items-center">
                <h3 className="text-lg flex items-center">
                  <BotIcon size={40} className="mr-2" />
                  Ask my bot!
                </h3>
              </div>
              <ScrollArea className="flex-grow p-4 bg-muted w-full">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block p-3 text-sm rounded-lg shadow-sm max-w-sm md:max-w-0 ${
                        message.role === "user" ? "bg-[#333232]/20" : "bg-white"
                      }`}
                    >
                      <ReactMarkdown
                        className="tracking-wide"
                        components={markdownComponents as any}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-center text-xs mt-5 text-gray-500 animate-pulse">
                    Thinking...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollArea>
              <div className="p-4 bg-white border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center"
                >
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow mr-2"
                    disabled={isLoading}
                  />
                  <Button type="submit" disabled={isLoading}>
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
