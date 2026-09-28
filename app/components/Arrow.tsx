export function Arrow({
	diagonal = false,
	className = "",
}: {
	diagonal?: boolean;
	className?: string;
}) {
	return (
		<svg
			aria-hidden="true"
			className={`arrow ${className}`}
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
		</svg>
	);
}
