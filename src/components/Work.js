// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function Work() {
	return (
		<div>
			<div className="page-title">
				{/* <span className="block"></span> */}
				<h1>UI and Web Design<span className="period">.</span></h1><h2>Designer by day, developer also by day.</h2>
			</div>
			<div className="site-link">
				<div><Link to="/SwapStop">SwapStop<span className="period">.</span></Link><img src="#" alt="#" /></div>
				<div><Link to="/FlettExchange">Flett Exchange<span className="period">.</span></Link><img src="#" alt="#" /></div>
			</div>
			<div className="site-link">
				Some other non ui stuff blah blah blah
			</div>
		</div>
	)
}

export default Work;