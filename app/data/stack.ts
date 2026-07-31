/**
 * Display names for the stack keys used in app/data/projects.ts. An unknown key
 * falls back to the key itself, so a typo shows up on the page instead of
 * disappearing silently.
 */
const stackLabels: Record<string, string> = {
	ably: "Ably",
	agora: "Agora",
	angular: "Angular",
	aws: "AWS",
	cloudflare: "Cloudflare",
	digitalocean: "DigitalOcean",
	docker: "Docker",
	filament: "Filament",
	forge: "Laravel Forge",
	googleapis: "Google APIs",
	graphql: "GraphQL",
	heroku: "Heroku",
	iap: "Google & Apple IAP",
	javascript: "JavaScript",
	laravel: "Laravel",
	livekit: "LiveKit",
	mongodb: "MongoDB",
	musickit: "MusicKit",
	mysql: "MySQL",
	next: "Next.js",
	node: "Node",
	nuxt: "Nuxt",
	onesignal: "OneSignal",
	php: "PHP",
	postgresql: "PostgreSQL",
	posthog: "PostHog",
	primevue: "PrimeVue",
	react: "React",
	redis: "Redis",
	shadcn: "shadcn/ui",
	stripe: "Stripe",
	supabase: "Supabase",
	tailwind: "Tailwind",
	typescript: "TypeScript",
	vue: "Vue",
	vuetify: "Vuetify",
	wordpress: "WordPress",
};

export function stackNames(stack: string[] = []): string[] {
	return stack.map((key) => stackLabels[key] ?? key);
}

/**
 * The four strata the whole site is cut into. Top to bottom, always in this
 * order — the order is the depth. Services sits below the backend: the band of
 * third-party providers the server reaches out into, above the ground it runs
 * on.
 */
export type Layer = "surface" | "server" | "services" | "ground";

export const layerOrder: Layer[] = ["surface", "server", "services", "ground"];

/** Which stratum each tool belongs to. A key missing here belongs to none. */
const stackLayers: Record<string, Layer> = {
	angular: "surface",
	javascript: "surface",
	next: "surface",
	nuxt: "surface",
	primevue: "surface",
	react: "surface",
	shadcn: "surface",
	tailwind: "surface",
	typescript: "surface",
	vue: "surface",
	vuetify: "surface",
	wordpress: "surface",
	laravel: "server",
	filament: "server",
	graphql: "server",
	mongodb: "server",
	mysql: "server",
	node: "server",
	php: "server",
	postgresql: "server",
	redis: "server",
	supabase: "server",
	stripe: "services",
	livekit: "services",
	musickit: "services",
	ably: "services",
	onesignal: "services",
	posthog: "services",
	agora: "services",
	googleapis: "services",
	iap: "services",
	aws: "ground",
	cloudflare: "ground",
	digitalocean: "ground",
	docker: "ground",
	forge: "ground",
	heroku: "ground",
};

export const layerMeta: Record<
	Layer,
	{ label: string; category: string; caption: string }
> = {
	// `label` names the stratum for the seam key; `category` is the plain-English
	// discipline the same tools group under, used by the stack grid.
	surface: {
		label: "Surface",
		category: "Frontend",
		caption: "What people touch",
	},
	server: {
		label: "Server",
		category: "Backend",
		caption: "Where the rules live",
	},
	services: {
		label: "Services",
		category: "Integrations",
		caption: "What it plugs into",
	},
	ground: { label: "Ground", category: "DevOps", caption: "What it runs on" },
};

/** The strata a single project reaches, read off its recorded stack. */
export function layersOf(stack: string[] = []): Layer[] {
	const reached = new Set(
		stack.map((key) => stackLayers[key]).filter(Boolean) as Layer[],
	);
	return layerOrder.filter((layer) => reached.has(layer));
}

/**
 * Every tool grouped by the stratum it sits in, for the section diagram. Built
 * from the same map the seams read. Most tools here also appear on a project
 * seam; the ground layer additionally carries infrastructure (Docker, Laravel
 * Forge, Cloudflare) used across the work rather than tied to one project.
 */
export function toolsByLayer(): Record<Layer, string[]> {
	const grouped: Record<Layer, string[]> = {
		surface: [],
		server: [],
		services: [],
		ground: [],
	};

	for (const [key, layer] of Object.entries(stackLayers)) {
		grouped[layer].push(stackLabels[key] ?? key);
	}

	return grouped;
}
