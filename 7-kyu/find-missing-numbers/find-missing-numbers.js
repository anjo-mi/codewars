 
function findMissingNumbers(arr){
  const missing = [];
  for (let i = arr[0] + 1 ; i < arr[arr.length - 1] ; i++){
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
}