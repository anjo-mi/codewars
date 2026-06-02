 
function every(arr, int= 1, start = 0){
  const a = [];
  for (let i = start ; i < arr.length ; i += int) a.push(arr[i]);
  return a;
}