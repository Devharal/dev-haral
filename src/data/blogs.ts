import { allPosts } from "content-collections";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
}

export function getLatestBlogs(): BlogPost[] {
  const posts = allPosts
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3)
    .map((post) => ({
      id: post._meta.path,
      title: post.title,
      excerpt: post.summary || post.title,
      publishedAt: post.publishedAt,
      slug: post._meta.path.replace(/\.mdx$/, ""),
    }));

  return posts;
}
