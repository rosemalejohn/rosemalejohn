import Link from "next/link";
import { Arrow } from "./Arrow";
import Container from "./Container";

export default function Header() {
	return (
		<header className="site-header">
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<Container>
				<div className="header-inner">
					<Link href="/" className="wordmark" aria-label="Rosemale-John home">
						rj<span>.</span>
					</Link>
					<nav aria-label="Main navigation">
						<Link href="/projects">Work</Link>
						<Link href="/#about">About</Link>
						<a href="mailto:rosemalejohn@gmail.com" className="nav-contact">
							Let’s talk <Arrow diagonal />
						</a>
					</nav>
				</div>
			</Container>
		</header>
	);
}
