
function cone() {
  strokeWeight(1);
  stroke(100);
  
  for (var x = 0; x <= width; x += 10) {
  line(160, 0, x + 10, 300)
  }
}
  
background(255);
cone(width-100, height-100); //
