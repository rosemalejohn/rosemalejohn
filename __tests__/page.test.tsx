import { expect, test, beforeAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
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
		"Full Stack Web Developer",
		"Hi, I'm Rosemale-John, a passionate and skilled full-stack web developer based in the Philippines. With a strong background in both front-end and back-end technologies",
	];

	texts.map((text: string) => {
		expect(screen.getByText(text)).toBeDefined();
	});
});

test("home page should have social links", () => {
	const links: string[] = ["Github", "Twitter", "Instagram", "LinkedIn"];

	links.map((link: string) => {
		const github = screen.getByTestId(link);
		expect(github).toHaveProperty("target", "_blank");
		expect(github).toBeDefined();
	});
});

test("home page should have work section", () => {
	const work = screen.getByTestId("work");
	expect(work).toBeDefined();
});
