 
var findInArray = function(arr, it) {
  for (let i = 0 ; i < arr.length ; i++){
    if (it(arr[i],i)) return i;
  }
  return -1;
};