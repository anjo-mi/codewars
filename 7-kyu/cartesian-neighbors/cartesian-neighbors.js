 
function cartesianNeighbor(x, y){
  const arr = [];
  for (let i = x - 1 ; i <= x + 1 ; i++){
    for (let j = y - 1 ; j <= y + 1 ; j++){
      if (!(i === x && j === y)){
        arr.push([i,j]);
      }
    }
  }
  return arr;
}