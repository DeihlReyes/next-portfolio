import LandingPage from "@/components/sections/landing-page";
import AboutPage from "@/components/sections/about-page";
import ProjectsPage from "@/components/sections/projects-pages";
import { getProjects } from "@/sanity/lib/queries";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <LandingPage />
      <AboutPage />
      <ProjectsPage projects={projects} />
    </>
  );
}
