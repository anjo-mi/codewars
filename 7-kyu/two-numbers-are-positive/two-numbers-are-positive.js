 
function twoArePositive(a, b, c) {
  return [a,b,c].filter(num => num > 0).length === 2;
}