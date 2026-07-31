import ProjectRow from "@/app/components/ProjectRow";
import { projects } from "@/app/data/projects";

export default function ProjectList() {
	return (
		<ul className="border-b border-line">
			{projects.map((project) => (
				<ProjectRow key={project.name} project={project} />
			))}
		</ul>
	);
}
