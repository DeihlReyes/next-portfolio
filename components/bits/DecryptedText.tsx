"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view" | "click";
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 8,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set<number>());
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useMemo(
    () =>
      useOriginalCharsOnly
        ? Array.from(new Set(text.split(""))).filter((c) => c !== " ")
        : characters.split(""),
    [useOriginalCharsOnly, text, characters]
  );

  const shuffleText = useCallback(
    (original: string, revealed: Set<number>) =>
      original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return original[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join(""),
    [availableChars]
  );

  const triggerDecrypt = useCallback(() => {
    setRevealedIndices(new Set());
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    let pointer = 0;
    const interval = setInterval(() => {
      setRevealedIndices((prev) => {
        if (sequential) {
          if (pointer >= text.length) {
            clearInterval(interval);
            setIsAnimating(false);
            setDisplayText(text);
            return prev;
          }
          let nextIdx = pointer;
          if (revealDirection === "end") nextIdx = text.length - 1 - pointer;
          else if (revealDirection === "center") {
            const mid = Math.floor(text.length / 2);
            nextIdx = pointer % 2 === 0 ? mid + pointer / 2 : mid - Math.ceil(pointer / 2);
          }
          pointer++;
          const next = new Set(prev);
          next.add(nextIdx);
          setDisplayText(shuffleText(text, next));
          return next;
        } else {
          pointer++;
          setDisplayText(shuffleText(text, prev));
          if (pointer >= maxIterations) {
            clearInterval(interval);
            setIsAnimating(false);
            setDisplayText(text);
          }
          return prev;
        }
      });
    }, speed);
    return () => clearInterval(interval);
  }, [isAnimating, text, speed, maxIterations, sequential, revealDirection, shuffleText]);

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            triggerDecrypt();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [animateOn, hasAnimated, triggerDecrypt]);

  const hoverProps =
    animateOn === "hover"
      ? {
          onMouseEnter: () => {
            if (!isAnimating) {
              setHasAnimated(false);
              triggerDecrypt();
            }
          },
        }
      : {};

  return (
    <span ref={containerRef} className={parentClassName} style={{ display: "inline-block" }} {...hoverProps}>
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {text}
      </span>
      <span aria-hidden="true">
        {displayText.split("").map((char, i) => {
          const revealed = revealedIndices.has(i) || (!isAnimating && hasAnimated);
          return (
            <span key={i} className={revealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
