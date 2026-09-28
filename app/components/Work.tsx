type Role = {
	company: string;
	role: string;
	location: string;
	from: string;
	to: string;
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
		company: "Freelance",
		role: "Senior Full Stack Web Developer",
		location: "International · Remote",
		from: "Jul 2019",
		to: "Present",
	},
	{
		company: "Peoplewave Pty. Ltd.",
		role: "Lead Web Developer",
		location: "Singapore · Remote",
		from: "Aug 2017",
		to: "Jun 2019",
	},
	{
		company: "Bywave",
		role: "Full Stack Web Developer",
		location: "Philippines · On Site",
		from: "Sep 2016",
		to: "Dec 2017",
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
		<ul className="experience-list">
			{works.map((work) => (
				<li key={work.company} className="experience-row">
					<div className="experience-period">
						<p>
							{work.from} — {work.to}
						</p>
						<span>{formatDuration(work.from, work.to)}</span>
					</div>
					<div className="experience-position">
						<h3>{work.role}</h3>
						<p>{work.company}</p>
					</div>
					<p className="experience-location">{work.location}</p>
				</li>
			))}
		</ul>
	);
}
