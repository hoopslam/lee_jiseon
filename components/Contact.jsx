import React from "react";
import styles from "../styles/Contact.module.css"

const Contact = () => {
    const sendMessage = e => {
        e.preventDefault()  //don't redirect the page on submit
    }

	return (
		<form className={styles.contactContainer} onSubmit={sendMessage}>
			<label className="sr-only" htmlFor='name'>Name</label>
			<input id='name' name="name" className={styles.classname} placeholder="Full Name" type='text' autoComplete='name' required />
            <label className="sr-only" htmlFor='email'>Email</label>
			<input id='email' name="name" className={styles.classname} placeholder="Full Name" type='email' autoComplete='email' required />
            <label className="sr-only" htmlFor='subject'>subject</label>
			<input id='subject' name="name" className={styles.classname} placeholder="Full Name" type='text' autoComplete='subject' required />
            <label className="sr-only" htmlFor='message'>Message</label>
			<input id='message' name="name" className={styles.classname} placeholder="Full Name" type='textarea' autoComplete='message' required />
			<button type='submit'>Send Message</button>
		</form>
	);
};

export default Contact;
