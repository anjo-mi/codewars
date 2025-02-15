 
function allNonConsecutive (arr) {
  const notInOrder = [];
  for (let i = 1 ; i < arr.length ; i++){
    if (arr[i] !== arr[i-1] + 1){
      notInOrder.push({
        i,
        n: arr[i]
      });
    }
  }
  return notInOrder;
}