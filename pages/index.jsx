import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
	return (
		<Layout>
			<header id='home' className={styles.headerContainer}>
				<div className={styles.headerContentContainer}>
					<h1 className={styles.headerContentTitle}>LEE JI SEON</h1>
          <h2 className={styles.headerContentSubtitle}>PORTFOLIO</h2>
					<p className={styles.headerContentDescription}>Motion Graphic Designer<br/>Illustrator<br/>Cat Butler</p>
				</div>
        <div className={styles.hero}>
					<Image
						src='/../public/hero.jpg'
						alt='Characterized picture of Lee Jiseon with her cat'
						layout="fill"
            objectFit="contain"
            quality={100}
					/>
				</div>
			</header>
			<section id='animations' className={styles.animations}>
				<h1>ANIMATIONS</h1>
				<div className={styles.gridContainer}>
					<div className={styles.gridItem}>item</div>
					<div className={styles.gridItem}>item</div>
					<div className={styles.gridItem}>item</div>
					<div className={styles.gridItem}>item</div>
					<div className={styles.gridItem}>item</div>
					<div className={styles.gridItem}>item</div>
				</div>
			</section>
			<section id='illustrations' className={styles.illustrations}>
				<h1>ILLUSTRATIONS</h1>
			</section>
			<section id='contact' className={styles.contact}>
				<h1>CONTACT ME</h1>
			</section>
		</Layout>
	);
}
