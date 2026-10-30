import "./overview.css";
import Link from "next/link";
import { Arrow } from "./components/Arrow";
import { ProjectExplorer } from "./components/ProjectExplorer";
import Recommendations from "./components/Recommendations";
import StackGrid from "./components/StackGrid";
import Work from "./components/Work";
import { featuredProjects, projects } from "./data/projects";

const socials = [
	{ name: "Github", label: "GitHub", href: "https://github.com/rosemalejohn" },
	{
		name: "LinkedIn",
		label: "LinkedIn",
		href: "https://linkedin.com/in/rosemalejohn",
	},
];

export default function Home() {
	return (
		<div className="portfolio-content overview-content">
			<section className="overview-intro" aria-labelledby="intro-heading">
				<div className="overview-topline">
					<span className="eyebrow">Engineering / Products / People</span>
					<p className="availability">
						<span aria-hidden="true" />
						Open to work.
					</p>
				</div>
				<h1 id="intro-heading">Web applications. Built end to end.</h1>
				<p className="overview-lead">
					I’m Rosemale-John. I build production applications, lead developers,
					and create tools that help teams do better work.
				</p>
				<div className="overview-intro-footer">
					<a href="mailto:rosemalejohn@gmail.com" className="button-primary">
						Let’s work together <Arrow diagonal />
					</a>
					<p>
						<span className="intro-tenure">
							Building for the web since 2016
						</span>
					</p>
				</div>
			</section>

			<nav className="content-jump-nav" aria-label="On this page">
				<span>Explore</span>
				<a href="#work">
					Selected work <Arrow />
				</a>
				<a href="#experience">
					Experience <Arrow />
				</a>
				<a href="#toolkit">
					Toolkit <Arrow />
				</a>
			</nav>

			<section
				id="work"
				className="main-section"
				aria-labelledby="work-heading"
			>
				<div className="main-section-heading">
					<div>
						<h2 id="work-heading">Inside the work</h2>
						<p>Select a product to explore my contribution.</p>
					</div>
					<Link href="/projects" className="text-link">
						All {projects.length} projects <Arrow />
					</Link>
				</div>
				<ProjectExplorer projects={featuredProjects} />
				<p className="work-footnote">
					Also contributed to{" "}
					<a href="https://f45training.com/" target="_blank" rel="noreferrer">
						F45 Training <Arrow diagonal />
					</a>{" "}
					and other products across fitness, commerce, and community.
				</p>
			</section>

			<section
				id="about"
				className="main-section profile-about"
				aria-labelledby="about-heading"
			>
				<div>
					<p className="eyebrow">A little context</p>
					<h2 id="about-heading">Across the stack. Alongside the team.</h2>
				</div>
				<div className="profile-about-copy">
					<p>
						Since 2016, I’ve worked on marketplaces, fitness platforms, social
						apps, and the systems behind them.
					</p>
					<p>
						My work goes beyond implementation: mentoring developers, reviewing
						code, supporting production, and building AI-assisted workflows for
						the team.
					</p>
					<div className="profile-about-meta">
						<span>Philippines</span>
						<span>Remote · Contract &amp; full-time</span>
					</div>
					<div className="social-links">
						{socials.map((social) => (
							<a
								data-testid={social.name}
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noreferrer"
							>
								{social.label} <Arrow diagonal />
							</a>
						))}
					</div>
				</div>
			</section>

			<section
				id="experience"
				className="main-section"
				aria-labelledby="experience-heading"
			>
				<div className="main-section-heading">
					<div>
						<h2 id="experience-heading">Experience, in context</h2>
						<p>Open a role to see what I worked on.</p>
					</div>
					<span className="section-note">2016 — present</span>
				</div>
				<Work />
			</section>

			<section
				id="toolkit"
				className="main-section overview-toolkit"
				aria-labelledby="toolkit-heading"
			>
				<div className="main-section-heading">
					<div>
						<h2 id="toolkit-heading">The toolkit</h2>
						<p>
							Across interfaces, application logic, services, and
							infrastructure.
						</p>
					</div>
				</div>
				<StackGrid />
			</section>

			<section
				className="main-section overview-recommendation"
				aria-labelledby="recommendation-heading"
			>
				<div className="main-section-heading">
					<h2 id="recommendation-heading">Working together</h2>
				</div>
				<Recommendations />
			</section>

			<section
				id="contact"
				className="overview-contact"
				aria-labelledby="contact-heading"
			>
				<div>
					<p className="eyebrow">Have a project or role in mind?</p>
					<h2 id="contact-heading">Let’s talk it through.</h2>
					<p>
						Available for remote contract and full-time work, with working hours
						that overlap Australia and Singapore.
					</p>
				</div>
				<a href="mailto:rosemalejohn@gmail.com" className="overview-email">
					rosemalejohn@gmail.com <Arrow diagonal />
				</a>
			</section>
		</div>
	);
}
