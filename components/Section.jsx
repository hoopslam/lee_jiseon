import React from "react";
import ArrowButton from "./ArrowButton";
import styles from "../styles/Section.module.css"
import Image from 'next/image'

const Section = ({section, sectionData, next}) => {
	return (
		<section id={section} className={`styles.${section}`}>
			<h2 className={styles.sectionTitle}>{section}</h2>
			<div className={styles.gridContainer}>
				{sectionData.map((data) => (
					<div key={data.id} className={styles.gridItem}>
						<Image src={data.thumb} width={300} height={300} />
					</div>
				))}
			</div>
			<ArrowButton next={next} />
		</section>
	);
};

export default Section;
