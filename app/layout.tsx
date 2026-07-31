import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Geist_Pixel,
	Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Providers } from "./providers";

// Four faces, four jobs.

// Body/UI: Geist. The base voice — paragraphs, navigation, card titles,
// buttons. A neutral grotesk that reads as interface without shouting.
const sans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

// Display: Geist Pixel (Square). Page titles, section number labels and the
// big stat values. Its ELSH axis stays variable so the pixel shape can flex.
const display = Geist_Pixel({
	subsets: ["latin"],
	axes: ["ELSH"],
	variable: "--font-display",
	display: "swap",
});

// Technical: Geist Mono. Labels, timestamps, tags, footer links, nav items —
// anything that should read as machine-set rather than written.
const mono = Geist_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-mono",
	display: "swap",
});

// Long-form: Source Serif 4. Held in reserve for article/blog body text only;
// it never sets interface copy.
const serif = Source_Serif_4({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-serif",
	display: "swap",
});

const siteDescription: string =
	"Rosemale-John is a full-stack engineer in the Philippines. Laravel and AWS underneath, Vue, Nuxt, React and Next on top. Shipping production products since 2016.";

export const metadata: Metadata = {
	title: "Full-stack AI Engineer | Rosemale-John",
	description: siteDescription,
	metadataBase: new URL("https://rosemalejohn.me/"),
	openGraph: {
		siteName: "Rosemale-John",
		description: siteDescription,
		images: ["/me.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// next-themes sets `class` and `style` on <html> before hydration; React 19
		// reports that as a mismatch without suppressHydrationWarning.
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${sans.variable} ${display.variable} ${mono.variable} ${serif.variable} font-sans`}
			>
				<Providers>
					<div className="flex min-h-screen flex-col">
						<Header />

						<main className="flex-auto">{children}</main>

						<Footer />
					</div>
				</Providers>

				<Analytics />
			</body>
		</html>
	);
}
