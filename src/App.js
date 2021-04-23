// cSpell:enableCompoundWords

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, withRouter, Switch, Redirect, useParams, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import "./App.css";

import Sidenav from "./components/navigation/Sidenav";
import Home from "./components/Home";
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



function Fade(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting));
		});
		if (entry.isIntersecting) {
			if (entry.element.classList.contains("fade")) {
				entry.classList.add("visible")

			}
		}
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);

}




function App() {
	return (
		<Router>
			<Sidenav />
			<Switch>
				<Route exact path="/" component={Home} />
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
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
