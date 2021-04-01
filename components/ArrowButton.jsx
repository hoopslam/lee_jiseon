import React from "react";
import styles from "../styles/ArrowButton.module.css"
import Link from "next/link"

const ArrowButton = () => {
	return (
		<div className={styles.arrowContainer}>
			<Link href='#animations'>
				<a>
					<div className={styles.arrow}></div>
				</a>
			</Link>
		</div>
	);
};

export default ArrowButton;
