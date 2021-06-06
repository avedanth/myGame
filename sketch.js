var welcome1; var bg;


function preload() {
 bg = loadImage("welcome.jpg")
 
}

function setup() {
  welcome1 = new Welcome();
  welcome1.display();
}

function draw() {
createCanvas(600,600);
background(bg); 
  }

