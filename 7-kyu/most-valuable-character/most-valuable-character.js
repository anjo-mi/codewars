 
function solve(s) {
  const diff = {};
  for (let i = 0 ; i < s.length ; i++){
    if (!diff[s[i]]){
      diff[s[i]] = {first: i, last:null};
    }
    else if(diff[s[i]]){
      diff[s[i]].last = i;
    } 
  }
  let maxDiff = -Infinity;
  let maxDiffChar = null;
  for (const char in diff){
    const c = diff[char]
    if ((c.first && c.last) || (c.first === 0 && c.last)){
      if (c.last - c.first > maxDiff){
        maxDiff = c.last - c.first;
        maxDiffChar = char;
      }else if (c.last - c.first === maxDiff && char.charCodeAt(0) < maxDiffChar.charCodeAt(0)){
        maxDiff = c.last - c.first;
        maxDiffChar = char;
      }
    }
    if (!maxDiffChar){
      maxDiffChar = char;
    }
  }
  return maxDiffChar;
}