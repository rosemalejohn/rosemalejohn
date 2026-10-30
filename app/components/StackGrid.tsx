import { layerMeta, layerOrder, toolsByLayer } from "../data/stack";

const iconPaths = {
	surface: "m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14",
	server:
		"M20 6c0 2-3.6 3-8 3S4 8 4 6s3.6-3 8-3 8 1 8 3ZM4 6v6c0 2 3.6 3 8 3s8-1 8-3V6M4 12v6c0 2 3.6 3 8 3s8-1 8-3v-6",
	services: "M8 3v4m8-4v4M6 7h12v4a6 6 0 0 1-12 0V7Zm6 10v4",
	ground: "M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6m-6 10h6",
};

export default function StackGrid() {
	const tools = toolsByLayer();
	return (
		<dl className="toolkit-grid">
			{layerOrder.map((layer) => (
				<div className="toolkit-group" key={layer}>
					<dt>
						<span className="toolkit-icon">
							<svg
								aria-hidden="true"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d={iconPaths[layer]} />
							</svg>
						</span>
						{layerMeta[layer].category}
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
