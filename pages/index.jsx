import Layout from "../components/Layout";
import animations from "../public/assets/animations/animations";
import infographics from "../public/assets/infographics/infographics";
import illustrations from "../public/assets/illustrations/illustrations";
import Header from "../components/Header";
import Section from "../components/Section";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout>
			<Header next={'animations'}/>
			<Section section={'animations'} sectionData={animations} next={'illustrations'}/>
			<Section section={'illustrations'} sectionData={illustrations} next={'infographics'}/>
			<Section section={'infographics'} sectionData={infographics} next={'contact'}/>
			<section id='contact' className={styles.contact}>
				<Contact />
			</section>
		</Layout>
	);
}
