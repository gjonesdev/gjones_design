// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";

import "./Sidenav.css";

function openNav() {
	document.getElementById("navopenbtn").style.visibility = "hidden";
	document.getElementById("navclosebtn").style.visibility = "visible";
	document.getElementById("sidenav").style.width = "310px";
	document.getElementById("dim").style.height = "100%";
	document.getElementById("sidenav-content").style.visibility = "visible";
};

function closeNav() {
	document.getElementById("navclosebtn").style.visibility = "hidden";
	document.getElementById("navopenbtn").style.visibility = "visible";
	document.getElementById("sidenav-content").style.visibility = "hidden";
	document.getElementById("sidenav").style.width = "55px";
	document.getElementById("dim").style.height = "0%";
};

function Sidenav(props) {
	return (
		<div>
			<div id="sidenav">
				<GoThreeBars id="navopenbtn" onClick={() => openNav()} />
				<GoX id="navclosebtn" onClick={() => closeNav()} />
				<div id="sidenav-content">
					<div className="logo"><u className="red-under">Gaetano</u><br />Jones</div>
					<Link to="/Home" onClick={() => closeNav()} title="Home">Home</Link>
					<Link to="/About" onClick={() => closeNav()} title="About Me">About Me</Link>
					<Link to="/Work" onClick={() => closeNav()} title="My Work">My Work</Link>
					<Link to="/OtherStuff" onClick={() => closeNav()} title="Other Stuff">Other Stuff</Link>
					<Link to="/Contact" onClick={() => closeNav()} title="Contact">Contact</Link>
				</div>
			</div>
			<div id="dim">
			</div>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;