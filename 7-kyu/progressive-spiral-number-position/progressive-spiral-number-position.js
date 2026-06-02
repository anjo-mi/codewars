 
function layers(n){
  let x = 1;
  while ((2 * x -1) * (2 * x -1) < n) x++;
  return x;
}