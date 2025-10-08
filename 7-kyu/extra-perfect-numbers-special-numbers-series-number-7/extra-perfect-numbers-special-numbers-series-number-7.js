 
function extraPerfect(n){
  const exPerfs = [];
  for (let i = 1 ; i <= n ; i++){
    const bin = i.toString(2);
    if (bin[0] === '1' && bin[bin.length-1] === "1") exPerfs.push(i);
  }
  return exPerfs;
}