import { type Layer, layerMeta, layerOrder, toolsByLayer } from "../data/stack";

/**
 * The stack, grouped into the four strata the whole site is cut into — Frontend,
 * Backend, Integrations, DevOps. Each stratum is a row: a depth swatch in its
 * real layer color (the same ramp the seams read, so the list doubles as the
 * cross-section's legend), the discipline name, and the tools set as plain type.
 * No enclosures — the tools sit in an aligned grid, so the columns do the
 * separating and every multi-word name keeps its own cell.
 */

// Static classes so Tailwind sees them; matches how Seam.tsx maps layer colors.
const swatch: Record<Layer, string> = {
	surface: "bg-layer-surface",
	server: "bg-layer-server",
	services: "bg-layer-services",
	ground: "bg-layer-ground",
};

export default function StackGrid({ delay = 0 }: { delay?: number }) {
	const tools = toolsByLayer();

	return (
		<dl className="flex flex-col">
			{layerOrder.map((layer, index) => (
				<div
					key={layer}
					className="rise grid gap-x-8 gap-y-4 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr]"
					style={{ animationDelay: `${delay + index * 90}ms` }}
				>
					<dt className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-label text-muted">
						<span
							aria-hidden="true"
							className={`h-1.5 w-1.5 rounded-[1px] ${swatch[layer]}`}
						/>
						{layerMeta[layer].category}
					</dt>
					<dd className="grid grid-cols-2 gap-x-6 gap-y-2.5 font-mono text-[13px] leading-none text-ink-soft sm:grid-cols-3 lg:grid-cols-4">
						{tools[layer].map((tool) => (
							<span key={tool}>{tool}</span>
						))}
					</dd>
				</div>
			))}
		</dl>
	);
}
