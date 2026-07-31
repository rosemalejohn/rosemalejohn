import type { ReactNode } from "react";

/**
 * The one horizontal measure on the site. Every section sits inside it, so
 * the left edge of the page is a single unbroken line from header to footer.
 */
export default function Container({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`mx-auto w-full max-w-shell px-6 sm:px-10 lg:px-16 ${className}`}
		>
			{children}
		</div>
	);
}
