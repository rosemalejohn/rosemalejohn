export type Project = {
	name: string;
	description: string;
	link?: string;
	stack?: string[];
	/** Shown in the short list on the home page. */
	featured?: boolean;
};
