 
const closestSum = (ints, num) => {
  let minDist = Infinity;
  let bestSolution = [];
  for (let i = 0 ; i < ints.length - 2; i++){
    for (let j = i + 1 ; j < ints.length - 1 ; j++){
      for (let k = j + 1 ; k < ints.length ; k++){
        if ( Math.abs(num - (ints[i] + ints[j] + ints[k])) <= minDist ){
          minDist = Math.abs(num - (ints[i] + ints[j] + ints[k]))
          bestSolution = ints[i] + ints[j] + ints[k]
        }
      }
    }
  }
  return bestSolution;
}