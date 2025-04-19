 
function arrayMash (a1, a2) {
  const a3 = [];
  for (let i = 0 ; i < a1.length ; i++){
    a3.push(a1[i], a2[i]);
  }
  return a3;
}