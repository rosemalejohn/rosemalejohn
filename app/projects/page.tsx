import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import Container from "@/app/components/Container";
import { projects } from "@/app/data/projects";
import ProjectList from "./components/ProjectList";

export default function Projects() {
	return (
		<>
			<section className="archive-hero">
				<Container>
					<div className="archive-hero-inner">
						<h1>The work, so far.</h1>
						<p>
							Marketplaces, fitness platforms, social apps, and more. A
							collection of products I’ve helped take from an empty repository
							to launch.
						</p>
					</div>
				</Container>
			</section>
			<section className="archive-work">
				<Container>
					<div className="archive-intro">
						<span>{projects.length} projects · Newest first</span>
						<Link href="/" className="text-link">
							Back home <Arrow />
						</Link>
					</div>
					<ProjectList />
				</Container>
			</section>
		</>
	);
}
