import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// Every color is a token from app/globals.css. Opacity modifiers are
			// deliberately unavailable on these: each needed tone is its own token.
			colors: {
				paper: "var(--paper)",
				surface: "var(--surface)",
				ink: "var(--ink)",
				"ink-soft": "var(--ink-soft)",
				muted: "var(--muted)",
				line: "var(--line)",
				"line-strong": "var(--line-strong)",
				accent: "var(--accent)",
				"on-accent": "var(--on-accent)",
				oxide: "var(--oxide)",
				"layer-surface": "var(--layer-surface)",
				"layer-server": "var(--layer-server)",
				"layer-services": "var(--layer-services)",
				"layer-ground": "var(--layer-ground)",
				"on-layer-surface": "var(--on-layer-surface)",
				"on-layer-deep": "var(--on-layer-deep)",
				"seam-void": "var(--seam-void)",
				deep: "var(--deep)",
				"on-deep": "var(--on-deep)",
				"on-deep-muted": "var(--on-deep-muted)",
				"on-deep-accent": "var(--on-deep-accent)",
			},
			fontFamily: {
				// Body/UI — the base voice.
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
				// Display — page titles, section number labels, big stat values.
				display: ["var(--font-display)", "var(--font-mono)", "monospace"],
				// Technical — labels, timestamps, tags, footer links, nav items.
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
				// Long-form — article/blog body text only.
				serif: ["var(--font-serif)", "Georgia", "serif"],
			},
			letterSpacing: {
				label: "0.16em",
			},
			maxWidth: {
				shell: "1140px",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
export default config;
