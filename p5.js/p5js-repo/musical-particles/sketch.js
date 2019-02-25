//sketch.js
let particles = [];

function setup() {
	var canvas = createCanvas(800, 400);
	canvas.parent('sketch-container');

	for(let i = 0; i < 500; i++){
		particles[i] = new Particle();
	}
}

function draw() {
	background(50);

	for(let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}
}

//Constructor for Particle
function Particle() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.gravity = createVector(0, 1);
	this.push = createVector(random(-0.01, 0.01), -3);

	this.mass = random(1, 6);

	this.update = function (){
		this.edges();

		if(this.pos.y < height - 1){
			this.acc.add(this.gravity);
		}

		if( keyIsPressed && keyCode === UP_ARROW ){
			this.acc.add(this.push);
		} else if (this.vel.x < 0){
			this.acc.x = 0.001;
		} else if (this.vel.x > 0){
			this.acc.x = - 0.001
		}
		this.acc.mult(this.mass);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {
		stroke(255);
		strokeWeight(1);
		point(this.pos.x, this.pos.y)
	}

	this.edges = function() {
		if(this.pos.x < 0 || this.pos.x > width){
			this.vel.x *= -1;
		}
		if(this.pos.y > height){
			this.pos.y = height - 1;
		}
	}
}