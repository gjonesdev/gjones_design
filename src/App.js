// cSpell:enableCompoundWords

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact"


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<Router>
				<Sidenav />
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/Contact" component={Contact} />
				</Switch>

			</Router>
		);
	}
}

export default App;
