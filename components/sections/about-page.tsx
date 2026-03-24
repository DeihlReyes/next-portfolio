"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Facebook } from "lucide-react";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Python",
  "Flutter",
  "Firebase",
  "Vercel",
  "Git",
];

const rv = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease },
  }),
};

export default function AboutPage() {
  return (
    <section
      id="about"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: content */}
          <div className="space-y-10">
            {/* Section label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={rv}
            >
              <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
                <DecryptedText
                  text="About Me"
                  animateOn="view"
                  sequential
                  speed={40}
                  className="text-label"
                  encryptedClassName="text-label opacity-30"
                />
              </p>
              <BlurText
                text="A bit about me"
                as="h2"
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
                I build enterprise systems, ship real products, and occasionally
                drink too much coffee.
              </p>
            </motion.div>

            <motion.div
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={rv}
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                I&apos;m Deihl Arron Reyes, a full stack web developer based in
                Quezon City, Philippines. With 1.5+ years of professional
                experience, I&apos;ve architected enterprise-grade systems, led
                junior developers, and shipped production software used by 150+
                users across multiple organizations.
              </p>
              <p>
                My work spans HRIS platforms, e-commerce sites, and client web
                applications — handling everything from system architecture and
                backend development to UI design and deployment. I care about
                code that&apos;s fast, maintainable, and actually solves real
                problems.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              custom={0.14}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={rv}
              className="space-y-4"
            >
              <p
                className="text-label"
                style={{ color: "var(--text-tertiary)" }}
              >
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.045,
                      duration: 0.35,
                      ease,
                    }}
                    className="tech-badge cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={rv}
              className="flex items-center gap-3 pt-2"
            >
              <span
                className="text-label"
                style={{ color: "var(--text-tertiary)" }}
              >
                Connect
              </span>
              <div className="flex gap-2">
                {[
                  {
                    href: "https://www.linkedin.com/in/deihl-arron-reyes/",
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/DeihlReyes",
                    Icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.facebook.com/deihl.reyes08/",
                    Icon: Facebook,
                    label: "Facebook",
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
                      border: "1px solid var(--border)",
                      color: "var(--text-tertiary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent-border)";
                      el.style.color = "var(--accent)";
                      el.style.background = "var(--accent-dim)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-tertiary)";
                      el.style.background = "transparent";
                    }}
                  >
                    <Icon size={15} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Image 1 — top right */}
            <div
              className="absolute top-0 right-0 w-64 h-80 rounded-2xl overflow-hidden group"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="/assets/about1.png"
                alt="Deihl working"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                quality={90}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.6), transparent 60%)",
                }}
              />
            </div>

            {/* Image 2 — bottom left */}
            <div
              className="absolute bottom-0 left-0 w-56 h-72 rounded-2xl overflow-hidden group"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="/assets/about2.png"
                alt="Deihl developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                quality={90}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.6), transparent 60%)",
                }}
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease }}
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 px-5 py-4 rounded-xl text-center z-10"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--accent-border)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 32px var(--accent-glow)",
              }}
            >
              <p
                className="text-2xl font-bold font-display"
                style={{ color: "var(--text-primary)" }}
              >
                1.5yr+
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                work experience
              </p>
            </motion.div>

            {/* Accent glow */}
            <div
              className="absolute bottom-12 right-16 w-32 h-32 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(59,130,246,0.12)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
