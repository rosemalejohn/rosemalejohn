import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import ProjectRow from "../../app/components/ProjectRow";
import { projectStories } from "../../app/data/project-stories";
import { featuredProjects, projects } from "../../app/data/projects";

afterEach(cleanup);

test("archive includes the same contribution and focus as the overview for every featured product", () => {
	render(
		<ul>
			{featuredProjects.map((project) => (
				<ProjectRow key={project.name} project={project} />
			))}
		</ul>,
	);
	for (const project of featuredProjects) {
		const story = projectStories[project.name];
		const row = screen
			.getByRole("heading", { name: project.name })
			.closest("li");
		if (!row) throw new Error(`Missing archive entry: ${project.name}`);
		const entry = within(row);
		expect(entry.getByText(story.contribution)).toBeDefined();
		expect(entry.getByText(story.role)).toBeDefined();
		for (const focus of story.focus)
			expect(entry.getByText(focus.description)).toBeDefined();
		if (story.context) expect(entry.getByText(story.context)).toBeDefined();
		expect(entry.getByRole("link").getAttribute("href")).toBe(project.link);
	}
});

test("private projects keep their known summary without an invented destination or contribution", () => {
	const project = projects.find((project) => project.name === "Concha");
	if (!project) throw new Error("Concha fixture missing");
	render(
		<ul>
			<ProjectRow project={project} />
		</ul>,
	);
	expect(screen.getByText("Not public")).toBeDefined();
	expect(screen.queryByRole("link")).toBeNull();
	expect(screen.queryByText("My contribution")).toBeNull();
});
