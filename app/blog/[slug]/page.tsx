import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { getPostBySlug, getPostSlugs } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.deihlreyes.me/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.deihlreyes.me/blog/${post.slug}`,
      ...(post.coverImageUrl && {
        images: [{ url: post.coverImageUrl, alt: post.title }],
      }),
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadingTime(blocks: unknown[]): number {
  const text = blocks
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((b: any) => b._type === "block")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .flatMap((b: any) => b.children?.map((c: any) => c.text ?? "") ?? [])
    .join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className="text-xl font-bold font-display mt-10 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-base font-bold font-display mt-8 mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="pl-4 py-1 my-6 text-sm italic leading-relaxed"
        style={{
          borderLeft: "3px solid var(--accent)",
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
        {children}
      </strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code
        className="text-xs px-1.5 py-0.5 rounded font-mono"
        style={{
          background: "rgba(59,130,246,0.1)",
          color: "var(--accent)",
          border: "1px solid var(--accent-border)",
        }}
      >
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        className="space-y-2 my-4 pl-5 text-sm"
        style={{ color: "var(--text-secondary)", listStyleType: "disc" }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        className="space-y-2 my-4 pl-5 text-sm"
        style={{ color: "var(--text-secondary)", listStyleType: "decimal" }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const url = urlFor(value).width(900).auto("format").url();
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-xl aspect-video">
            <Image
              src={url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          {value.caption && (
            <figcaption
              className="mt-2 text-center text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const readingTime = estimateReadingTime(post.body ?? []);

  return (
    <div
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="section-container max-w-3xl space-y-10">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors group"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform"
            style={{ color: "var(--accent)" }}
          />
          All Posts
        </Link>

        {/* Cover */}
        {post.coverImageUrl && (
          <div
            className="relative w-full overflow-hidden rounded-2xl aspect-video"
            style={{ border: "1px solid var(--border)" }}
          >
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        )}

        {/* Header */}
        <div className="space-y-4">
          <div
            className="flex flex-wrap items-center gap-3 text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            <span className="inline-flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span>{readingTime} min read</span>
          </div>

          <h1
            className="text-display font-display"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {post.excerpt}
            </p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, var(--accent-border), transparent)",
          }}
        />

        {/* Body */}
        <article className="prose-sm max-w-none">
          {post.body && <PortableText value={post.body} components={portableComponents} />}
        </article>
      </div>
    </div>
  );
}
