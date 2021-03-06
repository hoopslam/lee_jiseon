import React from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { Button } from "@material-ui/core";
import Image from "next/image";

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm("service_9ksbpb7", "template_jnsssxq", e.target, "user_zvnrnJbIVGGgsuZ4wQhdB")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<Image
					src='/assets/jisunprofile1.jpg'
					alt='profilepicture'
					className={styles.profile}
					width={200}
					height={200}
					quality={100}
				/>
				<h1>Lee Ji Seon</h1>
				<h3>Illustrator / Designer</h3>
				<h3>leejisun5064@gmail.com</h3>

				<p>Hello!</p>
				<p>
					My name is Ji Seon and I am a freelance Illustrator and Motion Graphics Designer
					from Seoul, South Korea.
				</p>
				<p>
					I love to draw, animate, and spend time with my lovely cat, Miru! If you would
					like to hire me or if you have any questions for me, please feel free to send me
					a message and I will get back to you as soon as possible! Thank you for visiting
					my site and I hope you have a wonderful day!
				</p>
			</div>
			<form className={styles.contact} onSubmit={sendEmail}>
				<input type='text' name='name' placeholder='Name' required />
				<input type='email' name='email' placeholder='Email' required />
				<input type='text' name='subject' placeholder='Subject' required />
				<textarea required name='message' cols='30' rows='8' placeholder='Your Message' />
				<div className={styles.buttonContainer}>
					<Button variant='contained' color='primary' type='submit'>
						Send Message
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
