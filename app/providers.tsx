"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		// Light is the only theme now. `forcedTheme` pins the `class` on <html> so
		// next-themes never reads storage or the OS preference — there is no toggle.
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			forcedTheme="light"
			enableSystem={false}
		>
			{children}
		</ThemeProvider>
	);
}
