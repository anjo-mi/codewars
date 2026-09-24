 
function startingMark(ht) {
  const slope = 122 / 31;
  const offset = 9.45 - 1.52 * slope;
  return Math.round((ht * slope + offset) * 100) / 100;
}