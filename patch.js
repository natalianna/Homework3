function natPatch(x, y) {
  fill(230, 230, 230);
  noStroke();
  rect(x, y, 100, 100);
  
// Grey Dots
  
// Set colors
  fill(10, 10, 10, 12);
  noStroke();

  // 1st Row
  ellipse(10, 10, 10, 10);
  ellipse(10, 30, 10, 10);
  ellipse(10, 50, 10, 10);
  ellipse(10, 70, 10, 10);
  ellipse(10, 90, 10, 10);

  // 2nd Row
  ellipse(30, 10, 10, 10);
  ellipse(30, 30, 10, 10);
  ellipse(30, 50, 10, 10);
  ellipse(30, 70, 10, 10);
  ellipse(30, 90, 10, 10);

  // 3rd Row
  ellipse(50, 10, 10, 10);
  ellipse(50, 30, 10, 10);
  ellipse(50, 50, 10, 10);
  ellipse(50, 70, 10, 10);
  ellipse(50, 90, 10, 10);

  // 4th Row
  ellipse(70, 10, 10, 10);
  ellipse(70, 30, 10, 10);
  ellipse(70, 50, 10, 10);
  ellipse(70, 70, 10, 10);
  ellipse(70, 90, 10, 10);
  
  // 5th Row
  ellipse(90, 10, 10, 10);
  ellipse(90, 30, 10, 10);
  ellipse(90, 50, 10, 10);
  ellipse(90, 70, 10, 10);
  ellipse(90, 90, 10, 10);

  // Color Dots
  
	// Set colors
  fill(108, 211, 210);
  noStroke();
  
  // 1st Row
  ellipse(10, 10, 10, 10);
	ellipse(10, 10, 10, 10);
  ellipse(10, 30, 10, 10);
  ellipse(10, 50, 10, 10);
  ellipse(10, 70, 10, 10);
  ellipse(10, 90, 10, 10);
  
  // 2nd Row
  ellipse(30, 30, 10, 10);

  //3rd Row
  ellipse(50, 50, 10, 10);
  
  //4th Row
  ellipse(70, 70, 10, 10);
  
  //5th Row
  ellipse(90, 10, 10, 10);
  ellipse(90, 30, 10, 10);
  ellipse(90, 50, 10, 10);
  ellipse(90, 70, 10, 10);
  ellipse(90, 90, 10, 10);
}
background(255);
natPatch(0, 0); // draw patch at upper-left
