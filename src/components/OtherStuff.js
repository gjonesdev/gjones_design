// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function OtherStuff() {
	return (
		<div>
			{/* <div className="page-title">
				<h1>Other Stuff.</h1><h2>Everyone has a junk drawer... <br />I just have some cool junk.</h2>
			</div>
			<div>
				<ul className="nav-list">
					<li><Link to="/LogoDesign">Logo<br />Design</Link></li>
					<li><Link to="/GraphicDesign">Graphic<br />Design</Link></li>
					<li><Link to="/AugmentedReality">Augmented<br />Reality</Link></li>
					<li><Link to="/CreativeCoding">Creative<br />Coding</Link></li>
				</ul>
			</div> */}
			<div className="page-title">
				<h1>Other Stuff.</h1><h2>Everyone has a junk drawer... <br />I just have some cool junk.</h2>
			</div>
			<div class="category-link">
				<Link to="/LogoDesign">Logo<br />Design</Link>
				<Link to="/GraphicDesign">Graphic<br />Design</Link>
				<Link to="/AugmentedReality">Augmented<br />Reality</Link>
				<Link to="/CreativeCoding">Creative<br />Coding</Link>
			</div>
			{/* <span className="block"></span> */}
			{/* <span className="block"></span> */}
		</div>
	)
}

export default OtherStuff;