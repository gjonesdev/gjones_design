// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import { IconContext } from "react-icons";

import "./Sidenav.css";

function openNav() {
	document.getElementById("navclosebtn").style.visibility = "visible";
	document.getElementById("navopenbtn").style.visibility = "hidden";
	document.getElementById("sidenav").style.marginLeft = "0px";
	document.getElementById("dim").style.height = "100%";
}

function closeNav() {
	document.getElementById("navclosebtn").style.visibility = "hidden";
	document.getElementById("navopenbtn").style.visibility = "visible";
	document.getElementById("sidenav").style.marginLeft = "-310px";
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
					<Link to="/" onClick={() => closeNav()} >Home</Link>
					<Link to="/About" onClick={() => closeNav()} >About Me</Link>
					<Link to="/Work" onClick={() => closeNav()} >My Work</Link>
					<Link to="/OtherStuff" onClick={() => closeNav()} >Other Stuff</Link>
					<Link to="/Contact" onClick={() => closeNav()} >Contact</Link>
				</div>
			</div>
			<div id="sidenav-bar"></div>
			<div id="dim" onClick={() => closeNav()}>
			</div>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;