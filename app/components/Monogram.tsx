// Legal suffixes are noise, not identity — "Peoplewave Pty. Ltd." should read
// as Peoplewave, not P·P.
const LEGAL_SUFFIXES = new Set([
	"pty",
	"ltd",
	"inc",
	"llc",
	"co",
	"corp",
	"gmbh",
	"plc",
]);

/**
 * A text-only mark derived from a name: the initials of the first two real
 * words ("Move With Us" -> MW), or the internal capitals of a single
 * camelCase word ("RedThread" -> RT). Keeps each row's identity tied to the
 * real name rather than a shipped logo file.
 */
export function monogram(name: string): string {
	const words = name
		.trim()
		.split(/\s+/)
		.filter(
			(word) =>
				/^[a-z]/i.test(word) &&
				!LEGAL_SUFFIXES.has(word.replace(/\./g, "").toLowerCase()),
		);

	if (words.length >= 2) {
		return (words[0][0] + words[1][0]).toUpperCase();
	}

	const single = words[0] ?? name.trim();
	const caps = single.match(/[A-Z]/g);
	if (caps && caps.length >= 2) return caps.slice(0, 2).join("");
	return single.charAt(0).toUpperCase();
}

export default function Monogram({ name }: { name: string }) {
	return (
		<span
			aria-hidden="true"
			className="flex h-9 w-9 flex-none items-center justify-center rounded-[3px] border border-line bg-surface font-display text-[13px] font-bold tracking-[-0.02em] text-muted"
		>
			{monogram(name)}
		</span>
	);
}
