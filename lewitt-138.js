function horizontal() {
  strokeWeight(1);
  stroke(200);
  
  for (var x = 0; x <= width; x += 10 ) {
  line(0, x, 400, x)
	}
}

function round() {
  strokeWeight(1);
  stroke(200);
  
	var x = 180;
  var y = 160;
  //number of circles
  var circles = 40;
  //for each circle
  for (var total = 0; total < circles; total = total+1) {
    //circle diameter based on reverse index (circles-total)
    var diameter = (circles-total) * 15;
    //render the circle
    ellipse(x,y, diameter, diameter);   
  }
}

function vertical() {
  strokeWeight(1);
  stroke(200);
  
  for (var x = 0; x <= width; x += 10 ) {
  line(x, 0, x, 400)
	}
}
    
background(255);
round(70, 70); 
horizontal(0, 0); 
vertical(0, 0);
