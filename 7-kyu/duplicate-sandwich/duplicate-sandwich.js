 
function duplicateSandwich(a) {
  let index = -1;
  let lastIndex = -1;
  for (let i = 0 ; i < a.length ; i++){
    if (a.slice(i+1).includes(a[i])){
      index = i;
      lastIndex = a.slice(i+1).indexOf(a[i]) + i;
    }
  }
  return a.slice(index+1, lastIndex + 1)
}