function checkVowel(s,i) {
  const vowels = 'aeiou';
  return i >= 0 && 
         i < s.length && 
         vowels.includes(s[i].toLowerCase());
};