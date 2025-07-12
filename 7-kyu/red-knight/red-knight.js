 
function redKnight(n,p) {
  const caughtAt = p * 2;
  const change = Number.isInteger(p / 2);
  const color = (n && !change) || (!n && change) ? 'White' : 'Black';
  return [color, caughtAt];
}