 
function balance(arr1, arr2){
  const c1 = Object.entries(arr1.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  },{})).sort((a,b) => a[1] - b[1]);
  
  const c2 = Object.entries(arr2.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  },{})).sort((a,b) => a[1] - b[1]);
  
  if (c1.length !== c2.length) return false;
  for (let i = 0 ; i< c1.length ; i++){
    if (c1[i][1] !== c2[i][1]) return false;
  }
  
  return true;
}