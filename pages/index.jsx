import { useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import animations from "../public/assets/animations/animations";
import Header from "../components/Header"

export default function Home() {
	const [modalActive, setModalActive] = useState(false);

	return (
		<Layout>
			<Header />
			<section id='animations' className={styles.animations}>
				<h2>ANIMATIONS</h2>
				<div className={styles.gridContainer}>
					{animations.map((animation) => (
						<div className={styles.gridItem}>
							<Image src={animation.thumb} width={300} height={300} />
						</div>
					))}
				</div>
				<div className={styles.arrowContainer}>
					<Link href='#illustrations'>
						<a>
							<div className={styles.arrow}></div>
						</a>
					</Link>
				</div>
			</section>
			<section id='illustrations' className={styles.illustrations}>
				<h2>ILLUSTRATIONS</h2>
				<div className={styles.arrowContainer}>
					<Link href='#infographics'>
						<a>
							<div className={styles.arrow}></div>
						</a>
					</Link>
				</div>
			</section>
			<section id='infographics' className={styles.infographics}>
				<h2>Infographics</h2>
				<div className={styles.arrowContainer}>
					<Link href='#contact'>
						<a>
							<div className={styles.arrow}></div>
						</a>
					</Link>
				</div>
			</section>
			<section id='contact' className={styles.contact}>
				<h2>CONTACT ME</h2>
			</section>
		</Layout>
	);
}
