import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<nav className={styles.Navbar}>
			<div className={styles.navbarContainer}>
				<h1 className={styles.navbarLogo}>
					<Link href='#home'>
						<a>
							<Image
								src='/assets/icon/home-icon-01.png'
								alt='home icon'
								width={35}
								height={35}
							/>
						</a>
					</Link>
				</h1>
				<ul className={styles.listDesktop}>
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
						<Link href='#infographics'>
							<a>Infographics</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#contact'>
							<a>Contact Me</a>
						</Link>
					</li>
				</ul>
				<ul className={`${styles.listMobile} ${active && styles.active}`}>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#animations'>
							<a>Animations</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#illustrations'>
							<a>Illustrations</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#infographics'>
							<a>Infographics</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#contact'>
							<a>Contact Me</a>
						</Link>
					</li>
				</ul>
				<button
					onClick={() => setActive(!active)}
					className={`${styles.hamburger} ${active && styles.active}`}>
					<div className={styles.bar}></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
