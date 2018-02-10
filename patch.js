function natPatch(x, y) {
  fill(230, 230, 230);
  noStroke();
  rect(x, y, 100, 100);
  
// Grey Dots
  
// Set colors
  fill(10, 10, 10, 12);
  noStroke();

  var a = 10;
  
  // 1st Row
  ellipse(a, a, a, 10);
  ellipse(a, a*3, a, 10);
  ellipse(a, a*5, a, 10);
  ellipse(a, a*7, a, 10);
  ellipse(a, a*9, a, 10);

  // 2nd Row
  ellipse(a*3, 10, a, 10);
  ellipse(a*3, 30, a, 10);
  ellipse(a*3, 50, a, 10);
  ellipse(a*3, 70, a, 10);
  ellipse(a*3, 90, a, 10);

  // 3rd Row
  ellipse(a*5, 10, 10, 10);
  ellipse(a*5, 30, 10, 10);
  ellipse(a*5, 50, 10, 10);
  ellipse(a*5, 70, 10, 10);
  ellipse(a*5, 90, 10, 10);

  // 4th Row
  ellipse(a*7, 10, a, 10);
  ellipse(a*7, 30, a, 10);
  ellipse(a*7, 50, a, 10);
  ellipse(a*7, 70, a, 10);
  ellipse(a*7, 90, a, 10);
  
  // 5th Row
  ellipse(a*9, 10, a, 10);
  ellipse(a*9, 30, a, 10);
  ellipse(a*9, 50, a, 10);
  ellipse(a*9, 70, a, 10);
  ellipse(a*9, 90, a, 10);

  // Color Dots
  
	// Set colors
  fill(108, 211, 210);
  noStroke();
  
  // 1st Row
  ellipse(a, 10, a, 10);
	ellipse(a, 10, a, 10);
  ellipse(a, 30, a, 10);
  ellipse(a, 50, a, 10);
  ellipse(a, 70, a, 10);
  ellipse(a, 90, a, 10);
  
  // 2nd Row
  ellipse(a*3, 30, 10, 10);

  //3rd Row
  ellipse(a*5, 50, 10, 10);
  
  //4th Row
  ellipse(a*7, 70, 10, 10);
  
  //5th Row
  ellipse(a*9, 10, 10, 10);
  ellipse(a*9, 30, 10, 10);
  ellipse(a*9, 50, 10, 10);
  ellipse(a*9, 70, 10, 10);
  ellipse(a*9, 90, 10, 10);

}
background(255);
natPatch(0, 0); // draw patch at upper-left
