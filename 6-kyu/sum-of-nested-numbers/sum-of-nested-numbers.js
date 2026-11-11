 
function sumNestedNumbers(arr, step = 1) {
  let sum = 0;
  arr.forEach(el => {
    if (Array.isArray(el)) sum += sumNestedNumbers(el, step + 1);
    else sum += el**step;
  });
  return sum;
}