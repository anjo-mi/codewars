function secondSymbol(str, char) {
    let first = str.indexOf(char)
    return  first === -1 ? first : 
            str.slice(first + 1).includes(char) ? str.slice(first + 1).indexOf(char) + first + 1 : 
                                                   -1
  }

console.log(secondSymbol('Hello world!!!','l'), 3, 'Find the index of the second symbol "l" in the string');
console.log(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
console.log(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
console.log(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
console.log(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');