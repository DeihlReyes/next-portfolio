"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectActionsProps {
  demo?: string;
  repo?: string;
}

export default function ProjectActions({ demo, repo }: ProjectActionsProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {demo && (
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{ background: "var(--accent)", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = "#2563eb"}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)"}
        >
          <ExternalLink size={14} /> Live Demo
        </Link>
      )}
      {repo && (
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--border-hover)";
            el.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--text-secondary)";
          }}
        >
          <Github size={14} /> Source Code
        </Link>
      )}
    </div>
  );
}
