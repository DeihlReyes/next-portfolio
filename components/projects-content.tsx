"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/constants/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import SpotlightCard from "@/components/bits/SpotlightCard";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";

type Category = Project["category"] | "all";

const cats: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "AI", value: "ai" },
  { label: "Client Work", value: "client-work" },
  { label: "Open Source", value: "open-source" },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectsContent() {
  const [active, setActive] = useState<Category>("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="section-container  space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
          <DecryptedText
            text="Projects"
            animateOn="view"
            sequential
            speed={40}
            className="text-label"
            encryptedClassName="text-label opacity-30"
          />
        </p>
        <BlurText
          text="All Projects"
          as="h1"
          className="text-display font-display"
          animateBy="words"
          delay={80}
          direction="top"
          stepDuration={0.35}
        />
        <p
          className="mt-3 text-sm max-w-xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          A full collection — from AI-powered tools and full-stack apps to
          client websites and open-source contributions.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
        className="flex flex-wrap gap-2"
      >
        {cats.map((c) => {
          const isActive = active === c.value;
          return (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: isActive ? "var(--accent)" : "var(--bg-elevated)",
                color: isActive ? "#fff" : "var(--text-secondary)",
                border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {c.label}
            </button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, delay: i * 0.04, ease }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                <article className="group h-full flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0 rounded-t-[calc(1.5rem-1px)]">
                    <Image
                      src={p.imagePath}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17,17,17,0.85), transparent 55%)",
                      }}
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {p.featured && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{ background: "var(--accent)", color: "#fff" }}
                        >
                          Featured
                        </span>
                      )}
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium capitalize"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {p.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="text-sm font-bold font-display leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className="text-xs flex-shrink-0 mt-0.5 font-mono"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {p.year}
                      </span>
                    </div>

                    <p
                      className="text-xs leading-relaxed line-clamp-2 flex-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-1">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                        style={{ color: "var(--accent)" }}
                      >
                        Details <ArrowUpRight size={12} />
                      </Link>
                      {p.repo && (
                        <Link
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "var(--text-tertiary)" }}
                          onMouseEnter={(e) =>
                            ((
                              e.currentTarget as HTMLAnchorElement
                            ).style.color = "var(--text-primary)")
                          }
                          onMouseLeave={(e) =>
                            ((
                              e.currentTarget as HTMLAnchorElement
                            ).style.color = "var(--text-tertiary)")
                          }
                        >
                          <Github size={12} /> Code
                        </Link>
                      )}
                      {p.demo && (
                        <Link
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "var(--text-tertiary)" }}
                          onMouseEnter={(e) =>
                            ((
                              e.currentTarget as HTMLAnchorElement
                            ).style.color = "var(--text-primary)")
                          }
                          onMouseLeave={(e) =>
                            ((
                              e.currentTarget as HTMLAnchorElement
                            ).style.color = "var(--text-tertiary)")
                          }
                        >
                          <ArrowUpRight size={12} /> Live
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-center py-16"
          style={{ color: "var(--text-tertiary)" }}
        >
          No projects in this category yet.
        </motion.p>
      )}
    </div>
  );
}
