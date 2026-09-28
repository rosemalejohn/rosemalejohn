import Image from "next/image";
import { stackNames } from "../data/stack";
import type { Project } from "../types/Project";
import { Arrow } from "./Arrow";

export function FeaturedProject({
	project,
	kind,
}: {
	project: Project;
	kind: "music" | "tennis";
}) {
	return (
		<article className={`featured-project project-${kind}`}>
			<a
				href={project.link}
				target="_blank"
				rel="noreferrer"
				className="project-art"
				aria-label={`Explore ${project.name} on the App Store`}
			>
				<span className="project-art-label">
					{kind === "music"
						? "A shared listening experience"
						: "Your next match starts here"}
				</span>
				<Image
					src={kind === "music" ? "/redthread.png" : "/tiebreak.png"}
					alt={`${project.name} app icon`}
					width={400}
					height={400}
					className="project-icon"
					sizes="180px"
				/>
				<span className="project-art-bottom">
					<span>{project.name}</span>
					<span className="project-open">
						App Store <Arrow diagonal />
					</span>
				</span>
			</a>
			<div className="project-caption">
				<h3>
					<a href={project.link} target="_blank" rel="noreferrer">
						{project.name} <Arrow diagonal />
					</a>
				</h3>
				<p>{project.description}</p>
				<p className="project-tech">{stackNames(project.stack).join(" / ")}</p>
			</div>
		</article>
	);
}
