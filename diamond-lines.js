for (var a = 0; a <= 170; a = a + 5) {
  var x1 = 170 - a;
  var y1 = a;
  var x2 = 170 + a;
  var y2 = 170 + a;
  line(x1, y1, x2, y1);
}

for (var a = 0; a <= 170; a = a + 5) {
  var x1 = a;
  var y1 = 170 + a;
  var x2 = 340 - a;
  var y2 = 170 + a;
  line(x1, y1, x2, y2);
}
