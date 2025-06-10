 
function getMean(arr, x, y) {
  if (!x || !y) return -1;
  const front = arr.slice(0,x).reduce((a,el) => a+ el, 0) / x;
  const end = arr.slice(-y).reduce((a,el) => a+ el, 0) / y;
  console.log({x,y},arr.length)
  if (front <= 1 || y <= 1 || y > arr.length || x > arr.length) return -1;
  return (front + end) / 2;
}