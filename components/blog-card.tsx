"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { SanityPost } from "@/sanity/lib/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: SanityPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-200"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.borderColor =
          "var(--accent-border)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.borderColor =
          "var(--border)")
      }
    >
      {/* Cover image */}
      {post.coverImageUrl ? (
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(17,17,17,0.7), transparent 60%)",
            }}
          />
        </div>
      ) : (
        <div
          className="h-48 flex-shrink-0 flex items-center justify-center"
          style={{ background: "var(--bg-elevated)" }}
        >
          <span
            className="text-4xl font-bold font-display opacity-10"
            style={{ color: "var(--accent)" }}
          >
            {post.title[0]}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3 flex flex-col flex-1">
        <div
          className="flex items-center gap-1.5 text-xs"
          style={{ color: "var(--text-tertiary)" }}
        >
          <Calendar size={11} />
          {formatDate(post.date)}
        </div>

        <h2
          className="text-sm font-bold font-display leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p
            className="text-xs leading-relaxed line-clamp-2 flex-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {post.excerpt}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="inline-flex items-center gap-1 text-xs font-medium pt-1"
          style={{ color: "var(--accent)" }}
        >
          Read more{" "}
          <ArrowRight
            size={11}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
