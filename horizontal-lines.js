function horizontal() {
  strokeWeight(1);
  stroke(200);
  
  for (var x = 0; x <= width; x += 10 ) {
  line(20, x, 400, x)
	}
}
  
background(255);
horizontal(0, 0); 
