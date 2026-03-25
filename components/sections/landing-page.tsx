"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import BlurText from "@/components/bits/BlurText";
import DecryptedText from "@/components/bits/DecryptedText";
import Aurora from "../bits/Aurora";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease },
  }),
};

const LandingPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0 max-h-[50vh]">
        <Aurora
          colorStops={["#0ea5e9", "#3b82f6", "#1d4ed8"]}
          blend={0.5}
          amplitude={0.7}
          speed={0.8}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="section-container relative z-10 w-full py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-6xl mx-auto">
          {/* Status badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
                background: "var(--accent-dim)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Role label */}
          <motion.div
            custom={0.05}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p
              className="text-label"
              style={{ color: "var(--text-secondary)" }}
            >
              <DecryptedText
                text="Full Stack Developer"
                animateOn="view"
                sequential
                speed={40}
                className="text-label"
                encryptedClassName="text-label opacity-30"
              />
            </p>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Hi, I'm Deihl Reyes"
            as="h1"
            className="text-5xl md:text-8xl items-center justify-center font-bold tracking-tight font-display"
            animateBy="words"
            delay={100}
            direction="top"
            stepDuration={0.4}
          />

          {/* Bio */}
          <motion.p
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A full stack developer based in the Philippines with 1.5+ years of
            professional experience, specializing in{" "}
            <span style={{ color: "var(--text-primary)" }}>Next.js</span> and
            enterprise web applications. I architect internal systems, ship
            client platforms, and own the full stack — from UI design to
            production deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group"
              style={{ background: "var(--accent)", color: "#fff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "#2563eb")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--accent)")
              }
            >
              View Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text-secondary)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 pt-1"
          >
            <div
              className="h-px w-10"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            <div className="flex items-center gap-2">
              {[
                {
                  href: "https://github.com/DeihlReyes",
                  Icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/deihlreyes/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    color: "var(--text-tertiary)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--accent)";
                    el.style.borderColor = "var(--accent-border)";
                    el.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--text-tertiary)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
            <div
              className="h-px w-10"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />
    </section>
  );
};

export default LandingPage;
