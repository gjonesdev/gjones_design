// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function Home() {
	return (
		<div className="container">
			<div className="main-text">
				{/* <span className="block"></span> */}
				<p>Hello There. <br />My name is <u className="name-under"><u className="red-under">GAETANO</u> JONES</u>, but you can call me Guy.<br /> <br />I am a designer and developer.
				<br />
					<br />
					<Link to="/Work">UI AND WEB DESIGN</Link> are my primary focuses, <br /> but I like to make <Link to="/OtherStuff">OTHER STUFF</Link> too.</p>
			</div>
		</div>
	)
}

export default Home;