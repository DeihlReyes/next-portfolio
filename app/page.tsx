import AboutPage from "@/components/sections/about-page";
import LandingPage from "@/components/sections/landing-page";
import ProjectsPage from "@/components/sections/projects-pages";

export default async function Home() {
  return (
    <main>
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      {/* <BlogSection featuredPosts={featuredPosts} /> */}
    </main>
  );
}
