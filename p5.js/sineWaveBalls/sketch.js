
var numBalls;
var pixelInterval, angleInterval;
var angle, angleOffset;
var x, y;



function setup() {
    createCanvas(1280, 720);

    background(0);
    noStroke();
    fill(255);

    numBalls = 20;
    angleInterval = TWO_PI / numBalls;
    pixelInterval = width / numBalls;

    angleOffset = 0;


}

function draw() {
    background(0);

    for(var i = 0; i < numBalls; i++){

      angle = (i * angleInterval) + angleOffset;
      y = sin(angle) * 200 + (height / 2);

      x = i * pixelInterval;
      ellipse(x, y, 10, 10);
    }

    angleOffset -= 0.05;

}
