import type { Metadata } from "next";
import ProjectsContent from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Deihl Reyes — full stack apps, AI tools, e-commerce, and open-source work.",
  alternates: { canonical: "https://www.deihlreyes.me/projects" },
};

export default function ProjectsPage() {
  return (
    <div
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <ProjectsContent />
    </div>
  );
}
