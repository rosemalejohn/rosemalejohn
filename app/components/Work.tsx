import Monogram from "./Monogram";

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
		<ul className="border-b border-line">
			{works.map((work) => (
				<li
					key={work.company}
					className="flex items-start gap-5 border-t border-line py-6 sm:items-center"
				>
					<Monogram name={work.company} />

					<div className="grid flex-1 gap-x-10 gap-y-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-baseline">
						<div>
							<h3 className="font-display text-[clamp(1.05rem,1.5vw,1.25rem)] font-bold leading-tight tracking-[-0.015em] text-ink">
								{work.role}
							</h3>
							<p className="mt-1 text-[15px] text-ink-soft">{work.company}</p>
							<p className="mt-1 font-mono text-[11px] uppercase tracking-label text-muted">
								{work.location}
							</p>
						</div>

						<p className="font-mono text-[11px] uppercase tracking-label text-muted md:text-right">
							{work.from} &rarr; {work.to}
							<span className="text-muted/70">
								{" "}
								· {formatDuration(work.from, work.to)}
							</span>
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
