import AboutPage from "@/components/sections/about-page";
import LandingPage from "@/components/sections/landing-page";
import ProjectsPage from "@/components/sections/projects-pages";

export default async function Home() {
  // const posts = await getPosts();
  // const featuredPosts = posts.slice(0, 3);

  return (
    <main>
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      {/* <BlogSection featuredPosts={featuredPosts} /> */}
    </main>
  );
}
