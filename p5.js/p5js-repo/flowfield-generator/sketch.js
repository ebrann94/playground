//Create 2 modules, UImodule and sketchModule

//1. Add gui elements in html file
//2. Add listeners to gui elements
//3. Change respective elements when gui changed

//4. Reset function
//5. pause and play buttons

//Controls: no of particles, flowfield intensity, grid size?. Color of particles

	
let inc = 0.01;
let scl = 10;
let cols, rows;

let play = false;

let zoff = 0;

let particles = [];

let flowfield = [];

function setup() {
	//Create the drawing canvas and put it inside the 'sketch-container' div
	var canvas = createCanvas(720, 480);
	canvas.parent('sketch-container');
	background(255);

	cols = floor(width / scl);
	rows = floor(height / scl);

	flowfield = new Array(cols * rows);

	for(let i = 0; i < 500; i++){
		particles[i] = new Particle();
	}
}

function draw() {
	let yoff = 0;
	for(let y = 0; y < rows; y++){
		let xoff = 0;
		for(let x = 0; x < cols; x++){
			let index = (x + y * cols);
			let r = noise(xoff, yoff) * TWO_PI * 4;
			let v = p5.Vector.fromAngle(r);
			v.setMag(1);
			flowfield[index] = v;
			xoff += inc;
			fill(r);
			//rect(x * scl, y * scl, scl, scl);
		}
		yoff += inc;

		//zoff += 0.0003;
	}

	for(let i = 0; i < particles.length; i++){
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].show();
	}

}

//Function constructor for a prticle object
function Particle() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.update = function (){
		this.edges();
		this.vel.add(this.acc);
		this.vel.limit(1);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.applyForce= function(force) {
		this.acc.add(force);
	}

	this.show = function() {
		stroke(0, 5);
		point(this.pos.x, this.pos.y)
	}

	this.edges = function() {
		if(this.pos.x > width) this.pos.x = 0;
		if(this.pos.x < 0) this.pos.x = width;
		if(this.pos.y > height) this.pos.y = 0;
		if(this.pos.y < 0) this.pos.y = height;
	}

	this.follow = function(vectors){
		let x = floor(this.pos.x / scl);
		let y = floor(this.pos.y / scl);
		let index = x + y * cols;
		let force = vectors[index];
		this.applyForce(force);

	}

}
xw