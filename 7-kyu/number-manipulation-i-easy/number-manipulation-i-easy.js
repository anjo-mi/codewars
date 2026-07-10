 
function manipulate(num) {
  const length = num.toString().length
  const mid = Math.floor(length / 2);
  return parseInt(num.toString().slice(0,mid) + '0'.repeat(length - mid));
} 