// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";

function OtherStuff() {
	return (
		<div>
			<div className="page-title">
				<h1>Other Stuff<span className="period">.</span></h1><h2>Everyone has a junk drawer, right?</h2>
			</div>
			<div class="category-link">
				<div><Link to="/LogoDesign">Logo<br />Design<span className="period">.</span></Link><img src="#" alt="#" /></div>
				<div><Link to="/GraphicDesign">Graphic<br />Design<span className="period">.</span></Link><img src="#" alt="#" /></div>
				<div><Link to="/AugmentedReality">Augmented<br />Reality<span className="period">.</span></Link><img src="#" alt="#" /></div>
				<div><Link to="/CreativeCoding">Creative<br />Coding<span className="period">.</span></Link><img src="#" alt="#" /></div>
			</div>
		</div>
	)
}

export default OtherStuff;