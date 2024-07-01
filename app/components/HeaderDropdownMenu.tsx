"use client";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import CaretDownIcon from "./icons/CaretDownIcon";
import type { NavigationItem } from "../types/NavigationItem";
import { useRouter } from "next/navigation";

type Props = {
	navigations?: NavigationItem[];
};

export default function HeaderDropdownMenu({ navigations }: Props) {
	const router = useRouter();

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					radius="full"
					className="pointer-events-auto bg-white/90 text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10 dark:hover:ring-white/20"
					type="button"
				>
					Menu
					<CaretDownIcon />
				</Button>
			</DropdownTrigger>
			<DropdownMenu variant="light" aria-label="Menu" items={navigations}>
				{(item) => (
					<DropdownItem onPress={() => router.push(item.href)} key={item.name}>
						{item.name}
					</DropdownItem>
				)}
			</DropdownMenu>
		</Dropdown>
	);
}
