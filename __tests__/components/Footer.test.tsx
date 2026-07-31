import { render, screen } from "@testing-library/react";
import { beforeAll, expect, test } from "vitest";
import Footer from "./../../app/components/Footer";

beforeAll(() => {
	render(<Footer />);
});

test("footer should have links", () => {
	const links: string[] = ["Home", "Projects"];

	links.forEach((link: string) => {
		expect(screen.getByText(link)).toBeDefined();
	});
});

test("footer should have site title", () => {
	expect(screen.getByText("Rosemale-John")).not.toBeNull();
});
