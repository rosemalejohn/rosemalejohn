type Role = {
	company: string;
	role: string;
	location: string;
	from: string;
	to: string;
	highlights?: string[];
	projects?: string[];
	initiatives?: string[];
};

const months = [
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"nov",
	"dec",
];

function parse(value: string): number {
	if (value.trim().toLowerCase() === "present") {
		const now = new Date();
		return now.getFullYear() * 12 + now.getMonth();
	}
	const [month, year] = value.trim().toLowerCase().split(/\s+/);
	return Number(year) * 12 + months.indexOf(month.slice(0, 3));
}

function formatDuration(from: string, to: string): string {
	// Inclusive of both the start and end month, matching how tenure is
	// conventionally counted (e.g. Aug 2017 – Jun 2019 = 1 yr 11 mos).
	const total = parse(to) - parse(from) + 1;
	const years = Math.floor(total / 12);
	const rest = total % 12;
	const parts: string[] = [];
	if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
	if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
	return parts.join(" ");
}

const works: Role[] = [
	{
		company: "Product development agency",
		role: "Senior Full Stack Web Developer",
		location: "Davao, Philippines",
		from: "Jul 2019",
		to: "Present",
		highlights: [
			"Lead full-stack delivery across marketplace, eCommerce, booking, media, and payment products. Mentor developers through code reviews, technical guidance, and hiring support.",
			"Develop REST APIs and application features, integrate third-party services, and manage AWS deployments and production operations.",
			"Developed and maintained APIs and application features for Move With Us, a platform serving 300K+ monthly active users.",
		],
		projects: [
			"Move With Us",
			"Valued",
			"WeCollect",
			"Mintie",
			"Redthread",
			"Tiebreak",
			"Happyreno",
		],
		initiatives: [
			"Built and maintain internal AI Kit plugins for Claude Code and OpenAI Codex, with reusable agents, skills, MCP integrations, and development workflows.",
			"Introduced Grafana k6 load testing and Playwright end-to-end automation to evaluate application performance and validate production features.",
			"Help integrate AI-assisted coding, debugging, testing, and technical research into engineering processes. Evaluate unfamiliar technologies through research and proof-of-concept development.",
		],
	},
	{
		company: "Peoplewave Pty. Ltd.",
		role: "Lead Developer",
		location: "Singapore · Remote",
		from: "Aug 2017",
		to: "Jun 2019",
		highlights: [
			"Led development and maintenance of an HR SaaS application, coordinating product delivery with engineering and operations teams.",
			"Integrated frontend applications with backend APIs. Maintained infrastructure, databases, queues, backups, monitoring, and CI workflows, with attention to security and data protection.",
		],
	},
	{
		company: "Parkiee",
		role: "Full Stack Web Developer · Part-time",
		location: "California, USA",
		from: "Nov 2016",
		to: "Dec 2017",
		highlights: [
			"Developed reusable Vue.js components and backend APIs using Node.js and HapiJS.",
			"Designed data-storage solutions, optimized performance and scalability, and implemented CI tooling with DevOps engineering.",
		],
	},
	{
		company: "Bywave Philippines, Inc.",
		role: "Junior Full Stack Web Developer",
		location: "Davao, Philippines",
		from: "Sep 2016",
		to: "Jan 2018",
		highlights: [
			"Developed unified APIs with PHP and Node.js, and maintained AngularJS and React applications.",
			"Implemented database backups and application reliability processes, collaborating with project managers and engineering leadership on delivery.",
		],
	},
	{
		company: "Cloudology Codes",
		role: "Web Developer",
		location: "Philippines · Hybrid",
		from: "Mar 2016",
		to: "Aug 2016",
	},
];

export default function Work() {
	return (
		<div className="career-accordion">
			{works.map((work, index) => (
				<details className="career-entry" key={work.company} open={index === 0}>
					<summary>
						<span className="career-dates">
							{work.from} — {work.to}
						</span>
						<span className="career-identity">
							<strong>{work.company}</strong>
							<span>{work.role}</span>
						</span>
						<svg
							className="career-toggle"
							aria-hidden="true"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						>
							<path d="M5 12h14M12 5v14" />
						</svg>
					</summary>
					<div className="career-body">
						<p className="career-location">
							{work.location} · {formatDuration(work.from, work.to)}
						</p>
						{work.highlights && (
							<ul className="experience-highlights">
								{work.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						)}
						{work.projects && (
							<p className="experience-projects">
								<span>Selected projects:</span> {work.projects.join(", ")}
							</p>
						)}
						{work.initiatives && (
							<details className="experience-initiatives">
								<summary>Engineering initiatives</summary>
								<ul className="experience-highlights">
									{work.initiatives.map((initiative) => (
										<li key={initiative}>{initiative}</li>
									))}
								</ul>
							</details>
						)}
					</div>
				</details>
			))}
		</div>
	);
}
