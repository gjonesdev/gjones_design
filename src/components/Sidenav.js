// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";

import "./Sidenav.css";

function Sidenav(props) {
	return (
		<div>
			<div id="sidenav" className="overlay">
				<GoThreeBars id="navopenbtn" onClick={() => props.openNav()} />
				<GoX id="navclosebtn" onClick={() => props.closeNav()} />
				<div id="overlay-content">
					<a href="/about">About Me</a>
					<a href="/work">My Work</a>
					<a href="/contact">Contact</a>
				</div>
			</div>
			<div id="dim">
			</div>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;