 
function getTheVowels(word) {
  const vowels = 'aeiou';
  let count = 0;
  for (const char of word){
    if (char === vowels[count % 5]) count++;
  }
  return count;
}
​