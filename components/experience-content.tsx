"use client";

import { motion } from "motion/react";
import type { SanityExperience } from "@/sanity/lib/types";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ExperienceContent({ experiences }: { experiences: SanityExperience[] }) {
  return (
    <div
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="section-container z-[2]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-20"
        >
          <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
            <DecryptedText
              text="Experience"
              animateOn="view"
              sequential
              speed={40}
              className="text-label"
              encryptedClassName="text-label opacity-30"
            />
          </p>
          <BlurText
            text="Professional Journey"
            as="h1"
            className="text-display font-display"
            animateBy="words"
            delay={80}
            direction="top"
            stepDuration={0.35}
          />
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Where I&apos;ve worked and what I&apos;ve shipped.
          </p>
        </motion.div>

        {/* Entries */}
        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const isCurrent = exp.date.includes("Present");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                {/* Top row: role + date */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      )}
                      <h2
                        className="text-xl font-bold font-display"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h2>
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className="text-xs font-mono px-3 py-1.5 rounded-full self-start flex-shrink-0"
                    style={{
                      background: isCurrent
                        ? "var(--accent-dim)"
                        : "var(--bg-elevated)",
                      border: `1px solid ${isCurrent ? "var(--accent-border)" : "var(--border)"}`,
                      color: isCurrent
                        ? "var(--accent)"
                        : "var(--text-tertiary)",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.05 + bi * 0.05,
                        duration: 0.4,
                        ease,
                      }}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider — skip on last */}
                {i < experiences.length - 1 && (
                  <div
                    className="mt-16 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-border), transparent)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
