import React from "react";

const Contact = () => {
	return (
		<form method="POST">
			<label for='name'>Name</label>
			<input id='name' type='text' autocomplete='name' required />
            <label for='email'>Email</label>
			<input id='email' type='email' autocomplete='email' required />
            <label for='subject'>subject</label>
			<input id='subject' type='text' autocomplete='subject' required />
            <label for='message'>Message</label>
			<input id='message' type='textarea' autocomplete='message' required />
			<button type='submit'>Send Message</button>
		</form>
	);
};

export default Contact;
