import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://yourdomain.com";

  const posts = await getPosts();

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}
