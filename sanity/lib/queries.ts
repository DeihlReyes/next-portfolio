import { groq } from "next-sanity";
import { client } from "./client";
import { urlFor } from "./image";
import type { SanityExperience, SanityPost, SanityProject } from "./types";

// ─── GROQ Queries ────────────────────────────────────────────────────────────

const projectsQuery = groq`
  *[_type == "project"] | order(order asc, featured desc, year desc) {
    _id, title, "slug": slug.current,
    description, longDescription,
    imagePath, image, imageAlt,
    techStack, category, features,
    disclaimer, repo, demo, year, featured
  }
`;

const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, "slug": slug.current,
    description, longDescription,
    imagePath, image, imageAlt,
    techStack, category, features,
    disclaimer, repo, demo, year, featured
  }
`;

const projectSlugsQuery = groq`*[_type == "project"]{ "slug": slug.current }`;

const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc) {
    _id, role, company, date, description, bullets, technologies
  }
`;

const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id, title, "slug": slug.current,
    date, excerpt, coverImage, tags
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current,
    date, excerpt, coverImage, body, tags
  }
`;

const postSlugsQuery = groq`*[_type == "post"]{ "slug": slug.current }`;

// ─── Fetch helpers ────────────────────────────────────────────────────────────

const OPT = { next: { revalidate: 30 } };

/** Resolve project image: Sanity CDN first, then local imagePath fallback */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveProjectImage(p: any): SanityProject {
  return {
    ...p,
    imagePath: p.image ? urlFor(p.image).width(800).auto("format").url() : (p.imagePath ?? ""),
  };
}

export async function getProjects(): Promise<SanityProject[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const { projects } = await import("@/constants/data/projects");
    return projects.map((p) => ({ ...p, _id: p.slug }));
  }
  const raw = await client.fetch(projectsQuery, {}, OPT);
  return raw.map(resolveProjectImage);
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const { projects } = await import("@/constants/data/projects");
    const p = projects.find((p) => p.slug === slug);
    return p ? { ...p, _id: p.slug } : null;
  }
  const raw = await client.fetch(projectBySlugQuery, { slug }, OPT);
  return raw ? resolveProjectImage(raw) : null;
}

export async function getProjectSlugs(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const { projects } = await import("@/constants/data/projects");
    return projects.map((p) => p.slug);
  }
  const raw: { slug: string }[] = await client.fetch(projectSlugsQuery, {}, OPT);
  return raw.map((r) => r.slug);
}

export async function getExperiences(): Promise<SanityExperience[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const { experiences } = await import("@/constants/data/experience");
    return experiences.map((e, i) => ({ ...e, _id: String(i) }));
  }
  return client.fetch(experiencesQuery, {}, OPT);
}

export async function getPosts(): Promise<SanityPost[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any[] = await client.fetch(postsQuery, {}, OPT);
  return raw.map((p) => ({
    ...p,
    coverImageUrl: p.coverImage ? urlFor(p.coverImage).width(800).auto("format").url() : undefined,
  }));
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any = await client.fetch(postBySlugQuery, { slug }, OPT);
  if (!raw) return null;
  return {
    ...raw,
    coverImageUrl: raw.coverImage ? urlFor(raw.coverImage).width(1200).auto("format").url() : undefined,
  };
}

export async function getPostSlugs(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  const raw: { slug: string }[] = await client.fetch(postSlugsQuery, {}, OPT);
  return raw.map((r) => r.slug);
}
