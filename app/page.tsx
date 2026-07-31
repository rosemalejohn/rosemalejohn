import Link from "next/link";
import type { ReactNode } from "react";
import Container from "./components/Container";
import GithubIcon from "./components/icons/GithubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import TwitterIcon from "./components/icons/TwitterIcon";
import ProjectRow from "./components/ProjectRow";
import Recommendations from "./components/Recommendations";
import SectionHeading from "./components/SectionHeading";
import StackGrid from "./components/StackGrid";
import Work from "./components/Work";
import { featuredProjects, projects } from "./data/projects";
import { toolsByLayer } from "./data/stack";

type Social = {
	name: string;
	href: string;
	icon: ReactNode;
};

const socials: Social[] = [
	{
		name: "Github",
		href: "https://github.com/rosemalejohn",
		icon: <GithubIcon />,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/rosemalejohn",
		icon: <LinkedInIcon />,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/rosemalejohn",
		icon: <TwitterIcon />,
	},
	{
		name: "Instagram",
		href: "https://instagram.com/rosemalejohn",
		icon: <InstagramIcon />,
	},
];

const email = "rosemalejohn@gmail.com";

/**
 * The evidence behind the headline: each shipped product is a live link, so
 * the claim can be checked in one click.
 */
const shipped: { name: string; href: string }[] = [
	{
		name: "RedThread",
		href: "https://apps.apple.com/ph/app/redthread/id6762317751",
	},
	{
		name: "TieBreak",
		href: "https://apps.apple.com/ph/app/tiebreak/id6763960355",
	},
	{ name: "Valued", href: "https://valued.biz/" },
	{
		name: "Move With Us",
		href: "https://apps.apple.com/ph/app/move-with-us/id1523442465",
	},
	{ name: "F45 Training", href: "https://f45training.com/" },
];

function ShipLink({ name, href }: { name: string; href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
		>
			{name}
		</a>
	);
}

export default function Home() {
	const stackCount = Object.values(toolsByLayer()).flat().length;

	return (
		<>
			<section className="pb-16 pt-14 sm:pb-20 sm:pt-20">
				<Container>
					<div className="rise flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-label">
						<p className="text-muted">Full-stack AI engineer · Philippines</p>
					</div>

					<h1
						className="rise mt-8 max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-ink"
						style={{ animationDelay: "70ms" }}
					>
						I build down to bedrock.
					</h1>

					<p
						className="rise mt-8 max-w-[58ch] text-[17px] leading-[1.65] text-ink-soft"
						style={{ animationDelay: "140ms" }}
					>
						Ten years of taking products from an empty repository to something
						people open every day:{" "}
						{shipped.map((item, index) => (
							<span key={item.name}>
								<ShipLink name={item.name} href={item.href} />
								{index < shipped.length - 2 && ", "}
								{index === shipped.length - 2 && " and "}
								{index === shipped.length - 1 && "."}
							</span>
						))}
					</p>
				</Container>
			</section>

			<section className="py-16 sm:py-20">
				<Container>
					<SectionHeading label="Stack" meta={`${stackCount} tools`} />
					<div className="mt-8">
						<StackGrid />
					</div>
				</Container>
			</section>

			<section className="py-16 sm:py-20">
				<Container>
					<SectionHeading
						label="Selected work"
						meta={`${featuredProjects.length} of ${projects.length}`}
					/>
					<ul className="mt-2 border-b border-line">
						{featuredProjects.map((project) => (
							<ProjectRow key={project.name} project={project} />
						))}
					</ul>
					<Link
						href="/projects"
						className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-ink transition-colors hover:text-accent"
					>
						Everything else
						<span aria-hidden="true">→</span>
					</Link>
				</Container>
			</section>

			<section className="py-16 sm:py-20">
				<Container>
					<SectionHeading label="Employment" meta="4 roles" />
					<div className="mt-2">
						<Work />
					</div>
				</Container>
			</section>

			<section className="pb-20 sm:pb-24">
				<Container>
					<SectionHeading label="Recommendations" meta="1 received" />
					<div className="mt-2">
						<Recommendations />
					</div>
				</Container>
			</section>

			{/* The page arrives at the ground, and stays there through the footer. */}
			<section className="on-deep bg-deep pb-16 pt-20 text-on-deep sm:pb-20 sm:pt-24">
				<Container>
					<div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
						<div>
							<p className="font-display font-condensed text-[13px] font-bold uppercase tracking-label text-on-deep-muted">
								Contact
							</p>
							<h2 className="mt-6 max-w-[18ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
								Open to new work.
							</h2>
							<p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] text-on-deep-muted">
								Contract or full time, remote from Philippines. UTC+8, which is
								a full working day of overlap with Australia and Singapore.
							</p>
							<a
								href={`mailto:${email}`}
								className="mt-8 inline-block font-mono text-[clamp(0.95rem,1.8vw,1.25rem)] tracking-[0.02em] text-on-deep-accent underline decoration-1 underline-offset-[7px] transition-opacity hover:no-underline"
							>
								{email}
							</a>
						</div>

						<div className="flex gap-2">
							{socials.map((social) => (
								<Link
									data-testid={social.name}
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noreferrer"
									aria-label={social.name}
									className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-on-deep-muted text-[17px] text-on-deep-muted transition-colors hover:border-on-deep-accent hover:text-on-deep-accent"
								>
									{social.icon}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
