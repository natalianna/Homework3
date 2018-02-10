function vertical() {
  strokeWeight(1);
  stroke(200);
  
  for (var x = 0; x <= width; x += 10 ) {
  line(x, 20, x, 400)
	}
}
  
background(255);
vertical(0, 0); // draw patch at upper-left
