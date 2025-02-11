var isSquare = function(arr){
  return arr.length === 0 ? undefined : 
         arr.every(el => !(Math.sqrt(el).toString().includes('.')));
}