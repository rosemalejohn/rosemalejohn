"use client";

import { Button, Image } from "@nextui-org/react";
import DownloadIcon from "./icons/DownloadIcon";
import WorkIcon from "./icons/WorkIcon";
import { useRouter } from "next/navigation";

type Work = {
	company: string;
	role: string;
	from: string;
	to: string;
	image: string;
};

const works: Work[] = [
	{
		company: "Peoplewave Pty. Ltd.",
		role: "Lead Web Developer",
		from: "Aug 2017",
		to: "Jun 2019",
		image: "/peoplewave.jpeg",
	},
	{
		company: "Bywave",
		role: "Full Stack Web Developer",
		from: "Sep 2016",
		to: "Dec 2017",
		image: "/bywave.jpeg",
	},
	{
		company: "Cloudology Codes",
		role: "Web Developer",
		from: "Mar 2016",
		to: "Aug 2016",
		image: "/cloudology.jpeg",
	},
];

export default function Work() {
	const router = useRouter();

	return (
		<div className="mx-auto w-full max-w-7xl lg:px-8">
			<div className="relative px-4 sm:px-8 lg:px-12">
				<div className="mx-auto max-w-2xl lg:max-w-5xl">
					<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
						<div className="flex flex-col gap-16" />
						<div className="space-y-10 lg:pl-16 xl:pl-24">
							<div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
								<h2 className="flex items-center text-sm font-semibold text-slate-900 dark:text-slate-100">
									<WorkIcon />
									<span className="ml-3">Work</span>
								</h2>
								<ol className="mt-6 space-y-4">
									{works.map((work, index) => (
										<li key={index} className="flex gap-4">
											<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
												<Image
													alt={work.company}
													width="32"
													height="32"
													className="h-7 w-7"
													src={work.image}
												/>
											</div>
											<dl className="flex flex-auto flex-wrap gap-x-2">
												<dt className="sr-only">Company</dt>
												<dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
													{work.company}
												</dd>
												<dt className="sr-only">Role</dt>
												<dd className="text-xs text-slate-500 dark:text-slate-400">
													{work.role}
												</dd>
												<dt className="sr-only">Date</dt>
												<dd
													className="ml-auto text-xs text-slate-400 dark:text-slate-500"
													aria-label={`${work.from} to ${work.to}`}
												>
													<time dateTime="2019">{work.from}</time>{" "}
													<span aria-hidden="true">—</span>{" "}
													<time dateTime="2024">{work.to}</time>
												</dd>
											</dl>
										</li>
									))}
								</ol>
								<Button
									className="bg-slate-50 text-slate-900 hover:bg-slate-100 active:bg-slate-100 active:text-slate-900/60 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:active:bg-slate-800/50 dark:active:text-slate-50/70 mt-6 w-full"
									// endContent={<DownloadIcon />}
									onPress={() => router.push("/projects")}
								>
									{/* Download CV */}
									View Projects
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
