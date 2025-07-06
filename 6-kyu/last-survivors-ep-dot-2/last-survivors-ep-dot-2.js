 
function lastSurvivors(str) {
  if (str.length <= 1) return str;
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = str;
  const counter = {};
  for (const char of newStr){
    counter[char] = (counter[char] || 0) + 1;
  }
  let noDupes = true;
  for (const char in counter){
    if (counter[char] > 1){
      noDupes = false;
      const newI = alpha.indexOf(char) === 25 ? 0 : alpha.indexOf(char) + 1;
      newStr = newStr.replace(char,alpha[newI]);
      newStr = newStr.replace(char,'');
    }
  }
  return noDupes ? newStr : lastSurvivors(newStr);
}