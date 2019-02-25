

var colSize;
var rowSize;
var amtCols = 20;
var amtRows = 20;

function setup() {
  // put setup code here
    createCanvas(1280, 720);
    background(0);
    stroke(64, 0, 255);
    
    colSize = width / amtCols;
    rowSize = height / amtRows;   
}

function draw() {
    
    for(var i = 0; i <= amtRows; i++){ 
        line(0, i * rowSize, width, i * rowSize);
    }
    for(var j = 0; j <= amtCols; j++){
        line(colSize * j, 0, colSize * j, height);
    }  
    
}