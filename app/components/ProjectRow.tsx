import { Fragment } from "react";
import { stackNames } from "../data/stack";
import type { Project } from "../types/Project";
import Monogram from "./Monogram";
import Seam from "./Seam";

/**
 * Where the work actually lives, read off the link itself so the row can never
 * claim a destination it does not have.
 */
function sourceLabel(link: string): string {
	const host = new URL(link).host.replace(/^www\./, "");
	return host === "apps.apple.com" ? "App Store" : host;
}

/**
 * The destination sits on the same line as the name — the title and where it
 * opens are one thought, so they read together instead of across the row.
 */
function Source({ project }: { project: Project }) {
	if (!project.link) {
		return (
			<span className="font-mono text-[11px] uppercase tracking-label text-muted">
				Not public
			</span>
		);
	}

	return (
		<span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-label text-ink-soft transition-colors group-hover:text-accent">
			{sourceLabel(project.link)}
			<svg
				viewBox="0 0 12 12"
				aria-hidden="true"
				className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M3.5 8.5 8.5 3.5M4.2 3.5h4.3v4.3" />
			</svg>
		</span>
	);
}

function Body({ project }: { project: Project }) {
	return (
		<div className="flex flex-1 flex-col gap-2.5">
			<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
				<h3 className="font-display text-[clamp(1.15rem,1.7vw,1.45rem)] font-bold leading-tight tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
					{project.name}
				</h3>
				<Source project={project} />
			</div>

			<p className="max-w-[54ch] text-[15px] leading-relaxed text-ink-soft">
				{project.description}
			</p>

			{/* One quiet line names the exact tools; the seam beside it says how deep
			 * they reach. Dots do the separating so the list stays calm at a glance. */}
			<p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-label text-muted">
				{stackNames(project.stack).map((name, index) => (
					<Fragment key={name}>
						{index > 0 && (
							<span aria-hidden="true" className="text-line-strong">
								·
							</span>
						)}
						<span>{name}</span>
					</Fragment>
				))}
			</p>
		</div>
	);
}

/**
 * The seam sits flush against the left edge and stretches the whole row, so a
 * list of these reads as one continuous core sample down the page.
 */
export default function ProjectRow({ project }: { project: Project }) {
	const shared =
		"group flex items-stretch gap-5 transition-colors duration-200 hover:bg-surface";
	const content = "flex flex-1 items-start gap-5 py-6 pr-2 sm:gap-6";

	const inner = (
		<>
			<Seam stack={project.stack} className="w-1.5 flex-none" />
			<div className={content}>
				<Monogram name={project.name} />
				<Body project={project} />
			</div>
		</>
	);

	return (
		<li className="border-t border-line">
			{project.link ? (
				<a
					href={project.link}
					target="_blank"
					rel="noreferrer"
					className={shared}
				>
					{inner}
				</a>
			) : (
				<div className={shared}>{inner}</div>
			)}
		</li>
	);
}
