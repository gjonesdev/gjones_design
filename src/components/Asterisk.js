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

	p.disableFriendlyErrors = true;

	var obstacles = [];
	var bullets = [];
	var pl;
	var size;
	var obst;
	var bull;

	var lives = 3;

	var shoot = false;
	var up = false;
	var down = false;

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
		pl = new Player(5, p.height / 2 - 10, p.height / 2, p.height / 2 + 10, 40, 60);

		for (var i = 0; i < 10; i++) {
			size = p.random(10, 30);
			obst = new Obstacle(3, p.random(p.width, p.width * 2), p.random(45, p.height - 45), size, size);
			obstacles.push(obst);
		}
	}

	p.draw = function () {
		p.background(0);
		p.asterisk();
		// console.log(p.frameRate());
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
			if (pl.ytop > 30 && up === true) {
				this.ytop -= this.move;
				this.ymid -= this.move;
				this.ybot -= this.move;
			}

			if (pl.ybot < p.height - 30 && down === true) {
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
			if (p.keyCode === p.ENTER) {
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
		if (showboot) {
			p.bootscreen();
		} else {
			if (lives === 0) {
				gameover = true;
			} else {
				gameover = false;
			}
			if (gameover) {
				// if (oversound === true) {
				// 	gameoversound.play();
				// 	oversound = false;
				// }
				p.gameoverscreen();
				obstacles = [];
				bullets = [];
				if (p.keyPressed) {
					if (p.keyCode === p.ENTER) {
						// oversound = true;
						// startsound.play();
						for (var i = 0; i < 10; i++) {
							size = p.random(10, 30);
							obst = new Obstacle(3, p.random(p.width, p.width * 2), p.random(45, p.height - 45), size, size);
							obstacles.push(obst);
						}
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
	}

	p.playerdraw = function () {
		pl.update();
		pl.display();
	}

	p.shootdraw = function () {
		for (var i = 0; i < bullets.length; i++) {
			bull = bullets[i];
			bull.update();
			bull.display();

			if (bull.x > p.width) {
				bullets.splice(i, 1);
			}
			for (var j = 0; j < obstacles.length; j++) {
				obst = obstacles[j];
				if (bull.x - bull.w / 2 >= obst.x - obst.w &&
					bull.y - bull.h / 2 <= obst.y + obst.h / 2 && bull.y + bull.h / 2 >= obst.y - obst.h / 2) {
					// hitsound.play();
					obstacles.splice(j, 1);
					bullets.splice(i, 1);
					size = p.random(10, 30);
					obst = new Obstacle(3, p.random(p.width, p.width * 2), p.random(45, p.height - 45), size, size);
					obstacles.push(obst);
					points += 100;
					break;
				}
			}
		}
	}

	p.obstdraw = function () {
		for (var i = 0; i < obstacles.length; i++) {
			obst = obstacles[i];
			obst.update();
			obst.display();

			if (obst.x < 0) {
				obstacles.splice(i, 1);
				size = p.random(10, 30);
				obst = new Obstacle(3, p.random(p.width, p.width * 2), p.random(45, p.height - 45), size, size);
				obstacles.push(obst);
			}
			if (obst.x - obst.w / 2 <= pl.xfront && obst.x + obst.w / 2 >= pl.xback && pl.ytop <= obst.y + obst.h / 2 && pl.ybot >= obst.y - obst.h / 2) {
				// damagesound.play();
				obstacles.splice(i, 1);
				size = p.random(10, 30);
				obst = new Obstacle(3, p.random(p.width, p.width * 2), p.random(45, p.height - 45), size, size);
				obstacles.push(obst);
				lives--;
				break;
			}

		}
	}

	/////////////
	//controls//
	////////////

	p.keyPressed = function () {
		switch (p.key) {
			default:
				break;
			case 'w':
				// pl.move = -5;
				up = true
				break;
			case 's':
				// pl.move = 5;
				down = true;
				break;
			case 'b':
				// shootsound.play();
				bull = new Bullet(6, pl.xfront, pl.ymid, 5, 5);
				bullets.push(bull);
				break;
		}
	}

	p.keyReleased = function () {
		switch (p.key) {
			default:
				break;
			case 'w':
			case 'W':
				// pl.move = 0;
				up = false;
				break;
			case 's':
			case 'S':
				// pl.move = 0;
				down = false;
				break;
		}
	}
}

export default Asterisk;