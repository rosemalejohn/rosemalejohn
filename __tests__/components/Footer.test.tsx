import { expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./../../app/components/Footer";

beforeAll(() => {
	render(<Footer />);
});

test("footer should have links", () => {
	const links: string[] = ["Home", "Projects"];

	links.map((link: string) => {
		expect(screen.getByText(link)).toBeDefined();
	});
});

test("footer should have site title", () => {
	expect(screen.getByText("Rosemale-John")).not.toBeNull();
});
