import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Arrow";
import { ProfileNavigation } from "./ProfileNavigation";

export default function Header() {
	return (
		<header className="profile-rail">
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<div className="profile-inner">
				<Link href="/" className="identity" aria-label="Rosemale-John home">
					<span className="profile-photo-wrap">
						<Image
							src="/me.png"
							alt="Rosemale-John"
							width={176}
							height={176}
							priority
							className="profile-photo"
						/>
					</span>
					<div>
						<span className="profile-name">Rosemale-John</span>
						<span className="profile-role">Full-stack AI engineer.</span>
					</div>
				</Link>
				<p className="profile-description">
					Interfaces, systems, and everything in between.
				</p>
				<ProfileNavigation />
				<div className="profile-bottom">
					<div className="profile-location">
						<span>Based in</span>
						<p>
							Philippines <span>· UTC+8</span>
						</p>
					</div>
					<a href="mailto:rosemalejohn@gmail.com" className="rail-contact">
						Let’s talk <Arrow diagonal />
					</a>
					<div className="rail-socials">
						<a
							href="https://github.com/rosemalejohn"
							target="_blank"
							rel="noreferrer"
						>
							GitHub <Arrow diagonal />
						</a>
						<a
							href="https://linkedin.com/in/rosemalejohn"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn <Arrow diagonal />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
