 
function findTheBall(start, swaps) {
  const swap = ([a,b]) => {
    if (start === a) start = b;
    else if(start === b) start = a;
  }
  swaps.forEach(swap)
  return start;
}