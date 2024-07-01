import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import type { NavigationItem } from "../types/NavigationItem";

const navigations: NavigationItem[] = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" },
];

export default function Header() {
	return (
		<header className="pointer-events-none relative z-50 flex flex-none flex-col">
			<div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
			<div className="sm:px-8 top-0 order-last -mb-3 pt-3">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
								<div className="relative">
									<Avatar src="/me.png" size="lg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="top-0 z-10 h-16 pt-6">
				<div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
					<div className="mx-auto w-full max-w-7xl lg:px-8">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="relative flex gap-4">
									<div className="flex flex-1" />
									<div className="flex flex-1 justify-end md:justify-center">
										<div className="md:hidden">
											<HeaderDropdownMenu navigations={navigations} />
										</div>
										<nav className="pointer-events-auto hidden md:block">
											<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10">
												{navigations.map((navigation) => (
													<li key={navigation.name}>
														<Link
															className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
															href={navigation.href}
														>
															{navigation.name}
														</Link>
													</li>
												))}
											</ul>
										</nav>
									</div>
									<div className="flex justify-end md:flex-1">
										<ThemeSelector />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
