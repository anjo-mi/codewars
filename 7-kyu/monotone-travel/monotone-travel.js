 
var isMonotone = function(arr){
  console.log(arr)
  return arr === [] ? 0 : arr.every((el,i) => i === arr.length - 1 || el <= arr[i + 1])
}