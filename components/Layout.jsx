import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
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
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
