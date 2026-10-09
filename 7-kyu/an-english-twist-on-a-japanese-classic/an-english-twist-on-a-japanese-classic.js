 
function shiritori(words) {
  if (!words.length || words[0] === '') return [];
  let curr = words[0];
  for (var i = 1 ; i < words.length ; i++){
    const w = words[i];
    if (!w.length) break;
    const last = curr[curr.length - 1];
    const first = w[0];
    if (last !== first) break;
    else curr = w;
  }
  return words.slice(0,i);
}