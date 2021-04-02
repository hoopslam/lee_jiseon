import React from "react";
import styles from "../styles/Modal.module.css";
import Image from "next/image";

const Modal = ({ modalData, modalHandler }) => {
	return (
		<div className={styles.modalContainer} style={{ top: `${modalData.topPosition}px` }}>
			<div className={styles.contentContainer}>
				<div className={styles.modalContent}>
					<div className={styles.modalText}>
						<div className={styles.titleYear}>
							<h1 className={styles.title}>{modalData.title}</h1>
							<h2 className={styles.year}>{modalData.year}</h2>
						</div>
						<h2 className={styles.sub}>{modalData.sub}</h2>
						<p className={styles.description}>{modalData.description}</p>
					</div>
					<div className={styles.icons}>
						<Image src={modalData.icon1} width={50} height={50} />
						<Image src={modalData.icon2} width={50} height={50} />
						{modalData.icon3 && <Image src={modalData.icon3} width={50} height={50} />}
					</div>
				</div>
				<div className={styles.imageContainer}>
					<div className={styles.imageItem}>
						<Image
							src={modalData.src1}
							alt={modalData.description}
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<div className={styles.imageItem}>
						<Image
							src={modalData.src2}
							alt={modalData.description}
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<div className={styles.imageItem}>
						<Image
							src={modalData.src3}
							alt={modalData.description}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			{console.log(modalData)}
			<button className={styles.xButton} onClick={() => modalHandler()}>
				<div className={styles.x}></div>
			</button>
		</div>
	);
};

export default Modal;
