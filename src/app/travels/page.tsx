import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import type { Metadata } from "next";
import { TRAVELS } from "@/data/travels";
import { ChevronRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Travels",
  description: "My travel stories and adventures around the world.",
  openGraph: {
    title: "Travels",
    description: "My travel stories and adventures around the world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travels",
    description: "My travel stories and adventures around the world.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function TravelsPage() {
  const sortedTravels = [...TRAVELS].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <section id="travels">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Travels{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {sortedTravels.length} journeys
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Stories from my adventures and travels around the world.
        </p>
      </BlurFade>

      {sortedTravels.length > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-5">
            {sortedTravels.map((travel, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={travel.id}>
                <Link
                  className="flex items-start gap-x-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={`/travels/${travel.slug}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex flex-col gap-y-2 flex-1 min-w-0">
                    <div>
                      <p className="tracking-tight text-lg font-medium">
                        <span className="group-hover:text-foreground transition-colors">
                          {travel.title}
                          <ChevronRight
                            className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                            aria-hidden
                          />
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        📍 {travel.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {travel.summary}
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      {new Date(travel.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No travels yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
