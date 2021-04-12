// cSpell:enableCompoundWords
import React from "react";

function Contact() {
	return (
		<div>
			<div className="page-title">
				<h1>Contact<span className="period">.</span></h1><h2>Drop a line.</h2>
			</div>

			<div>
				<div>
					<div className="main-text">
						<p>This page is still under construction, but in the meantime any inquiries can be directed to my inbox mail@gjones.design.</p>
					</div >
					<form method="POST" action="./contact.php" id="contact-form">
						<h2>Contact us</h2>
						<p><label>First Name:</label> <input name="name" type="text" /></p>
						<p><label>Email Address:</label> <input name="email" type="text" /></p>
						<p><label>Message:</label> <textarea name="message"></textarea> </p>
						<p><input name="sendflag" type="submit" value="send" /></p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact;