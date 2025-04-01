 
function cutCube(vol,n){
  return Number.isInteger(Math.cbrt(vol/n)) && Number.isInteger(Math.cbrt(n));
}