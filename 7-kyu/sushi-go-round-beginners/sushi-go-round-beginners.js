 
function totalBill(str) {
  let count = 0;
  for (const char of str){
    if (char === 'r') count++;
  }
  return Math.ceil(count * (4 / 5)) * 2;
}