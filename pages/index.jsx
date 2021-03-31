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
					<p className={styles.headerContentDescription}>Hello!<br/>I'm an illustrator,<br/>motion graphics designer, <br/>and butler to my cat</p>
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
				animations
			</section>
			<section id='illustrations' className={styles.illustrations}>
				illustrations
			</section>
			<section id='contact' className={styles.contact}>
				contact me
			</section>
		</Layout>
	);
}
