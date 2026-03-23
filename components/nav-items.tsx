"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li key={link.route}>
            <Link
              href={link.route}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                background: isActive ? "var(--bg-elevated)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
