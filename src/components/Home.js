// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function Home() {
	return (
		<div className="container">
			<div className="main-text">
				<span className="block"></span>
				<p>Hello There. <br />My name is <u className="name-under"><u className="red-under">Gaetano</u> Jones</u> and I am a designer and developer.
				<br />
					<br />
					<Link to="/Work" className="link"><a>UI and Web Design</a></Link> are my primary focuses, <br /> but I like to make <Link to="/otherstuff" className="link">other stuff</Link> too.</p>
			</div>
		</div>
	)
}

export default Home;