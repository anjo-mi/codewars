 
function groupIn10s() {
  const res = [];
  for (const el of [...arguments]){
    const place = Math.floor(el / 10);
    if (!(place in res)) res[place] = [];
    res[place].push(el);
  }
  for (let i = 0 ; i < res.length ; i++){
    if (!res[i]) res[i] = undefined;
    else res[i].sort((a,b) => a-b);
  }
  return res;
}