import Link from "next/link";
import Container from "./Container";

export default function Footer() {
	return (
		<footer className="site-footer">
			<Container>
				<div className="footer-inner">
					<Link href="/" className="footer-name">
						Rosemale-John
					</Link>
					<p>Based in the Philippines. Building everywhere.</p>
					<a
						href="https://github.com/rosemalejohn"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</Container>
		</footer>
	);
}
