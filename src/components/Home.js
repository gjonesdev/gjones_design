// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="main-container">
			<div className="main-text">
				Hello There. <br /> My name is <u className="name-under"><u className="red-under">Gaetano</u> Jones</u> and I am a designer and developer.
				<br />
				<br />
				<Link to="/Work" className="link"><a>UI and Web Design</a></Link> are my primary focuses, <br /> but I like to make <Link to="/otherstuff" className="link">other stuff</Link> too.
			</div>
		</div>
	)
}

export default Home;