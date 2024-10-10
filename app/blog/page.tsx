import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";

export const metadata: Metadata = {
  title: "Blog | Deihl Reyes",
  description: "Read the latest articles on web development, design, and more.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen container mx-auto px-8 pt-24 lg:pt-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
