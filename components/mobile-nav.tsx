"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { headerLinks } from "@/constants";
import { motion, AnimatePresence } from "motion/react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg transition-colors"
        style={{ color: "var(--text-secondary)" }}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="absolute top-16 left-0 right-0 z-50 mx-4 rounded-xl overflow-hidden"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
          >
            <ul className="flex flex-col p-2">
              {headerLinks.map((link, i) => (
                <motion.li
                  key={link.route}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={link.route}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: pathname === link.route ? "var(--text-primary)" : "var(--text-secondary)",
                      background: pathname === link.route ? "var(--nav-active-bg)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: headerLinks.length * 0.04 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-lg text-sm font-medium mt-1"
                  style={{
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  Get in touch
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
