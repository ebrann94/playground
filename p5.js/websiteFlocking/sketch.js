let particles = [];

function setup() {
    pixelDensity(displayDensity());
    createCanvas(720, 480);
    background(0);

    stroke(255);
    strokeWeight(5);

    for(let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);

    particles.forEach(p => {
        p.display();
        p.update();
    });
}

// Particle class definition
const Particle = function() {
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.pos = createVector(random(width), random(height));
}

Particle.prototype.display = function() {
    point(this.pos.x, this.pos.y);
}

Particle.prototype.update = function() {
    this.pos.add(this.vel);
    this.edges();
}

Particle.prototype.edges = function() {
    if (this.pos.x > width) {
        this.pos.x = 0;
    }
    if (this.pos.x < 0) {
        this.pos.y = width;
    }
    if (this.pos.y > height) {
        this.pos.y = 0;
    }
    if (this.pos.y < 0) {
        this.pos.y = height;
    }
}