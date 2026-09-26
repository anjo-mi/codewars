 
var func = function(item){
  return !(item % 2);
}
​
function map(arr, fn){
  if (typeof fn !== "function") return "given argument is not a function";
  if (arr.some(el => typeof +el !== "number" || !+el)) return "array should contain only numbers"
  const a = [];
  for (let i = 0 ; i < arr.length ; i++){
    a.push(fn(arr[i]));
  }
  return a;
}
​