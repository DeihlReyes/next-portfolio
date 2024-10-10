import Image from "next/image";
import { getPostBySlug, getPosts, PostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Your Portfolio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-medium mt-4 mb-2" {...props} />
  ),
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ""}
      width={800}
      height={600}
      className="rounded-lg shadow-md my-6"
    />
  ),
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: PostData | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-8 pt-24 lg:pt-32 max-w-3xl">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-8"
        />
      )}
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <time>{post.date}</time> • {post.readingTime} min read
      </div>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
