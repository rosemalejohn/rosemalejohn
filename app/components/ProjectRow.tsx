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

function Body({ project }: { project: Project }) {
	return (
		<>
			<Monogram name={project.name} />

			<div className="grid flex-1 gap-x-10 gap-y-2 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-baseline">
				<div>
					<h3 className="font-display text-[clamp(1.15rem,1.7vw,1.45rem)] font-bold leading-tight tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
						{project.name}
					</h3>
					<p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">
						{project.description}
					</p>
				</div>

				<div className="flex flex-col gap-2 md:items-end md:text-right">
					<p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-label text-muted md:justify-end">
						{stackNames(project.stack).map((name) => (
							<span key={name}>{name}</span>
						))}
					</p>
					<p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-label text-ink-soft">
						{project.link ? sourceLabel(project.link) : "Not public"}
						{project.link && (
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
						)}
					</p>
				</div>
			</div>
		</>
	);
}

/**
 * The seam sits flush against the left edge and stretches the whole row, so a
 * list of these reads as one continuous core sample down the page.
 */
export default function ProjectRow({ project }: { project: Project }) {
	const shared =
		"group flex items-stretch gap-5 transition-colors duration-200 hover:bg-surface";
	const content =
		"flex flex-1 items-start gap-5 py-6 pr-2 sm:items-center sm:gap-6";

	if (!project.link) {
		return (
			<li className="border-t border-line">
				<div className={shared}>
					<Seam stack={project.stack} className="w-1.5 flex-none" />
					<div className={content}>
						<Body project={project} />
					</div>
				</div>
			</li>
		);
	}

	return (
		<li className="border-t border-line">
			<a
				href={project.link}
				target="_blank"
				rel="noreferrer"
				className={shared}
			>
				<Seam stack={project.stack} className="w-1.5 flex-none" />
				<div className={content}>
					<Body project={project} />
				</div>
			</a>
		</li>
	);
}
