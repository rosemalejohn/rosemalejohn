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
	const texts: string[] = [
		"Full-stack AI engineer · Philippines · UTC+8",
		"Available for work",
		"I build all the way down.",
		"Open to new work.",
	];

	texts.forEach((text: string) => {
		expect(screen.getByText(text)).toBeDefined();
	});
});

test("home page should link every product named in the hero", () => {
	const shipped: string[] = [
		"RedThread",
		"TieBreak",
		"WeCollect",
		"Valued",
		"Move With Us",
		"F45 Training",
	];

	shipped.forEach((name: string) => {
		// Product names repeat further down the page in the selected work list,
		// so this asserts the first occurrence, which is the hero sentence.
		const [heroMention] = screen.getAllByText(name);
		expect(heroMention.closest("a")).not.toBeNull();
	});
});

test("home page should have social links", () => {
	const links: string[] = ["Github", "Twitter", "Instagram", "LinkedIn"];

	links.forEach((link: string) => {
		const github = screen.getByTestId(link);
		expect(github).toHaveProperty("target", "_blank");
		expect(github).toBeDefined();
	});
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
