"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import LightIcon from "./icons/LightIcon";
import DarkIcon from "./icons/DarkIcon";

export default function ThemeSelector() {
	const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = (): void => {
		const newTheme = resolvedTheme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return (
		<Button
			onPress={toggleTheme}
			isIconOnly
			radius="full"
			className="pointer-events-auto bg-white/90 px-3 py-2 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur transition dark:bg-slate-800/90 dark:ring-white/10 dark:hover:ring-white/20"
		>
			{resolvedTheme === "light" ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
}
