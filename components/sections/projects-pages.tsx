"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import type { SanityProject } from "@/sanity/lib/types";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";
import SpotlightCard from "@/components/bits/SpotlightCard";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const rv = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease },
  }),
};

export default function ProjectsPage({ projects }: { projects: SanityProject[] }) {
  const displayed = projects.filter((p) => p.featured).slice(0, 3).concat(
    projects.filter((p) => !p.featured).slice(0, 3)
  );
  return (
    <section id="projects">
      <div className="section-container section-padding space-y-14">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={rv}
        >
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
                <DecryptedText
                  text="Work"
                  animateOn="view"
                  sequential
                  speed={50}
                  className="text-label"
                  encryptedClassName="text-label opacity-30"
                />
              </p>
              <BlurText
                text="Selected Projects"
                as="h2"
                className="text-display font-display"
                animateBy="words"
                delay={80}
                direction="top"
                stepDuration={0.35}
              />
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                A few things I&apos;ve built — from AI tools to e-commerce platforms.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap pb-1 group"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
              }
            >
              All projects{" "}
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((p: SanityProject, i: number) => (
            <motion.div
              key={p.slug}
              custom={0.05 + i * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={rv}
            >
              <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.12)">
                <Link href={`/projects/${p.slug}`} className="block h-full">
                  <article className="group h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden flex-shrink-0 rounded-t-[calc(1.5rem-1px)]">
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
                            "linear-gradient(to top, rgba(17,17,17,0.9) 0%, transparent 55%)",
                        }}
                      />
                      {p.featured && (
                        <span
                          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: "var(--accent)", color: "#fff" }}
                        >
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-5 space-y-3 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className="text-base font-bold font-display"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {p.title}
                        </h3>
                        <ArrowUpRight
                          size={15}
                          className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed line-clamp-2 flex-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="tech-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={rv}
        >
          <div
            className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(59,130,246,0.12), transparent)",
              }}
            />
            <div className="relative z-10 space-y-5">
              <h3 className="text-heading" style={{ color: "var(--text-primary)" }}>
                Ready to collaborate?
              </h3>
              <p className="text-base max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                Let&apos;s work together. I&apos;m always open to interesting problems and new
                opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group"
                style={{ background: "var(--accent)", color: "#fff" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#2563eb")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)")
                }
              >
                Start a conversation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
