 
function Robot() {
​
}
​
Robot.prototype.learnWord = function(word) {
  if (!word) return `I do not understand the input`;
  const alpha = new Set('\abcdefghijklmnopqrstuvwxyz'.split(''));
  const returnPhrases = 'thank you for teaching me i already know the word do not understand input';
  returnPhrases.split(' ').forEach(el => {
    this[el] = el;
  })
  const lowerWord = word.toLowerCase();
  for (const char of lowerWord){
    if (!alpha.has(char)) return `I do not understand the input`;
  }
  if (!this[lowerWord]){
    this[lowerWord] = lowerWord;
  }else {return `I already know the word ${word}`};
  return `Thank you for teaching me ${word}`
}