 
function sortArray(a1, a2) {
  const pos = {};
  for (let i = 0 ; i < a1.length ; i++){
    if (pos[a1[i][0]]) continue;
    pos[a1[i][0]] = i;
  }
  return a2.sort((a,b) => pos[a[0]] - pos[b[0]]);
}