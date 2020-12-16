// cSpell:enableCompoundWords

import React, { Component } from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import Sidenav from "./Sidenav";

class App extends Component {

	constructor() {
		super();
		this.state = {
			user: null
		}
	}

	render() {
		return (
			<div>
				<Sidenav />
				{!this.state.user && <Welcome user={this.state.user} />}
				<Home user={this.state.user} />
				{/* <Home /> */}
			</div>
		);
	}
}

export default App;
