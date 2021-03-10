// cSpell:enableCompoundWords
import React from "react";

var position = window.pageYOffset || document.documentElement.scrollTop;
var drag = 10;

if (window.location.pathname === "") {
	window.onscroll = function (e) {
		var scroll = window.pageYOffset || document.documentElement.scrollTop;
		if (scroll > position + drag) {
			var path = window.location + "Home";
			console.log(path);
			window.location.replace(path);
		}
	}
}

function Welcome() {
	return (
		<div>
			<div className="wrapper">
				<div className="welcome-container">
					<h1 id="welcome-header1">Wel<br />come<span className="period">.</span></h1>
					<h2 id="welcome-header2">To The Web<br />To Design<br />To Me</h2>
				</div>
				<div className="welcome-container">
					<div id="welcome-header3">:&#41;</div>
				</div>
				<div id="home-scroll">
					<p> Let's get started <br /> \/</p>
				</div>

			</div>

			<div id="section-2">text
			</div>
		</div>
	)
}

export default Welcome;