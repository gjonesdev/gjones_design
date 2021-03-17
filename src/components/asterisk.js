import React from "react";

function Asterisk(p) {

	// PImage img;

	// SoundFile shootsound;
	// SoundFile hitsound;
	// SoundFile damagesound;
	// SoundFile startsound;
	// SoundFile gameoversound;

	//////////////
	//variables//
	/////////////

	var obstacles = [];
	var bullets = [];

	var xback = 20;
	var xfront = xback + 20;

	var bullet = xfront;
	var lives = 3;

	var up = false;
	var down = false;
	var shoot = false;

	var points = 0;
	var showboot = true;
	var gameover = false;
	var oversound = true;

	var ytop;
	var ybot;
	var ymid;

	var boottop;
	var bootbot;
	var bootmid;

	var bootback;
	var bootfront;

	/////////
	//main//
	////////

	p.setup = function () {
		p.createCanvas(960, 540);

		// img = loadImage("screen.png");
		// img.resize(960, 540);
		p.background(0);

		// shootsound = new SoundFile(this, "shoot.wav");
		// hitsound = new SoundFile(this, "asthit.wav");
		// damagesound = new SoundFile(this, "playhit.wav");
		// gameoversound = new SoundFile(this, "gameover.wav");
		// startsound = new SoundFile(this, "start.wav");

		// PFont font = loadFont("8BITWONDERNominal-48.vlw");
		// textFont(font, 12);

		ytop = p.height / 2 - 10;
		ybot = p.height / 2 + 10;
		ymid = p.height / 2;

		boottop = p.height - 25;
		bootbot = p.height + 25;
		bootmid = p.height;

		bootback = p.width * 2.2;
		bootfront = bootback + 50;

		for (var i = 0; i < 10; i++) {
			var size = p.random(10, 30);
			var o = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
			obstacles.push(o);
		}
	}

	p.draw = function () {

		if (showboot) {
			p.push();
			p.bootscreen();
			p.pop();
		} else {
			p.push();
			p.translate(160, 100);
			p.asterisk();
			p.pop();
		}

		// image(img, 0, 0);
	}

	///////////
	//classes//
	//////////

	class Bullet {
		constructor(speed, x, y, w, h) {
			this.speed = speed;
			this.x = x
			this.y = y;
			this.w = w;
			this.h = h;
		}

		display() {
			p.rectMode(p.CENTER);
			p.fill("white");
			p.noStroke();
			p.rect(this.x, this.y, this.w, this.h);
		}

		update() {
			this.x += this.speed;
		}
	}

	class Obstacle {
		constructor(speed, x, y, w, h) {
			this.speed = speed;
			this.x = x
			this.y = y;
			this.w = w;
			this.h = h
		}

		display() {
			p.fill("white");
			p.noStroke();
			p.rect(this.x, this.y, this.w, this.h);
		}

		update() {
			this.x -= this.speed;
		}
	}

	///////////
	//visuals//
	//////////

	p.bootscreen = function () {
		p.translate(160, 100);
		p.background(0);

		p.textAlign(p.CENTER);
		p.fill("white");
		p.triangle(bootback, boottop, bootfront, bootmid, bootback, bootbot);
		p.text("PRESS ENTER TO PLAY ASTERISK'", p.width / 4, p.height / 3);
		p.text("W = Up", p.width / 4, p.height / 2.5);
		p.text("S = Down", p.width / 4, p.height / 2.3);
		p.text("Space = Shoot", p.width / 4, p.height / 2.1);

		if (p.keyPressed) {
			if (p.keyCode == p.ENTER) {
				// startsound.play();
				showboot = false;
			}
		}
	}

	p.player = function () {
		p.background(0);
		if (up && ytop > -15) {
			ytop = ytop -= 5;
			ybot = ybot -= 5;
			ymid = ymid -= 5;
		}

		if (down && ybot < p.height - 210) {
			ytop = ytop += 5;
			ybot = ybot += 5;
			ymid = ymid += 5;
		}

		p.triangle(xback, ytop, xfront, ymid, xback, ybot);
	}

	p.gameoverscreen = function () {
		p.background(0);
		p.fill("white");
		p.textAlign(p.CENTER);
		p.text("GAMEOVER", p.width / 4, p.height / 4);
		p.text("PRESS ENTER TO PLAY AGAIN", p.width / 4, p.height / 3);
	}



	//////////////////
	//game mechanics//
	/////////////////

	p.asterisk = function () {
		if (lives == 0) {
			gameover = true;
		} else {
			gameover = false;
		}
		if (gameover) {
			if (oversound == true) {
				// gameoversound.play();
				oversound = false;
			}
			p.gameoverscreen();
			if (p.keyPressed) {
				if (p.keyCode == p.ENTER) {
					oversound = true;
					// startsound.play();
					lives = 3;
					points = 0;
				}
			}
		} else {
			p.player();
			p.obstdraw();
			p.shootdraw();
			p.text(points, p.width / 3, p.height / 1.7);
			p.text("Lives: " + lives, p.width / 6, p.height / 1.7);
		}
	}

	p.shootdraw = function () {
		for (var i = 0; i < bullets.length; i++) {
			var b = bullets[i];
			b.update();
			b.display();

			if (b.x > p.width) {
				bullets.splice(i, 1);
			}
			for (var j = 0; j < obstacles.length; j++) {
				var o = obstacles[j];
				if (b.x + b.w > o.x && b.x < o.x + o.w &&
					b.y + b.h > o.y && b.y < o.y + o.h) {
					// hitsound.play();
					obstacles.splice(j, 1);
					bullets.splice(i, 1);
					var size = p.random(10, 30);
					var newObs = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
					obstacles.push(newObs);
					points += 100;
					break;
				}
				if (xfront > o.x && xfront < o.x + o.w &&
					ymid > o.y && ymid < o.y + o.h) {
					lives--;
					obstacles.splice(j, 1);
					var size = p.random(10, 30);
					var newObs = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
					obstacles.push(newObs);
				}
			}
		}
	}

	p.obstdraw = function () {
		for (var i = 0; i < obstacles.length; i++) {
			var o = obstacles[i];
			// print(o);
			o.update();
			o.display();

			if (o.x < 0) {
				obstacles.splice(i, 1);
				var size = p.random(10, 30);
				var newObs = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
				obstacles.push(newObs);
			}
			if (o.x < xfront && xback < o.x + o.w) {
				if ((ymid > o.y && ymid < o.y + o.h) ||
					(ybot + 10 > o.y && ybot + 10 < o.y + o.h) ||
					(ytop > o.y && ytop < o.y + o.h)) {
					// damagesound.play();
					obstacles.splice(i, 1);
					var size = p.random(10, 30);
					var newObs = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
					obstacles.push(newObs);
					lives--;
					break;
				}
			}
		}
	}

	/////////////
	//controls//
	////////////

	p.keyPressed = function () {
		switch (p.key) {
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
		switch (p.key) {
			case 'p':
				// shootsound.play();
				var newbull = new Bullet(6, xfront, ymid, 5, 5);
				bullets.push(newbull);
				break;
		}
	}

	p.keyReleased = function () {
		switch (p.key) {
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
}

export default Asterisk;