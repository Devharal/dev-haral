/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { getLatestBlogs } from "@/data/blogs";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import LatestBlogsSection from "@/components/section/latest-blogs-section";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	const blogs = getLatestBlogs();

	return (
		<main className="min-h-dvh flex flex-col gap-14 relative">
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-start md:items-center">
						<div className="gap-2 flex flex-col order-2 md:order-1">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
								yOffset={8}
								text={`Namaste  , I'm ${DATA.name.split(" ")[0]} ( देव )`}
							/>
							
							<BlurFadeText
								className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
							<Link href="/travels" className="group relative inline-flex flex-col items-center gap-3">
								<div className="relative">
									{/* Glow effect behind avatar */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"></div>
									
									<Avatar className="size-24 md:size-32 border-2 rounded-full shadow-lg ring-4 ring-muted group-hover:ring-primary/50 transition-all duration-300 relative z-10">
										<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
										<AvatarFallback>{DATA.initials}</AvatarFallback>
									</Avatar>

									{/* Creative Animated Badge */}
									<div className="absolute -top-1 -right-1 z-20">
										{/* Outer rotating ring */}
										{/* <div className="absolute inset-0 rounded-full border border-transparent border-t-primary border-r-primary opacity-50 animate-spin" style={{ width: '52px', height: '52px', animationDuration: '3s' }}></div> */}
										
										{/* Main badge */}
										<div className="relative w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                      <div className="absolute inset-[2px] bg-gradient-to-br from-primary/50 to-transparent rounded-full opacity-40"></div>
                      <MapPin className="size-3.5 text-primary-foreground relative z-10" />
                    </div>




										{/* Pulsing outer glow */}
										{/* <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ width: '52px', height: '52px' }}></div> */}
									</div>
								</div>

								{/* Text with sparkle effect */}
								<div className="text-center flex flex-col items-center gap-1.5">
									<div className="flex items-center gap-1.5">
										<Sparkles className="size-3.5 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
										<p className="text-xs font-semibold text-primary group-hover:text-primary/80 transition-colors">
											Check my travels
										</p>
										<Sparkles className="size-3.5 text-primary animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.1s' }} />
									</div>
									<div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</Link>
						</BlurFade>
					</div>
				</div>
			</section>

			{/* About + Latest Blogs Section */}
			<section id="about" className="relative">
				<div className="mx-auto w-full max-w-2xl">
					<div className="flex gap-8 lg:gap-16">
						{/* Left: About */}
						<div className="flex-1 flex min-h-0 flex-col gap-y-4">
							<BlurFade delay={BLUR_FADE_DELAY * 3}>
								<h2 className="text-xl font-bold">About</h2>
							</BlurFade>
							<BlurFade delay={BLUR_FADE_DELAY * 4}>
								<div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
									<Markdown>{DATA.summary}</Markdown>
								</div>
							</BlurFade>
						</div>

						{/* Right: Latest Blogs */}
						<div className="hidden lg:flex lg:w-80 flex-col">
							<LatestBlogsSection blogs={blogs} delay={BLUR_FADE_DELAY * 5} />
						</div>
					</div>
				</div>
			</section>

			<section id="work">
				<div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 8}>
						<WorkSection />
					</BlurFade>
				</div>
			</section>
			<section id="education">
				<div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					<div className="flex flex-col gap-8">
						{DATA.education.map((education, index) => (
							<BlurFade
								key={education.school}
								delay={BLUR_FADE_DELAY * 8 + index * 0.05}
							>
								<Link
									href={education.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-x-3 justify-between group"
								>
									<div className="flex items-center gap-x-3 flex-1 min-w-0">
										{education.logoUrl ? (
											<img
												src={education.logoUrl}
												alt={education.school}
												className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
											/>
										) : (
											<div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
										)}
										<div className="flex-1 min-w-0 flex flex-col gap-0.5">
											<div className="font-semibold leading-none flex items-center gap-2">
												{education.school}
												<ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
											</div>
											<div className="font-sans text-sm text-muted-foreground">
												{education.degree}
											</div>
										</div>
									</div>
									<div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
										<span>
											{education.start} - {education.end}
										</span>
									</div>
								</Link>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="skills">
				<div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-2">
						{DATA.skills.map((skill, id) => (
							<BlurFade
								key={skill.name}
								delay={BLUR_FADE_DELAY * 10 + id * 0.05}
							>
								<div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
									{skill.icon && (
										<skill.icon className="size-4 rounded overflow-hidden object-contain" />
									)}
									<span className="text-foreground text-sm font-medium">
										{skill.name}
									</span>
								</div>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="mx-auto w-full max-w-2xl">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<ProjectsSection />
					</BlurFade>
				</div>
			</section>
			<section id="contact">
				<div className="mx-auto w-full max-w-2xl">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<ContactSection />
					</BlurFade>
				</div>
			</section>
		</main>
	);
}
