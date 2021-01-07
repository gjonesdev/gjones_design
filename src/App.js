// cSpell:enableCompoundWords

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Work from "./components/Work";
import OtherStuff from "./components/OtherStuff";
import LogoDesign from "./components/LogoDesign";
import GraphicDesign from "./components/GraphicDesign";
import AugmentedReality from "./components/AugmentedReality";
import CreativeCoding from "./components/CreativeCoding";
import NotFound from "./components/NotFound";

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			loading: true,
// 		}
// 		// this.openNav = this.openNav.bind(this);
// 		// this.closeNav = this.closeNav.bind(this);
// 	}
// 	componentDidMount() {
// 		setTimeout(() => this.setState({ loading: false }), 3000);
// 	}

function App() {
	// const [isLoading, setLoading] = useState(true);
	// function fakeRequest() {
	// 	return new Promise(resolve => setTimeout(() => resolve(), 2500));
	// }

	// useEffect(() => {
	// 	fakeRequest().then(() => {
	// 		const el = document.querySelector(".spinner");
	// 		if (el) {
	// 			el.remove(); setLoading(!isLoading);
	// 		}
	// 	});
	// }, []);

	// if (isLoading) {
	// 	return <Loading />;
	// }

	return (
		<Router>
			<Sidenav />
			<div className="outer-container">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/Contact" component={Contact} />
					<Route exact path="/Work" component={Work} />
					<Route exact path="/OtherStuff" component={OtherStuff} />
					<Route exact path="/LogoDesign" component={LogoDesign} />
					<Route exact path="/GraphicDesign" component={GraphicDesign} />
					<Route exact path="/AugmentedReality" component={AugmentedReality} />
					<Route exact path="/CreativeCoding" component={CreativeCoding} />
					{/* <Route exact path="/" component={Contact} />
					<Route exact path="/" component={Contact} /> */}
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>

	);
}

export default App;
