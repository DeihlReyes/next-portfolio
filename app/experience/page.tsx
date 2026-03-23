import type { Metadata } from "next";
import ExperienceContent from "@/components/experience-content";
import { getExperiences } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Deihl Reyes — full stack developer roles and internships.",
  alternates: { canonical: "https://www.deihlreyes.me/experience" },
};

export default async function ExperiencePage() {
  const experiences = await getExperiences();
  return <ExperienceContent experiences={experiences} />;
}
