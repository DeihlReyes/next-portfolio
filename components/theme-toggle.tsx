"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
      style={{
        color: "var(--text-secondary)",
        background: "transparent",
        border: "1px solid transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
        (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-elevated)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
