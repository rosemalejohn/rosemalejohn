import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Providers } from "./providers";

const sans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});
const display = Source_Serif_4({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	style: ["normal", "italic"],
	variable: "--font-display",
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
			<body className={`${sans.variable} ${display.variable} font-sans`}>
				<Providers>
					<div className="flex min-h-screen flex-col">
						<Header />

						<main id="main" className="flex-auto">
							{children}
						</main>

						<Footer />
					</div>
				</Providers>

				<Analytics />
			</body>
		</html>
	);
}
