import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import animations from "../public/assets/animations/animations";
import Header from "../components/Header";
import Section from "../components/Section";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<Layout>
			<Header next={'animations'}/>
			<Section section={'animations'} sectionData={animations} next={'illustrations'}/>
			{/* <Section section={'illustrations'} sectionData={animations} next={'infographics'}/>
			<Section section={'infographics'} sectionData={animations} next={'contact'}/> */}
			<section id='contact' className={styles.contact}>
				<Contact />
			</section>
		</Layout>
	);
}
