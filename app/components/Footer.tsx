import Link from "next/link";
import Container from "./Container";

type FooterLink = {
	name: string;
	href: string;
};

const links: FooterLink[] = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" },
];

/**
 * The bottom of the cut. Every page ends in the deep block, whatever sits
 * above it, so scrolling down always arrives at the same ground.
 */
export default function Footer() {
	return (
		<footer className="on-deep bg-deep py-10 text-on-deep">
			<Container>
				<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
					<p className="font-display font-condensed text-[15px] font-bold uppercase tracking-[0.12em]">
						Rosemale-John
					</p>

					<div className="-ml-3 flex items-center gap-1 sm:ml-0">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="rounded-[3px] px-3 py-1.5 font-mono text-[11px] uppercase tracking-label text-on-deep-muted transition-colors hover:text-on-deep-accent"
							>
								{link.name}
							</Link>
						))}
					</div>

					<p className="font-mono text-[11px] uppercase tracking-label text-on-deep-muted">
						UTC+8
					</p>
				</div>
			</Container>
		</footer>
	);
}
