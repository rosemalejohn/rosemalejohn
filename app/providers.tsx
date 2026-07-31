"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		// Dark is the only theme. forcedTheme pins the `.dark` class on <html> and
		// ignores system preference and any stored choice, so light mode can't be
		// reached even through next-themes' persistence.
		<ThemeProvider attribute="class" forcedTheme="dark">
			{children}
		</ThemeProvider>
	);
}
