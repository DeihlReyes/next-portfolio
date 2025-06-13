import AboutPage from "@/components/sections/about-page";
import BlogSection from "@/components/sections/blogs-page";
import ContactPage from "@/components/sections/contact-page";
import ExperiencePage from "@/components/sections/experience-page";
import LandingPage from "@/components/sections/landing-page";
import ProjectsPage from "@/components/sections/projects-pages";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  // const posts = await getPosts();
  // const featuredPosts = posts.slice(0, 3);

  return (
    <main>
      <LandingPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      {/* <BlogSection featuredPosts={featuredPosts} /> */}
      <ContactPage />
    </main>
  );
}
