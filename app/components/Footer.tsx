import Link from "next/link";

type FooterLink = {
	name: string;
	href: string;
};

const links: FooterLink[] = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" },
];

export default function Footer() {
	return (
		<footer className="mt-32 flex-none">
			<div className="sm:px-8">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="border-t border-slate-100 pb-16 pt-10 dark:border-slate-700/40">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
									<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-slate-800 dark:text-slate-200">
										{links.map((link, index) => (
											<Link
												key={index}
												className="transition hover:text-yellow-500 dark:hover:text-yellow-400"
												href={link.href}
											>
												{link.name}
											</Link>
										))}
									</div>
									<p className="text-sm text-slate-400 dark:text-slate-500">
										Rosemale-John
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
