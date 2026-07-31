import type { Project } from "@/app/types/Project";

/**
 * Every project worth showing, newest first. Both the home page and the
 * projects index read from here, so the count in the section headings is
 * always the real count.
 */
export const projects: Project[] = [
	{
		name: "RedThread",
		description:
			"Turns listening to music from a solo habit into a shared moment.",
		link: "https://apps.apple.com/ph/app/redthread/id6762317751",
		stack: ["laravel", "filament", "livekit", "onesignal", "musickit", "aws"],
		featured: true,
	},
	{
		name: "TieBreak",
		description:
			"Finds local tennis partners and organises singles or doubles matches.",
		link: "https://apps.apple.com/ph/app/tiebreak/id6763960355",
		stack: ["laravel", "filament", "googleapis", "posthog", "aws"],
		featured: true,
	},
	{
		name: "WeCollect",
		description:
			"Trading card marketplace with the social side of collecting built in.",
		link: "https://wecollect.com.au/",
		stack: [
			"vue",
			"nuxt",
			"tailwind",
			"typescript",
			"laravel",
			"stripe",
			"aws",
		],
		featured: true,
	},
	{
		name: "Valued Business",
		description:
			"Business media platform that turns word of mouth into something measurable.",
		link: "https://valued.biz/",
		stack: [
			"vue",
			"nuxt",
			"typescript",
			"laravel",
			"stripe",
			"iap",
			"ably",
			"aws",
		],
		featured: true,
	},
	{
		name: "Move With Us",
		description:
			"Women's fitness app pairing science-based workouts with custom nutrition.",
		link: "https://apps.apple.com/ph/app/move-with-us/id1523442465",
		stack: ["vue", "nuxt", "laravel", "aws"],
		featured: true,
	},
	{
		name: "F45 Training",
		description: "Functional training app for a global gym franchise.",
		link: "https://f45training.com/",
		stack: ["angular", "laravel", "heroku"],
	},
	{
		name: "Naughty Talk",
		description: "Dating platform built for high traffic and fast matching.",
		link: "https://naughtytalk.com/",
		stack: ["react", "next", "tailwind", "typescript", "laravel", "aws"],
	},
	{
		name: "Mustard",
		description: "Resource, training and ideas hub for student leaders.",
		link: "https://mustardschools.app/",
		stack: ["vue", "laravel", "digitalocean"],
	},
	{
		name: "Archipelago",
		description:
			"Site for a Brisbane architecture, urban design and landscape practice.",
		link: "https://archipelago.com.au/",
		stack: ["wordpress"],
	},
	{
		name: "Performance Wave",
		description: "Continuous 360 degree performance reviews for growing teams.",
		link: "https://www.linkedin.com/company/peoplewave/",
		stack: ["vue", "laravel", "digitalocean"],
	},
	{
		name: "First 100 Days",
		description:
			"Employee onboarding tool that tracks a new hire's first days.",
		link: "https://www.linkedin.com/company/peoplewave/",
		stack: ["vue", "typescript", "laravel", "digitalocean"],
	},
	{
		name: "Concha",
		description: "Dating app. Built end to end, no longer public.",
		stack: ["laravel", "digitalocean"],
	},
	{
		name: "Parkiee",
		description:
			"Connects drivers with parking spaces they can rent on the spot.",
		stack: ["vue", "node", "aws"],
	},
];

export const featuredProjects: Project[] = projects.filter(
	(project) => project.featured,
);
