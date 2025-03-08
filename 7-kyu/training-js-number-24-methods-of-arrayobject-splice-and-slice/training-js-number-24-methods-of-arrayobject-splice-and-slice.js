 
function threeInOne(arr){
  const sums = [];
  for (let i = 0 ; i <= arr.length - 3 ; i+=3){
    console.log(arr.slice(i, i + 3))
    sums.push(arr.slice(i, i + 3).reduce((a,el) => a+ el, 0))
  }
  return sums;
}