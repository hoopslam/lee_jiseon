import React, { useState } from "react";
import ArrowButton from "./ArrowButton";
import styles from "../styles/Section.module.css";
import Image from "next/image";
import Modal from "./Modal";

const Section = ({ section, sectionData, next }) => {
	const [modalOn, setModalOn] = useState(false);
	const [modalData, setModalData] = useState({});

	const modalHandler = (data = null) => {
		setModalData(data);
		setModalOn(() => !modalOn);
	};

	return (
		<section id={section} className={`styles.${section}`}>
			{modalOn ? (
				<>
					<div className={styles.dim} onClick={() => modalHandler()}></div>
					<Modal modalData={modalData} modalHandler={modalHandler} />
				</>
			) : null}
			<h2 className={styles.sectionTitle}>{section}</h2>
			<div className={styles.gridContainer}>
				{sectionData.map((data) => (
					<div
						key={data.id}
						className={styles.gridItem}
						onClick={() => modalHandler(data)}>
						<Image src={data.thumb} width={300} height={300} />
					</div>
				))}
			</div>
			<ArrowButton next={next} />
		</section>
	);
};

export default Section;
