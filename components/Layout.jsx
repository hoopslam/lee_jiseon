import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, dimLights }) => {
	return (
		<div>
			<Head>
				<title>Lee Jiseon</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Illustrator, Animator, and Character Designer from Seoul!'
				/>
			</Head>
			{dimLights ? (
				<main className={styles.dimLights}>{children}</main>
			) : (
				<>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</div>
	);
};

export default Layout;
