 
const checkLetters = (word, bank) => {
  bank = new Set(bank);
  for (const char of word){
    if (!(bank.has(char))) return false;
  }
  return true;
}
​
function countFeelings(str, arr) {
  const inTheFeels = [];
  for (const word of arr){
    if (checkLetters(word,str)) inTheFeels.push(word);
  }
  return `${inTheFeels.length} ${inTheFeels.length === 1 ? 'feeling' : 'feelings'}.`
}