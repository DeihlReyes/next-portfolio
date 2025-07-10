import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectsContent from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects - Deihl Reyes | Full Stack Developer",
  description:
    "Explore Deihl Reyes' portfolio of web development projects. From full-stack applications to modern web solutions, discover my work in Next.js, React, and more.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "full stack developer",
    "Next.js",
    "React",
    "web applications",
  ],
  openGraph: {
    title: "Projects - Deihl Reyes | Full Stack Developer",
    description:
      "Explore Deihl Reyes' portfolio of web development projects. From full-stack applications to modern web solutions, discover my work in Next.js, React, and more.",
    url: "https://deihlreyes.me/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Deihl Reyes | Full Stack Developer",
    description: "Explore Deihl Reyes' portfolio of web development projects.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b py-8 sm:py-12">
        <div className="container py-6 sm:py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-section-title text-gray-900 mb-6">
              All Projects
            </h1>
            <p className="text-body text-gray-600 leading-relaxed max-w-3xl">
              A collection of my work showcasing full-stack development, modern
              web technologies, and user-centric design principles.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Content */}
      <ProjectsContent />
    </div>
  );
}
