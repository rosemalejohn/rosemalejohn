"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./Arrow";

const destinations = [
	{ label: "Overview", href: "/", detail: "" },
	{ label: "Work", href: "/projects", detail: "Project index" },
	{ label: "About", href: "/#about", detail: "Background" },
];

export function ProfileNavigation() {
	const pathname = usePathname() ?? "/";
	return (
		<nav aria-label="Main navigation" className="rail-navigation">
			{destinations.map(({ label, href, detail }) => (
				<Link
					key={href}
					href={href}
					className="rail-link"
					aria-current={pathname === href ? "page" : undefined}
				>
					<span>{label}</span>
					{pathname === href ? (
						<Arrow />
					) : (
						<span className="nav-meta" aria-hidden="true">
							{detail}
						</span>
					)}
				</Link>
			))}
		</nav>
	);
}
