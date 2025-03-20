function avgArray(arr) {
  const avgs = [];
  for ( let i = 0 ; i < arr[0].length ; i++){
    let sum = 0;
    for (let j = 0 ; j < arr.length ; j++){
      sum += arr[j][i] / arr.length;
    }
    avgs.push(sum);
  }
  return avgs;
}