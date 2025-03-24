 
function oddOne(arr) {
  const oddball = arr.find(num => Math.abs(num%2)===1);
  return arr.indexOf(oddball);
}