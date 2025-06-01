 
function getCount(words) {
  const counter = {vowels:0,consonants:0};
  if (!words || typeof words !== 'string') return counter;
  const vowSet = new Set(['a','e','i','o','u']);
  const conSet = new Set(['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']);
  for (const char of words){
    if (vowSet.has(char.toLowerCase())) counter['vowels']++;
    if (conSet.has(char.toLowerCase())) counter['consonants']++;
  }
  return counter;
}