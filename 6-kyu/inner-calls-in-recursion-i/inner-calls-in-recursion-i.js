 
function areContigElemenCloseEnough(arr, absError) {
  for (let i = 0 ; i < arr.length - 1 ; i++){
    if (Math.abs(arr[i] - arr[i+1]) > absError) return false;
  }
  return true;
}
​
function simulCloseTo2(arr, absError){
  if (areContigElemenCloseEnough(arr, absError)) return 0;
  const avg = arr.reduce((a,el) => a + el, 0) / arr.length;
  const map = arr.map(el => (el + avg) / avg);
  return 1 + simulCloseTo2(map,absError);
}
 