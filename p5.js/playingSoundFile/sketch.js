let sound;

function preload() {
    sound = loadSound('./Jai Paul.mp3');
}

function setup() {
    createCanvas(500, 300);
    background(255, 0, 0);

    
}

function draw() {

}

function mousePressed() {
    if ( sound.isPlaying() ) { // .isPlaying() returns a boolean
      sound.stop();
      background(255,0,0);
    } else {
      sound.play();
      background(0,255,0);
    }
  }