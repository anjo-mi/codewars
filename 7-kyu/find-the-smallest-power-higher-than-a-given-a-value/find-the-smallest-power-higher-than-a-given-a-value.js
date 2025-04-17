 
function findNextPower(val, pow) {
  let nextRoot = +(Math.pow(val,1/pow).toFixed(3))
  nextRoot = Number.isInteger(nextRoot) ? nextRoot + 1 : Math.ceil(nextRoot)
  return nextRoot ** pow;
}