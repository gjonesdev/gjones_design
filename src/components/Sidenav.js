// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";

import "./Sidenav.css";

function Sidenav(props) {
	return (
		<div>
			<div id="overlay">
				<GoThreeBars id="navopenbtn" onClick={() => props.openNav()} />
				<GoX id="navclosebtn" onClick={() => props.closeNav()} />
				<div id="overlay-content">
					<Link to="/Home" onClick={() => props.closeNav()} >Home</Link>
					<Link to="/About" onClick={() => props.closeNav()} >About Me</Link>
					<Link to="/Work" onClick={() => props.closeNav()} >My Work</Link>
					<Link to="/Contact" onClick={() => props.closeNav()} >Contact</Link>
				</div>
			</div>
			<div id="dim">
			</div>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;