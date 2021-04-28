// PImage img;

// SoundFile shootsound;
// SoundFile hitsound;
// SoundFile damagesound;
// SoundFile startsound;
// SoundFile gameoversound;

// shootsound = new SoundFile(this, "shoot.wav");
// hitsound = new SoundFile(this, "asthit.wav");
// damagesound = new SoundFile(this, "playhit.wav");
// gameoversound = new SoundFile(this, "gameover.wav");
// startsound = new SoundFile(this, "start.wav");

// PFont font = loadFont("8BITWONDERNominal-48.vlw");
// font = loadFont('src/fonts/HelveticaNeue.otf');

// var oversound = true;

//////////////
//variables//
/////////////

// disableFriendlyErrors = true;

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
	screentop = 90;
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
		gameoverscreen();
	} else {
		asterisk();
	}
}

function page_enter() {
	setup();
	if (showboot) {
		bootscreen();
	} else if (lives <= 0) {
		gameoverscreen();
	} else {
		document.getElementById("bootscreen").innerHTML = "<h1>Asterisk* is paused. You can resume the game by pressing P.</h1>";
		document.getElementById("lives").innerHTML = "Lives: " + lives;
		document.getElementById("points").innerHTML = "Points: " + points;
		document.getElementById("paused").style.visibility = "visible";
		paused = true;
	}
}

function page_leave() {
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
	document.getElementById("bootscreen").style.display = "flex";
	noLoop();
}

function gameoverscreen() {
	game_run = false;
	document.getElementById("bootscreen").innerHTML = "<h1>Game Over. Press Enter to play Again.</h1> <h1>Your Final Score:</h1>" + points;
	document.getElementById("bootscreen").style.display = "flex";

	document.getElementById("lives").innerHTML = "GAMEOVER.";
	document.getElementById("points").innerHTML = "YOUR FINAL SCORE IS " + points + " POINTS. PRESS ENTER TO PLAY AGAIN.";
	noLoop();
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
			document.getElementById("paused").style.visibility = "visible";
			document.getElementById("asterisk-canvas").style.visibility = "hidden";
			document.getElementById("bootscreen").innerHTML = "<h1>Asterisk* is paused. You can resume the game by pressing P.</h1>";
			document.getElementById("bootscreen").style.display = "flex";
			noLoop();
		} else {
			paused = false;
			document.getElementById("paused").style.visibility = "hidden";
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
			obst = new Obstacle(obstspeed, random(width, width * 2), random(screentop, screenbot), size, size);
			obstacles.push(obst);
		}
		lives = 3;
		points = 0;
		document.getElementById("lives").innerHTML = "Lives: " + lives;
		document.getElementById("points").innerHTML = "Points: " + points;
		document.getElementById("bootscreen").style.display = "none";
		document.getElementById("stat-container").style.visibility = "visible";
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
				obst = new Obstacle(obstspeed, random(width, width * 2), random(screentop, screenbot), size, size);
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
			obst = new Obstacle(obstspeed, random(width, width * 2), random(screentop, screenbot), size, size);
			obstacles.push(obst);
		}
		if (obst.x - obst.w / 2 <= pl.xfront && obst.x + obst.w / 2 >= pl.xback && pl.ytop <= obst.y + obst.h / 2 && pl.ybot >= obst.y - obst.h / 2) {
			// damagesound.play();
			obstacles.splice(i, 1);
			size = random(40, 80);
			obstspeed = random(3, 7);
			obst = new Obstacle(obstspeed, random(width, width * 2), random(screenbot, screentop), size, size);
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