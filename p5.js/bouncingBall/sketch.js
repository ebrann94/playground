
var xVelocity, yVelocity;
var x, y;
var radius


function setup() {
    createCanvas(1280, 720);
    background(0);
    noStroke();
    fill(255);
    
    xVelocity = random(7);
    yVelocity = random(7);
    
    radius = 10;
    
    x = random(width);
    y = random(height);
}

function draw() {
    background(0);
    
    ellipse(x, y, radius * 2, radius * 2);
    
    if(x < radius || x > width - radius){
        xVelocity *= -1;
    }
    if(y < radius || y > height - radius){
        yVelocity *= -1;
    }
    
    x += xVelocity;
    y += yVelocity;
}