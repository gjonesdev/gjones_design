// cSpell:enableCompoundWords

import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div onscroll="welcomeScroll()" class="container">
				{/* <div id="homeheader1"> Wel<br />come.</div>
				<div id="homeheader2"> To The Web<br />To Design<br />To Me</div> */}
				<div className="homescroll"><button onclick="welcomeScroll()">Scroll</button></div>
				<div id="homeheader3">:&#41;</div>
				<hr className="basebar" />
			</div>
		)
	}
}

export default Home