 
function seaSick(x){
  let curr = x[0];
  let changes = 0;
  for (const char of x.split('')){
    if (char !== curr) changes++;
    curr = char;
  }
  return changes * 5 <= x.length ? 'No Problem' : 'Throw Up';
}