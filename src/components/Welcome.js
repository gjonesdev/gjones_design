// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Asterisk from "./Asterisk";
import P5Wrapper from "react-p5-wrapper";

var position = window.pageYOffset || document.documentElement.scrollTop;
var drag = 10;
var currentScroll = "section-1";

function Welcome() {

	// window.onscroll = function (e) {
	// 	if ((document.getElementById("section-1") && document.getElementById("section-2")) !== null) {
	// 		var scroll = window.pageYOffset || document.documentElement.scrollTop;

	// 		if (scroll > position + drag) {
	// 			currentScroll = "section-2";
	// 			console.log(currentScroll);
	// 		} else if (scroll < position - drag) {
	// 			currentScroll = "section-1";
	// 			console.log(currentScroll);
	// 		}
	// 		document.getElementById(currentScroll).scrollIntoView({ behavior: 'smooth', block: 'center' })
	// 		position = scroll;
	// 	}
	// }

	return (
		<div>
			<div id="section-1" className="wrapper">
				<div>
					<h1 id="welcome-header">Welcome<span className="period">.</span></h1>
				</div>
				<div className="asterisk" >
					<P5Wrapper sketch={Asterisk} />
				</div>
				{/* <div id="p5_loading">Loading Asterisk*<br />Please Wait</div> */}
			</div>

			<div id="section-2">
				<div className="page-title">
					{/* <span className="block"></span> */}
					<h1>Hi there<span className="period">.</span></h1><h2>How is your week going?</h2>
				</div>
				<div className="main-text">
					<p>My name is <Link to="/About" className="link name-under"><u className="red-under">GAETANO</u> JONES</Link>, but you can call me Guy.</p>
					<br />
					<p>I am a designer and developer. Specifically, I do <Link to="/Work" className="link">UI/UX DESIGN</Link> and <br /><Link to="/Work" className="link">FRONT END DEVELOPMENT</Link>.</p>
					<br />
					<p>Sometimes I like to make <Link to="/OtherStuff" className="link">OTHER STUFF</Link> too.</p>
				</div >
			</div>
		</div>
	)
}

// console.log("moving");
// 				var url = window.location + "Home";
// 				window.location.replace(url);

export default Welcome;