 
function getSlope(p1, p2) {
  const [x,y] = [ p2[0] - p1[0] , p2[1] - p1[1] ]
  if (!x) return null;
  return y/x;
}