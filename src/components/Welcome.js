// cSpell:enableCompoundWords
import React from "react";
import { Redirect } from "react-router-dom";
// import Home from "./Home";

var position = window.pageYOffset || document.documentElement.scrollTop;
var drag = 10;

function Welcome() {

	window.onscroll = function (e) {
		// if ((document.getElementById("section-1") && document.getElementById("section-2")) !== null) {
		var scroll = window.pageYOffset || document.documentElement.scrollTop;
		if (scroll > position + drag) {
			console.log("moving");
			return (<Redirect to="/Home" />)
		}
		document.getElementById("section-1").scrollIntoView({ behavior: 'smooth' })
		position = scroll;
		// }
	}

	return (
		<div>
			<div id="section-1" className="wrapper">
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