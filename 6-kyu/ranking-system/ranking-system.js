 
function rankings(arr){
  const descending = arr.slice(0).sort((a,b) => b - a);
  const ranks = {};
  for (let i = 0 ; i < descending.length ; i++){
    const num = descending[i];
    ranks[num] = i + 1;
  }
  return arr.map((num,i) => ranks[num]);
}