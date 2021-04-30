// function rain() {
// 	//clear out everything
// 	document.getElementById('front-row').innerHTML = "";
// 	document.getElementById('back-row').innerHtML = "";

// 	var increment = 0;
// 	var drops = "";
// 	var backDrops = "";

// 	while (increment < 100) {
// 		//couple random numbers to use for various randomizations
// 		//random number between 98 and 1
// 		var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
// 		//random number between 5 and 2
// 		var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
// 		//increment
// 		increment += randoFiver;
// 		//add in a new raindrop with various randomizations to certain CSS properties
// 		drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
// 		backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
// 	}

// 	document.getElementById('front-row').innerHTML = backDrops;
// 	document.getElementById('back-row').innerHTML = backDrops;
// }

// rain();

var particlearray = [];
var particlespeed;
var currparticle;

function setup() {
	var partCanvas = createCanvas(windowWidth, windowHeight);
	partCanvas.parent("background-canvas");
	background("#222222");
	fill("white");
	noStroke();
	textSize(24);
	rectMode(CENTER);
	for (var i = 0; i < 10; i++) {
		partsize = random(40, 80);
		partspeed = random(3, 7);
		currparticle = new particle(particlespeed, random(0, width), random(0, 0 - 20), partsize, partsize);
		particlearray.push(currparticle);
		console.log(currparticle);
	}
}

function draw() {
	particledraw();
	console.log(frameRate());
}

function page_enter() {
	setup();
}

///////////
//classes//
//////////

class particle {
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
		this.y += this.speed;
	}
}

function particledraw() {
	background("#222222");
	for (var i = 0; i < particlearray.length; i++) {
		currparticle = particlearray[i];
		currparticle.update();
		currparticle.display();

		if (currparticle.y < height) {
			particlearray.splice(i, 1);
			partsize = random(40, 80);
			particleespeed = random(3, 7);
			currparticle = new particle(particlespeed, random(0, width), random(0, 0 - 20), partsize, partsize);
			particlearray.push(currparticle);
		}
	}
}