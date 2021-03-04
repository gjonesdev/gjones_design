// cSpell:enableCompoundWords
import React from "react";

function About() {
	return (
		<div>
			<div className="page-title">
				<h1>About Me<span className="period">.</span></h1><h2>Allow me to reintroduce myself:</h2>
			</div>
			<div className="main-text">
				<p>I'm the Guy.</p>
				<br />
				<p>At least that's what my friends like to call me. Not just because that's my name, but because I'm the guy that does the thing that you need to do:</p>
				<br />
				<ul>
					<li>Need a front page for your website? I've got you covered.</li>
					<li>Visuals a little out of date and need refreshing? No problem.</li>
					<li>Didn't finish that trifold display you need for your senior project? You're in good hands.</li>
				</ul>
				<br />
				{/* <p>You already knew that. But what you didn't know is I love the retro.</p>
				<br />
				<p>Check out  this picture of my keyboard:</p> */}
			</div>
		</div>
	)
}

export default About;