import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import { twMerge } from "tailwind-merge";
import Footer from "./components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

const siteDescription: string = "Hi, I'm John, a full stack web developer.";

export const metadata: Metadata = {
	title: "Rosemale-John",
	description: siteDescription,
	openGraph: {
		siteName: "Rosemale-John",
		description: siteDescription,
		images: [
			{
				url: "/me.png",
				width: 512,
				height: 512,
				alt: "Rosemale-John",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={twMerge(urbanist.className)}>
				<Providers>
					<div className="flex h-full min-h-screen bg-slate-50 dark:bg-slate-950">
						<div className="flex w-full">
							<div className="fixed inset-0 flex justify-center sm:px-8">
								<div className="flex w-full max-w-7xl lg:px-8">
									<div className="w-full bg-white ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-300/20" />
								</div>
							</div>

							<div className="relative flex w-full flex-col">
								<Header />

								<main className="flex-auto">{children}</main>

								<Footer />
							</div>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
