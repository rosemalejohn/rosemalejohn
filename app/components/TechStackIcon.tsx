"use client";

import { type ReactElement, useMemo } from "react";
import AngularIcon from "./icons/AngularIcon";
import AwsIcon from "./icons/AwsIcon";
import DigitalOceanIcon from "./icons/DigitalOceanIcon";
import HerokuIcon from "./icons/HerokuIcon";
import LaravelIcon from "./icons/LaravelIcon";
import NextIcon from "./icons/NextIcon";
import NodeIcon from "./icons/NodeIcon";
import NuxtIcon from "./icons/NuxtIcon";
import PhpIcon from "./icons/PhpIcon";
import { Tooltip } from "@nextui-org/react";
import WordpressIcon from "./icons/WordpressIcon";
import VueIcon from "./icons/VueIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import ReactIcon from "./icons/ReactIcon";

export default function TechStackIcon({ icon }: { icon: string }) {
	const iconComponent = useMemo(() => {
		const icons: Record<string, ReactElement> = {
			angular: <AngularIcon />,
			aws: <AwsIcon />,
			digitalocean: <DigitalOceanIcon />,
			heroku: <HerokuIcon />,
			laravel: <LaravelIcon />,
			next: <NextIcon />,
			node: <NodeIcon />,
			nuxt: <NuxtIcon />,
			php: <PhpIcon />,
			react: <ReactIcon />,
			tailwind: <TailwindIcon />,
			typescript: <TypescriptIcon />,
			vue: <VueIcon />,
			wordpress: <WordpressIcon />,
		};

		return icons[icon] || null;
	}, [icon]);

	const tooltipName = useMemo(() => {
		const icons: Record<string, string> = {
			angular: "Angular",
			aws: "Amazon Web Services",
			digitalocean: "Digital Ocean",
			heroku: "Heroku",
			laravel: "Laravel",
			next: "Next JS",
			node: "Node",
			nuxt: "Nuxt JS",
			php: "PHP",
			react: "React",
			tailwind: "Tailwind",
			typescript: "Typescript",
			vue: "Vue",
			wordpress: "Wordpress",
		};

		return icons[icon] || null;
	}, [icon]);

	return (
		<Tooltip content={tooltipName}>
			<div>{iconComponent}</div>
		</Tooltip>
	);
}
