// cSpell:enableCompoundWords

import React, { useState, useEffect } from "react";
import "./App.css";
import { useLocation, BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Loading from "./components/navigation/Loading";
import Sidenav from "./components/navigation/Sidenav";
import Welcome from "./components/Welcome";
// import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import FlettExchange from "./components/work/FlettExchange";
import SwapStop from "./components/work/SwapStop";
import OtherStuff from "./components/OtherStuff";
import LogoDesign from "./components/otherstuff/LogoDesign";
import GraphicDesign from "./components/otherstuff/GraphicDesign";
import AugmentedReality from "./components/otherstuff/AugmentedReality";
import CreativeCoding from "./components/otherstuff/CreativeCoding";
import NotFound from "./components/navigation/NotFound";



function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}


function App() {
	return (
		<Router>
			<Sidenav />
			<ScrollToTop />
			<div className="outer-container">
				<Switch>
					<Route exact path="/" component={Welcome} />
					{/* <Route exact path="/Home" component={Home} /> */}
					<Route exact path="/About" component={About} />
					<Route exact path="/Contact" component={Contact} />
					<Route exact path="/Work" component={Work} />
					<Route exact path="/FlettExchange" component={FlettExchange} />
					<Route exact path="/SwapStop" component={SwapStop} />
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
