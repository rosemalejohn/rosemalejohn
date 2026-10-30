import "./projects.css";
import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { projects } from "@/app/data/projects";
import ProjectList from "./components/ProjectList";

export default function Projects() {
	return (
		<div className="portfolio-content archive-content">
			<section
				className="archive-introduction"
				aria-labelledby="archive-heading"
			>
				<Link href="/" className="text-link archive-back">
					Back to overview <Arrow />
				</Link>
				<p className="eyebrow">
					Product development / {projects.length} projects
				</p>
				<h1 id="archive-heading">The work. From idea to launch.</h1>
				<p className="intro-description">
					Marketplaces, fitness platforms, social apps, and more. A collection
					of products I’ve helped build, with contributions, engineering
					details, and the technologies behind them.
				</p>
			</section>
			<section className="archive-index" aria-label="All projects">
				<div className="index-heading">
					<h2>Project index</h2>
					<span>Newest first · Public links where available</span>
				</div>
				<ProjectList />
			</section>
			<div className="archive-contact">
				<p>Have something in mind?</p>
				<a href="mailto:rosemalejohn@gmail.com" className="text-link">
					Let’s talk <Arrow diagonal />
				</a>
			</div>
		</div>
	);
}
