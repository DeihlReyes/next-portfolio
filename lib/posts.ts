import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostData = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readingTime: number;
};

export async function getPosts(): Promise<PostData[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    return getPostBySlug(slug);
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    content: content,
    readingTime: Math.ceil(content.split(" ").length / 200),
  };
}
