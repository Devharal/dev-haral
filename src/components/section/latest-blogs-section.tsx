import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface LatestBlogsSectionProps {
  blogs: BlogPost[];
  delay?: number;
}

export default function LatestBlogsSection({
  blogs,
  delay = 0.04,
}: LatestBlogsSectionProps) {
  const recentBlogs = blogs.slice(0, 3);

  if (recentBlogs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <BlurFade delay={delay}>
        <h3 className="text-lg font-semibold">Latest Blogs</h3>
      </BlurFade>
      <div className="flex flex-col gap-3">
        {recentBlogs.map((blog, index) => (
          <BlurFade key={blog.id} delay={delay + (index + 1) * 0.05}>
            <Link
              href={`/blog/${blog.slug}`}
              className="group flex flex-col gap-1 p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-background hover:border-border/80 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-medium leading-snug text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-none" aria-hidden />
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {blog.excerpt}
              </p>
              <span className="text-xs text-muted-foreground/60">
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
