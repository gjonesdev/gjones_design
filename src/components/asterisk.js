// PImage img;
// var showboot = true;
// SoundFile shootsound;
// SoundFile hitsound;
// SoundFile damagesound;
// SoundFile startsound;
// SoundFile gameoversound;

function setup() {
	size(960, 540);
	noCursor();
	// img = loadImage("screen.png");
	// img.resize(960, 540);
	background(0);

	// shootsound = new SoundFile(this, "shoot.wav");
	// hitsound = new SoundFile(this, "asthit.wav");
	// damagesound = new SoundFile(this, "playhit.wav");
	// gameoversound = new SoundFile(this, "gameover.wav");
	// startsound = new SoundFile(this, "start.wav");

	// PFont font = loadFont("8BITWONDERNominal-48.vlw");
	textFont(font, 12);

	obstacles = new ArrayList < Obstacle > ();
	for (var i = 0; i < 10; i++) {
		Obstacle o = new Obstacle();
		obstacles.add(o);
	}

	bullets = new ArrayList < Bullet > ();
}

function draw() {

	if (showboot) {
		pushMatrix();
		boot();
		popMatrix();
		if (keyPressed) {
			if (key == 10) {
				startsound.play();
				showboot = false;
			}
		}
	} else {
		pushMatrix();
		translate(160, 100);
		asterisk();
		popMatrix();
	}

	image(img, 0, 0);
}

////

var points = 0;
var gameover = false;
var oversound = true;

function asterisk() {
	if (lives == 0) {
		gameover = true;
	} else {
		gameover = false;
	}
	if (gameover) {
		if (oversound == true) {
			gameoversound.play();
			oversound = false;
		}
		gameover();
		if (keyPressed) {
			if (key == 10) {
				oversound = true;
				startsound.play();
				lives = 3;
				points = 0;
			}
		}
	} else {
		player();
		obstdraw();
		shoot();
		text(points, width / 3, height / 1.7);
		text("Lives: " + lives, width / 6, height / 1.7);
	}
}

/////


var boottop = height - 25;
var bootbot = height + 25;
var bootmid = height;

var bootback = width * 2.2;
var bootfront = bootback + 50;

function boot() {
	translate(160, 100);
	background(0);
	textAlign(CENTER);
	triangle(bootback, boottop, bootfront, bootmid, bootback, bootbot);
	text("PRESS ENTER TO PLAY ASTERISK'", width / 4, height / 3);
	text("W = Up", width / 4, height / 2.5);
	text("S = Down", width / 4, height / 2.3);
	text("Space = Shoot", width / 4, height / 2.1);
}

////

ArrayList < Bullet > bullets;

function shoot() {
	for (var i = 0; i < bullets.size(); i++) {
		Bullet b = bullets.get(i);
		b.update();
		b.display();

		if (b.x > width) {
			bullets.remove(i);
		}
		for (var j = 0; j < obstacles.size(); j++) {
			Obstacle o = obstacles.get(j);
			if (b.x + b.w > o.x && b.x < o.x + o.w &&
				b.y + b.h > o.y && b.y < o.y + o.h) {
				hitsound.play();
				obstacles.remove(j);
				bullets.remove(i);
				Obstacle newObs = new Obstacle();
				obstacles.add(newObs);
				points += 100;
				break;
			}
			if (xfront > o.x && xfront < o.x + o.w &&
				ymid > o.y && ymid < o.y + o.h) {
				lives--;
				obstacles.remove(j);
				Obstacle newObs = new Obstacle();
				obstacles.add(newObs);
			}
		}
	}
}

class Bullet {
	var speed = 6;
	var x, y;
	var w, h;

	Bullet() {
		x = xfront;
		y = ymid;
		w = 5;
		h = w;
	}

	function display() {
		rectMode(CENTER);
		fill(255);
		noStroke();
		rect(x, y, w, h);
	}

	function update() {
		x += speed;
	}
}

////

function gameover() {
	background(0);
	textAlign(CENTER);
	text("GAMEOVER", width / 4, height / 4);
	text("PRESS ENTER TO PLAY AGAIN", width / 4, height / 3);
}

////

ArrayList < Obstacle > obstacles;

function obstdraw() {
	for (var i = 0; i < obstacles.size(); i++) {
		Obstacle o = obstacles.get(i);
		o.update();
		o.display();


		println(o.x);
		println(xfront);

		if (o.x < 0) {
			obstacles.remove(i);
			Obstacle newObs = new Obstacle();
			obstacles.add(newObs);
		}
		if (o.x < xfront && xback < o.x + o.w) {
			if ((ymid > o.y && ymid < o.y + o.h) ||
				(ybot + 10 > o.y && ybot + 10 < o.y + o.h) ||
				(ytop > o.y && ytop < o.y + o.h)) {
				damagesound.play();
				obstacles.remove(i);
				Obstacle newObs = new Obstacle();
				obstacles.add(newObs);
				lives--;
				break;
			}
		}
	}
}

class Obstacle {
	var speed = 3;
	var x, y;
	var w, h;

	Obstacle() {
		x = random(width, width * 2);
		y = random(0, height);
		w = random(10, 30);
		h = w;
	}

	function display() {
		fill(255);
		noStroke();
		rect(x, y, w, h);
	}

	function update() {
		x -= speed;
	}
}

////

var ytop = height / 2 - 10;
var ybot = height / 2 + 10;
var ymid = height / 2;

var xback = 20;
var xfront = xback + 20;

var bullet = xfront;
var lives = 3;

var up = false;
var down = false;
var shoot = false;

function player() {
	background(0);
	if (up && ytop > -15) {
		ytop = ytop -= 5;
		ybot = ybot -= 5;
		ymid = ymid -= 5;
	}

	if (down && ybot < height - 210) {
		ytop = ytop += 5;
		ybot = ybot += 5;
		ymid = ymid += 5;
	}

	triangle(xback, ytop, xfront, ymid, xback, ybot);
}


function keyPressed() {
	switch (key) {
		case 1:
		case 'W':
		case 'w':
			up = true;
			break;
		case 's':
		case 'S':
			down = true;
			break;
	}
	switch (key) {
		case ' ':
			shootsound.play();
			Bullet newbull = new Bullet();
			bullets.add(newbull);
			break;
	}
}

function keyReleased() {
	switch (key) {
		case 'w':
		case 'W':
			up = false;
			break;
		case 's':
		case 'S':
			down = false;
			break;
	}
}