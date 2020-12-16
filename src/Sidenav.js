// cSpell:enableCompoundWords

import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class Sidenav extends Component {
	render() {
		return (
			// <div className="sidenav">
			<Menu width={310} >

				<a className="menu-item" href="/home" className="logo"><u className="redunder">Gaetano</u><br />Jones</a>
				<a className="menu-item" href="/about">About Me</a>
				<a className="menu-item" href="/work">My Work</a>
				<a className="menu-item" href="/contact">Contact</a>
			</Menu>
			// </div>
		)
	}
}

export default Sidenav;