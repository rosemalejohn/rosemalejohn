import { render, screen } from "@testing-library/react";
import { beforeAll, expect, test } from "vitest";
import Header from "./../../app/components/Header";

beforeAll(() => {
	render(<Header />);
});

test("header should have navigation links", () => {
	const links: string[] = ["Home", "Projects"];

	links.forEach((link: string) => {
		expect(screen.getByText(link)).toBeDefined();
	});
});
