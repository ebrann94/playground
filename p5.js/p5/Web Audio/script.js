var diameter;
var centX, centY;


function setup() {
  // put setup code here
  createCanvas(500, 500);
  noStroke();
  fill(255);

  diameter = 50;

  centX = width / 2;
  centY = height / 2;
}

function draw() {
  // put drawing code here
  background(0);

  if( isMouseInCircle()  ){
  	diameter += 3;
  } else if ( diameter > 50 ){
  	diameter -= 3;
  }

  ellipse(centX, centY, diameter, diameter);

}

function isMouseInCircle() {

	//Find the distance from the centre of the circle using pythagoras
	var distanceFromCentre = sqrt(((mouseX - centX)**2) + ((mouseY - centY)**2));

	if ( distanceFromCentre < diameter / 2 && diameter < width ){
		return true;
	} else {
		return false;
	}
}