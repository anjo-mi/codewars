 
function shiftLeft(s, t, count = 0){
  let i = s.length - 1, j = t.length - 1;
  while (s[i] === t[j] && i >= 0 && j >= 0){
    i--;
    j--;
  }
  return i + 1 + j + 1;
}