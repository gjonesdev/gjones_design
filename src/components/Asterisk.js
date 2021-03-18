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
	var pl;

	var lives = 3;

	var shoot = false;

	var points = 0;
	var showboot = true;
	var gameover = false;
	var oversound = true;

	var font

	/////////
	//main//
	////////

	p.setup = function () {
		p.createCanvas(p.windowWidth / 1.2, p.windowHeight / 1.3);
		p.background(0);
		p.fill("white");
		p.noStroke();

		// shootsound = new SoundFile(this, "shoot.wav");
		// hitsound = new SoundFile(this, "asthit.wav");
		// damagesound = new SoundFile(this, "playhit.wav");
		// gameoversound = new SoundFile(this, "gameover.wav");
		// startsound = new SoundFile(this, "start.wav");

		// PFont font = loadFont("8BITWONDERNominal-48.vlw");
		// font = p.loadFont('src/fonts/HelveticaNeue.otf');
		p.textSize(24);
		p.rectMode(p.CENTER);
		pl = new Player(0, p.height / 2 - 10, p.height / 2, p.height / 2 + 10, 40, 60);

		for (var i = 0; i < 10; i++) {
			var size = p.random(10, 30);
			var o = new Obstacle(3, p.random(p.width, p.width * 2), p.random(0, p.height), size, size);
			obstacles.push(o);
		}
	}

	p.draw = function () {
		p.background(0);
		if (showboot) {
			p.bootscreen();
		} else {
			p.asterisk();
		}
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
			p.triangle(this.xback, this.ytop, this.xfront, this.ymid, this.xback, this.ybot);
		}

		update() {
			// if (pl.ytop < 30 && pl.ybot > p.height - 30) {
			this.ytop += this.move;
			this.ymid += this.move;
			this.ybot += this.move;
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
			p.rect(this.x, this.y, this.w, this.h);
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
		p.background(0);
		p.textAlign(p.CENTER);
		p.fill("white");
		// p.triangle(bootback, boottop, bootfront, bootmid, bootback, bootbot);
		p.text("PRESS ENTER TO PLAY ASTERISK*", p.width / 2, p.height / 2);
		p.text("W = Up", p.width / 2, p.height / 3.5);
		p.text("S = Down", p.width / 2, p.height / 3);
		p.text("B = Shoot", p.width / 2, p.height / 2.5);

		if (p.keyPressed) {
			if (p.keyCode == p.ENTER) {
				// startsound.play();
				showboot = false;
			}
		}
	}

	p.gameoverscreen = function () {
		p.background(0);
		p.fill("white");
		p.textAlign(p.CENTER);
		p.text("GAMEOVER", p.width / 2, p.height / 2.5);
		p.text("PRESS ENTER TO PLAY AGAIN", p.width / 2, p.height / 1.5);
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
			p.playerdraw();
			p.obstdraw();
			p.shootdraw();
			p.text(points, p.width / 1.5, p.height - 30);
			p.text("Lives: " + lives, p.width / 2.5, p.height - 30);
		}
	}

	p.playerdraw = function () {
		pl.update();
		pl.display();
		console.log(pl.move);
		console.log(pl);
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
				if (pl.xfront > o.x && pl.xfront < o.x + o.w &&
					pl.ymid > o.y && pl.ymid < o.y + o.h) {
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
			if (o.x < pl.xfront && pl.xback < o.x + o.w) {
				if ((pl.ymid > o.y && pl.ymid < o.y + o.h) ||
					(pl.ybot + 10 > o.y && pl.ybot + 10 < o.y + o.h) ||
					(pl.ytop > o.y && pl.ytop < o.y + o.h)) {
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
			case 'W':
			case 'w':
				pl.move = -5;
				break;
			case 's':
			case 'S':
				pl.move = 5;
				break;
		}
		switch (p.key) {
			case 'b':
			case 'B':
				// shootsound.play();
				var newbull = new Bullet(6, pl.xfront, pl.ymid, 5, 5);
				bullets.push(newbull);
				break;
		}
	}

	p.keyReleased = function () {
		switch (p.key) {
			case 'w':
			case 'W':
				pl.move = 0;
				break;
			case 's':
			case 'S':
				pl.move = 0;
				break;
		}
	}
}

export default Asterisk;