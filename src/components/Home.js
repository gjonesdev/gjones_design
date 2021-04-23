// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Asterisk from "./Asterisk";
import P5Wrapper from "react-p5-wrapper";

// function Fade(props) {
// 	const [isVisible, setVisible] = React.useState(true);
// 	const domRef = React.useRef();
// 	React.useEffect(() => {
// 		const observer = new IntersectionObserver(entries => {
// 			entries.forEach(entry => setVisible(entry.isIntersecting));
// 		});
// 		observer.observe(domRef.current);
// 		return () => observer.unobserve(domRef.current);
// 	}, []);
// 	return (
// 		<div
// 			className={`fade ${isVisible ? 'visible' : ''}`}
// 			ref={domRef}
// 		>
// 			{props.children}
// 		</div>
// 	);
// }

function Home() {
	// var fade_list = document.getElementsByClassName("fade");
	// if (fade_list < 0) {
	// 	for (var i = 0; i <= fade_list.length; i++) {
	// 		fade_list[i].style.transitionDelay = 1 * i + "s";
	// 	}
	// }

	// if (entry.isIntersecting) {
	// 	if (entry.element.classList.contains("fade")) {
	// 		entry.classList.add("visible")

	// 	}
	// }

	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {

		});
	});
	return (
		<div class="scroller">
			<section>
				<div className="asterisk">
					<h1>Welcome<span className="period">.</span></h1>
					<h2>I hope you like fun.</h2>
					<P5Wrapper sketch={Asterisk} />
				</div>
			</section>
			{/* <div id="p5_loading">Loading Asterisk*<br />Please Wait</div> */}


			<section>

				<div className="page-title fade">
					{/* <Fade> */}
					{/* <span className="block"></span> */}
					<h1>Hi there<span className="period">.</span></h1><h2>How is your week going?</h2>
					{/* </Fade> */}
				</div>
				<div className="main-text">
					{/* <Fade> */}
					<p>My name is <Link to="/About" className="link name-under"><u className="red-under">GAETANO</u> JONES</Link>, but you can call me Guy.</p>
					<br />
					{/* </Fade> */}
					{/* <Fade> */}
					<p>I am a designer and developer. Specifically, I do <Link to="/Work" className="link">UI/UX DESIGN</Link> and <Link to="/Work" className="link">FRONT END DEVELOPMENT.</Link></p>
					<br />
					{/* </Fade> */}
					{/* <Fade> */}
					<p>Sometimes I like to make <Link to="/OtherStuff" className="link">OTHER STUFF</Link> too.</p>
					{/* </Fade> */}
				</div >
			</section>
		</div >
	)
}

export default Home;
