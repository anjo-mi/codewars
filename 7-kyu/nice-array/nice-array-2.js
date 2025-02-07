 
function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}