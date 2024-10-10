import AboutPage from "@/components/sections/about-page";
import ContactPage from "@/components/sections/contact-page";
import LandingPage from "@/components/sections/landing-page";
import ProjectsPage from "@/components/sections/projects-pages";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
