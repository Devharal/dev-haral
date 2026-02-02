import BlurFade from "@/components/magicui/blur-fade";
import { TRAVELS } from "@/data/travels";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import Link from "next/link";
import { ChevronLeft, MapPin, Calendar } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const travel = TRAVELS.find((t) => t.slug === slug);

  if (!travel) {
    return {
      title: "Travel Not Found",
    };
  }

  return {
    title: travel.title,
    description: travel.description,
    openGraph: {
      title: travel.title,
      description: travel.description,
      images: travel.images[0] ? [travel.images[0]] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: travel.title,
      description: travel.description,
    },
  };
}

export async function generateStaticParams() {
  return TRAVELS.map((travel) => ({
    slug: travel.slug,
  }));
}

export default async function TravelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const travel = TRAVELS.find((t) => t.slug === slug);

  if (!travel) {
    notFound();
  }

  return (
    <article className="w-full">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/travels"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="size-4" />
          Back to travels
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {travel.title}
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" />
              <span>{travel.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="size-4" />
              <span>
                {new Date(travel.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Image Collage */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 overflow-hidden rounded-lg">
          {travel.images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2 h-[300px] md:h-[400px]" : "h-[200px]"
              }`}
            >
              <img
                src={image}
                alt={`${travel.title} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Content */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{travel.content}</Markdown>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/travels"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-4" />
            Back to all travels
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
