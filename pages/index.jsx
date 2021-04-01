import { useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import animations from "../public/assets/animations/animations";
import Header from "../components/Header";
import Section from "../components/Section";

export default function Home() {
	const [modalActive, setModalActive] = useState(false);

	return (
		<Layout>
			<Header next={'animations'}/>
			<Section section={'animations'} sectionData={animations} next={'illustrations'} />
			{/* <Section section={'illustrations'} sectionData={animations} next={'infographics'}/>
			<Section section={'infographics'} sectionData={animations} next={'contact'}/> */}

			<section id='contact' className={styles.contact}>
				<h2>CONTACT ME</h2>
			</section>
		</Layout>
	);
}
