import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Your Portfolio",
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
          <article
            key={post.slug}
            className="border border-foreground shadow-md rounded-lg overflow-hidden"
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <span className="text-primary font-medium flex items-center">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
