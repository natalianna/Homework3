function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == '1') {
    fill(240,145, 250);
		diameter = 30;
  } else if (key == '2') {
    fill(199, 249, 169);
		diameter = 60;
  } else if (key == '3') {
		fill(252, 203, 169);
		diameter = 90;
	}
}
