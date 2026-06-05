 
function findLowestInt(k) {
  const stringIt = n => n.toString().split('').sort().join('');
  let x = 1;
  while (stringIt(k * x) !== stringIt((k+1) * x)) x++;
  return x;
}