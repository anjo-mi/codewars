 
function arr2bin(arr){
  return arr.every(el => Number.isInteger(el)) 
          ? (arr.reduce((a,el) => a + el, 0)).toString(2) 
          : false;
}