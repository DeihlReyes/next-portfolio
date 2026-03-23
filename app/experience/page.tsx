import type { Metadata } from "next";
import ExperienceContent from "@/components/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Deihl Reyes — full stack developer roles and internships.",
  alternates: { canonical: "https://www.deihlreyes.me/experience" },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
