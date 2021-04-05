// cSpell:enableCompoundWords
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Mousewheel]);

function About() {
	return (
		<Swiper
			direction={{ vertical: true }}
			mousewheel={true}
			// cssMode={true}
			// mousewheel={{ releaseOnEdges: true }}
			slidesPerView={1}
			spaceBetween={250}
			// height={0}
			speed={1000}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>

				<div className="page-title">
					<h1>About Me<span className="period">.</span></h1><h2>Allow me to reintroduce myself:</h2>
				</div>
				<div className="about-text">
					<h2><u>I'm the Guy<span className="period">.</span></u></h2>
					<br />
					<p>At least that's what my friends like to call me. Partially because it's my name, but also because I'm the Guy that does the thing that you need to do:</p>
					<br />
					<ul>
						<li>Need a front page for your website? I've got you covered.</li>
						<li>Visuals a little out of date and need refreshing? I'm on it.</li>
						<li>Miscellaneous design work that wasn't in the job description? No problem.</li>
						<li>Dull office needs someone lively, handsome, and funny? I'm your Guy.</li>
					</ul>
					<br />
					<p>Since I have experience with both front end and design, I can fill gaps that you might not have accounted for. Any task you might have, I'm the Guy for it.</p>

				</div>

			</SwiperSlide>
			<SwiperSlide>
				<p>But you already knew that. But what you didn't know is I love the retro.</p>
				<br />
				<p>Check out  this picture of my keyboard:</p>
			</SwiperSlide>
		</Swiper>
	)
}

export default About;