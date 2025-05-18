 
function solve(s) {
  let maxDiff = -Infinity;
  let maxDiffChar = null;
  for (const char of s){
    const diff = s.lastIndexOf(char) - s.indexOf(char);
    if (diff > maxDiff){
      maxDiff = diff;
      maxDiffChar = char;
    }else if(diff === maxDiff && char.charCodeAt(0) < maxDiffChar.charCodeAt(0)){
      maxDiff = diff;
      maxDiffChar = char;
    }
    if (!maxDiffChar){
      maxDiffChar = char;
    }
  }
  return maxDiffChar;
}