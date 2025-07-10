import { Metadata } from "next";
import ExperienceContent from "@/components/experience-content";

export const metadata: Metadata = {
  title: "Experience - Deihl Reyes | Full Stack Developer",
  description:
    "Explore Deihl Reyes' professional experience as a Full Stack Developer. From internships to full-stack development, discover my journey in building scalable web applications.",
  keywords: [
    "experience",
    "full stack developer",
    "web developer",
    "professional experience",
    "career",
    "Philippines",
  ],
  openGraph: {
    title: "Experience - Deihl Reyes | Full Stack Developer",
    description:
      "Explore Deihl Reyes' professional experience as a Full Stack Developer. From internships to full-stack development, discover my journey in building scalable web applications.",
    url: "https://deihlreyes.me/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience - Deihl Reyes | Full Stack Developer",
    description:
      "Explore Deihl Reyes' professional experience as a Full Stack Developer.",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
