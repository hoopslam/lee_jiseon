import React from "react";
import styles from "../styles/ArrowButton.module.css"
import Link from "next/link"

const ArrowButton = ({next}) => {
	return (
		<div className={styles.arrowContainer}>
			<Link href={`#${next}`}>
				<a>
					<div className={styles.arrow}></div>
				</a>
			</Link>
		</div>
	);
};

export default ArrowButton;
