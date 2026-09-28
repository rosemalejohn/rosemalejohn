import ProjectRow from "@/app/components/ProjectRow";
import { projects } from "@/app/data/projects";

export default function ProjectList() {
	return (
		<ul className="project-list">
			{projects.map((project) => (
				<ProjectRow key={project.name} project={project} />
			))}
		</ul>
	);
}
