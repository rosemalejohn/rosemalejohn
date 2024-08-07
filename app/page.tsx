import Link from "next/link";
import GithubIcon from "./components/icons/GithubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import TwitterIcon from "./components/icons/TwitterIcon";
// import Gallery from "./components/Gallery";
import Work from "./components/Work";
import type { ReactNode } from "react";

type Social = {
	name: string;
	href: string;
	icon: ReactNode;
};

const socials: Social[] = [
	{
		name: "Github",
		href: "https://github.com/rosemalejohn",
		icon: <GithubIcon />,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/rosemalejohn",
		icon: <TwitterIcon />,
	},
	{
		name: "Instagram",
		href: "https://instagram.com/rosemalejohn",
		icon: <InstagramIcon />,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/rosemalejohn",
		icon: <LinkedInIcon />,
	},
];

export default function Home() {
	return (
		<>
			<div className="sm:px-8 mt-9">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<div className="max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl dark:text-slate-100">
									Full Stack Web Developer
								</h1>
								<p className="mt-6 text-base text-slate-600 dark:text-slate-400">
									Hi, I'm Rosemale-John, a passionate and skilled full-stack web
									developer based in the Philippines. With a strong background
									in both front-end and back-end technologies
								</p>
								<div className="mt-6 flex gap-6 text-base text-slate-600 dark:text-white">
									{socials.map((social) => (
										<Link
											data-testid={social.name}
											key={social.name}
											target="_blank"
											className="group -m-1 p-1"
											href={social.href}
										>
											{social.icon}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="mt-16 sm:mt-20">
				<Gallery />
			</div> */}
			<div className="sm:px-8 mt-24 md:mt-28 mb-12">
				<Work data-testid="work" />
			</div>
		</>
	);
}
