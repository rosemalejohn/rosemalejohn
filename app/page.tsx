import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./components/Arrow";
import Container from "./components/Container";
import { FeaturedProject } from "./components/FeaturedProject";
import ProjectRow from "./components/ProjectRow";
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
		<>
			<section className="hero">
				<Container>
					<div className="hero-grid">
						<div className="hero-copy">
							<h1>
								Rosemale-John
								<span className="hero-role">Full-stack AI engineer.</span>
							</h1>
							<p className="hero-description">
								I turn ambitious ideas into products people use every day. From
								the first line of code to the systems behind it all.
							</p>
							<div className="hero-actions">
								<a href="#work" className="button-primary">
									Explore my work <Arrow />
								</a>
								<a href="mailto:rosemalejohn@gmail.com" className="text-link">
									Get in touch <Arrow diagonal />
								</a>
							</div>
							<p className="availability">
								<span />
								Open to contract &amp; full-time roles
							</p>
						</div>
						<figure className="hero-portrait">
							<Image
								src="/me.png"
								alt="Rosemale-John at a café with his laptop"
								width={512}
								height={512}
								priority
								sizes="(max-width: 760px) 90vw, 360px"
							/>
							<figcaption>
								<span>Philippines</span>
								<span>UTC+8</span>
							</figcaption>
						</figure>
					</div>
					<div className="hero-footnote">
						<p>Building for the web since 2016.</p>
						<p>Laravel &amp; AWS at the core. Thoughtful interfaces on top.</p>
					</div>
				</Container>
			</section>

			<section id="work" className="work-section section-space">
				<Container>
					<div className="section-intro">
						<div>
							<h2>
								Selected work<span className="heading-dot">.</span>
							</h2>
							<p>Real products. From first commit to everyday use.</p>
						</div>
						<Link href="/projects" className="text-link">
							All {projects.length} projects <Arrow />
						</Link>
					</div>
					<div className="featured-grid">
						{featuredProjects.slice(0, 2).map((project, index) => (
							<FeaturedProject
								key={project.name}
								project={project}
								kind={index === 0 ? "music" : "tennis"}
							/>
						))}
					</div>
					<ul className="project-list">
						{featuredProjects.slice(2).map((project) => (
							<ProjectRow key={project.name} project={project} />
						))}
					</ul>
					<p className="additional-work">
						Also built for{" "}
						<a href="https://f45training.com/" target="_blank" rel="noreferrer">
							F45 Training <Arrow diagonal />
						</a>
					</p>
				</Container>
			</section>

			<section id="about" className="about-section section-space">
				<Container>
					<div className="about-intro">
						<h2>
							A little about <br />
							the person behind <br />
							<em>the products.</em>
						</h2>
						<div>
							<p className="about-lead">
								Ten years of taking products from an empty repository to
								something people open every day.
							</p>
							<p>
								I’m a full-stack engineer based in the Philippines. My work
								spans marketplaces, fitness platforms, social apps, and the
								infrastructure that keeps them running.
							</p>
							<p>
								Laravel and AWS underneath. Vue, Nuxt, React, and Next.js on
								top. Comfortable across the stack, from the interface to
								deployment.
							</p>
							<div className="social-links">
								{socials.map((social) => (
									<a
										data-testid={social.name}
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noreferrer"
									>
										{social.label}
										<Arrow diagonal />
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="experience-block">
						<div className="section-intro">
							<h2>Experience</h2>
							<span className="section-note">2016 — present</span>
						</div>
						<Work />
					</div>
				</Container>
			</section>

			<section className="section-space toolkit-section">
				<Container>
					<div className="section-intro">
						<div>
							<h2>The tools behind the work.</h2>
							<p>A full stack, chosen to fit the product.</p>
						</div>
					</div>
					<StackGrid />
				</Container>
			</section>
			<section className="recommendation-section">
				<Container>
					<h2>From the people I’ve worked with.</h2>
					<Recommendations />
				</Container>
			</section>
			<section id="contact" className="contact-section">
				<Container>
					<div className="contact-grid">
						<div>
							<h2>
								Have something
								<br />
								in mind? <em>Let’s talk.</em>
							</h2>
							<a href="mailto:rosemalejohn@gmail.com" className="contact-email">
								rosemalejohn@gmail.com <Arrow diagonal />
							</a>
						</div>
						<div className="contact-details">
							<p className="availability">
								<span />
								Open to work.
							</p>
							<p>
								Contract or full time, remote from the Philippines. UTC+8, with
								a full working day of overlap with Australia and Singapore.
							</p>
							<a
								href="https://linkedin.com/in/rosemalejohn"
								target="_blank"
								rel="noreferrer"
								className="text-link"
							>
								Connect on LinkedIn <Arrow diagonal />
							</a>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
