 
function sortItOut(array){
  return array.sort((a,b) => {
    let x = Math.floor(a);
    let y = Math.floor(b);
    if (!(x % 2) && (y % 2)) return 1;
    if ((x % 2) && !(y % 2)) return -1;
    if (x % 2) return x === y ? a - b : x - y;
    else return x === y ? b - a : y - x;
  });
}