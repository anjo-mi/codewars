 
function rotateMatrix(mx) {
  const rotate = [];
  for (let i = mx[0].length - 1 ; i >= 0 ; i--){
    const level = [];
    for (let j = 0 ; j < mx.length ; j++){
      level.push(mx[j][i])
    }
    rotate.push(level);
  }
  return rotate;
}