import Image from "next/image";
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
	const source = project.link
		? new URL(project.link).hostname.replace(/^www\./, "")
		: "Not public";
	const inner = (
		<>
			<div className="project-row-identity">
				{logos[project.name] ? (
					<Image
						className="project-row-logo"
						src={logos[project.name]}
						alt=""
						width={72}
						height={72}
					/>
				) : (
					<span
						className="project-row-logo project-row-monogram"
						aria-hidden="true"
					>
						{project.name.slice(0, 1)}
					</span>
				)}
				<h3>{project.name}</h3>
			</div>
			<div className="project-row-detail">
				<p>{project.description}</p>
				<p className="project-tech">{stackNames(project.stack).join(" / ")}</p>
			</div>
			<span className="project-destination">
				{source === "apps.apple.com" ? "App Store" : source}
				{project.link && <Arrow diagonal />}
			</span>
		</>
	);
	return (
		<li className="project-row">
			{project.link ? (
				<a
					className="project-row-inner"
					href={project.link}
					target="_blank"
					rel="noreferrer"
				>
					{inner}
				</a>
			) : (
				<div className="project-row-inner">{inner}</div>
			)}
		</li>
	);
}
