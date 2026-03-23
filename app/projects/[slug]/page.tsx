import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://www.deihlreyes.me/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.deihlreyes.me/projects/${project.slug}`,
      images: [{ url: project.imagePath, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Deihl Reyes",
      url: "https://www.deihlreyes.me",
    },
    ...(project.demo && { url: project.demo }),
    applicationCategory: "WebApplication",
  };

  return (
    <div
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="section-container space-y-12">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm transition-colors group"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform"
            style={{ color: "var(--accent)" }}
          />
          All Projects
        </Link>

        {/* Hero image */}
        {project.imagePath && (
          <div
            className="relative w-full overflow-hidden rounded-2xl aspect-video"
            style={{ border: "1px solid var(--border)" }}
          >
            <Image
              src={project.imagePath}
              alt={project.imageAlt}
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)",
              }}
            />
          </div>
        )}

        {/* Title block */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold font-mono capitalize"
              style={{
                background: "var(--accent-dim)",
                color: "var(--accent)",
                border: "1px solid var(--accent-border)",
              }}
            >
              {project.category.replace("-", " ")}
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: "var(--text-tertiary)" }}
            >
              {project.year}
            </span>
            {project.featured && (
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Featured
              </span>
            )}
          </div>

          <h1
            className="text-display font-display"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h1>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          <div className="flex gap-3 flex-wrap pt-1">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: "var(--bg-elevated)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <Github size={14} /> Source Code
              </a>
            )}
          </div>
        </div>

        <div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, var(--accent-border), transparent)",
          }}
        />

        {/* Details grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="text-label" style={{ color: "var(--text-tertiary)" }}>
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            {project.longDescription?.length > 0 && (
              <section className="space-y-4">
                <p className="text-label" style={{ color: "var(--text-tertiary)" }}>
                  Overview
                </p>
                <div className="space-y-3">
                  {project.longDescription.map((para, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {project.features && project.features.length > 0 && (
              <section className="space-y-4">
                <p className="text-label" style={{ color: "var(--text-tertiary)" }}>
                  Key Features
                </p>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.disclaimer && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl text-sm"
                style={{
                  background: "rgba(245,158,11,0.06)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  color: "rgba(245,158,11,0.9)",
                }}
              >
                <AlertTriangle size={15} className="flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{project.disclaimer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
