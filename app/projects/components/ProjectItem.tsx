"use client";

import LinkIcon from "../../components/icons/LinkIcon";
import { Image } from "@nextui-org/react";
import type { Project } from "../../types/Project";
import TechStackIcon from "@/app/components/TechStackIcon";

type Props = {
	project: Project;
};

export default function ProjectItem({ project }: Props) {
	const viewProject = (): void => {
		if (!project.link) return;
		window.open(project.link, "_blank");
	};

	return (
		<div
			onClick={viewProject}
			className="group relative flex flex-col items-start cursor-pointer"
		>
			<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
				<Image
					alt={project.name}
					width="32"
					height="32"
					className="h-8 w-8"
					src={project.image}
				/>
			</div>
			<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-slate-800/50" />
			<h2 className="mt-6 text-base font-semibold text-slate-800 dark:text-slate-100">
				<span className="relative z-10">{project.name}</span>
			</h2>
			<p className="relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400">
				{project.description}
			</p>
			{project.link && (
				<p className="relative z-10 mt-6 flex text-sm font-medium text-slate-400 transition group-hover:text-yellow-500 dark:text-slate-200">
					<LinkIcon />
					<span className="ml-2">{project.linkTitle}</span>
				</p>
			)}
			<div className="relative flex gap-x-2 mt-4">
				{project.stack?.map((icon) => (
					<TechStackIcon icon={icon} key={icon} />
				))}
			</div>
		</div>
	);
}
