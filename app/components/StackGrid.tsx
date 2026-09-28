import { layerMeta, layerOrder, toolsByLayer } from "../data/stack";

export default function StackGrid() {
	const tools = toolsByLayer();
	return (
		<dl className="stack-grid">
			{layerOrder.map((layer) => (
				<div className="stack-group" key={layer}>
					<dt>
						<span>{layerMeta[layer].category}</span>
						<small>{layerMeta[layer].caption}</small>
					</dt>
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
