import { type Layer, layerOrder, layersOf } from "../data/stack";

/**
 * The signature mark: a core sample of one project. Three segments, top to
 * bottom, filled where the project's recorded stack reaches that stratum and
 * hollow where it does not. Read down a list of these and the depth of each
 * job is visible before a single word.
 *
 * Every instance sits beside text that already says the same thing — the stack
 * names in a row, the stratum name in the key, the site name in the header —
 * so the mark itself is always hidden from assistive tech.
 */

const fill: Record<Layer, string> = {
	surface: "bg-layer-surface",
	server: "bg-layer-server",
	services: "bg-layer-services",
	ground: "bg-layer-ground",
};

/** Crust is thin, ground is deep. The section diagram uses the same ratios. */
const depth: Record<Layer, string> = {
	surface: "flex-[0.8]",
	server: "flex-[1]",
	services: "flex-[1.2]",
	ground: "flex-[1.4]",
};

export default function Seam({
	stack,
	layers,
	className = "",
}: {
	stack?: string[];
	/** Set the strata directly, for marks that stand for no single project. */
	layers?: Layer[];
	className?: string;
}) {
	const reached = new Set(layers ?? layersOf(stack));

	return (
		<span aria-hidden="true" className={`flex flex-col ${className}`}>
			{layerOrder.map((layer) => (
				<span
					key={layer}
					className={`${depth[layer]} ${
						reached.has(layer) ? fill[layer] : "bg-seam-void"
					}`}
				/>
			))}
		</span>
	);
}
