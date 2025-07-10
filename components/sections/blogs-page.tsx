"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BlogPostCard } from "../blog-post-card";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
}

interface BlogSectionProps {
  featuredPosts: Post[];
}

export default function BlogSection({ featuredPosts }: BlogSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12">
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <BlogPostCard key={post.slug} post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
