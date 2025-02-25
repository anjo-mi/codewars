function createMessage(firstWord) {
  let str = [firstWord];
  return function nextWord(word){
    if (arguments.length === 0){
      return str.join(' ');
    }
    str.push(word);
    return nextWord;
  }
  return nextWord;
}