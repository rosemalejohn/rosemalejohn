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

export default function Recommendations() {
	return (
		<>
			{recommendations.map((rec) => (
				<figure className="recommendation" key={rec.name}>
					<blockquote>“{rec.quote[1]}”</blockquote>
					<figcaption>
						<strong>{rec.name}</strong>
						<span>{rec.title}</span>
						<span>
							{rec.relationship} · {rec.date}
						</span>
					</figcaption>
					<details>
						<summary>Read full recommendation</summary>
						{rec.quote.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</details>
				</figure>
			))}
		</>
	);
}
