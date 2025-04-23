 
function findMagic(arr, i = 0){
  if (i > arr.length - 1) return -1;
  return i === arr[i]
          ? i
          : findMagic(arr, i+1);
}