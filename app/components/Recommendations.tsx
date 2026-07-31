"use client";

import { useEffect, useRef, useState } from "react";
import Monogram from "./Monogram";

type Recommendation = {
	name: string;
	title: string;
	relationship: string;
	date: string;
	quote: string[];
};

// Received recommendations, quoted verbatim. Kept as an array so more stack in
// the same ruled rhythm as they arrive. The identity mark is the text monogram
// the rest of the site uses, not a scraped avatar — same rule as Work rows.
const recommendations: Recommendation[] = [
	{
		name: "Aurelia Jessica",
		title: "Senior Design Manager, Grab",
		relationship: "Colleague at Peoplewave",
		date: "Aug 2024",
		quote: [
			"In a very lean team developing 2 ambitious 0-1 products in less than a year, he was a star. Despite us working in different locations, he was meticulous in his development and proactive in catching and clarifying issues with the product team. He's also very helpful in translating the requirement into technical terms and vice versa.",
			"A very pleasant folk to work with if you're looking for a proactive and responsive developer.",
		],
	},
];

const quoteType =
	"text-pretty text-[clamp(1.1rem,1.9vw,1.45rem)] leading-[1.5] tracking-[-0.012em] text-ink";

function RecommendationCard({ rec }: { rec: Recommendation }) {
	const [expanded, setExpanded] = useState(false);
	// Recommendations are usually long enough to clamp, so default the toggle on
	// — that keeps the server render right; the effect drops it for short ones.
	const [clampable, setClampable] = useState(true);
	const previewRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const el = previewRef.current;
		if (!el) return;
		// The collapsed preview is a 2-line clamp: if the full text overflows it,
		// there is something worth expanding to.
		setClampable(el.scrollHeight - el.clientHeight > 1);
	}, []);

	return (
		<li className="border-t border-line py-8 sm:py-10">
			<figure>
				<blockquote className={`max-w-[62ch] ${quoteType}`}>
					{expanded ? (
						<div className="space-y-4">
							{rec.quote.map((paragraph) => (
								<p key={paragraph.slice(0, 32)}>{paragraph}</p>
							))}
						</div>
					) : (
						<p ref={previewRef} className="line-clamp-2">
							{rec.quote.join(" ")}
						</p>
					)}
				</blockquote>

				{clampable && (
					<button
						type="button"
						onClick={() => setExpanded((value) => !value)}
						aria-expanded={expanded}
						className="mt-3 font-mono text-[11px] uppercase tracking-label text-muted transition-colors hover:text-accent"
					>
						{expanded ? "Read less" : "Read more"}
					</button>
				)}

				<figcaption className="mt-7 flex items-center gap-4">
					<Monogram name={rec.name} />
					<div>
						<p className="font-display text-[15px] font-bold tracking-[-0.01em] text-ink">
							{rec.name}
							<span className="ml-2 font-sans text-[14px] font-normal text-ink-soft">
								{rec.title}
							</span>
						</p>
						<p className="mt-1 font-mono text-[11px] uppercase tracking-label text-muted">
							{rec.relationship} · {rec.date}
						</p>
					</div>
				</figcaption>
			</figure>
		</li>
	);
}

export default function Recommendations() {
	return (
		<ul className="border-b border-line">
			{recommendations.map((rec) => (
				<RecommendationCard key={rec.name} rec={rec} />
			))}
		</ul>
	);
}
