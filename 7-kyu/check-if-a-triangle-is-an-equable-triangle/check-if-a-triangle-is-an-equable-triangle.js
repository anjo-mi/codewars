 
function equableTriangle(a,b,c) {
  // heron formula
  const semi = (a + b + c) / 2;
  const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
  return area === a + b + c;
}