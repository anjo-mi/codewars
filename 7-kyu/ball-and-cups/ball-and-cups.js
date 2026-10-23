 
function cupAndBalls(b, arr){
  let curr = b;
  for (const [x,y] of arr){
    if (curr === x) curr = y;
    else if (curr === y) curr = x;
  }
  return curr;
};