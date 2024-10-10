import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="border border-foreground shadow-md rounded-lg overflow-hidden">
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
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
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
  );
}
