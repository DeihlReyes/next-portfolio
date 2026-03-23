"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm transition-colors"
      style={{ color: "var(--text-tertiary)" }}
      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-tertiary)"}
    >
      <ArrowLeft size={15} /> {label}
    </Link>
  );
}
