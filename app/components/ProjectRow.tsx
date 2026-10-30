import Image from "next/image";
import { projectStories } from "../data/project-stories";
import { stackNames } from "../data/stack";
import type { Project } from "../types/Project";
import { Arrow } from "./Arrow";

const logos: Record<string, string> = {
	RedThread: "/redthread.png",
	TieBreak: "/tiebreak.png",
	WeCollect: "/wecollect.png",
	"Valued Business": "/valued.png",
	"Move With Us": "/movewithus.png",
	"F45 Training": "/f45.png",
	"Naughty Talk": "/naughtytalk.PNG",
	Mustard: "/mustard.png",
	Archipelago: "/archipelago.png",
	"Performance Wave": "/peoplewave.jpeg",
	"First 100 Days": "/peoplewave.jpeg",
	Concha: "/concha.png",
};

export default function ProjectRow({ project }: { project: Project }) {
	const story = projectStories[project.name];
	const destination = project.link
		? new URL(project.link).hostname.replace(/^www\./, "")
		: "Not public";
	const content = (
		<>
			<div className="project-mark">
				{logos[project.name] ? (
					<Image src={logos[project.name]} alt="" width={56} height={56} />
				) : (
					<span aria-hidden="true">{project.name.slice(0, 1)}</span>
				)}
			</div>
			<div className="project-body">
				<div className="project-title-line">
					<h3>{project.name}</h3>
					<span className="project-destination">
						{destination === "apps.apple.com" ? "iOS app" : destination}
					</span>
				</div>
				{story && <p className="archive-project-category">{story.category}</p>}
				<p className="project-description">{project.description}</p>
				<ul className="project-technologies" aria-label="Technologies">
					{stackNames(project.stack).map((tool) => (
						<li key={tool}>{tool}</li>
					))}
				</ul>
			</div>
			{project.link && <Arrow diagonal className="project-arrow" />}
		</>
	);
	return (
		<li className={story ? "project-row has-story" : "project-row"}>
			{project.link ? (
				<a
					className="project-entry"
					href={project.link}
					target="_blank"
					rel="noreferrer"
				>
					{content}
				</a>
			) : (
				<div className="project-entry">{content}</div>
			)}
			{story && (
				<div className="archive-project-story">
					<div className="archive-contribution-heading">
						<h4>My contribution</h4>
						<span>{story.role}</span>
					</div>
					<p>{story.contribution}</p>
					{story.context && (
						<p className="archive-project-context">{story.context}</p>
					)}
					<dl>
						{story.focus.map((focus) => (
							<div key={focus.title}>
								<dt>{focus.title}</dt>
								<dd>{focus.description}</dd>
							</div>
						))}
					</dl>
				</div>
			)}
		</li>
	);
}
