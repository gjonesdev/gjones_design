// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function OtherStuff() {
	return (
		<div className="container">
			<div className="main-text">
				{/* <span className="block"></span> */}
				<h1>Other Stuff.</h1><h2>Everyone has a junk drawer... <br />I just have some cool junk.</h2>
				<Link to="/LogoDesign" className="link">Logo<br />Design</Link>
				<Link to="/GraphicDesign" className="link">Graphic<br />Design</Link>
				<Link to="/AugmentedReality" className="link">Augmented<br />Reality</Link>
				<Link to="/CreativeCoding" className="link">Creative<br />Coding</Link>
			</div>
		</div>
	)
}

export default OtherStuff;