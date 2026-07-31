import type { Project } from "@/app/types/Project";
import ProjectItem from "./ProjectItem";

const projects: Project[] = [
  {
		name: "RedThread",
		description: "RedThread transforms music from a solo experience into a shared moment.",
		link: "https://apps.apple.com/ph/app/redthread/id6762317751",
		linkTitle: "RedThread iOS App",
		image: "/redthread.png",
		stack: ["laravel", "aws"],
	},
  {
		name: "TieBreak",
		description: "TieBreak is the easiest way to connect with local tennis players, find compatible hitting partners, and organize singles or doubles matches.",
		link: "https://apps.apple.com/ph/app/tiebreak/id6763960355",
		linkTitle: "TieBreak iOS App",
		image: "/tiebreak.png",
		stack: ["laravel", "aws"],
	},
	{
		name: "Naughty Talk",
		description: "Dating App",
		link: "https://naughtytalk.com/",
		linkTitle: "naughtytalk.com",
		image: "/naughtytalk.PNG",
		stack: ["react", "next", "tailwind", "typescript", "laravel", "aws"],
	},
  {
		name: "WeCollect",
		description: "An e-commerce platform for trading cards with social features to connect collectors.",
		link: "https://wecollect.com.au/",
		linkTitle: "wecollect.com.au",
		image: "/wecollect.png",
		stack: ["vue", "nuxt", "tailwind", "typescript", "laravel", "aws"],
	},
	{
		name: "Valued Business",
		description:
			"Valued is a Business Media Platform that digitises and commercialises word of mouth for the benefit of consumers and businesses.",
		link: "https://valued.biz/",
		linkTitle: "valued.biz",
		image: "/valued.png",
		stack: ["vue", "nuxt", "typescript", "laravel", "aws"],
	},
	{
		name: "Move With Us",
		description:
			"Move With Us provides women's health and fitness programs with science-based workout exercises and customised nutrition advice, all in one life-changing app.",
		link: "https://apps.apple.com/ph/app/move-with-us/id1523442465",
		linkTitle: "movewithus.com",
		image: "/movewithus.png",
		stack: ["vue", "nuxt", "laravel", "aws"],
	},
	{
		name: "Mustard",
		description:
			"The Mustard Hub is an online platform where all student leaders can access resources, ideas, training, and more.",
		link: "https://mustardschools.app/",
		linkTitle: "mustardschools.app",
		image: "/mustard.png",
		stack: ["vue", "laravel", "digitalocean"],
	},
	{
		name: "Concha",
		description: "Dating app",
		image: "/concha.png",
		stack: ["laravel", "digitalocean"],
	},
	{
		name: "First 100 Days",
		description: "Employee onboarding tool",
		image: "/peoplewave.jpeg",
		stack: ["vue", "laravel", "digitalocean", "typescript"],
		linkTitle: "peoplewave.co",
		link: "https://www.linkedin.com/company/peoplewave/",
	},
	{
		name: "Performance Wave",
		description: "A continuous 360-degree performance appraisals app",
		image: "/peoplewave.jpeg",
		stack: ["vue", "digitalocean", "laravel"],
		linkTitle: "peoplewave.co",
		link: "https://www.linkedin.com/company/peoplewave/",
	},
	{
		name: "F45 Training",
		description: "Life Changing Gym & Functional Training App",
		image: "/f45.png",
		link: "https://f45training.com/",
		linkTitle: "f45training.com",
		stack: ["angular", "heroku", "laravel"],
	},
	{
		name: "Parkiee",
		description:
			"Parkiee is an app that connects drivers with available parking spaces for easy, real-time rentals.",
		stack: ["vue", "node", "aws"],
	},
	{
		name: "Archipelago",
		description:
			"Archipelago is an award-winning Brisbane Architecture, Urban Design and Landscape Architecture Practice creating great cities and buildings for our future.",
		stack: ["wordpress"],
		image: "/archipelago.png",
		link: "https://archipelago.com.au/",
		linkTitle: "archipelago.com.au",
	},
];

export default function ProjectList() {
	return (
		<div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project, index) => (
				<ProjectItem project={project} key={index} />
			))}
		</div>
	);
}
