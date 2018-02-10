function round() {
  strokeWeight(1);
  stroke(200);
  
	var x = 160;
  var y = 160;
  //number of circles
  var circles = 20;
  //for each circle
  for (var total = 0; total < circles; total = total+1) {
    //circle diameter based on reverse index (circles-total)
    var diameter = (circles-total) * 15;
    //render the circle
    ellipse(x,y, diameter, diameter);   
  }
}
  
background(255);
round(50, 50); 
