"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
  animationSpeed = 6,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${[...colors, colors[0]].join(", ")})`;

  return (
    <span
      className={`gradient-text-animated ${className}`}
      style={
        {
          backgroundImage: gradient,
          backgroundSize: "200% auto",
          animationDuration: `${animationSpeed}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
