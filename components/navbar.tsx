"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/assets/logo-portfolio.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 16);
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--navbar-scrolled-bg)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--navbar-border)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[1px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--accent), #0ea5e9)",
          opacity: scrollProgress > 1 ? 1 : 0,
        }}
      />

      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
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
            className="text-sm font-semibold tracking-tight hidden sm:block"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-syne)",
            }}
          >
            Deihl Reyes
          </span>
        </Link>

        {/* Desktop nav — pill container */}
        <ul
          className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-xl"
          style={{
            background: scrolled ? "var(--nav-active-bg)" : "transparent",
            border: scrolled
              ? "1px solid var(--navbar-border)"
              : "1px solid transparent",
            transition: "all 0.3s ease",
          }}
        >
          {headerLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.route} className="relative">
                <Link
                  href={link.route}
                  className="relative px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 block"
                  style={{
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-secondary)";
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + theme toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              border: "1px solid var(--accent-border)",
              color: "var(--accent)",
              background: "var(--accent-dim)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--accent-border)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--accent-dim)";
            }}
          >
            Get in touch
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
