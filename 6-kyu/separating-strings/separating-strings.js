 
function sepStr(str) {
  const words = str.split(' ');
  const max = Math.max(...words.map(word => word.length));
  const res = Array(max).fill(null).map(el => Array(words.length));
  for (let i = 0 ; i < words.length ; i++){
    for (let j = 0 ; j < max ; j++){
      res[j][i] = words[i][j] || '';
    }
  }
  return res;
}