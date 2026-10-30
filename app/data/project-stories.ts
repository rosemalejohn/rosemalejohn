type ProjectStory = {
	logo: string;
	category: string;
	role: string;
	contribution: string;
	focus: { title: string; description: string }[];
	context?: string;
};

// Contributions are grounded in the supplied resume. Product descriptions and
// technology lists remain in projects.ts, shared with the public archive.
export const projectStories: Record<string, ProjectStory> = {
	RedThread: {
		logo: "/redthread.png",
		category: "Social music & voice",
		role: "Music & real-time voice integrations",
		contribution:
			"Integrated Apple MusicKit and LiveKit so synchronized music listening and real-time voice calls could work together.",
		focus: [
			{
				title: "Shared listening",
				description:
					"Apple MusicKit integration for synchronized music playback.",
			},
			{
				title: "Real-time voice",
				description:
					"LiveKit voice calls, simultaneous playback, and audio behavior.",
			},
		],
	},
	TieBreak: {
		logo: "/tiebreak.png",
		category: "Tennis booking & community",
		role: "Full-stack development",
		contribution:
			"Contributed to full-stack architecture, backend APIs, frontend features, and production delivery for a tennis booking platform.",
		focus: [
			{
				title: "From architecture to delivery",
				description:
					"Backend APIs and frontend features through to production.",
			},
			{
				title: "Connecting players",
				description:
					"A product for finding local partners and organizing singles or doubles matches.",
			},
		],
	},
	WeCollect: {
		logo: "/wecollect.png",
		category: "Collectibles marketplace",
		role: "APIs, frontend & payments",
		contribution:
			"Built APIs, frontend features, payment flows, and third-party integrations for a trading-card marketplace.",
		focus: [
			{
				title: "Collecting meets commerce",
				description:
					"Discovery, buying, selling, and trading collectible cards.",
			},
			{
				title: "Connected services",
				description: "Payment flows and third-party service integrations.",
			},
		],
	},
	"Valued Business": {
		logo: "/valued.png",
		category: "Business discovery & referrals",
		role: "Platform development",
		contribution:
			"Contributed to a platform connecting consumers, businesses, and charities through business discovery, recommendations, promotions, and referral rewards.",
		focus: [
			{
				title: "Business discovery",
				description:
					"Helping consumers find businesses through discovery and recommendations.",
			},
			{
				title: "Referral rewards",
				description:
					"Promotions and rewards connecting consumers, businesses, and charities.",
			},
		],
	},
	"Move With Us": {
		logo: "/movewithus.png",
		category: "Fitness & nutrition",
		role: "APIs & application features",
		contribution:
			"Developed and maintained APIs and application features, supporting scalability, reliability, performance, and production operations.",
		context: "A platform serving 300K+ monthly active users.",
		focus: [
			{
				title: "Everyday fitness",
				description:
					"A product pairing science-based workouts with custom nutrition.",
			},
			{
				title: "Production operations",
				description:
					"Supporting application performance, scalability, and reliability.",
			},
		],
	},
};
