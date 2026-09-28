import { layerMeta, layerOrder, toolsByLayer } from "../data/stack";

export default function StackGrid() {
	const tools = toolsByLayer();
	return (
		<dl className="stack-grid">
			{layerOrder.map((layer) => (
				<div className="stack-group" key={layer}>
					<dt>{layerMeta[layer].category}</dt>
					<dd>
						{tools[layer].map((tool) => (
							<span key={tool}>{tool}</span>
						))}
					</dd>
				</div>
			))}
		</dl>
	);
}
