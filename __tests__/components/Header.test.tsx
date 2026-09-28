import { render, screen } from "@testing-library/react";
import { beforeAll, expect, test } from "vitest";
import Header from "./../../app/components/Header";

beforeAll(() => {
	render(<Header />);
});

test("header should have navigation links", () => {
	const links = {
		"Rosemale-John home": "/",
		Work: "/projects",
		About: "/#about",
		"Let’s talk": "mailto:rosemalejohn@gmail.com",
	};

	Object.entries(links).forEach(([name, href]) => {
		expect(screen.getByRole("link", { name }).getAttribute("href")).toBe(href);
	});
});
