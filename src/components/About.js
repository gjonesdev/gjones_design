// cSpell:enableCompoundWords
import React from "react";

var position = window.pageYOffset || document.documentElement.scrollTop;
var drag = 10;
var currentScroll = "section-1";

// function aboutScroll() {
// 	// if (window.location.pathname === "/About") {
// 	window.onscroll = function (e) {
// 		if ((document.getElementById("section-1") && document.getElementById("section-2")) !== null) {
// 			var scroll = window.pageYOffset || document.documentElement.scrollTop;
// 			if (scroll > position + drag) {
// 				currentScroll = "section-2";
// 			} else if (scroll < position - drag) {
// 				currentScroll = "section-1";
// 			}
// 			document.getElementById(currentScroll).scrollIntoView({ behavior: 'smooth', block: 'center' })
// 			position = scroll;
// 		}
// 	}
// }


function About() {
	// aboutScroll();
	window.onscroll = function (e) {
		if ((document.getElementById("section-1") && document.getElementById("section-2")) !== null) {
			var scroll = window.pageYOffset || document.documentElement.scrollTop;
			if (scroll > position + drag) {
				currentScroll = "section-2";
				console.log(currentScroll);
			} else if (scroll < position - drag) {
				currentScroll = "section-1";
				console.log(currentScroll);
			}
			document.getElementById(currentScroll).scrollIntoView({ behavior: 'smooth', block: 'center' })
			position = scroll;
		}
	}

	return (
		<div>
			<div id="section-1">
				<div className="page-title">
					<h1>About Me<span className="period">.</span></h1><h2>Allow me to reintroduce myself:</h2>
				</div>
				<div className="about-text">
					<h2><u>I'm the Guy<span className="period">.</span></u></h2>
					<br />
					<p>At least that's what my friends like to call me. Partially because it's my name, but also because I'm the Guy that does the thing that you need to do:</p>
					<br />
					<ul>
						<li>Need a front page for your website? I've got you covered.</li>
						<li>Visuals a little out of date and need refreshing? I'm on it.</li>
						<li>Miscellaneous design work that wasn't in the job description? No problem.</li>
						<li>Dull office needs someone lively, handsome, and funny? I'm your Guy.</li>
					</ul>
					<br />
					<p>Since I have experience with both front end and design, I can fill gaps that you might not have accounted for. Any task you might have, I'm the Guy for it.</p>
					{/* <p>But you already knew that. But what you didn't know is I love the retro.</p>
				<br />
				<p>Check out  this picture of my keyboard:</p> */}
				</div>
			</div>
			<div id="home-scroll">
				<p>\/</p>
			</div>
			<div id="section-2">text
				</div>
		</div>
	)
}

export default About;