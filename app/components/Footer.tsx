import Link from "next/link";
import { Arrow } from "./Arrow";

export default function Footer() {
	return (
		<footer className="site-footer">
			<Link href="/" className="footer-name">
				Rosemale-John
			</Link>
			<p>Thoughtfully built. Always improving.</p>
			<a
				href="https://github.com/rosemalejohn"
				target="_blank"
				rel="noreferrer"
			>
				GitHub <Arrow diagonal />
			</a>
		</footer>
	);
}
