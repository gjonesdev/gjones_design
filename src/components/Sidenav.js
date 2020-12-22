// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";

import "./Sidenav.css";

function openNav() {
	document.getElementById("navopenbtn").style.visibility = "hidden";
	document.getElementById("navclosebtn").style.visibility = "visible";
	document.getElementById("overlay").style.width = "16%";
	document.getElementById("dim").style.height = "100%";
	document.getElementById("overlay-content").style.visibility = "visible";
};

function closeNav() {
	document.getElementById("navclosebtn").style.visibility = "hidden";
	document.getElementById("navopenbtn").style.visibility = "visible";
	document.getElementById("overlay-content").style.visibility = "hidden";
	document.getElementById("overlay").style.width = "3%";
	document.getElementById("dim").style.height = "0%";
};

function Sidenav(props) {
	return (
		<div>
			<div id="overlay">
				<GoThreeBars id="navopenbtn" onClick={() => openNav()} />
				<GoX id="navclosebtn" onClick={() => closeNav()} />
				<div id="overlay-content">
					<Link to="/Home" onClick={() => closeNav()} >Home</Link>
					<Link to="/About" onClick={() => closeNav()} >About Me</Link>
					<Link to="/Work" onClick={() => closeNav()} >My Work</Link>
					<Link to="/Contact" onClick={() => closeNav()} >Contact</Link>
				</div>
			</div>
			<div id="dim">
			</div>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;