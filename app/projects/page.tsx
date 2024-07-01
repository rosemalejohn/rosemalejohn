import ProjectList from "./components/ProjectList";

export default function Projects() {
	return (
		<>
			<div className="sm:px-8 mt-16 sm:mt-32">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<header className="max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl dark:text-slate-100">
									Projects That Showcase My Contributions to the World
								</h1>
								<p className="mt-6 text-base text-slate-600 dark:text-slate-400">
									Over the years, I’ve completed numerous projects, and these
									are the ones I’m most proud of.
								</p>
							</header>
							<div className="mt-16 sm:mt-20">
								<ProjectList />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
