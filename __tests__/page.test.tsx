import { render, screen } from "@testing-library/react";
import { beforeAll, expect, test, vi } from "vitest";
import Page from "./../app/page";

vi.mock("./../app/components/Work", () => {
	return {
		default: () => <div data-testid="work" />,
	};
});

beforeAll(() => {
	render(<Page />);
});

test("home page should have necessary text", () => {
	expect(
		screen.getByRole("heading", {
			level: 1,
			name: "Web applications. Built end to end.",
		}),
	).toBeDefined();
	const texts: string[] = ["Philippines", "Open to work."];

	texts.forEach((text: string) => {
		expect(screen.getByText(text)).toBeDefined();
	});
});

test("home page should preserve links to shipped products", () => {
	const shipped: string[] = [
		"RedThread",
		"TieBreak",
		"Valued Business",
		"Move With Us",
		"F45 Training",
	];

	shipped.forEach((name: string) => {
		const link = screen.getByRole("link", {
			name: name === "F45 Training" ? name : `Visit ${name}`,
		});
		expect(link.getAttribute("href")).toMatch(/^https:\/\//);
	});
});

test("home page should have social links", () => {
	const links: string[] = ["Github", "LinkedIn"];

	links.forEach((link: string) => {
		const social = screen.getByTestId(link);
		expect(social).toHaveProperty("target", "_blank");
		expect(social).toBeDefined();
	});
	expect(screen.queryByRole("link", { name: "Twitter" })).toBeNull();
	expect(screen.queryByRole("link", { name: "Instagram" })).toBeNull();
});

test("home page should have a contact address", () => {
	const [email] = screen.getAllByText("rosemalejohn@gmail.com");
	expect(email.closest("a")).toHaveProperty(
		"href",
		"mailto:rosemalejohn@gmail.com",
	);
});

test("home page should have work section", () => {
	const work = screen.getByTestId("work");
	expect(work).toBeDefined();
});
