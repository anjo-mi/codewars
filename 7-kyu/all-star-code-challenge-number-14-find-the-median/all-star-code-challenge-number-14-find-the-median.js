 
function median(arr) {
  arr.sort((a,b) => a-b);
  const index = Math.floor(arr.length / 2);
  return arr.length % 2 === 1
          ? arr[index]
          : (arr[index] + arr[index - 1]) / 2;
}