 
function smallestProduct(arr) {
  return Math.min(...arr.map(el => el.reduce((a,e) => a*e,1)));
}
 