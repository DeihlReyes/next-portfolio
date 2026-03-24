import type { PortableTextBlock } from "@portabletext/react";

export interface SanityExperience {
  _id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  technologies: string[];
  logoUrl?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string[];
  imagePath: string; // resolved: Sanity CDN URL or local path
  imageAlt: string;
  techStack: string[];
  category: "fullstack" | "ai" | "mobile" | "open-source" | "client-work";
  features?: string[];
  disclaimer?: string;
  repos?: { label: string; url: string }[];
  demo?: string;
  year: number;
  featured: boolean;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImageUrl?: string;
  body: PortableTextBlock[];
  tags?: string[];
}
