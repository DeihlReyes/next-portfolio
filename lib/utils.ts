import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCasingString(str: string) {
  console.log("Formatting string:", str);
  const specialCases: Record<string, string> = {
    ai: "AI",
  };

  return str
    .toLowerCase()
    .split("-")
    .map(
      (word) =>
        specialCases[word] ?? word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}
