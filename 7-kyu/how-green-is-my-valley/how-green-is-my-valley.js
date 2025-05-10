 
function makeValley(arr) {
  const left = [];
  const right = [];
  while (arr.length){
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    arr.splice(index,1);
    if (left.length === right.length){
      left.push(max);
    }else{
      right.unshift(max);
    }
  }
  return left.concat(right);
}