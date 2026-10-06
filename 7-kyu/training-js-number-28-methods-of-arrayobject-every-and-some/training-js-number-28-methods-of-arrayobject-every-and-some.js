 
function mirrorImage(arr){
  for (let i = 0 ; i < arr.length - 1 ; i++){
    const [curr, next] = [arr[i], arr[i+1]];
    if (curr === +(next.toString().split('').reverse().join(''))) return [curr,next];
  }
  return [-1,-1];
}