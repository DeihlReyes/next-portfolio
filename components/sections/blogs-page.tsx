import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";

export default async function BlogSection() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3); // Get the 3 most recent posts

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-primary font-medium">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
