"use client";

import { useEffect, useState } from "react";

/**
 * The headline types itself out, holds, deletes, and moves to the next line —
 * a cursor blinking the whole time. Phrases share the "down to the foundation"
 * register so the rotation reads as one idea, not four unrelated taglines.
 */
const phrases = [
	"I build down to bedrock.",
	"I ship from empty repo to daily habit.",
	"I dig until the thing holds weight.",
	"I engineer for the decade, not the demo.",
];

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1900;
const GAP_MS = 400;

export default function TypedHeadline() {
	const [index, setIndex] = useState(0);
	const [text, setText] = useState("");
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		// Reduced-motion users get the first phrase, no animation.
		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			setText(phrases[0]);
			return;
		}

		const phrase = phrases[index];

		if (!deleting && text === phrase) {
			const hold = setTimeout(() => setDeleting(true), HOLD_MS);
			return () => clearTimeout(hold);
		}

		if (deleting && text === "") {
			const gap = setTimeout(() => {
				setDeleting(false);
				setIndex((i) => (i + 1) % phrases.length);
			}, GAP_MS);
			return () => clearTimeout(gap);
		}

		const next = setTimeout(
			() => {
				setText((current) =>
					deleting
						? phrase.slice(0, current.length - 1)
						: phrase.slice(0, current.length + 1),
				);
			},
			deleting ? DELETE_MS : TYPE_MS,
		);
		return () => clearTimeout(next);
	}, [text, deleting, index]);

	return (
		<span>
			{/* Screen readers get the stable phrase; the animated text and caret
			    are decorative and hidden from them. */}
			<span className="sr-only">{phrases[0]}</span>
			<span aria-hidden="true">{text}</span>
			<span aria-hidden="true" className="caret" />
		</span>
	);
}
