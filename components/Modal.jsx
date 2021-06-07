import React from "react";
import styles from "../styles/Modal.module.css";
import Image from "next/image";

const Modal = ({ modalData, modalHandler }) => {
	const projects = modalData.projects;

	return (
		<div
			className={`${styles.modalContainer} ${modalData.dark && styles.dark} ${
				modalData.gray && styles.gray
			}`}>
			<div className={styles.contentContainer}>
				{modalData.vimeo ? (
					<div
						style={{
							padding: "56.25% 0 0 0",
							marginTop: "90px",
							position: "relative",
						}}>
						<iframe
							src={`${modalData.vimeo}`}
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								width: "100%",
								height: "100%",
							}}
							frameborder='0'
							allow='autoplay; fullscreen; picture-in-picture'
							allowfullscreen></iframe>
					</div>
				) : null}
				{projects.map((project, i) => (
					<div key={`${project.title}${i}`} className={styles.project}>
						<div className={styles.modalContent}>
							<div className={styles.modalText}>
								<div className={styles.titleYear}>
									<h1 className={styles.title}>{project.title}</h1>
									<h2 className={styles.year}>{project.year}</h2>
								</div>
								<h2 className={styles.sub}>{project.sub}</h2>
								<p className={styles.description}>{project.description}</p>
							</div>
							<div className={styles.icons}>
								{project.icon1 && (
									<Image src={project.icon1} width={50} height={50} />
								)}
								{project.icon2 && (
									<Image src={project.icon2} width={50} height={50} />
								)}
								{project.icon3 && (
									<Image src={project.icon3} width={50} height={50} />
								)}
							</div>
						</div>
						<div className={styles.imageContainer}>
							{project.workflow && <h4 className={styles.workflow}>Work Process</h4>}
							{project.images.map((image, i) => (
								<div key={`${image}${i}`} className={styles.imageItem}>
									{image.subtitle ? (
										<div className={styles.subtitleContainer}>
											<p className={styles.imgSubtitle}>{image.subtitle}</p>
											{image.palette ? (
												<img
													src={image.palette}
													alt={"storyboard color palette"}
													height='25px'
												/>
											) : null}
										</div>
									) : null}

									{image.text ? (
										<p className={styles.imageText}>{image.text}</p>
									) : null}
									<img
										className={styles.image}
										src={image.source}
										alt={"Artwork by Ji Seon Lee"}
									/>
									{image.footer ? (
										<div className={styles.footer}>{image.footer}</div>
									) : null}
								</div>
							))}
						</div>
					</div>
				))}
				<div className={`${styles.footer} ${styles.imageItem}`} style={{ height: "50px" }}>
					{modalData.copy}
				</div>
			</div>
			<button className={styles.xButton} onClick={() => modalHandler()}>
				<div className={styles.x}></div>
			</button>
		</div>
	);
};

export default Modal;
