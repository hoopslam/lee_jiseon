import React from "react";
import ArrowButton from "./ArrowButton";
import styles from "../styles/Header.module.css"
import Image from "next/image"

const Header = () => {
	return (
		<section className={styles.header}>
			<header id='home' className={styles.headerContainer}>
				<div className={styles.headerContentContainer}>
					<h1 className={styles.headerContentTitle}>LEE JI SEON</h1>
					<h2 className={styles.headerContentSubtitle}>PORTFOLIO</h2>
					<p className={styles.headerContentDescription}>
						Motion Graphic Designer
						<br />
						Illustrator
						<br />
						Cat Butler
					</p>
				</div>
				<div className={styles.hero}>
					<Image
						src='/hero.jpg'
						alt='Characterized picture of Lee Jiseon with her cat'
						layout='fill'
						objectFit='contain'
						quality={100}
					/>
				</div>
			</header>
			<ArrowButton />
		</section>
	);
};

export default Header;
