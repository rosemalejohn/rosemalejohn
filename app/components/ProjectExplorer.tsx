"use client";

import Image from "next/image";
import { useState } from "react";
import { projectStories } from "../data/project-stories";
import { stackNames } from "../data/stack";
import type { Project } from "../types/Project";
import { Arrow } from "./Arrow";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
	const [selectedName, setSelectedName] = useState(projects[0]?.name ?? "");
	const project =
		projects.find((item) => item.name === selectedName) ?? projects[0];
	if (!project) return null;
	const story = projectStories[project.name];
	return (
		<div className="project-explorer">
			<div className="explorer-choices">
				<p className="explorer-label">Choose a product</p>
				<ul className="explorer-projects" aria-label="Selected projects">
					{projects.map((item) => (
						<li
							key={item.name}
							className={item.name === project.name ? "is-selected" : undefined}
						>
							<button
								type="button"
								aria-label={`View ${item.name}`}
								aria-pressed={item.name === project.name}
								onClick={() => setSelectedName(item.name)}
							>
								{projectStories[item.name] && (
									<Image
										className="explorer-choice-logo"
										src={projectStories[item.name].logo}
										alt=""
										width={32}
										height={32}
									/>
								)}
								<span>
									<strong>{item.name}</strong>
									<small>
										{item.name === project.name
											? "Viewing project"
											: (projectStories[item.name]?.category ??
												"Product development")}
									</small>
								</span>
							</button>
							{item.link && (
								<a
									href={item.link}
									target="_blank"
									rel="noreferrer"
									aria-label={`Visit ${item.name}`}
								>
									<Arrow diagonal />
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
			<div className="explorer-mobile-chooser">
				<label htmlFor="project-choice">Choose a project</label>
				<div className="project-select-control">
					<select
						id="project-choice"
						value={project.name}
						onChange={(event) => setSelectedName(event.target.value)}
					>
						{projects.map((item) => (
							<option key={item.name} value={item.name}>
								{item.name}
							</option>
						))}
					</select>
					<svg
						className="project-select-caret"
						aria-hidden="true"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="m6 9 6 6 6-6" />
					</svg>
				</div>
			</div>
			<section
				className="project-detail"
				aria-label="Project details"
				key={project.name}
			>
				<div className="detail-heading">
					{story && (
						<Image
							className="detail-logo"
							src={story.logo}
							alt=""
							width={56}
							height={56}
						/>
					)}
					<div>
						<p className="detail-category">
							{story?.category ?? "Product development"}
						</p>
						<h3>{project.name}</h3>
					</div>
				</div>
				<p className="detail-description">{project.description}</p>
				{story && (
					<div className="detail-contribution">
						<h4>My contribution</h4>
						<p>{story.contribution}</p>
					</div>
				)}
				{story?.context && <p className="detail-context">{story.context}</p>}
				{story && (
					<dl className="detail-focus">
						{story.focus.map((focus) => (
							<div key={focus.title}>
								<dt>{focus.title}</dt>
								<dd>{focus.description}</dd>
							</div>
						))}
					</dl>
				)}
				<div className="detail-stack">
					<h4>Built with</h4>
					<ul>
						{stackNames(project.stack).map((tool) => (
							<li key={tool}>{tool}</li>
						))}
					</ul>
				</div>
				<div className="detail-footer">
					<span>{story?.role ?? "Product development"}</span>
					{project.link && (
						<a
							className="text-link"
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							Open project <Arrow diagonal />
						</a>
					)}
				</div>
			</section>
			<p
				className="sr-only"
				role="status"
				aria-live="polite"
				aria-atomic="true"
			>
				Showing {project.name} project details.
			</p>
		</div>
	);
}
