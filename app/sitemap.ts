import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { projects } from "@/constants/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://deihlreyes.me";

  // const posts = await getPosts();

  // const blogEntries = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.date),
  // }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    // ...blogEntries,
    ...projectEntries,
  ];
}
