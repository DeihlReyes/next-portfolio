import type { Metadata } from "next";
import { getPosts } from "@/sanity/lib/queries";
import BlogCard from "@/components/blog-card";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and thoughts on full stack development, Next.js, and software engineering by Deihl Reyes.",
  alternates: { canonical: "https://www.deihlreyes.me/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div
      className="py-24 md:py-32"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div className="section-container space-y-14">
        {/* Header */}
        <div>
          <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
            <DecryptedText
              text="Blog"
              animateOn="view"
              sequential
              speed={40}
              className="text-label"
              encryptedClassName="text-label opacity-30"
            />
          </p>
          <BlurText
            text="Writing & Thoughts"
            as="h1"
            className="text-display font-display"
            animateBy="words"
            delay={80}
            direction="top"
            stepDuration={0.35}
          />
          <p
            className="mt-3 text-sm max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Articles on full stack development, engineering decisions, and
            lessons learned building real products.
          </p>
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div
            className="py-24 rounded-2xl text-center"
            style={{ border: "1px solid var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              No posts yet. Check back soon.
            </p>
          </div>
        )}

        {/* Posts grid */}
        {posts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
