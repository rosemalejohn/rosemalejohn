import { layerMeta, layerOrder, toolsByLayer } from "../data/stack";

/**
 * The stack, grouped into the three disciplines it splits along — Frontend,
 * Backend, DevOps — with each tool set as a chip. The grouping and the names
 * are read out of the same map the project seams use; the DevOps band also
 * lists infrastructure used across the work rather than any one project.
 */

export default function StackGrid({ delay = 0 }: { delay?: number }) {
	const tools = toolsByLayer();

	return (
		<div className="flex flex-col gap-10">
			{layerOrder.map((layer, index) => (
				<div
					key={layer}
					className="rise"
					style={{ animationDelay: `${delay + index * 90}ms` }}
				>
					<p className="font-mono text-[11px] uppercase tracking-label text-muted">
						{layerMeta[layer].category}
					</p>
					<ul className="mt-4 flex flex-wrap gap-2.5">
						{tools[layer].map((tool) => (
							<li
								key={tool}
								className="rounded-[3px] border border-line bg-surface px-3.5 py-2 font-mono text-[13px] leading-none text-ink-soft"
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
