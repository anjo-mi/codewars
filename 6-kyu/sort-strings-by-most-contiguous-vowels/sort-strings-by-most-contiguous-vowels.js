 
const countVowels = word => {
  const vowels = new Set('aeiou');
  let i = 0,
      j = 0,
      max = 0;
  while (j < word.length){
    while (i < word.length && !vowels.has(word[i].toLowerCase())) i++;
    j = i;
    while (j < word.length && vowels.has(word[j].toLowerCase())) j++;
    const sub = word.slice(i,j);
    if (sub.length > max) max = sub.length;
    i = j;
  }
  return max;
}
​
function sortStringsByVowels(strs){
  return strs.sort((a,b) => {
    return countVowels(b) - countVowels(a);
  })
}