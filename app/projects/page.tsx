import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import { projects } from "@/app/data/projects";
import ProjectList from "./components/ProjectList";

export default function Projects() {
	const live = projects.filter((project) => project.link).length;

	return (
		<>
			<section className="pb-12 pt-16 sm:pt-20">
				<Container>
					<p className="rise font-mono text-[11px] uppercase tracking-label text-muted">
						Projects · {live} of {projects.length} still live
					</p>
					<h1
						className="rise mt-8 max-w-[15ch] font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-ink"
						style={{ animationDelay: "70ms" }}
					>
						Everything I have shipped that I can show.
					</h1>
					<p
						className="rise mt-7 max-w-[56ch] text-[17px] leading-[1.65] text-ink-soft"
						style={{ animationDelay: "140ms" }}
					>
						Marketplaces, dating apps, fitness platforms, performance tools.
						Most of them went from an empty repository to launch with me on the
						build, and the ones with a link are open right now.
					</p>
				</Container>
			</section>

			<section className="pb-20 sm:pb-24">
				<Container>
					<SectionHeading label="Index" meta="Newest first" />
					<div className="mt-2">
						<ProjectList />
					</div>
				</Container>
			</section>
		</>
	);
}
