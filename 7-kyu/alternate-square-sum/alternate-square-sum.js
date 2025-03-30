 
function alternateSqSum(arr){
  return arr.reduce((a,el,i) => a + (i%2 ? el**2 : el), 0)
}