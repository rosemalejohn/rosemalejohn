import { expect, test, beforeAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./../../app/components/Header";

vi.mock("./../../app/components/HeaderDropdownMenu");

vi.mock("./../../app/components/ThemeSelector", () => {
	return {
		default: () => <div data-testid="theme-selector" />,
	};
});

beforeAll(() => {
	render(<Header />);
});

test("header should have navigation links", () => {
	const links: string[] = ["Home", "Projects"];

	links.map((link: string) => {
		expect(screen.getByText(link)).toBeDefined();
	});
});

test("header should have theme selector", () => {
	const themeSelector = screen.getByTestId("theme-selector");
	expect(themeSelector).toBeDefined();
});
