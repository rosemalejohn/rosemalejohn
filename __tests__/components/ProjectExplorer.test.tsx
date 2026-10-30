import {
	cleanup,
	fireEvent,
	render,
	screen,
	within,
} from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { ProjectExplorer } from "../../app/components/ProjectExplorer";
import { featuredProjects } from "../../app/data/projects";

afterEach(cleanup);

test("shows the first product with its engineering contribution", () => {
	render(<ProjectExplorer projects={featuredProjects} />);
	const detail = screen.getByRole("region", { name: "Project details" });
	expect(
		within(detail).getByRole("heading", { name: "RedThread" }),
	).toBeDefined();
	expect(
		within(detail).getByText(/Integrated Apple MusicKit and LiveKit/),
	).toBeDefined();
	expect(
		screen
			.getByRole("button", { name: "View RedThread" })
			.getAttribute("aria-pressed"),
	).toBe("true");
});

test("selecting a product updates contribution, state, and destination together", () => {
	render(<ProjectExplorer projects={featuredProjects} />);
	fireEvent.click(screen.getByRole("button", { name: "View Move With Us" }));
	const detail = screen.getByRole("region", { name: "Project details" });
	expect(
		within(detail).getByRole("heading", { name: "Move With Us" }),
	).toBeDefined();
	expect(within(detail).getByText(/300K\+ monthly active users/)).toBeDefined();
	expect(
		within(detail)
			.getByRole("link", { name: "Open project" })
			.getAttribute("href"),
	).toBe("https://apps.apple.com/ph/app/move-with-us/id1523442465");
	expect(
		screen
			.getByRole("button", { name: "View RedThread" })
			.getAttribute("aria-pressed"),
	).toBe("false");
	expect(screen.getByRole("status").textContent).toContain("Move With Us");
});

test("phone chooser switches projects and preserves public destinations", () => {
	render(<ProjectExplorer projects={featuredProjects} />);
	fireEvent.change(screen.getByLabelText("Choose a project"), {
		target: { value: "WeCollect" },
	});
	const detail = screen.getByRole("region", { name: "Project details" });
	expect(
		within(detail).getByRole("heading", { name: "WeCollect" }),
	).toBeDefined();
	expect(
		within(detail)
			.getByRole("link", { name: "Open project" })
			.getAttribute("href"),
	).toBe("https://wecollect.com.au/");
	for (const project of featuredProjects) {
		expect(
			screen
				.getByRole("link", { name: `Visit ${project.name}` })
				.getAttribute("href"),
		).toBe(project.link);
	}
});
