// cSpell:enableCompoundWords

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./components/navigation/Loading";
import Sidenav from "./components/navigation/Sidenav";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import OtherStuff from "./components/OtherStuff";
import LogoDesign from "./components/otherstuff/LogoDesign";
import GraphicDesign from "./components/otherstuff/GraphicDesign";
import AugmentedReality from "./components/otherstuff/AugmentedReality";
import CreativeCoding from "./components/otherstuff/CreativeCoding";
import NotFound from "./components/navigation/NotFound";


function App() {
	return (
		<Router>
			<Sidenav />
			<div className="outer-container">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/About" component={About} />
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
