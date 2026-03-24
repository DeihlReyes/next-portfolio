"use client";

import Link from "next/link";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "motion/react";
import DecryptedText from "@/components/bits/DecryptedText";
import { headerLinks } from "@/constants";
import Image from "next/image";
import logo from "@/assets/logo-portfolio.png";

const socials = [
  { href: "https://github.com/DeihlReyes", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/deihlreyes/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/deihl.reyes08/",
    icon: Facebook,
    label: "Facebook",
  },
  { href: "mailto:reyes.deihlarron@gmail.com", icon: Mail, label: "Email" },
];

const Footer = () => {
  return (
    <footer
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16">
          {/* Brand column */}
          <div className="space-y-5 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <motion.span
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.15 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <Image src={logo} alt="Logo" width={20} height={20} />
              </motion.span>
              <span
                className="text-sm font-semibold tracking-tight"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                Deihl Reyes
              </span>
            </Link>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              Full stack developer building enterprise-grade web applications
              with a focus on measurable impact, clean UI, and solid
              engineering.
            </p>
            <div className="flex items-center gap-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ color: "var(--text-tertiary)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-tertiary)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-tertiary)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {headerLinks.map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className="text-sm transition-colors duration-200 w-fit"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-tertiary)" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:reyes.deihlarron@gmail.com"
                className="text-sm transition-colors duration-200 w-fit"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-secondary)")
                }
              >
                reyes.deihlarron@gmail.com
              </a>
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                Quezon City, Philippines
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 w-fit"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(59,130,246,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--accent-dim)";
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 mb-10 sm:mb-0"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © 2026 Deihl Reyes. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
