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
var obst;
var bull;

var lives;

var shoot = false;
var up = false;
var down = false;

var points;
var showboot;

// var font;

/////////
//main//
////////

function setup() {
	var gameCanvas = createCanvas(windowWidth / 1.2, windowHeight / 1.3);
	gameCanvas.parent("asterisk");
	background(0);
	fill("white");
	noStroke();
	showboot = true;
	textSize(24);
	rectMode(CENTER);
}

function draw() {
	background(0);
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
	loop();
}

function page_leave() {
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
		if (pl.ytop > 30 && up === true) {
			this.ytop -= this.move;
			this.ymid -= this.move;
			this.ybot -= this.move;
		}

		if (pl.ybot < height - 30 && down === true) {
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
	background(0);
	textAlign(CENTER);
	fill("white");
	text("PRESS ENTER TO PLAY ASTERISK*", width / 2, height / 2);
	text("W = Up", width / 2, height / 3.5);
	text("S = Down", width / 2, height / 3);
	text("B = Shoot", width / 2, height / 2.5);
}

function gameoverscreen() {
	game_run = false;
	background(0);
	fill("white");
	textAlign(CENTER);
	text("GAMEOVER", width / 2, height / 2.5);
	text("PRESS ENTER TO PLAY AGAIN", width / 2, height / 1.5);
}

//////////////////
//game mechanics//
/////////////////

function asterisk() {
	playerdraw();
	obstdraw();
	shootdraw();
	text(points, width / 1.5, height - 30);
	text("Lives: " + lives, width / 2.5, height - 30);
}


function reset() {
	obstacles = [];
	bullets = [];
	pl = new Player(5, height / 2 - 10, height / 2, height / 2 + 10, 40, 60);
	for (var i = 0; i < 10; i++) {
		size = random(10, 30);
		obst = new Obstacle(3, random(width, width * 2), random(45, height - 45), size, size);
		obstacles.push(obst);
	}
	lives = 3;
	points = 0;
	showboot = false;
	game_run = true;
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
				size = random(10, 30);
				obst = new Obstacle(3, random(width, width * 2), random(45, height - 45), size, size);
				obstacles.push(obst);
				points += 100;
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
			size = random(10, 30);
			obst = new Obstacle(3, random(width, width * 2), random(45, height - 45), size, size);
			obstacles.push(obst);
		}
		if (obst.x - obst.w / 2 <= pl.xfront && obst.x + obst.w / 2 >= pl.xback && pl.ytop <= obst.y + obst.h / 2 && pl.ybot >= obst.y - obst.h / 2) {
			// damagesound.play();
			obstacles.splice(i, 1);
			size = random(10, 30);
			obst = new Obstacle(3, random(width, width * 2), random(45, height - 45), size, size);
			obstacles.push(obst);
			lives--;
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
			// shootsound.play();
			bull = new Bullet(6, pl.xfront, pl.ymid, 5, 5);
			bullets.push(bull);
			break;
		case ENTER:
			if (game_run === false) {
				reset();
				break;
			}
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