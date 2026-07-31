import Link from "next/link";
import { layerOrder } from "../data/stack";
import type { NavigationItem } from "../types/NavigationItem";
import Container from "./Container";
import Seam from "./Seam";

const navigations: NavigationItem[] = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-line bg-paper">
			<Container>
				<div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
					{/* The mark is a seam with every stratum filled — the claim the rest
					    of the page then has to back up. */}
					<Link
						href="/"
						className="flex flex-none items-center gap-2.5 sm:gap-3"
					>
						<Seam layers={layerOrder} className="h-6 w-1.5 rounded-[2px]" />
						<span className="whitespace-nowrap font-display font-condensed text-[13px] font-bold uppercase tracking-[0.1em] text-ink sm:text-[15px] sm:tracking-[0.12em]">
							Rosemale-John
						</span>
					</Link>

					<div className="flex items-center gap-1 sm:gap-4">
						<nav>
							<ul className="flex items-center gap-0.5 sm:gap-1">
								{navigations.map((navigation) => (
									<li key={navigation.name}>
										<Link
											href={navigation.href}
											className="block rounded-[3px] px-2 py-1.5 font-mono text-[11px] uppercase tracking-label text-muted transition-colors hover:bg-surface hover:text-accent sm:px-3"
										>
											{navigation.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</Container>
		</header>
	);
}
