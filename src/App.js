// cSpell:enableCompoundWords

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		}
		this.openNav = this.openNav.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}
	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 3000);
	}

	openNav() {
		document.getElementById("navopenbtn").style.visibility = "hidden";
		document.getElementById("navclosebtn").style.visibility = "visible";
		document.getElementById("overlay").style.width = "16%";
		document.getElementById("dim").style.height = "100%";
		document.getElementById("overlay-content").style.visibility = "visible";
	}

	closeNav() {
		document.getElementById("navclosebtn").style.visibility = "hidden";
		document.getElementById("navopenbtn").style.visibility = "visible";
		document.getElementById("overlay-content").style.visibility = "hidden";
		document.getElementById("overlay").style.width = "3%";
		document.getElementById("dim").style.height = "0%";
	}

	render() {
		return (
			<Router>
				<Sidenav closeNav={this.closeNav} openNav={this.openNav} />
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/Contact" component={Contact} />
					{/* {this.state.loading ? <Loading /> : <Sidenav />} */}
				</Switch>
			</Router>

		);
	}
}

export default App;
