import React, {useState} from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<nav className={styles.Navbar}>
			<div className={styles.navbarContainer}>
				<h1 className={styles.navbarLogo}>
					<Link href='#home'>
						<a>Lee Jiseon</a>
					</Link>
				</h1>
				<ul className={`${styles.list} ${active && styles.active}`}>
					<li className={styles.listItem}>
						<Link href='#animations'>
							<a>Animations</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#illustrations'>
							<a>Illustrations</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#contact'>
							<a>Contact Me</a>
						</Link>
					</li>
				</ul>
				<button onClick={() => setActive(!active)} className={`${styles.hamburger} ${active && styles.active}`}>
					<div className={styles.bar}></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
