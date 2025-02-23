 
function firstNonRepeated(s) {
  const occurs = s.split('').reduce((a,char) => {
    a[`${!isNaN(char) ? '+' + char : char}`] = (a[`${!isNaN(char) ? '+' + char : char}`] || 0) + 1;
    return a;
  }, {})
  for (const char in occurs){
    if (occurs[char] === 1){
      return char.length === 1 ? char : char[1];
    }
  }
  return null;
}