 
function isTriangular(t) {
  let n = 1;
  let start = 0;
  while (start < t){
    start += n;
    n++;
  }
  return start === t;
}
​