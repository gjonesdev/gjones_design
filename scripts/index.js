/* Beginning of Vanilla JS Code.---------------------------------------------------*/

function openNav() {
	document.getElementById("navclosebtn").style.visibility = "visible";
	document.getElementById("navopenbtn").style.visibility = "hidden";
	document.getElementById("sidenav").style.marginLeft = "0px";
	document.getElementById("nav-dim").style.height = "100%";
}

function closeNav() {
	document.getElementById("navclosebtn").style.visibility = "hidden";
	document.getElementById("navopenbtn").style.visibility = "visible";
	document.getElementById("sidenav").style.marginLeft = "-310px";
	document.getElementById("nav-dim").style.height = "0%";
};

function showPopup() {
	popupAnimation();
}

function hidePopup() {
	popupClose();
}

function lightbox(img_path) {
	document.getElementById("img-popup").src = "/styles/images/" + img_path;
	showPopup();
}

function carouselLightbox(img_path, iscurr) {
	console.log(iscurr);
	if (iscurr === "current") {
		document.getElementById("img-popup").src = "/styles/images/" + img_path;
		showPopup();
	}
}

function pageUp() {
	console.log("pageUp");
	var gallery_items = document.getElementsByClassName("gallery-item");
	var first_item = document.getElementById("first-item");
	var index;
	for (index = 0; index < gallery_items.length; index++) {
		if (gallery_items[index] === first_item && index - 8 > 0) {
			console.log("true");
			for (var j = index; j < index + 7; j++) {
				gallery_items[j].style.display = "none";
			}
			for (var j = index; j > index - 7; j--) {
				gallery_items[j].style.display = "block";
			}
		}
	}
}

function pageDown() {
	console.log("pageDown");
	var gallery_items = document.getElementsByClassName("gallery-item");
	var last_item = document.getElementById("last-item");
	var index;
	for (index = 0; index < gallery_items.length; index++) {
		console.log("true");
		if (gallery_items[index] === last_item && index + 8 < gallery_items.length) {
			for (var j = index; j < index + 7; j++) {
				gallery_items[j].style.display = "block";
			}
			for (var j = index; j > index - 7; j--) {
				gallery_items[j].style.display = "none";
			}
		}
	}
}


// document.getElementById("prev"); item.onclick = carouselLeft();
// var el = document.getElementById("next").onclick = function () {
// 	carouselRight();
// };

// window.onload = el;
// function lightbox(img_path) {
// 	var item = document.getElementById(selection).cloneNode();
// 	item.id = "focus";
// 	document.getElementById("img-popup").removeChild(document.getElementById("focus"));
// 	document.getElementById("img-popup").appendChild(item);
// 	showPopup();
// }
function carouselLoad() {
	if (document.getElementById("prev") != null) {
		document.getElementById("prev").addEventListener("click", carouselLeft);
		console.log("added left");
	}
	if (document.getElementById("next") != null) {
		document.getElementById("next").addEventListener("click", carouselRight);
		console.log("added right");
	}
	if (document.getElementById("current") != null) {
		document.getElementById("current").removeEventListener("click", carouselRight);
		document.getElementById("current").removeEventListener("click", carouselLeft);
	}
}

function carouselLeft() {
	var carousel_items = document.getElementsByClassName("carousel-item");
	var current = document.getElementById("current");
	for (var i = 0; i <= carousel_items.length; i++) {
		if (carousel_items[i] === current) {
			if (carousel_items[i - 1] != null) {
				carousel_items[i - 1].id = "current";
				carousel_items[i].id = "next";
				if (carousel_items[i - 2] != null) {
					carousel_items[i - 2].id = "prev";
				}
				if (carousel_items[i + 1] != null) {
					carousel_items[i + 1].id = "carousel-hidden-right";
				}
			}
		}
	}
	carouselLoad();
}

function carouselRight() {
	var carousel_items = document.getElementsByClassName("carousel-item");
	var current = document.getElementById("current");
	for (var i = 0; i <= carousel_items.length; i++) {
		if (carousel_items[i] === current) {
			if (carousel_items[i + 1] != null) {
				carousel_items[i].id = "prev";
				carousel_items[i + 1].id = "current";
				if (carousel_items[i + 2] != null) {
					carousel_items[i + 2].id = "next";
				}
				if (carousel_items[i - 1] != null) {
					carousel_items[i - 1].id = "carousel-hidden-left";
				}
			}
		}
	}
	carouselLoad();
}

carouselLoad();

// window.addEventListener('keydown', function (e) {
// 	console.log(`You pressed ${e.key}`);
// }, false);

/* End of Vanilla JS Code.-------------------------------------------------------*/

/* Beginning of Barba Code.------------------------------------------------------*/

barba.init({
	preventRunning: true,
	views: [{
		namespace: 'home',
		beforeEnter({
			next
		}) {
			if (screen.width >= 720) {
				let script = document.createElement('script');
				script.src = '/scripts/p5.min.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
				next.container.appendChild(script);
				asterisk_page_enter();
			}
		},
		afterLeave({
			next
		}) {
			if (screen.width >= 820) {
				asterisk_page_leave();
			}
		},
	}],

	transitions: [{
		name: "default-transition",
		async leave(data) {
			const done = this.async();
			pageTransition();
			await delay(1000);
			done();
		},

		async after(data) {
			contentAnimation();
		},

		async once(data) {
			contentAnimation();
			// linkAnimation();
		}
	}, {
		name: "scroller-transition",
		to: {
			namespace: ['home']
		},
		async leave(data) {
			const done = this.async();
			pageTransition();
			await delay(1000);
			done();
		},

		async after(data) {
			contentAnimation();
			scrollContentAnimation();
		},

		async once(data) {
			contentAnimation();
			scrollContentAnimation();
			// imageLoad();
			// linkAnimation();
		},
	}]
});

var as = document.querySelectorAll('a[href]');
var cbk = function (e) {
	if (e.currentTarget.href === window.location.href) {
		e.preventDefault();
		e.stopPropagation();
	}
};

for (var i = 0; i < as.length; i++) {
	as[i].addEventListener('click', cbk);

}

barba.hooks.enter((data) => {
	carouselLoad();
});

/* End of of Barba Code.--------------------------------------------------------*/

/* Beginning of GSAP Code.------------------------------------------------------*/

gsap.registerPlugin(ScrollTrigger);

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

function pageTransition() {
	var tl = gsap.timeline();
	tl.to(".load-container div", {
			duration: .8,
			width: "100%",
			left: "0%",
			stagger: .2,
			ease: "power3.in",
		})
		// .set("#sidenav", {
		// 	marginLeft: "-310px"
		// })
		// .set("#navopenbtn", {
		// 	visibility: "visible"
		// })
		// .set("#navclosebtn", {
		// 	visibility: "hidden"
		// })
		// .set("#nav-dim", {
		// 	height: "0%"
		// })
		.to(".load-container div", {
			duration: .8,
			width: "100%",
			left: "100%",
			stagger: .3,
			ease: "Expo.easeInOut",
		})
		.set(".load-container div", {
			stagger: .3,
			left: "-100%",
		});
}

function contentAnimation() {
	var tl = gsap.timeline();
	tl.from(".load-content div", {
			duration: 1,
			y: 30,
			opacity: 0,
			stagger: 0.4,
			delay: 0.2,
		})
		.from(".project-item, .gallery-item", {
			duration: 1,
			y: 30,
			opacity: 0,
			stagger: 0.3,
			delay: 0.2,
		}, .8)
		.from("u", {
			duration: 1.2,
			backgroundSize: "0% 4px",
			stagger: 0.8,
		}, .8)
		.to(".back, .website-link", {
			duration: 1,
			y: 30,
			opacity: 1,
		}, 2);
}

function scrollContentAnimation() {
	gsap.from(".scroll-content div", {
		scrollTrigger: {
			scroller: ".scroller",
			trigger: ".scroll-content div",
		},
		duration: 1,
		y: 30,
		opacity: 0,
		stagger: 0.4,
		// delay: 0.2,
	});
}

// function linkAnimation() {
// 	var tl = gsap.timeline();
// 	tl.from(".project-link a", {
// 		duration: 1.2,
// 		width: "0",
// 		stagger: 0.8,
// 	}, 1.8);
// }

function popupAnimation() {
	var tl = gsap.timeline();
	tl.to("#popup-container", {
		duration: .1,
		display: "flex",
	})
	tl.to("#popup-dim", {
		duration: .5,
		opacity: 1,
	})
	tl.to("#popup-close-button", {
		opacity: "1",
	}, .3)
	tl.to("#img-popup, #info-popup", {
		duration: .5,
		opacity: 1,
		scale: 1,
	}, .2);
}

function popupClose() {
	var tl = gsap.timeline();
	tl.to("#img-popup, #info-popup", {
		duration: .3,
		opacity: 0,
		scale: .9,
	})
	tl.to("#popup-close-button", {
		opacity: "0",
	}, .1)
	tl.to("#popup-dim", {
		duration: .3,
		opacity: 0,
	}, .2)
	tl.to("#popup-container", {
		duration: .01,
		display: "none",
	});
}

/* End of GSAP Code.----------------------------------------------------------------*/

/* Beginning of APIs Code.----------------------------------------------------------*/

/* End of APIs Code.----------------------------------------------------------------*/

/* Beginning of Asterisk Code.------------------------------------------------------*/

var obstacles = [];
var bullets = [];
var pl;
var size;
var obstspeed;
var obst;
var bull;

var lives;
var obstlimit = 15;
var screentop;
var screenbot;

var shoot = false;
var up = false;
var down = false;

var on_page;
var game_run;
var paused;

var points;
var showboot = true;

// var font;

/////////
//main//
////////

function setup() {
	var gameCanvas = createCanvas(windowWidth, windowHeight);
	gameCanvas.parent("asterisk-canvas");
	on_page = true;
	screentop = 140;
	screenbot = height - 80;
	background("#222222");
	fill("white");
	noStroke();
	textSize(24);
	rectMode(CENTER);
}

function draw() {
	background("#222222");
	if (showboot) {
		bootscreen();
	} else if (lives <= 0) {
		let data = {
			"user": "niz",
			"score": points
		};

		fetch("/post/data/here", {
			method: "POST",
			body: JSON.stringify(data)
		}).then(res => {
			console.log("Request complete! response:", res);
		});
		gameoverscreen();
	} else {
		asterisk();
	}

}



function asterisk_page_enter() {
	setup();
	if (showboot) {
		bootscreen();
	} else if (lives <= 0) {
		document.getElementById("welcome").style.marginTop = "0";
		document.getElementById("scroll-home").style.marginBottom = "5%";
		document.getElementById("scroll-home").style.alignSelf = "end";
		document.getElementById("scroll-home").style.gridRow = "3 / 4";
		gameoverscreen();
	} else {
		document.getElementById("stat-container").style.opacity = "1";
		document.getElementById("scroll-home").style.marginBottom = "5%";
		document.getElementById("scroll-home").style.alignSelf = "end";
		document.getElementById("scroll-home").style.gridRow = "3 / 4";
		document.getElementById("welcome").style.marginTop = "0";
		document.getElementById("bootscreen").innerHTML = "<h1>Asterisk* is paused. You can resume the game by pressing P.</h1>";
		document.getElementById("lives").innerHTML = "Game Paused.";
		document.getElementById("points").innerHTML = "Press P to resume.";
		paused = true;
	}
}

function asterisk_page_leave() {
	on_page = false;
	noLoop();
}

///////////
//classes//
//////////

class Player {
	constructor(move, ytop, ymid, ybot, xback, xfront) {
		this.move = move;
		this.ytop = ytop;
		this.ymid = ymid;
		this.ybot = ybot;
		this.xback = xback;
		this.xfront = xfront;
	}

	display() {
		triangle(this.xback, this.ytop, this.xfront, this.ymid, this.xback, this.ybot);
	}

	update() {
		if (pl.ytop > screentop && up === true) {
			this.ytop -= this.move;
			this.ymid -= this.move;
			this.ybot -= this.move;
		}

		if (pl.ybot < screenbot && down === true) {
			this.ytop += this.move;
			this.ymid += this.move;
			this.ybot += this.move;
		}
	}
}

class Bullet {
	constructor(speed, x, y, w, h) {
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	display() {
		rect(this.x, this.y, this.w, this.h);
	}

	update() {
		this.x += this.speed;
	}
}

class Obstacle {
	constructor(speed, x, y, w, h) {
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	display() {
		rect(this.x, this.y, this.w, this.h);
	}

	update() {
		this.x -= this.speed;
	}
}

///////////
//visuals//
//////////

function bootscreen() {
	game_run = false;
	document.getElementById("bootscreen").style.display = "block";
	noLoop();
}

function gameoverscreen() {
	game_run = false;
	document.getElementById("bootscreen").innerHTML = "<h1>Game Over. Press Enter to play Again.</h1> <h1>Your Final Score:</h1>" + points;
	document.getElementById("bootscreen").style.display = "block";

	document.getElementById("lives").innerHTML = "GAMEOVER. PRESS ENTER TO PLAY AGAIN.";
	document.getElementById("points").innerHTML = "YOUR FINAL SCORE IS " + points + " POINTS.";
	noLoop();

	fetch('leaderboard.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			leader(data);
		})
		.catch(function (error) {
			console.log(error);
		});
}

function leader(scores) {
	for (var i = 0; i < scores.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = scores[i].user + ', ' + scores[i].score;
		document.getElementById("bootscreen").appendChild(li);
	}
}

//////////////////
//game mechanics//
/////////////////

function asterisk() {
	playerdraw();
	obstdraw();
	shootdraw();
}

function pause() {
	if (game_run) {
		if (!paused) {
			paused = true;
			document.getElementById("asterisk-canvas").style.visibility = "hidden";
			document.getElementById("bootscreen").innerHTML = "<h1>Asterisk* is paused. You can resume the game by pressing P.</h1>";
			document.getElementById("bootscreen").style.display = "block";
			document.getElementById("lives").innerHTML = "Game Paused.";
			document.getElementById("points").innerHTML = "Press P to resume.";
			noLoop();
		} else {
			paused = false;
			document.getElementById("lives").innerHTML = "Lives: " + lives;
			document.getElementById("points").innerHTML = "Points: " + points;
			document.getElementById("asterisk-canvas").style.visibility = "visible";
			document.getElementById("bootscreen").style.display = "none";
			loop();
		}
	}
}


function reset() {
	if (!game_run && on_page) {
		obstacles = [];
		bullets = [];
		pl = new Player(7, height / 2 - 20, height / 2, height / 2 + 20, 40, 80);
		for (var i = 0; i < obstlimit; i++) {
			size = random(40, 80);
			obstspeed = random(3, 7);
			obst = new Obstacle(obstspeed, random(width * 1.1, width * 2), random(screentop + 30, screenbot), size, size);
			obstacles.push(obst);
		}
		lives = 3;
		points = 0;
		document.getElementById("lives").innerHTML = "Lives: " + lives;
		document.getElementById("points").innerHTML = "Points: " + points;
		document.getElementById("bootscreen").style.display = "none";
		document.getElementById("welcome").style.transition = "all 1s";
		document.getElementById("welcome").style.marginTop = "0";
		document.getElementById("scroll-home").style.marginBottom = "5%";
		document.getElementById("scroll-home").style.alignSelf = "end";
		document.getElementById("scroll-home").style.gridRow = "3 / 4";
		document.getElementById("asterisk").style.gridTemplateRow = "1fr 1fr";
		document.getElementById("stat-container").style.opacity = "1";
		showboot = false;
		game_run = true;
		paused = false;
		loop();
	}
}

function playerdraw() {
	pl.update();
	pl.display();
}

function shootdraw() {
	for (var i = 0; i < bullets.length; i++) {
		bull = bullets[i];
		bull.update();
		bull.display();

		if (bull.x > width) {
			bullets.splice(i, 1);
		}
		for (var j = 0; j < obstacles.length; j++) {
			obst = obstacles[j];
			if (bull.x - bull.w / 2 >= obst.x - obst.w &&
				bull.y - bull.h / 2 <= obst.y + obst.h / 2 && bull.y + bull.h / 2 >= obst.y - obst.h / 2) {
				// hitsound.play();
				obstacles.splice(j, 1);
				bullets.splice(i, 1);
				size = random(40, 80);
				obstspeed = random(3, 7);
				obst = new Obstacle(obstspeed, random(width * 1.1, width * 2), random(screentop + 30, screenbot), size, size);
				obstacles.push(obst);
				points += 100;
				document.getElementById("points").innerHTML = "Points: " + points;
				break;
			}
		}
	}
}

function obstdraw() {
	for (var i = 0; i < obstacles.length; i++) {
		obst = obstacles[i];
		obst.update();
		obst.display();

		if (obst.x < 0) {
			obstacles.splice(i, 1);
			size = random(40, 80);
			obstspeed = random(3, 7);
			obst = new Obstacle(obstspeed, random(width * 1.1, width * 2), random(screentop + 30, screenbot), size, size);
			obstacles.push(obst);
		}
		if (obst.x - obst.w / 2 <= pl.xfront && obst.x + obst.w / 2 >= pl.xback && pl.ytop <= obst.y + obst.h / 2 && pl.ybot >= obst.y - obst.h / 2) {
			// damagesound.play();
			obstacles.splice(i, 1);
			size = random(40, 80);
			obstspeed = random(3, 7);
			obst = new Obstacle(obstspeed, random(width * 1.1, width * 2), random(screentop + 30, screenbot), size, size);
			obstacles.push(obst);
			lives--;
			document.getElementById("lives").innerHTML = "Lives: " + lives;
			break;
		}

	}
}

/////////////
//controls//
////////////

function keyPressed() {
	switch (keyCode) {
		default:
			break;
		case 87:
			up = true
			break;
		case 83:
			down = true;
			break;
		case 66:
			if (!paused) {
				bull = new Bullet(6, pl.xfront, pl.ymid, 10, 10);
				bullets.push(bull);
			}
			break;
		case ENTER:
			reset();
			break;
		case 80:
			pause();
			break;
	}

}

function keyReleased() {
	switch (keyCode) {
		default:
			break;
		case 87:
			up = false;
			break;
		case 83:
			down = false;
			break;
	}
}

/* End of Asterisk Code.------------------------------------------------------------*/