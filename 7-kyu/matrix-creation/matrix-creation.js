 
function getMatrix(n) {
  const arr = [];
  for (let i = 0 ; i < n ; i++){
    const interior = [];
    for (let j = 0 ; j < n ; j++){
      if (i === j) interior.push(1);
      else{interior.push(0)}
    }
    arr.push(interior);
  }
  return arr;
} 