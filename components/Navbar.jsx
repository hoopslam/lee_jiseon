import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div className={styles.navbarContainer}>
				<h1 className={styles.navbarLogo}>
					<Link href='#home'>
						<a>Lee Jiseon</a>
					</Link>
				</h1>
				<ul className={styles.list}>
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
			</div>
		</nav>
	);
};

export default Navbar;
