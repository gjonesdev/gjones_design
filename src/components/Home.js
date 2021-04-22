// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Asterisk from "./Asterisk";
import P5Wrapper from "react-p5-wrapper";

function Home() {
	return (
		<div class="scroller">
			<section>
				<div className="asterisk">
					<h1>Welcome<span className="period">.</span></h1>
					<h2>I hope you like fun.</h2>
					<P5Wrapper sketch={Asterisk} />
				</div>
			</section>
			{/* <div id="p5_loading">Loading Asterisk*<br />Please Wait</div> */}


			<section id="fadein">
				<div className="page-title">
					{/* <span className="block"></span> */}
					<h1>Hi there<span className="period">.</span></h1><h2>How is your week going?</h2>
				</div>
				<div className="main-text">
					<p>My name is <Link to="/About" className="link name-under"><u className="red-under">GAETANO</u> JONES</Link>, but you can call me Guy.</p>
					<br />
					<p>I am a designer and developer. Specifically, I do <Link to="/Work" className="link">UI/UX DESIGN</Link> and <Link to="/Work" className="link">FRONT END DEVELOPMENT.</Link></p>
					<br />
					<p>Sometimes I like to make <Link to="/OtherStuff" className="link">OTHER STUFF</Link> too.</p>
				</div >
			</section>
		</div>
	)
}

export default Home;
