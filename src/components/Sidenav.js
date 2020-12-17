// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function Sidenav() {
	return (
		// <div className="sidenav">
		<div>
			<Menu width={310} >
				{/*
				<a className="menu-item" href="/about">About Me</a>
				<a className="menu-item" href="/work">My Work</a>
				<a className="menu-item" href="/contact">Contact</a> */}
				<Link to="/Home" className="menu-item logo"><u className="redunder">Gaetano</u><br />Jones</Link>
				<Link to="/Contact">Contact</Link>
			</Menu>
			<hr className="basebar" />
		</div>
	)
}

export default Sidenav;