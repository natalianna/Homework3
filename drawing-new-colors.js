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
  if (key == 'R') {
    fill(240,145, 250);
  } else if (key == 'G') {
    fill(199, 249, 169);
  } else if (key == 'B') {
    fill(199, 223, 250)
	}	else if (key == 'A') {
    fill(245, 249, 169)
	}	else if (key == 'D') {
    fill(205, 203, 169)
	}
}
